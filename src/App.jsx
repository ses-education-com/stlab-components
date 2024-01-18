import React from "react";
// import {Link} from 'react-router-dom';

import LocalComponents from "./dev/local-components";
import {BrowserRouter, Route} from "react-router-dom";
// import { NavLink } from "react-router-dom";
import Error from "./dev/error";
import { Switch } from "react-router-dom";
import testProps from './_data/test.props';
import Page from "./dev/page";

function App() {

  // use props list to prepare route options
  const pageRoute = `/:pageId(${Object.keys(testProps).join("|")})`;

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={LocalComponents} />
        <Route path={pageRoute} exact={false} component={Page} />
        <Route path="*" component={Error} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
