import React from "react";
import { Modal, Typography, Button, TextField } from "@material-ui/core";
import "./password-change-dialog.scss";

class PasswordChangeDialog extends React.Component {
  state = {
    password: null,
    password2: null,
    error: null,
  };

  updateValue = (event) => {
    const { target } = event;
    const { name, value } = target;
    const { passwordErrorText = "Passwords don't match" } = this.props;

    this.setState({ [name]: value, error: null }, () => {
      if (!this.checkPasswordMatch())
        this.setState({ error: passwordErrorText });
    });
  };

  checkPasswordMatch = () => {
    const { password, password2 } = this.state;

    // if one is empty, return true
    if (!password || !password2) return true;

    // if both values are non-empty, check if they
    return password === password2;
  };

  render() {
    const {
      open,
      onClose,
      onSubmit,
      headerText = "Password change",
      promptText = "Please choose new password",
      cancelText = "Cancel",
      saveText = "Save",
      passwordLabelText = "Password",
      password2LabelText = "Confirm password",
    } = this.props;

    const { password, password2, error } = this.state;

    const canSubmit = password && password2 && !error;

    return (
      <Modal open={open} onClose={onClose}>
        <div className="password-modal-container">
          <Typography className="header" color="primary">
            {headerText}
          </Typography>
          <p className="prompt">{promptText}</p>

          <div item className="fields">
            <TextField
              id="password1"
              name="password"
              label={passwordLabelText}
              variant="outlined"
              type="password"
              onChange={this.updateValue}
              error={Boolean(error)}
              helperText={error || ""}
              // onChange={ (event) =>
              //   this.setState({ password: event.target.value })
              // }
              value={password}
            />
            <TextField
              id="password2"
              name="password2"
              label={password2LabelText}
              variant="outlined"
              type="password"
              onChange={this.updateValue}
              error={error}
              // onChange={(event) =>
              //   this.setState({ password2: event.target.value })
              // }
              value={password2}
            />
          </div>
          <div item className="buttons-container">
            <Button variant="contained" onClick={onClose}>
              {cancelText}
            </Button>
            <Button
              disabled={!canSubmit}
              variant="contained"
              color="primary"
              onClick={() => onSubmit(password)}
            >
              {saveText}
            </Button>
          </div>
        </div>
      </Modal>
    );
  }
}

export default PasswordChangeDialog;
