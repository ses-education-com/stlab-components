import { Button, Typography } from '@material-ui/core'
import React from 'react'
import ModalWindow from '@ses-education.stlab-shared/modal-window'


class ConfirmDialog extends React.Component{

    render(){
        const {prompt, onConfirm, onClose, cancelText="Cancel", confirmText="Yes", ...other} = this.props;
        return(<ModalWindow formClassName="confirm-dialog stretch" {...other} onClose={onClose}
        buttons={
          [
            <Button variant="contained" color="primary" onClick={onConfirm}>{confirmText}</Button>,
            <Button variant="contained" color="secondary" onClick={onClose}>{cancelText}</Button>
          ]
        }
        >
          <Typography>{prompt}</Typography>
        </ModalWindow>)
    }
}

export default ConfirmDialog