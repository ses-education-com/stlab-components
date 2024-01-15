import { IconButton } from "@material-ui/core";
import Delete from "@material-ui/icons/Delete";
import React from "react";
// import ConfirmDialog from "@ses-education.stlab-shared/confirm-dialog";
import ConfirmDialog from "../confirm-dialog";
import "./image-selector.scss";

/**
 * Displays user avatar and allows to update it
 */
class ImageSelector extends React.Component {
  state = {
    showConfirmDelete: false,
  };
  confirmDeletion = (ev) => {
    this.setState({ showConfirmDelete: true });
  };

  render() {
    const {
      image,
      defaultImage,
      onDelete,
      onSelect,
      confirmationText = "Delete image?",
      closeButtonClass = "image-selector-close"
    } = this.props;
    const { showConfirmDelete } = this.state;
    console.debug("ImageSelector", image, defaultImage);
    return (
      <label className="image-selector" htmlFor="image-file">
        {image && (
          <IconButton
            onClick={this.confirmDeletion}
            className={closeButtonClass}
          >
            <Delete />
          </IconButton>
        )}
        <input
          type="file"
          id="image-file"
          name="image"
          accept="image/*"
          style={{ display: "none" }}
          onChange={onSelect}
        />
        <div
          className="display"
          style={{
            backgroundImage: `url(${image || defaultImage})`,
          }}
        ></div>
        <ConfirmDialog
          open={showConfirmDelete}
          prompt={confirmationText}
          onConfirm={async () => {
            await onDelete();
            this.setState({ showConfirmDelete: false });
          }}
          onClose={() => this.setState({ showConfirmDelete: false })}
        />
      </label>
    );
  }
}

export default ImageSelector;
