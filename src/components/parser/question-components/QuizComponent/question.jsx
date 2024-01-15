import React from "react";
import pipeline from "../../Utils/pipeline";

import {
  // Container,
  FormLabel,
  FormControl,
  // FormControlLabel,
  RadioGroup,
  Radio,
} from "@material-ui/core";
import "./QuizComponent.scss";

import { Cancel, Check } from "@material-ui/icons";
import { shuffleArray, fixUrl } from "../../Utils/functions";
import Spinner from "../../Spinner";
import CustomRadioItem from "./custom-radio-item";

const WrongAnswer = (props) => <Radio component={Cancel} color="secondary" />;
const RightAnswer = (props) => <Radio component={Check} color="primary" />;
const SelectedAnswer = (props) => <Radio {...props} />;
const { REACT_APP_MEDIA_URL } = process.env;

class Question extends React.Component {
  state = {
    answers: null,
  };

  componentDidMount() {
    // we actually only need to randomize the answers once - here.
    // there is no changing of answers content while answering,
    // so it's done in component lifetime
    this.randomizeAnswers();
  }

  randomizeAnswers() {
    // randomize answers and store in state
    let { answers } = this.props.content || {};
    if (!answers) return;

    // randomize if asked to
    if (this.props.randomize) {
      // We'll hold here the indexes of ordered elements to filter out duplicates
      let orderedIndexes = [];

      // We're adding the ordering option which should fix given answer in place, if set.

      // split answers into answers with ordering and without ordering
      const answersSplit = answers.reduce(
        (res, a) => {
          if (
            // sort out NaN
            !isNaN(parseInt(a.ordering)) &&
            // accept only numbers within answers array size
            a.ordering >= 0 &&
            a.ordering < answers.length &&
            // sort out duplicates
            !orderedIndexes.includes(a.ordering)
            // ...every condition is fulfilled - add to ordered, and overwrite 'ordering' with parsed integer
          )
            return {
              ...res,
              ordered: [
                ...res.ordered,
                { ...a, ordering: parseInt(a.ordering) },
              ],
            };
          // some of the conditions aren't fulfilled - add to unordered and overwrite 'ordering' with empty string
          return {
            ...res,
            unordered: [...res.unordered, { ...a, ordering: "" }],
          };
        },
        { ordered: [], unordered: [] }
      );

      console.debug("randomizeAnswers original answers array:", answers);

      // shuffle unordered
      answersSplit.unordered = shuffleArray(answersSplit.unordered);

      console.debug(
        "randomizeAnswers answers split into ordered and unordered :\n",
        answersSplit
      );

      // now fill answers with either ordered or unordered items depending on current counter
      for (let i = 0; i < answers.length; i++) {
        // check if exists ordered element with this index
        const orderedIndex = answersSplit.ordered.findIndex(
          (a) => a.ordering === i
        );
        if (orderedIndex >= 0) {
          answers[i] = { ...answersSplit.ordered[orderedIndex] };
        } else {
          // otherwise, pop one from unordered
          answers[i] = answersSplit.unordered.pop();
        }
      }

      console.debug("randomizeAnswers answers refilled back:\n", answers);
      // answers = shuffleArray( answers );
    }

    this.setState({ answers });
  }

  /**
   * gets an answer returns text only, image only or both
   * */
  prepareAnswerContent = (ans) => {
    return (
      <div className="prepared-answer-content">
        {ans.aimage && ans.aimage.value !== "" && (
          // <div style={{ flex: 1 }}>
          <div className="question-image-container">
            <img
              src={`${REACT_APP_MEDIA_URL}${fixUrl(ans.aimage.value)}`}
              alt={ans.aimage.meta.title}
              className="image"
            />
          </div>
        )}
        {ans.text && (
          <div
            className={`question-text`}
            dangerouslySetInnerHTML={{ __html: pipeline(ans.text) }}
          ></div>
        )}
      </div>
    );
  };

  render() {
    const { content, answer, serverSideAnswer, solution, errorObject } =
      this.props;

    // console.debug("Question serverSideAnswer:", serverSideAnswer);
    // console.debug("Question errorObject:", errorObject);
    // console.debug("Question answers:", content.answers);

    const questionIsAnsweredCorrectly = serverSideAnswer && !errorObject;

    // get randomized answers from state
    const { answers } = this.state;

    // while the state is updating...
    if (!answers) return <Spinner />;

    return (
      // <Container maxWidth="sm">
      // <Container>
      <div className="question-container">
        <FormControl component="fieldset">
          {/* --------------question title------------ */}
          <FormLabel className="question-title">
            <div
              dangerouslySetInnerHTML={{
                __html: pipeline(content.title),
              }}
            ></div>
          </FormLabel>
          {/*  ------------question image------------- */}
          {content.qimage && content.qimage.value ? (
            <div className="question-image-container">
              <img
                src={`${REACT_APP_MEDIA_URL}${fixUrl(content.qimage.value)}`}
                alt={content.qimage.meta.title}
                className="question-image"
              />
            </div>
          ) : null}
          {/* --------------possible answers------------ */}
          <RadioGroup
            className={questionIsAnsweredCorrectly ? "answered-correctly" : ""}
          >
            {answers.map((ans) => {
              const isRightAnswer =
                serverSideAnswer === ans.id && answer === ans.id;
              const isSelected =
                answer === ans.id || serverSideAnswer === ans.id;
              const isWrongAnswer = errorObject && serverSideAnswer === ans.id;

              // prepare radio button content
              const control = isWrongAnswer ? (
                <WrongAnswer />
              ) : // right answer
              isRightAnswer ? (
                <RightAnswer />
              ) : (
                // any other answer
                <SelectedAnswer checked={isSelected} />
              );

              return (
                // We had to use custom component here instead of FormControlLabel because it brought CSS doubling issues
                <CustomRadioItem
                  // <FormControlLabel
                  key={`quiz-answ-${ans.id}`}
                  className={isSelected ? "selected" : ""}
                  value={ans.id}
                  // errorObject && answer === ans.id  means the question answer is wrong and is equal to current answer's id
                  control={control}
                  label={this.prepareAnswerContent(
                    ans,
                    questionIsAnsweredCorrectly,
                    isRightAnswer,
                    isWrongAnswer,
                    isSelected
                  )}
                  onClick={() => {
                    // only change value if question has not been answered correctly
                    if (!questionIsAnsweredCorrectly) {
                      //pass to QuizComponent the answer to the curr question
                      solution(content.id, ans.id);
                    }
                  }}
                />
              );
            })}
          </RadioGroup>
        </FormControl>
      </div>
      // </Container>
    );
  }
}

export default Question;
