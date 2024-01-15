import React from "react";
// import {Link} from 'react-router-dom';
// import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import AdminTable from "./components/admin-table";

import AutoBreadcrumbs from "./components/auto-breadcrumbs";
import AvatarSelector from './components/avatar-selector';
import Spinner from './components/spinner';

import colorList from './_data/colors.json';
import colorColumns from './_data/colors.cols.json';
import breadcrumbs from './_data/breadcrumbs.json';
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import { Parser } from "./export";

function App() {
  return (
    <BrowserRouter>
      
      <div>
        <h2>AutoBreadcrumbs</h2>
        <AutoBreadcrumbs items={breadcrumbs} />
        <h1>Shared components</h1>
        <h2>Admin Table</h2>
        <div>
          <AdminTable autoHeight columns={colorColumns} rows={colorList.map( (c,id) => ({...c, id}))} />
        </div>
        <div>
          <h2>Spinner</h2>
          <Spinner />
        </div>
        <div>
          <h2>Avatar selector</h2>
          <div style={{display: "flex", width: 200, height: 300}}>
           <AvatarSelector />
          </div>
        </div>
        <div>
          <h2>Parser</h2>
          <Parser />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
