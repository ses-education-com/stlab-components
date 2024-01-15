import React from "react";
import { Container } from "@material-ui/core";
import Question from "./question";
import "./QuizComponent.scss";
import _ from "lodash";
import AsyncButton from "../../../async-button";
import { ChevronRight } from "@material-ui/icons";

class QuizComponent extends React.Component {
  state = {
    canSubmit: false,
    quizSolution: {},
    serverSideAnswers: {},
    errorText: {},
  };

  btnRef = null;

  setBtnRef = (el) => {
    this.btnRef = el;
    console.log("el: ", el);
  };

  componentDidMount() {
    // console.debug("QuizComponent props:", this.props);

    // populate quizSolution
    const { value, errorText } = this.props;

    if (value && typeof value === "object" && Object.keys(value).length > 0)
      this.setState({ quizSolution: value, serverSideAnswers: value });

    if (
      errorText &&
      typeof errorText === "object" &&
      Object.keys(errorText).length > 0
    )
      this.setState({ errorText });
  }

  /**
   * creates the solution object by appending answers to it
   * @param {*} question_ID
   * @param {*} answer_ID
   */
  solutionHandler = (question_ID, answer_ID) => {
    let { quizSolution, serverSideAnswers } = this.state;

    console.log(
      "QuizComponent - solutionHandler - quizSolution: ",
      quizSolution
    );
    console.log(
      "QuizComponent - solutionHandler - serverSideAnswers: ",
      serverSideAnswers
    );

    // update solution with new answer
    quizSolution = {
      ...quizSolution,
      [question_ID]: answer_ID,
    };

    this.setState({
      // update solutions in state
      quizSolution,
      // update canSubmit status based on quizSolution length
      canSubmit:
        this.props.data.question_data.questions.length ===
        Object.keys(quizSolution).length,
    });
  };

  submitHandler = async () => {
    const { question_id } = this.props.data;

    // if already pressed - do nothing
    if (this.btnRef.disabled) return;

    try {
      // disable button for multiple clicks
      this.btnRef.disabled = true;
      const result = await this.props.onChange(
        question_id,
        this.state.quizSolution
      );
      // enable button back
      this.btnRef.disabled = false;

      if (result && result[question_id]) {
        const { errorText } = result[question_id];

        // update serverSideAnswers to current state of quizSolution.
        // this way we can distinguish between old (wrong or right) answer and currently selected value
        this.setState({
          serverSideAnswers: this.state.quizSolution,
          errorText,
        });
      }
    } catch (e) {
      // enable button back
      this.btnRef.disabled = false;
      // TODO: deal with possible error?
    }
  };

  render() {
    const {
      data,
      submitQuizText = "Submit Quiz",
      error_text = "Error renderinq quiz. Please try reloading the page.",
      randomize = true,
    } = this.props;
    const { question_data } = data;

    if (!question_data || typeof question_data !== "object")
      return <div className="error">{error_text}</div>;

    let { quizSolution, errorText, serverSideAnswers, canSubmit } = this.state;
    const { title, desc } = question_data;

    serverSideAnswers = serverSideAnswers || {};
    errorText = errorText || {};

    const isAnsweredCorrectly =
      Object.keys(serverSideAnswers).length !== 0 &&
      Object.keys(errorText).length === 0;

    let isDisabled = _.isEqual(quizSolution, serverSideAnswers);

    // answers come as an object hashed by question id, even if it's only one question/answer
    // so let's fetch the sole answer from there.
    // const answerData =
    //   typeof answers === "object" && answers[question_id]
    //     ? answers[question_id]
    //     : {};

    // console.debug("QuizComponent Answer:", answerData);
    // answer.errorText is either null
    // or an object hashed by inner question id
    // e.g.:
    // "errorText": {
    //  "qz_carskfhggtc0" : {
    //     "errorText": "wrong answer selected!"
    //   }
    // ]
    //
    // let's fetch this object (or create an empty one)
    //
    // const wrongAnswers = answerData.errorText || {};

    return (
      <Container maxWidth="sm">
        <div className="quiz-container">
          {
            // show title, if any
            question_data.title && (
              <div className="quiz-title">{question_data.title}</div>
            )
          }
          {desc && <p>{desc}</p>}
          {question_data.questions.map((question) => (
            <Question
              content={question}
              // this inner question's particular error object (either empty or an object with 'errorText' string field)
              errorObject={errorText[question.id]}
              answer={
                quizSolution[question.id]
                // // if answerData.value exists and it has field named like question.id...
                // answerData && answerData.value && answerData.value[question.id]
                //   ? // ...then give its value
                //     answerData.value[question.id]
                //   : // ...otherwise - just give null
                //     null
              }
              serverSideAnswer={serverSideAnswers[question.id]}
              solution={this.solutionHandler}
              key={`quiz-question-${question.id}`}
              randomize={randomize}
            />
          ))}
          {
            // only show button if not yet answered correctly
            !isAnsweredCorrectly && canSubmit && (
              <AsyncButton
                variant="contained"
                color="primary"
                disabled={isDisabled}
                ref={this.setBtnRef}
                onClick={this.submitHandler}
                icon={<ChevronRight />}
                iconPosition="right"
                className="submit-quiz-button"
              >
                {submitQuizText}
              </AsyncButton>
            )
          }
        </div>
      </Container>
    );
  }
}

export default QuizComponent;
