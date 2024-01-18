import { 
    AdminTable, 
    AutoBreadcrumbs, 
    Spinner,
    AsyncButton,
    AvatarSelector,
    ConfirmDialog,
    CustomCardList,
    ImageSelector,
    ModalWindow,
    Notifications,
    PasswordChangeDialog

 } from "../export";

const props = {
    "auto-breadcrumbs": {
        pageTitle: "AutoBreadcrumbs",
        Component: AutoBreadcrumbs,
        "items": [
            {
              "to": "/",
              "text": "Home"
            },
            {
              "to": "/something",
              "text": "Something"
            },
            {
              "to": "/something-else",
              "text": "Something Else"
            }
          ]
    },
    "admin-table": {
        pageTitle: "AdminTable",
        Component: AdminTable,
        autoHeight: true,
        columns: [

        ],
        rows: [

        ]
    },
    "async-button": {
        pageTitle: "AsyncButton",
        Component: AsyncButton        
    },
    "avatar-selector": {
        pageTitle: "AvatarSelector",
        Component: AvatarSelector        
    },
    "spinner": {
        pageTitle: "Spinner",
        Component: Spinner        
    },
    "image-selector": {
        pageTitle: "ImageSelector",
        Component: ImageSelector
    },
    "confirm-dialog": {
        pageTitle: "ConfirmDialog",
        Component: ConfirmDialog,
        header: "Are you sure you want to stop?",
        prompt: "Think about it!",
        open: true,
        onClose: (ev) => {
            ev.target.closest('div[role="presentation"]').setAttribute( "style", "display: none")
        },
        onConfirm: (ev) => {
            ev.target.closest('div[role="presentation"]').setAttribute( "style", "display: none")
        }
    },
    "notifications": {
        pageTitle: "Notifications",
        Component: Notifications,
        messages: [
            {
                message: "Error",
                type: "error"
            },
            {
                message: "Warning",
                type: "warning"
            },
            {
                message: "Info",
                type: "info"
            },
            {
                message: "Success",
                type: "success"
            },
        ]
    },
    "modal-window": {
        pageTitle: "ModalWindow",
        Component: ModalWindow,
        header: "Just a modal window",
        children:  "Nothing interesting here",
        open: true,
        onClose: (ev) => {
            ev.target.closest('div[role="presentation"]').setAttribute( "style", "display: none")
        },
        onConfirm: () => (ev) => {
            ev.target.closest('div[role="presentation"]').setAttribute( "style", "display: none")
        }
    },
    "password-change-dialog" :{
        pageTitle: "Password Change Dialog",
        Component: PasswordChangeDialog,
        open: true,
        onClose: (ev) => ev.target.closest("[role='presentation']").setAttribute("style", "display: none") 
        ,
        headerText: "This is the header text",
        promptText: "Here goes the prompt to change the password",
        passwordLabelText: "Password label text here",
        password2LabelText: "Confirm password label text here",
        saveText: "Save btn txt here",
        cancelText: "Cancel btn txt here"
    },
    "custom-card-list" :{
        pageTitle: "Custom Card List",
        Component: CustomCardList,
        // items: [11, 2, 3 ]
        items: [
            {
                title: "Item 1",
                description: "Lorem ipsum goes here for some time",
                link: "/custom-card-list/1"
            },
            {
                title: "Item 2",
                link: "/custom-card-list"
            },
            {
                title: "Item 3",
                description: "Oops"
            }
        ]
    },
}

export default props;