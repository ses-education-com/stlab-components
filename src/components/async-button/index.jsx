import React from "react";
import { Button, CircularProgress } from "@material-ui/core";
import "./async-button.scss";


const Loading = () => <CircularProgress className="loading-icon"/>

/**
 * This button when clicked changes state to "loading", becomes disabled and shows loading icon,
 * waiting for the callback to return a result, and then returns to original state
 * **Props**
 * @var {function} onClick - async callback. The button will wait for it to finish and then will switch to normal state.
 * @var {*} icon anything that will be put as an icon next to button text. If not passed, nothing is shown
 * @var {string} iconPosition right|left|top|bottom the position the icon will be rendered in
 * @var {*} loadingIcon icon that will be shown in loading state. Defaults to <CircularProgress/>
 */
class AsyncButton extends React.Component {
  state = {
    loading: false,
  };

  clicked = async (ev) => {
    const {onClick} = this.props;
    this.setState({ loading: true });
    try {
      if (typeof onClick === "function") await onClick(ev);
      this.setState({ loading: false });
    } catch (e) {
      this.setState({ loading: false });
      if (typeof this.props.onError === "function") this.props.onError(e);
    }
  };

  render() {
    const {
      icon,
      loadingIcon = <Loading />,
      iconPosition = "left",
      children,
      className = "",
      ...otherProps
    } = this.props;
    const { loading } = this.state;
    console.debug("async button Loading:", loading )
    return (
      <Button
        disabled={loading}
        className={`async-button icon-${iconPosition} ${className}`}
        {...otherProps}
        onClick={this.clicked}
      >{ loading ? loadingIcon : icon && icon}{children}</Button>
    );
  }
}

export default AsyncButton;
