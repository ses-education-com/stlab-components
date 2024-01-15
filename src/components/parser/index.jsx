import React from "react";
import ReactDOM from "react-dom";
import uniquid from "uniquid";
import "./parser.scss";
import PropTypes from "prop-types";
import getQuestionComponent from "./question-types";
import Spinner from "./Spinner";
// import { Button } from "@material-ui/core";

/**
 * # HTML with Questions parser
 * Converts HTML that has [data-question-id] within it into HTML Element,
 * replacing [data-question-id] elements with corresponding Question components.
 */
class Parser extends React.Component {
  state = {
    container: null,
    /**
     * Array of all question elements within text in the same order they are in text.
     * Elements can be single questions/quizes or a tables with question fields inside.
     *
     * each element consists of:
     * {
     *  id: int - id of the question in database
     *  type: string - field|quiz|table... whatever else types ther will be
     *  element: Element object, reference to question DOM element
     *  blocked: bool - whether it is blocked or no. If a question has no value, all elements after it are blocked (whether they have values or not)
     *  value: any - current state of the question.
     * }
     *
     */
    questions: [],
  };

  _Ref = React.createRef();

  _ContainerRef = null;

  questionsProgress = {};

  async componentDidMount() {
    this.initContainer();
  }

  async componentDidUpdate(prevProps) {
    console.debug("componentDidUpdate called with", prevProps);
    if (prevProps.html !== this.props.html) {
      console.debug("componentDidUpdate - init container!");
      this.initContainer();
    }
  }

  initContainer() {
    const container = null; //document.createElement("div");
    const answersChanged = [];
    this.setState({ container, answersChanged }, () => this.parseText());
  }

  /**
   * recieves answers from all question components
   * stacks them in an object {id:value}
   * @param {*} q_id
   * @param {*} value
   */
  onQuestionChange = async (q_id, value) => {
    // cast to int
    q_id = parseInt(q_id);

    // create the answer object
    const answersObj = { [q_id]: value };
    let { questions } = this.state;
    console.debug("onQuestionChange questions: ", questions);

    if (typeof this.props.onQuestionChange !== "function") {
      console.debug("No onQuestionChange callback passed to Parser");
      return false;
    }

    // get response from server
    const answers = await this.props.onQuestionChange(answersObj);
    console.log("Parser - answers: ", answers);
    if (!answers || typeof answers !== "object") {
      console.error(
        "onQuestionChange: wrong data type received from server:",
        answers
      );
      return false;
    }

    // find current question index
    const index = questions.findIndex((q) => q.id === q_id);
    if (index < 0) {
      console.error(
        "onQuestionChange: question not found in page questions list:",
        q_id
      );
      return false;
    }

    // get current question data
    let question = questions[index];

    if (typeof question !== "object") {
      console.error(
        "onQuestionChange: wrong question type for question",
        q_id,
        "in question list:",
        question
      );
      return false;
    }

    // mix in the updated values
    question = { ...question, ...answers[q_id] };

    // add 'answered' flag
    question.answered = this.questionIsAnswered(question);

    questions[index] = question;

    console.debug("onQuestionChange questions updated to: \n", questions);

    // if answered - unblock next
    if (question.answered) {
      this.unblockQuestion(index + 1, questions);

      // update questions in state
      this.setState({ questions });

      return answers;
    }

    // otherwise - block next questions
    console.debug("Blocking from question index:", index);
    this.blockNextQuestions(index, questions);

    // update questions in state
    this.setState({ questions });

    return answers;

    // if (this.answerIsRight(q_id, answers)) {
    //   // this.unblockNextQuestion(this.state.questions, index);
    //   this.unblockNextQuestion(q_id);
    //   return answers;
    // }

    // block next

    // const index = questions.findIndex((q) => q.id === q_id);
    // console.debug('Blocking from question index:', index);
    // this.blockNextQuestions(index,  questions)
    // return answers;
  };

  async onTableQuestionChange(innerQuestionId, value, tableQuestionId) {
    // console.debug(
    //   "onTableQuestionChange called with: ",
    //   innerQuestionId,
    //   value,
    //   tableQuestionId
    // );

    // find question in state
    const { questions } = this.state;
    // console.debug("onTableQuestionChange questions: ", questions);

    if (!Array.isArray(questions)) return false;

    // find the actual table-type question by checking questions' value for key equal to passed id
    // let result = questions.find( q =>  q.value && typeof q.value === "object" && Object.keys(q.value).includes(innerQuestionId) ) ;
    let result = questions.find((q) => q.id === tableQuestionId);

    // console.debug("onTableQuestionChange question: ", result);

    if (!result) return false;

    // get current table value
    let currentValue = result.value || {};
    // const { questionsNumber } = result;
    // console.debug(
    //   'onTableQuestionChange currentValue: ',
    //   JSON.stringify(currentValue)
    // );

    // get update from server
    const updatedAnswer =
      typeof this.props.onQuestionChange === "function"
        ? // create and pass "answer object" - {id:value}
          await this.props.onQuestionChange({ [innerQuestionId]: value })
        : false;

    // if something's wrong, (no updated answer or updated answer does not include answer to passed question) - return false
    if (!updatedAnswer || !updatedAnswer[innerQuestionId]) {
      // console.debug("onTableQuestionChange: false returned from server")
      return false;
    }

    // updatedAnswer comes from server with answers to ALL questions on page!
    // So we need to update only the question we are working with
    currentValue = {
      ...currentValue,
      [innerQuestionId]: updatedAnswer[innerQuestionId],
    };

    // update question value.
    // NB: this is actually mutating state, this is bad coding!
    // TODO: Should be probably refactored to hold functional objects within state.questions[] array.
    // TODO: each object should hold its own answers and has own onChange callback.
    result.value = currentValue;

    // console.debug('onTableQuestionChange: updated value: ', result.value);

    // update 'answered'
    const previousAnswered = result.answered;
    result.answered = this.questionIsAnswered(result);

    console.debug(
      "onTableQuestionChange questions updated to:",
      this.state.questions
    );

    const index = this.state.questions.findIndex((q) => q.id === result.id);

    console.debug("onTableQuestionChange current index: ", index);

    // if (result.answered) {
    //   console.debug(
    //     'onTableQuestionChange is answered, unblocking next to ',
    //     index
    //   );
    //   this.unblockQuestion(index + 1, this.state.questions);
    //   return updatedAnswer;
    // }

    console.debug(
      "onTableQuestionChange prevAnswered/answered: ",
      previousAnswered,
      result.answered
    );

    // answered - block next
    if (previousAnswered !== result.answered && result.answered) {
      console.debug(
        "onTableQuestionChange was answered, unblocking everything next to ",
        index
      );
      this.unblockNextQuestion(index, this.state.questions);
      // return updatedAnswer;
    }

    // not answered - block next
    if (previousAnswered !== result.answered && !result.answered) {
      console.debug(
        "onTableQuestionChange NOT answered, blocking everything next to ",
        index
      );
      this.blockNextQuestions(index, this.state.questions);
      // return updatedAnswer;
    }

    console.debug("onTableQuestionChange no change to next questions");

    return updatedAnswer;
  }

  answerIsRight = (id, answers) => {
    if (!id || !answers) return false;
    const answer = answers[id];
    return !answer.errorText;
  };

  onTableFieldChange = (ev) => {};

  createPlaceholder = (text) => {
    const placeholder = document.createElement("span");
    placeholder.classList.add("question-placeholder");
    placeholder.innerText = text;
    return placeholder;
  };

  /**
   * # parseText()
   * Parses html string by converting it into DOM element and replacing all specially marked elements with actual question components
   */
  parseText = async () => {
    let {
      // the html to parse - must be passed via props
      html,
      // onPageStatusChange,
      questions: propsQuestions,
      // array of all questions of given experiment - must be passed via props
      // allQuestions = []
    } = this.props;

    // just in case it's empty...
    // TODO: validate the object
    propsQuestions = propsQuestions || {};

    // reset progress
    this.questionsProgress = {};

    /**
     * The array will hold the rendering errors.
     * If not empty by the end of function's work,
     * should be sent to props.onErrors handler.
     */
    let errorReport = [];

    /**
     * callback that adds an error to error report.
     * @param {*} err object of {errorText, errorData }
     * @returns
     */
    const addToErrorReport = (err) => (errorReport = [...errorReport, err]);

    // TODO: handle case when html or allQuestions are empty
    // render an error message and send report to API

    // put html into a newly created div
    const container = document.createElement("div");
    container.innerHTML = html;

    // STEP 1 - find all tables with questions in it and mark them with data-is-question
    // look for tables in DOM
    const tables = container.querySelectorAll("table");

    tables.forEach((table) => {
      // mark table with data-is-question="table" attribute
      table.setAttribute("data-is-question", "table");

      // for each simple question within table, mark it with data-table-question-item attribute
      const tableQuestions = table.querySelectorAll("[data-question-id]");
      tableQuestions.forEach((q) =>
        q.setAttribute("data-table-question-item", true)
      );
    });

    // STEP 2: look for questions that are not within tables and mark them with data-is-question
    const questionsNotInTables = container.querySelectorAll(
      "[data-question-id]:not([data-table-question-item])"
    );

    console.debug(
      "parseText questionsNotInTables count:",
      questionsNotInTables.length
    );

    questionsNotInTables.forEach((q) => {
      // mark them all with data-is-question with their type or "field" as default
      // q.setAttribute('data-is-question',  q.dataset['questionType'] || 'field');
      q.setAttribute("data-is-question", "field");
    });

    // STEP 2.1: look for quizes (backwards compatibility. Quiz id is now data-question-id )
    // and mark them with data-is-question
    const quizes = container.querySelectorAll(
      '[data-quiz-id],[data-question-type="quiz"]'
    );
    quizes.forEach((q) => q.setAttribute("data-is-question", "quiz"));

    // STEP 3: look for all data-is-question created in steps 1 and 2
    const markedQuestions = container.querySelectorAll("[data-is-question]");

    // this array stores all question units in the same order they are in the HTML.
    let questions = [];

    // parse each question
    questions = await this.parseEachQuestion(
      markedQuestions,
      // errorReport,
      addToErrorReport, // pass callback to register errors
      questions,
      propsQuestions
    );

    console.debug(
      "parseText : this.questionsProgress after parsing:",
      this.questionsProgress
    );

    // check if there were errors
    if (errorReport.length > 0) {
      console.error("parseText errorReport:\n", errorReport);
      // handle error report: pass it to onErrors handler
      if (typeof this.props.onErrors === "function") {
        this.props.onErrors(errorReport);
      }
    } else {
      console.debug("parseText: no errors on parsing");
    }

    // block all questions
    this.blockNextQuestions(-1, questions);

    // unblock first question (and recursively all untill non-answered or answered wrong question is found)
    this.unblockQuestion(0, questions);

    console.debug(
      "parseText : questions after parsing everything:\n",
      questions
    );

    // store the container and questions to state
    this.setState({ container, questions });
  };

  /**
   * Reqplaces element in HTML with corresponding question component and fills it with data
   * @param {*} el element to be replaced
   * @param {*} type type of the component
   * @param {*} reportError callback to report errors
   * @param {*} onChange component onChange handler
   * @param {*} propsQuestions list of questions
   * @returns
   */
  replaceQuestionElement = async (
    el,
    type,
    // errorReport,
    reportError,
    onChange,
    propsQuestions = {}
  ) => {
    // const { answersChanged } = this.state;
    // const { allQuestions, fetchAnswerData } = this.props;

    let { allQuestions } = this.props;
    // check whether if it's an array
    if (!Array.isArray(allQuestions)) {
      el.replaceWith(this.createPlaceholder("--questions source not passed--"));
      return false;
    }

    let errorText, errorData, value;
    let id = el.dataset["questionId"] || el.dataset["quizId"];

    // no id found within element data - report error
    if (!id) {
      // store the error in errorReport
      errorText = `replaceQuestionElement: marked question id not found. `;
      errorData = { id, element: el.outerHTML || JSON.stringify(el) };
      // errorReport = [...errorReport, { errorText, errorData }];
      reportError({ errorText, errorData });

      console.error(
        "replaceQuestionElement: marked question id not found. Element:",
        el
      );

      el.replaceWith(this.createPlaceholder("--unknown question--"));
      return false;
    }

    // cast to integer for precise comparison
    id = parseInt(id);

    // get question data from server-prepared array
    // const thisQuestion = questionsProgress.find((q) => q.id === id) || {id, value: null} ;
    // this.questionsProgress[id] = propsQuestions[id] || {};
    //const value = this.questionsProgress[id] || '';
    // let { value, errorText } = this.questionsProgress[id] || {};

    ({ value, errorText } = propsQuestions[id] || {});

    // fetch question data
    const questionData = allQuestions.find((q) => q.question_id === id);

    // no question data - report error
    if (!questionData) {
      // store the error in errorReport
      errorText = `replaceQuestionElement: question not found.`;
      errorData = { id, element: el.outerHTML || JSON.stringify(el) };
      // errorReport = [...errorReport, { errorText, errorData }];
      reportError({ errorText, errorData });
      console.error(
        errorText,
        "\nquestion ID:",
        id,
        "\n, questions:\n",
        allQuestions
      );
      el.replaceWith(this.createPlaceholder("--question data missing--"));
      return false;
    }

    // test: replace with rendered component within div element
    const wrap = document.createElement("span");
    wrap.classList.add("parsed-question-container");

    // get question component by type
    const QuestionComponent = getQuestionComponent(
      questionData.question_type || type
    );

    // render it with data
    await ReactDOM.render(
      // <Button onClick={console.debug}>{id}</Button>,
      <QuestionComponent
        data={questionData}
        value={value}
        errorText={errorText}
        onChange={onChange}
      />,
      wrap
    );

    const element = wrap; // wrap.children[0] ? wrap.children[0] : wrap;

    // replace existing element with newly created
    el.replaceWith(element);

    const result = {
      id,
      element,
      blocked: true,
      value,
      errorText,
      type,
    };

    result.answered = this.questionIsAnswered(result);

    // add setBlocked function
    result.setBlocked = (value) => {
      // use arrow fnction's scope to access result object and set 'blocked' value
      result.blocked = value;
      // set 'disabled' attribute to all inputs within element
      // console.debug("setBlocked result:", result );
      result.element
        .querySelectorAll("input, button")
        .forEach((i) => (i.disabled = value));
    };

    // return question parameters
    return result;
  };

  /**
   * Puts content into container using passed reference, if it can be done and the content is not null.
   * @param {*} ref container reference
   * @param {null|Element} result content
   */
  addResult = (ref, result) => {
    // console.debug("addResult called", result, ref)
    if (result && ref && ref.appendChild) {
      // store reference
      this._ContainerRef = ref;

      // clear everything
      ref.innerHTML = "";

      // append new content
      ref.appendChild(result);
    } else {
      console.debug("no ref or no result", ref, result);
    }
  };

  /**
   * Cycles through passed list of DOM elements and replaces them with actual question components. Returns an array that stores all newly created elements and their corresponding data.
   * @param {*} markedQuestions NodeList (?) of elements within HTML that are marked as question elements and have to be replaced with question components
   * @param {function} reportError  callback that is called when a parsing error is found
   * @param {*} questions the list questions in format ready to display. This function adds items to it and returns the updated array
   * @param {*} propsQuestions the list of all questions data
   * @returns {array} ordered array of parsed question elements with their data. Will be used to track user's progress along page (open next question, block next questions if answer turns wrong, etc.)
   */
  async parseEachQuestion(
    markedQuestions,
    // errorReport,
    reportError,
    questions,
    propsQuestions = {}
  ) {
    let qi = 0;
    // while() for async/await processes to work
    while (qi < markedQuestions.length) {
      const el = markedQuestions[qi];

      // define these here for all cases to use
      let question, id;

      const type = el.dataset["isQuestion"];

      // parse depending on question type
      switch (type) {
        case "table":
          // TABLE WITH EMBEDDED QUESTIONS
          questions = await this.parseTableWithQuestions(
            el,
            type,
            // errorReport,
            reportError, // pass callback
            propsQuestions,
            questions
          );

          break;

        case "field":
        // TEXT FIELD
        case "quiz":
        // QUIZ
        case "color":
        // COLOR DROPDOWN
        case "binary":
          question = await this.replaceQuestionElement(
            el,
            type,
            // errorReport,
            reportError, // pass callback
            this.onQuestionChange,
            propsQuestions
          );
          if (question) questions = this.insertQuestion(questions, question);
          //if (question) questions = [...questions, question];
          break;

        default:
          break;
      }

      // while() for async/await processes to work
      qi++;
    }
    console.debug("PARSED QUESTIONS:", questions);
    return questions;
  }

  /**
   * Parses an HTML table that contains elements marked as questions
   * @param {*} el the table element
   * @param {*} type - table type (presently, just a string 'table', in future there may be other table types)
   * @param {*} reportError callback to report errors. accepts single argument as object of {errorText, errorData}
   * @param {*} propsQuestions list of all questions
   * @param {*} questions the list of already parsed questions in format ready to display. This function adds item to it and returns the updated array
   * @returns {array} updated array of questions
   */
  async parseTableWithQuestions(
    el,
    type,
    // errorReport,
    reportError,
    propsQuestions,
    questions
  ) {
    console.debug("parseTableWithQuestions: parsing table ", el);
    // find all questions within table
    const tableQuestions = el.querySelectorAll("[data-question-id]");
    console.debug("parseTableWithQuestions found questions:", tableQuestions);

    if (tableQuestions.length > 0) {
      // get ids of found questions
      const question_ids = Array.from(tableQuestions).map(
        (q) => q.dataset["questionId"]
      );
      // console.debug("parseTableWithQuestions question ids:", question_ids)

      // create unique id, for table does not have question id.
      let id = uniquid("table_");

      const result = {
        id,
        element: el,
        blocked: true,
        // reduce propquestions to only the questions within table
        value: Object.keys(propsQuestions).reduce(
          (r, k) =>
            question_ids.includes(k)
              ? { ...r, [k]: { ...propsQuestions[k] } }
              : r,
          {}
        ),

        type,
        questionsNumber: tableQuestions.length,
        done: false,
      };

      console.debug(
        "parseTableWithQuestions - reduced questions:",
        result.value
      );

      let ii = 0;
      // replace each question element with component, asyncronously
      while (ii < tableQuestions.length) {
        await this.replaceQuestionElement(
          tableQuestions[ii],
          "field",
          // errorReport,
          reportError,
          // onQuestionChange particular case - for the table. pass question id, answer and table id
          // onTableQuestionChange,
          (qid, qvalue) => this.onTableQuestionChange(qid, qvalue, id),
          propsQuestions
        );
        ii++;
      }

      result.answered = this.questionIsAnswered(result);

      // tableQuestions.forEach( q => this.replaceQuestionElement(q, "field", errorReport ) );
      result.setBlocked = (value) => {
        // use arrow fnction's scope to access result object and set 'blocked' value
        result.blocked = value;

        console.debug("setBlocked result:", result);

        // set 'disabled' attribute to all inputs within element
        const inputs = result.element.querySelectorAll("input, button");
        // console.debug("setBlocked result:", result );
        // console.debug("setBlocked inputs calculated:", result.element.querySelectorAll("input"));
        // console.debug("setBlocked inputs:", inputs );
        inputs.forEach((i) => (i.disabled = value));
      };

      console.debug("parseTableWithQuestions final result:\n", result);
      // add to questions array
      questions = this.insertQuestion(questions, result);
    } else {
      // this shouldn't happen, but just in case
      // unmark the table
      el.removeAttribute("data-is-question");
    }
    return questions;
  }

  /**
   * adds question to questions array if it doesnt exist
   * @param {*} questions
   * @param {*} result
   * @returns
   */
  insertQuestion(questions, result) {
    return questions.find((q) => q.id === result.id)
      ? questions
      : // create copy of result to avoid reference pollution
        [...questions, { ...result }];
  }

  /**
   * Deals with blocking/unblocking next questions. returns false if no next question is found.
   * @param {*} value
   * @param {*} index
   * @param {*} questions
   * @returns
   */
  questionsBlock(value, index, questions) {
    if (!value) {
      // value empty: make lower items in array - blocked
      this.blockNextQuestions(index, questions);
      return true;
    }
    // else return result of unblocking next question
    // return this.unblockNextQuestion(questions, index);
    return questions[index] && questions[index].id
      ? this.unblockNextQuestion(questions[index].id)
      : false;
  }

  blockNextQuestions(index, questions) {
    for (let i = index + 1; i < questions.length; i++) {
      questions[i].setBlocked(true);
    }
  }

  unblockQuestion(index, questions) {
    const item = questions[index];

    if (!item) return false;

    if (typeof item.setBlocked !== "function") {
      console.error("setBlocked() not found in question with index ", index);
      return false;
    }

    item.setBlocked(false);

    // if the question is answered and there is a next question, unblock it (recursion)
    const next = questions[index + 1];
    if (item.answered && next) this.unblockQuestion(index + 1, questions);
  }

  /**
   * Attempts to unblock next question. If no next question found, returns false, otherwise - true;
   * @param {any} id  the actual question id.
   * @returns
   */
  // unblockNextQuestion(questions, index) {
  unblockNextQuestion(id) {
    console.debug("unblockNextQuestion is called with id", id);
    const { questions } = this.state;

    const index = questions.findIndex((q) => q.id === id);

    return this.unblockQuestion(index + 1, questions);

    // const {questions} = this.state;

    // const index = questions.findIndex( q => q.id === id );

    // console.debug('unblockNext id: ', id );
    // // unblock next item.
    // // TODO: if the item DOES have value (has been set before and then blocked)
    // // then onblock next, and repeat this until unblocked item doesn't have value.
    // // If the last item is unblocked and it has value, then call onPageStatusChange
    // if (questions[index + 1]) {
    //   const nextItem = questions[index + 1];
    //   // nextItem.blocked = false;
    //   if (nextItem.setBlocked) {
    //     nextItem.setBlocked(false);

    //     // check id next question is answered and answered right
    //     if( nextItem.value && !nextItem.errorText )
    //       // if answered right, unblock next to it as well (recursion)
    //       this.unblockNextQuestion( nextItem.id );

    //   } else {
    //     console.error('Element setBlocked function not found: ', nextItem);
    //   }
    //   return true;
    // } else {
    //   return false;
    // }
  }

  questionIsAnswered(question) {
    console.debug("questionIsAnswered called with ", question);
    let result = true;
    const { type, value, errorText, questionsNumber } = question;
    switch (type) {
      case "table":
        if (typeof value !== "object") return false;

        const keys = Object.keys(value);
        // if less answers than questions, it's not answered yet
        if (keys.length < questionsNumber) {
          console.debug(
            "questionIsAnswered: less questions (",
            keys.length,
            ") than answers (",
            questionsNumber,
            ")"
          );
          return false;
        }

        // set result to false
        result = false;
        let rightAnsweredCount = 0;
        // for (let qid = 0; qid < keys.length && result; qid++) {
        //   // get single question value, which is {value, errorText}
        //   const q = value[keys[qid]];
        //   console.debug('questionIsAnswered q:', q);
        //   if ((q && q.value && q.errorText) || (q && !q.value)) result = false;
        // }
        for (let qid = 0; qid < keys.length; qid++) {
          // get single question value, which is {value, errorText}
          const q = value[keys[qid]];
          console.debug("questionIsAnswered q:", q);
          if (q.value !== null && q.value !== undefined && !q.errorText)
            rightAnsweredCount++;
        }
        result = rightAnsweredCount === questionsNumber;
        break;

      default:
        result = value !== null && value !== undefined && !errorText;
        break;
    }

    return result;
  }

  render() {
    // // get parsed text from state
    const { container } = this.state;

    // console.debug(container ?  "rendering container" : "container empty, showing spinner")
    if (!container) return <Spinner />;

    return (
      <div
        className="parsed-html"
        ref={(ref) => this.addResult(ref, container)}
        // ref={this._Ref}
      ></div>
    );
  }
}

/**
 * Prop types
 */
Parser.propTypes = {
  html: PropTypes.string.isRequired,
  questions: PropTypes.object,
  allQuestions: PropTypes.arrayOf(
    PropTypes.shape({
      question_id: PropTypes.number.isRequired,
      experiment_id: PropTypes.number.isRequired,
      question_type: PropTypes.string.isRequired,
      question_data: PropTypes.object.isRequired,
      ordering: PropTypes.number,
    })
  ),
  onErrors: PropTypes.func,
};
export default Parser;
