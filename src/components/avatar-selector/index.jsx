import { IconButton } from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import React from "react";
import "./avatar-selector.scss";

class AvatarSelector extends React.Component {
  render() {
    const {
      image,
      defaultImage = `https://images.ses-education.com/courses/users/user-no-image.png`,
      onChange,
      onDelete,
    } = this.props;
    return (
      <label className="avatar-selector" htmlFor="image-file">
        {image && (
          <IconButton onClick={onDelete}>
            <Delete />
          </IconButton>
        )}
        <input
          type="file"
          id="image-file"
          accept="image/*"
          style={{ display: "none" }}
          onChange={onChange}
        />
        <div
          className="avatar-image"
          style={{
            backgroundImage: `url(${image || defaultImage})`,
          }}
        />
      </label>
    );
  }
}

export default AvatarSelector;
