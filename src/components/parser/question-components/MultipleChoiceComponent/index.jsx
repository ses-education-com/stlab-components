import React from "react";
import { ButtonGroup, Button } from "@material-ui/core";
import "./multiple-choice.scss";
import pipeline from "../../Utils/pipeline";
import { fixUrl } from "../../Utils/functions";

const { REACT_APP_MEDIA_URL } = process.env;

class MultipleChoiceComponent extends React.Component {
  state = {
    value: null,
    errorText: null,
    clicked: null,
  };

  componentDidMount() {
    // set answer data for the first time
    this.setAnswerData(this.props);
  }

  /**
   * Fetches answer data through a callback function
   * @returns
   */
  async setAnswerData(answer) {
    if (!answer) return; // TODO: deal with the error
    const { value, errorText } = answer;
    console.debug("setting answer data (value, errorText):", value, errorText);
    this.setState({ value, errorText, clicked: null });
  }

  async onButtonClick(option, ev) {
    // first, check if the button is disabled
    const { currentTarget } = ev;

    // console.debug("target: ", currentTarget );

    // if disabled, do nothing
    if (currentTarget.disabled) return false;

    // if no change - do nothing
    if (option === this.state.value) return false;

    // first off - mark as clicked
    this.setState({ clicked: option });

    const { data, onChange = console.log } = this.props;
    const { question_id } = data;

    // quit if no onChange function is passed (null is passed)
    if (typeof onChange !== "function") {
      console.error("MultipleChoiceComponent: onChange function not passed!");
      return false;
    }

    try {
      const answer = await onChange(question_id, option);
      console.debug("received value data:", answer);
      // udpate data
      this.setAnswerData(answer[question_id]);
    } catch (e) {
      console.error("MultipleChoiceComponent:", e.message);
      // TODO: show some error to user
    }
  }

  prepareOptions = (data) => {
    // console.debug("prepareOptions data:", data );
    const { question_data } = data;
    // cut off wrong question data
    if (typeof question_data !== "object")
      throw new Error("Wrong question_data type");

    let options = [];

    switch (data.question_type) {
      case "binary":
        // if it's binary - convert it to multiple format.
        options = this.convertBinaryToMultiple(question_data);
        break;
      case "multiple":
      default:
        // multiple choice questions stores options in 'options' field
        options = question_data.options || [];
        break;
    }

    // console.debug("data is:", data);
    // console.debug("data options are:", question_data.options);
    // console.debug("options are:", options);

    // cut off wrong options length
    if (options.length < 2)
      // return <div className="multiple-choice-buttons-error">{error}</div>;
      throw new Error("Wrong question_data type");

    return options;
  };

  convertBinaryToMultiple(question_data) {
    // find option_A and option_B keys in question data.
    const options = Object.keys(question_data).reduce((res, option) => {
      // option key is option_A, option_B
      if (!option.startsWith("option_")) return res;

      // get option index (A o B)
      const option_index = option.substr(7, 1);
      console.debug("option:", option, ", option index:", option_index);

      // image is binary_image_A or binary_image_B. Find it, or return empty object
      const image = question_data[`binary_image_${option_index}`] || {};

      return [...res, { option, text: question_data[option], image }];
    }, []);

    return options;
  }

  render() {
    const {
      data = {},
      text = {}, // all text should be passed from parent component
    } = this.props;

    const { question_data, question_id } = data;

    const {
      value,
      // questionState,
      errorText,
      clicked,
    } = this.state;

    // buttons direction
    let { direction, desc } = question_data;

    // cut off possible null value
    direction = direction || "horizontal";

    const { error = "Error in question data", correct = "Correct!" } = text;

    try {
      const options = this.prepareOptions(data);

      // prepare question state
      const questionState =
        // if null - not answered yet
        value === null || value === undefined
          ? "unanswered"
          : // if not null and no error text - correct, otherwise - wrong
          !errorText
          ? "correct"
          : "wrong";

      console.debug("value:", value, "\noptions:\n", options);

      return (
        <span
          dasta-question-id={question_id}
          role="group"
          className={`multiple-choice-buttons ${direction} ${questionState}`}
          // data-message={questionState !== "correct" ? errorText : correct}
        >
          {desc && (
            <span
              className="description"
              dangerouslySetInnerHTML={{ __html: pipeline(desc) }}
            ></span>
          )}
          <ButtonGroup color="primary" orientation={direction || "horizontal"}>
            {options.map((o, ind) => {
              const { text, image, option } = o;

              return (
                <Button
                  key={`${question_id}_btn_${ind}`}
                  variant="contained"
                  color={value === option ? "primary" : "inherit"}
                  className={
                    value === o.option
                      ? "selected"
                      : clicked === option
                      ? "clicked"
                      : ""
                  }
                  onClick={(ev) => this.onButtonClick(option, ev)}
                >
                  {
                    // if image has value, show image
                    image.value ? (
                      <img
                        className="binary-image"
                        src={`${REACT_APP_MEDIA_URL}${fixUrl(image.value)}`}
                        alt={image.meta ? image.meta.title : pipeline(text)}
                      />
                    ) : (
                      // otherwise show text
                      <span
                        dangerouslySetInnerHTML={{ __html: pipeline(text) }}
                      ></span>
                    )
                  }
                  {/* {option_A ? option_A : null}
                    {binary_image_A ? (
                      <img
                        className='binary-image'
                        src={`${REACT_APP_MEDIA_URL}${fixUrl(binary_image_A.value)}`}
                        alt={binary_image_A.meta.title}
                      />
                    ) : null} */}
                </Button>
              );
            })}
          </ButtonGroup>
          {/* {options.map((o, ind) => (
            <Button
              variant="contained"
              color={value === o.option  ? "primary" :  "inherit" }
              
              className={value === o.option ? "selected" : ""}
              key={`${question_id}_btn_${ind}`}
              onClick={(ev) => this.onButtonClick( o.option, ev )}
            >
              {pipeline( o.text )}
            </Button>
          ))} */}
          {questionState !== "unanswered" && (
            <span
              className="error-message"
              dangerouslySetInnerHTML={{
                __html:
                  questionState !== "correct"
                    ? pipeline(errorText)
                    : pipeline(correct),
              }}
            ></span>
          )}
        </span>
      );
    } catch (e) {
      console.error(e);

      return <div className="multiple-choice-buttons-error">{error}</div>;
    }
  }
}

export default MultipleChoiceComponent;
