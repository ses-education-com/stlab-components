import AdminTable from './components/admin-table';
import AutoBreadcrumbs from './components/auto-breadcrumbs';
import AsyncButton from './components/async-button';
import AvatarSelector from './components/avatar-selector';
import ConfirmDialog from './components/confirm-dialog';
import CustomCardList from './components/custom-card-list';
import ImageSelector from './components/image-selector';
import ModalWindow from './components/modal-window';
import Notifications from './components/notifications';
import PasswordChangeDialog from './components/password-change-dialog';
import Spinner from './components/spinner';
import SearchableDropdown from './components/searchable-dropdown';
// import TinymceEditor from './components/tinymce-editor';
// import Parser, {debounce, pipeline} from './components/parser';
import {showMessage, deleteMessage, hideMessage, clearAllMessages } from './components/notifications/notificationActions';
import { actionTypes as notificationsActionTypes} from './components/notifications';
import  notificationsReducers from './components/notifications/reducers';

// console.debug("notificationsReducers:", notificationsReducers);

export {
            AdminTable, 
            AutoBreadcrumbs,
            AsyncButton,
            AvatarSelector,
            ConfirmDialog,
            CustomCardList,
            ImageSelector,
            ModalWindow,
            Notifications,
            // Parser,
            PasswordChangeDialog,
            SearchableDropdown,
            Spinner,
            // TinymceEditor,
            // debounce, 
            // pipeline, 
            showMessage, 
            hideMessage, 
            deleteMessage, 
            clearAllMessages,
            notificationsActionTypes,
            notificationsReducers
        };