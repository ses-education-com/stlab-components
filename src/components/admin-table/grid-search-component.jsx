import { Button, InputAdornment, TextField } from "@material-ui/core";
import { GridSearchIcon } from "@material-ui/data-grid";
import React from "react";

class GridSearchComponent extends React.Component {
  state = {
    search: "",
  };

  componentDidMount(){
    const {search = "" } = this.props
    this.setState({search})
  }

  componentDidUpdate(prevProps){
    const {search} = this.props
    const {search: prevSearch} = prevProps
    if( search !== prevSearch ) this.setState({search})
  }

  updateValue = ({ target }) => {
    const { value: search } = target;
    // Updating table here re-renders the table and focus is lost, so we opt for a "go" action/button
    this.setState({ search });
    if( search === "" && typeof this.props.onChange === "function") this.props.onChange(search)
  }


  onKeyDown = (e) => {
    if(e.keyCode == 13 && typeof this.props.onChange === "function" ) this.props.onChange(this.state.search)
 }

  render() {
    const {
      onChange = console.debug,
      placeholder = "search..."
    } = this.props
    const {search} = this.state;
    return (
      <TextField        
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <GridSearchIcon />
            </InputAdornment>
          ),
          endAdornment: (
            search !== "" && <Button  onClick={() => onChange(search) }>Go</Button>
          )
        }}
        name="search"
        value={search}
        placeholder={placeholder}
        onChange={this.updateValue}
        onKeyDown={this.onKeyDown}
      />
    );
  }
}

export default GridSearchComponent;
