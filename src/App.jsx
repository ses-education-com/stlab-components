import React from "react";
// import {Link} from 'react-router-dom';

import LocalComponents from "./dev/local-components";
import BundledComponents from './dev/bundled-components';
import {BrowserRouter, Route} from "react-router-dom";
import { NavLink } from "react-router-dom";
import Error from "./dev/error";
import { Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <ul>
        <li><NavLink to={"/"}>Local components</NavLink></li>
        <li><NavLink to={"/bundle"}>Bundled components</NavLink></li>
      </ul>
      <Switch>
        <Route path="/" exact={true} component={LocalComponents} />
        <Route path="/bundle" exact={true} component={BundledComponents} />
        <Route path="*" component={Error} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
