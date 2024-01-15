import React from "react";

/**
 * A simple component to render label with control (checkbox or radio)
 * instead of MUI FormControlLabel, which messes up the CSS,
 * looks like it's because it uses Typography component, which brings the CSS with itself.
 */
class CustomRadioItem extends React.Component {
  render() {
    const { label, control, className, ...other } = this.props;
    return (
      <label
        className={
          className ? `custom-radio-item ${className}` : "custom-radio-item"
        }
        {...other}
      >
        {control}
        {label}
      </label>
    );
  }
}

export default CustomRadioItem;
