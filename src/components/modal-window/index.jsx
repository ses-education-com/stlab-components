import React from "react";
import "./modal-window.scss";
import { Modal } from "@material-ui/core";
/**
 * Base frame for modal windows that has header, content and buttons sections
 */
class ModalWindow extends React.Component {
  render() {
    const {
      header,
      children,
      buttons,
      onSubmit = (form) => {
        console.debug(form);
        return false;
      },
      formClassName,
      ...other
    } = this.props;

    return (
      <Modal {...other}>
        <form
          className={`modal-window${formClassName ? ` ${formClassName}` : ""}`}
          onSubmit={onSubmit}
        >
          <div className="modal-header">{header}</div>
          <div className="modal-content">{children}</div>
          <div item className="modal-buttons-container">
            {buttons}
          </div>
        </form>
      </Modal>
    );
  }
}

export default ModalWindow;
