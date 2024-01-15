import React, { useState } from "react";
import { ButtonGroup, Button } from "@material-ui/core";
import "./BinaryComponent.scss";
import pipeline from "../../Utils/pipeline";
import { fixUrl } from "../../Utils/functions";

const { REACT_APP_MEDIA_URL } = process.env;

const BinaryComponent = (props) => {
  const { question_id, question_data } = props.data;
  const {
    desc,
    option_A = "",
    option_B = "",
    answer,
    binary_image_A,
    binary_image_B,
  } = question_data;
  //if value exists - mark question as answered
  const { onChange = console.debug } = props;

  const [selectedA, setSelectedA] = useState("outlined");
  const [selectedB, setSelectedB] = useState("outlined");
  const [feedback, setFeedback] = useState(null);

  const clickHandler = (option) => {
    if (option === "A") {
      setSelectedA("contained");
      setSelectedB("outlined");
      if (
        option_A.toString().trim() === answer.toString().trim() ||
        answer === "image A"
      )
        setFeedback("Correct!");
      else {
        setFeedback(`The correct answer is ${answer}.`);
      }
    }
    if (option === "B") {
      setSelectedA("outlined");
      setSelectedB("contained");
      if (
        option_B.toString().trim() === answer.toString().trim() ||
        answer === "image B"
      )
        setFeedback("Correct!");
      else {
        setFeedback(`The correct answer is ${answer}.`);
      }
    }

    //probably no need to return callback
    if (typeof onChange === "function") return onChange(question_id, option);

    console.error("onChange function not passed as prop:", onChange);
  };

  return (
    <span className="text-binary-question" data-question-id={question_id}>
      <>
        {desc && (
          <span
            className="description"
            dangerouslySetInnerHTML={{ __html: pipeline(desc) }}
          ></span>
        )}
        {option_A === "" && option_B === "" && <br />}
        <ButtonGroup color="primary">
          <Button variant={selectedA} onClick={() => clickHandler("A")}>
            {option_A ? option_A : null}
            {binary_image_A ? (
              <img
                className="binary-image"
                src={`${REACT_APP_MEDIA_URL}${fixUrl(binary_image_A.value)}`}
                alt={binary_image_A.meta.title}
              />
            ) : null}
          </Button>
          <Button variant={selectedB} onClick={() => clickHandler("B")}>
            {option_B ? option_B : null}
            {binary_image_B ? (
              <img
                className="binary-image"
                src={`${REACT_APP_MEDIA_URL}${fixUrl(binary_image_B.value)}`}
                alt={binary_image_B.meta.title}
              />
            ) : null}
          </Button>
        </ButtonGroup>
        {option_A === "" && option_B === "" && <br />}
        {feedback ? (
          <span className={feedback === "Correct!" ? "correct" : "mistake"}>
            {" " + feedback}
          </span>
        ) : null}
      </>
    </span>
  );
};

export default BinaryComponent;
