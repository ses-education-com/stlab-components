import React from "react";
import pipeline from "../../Utils/pipeline";
import "./question-component.scss";
import debounce from "../../Utils/debounce";
import { Tooltip, CircularProgress } from "@material-ui/core";

// let onChangeDebounced;

class QuestionComponent extends React.Component {
  state = {
    inputValue: null,
    hasErrors: false,
    showToolTip: false,
    errorText: "",
    checkingValue: false,
  };

  onChangeDebounced = null;
  inputRef = React.createRef();

  componentDidMount() {
    const { errorText, value: inputValue, onChange } = this.props;
    const hasErrors = errorText !== null;

    // console.debug("Questioncomponent.componentDidMount errorText, inputValue, hasErrors:\n" ,errorText, inputValue, hasErrors )

    // set initial values
    this.setState({ inputValue, errorText, hasErrors });

    // this.setState({ inputValue: this.props.value });
    /* this.props.onAnswersChanged(this.props.data.question_id);*/

    // if (!onChangeDebounced && typeof onChange === "function") onChangeDebounced = debounce(onChange);

    this.onChangeDebounced = debounce(async (question_id, value) => {
      // show spinner
      this.setState({ checkingValue: true, hasErrors: false });
      const data = await onChange(question_id, value);

      if (data) {
        const { errorText } = data[question_id] || {};
        // const includesError = data[question_id]['errorText'];
        // if (includesError) this.setState({ hasErrors: true });
        this.setState(
          // set error and hide spinner
          { hasErrors: errorText !== null, errorText, checkingValue: false },
          () => {
            if (this.inputRef && this.inputRef.current) {
              // this actually works only if error state hasn't changed.
              // if it has, the re-render happens most of the time after focus() and the focus is lost.
              // TODO: think of how to deal with it.
              console.debug("Setting focus back");
              // this.inputRef.current.focus();
            }
          }
        );
      }
    },1000);
  }

  changeHandler = async (ev) => {
    // const { inputValue } = this.state;
    const { onChange } = this.props;
    const { question_id } = this.props.data;
    const { value: inputValue } = ev.target;

    // handle errors
    // if (newValue === '' && inputValue !== '') {
    //   // if there was something and set to nothing - it's an error
    //   this.setState({ hasErrors: true });
    // }

    // if (newValue !== '' && inputValue === '') {
    //   // if there was nothing and set to something - remove errors
    //   this.setState({ hasErrors: false });
    // }

    this.setState({ inputValue });

    if (typeof onChange === "function") {
      // call debounced function
      this.onChangeDebounced(question_id, inputValue);

      //const data = await onChangeDebounced(question_id, ev.target.value);
      // const data = await onChange(question_id, ev.target.value);

      // if( data ){
      //   const {errorText} = data[question_id] || {}
      //   // const includesError = data[question_id]['errorText'];
      //   // if (includesError) this.setState({ hasErrors: true });
      //   this.setState({ hasErrors: errorText !== null , errorText });
      // }
    }
  };

  //shows toolTip with errorText when hovered above
  hoverHandlerIn = () => {
    if (this.state.hasErrors) this.setState({ showToolTip: true });
  };

  hoverHandlerOut = () => {
    this.setState({ showToolTip: false });
  };
  render() {
    const { hasErrors, showToolTip, inputValue, errorText, checkingValue } =
      this.state;
    const { data, placeholder = "value" } = this.props;
    const { question_data } = data;
    const { desc, title } = question_data;

    // console.debug("Questi oncomponent.render errorText, inputValue, hasErrors:\n" ,errorText, inputValue, hasErrors )
    return (
      <span
        // className={`text-field-question ${hasErrors ? 'has-errors' : ''}`}
        className={`text-field-question ${hasErrors ? "has-errors" : ""}${
          checkingValue ? " checking" : ""
        }`}
        data-question-id={data.question_id}
        key={`text-field-question-${data.question_id}`}
      >
        {title && (
          <span
            key={`text-field-title-${data.question_id}`}
            className="question-title"
            dangerouslySetInnerHTML={{ __html: pipeline(title) }}
          ></span>
        )}
        <Tooltip
          arrow
          key={`text-field-tooltip-${data.question_id}`}
          open={showToolTip}
          title={errorText}
          placement="top"
        >
          <>
            <input
              key={`text-field-input-${data.question_id}`}
              type="number"
              placeholder={placeholder}
              step="any"
              onChange={this.changeHandler}
              value={inputValue}
              onMouseEnter={this.hoverHandlerIn}
              onMouseLeave={this.hoverHandlerOut}
              onWheel={(ev) => ev.currentTarget.blur() /* prevent scrolling */}
              ref={this.inputRef}
            />
            {checkingValue && (
              <CircularProgress className="checking-value" size={10} />
            )}
          </>
        </Tooltip>
        {desc && (
          <span
            key={`text-field-desc-${data.question_id}`}
            dangerouslySetInnerHTML={{ __html: pipeline(desc) }}
          ></span>
        )}
      </span>
    );
  }
}

export default QuestionComponent;
