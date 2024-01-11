import React from "react";
// import {Link} from 'react-router-dom';
// import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import AdminTable from "./components/admin-table";
import colorList from './_data/colors.json';
import colorColumns from './_data/colors.cols.json';

function App() {
  return (
    <div>
      <h1>Shared components</h1>
      <h2>Admin Table</h2>
      <div>
        <AdminTable autoHeight columns={colorColumns} rows={colorList.map( (c,id) => ({...c, id}))} />
      </div>
    </div>
  );
}

export default App;
