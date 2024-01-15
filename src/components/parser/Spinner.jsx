import { CircularProgress } from "@material-ui/core";
import React from "react";

export default (props) => {
  return (
    <div className="spinner-container">
      <CircularProgress color="primary" />
      {props.text ? <p>{props.text}</p> : null}
    </div>
  );
};
