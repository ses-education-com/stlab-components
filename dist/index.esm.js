/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ var __webpack_modules__ = ({

/***/ "./src/components/admin-table/grid-search-component.jsx":
/*!**************************************************************!*\
  !*** ./src/components/admin-table/grid-search-component.jsx ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_data_grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/data-grid */ \"@material-ui/data-grid\");\n/* harmony import */ var _material_ui_data_grid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_data_grid__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == typeof i ? i : String(i); }\nfunction _toPrimitive(t, r) { if (\"object\" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != typeof i) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\n\n\n\nclass GridSearchComponent extends (react__WEBPACK_IMPORTED_MODULE_2___default().Component) {\n  constructor() {\n    super(...arguments);\n    _defineProperty(this, \"state\", {\n      search: \"\"\n    });\n    _defineProperty(this, \"updateValue\", _ref => {\n      let {\n        target\n      } = _ref;\n      const {\n        value: search\n      } = target;\n      // Updating table here re-renders the table and focus is lost, so we opt for a \"go\" action/button\n      this.setState({\n        search\n      });\n      if (search === \"\" && typeof this.props.onChange === \"function\") this.props.onChange(search);\n    });\n    _defineProperty(this, \"onKeyDown\", e => {\n      if (e.keyCode == 13 && typeof this.props.onChange === \"function\") this.props.onChange(this.state.search);\n    });\n  }\n  componentDidMount() {\n    const {\n      search = \"\"\n    } = this.props;\n    this.setState({\n      search\n    });\n  }\n  componentDidUpdate(prevProps) {\n    const {\n      search\n    } = this.props;\n    const {\n      search: prevSearch\n    } = prevProps;\n    if (search !== prevSearch) this.setState({\n      search\n    });\n  }\n  render() {\n    const {\n      onChange = console.debug,\n      placeholder = \"search...\"\n    } = this.props;\n    const {\n      search\n    } = this.state;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.TextField, {\n      InputProps: {\n        startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.InputAdornment, {\n          position: \"start\"\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_material_ui_data_grid__WEBPACK_IMPORTED_MODULE_1__.GridSearchIcon, null)),\n        endAdornment: search !== \"\" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.Button, {\n          onClick: () => onChange(search)\n        }, \"Go\")\n      },\n      name: \"search\",\n      value: search,\n      placeholder: placeholder,\n      onChange: this.updateValue,\n      onKeyDown: this.onKeyDown\n    });\n  }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GridSearchComponent);\n\n//# sourceURL=webpack://@ses-education/courses-components/./src/components/admin-table/grid-search-component.jsx?");

/***/ }),

/***/ "./src/components/admin-table/index.jsx":
/*!**********************************************!*\
  !*** ./src/components/admin-table/index.jsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var uniquid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uniquid */ \"uniquid\");\n/* harmony import */ var uniquid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uniquid__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_data_grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/data-grid */ \"@material-ui/data-grid\");\n/* harmony import */ var _material_ui_data_grid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_data_grid__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _grid_search_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./grid-search-component */ \"./src/components/admin-table/grid-search-component.jsx\");\n/* harmony import */ var _admin_table_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin-table.scss */ \"./src/components/admin-table/admin-table.scss\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__);\nfunction _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == typeof i ? i : String(i); }\nfunction _toPrimitive(t, r) { if (\"object\" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != typeof i) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\n// import { Button } from \"@material-ui/core\";\n\n\n\n\n\n\nconst CustomToolbar = _ref => {\n  let {\n    children\n  } = _ref;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_data_grid__WEBPACK_IMPORTED_MODULE_2__.GridToolbarContainer, {\n    className: \"admin-table-toolbar\"\n  }, children);\n};\nconst loadingOverlay = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_data_grid__WEBPACK_IMPORTED_MODULE_2__.GridOverlay, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n  style: {\n    position: \"absolute\",\n    top: 0,\n    width: \"100%\"\n  }\n}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.LinearProgress, null)));\nconst defaultComponents = {\n  loadingOverlay\n};\nclass AdminTable extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {\n  constructor() {\n    super(...arguments);\n    _defineProperty(this, \"state\", {\n      search: \"\",\n      id: null,\n      rows: [],\n      valueGetters: {}\n    });\n    _defineProperty(this, \"filterRows\", () => {\n      let {\n        rows = [],\n        searchFields = [],\n        columns = []\n      } = this.props;\n      let {\n        search,\n        valueGetters\n      } = this.state;\n      search = typeof search === \"string\" ? search.toLowerCase() : \"\";\n      console.debug(search, rows, searchFields);\n      if (search === \"\" || !Array.isArray(rows) || !Array.isArray(searchFields) || !rows.length > 0 || !searchFields.length > 0) {\n        return this.setState({\n          rows\n        });\n      }\n      console.debug(\"valueGetters\", valueGetters);\n      const newRows = rows.filter(row => {\n        let found = false;\n        for (let i = 0; i < searchFields.length && found === false; i++) {\n          // get current field name\n          const fieldName = searchFields[i];\n          const fieldValue = valueGetters[fieldName](\n          // pass field value as \"value\" argument inside an object,\n          // for that's what a value getter / formatter would expect\n          {\n            value: row[fieldName]\n          });\n          console.debug(\"valueGetter result\", fieldValue);\n          if (typeof fieldValue === \"string\" && fieldValue\n          // cast to lower case to make search case-insensitive\n          .toLowerCase().includes(search)) {\n            // console.debug(\"returning true on \", row[fieldName ])\n            found = true;\n          }\n        }\n        return found;\n      });\n      this.setState({\n        rows: [...newRows]\n      });\n    });\n    _defineProperty(this, \"onSearch\", search => this.setState({\n      search\n    }, () => this.filterRows()));\n  }\n  componentDidMount() {\n    const id = uniquid__WEBPACK_IMPORTED_MODULE_1___default()();\n    this.setState({\n      id\n    });\n    this.findFieldValueGetters();\n    this.filterRows();\n  }\n  componentDidUpdate(prevProps) {\n    const {\n      rows,\n      columns\n    } = this.props;\n    const {\n      rows: prevRows,\n      columns: prevColumns\n    } = prevProps;\n    if (columns !== prevColumns) this.findFieldValueGetters();\n    if (rows !== prevRows) {\n      this.filterRows();\n    }\n  }\n\n  /**\n   * Find value getters for each search field and store them as object hashed by field name\n   * @returns\n   */\n  findFieldValueGetters() {\n    const {\n      columns = [],\n      searchFields = []\n    } = this.props;\n    if (!Array.isArray(columns)) return;\n    const valueGetters = searchFields.reduce((res, f) => {\n      let column = columns.find(c => c.field === f);\n      // if there is a column...\n      const getter = column ?\n      // there is\n      typeof column.valueGetter === \"function\" ?\n      // return getter\n      column.valueGetter :\n      // no getter: let's check if there's a formatter\n      typeof column.valueFormatter === \"function\" ?\n      // return formatter\n      column.valueFormatter :\n      // no getter and no formatter: return value as is\n      _ref2 => {\n        let {\n          value\n        } = _ref2;\n        return value;\n      } :\n      // no column: return value as is\n      _ref3 => {\n        let {\n          value\n        } = _ref3;\n        return value;\n      };\n      return {\n        ...res,\n        [f]: getter\n      };\n    }, {});\n    this.setState({\n      valueGetters\n    });\n  }\n  render() {\n    let {\n      rows: propsRows,\n      columns = {},\n      // rows = [],\n      searchFields = [],\n      components = {},\n      buttons = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_data_grid__WEBPACK_IMPORTED_MODULE_2__.GridToolbarExport, null),\n      searchComponent,\n      searchPlaceholder = \"Search...\",\n      className,\n      rowHeight = 40,\n      ...other\n    } = this.props;\n    const {\n      search,\n      id,\n      rows\n    } = this.state;\n    console.debug(\"rows\", rows);\n    searchComponent = searchComponent || /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_grid_search_component__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      key: \"\".concat(id, \"-search\"),\n      search: search,\n      onChange: this.onSearch,\n      placeholder: searchPlaceholder\n    });\n    components = {\n      ...defaultComponents,\n      Toolbar: () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(CustomToolbar, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n        className: \"admin-table-buttons\"\n      }, buttons), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n        className: \"admin-table-search\"\n      }, searchComponent)),\n      ...components\n    };\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"admin-table-container\".concat(className ? \" \".concat(className) : \"\")\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_data_grid__WEBPACK_IMPORTED_MODULE_2__.DataGrid, _extends({\n      key: \"atable-\".concat(id)\n      // filterModel={filterModel}\n      ,\n      components: components,\n      rows: rows,\n      rowHeight: rowHeight,\n      columns: columns\n    }, other)));\n  }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdminTable);\n\n//# sourceURL=webpack://@ses-education/courses-components/./src/components/admin-table/index.jsx?");

/***/ }),

/***/ "./src/components/async-button/index.jsx":
/*!***********************************************!*\
  !*** ./src/components/async-button/index.jsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _async_button_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./async-button.scss */ \"./src/components/async-button/async-button.scss\");\nfunction _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == typeof i ? i : String(i); }\nfunction _toPrimitive(t, r) { if (\"object\" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != typeof i) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\n\n\n\nconst Loading = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.CircularProgress, {\n  className: \"loading-icon\"\n});\n\n/**\n * This button when clicked changes state to \"loading\", becomes disabled and shows loading icon,\n * waiting for the callback to return a result, and then returns to original state\n * **Props**\n * @var {function} onClick - async callback. The button will wait for it to finish and then will switch to normal state.\n * @var {*} icon anything that will be put as an icon next to button text. If not passed, nothing is shown\n * @var {string} iconPosition right|left|top|bottom the position the icon will be rendered in\n * @var {*} loadingIcon icon that will be shown in loading state. Defaults to <CircularProgress/>\n */\nclass AsyncButton extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {\n  constructor() {\n    super(...arguments);\n    _defineProperty(this, \"state\", {\n      loading: false\n    });\n    _defineProperty(this, \"clicked\", async ev => {\n      const {\n        onClick\n      } = this.props;\n      this.setState({\n        loading: true\n      });\n      try {\n        if (typeof onClick === \"function\") await onClick(ev);\n        this.setState({\n          loading: false\n        });\n      } catch (e) {\n        this.setState({\n          loading: false\n        });\n        if (typeof this.props.onError === \"function\") this.props.onError(e);\n      }\n    });\n  }\n  render() {\n    const {\n      icon,\n      loadingIcon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Loading, null),\n      iconPosition = \"left\",\n      children,\n      className = \"\",\n      ...otherProps\n    } = this.props;\n    const {\n      loading\n    } = this.state;\n    console.debug(\"async button Loading:\", loading);\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Button, _extends({\n      disabled: loading,\n      className: \"async-button icon-\".concat(iconPosition, \" \").concat(className)\n    }, otherProps, {\n      onClick: this.clicked\n    }), loading ? loadingIcon : icon && icon, children);\n  }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AsyncButton);\n\n//# sourceURL=webpack://@ses-education/courses-components/./src/components/async-button/index.jsx?");

/***/ }),

/***/ "./src/components/auto-breadcrumbs/index.jsx":
/*!***************************************************!*\
  !*** ./src/components/auto-breadcrumbs/index.jsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _auto_breadcrumbs_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auto-breadcrumbs.scss */ \"./src/components/auto-breadcrumbs/auto-breadcrumbs.scss\");\n/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons */ \"@material-ui/icons\");\n/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons__WEBPACK_IMPORTED_MODULE_4__);\nfunction _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n\n\nconst BreadCrumbText = _ref => {\n  let {\n    item,\n    defaultItemText\n  } = _ref;\n  // if both icon and text are present, show both\n  return item.icon && item.text ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, item.icon, item.text) : item.text || item.icon || item.to || defaultItemText;\n};\nconst BreadcrumbsItem = _ref2 => {\n  let {\n    item,\n    defaultItemText\n  } = _ref2;\n  // if .to defined ...\n  return item.to ?\n  /*#__PURE__*/\n  // show link\n  react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {\n    className: \"breadcrumbs-item\",\n    to: item.to\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BreadCrumbText, {\n    item,\n    defaultItemText\n  })) :\n  /*#__PURE__*/\n  // otherwise show typography. Use default text if no text is passed\n  react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Typography, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BreadCrumbText, {\n    item,\n    defaultItemText\n  }));\n};\n\n/**\n * Breadcrumbs component that renders an array of elements.\n *\n * BreadcrumbItemData type:\n * ```js\n * {\n *   to: '/some/url1',\n *   text: 'Breadcrumb Text 1', //\n *   icon: <Home /> // optional ReactNode to show as icon. If present, text is optional\n * }```\n *\n * props:\n * **items** : array of BreadcrumbItemData objects\n * **className** : string that will replace the default class name auto-breadcrumbs\n * **defaultItemText** :  string that will replace empty text, if found.\n * **showLastItemAsLink** : boolean - defines whether the last item is shown with or without link by default. Defaults to false\n *\n * @usage ```js\n * <Breadcrumbs items={[ {to: \"/\", text:\"Home\"}, {to: \"/catalog\", text:\"Catalog\"} ]} />\n * ```\n */\nclass AutoBreadcrumbs extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {\n  render() {\n    let {\n      defaultItemText = '***',\n      items,\n      className = 'auto-breadcrumbs',\n      showLastItemAsLink = false,\n      separator = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_4__.ChevronRight, null),\n      ...other\n    } = this.props;\n    if (!Array.isArray(items)) {\n      console.error('Breadcrumbs: wrong type of items passed. Expected array of objects, passed:', typeof items, '\\nReplaced with empty array.');\n      items = [];\n    }\n    if (!showLastItemAsLink && items.length > 0) items[items.length - 1].to = null;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Breadcrumbs, _extends({\n      separator\n    }, other), items.map((item, ind) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BreadcrumbsItem, {\n      item,\n      defaultItemText,\n      key: \"breadcrumb-item-\".concat(ind)\n    }))));\n  }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AutoBreadcrumbs);\n\n//# sourceURL=webpack://@ses-education/courses-components/./src/components/auto-breadcrumbs/index.jsx?");

/***/ }),

/***/ "./src/components/avatar-selector/index.jsx":
/*!**************************************************!*\
  !*** ./src/components/avatar-selector/index.jsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/icons */ \"@material-ui/icons\");\n/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _avatar_selector_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./avatar-selector.scss */ \"./src/components/avatar-selector/avatar-selector.scss\");\n\n\n\n\nclass AvatarSelector extends (react__WEBPACK_IMPORTED_MODULE_2___default().Component) {\n  render() {\n    const {\n      image,\n      defaultImage = \"https://images.ses-education.com/courses/users/user-no-image.png\",\n      onChange,\n      onDelete\n    } = this.props;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(\"label\", {\n      className: \"avatar-selector\",\n      htmlFor: \"image-file\"\n    }, image && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.IconButton, {\n      onClick: onDelete\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_1__.Delete, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(\"input\", {\n      type: \"file\",\n      id: \"image-file\",\n      accept: \"image/*\",\n      style: {\n        display: \"none\"\n      },\n      onChange: onChange\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(\"div\", {\n      className: \"avatar-image\",\n      style: {\n        backgroundImage: \"url(\".concat(image || defaultImage, \")\")\n      }\n    }));\n  }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AvatarSelector);\n\n//# sourceURL=webpack://@ses-education/courses-components/./src/components/avatar-selector/index.jsx?");

/***/ }),

/***/ "./src/components/confirm-dialog/index.jsx":
/*!*************************************************!*\
  !*** ./src/components/confirm-dialog/index.jsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _modal_window__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modal-window */ \"./src/components/modal-window/index.jsx\");\nfunction _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\nclass ConfirmDialog extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {\n  render() {\n    const {\n      prompt,\n      onConfirm,\n      onClose,\n      cancelText = \"Cancel\",\n      confirmText = \"Yes\",\n      ...other\n    } = this.props;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_modal_window__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _extends({\n      formClassName: \"confirm-dialog stretch\"\n    }, other, {\n      onClose: onClose,\n      buttons: [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.Button, {\n        variant: \"contained\",\n        color: \"primary\",\n        onClick: onConfirm\n      }, confirmText), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.Button, {\n        variant: \"contained\",\n        color: \"secondary\",\n        onClick: onClose\n      }, cancelText)]\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.Typography, null, prompt));\n  }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConfirmDialog);\n\n//# sourceURL=webpack://@ses-education/courses-components/./src/components/confirm-dialog/index.jsx?");

/***/ }),

/***/ "./src/components/image-selector/index.jsx":
/*!*************************************************!*\
  !*** ./src/components/image-selector/index.jsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/icons */ \"@material-ui/icons\");\n/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _confirm_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../confirm-dialog */ \"./src/components/confirm-dialog/index.jsx\");\n/* harmony import */ var _image_selector_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./image-selector.scss */ \"./src/components/image-selector/image-selector.scss\");\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == typeof i ? i : String(i); }\nfunction _toPrimitive(t, r) { if (\"object\" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != typeof i) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\n\n\n\n// import ConfirmDialog from \"@ses-education.stlab-shared/confirm-dialog\";\n\n\n\n/**\n * Displays user avatar and allows to update it\n */\nclass ImageSelector extends (react__WEBPACK_IMPORTED_MODULE_2___default().Component) {\n  constructor() {\n    super(...arguments);\n    _defineProperty(this, \"state\", {\n      showConfirmDelete: false\n    });\n    _defineProperty(this, \"confirmDeletion\", ev => {\n      this.setState({\n        showConfirmDelete: true\n      });\n    });\n  }\n  render() {\n    const {\n      image,\n      defaultImage,\n      onDelete,\n      onSelect,\n      confirmationText = \"Delete image?\",\n      closeButtonClass = \"image-selector-close\"\n    } = this.props;\n    const {\n      showConfirmDelete\n    } = this.state;\n    console.debug(\"ImageSelector\", image, defaultImage);\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(\"label\", {\n      className: \"image-selector\",\n      htmlFor: \"image-file\"\n    }, image && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.IconButton, {\n      onClick: this.confirmDeletion,\n      className: closeButtonClass\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_1__.Delete, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(\"input\", {\n      type: \"file\",\n      id: \"image-file\",\n      name: \"image\",\n      accept: \"image/*\",\n      style: {\n        display: \"none\"\n      },\n      onChange: onSelect\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(\"div\", {\n      className: \"display\",\n      style: {\n        backgroundImage: \"url(\".concat(image || defaultImage, \")\")\n      }\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_confirm_dialog__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      open: showConfirmDelete,\n      prompt: confirmationText,\n      onConfirm: async () => {\n        await onDelete();\n        this.setState({\n          showConfirmDelete: false\n        });\n      },\n      onClose: () => this.setState({\n        showConfirmDelete: false\n      })\n    }));\n  }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ImageSelector);\n\n//# sourceURL=webpack://@ses-education/courses-components/./src/components/image-selector/index.jsx?");

/***/ }),

/***/ "./src/components/modal-window/index.jsx":
/*!***********************************************!*\
  !*** ./src/components/modal-window/index.jsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _modal_window_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal-window.scss */ \"./src/components/modal-window/modal-window.scss\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n/**\n * Base frame for modal windows that has header, content and buttons sections\n */\nclass ModalWindow extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {\n  render() {\n    const {\n      header,\n      children,\n      buttons,\n      onSubmit = form => {\n        console.debug(form);\n        return false;\n      },\n      formClassName,\n      ...other\n    } = this.props;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Modal, other, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"form\", {\n      className: \"modal-window\".concat(formClassName ? \" \".concat(formClassName) : \"\"),\n      onSubmit: onSubmit\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"modal-header\"\n    }, header), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"modal-content\"\n    }, children), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      item: true,\n      className: \"modal-buttons-container\"\n    }, buttons)));\n  }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ModalWindow);\n\n//# sourceURL=webpack://@ses-education/courses-components/./src/components/modal-window/index.jsx?");

/***/ }),

/***/ "./src/components/notifications/actionTypes.js":
/*!*****************************************************!*\
  !*** ./src/components/notifications/actionTypes.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst ActionTypes = {\n  SHOW_MESSAGE: 'SHOW_MESSAGE',\n  DELETE_MESSAGE: 'DELETE_MESSAGE',\n  HIDE_MESSAGE: 'HIDE_MESSAGE',\n  CLEAR_ALL_MESSAGES: 'CLEAR_ALL_MESSAGES'\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ActionTypes);\n\n//# sourceURL=webpack://@ses-education/courses-components/./src/components/notifications/actionTypes.js?");

/***/ }),

/***/ "./src/components/notifications/index.jsx":
/*!************************************************!*\
  !*** ./src/components/notifications/index.jsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   actionTypes: () => (/* reexport safe */ _actionTypes__WEBPACK_IMPORTED_MODULE_5__[\"default\"]),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   reducers: () => (/* reexport safe */ _reducers__WEBPACK_IMPORTED_MODULE_6__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/lab/Alert */ \"@material-ui/lab/Alert\");\n/* harmony import */ var _material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _notifications_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notifications.scss */ \"./src/components/notifications/notifications.scss\");\n/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons */ \"@material-ui/icons\");\n/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./actionTypes */ \"./src/components/notifications/actionTypes.js\");\n/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reducers */ \"./src/components/notifications/reducers.js\");\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == typeof i ? i : String(i); }\nfunction _toPrimitive(t, r) { if (\"object\" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != typeof i) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nfunction _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n\n\n\n\nconst defaultConfig = {\n  // number of milliseconds to auto-close the message in\n  // if empty - message won't close\n  autoCloseIn: 3000,\n  // array of Alert closing reasons that should not close the alert\n  doNotCloseOn: [\"clickaway\"],\n  // closing animation time in milliseconds\n  animationTime: 300,\n  alertProps: {\n    elevation: 6,\n    variant: \"filled\"\n  },\n  manyMessagesIs: 2\n  // closeMethod: \"delete\", // delete|hide  \n};\nconst CustomAlert = props => {\n  const {\n    children,\n    onClose,\n    autoCloseIn,\n    /**\n     * Array of reasons that won't close the alert. Pass null or empty array to close on every reason\n     */\n    doNotCloseOn,\n    // = [\"clickaway\"]\n    animationTime = 300,\n    ...other\n  } = props;\n  let [cssClass, setCssClass] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\");\n  let [isClosing, setIsClosing] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n\n  /**\n   * Starts close animation and sets onClose timer to animation end\n   */\n  const closeThis = (event, reason) => {\n    // console.debug(\"closethis\", reason);\n\n    if (Array.isArray(doNotCloseOn) && doNotCloseOn.includes(reason)) {\n      // console.debug(\"closethis: do not close because of reason\", reason);\n      return;\n    }\n    setCssClass(\"closing\");\n    setTimeout(onClose, animationTime);\n  };\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    if (!isClosing && autoCloseIn && typeof onClose === \"function\") {\n      // console.debug(\"closethis autoCloseIn\", autoCloseIn);\n      setIsClosing(true);\n      // set auto-close timer\n      setTimeout(closeThis, autoCloseIn);\n    }\n  });\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Snackbar, {\n    open: true,\n    onClose: closeThis,\n    className: cssClass\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_2___default()), _extends({}, other, {\n    onClose: closeThis\n  }), children));\n};\nclass Notifications extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {\n  constructor() {\n    super(...arguments);\n    _defineProperty(this, \"closeHandler\", index => {\n      const {\n        onCloseMessage\n      } = this.props;\n      if (typeof onCloseMessage === \"function\") {\n        onCloseMessage(index);\n        return;\n      }\n    });\n  }\n  render() {\n    let {\n      messages,\n      className = \"notifications-container\",\n      config = {},\n      onCloseAll\n    } = this.props;\n\n    // const { messages } = this.state;\n\n    console.debug(\"Notofications messages:\", messages);\n    config = {\n      ...defaultConfig,\n      ...config\n    };\n    const {\n      autoCloseIn,\n      doNotCloseOn,\n      // closeMethod,     \n      animationTime,\n      alertProps,\n      topToBottom,\n      manyMessagesIs\n    } = config;\n    if (!Array.isArray(messages)) {\n      console.error(\"Notitifactions error: messages is not an array!\");\n      return \"\";\n    }\n\n    // console.debug(\"messages\", messages.reverse() );\n\n    messages = topToBottom ? [...messages].reverse() : messages;\n    const visibleMessages = messages.filter(m => !m.hidden);\n    const messageCount = visibleMessages.length;\n    const hasManyItems = messageCount > manyMessagesIs;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"\".concat(className).concat(hasManyItems ? \" has-many-items\" : \"\")\n    }, hasManyItems && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.Button, {\n      className: \"close-button\",\n      onClick: onCloseAll || (() => console.debug(\"closing all\"))\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_icons__WEBPACK_IMPORTED_MODULE_4__.Close, {\n      size: \"small\",\n      color: \"secondary\"\n    }), \"close all\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"messages\"\n    }, !messageCount ? null : visibleMessages.map(m => {\n      console.debug(\"message \", m);\n\n      // don't show hidden messages\n      if (m.hidden) return null;\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(CustomAlert, _extends({\n        key: \"notification-\".concat(m.id),\n        severity: m.type,\n        onClose: () => this.closeHandler(m.id),\n        autoCloseIn: m.autoCloseIn === null || m.autoCloseIn === undefined ? autoCloseIn : m.autoCloseIn,\n        doNotCloseOn,\n        animationTime\n      }, alertProps), m.message);\n    })));\n  }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Notifications);\n\n\n//# sourceURL=webpack://@ses-education/courses-components/./src/components/notifications/index.jsx?");

/***/ }),

/***/ "./src/components/notifications/notificationActions.js":
/*!*************************************************************!*\
  !*** ./src/components/notifications/notificationActions.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   clearAllMessages: () => (/* binding */ clearAllMessages),\n/* harmony export */   deleteMessage: () => (/* binding */ deleteMessage),\n/* harmony export */   hideMessage: () => (/* binding */ hideMessage),\n/* harmony export */   showMessage: () => (/* binding */ showMessage)\n/* harmony export */ });\n/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actionTypes */ \"./src/components/notifications/actionTypes.js\");\n\nconst showMessage = (message, type, autoCloseIn) => {\n  return dispatch => {\n    console.debug(\"showMessage is dispatching with\", dispatch);\n    dispatch({\n      type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__[\"default\"].SHOW_MESSAGE,\n      payload: {\n        message,\n        type,\n        autoCloseIn\n      }\n    });\n  };\n};\nconst hideMessage = payload => {\n  return dispatch => {\n    dispatch({\n      type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__[\"default\"].HIDE_MESSAGE,\n      payload\n    });\n  };\n};\nconst deleteMessage = payload => {\n  return dispatch => {\n    dispatch({\n      type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__[\"default\"].DELETE_MESSAGE,\n      payload\n    });\n  };\n};\nconst clearAllMessages = () => {\n  return dispatch => {\n    dispatch({\n      type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__[\"default\"].CLEAR_ALL_MESSAGES\n    });\n  };\n};\n\n//# sourceURL=webpack://@ses-education/courses-components/./src/components/notifications/notificationActions.js?");

/***/ }),

/***/ "./src/components/notifications/reducers.js":
/*!**************************************************!*\
  !*** ./src/components/notifications/reducers.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actionTypes */ \"./src/components/notifications/actionTypes.js\");\n/* harmony import */ var uniquid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uniquid */ \"uniquid\");\n/* harmony import */ var uniquid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uniquid__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst initialState = {\n  ...{\n    messages: [],\n    // array of {message: String, type: String (danger|warning|success|info)}\n    maxMessages: 5\n  }\n  // overwrite values from local state, if any\n  // ...localStorageState,\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((state, action) => {\n  state = typeof state === \"object\" ? {\n    ...initialState,\n    ...state\n  } : {\n    ...initialState\n  };\n  let {\n    messages,\n    maxMessages\n  } = state;\n  let nowReadable = new Date().toGMTString();\n  let message, tmpMessages, messageIndex;\n  const {\n    type,\n    payload\n  } = action;\n  let updatedState = {\n    ...state\n  };\n  switch (type) {\n    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__[\"default\"].SHOW_MESSAGE:\n      if (Array.isArray(messages)) {\n        // todo: validate payload type\n\n        // console.debug(\"show message\", payload);\n        messages = [...messages, {\n          ...payload,\n          id: uniquid__WEBPACK_IMPORTED_MODULE_1___default()(\"msg_\"),\n          timestamp: nowReadable\n        }];\n        if (messages.length > maxMessages) {\n          // cut the beginning to max messages number\n          messages = messages.slice(-maxMessages);\n        }\n        updatedState = {\n          ...state,\n          messages\n        };\n      }\n      break;\n    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__[\"default\"].DELETE_MESSAGE:\n      if (Array.isArray(messages) && messages.length > 0) {\n        messageIndex = messages.findIndex(m => m.id === payload) || 0;\n\n        // need this to avoid errors on assigning element\n        tmpMessages = [...messages];\n        tmpMessages.splice(messageIndex, 1);\n        messages = [...tmpMessages];\n        updatedState = {\n          ...state,\n          messages\n        };\n      }\n      break;\n    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__[\"default\"].HIDE_MESSAGE:\n      if (Array.isArray(messages) && messages.length > 0) {\n        messageIndex = messages.findIndex(m => m.id === payload) || 0;\n        console.debug(\"hiding message\", messageIndex, payload);\n\n        // need this to avoid errors on assigning values\n        tmpMessages = [...messages];\n        message = tmpMessages[messageIndex];\n        tmpMessages[messageIndex] = {\n          ...message,\n          hidden: true\n        };\n        messages = [...tmpMessages];\n        updatedState = {\n          ...state,\n          messages\n        };\n      }\n      break;\n    case _actionTypes__WEBPACK_IMPORTED_MODULE_0__[\"default\"].CLEAR_ALL_MESSAGES:\n      if (Array.isArray(messages) && messages.length > 0) {\n        messages = [];\n        updatedState = {\n          ...state,\n          messages\n        };\n      }\n      break;\n    default:\n    //newState = state;\n  }\n  return updatedState;\n});\n\n//# sourceURL=webpack://@ses-education/courses-components/./src/components/notifications/reducers.js?");

/***/ }),

/***/ "./src/components/spinner/index.jsx":
/*!******************************************!*\
  !*** ./src/components/spinner/index.jsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst Spinner = props => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.Container, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.CircularProgress, {\n    color: \"primary\"\n  }));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Spinner);\n\n//# sourceURL=webpack://@ses-education/courses-components/./src/components/spinner/index.jsx?");

/***/ }),

/***/ "./src/export.jsx":
/*!************************!*\
  !*** ./src/export.jsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AdminTable: () => (/* reexport safe */ _components_admin_table__WEBPACK_IMPORTED_MODULE_0__[\"default\"]),\n/* harmony export */   AsyncButton: () => (/* reexport safe */ _components_async_button__WEBPACK_IMPORTED_MODULE_2__[\"default\"]),\n/* harmony export */   AutoBreadcrumbs: () => (/* reexport safe */ _components_auto_breadcrumbs__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n/* harmony export */   AvatarSelector: () => (/* reexport safe */ _components_avatar_selector__WEBPACK_IMPORTED_MODULE_3__[\"default\"]),\n/* harmony export */   ConfirmDialog: () => (/* reexport safe */ _components_confirm_dialog__WEBPACK_IMPORTED_MODULE_4__[\"default\"]),\n/* harmony export */   ImageSelector: () => (/* reexport safe */ _components_image_selector__WEBPACK_IMPORTED_MODULE_5__[\"default\"]),\n/* harmony export */   ModalWindow: () => (/* reexport safe */ _components_modal_window__WEBPACK_IMPORTED_MODULE_6__[\"default\"]),\n/* harmony export */   Notifications: () => (/* reexport safe */ _components_notifications__WEBPACK_IMPORTED_MODULE_7__[\"default\"]),\n/* harmony export */   Spinner: () => (/* reexport safe */ _components_spinner__WEBPACK_IMPORTED_MODULE_8__[\"default\"]),\n/* harmony export */   clearAllMessages: () => (/* reexport safe */ _components_notifications_notificationActions__WEBPACK_IMPORTED_MODULE_9__.clearAllMessages),\n/* harmony export */   deleteMessage: () => (/* reexport safe */ _components_notifications_notificationActions__WEBPACK_IMPORTED_MODULE_9__.deleteMessage),\n/* harmony export */   hideMessage: () => (/* reexport safe */ _components_notifications_notificationActions__WEBPACK_IMPORTED_MODULE_9__.hideMessage),\n/* harmony export */   notificationsActionTypes: () => (/* reexport safe */ _components_notifications__WEBPACK_IMPORTED_MODULE_7__.actionTypes),\n/* harmony export */   notificationsReducers: () => (/* reexport safe */ _components_notifications_reducers__WEBPACK_IMPORTED_MODULE_10__[\"default\"]),\n/* harmony export */   showMessage: () => (/* reexport safe */ _components_notifications_notificationActions__WEBPACK_IMPORTED_MODULE_9__.showMessage)\n/* harmony export */ });\n/* harmony import */ var _components_admin_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/admin-table */ \"./src/components/admin-table/index.jsx\");\n/* harmony import */ var _components_auto_breadcrumbs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/auto-breadcrumbs */ \"./src/components/auto-breadcrumbs/index.jsx\");\n/* harmony import */ var _components_async_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/async-button */ \"./src/components/async-button/index.jsx\");\n/* harmony import */ var _components_avatar_selector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/avatar-selector */ \"./src/components/avatar-selector/index.jsx\");\n/* harmony import */ var _components_confirm_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/confirm-dialog */ \"./src/components/confirm-dialog/index.jsx\");\n/* harmony import */ var _components_image_selector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/image-selector */ \"./src/components/image-selector/index.jsx\");\n/* harmony import */ var _components_modal_window__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/modal-window */ \"./src/components/modal-window/index.jsx\");\n/* harmony import */ var _components_notifications__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/notifications */ \"./src/components/notifications/index.jsx\");\n/* harmony import */ var _components_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/spinner */ \"./src/components/spinner/index.jsx\");\n/* harmony import */ var _components_notifications_notificationActions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/notifications/notificationActions */ \"./src/components/notifications/notificationActions.js\");\n/* harmony import */ var _components_notifications_reducers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/notifications/reducers */ \"./src/components/notifications/reducers.js\");\n\n\n\n\n\n\n\n\n\n// import TinymceEditor from './components/tinymce-editor';\n// import Parser, {debounce, pipeline} from './components/parser';\n\n\n\n\n// console.debug(\"notificationsReducers:\", notificationsReducers);\n\n\n\n//# sourceURL=webpack://@ses-education/courses-components/./src/export.jsx?");

/***/ }),

/***/ "./src/components/admin-table/admin-table.scss":
/*!*****************************************************!*\
  !*** ./src/components/admin-table/admin-table.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://@ses-education/courses-components/./src/components/admin-table/admin-table.scss?");

/***/ }),

/***/ "./src/components/async-button/async-button.scss":
/*!*******************************************************!*\
  !*** ./src/components/async-button/async-button.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://@ses-education/courses-components/./src/components/async-button/async-button.scss?");

/***/ }),

/***/ "./src/components/auto-breadcrumbs/auto-breadcrumbs.scss":
/*!***************************************************************!*\
  !*** ./src/components/auto-breadcrumbs/auto-breadcrumbs.scss ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://@ses-education/courses-components/./src/components/auto-breadcrumbs/auto-breadcrumbs.scss?");

/***/ }),

/***/ "./src/components/avatar-selector/avatar-selector.scss":
/*!*************************************************************!*\
  !*** ./src/components/avatar-selector/avatar-selector.scss ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://@ses-education/courses-components/./src/components/avatar-selector/avatar-selector.scss?");

/***/ }),

/***/ "./src/components/image-selector/image-selector.scss":
/*!***********************************************************!*\
  !*** ./src/components/image-selector/image-selector.scss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://@ses-education/courses-components/./src/components/image-selector/image-selector.scss?");

/***/ }),

/***/ "./src/components/modal-window/modal-window.scss":
/*!*******************************************************!*\
  !*** ./src/components/modal-window/modal-window.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://@ses-education/courses-components/./src/components/modal-window/modal-window.scss?");

/***/ }),

/***/ "./src/components/notifications/notifications.scss":
/*!*********************************************************!*\
  !*** ./src/components/notifications/notifications.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://@ses-education/courses-components/./src/components/notifications/notifications.scss?");

/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "@material-ui/data-grid":
/*!*****************************************!*\
  !*** external "@material-ui/data-grid" ***!
  \*****************************************/
/***/ ((module) => {

module.exports = require("@material-ui/data-grid");

/***/ }),

/***/ "@material-ui/icons":
/*!*************************************!*\
  !*** external "@material-ui/icons" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("@material-ui/icons");

/***/ }),

/***/ "@material-ui/lab/Alert":
/*!*****************************************!*\
  !*** external "@material-ui/lab/Alert" ***!
  \*****************************************/
/***/ ((module) => {

module.exports = require("@material-ui/lab/Alert");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-router-dom");

/***/ }),

/***/ "uniquid":
/*!**************************!*\
  !*** external "uniquid" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("uniquid");

/***/ })

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		// no module.id needed
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/compat get default export */
/******/ (() => {
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = (module) => {
/******/ 		var getter = module && module.__esModule ?
/******/ 			() => (module['default']) :
/******/ 			() => (module);
/******/ 		__webpack_require__.d(getter, { a: getter });
/******/ 		return getter;
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/******/ /* webpack/runtime/make namespace object */
/******/ (() => {
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ })();
/******/ 
/************************************************************************/
/******/ 
/******/ // startup
/******/ // Load entry module and return exports
/******/ // This entry module can't be inlined because the eval devtool is used.
/******/ var __webpack_exports__ = __webpack_require__("./src/export.jsx");
/******/ var __webpack_exports__AdminTable = __webpack_exports__.AdminTable;
/******/ var __webpack_exports__AsyncButton = __webpack_exports__.AsyncButton;
/******/ var __webpack_exports__AutoBreadcrumbs = __webpack_exports__.AutoBreadcrumbs;
/******/ var __webpack_exports__AvatarSelector = __webpack_exports__.AvatarSelector;
/******/ var __webpack_exports__ConfirmDialog = __webpack_exports__.ConfirmDialog;
/******/ var __webpack_exports__ImageSelector = __webpack_exports__.ImageSelector;
/******/ var __webpack_exports__ModalWindow = __webpack_exports__.ModalWindow;
/******/ var __webpack_exports__Notifications = __webpack_exports__.Notifications;
/******/ var __webpack_exports__Spinner = __webpack_exports__.Spinner;
/******/ var __webpack_exports__clearAllMessages = __webpack_exports__.clearAllMessages;
/******/ var __webpack_exports__deleteMessage = __webpack_exports__.deleteMessage;
/******/ var __webpack_exports__hideMessage = __webpack_exports__.hideMessage;
/******/ var __webpack_exports__notificationsActionTypes = __webpack_exports__.notificationsActionTypes;
/******/ var __webpack_exports__notificationsReducers = __webpack_exports__.notificationsReducers;
/******/ var __webpack_exports__showMessage = __webpack_exports__.showMessage;
/******/ export { __webpack_exports__AdminTable as AdminTable, __webpack_exports__AsyncButton as AsyncButton, __webpack_exports__AutoBreadcrumbs as AutoBreadcrumbs, __webpack_exports__AvatarSelector as AvatarSelector, __webpack_exports__ConfirmDialog as ConfirmDialog, __webpack_exports__ImageSelector as ImageSelector, __webpack_exports__ModalWindow as ModalWindow, __webpack_exports__Notifications as Notifications, __webpack_exports__Spinner as Spinner, __webpack_exports__clearAllMessages as clearAllMessages, __webpack_exports__deleteMessage as deleteMessage, __webpack_exports__hideMessage as hideMessage, __webpack_exports__notificationsActionTypes as notificationsActionTypes, __webpack_exports__notificationsReducers as notificationsReducers, __webpack_exports__showMessage as showMessage };
/******/ 
