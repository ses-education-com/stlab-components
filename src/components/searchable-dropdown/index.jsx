import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import PropTypes from 'prop-types';


class SearchableDropdown extends Component {
  handleSelect = (event, value) => {
    const { onSelect } = this.props;
    // Call the callback function with the selected item's complete object
    onSelect(value);
  };

  render() {
    const { items, searchFields, maxLinesToShow, autocompleteProps = {}, ...textFieldProps  } = this.props;

    return (
      <Autocomplete
        options={items}
        getOptionLabel={(option) => option["title"] || "Oops" }
        style={{ width: 300 }}
        renderInput={(params) => (
          <TextField {...params}  {...textFieldProps} />
        )}
        onChange={this.handleSelect}
        filterOptions={(options, { inputValue }) => 
          options.filter((option) =>
            searchFields.some((field) =>
              option[field].toLowerCase().includes(inputValue.toLowerCase())
            )
          )
        }
        ListboxProps={{ style: { maxHeight: `${maxLinesToShow * 48}px` } }} // Adjust the height based on maxLinesToShow
        {...autocompleteProps}
      />
    );
  }
}




// Define prop types for IntelliSense/documentation
SearchableDropdown.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
    searchFields: PropTypes.arrayOf(PropTypes.string).isRequired,
    maxLinesToShow: PropTypes.number,
    onSelect: PropTypes.func.isRequired,
    autocompleteProps: PropTypes.object,
    // Spread operator is used for textFieldProps, which are the props for TextField component.
    // Since TextField props can vary widely and depend on @material-ui/core version,
    // it might be impractical to validate each possible prop.
    // If you have a set of common props you pass, you can list them explicitly.
  };
  
  // Default props
  SearchableDropdown.defaultProps = {
    maxLinesToShow: 5,
    autocompleteProps: {},
  };


  export default SearchableDropdown;