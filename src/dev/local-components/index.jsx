import React from 'react';
import {List, MenuItem} from '@material-ui/core';
import {Link} from 'react-router-dom';
import testProps from '../../_data/test.props';

const LocalComponents = () => {

  
    return (<div>

        <List>
          {Object.keys(testProps).map( key => <MenuItem component={Link} to={key}>{testProps[key].pageTitle}</MenuItem>)}
        </List>
      </div>
      )
}

export default LocalComponents;