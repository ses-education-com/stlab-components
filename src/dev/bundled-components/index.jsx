import React from 'react';
// import { Spinner} from "../../dist/index.esm"
// import { AdminTable, AutoBreadcrumbs, AvatarSelector, Parser, Spinner } from "../../export";
// import { debounce, pipeline, showMessage, deleteMessage, clearAllMessages, hideMessage } from "../../export";

// import colorList from '../../_data/colors.json';
// import colorColumns from '../../_data/colors.cols.json';
// import breadcrumbs from '../../_data/breadcrumbs.json';

const BundledComponents = () => {
    return (<div>
        <h1>Bundled components (built version in /dist)</h1>
        <h2>AutoBreadcrumbs</h2>
        {/* <AutoBreadcrumbs items={breadcrumbs} />
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
        </div> */}
      </div>
      )
}

export default BundledComponents;