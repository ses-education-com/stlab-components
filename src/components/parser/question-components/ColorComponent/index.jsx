import React, { useState } from 'react';
import { Button, Menu, MenuItem } from '@material-ui/core';
import './ColorComponent.scss';

const ColorComponent = (props) => {
  const { question_id } = props.data;
  const {
    onChange = console.debug,

    errorText: passedErrorText = null,
    value = '',
  } = props;

  // if value is not string (by some error) replace it with empty string
  const [colorSelected, setColorSelected] = useState(
    typeof value === 'string' ? value : ''
  );
  const [errorText, setErrorText] = useState(passedErrorText);
  const [hasErrors, setErrors] = useState(passedErrorText !== null);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const changeHandler = async (color) => {
    //get newly selected color
    const newColor = color;

    setColorSelected(newColor);
    handleClose();

    if (typeof onChange === 'function') {
      const data = await onChange(question_id, color);

      if (!data) return;

      const { errorText } = data[question_id] || {};
      setErrorText(errorText);
      setErrors(errorText !== null);
    }
  };

  const colors = [
    { text: 'Red', value: 'red' },
    { text: 'White', value: 'white' },
    { text: 'Yellow', value: 'yellow' },
    { text: 'Black', value: 'black' },
    { text: 'Orange', value: 'orange' },
    { text: 'Brown', value: 'brown' },
    { text: 'Green', value: 'green' },
    { text: 'Gold', value: 'gold' },
    { text: 'Silver', value: 'silver' },
  ];

  const elementId = `color-menu-${question_id}`;

  console.debug('colorquestion id:', question_id, ' hasErrors:', hasErrors);

  return (
    <span
      className={`text-color-question ${hasErrors ? 'has-errors' : ''}`}
      data-question-id={question_id}
    >
      <Button
        aria-controls={elementId}
        aria-haspopup='true'
        onClick={(event) => setAnchorEl(event.currentTarget)}
        className='color-button'
        data-btn-color={colorSelected ? colorSelected : null}
      />

      <Menu
        id={elementId}
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        className='color-question-menu'
      >
        {colors.map((c, ind) => (
          <MenuItem
            key={`color-${question_id}-${ind}`}
            data-btn-color={c.value}
            onClick={() => changeHandler(c.value)}
          >
            {c.text}
          </MenuItem>
        ))}
      </Menu>
    </span>
  );
};

export default ColorComponent;
