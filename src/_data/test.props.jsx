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
    PasswordChangeDialog,
    SearchableDropdown

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
    "seachable-dropdown":{
        pageTitle: "SearchableDropdown",
        Component: SearchableDropdown,
        items: [
            {
                "iso639-1": "en",
                "english_name": "English",
                "local_name": "English",
                "english_short": "eng",
                "local_short": "eng",
                "direction": "ltr",
                "active": 1
            },
            {
                "iso639-1": "es",
                "english_name": "Spanish",
                "local_name": "Español",
                "english_short": "spa",
                "local_short": "esp",
                "direction": "ltr",
                "active": 1
            },
            {
                "iso639-1": "he",
                "english_name": "Hebrew",
                "local_name": "עברית",
                "english_short": "heb",
                "local_short": "עבר",
                "direction": "rtl",
                "active": 1
            },
            {
                "iso639-1": "ru",
                "english_name": "Russian",
                "local_name": "Русский",
                "english_short": "rus",
                "local_short": "рус",
                "direction": "ltr",
                "active": 1
            },
            {
                "iso639-1": "zh",
                "english_name": "Chinese",
                "local_name": "中文",
                "english_short": "chi",
                "local_short": "中文",
                "direction": "ltr",
                "active": 1
            }
        ],
        searchFields: [
            "english_name", "english_short", "local_name", "direction"
        ],
        onSelect: console.debug,
        label: "Searchable Dropdown Example",
        variant: "outlined",

        autocompleteProps: {
            getOptionLabel: (o) => `${o["iso639-1"]} : ${o.english_name}`
        }
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