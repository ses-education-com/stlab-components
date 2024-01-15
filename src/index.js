import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import * as serviceWorker from './serviceWorker'

import AutoBreadcrumbs from './components/auto-breadcrumbs';
import ModalWindow from './components/modal-window';
import AdminTable from './components/admin-table';
import AvatarSelector from './components/avatar-selector';
import ConfirmDialog from './components/confirm-dialog';  

ReactDOM.render(
  <React.StrictMode><App /></React.StrictMode>,
  document.getElementById('root')
);

// serviceWorker.unregister();


export {AdminTable, AutoBreadcrumbs, AvatarSelector, ConfirmDialog};