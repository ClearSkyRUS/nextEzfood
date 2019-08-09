webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/forms/auth/registration.js":
/*!***********************************************!*\
  !*** ./components/forms/auth/registration.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/index.module.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");

var _jsxFileName = "D:\\my_projects\\next_ezfood\\components\\forms\\auth\\registration.js";



var RegistrationForm = Object(mobx_react__WEBPACK_IMPORTED_MODULE_2__["observer"])(function (_ref) {
  var form = _ref.form;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"], {
    error: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Field, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Input, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    error: form.$("email").error
  }, form.$("email").bind(), {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Field, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Input, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    error: form.$("password").error
  }, form.$("password").bind(), {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Field, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Form"].Input, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    error: form.$("passwordConfirm").error
  }, form.$("passwordConfirm").bind(), {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    onClick: form.onSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "Submit"));
});
/* harmony default export */ __webpack_exports__["default"] = (RegistrationForm);

/***/ }),

/***/ "./components/index.js":
/*!*****************************!*\
  !*** ./components/index.js ***!
  \*****************************/
/*! exports provided: LoginForm, RegistrationForm, CustomModal, LoginModal, RegistrationModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _forms_auth_login__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forms/auth/login */ "./components/forms/auth/login.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginForm", function() { return _forms_auth_login__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _forms_auth_registration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forms/auth/registration */ "./components/forms/auth/registration.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RegistrationForm", function() { return _forms_auth_registration__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal */ "./components/modal/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CustomModal", function() { return _modal__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _modal_modalWithForm_login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal/modalWithForm/login */ "./components/modal/modalWithForm/login.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginModal", function() { return _modal_modalWithForm_login__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _modal_modalWithForm_registration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modal/modalWithForm/registration */ "./components/modal/modalWithForm/registration.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RegistrationModal", function() { return _modal_modalWithForm_registration__WEBPACK_IMPORTED_MODULE_4__["default"]; });

// FORMS

 // MODAL





/***/ }),

/***/ "./components/layout/main/desktop.jsx":
/*!********************************************!*\
  !*** ./components/layout/main/desktop.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/index.module.js");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header */ "./components/layout/main/header.jsx");
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components */ "./components/index.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
var _jsxFileName = "D:\\my_projects\\next_ezfood\\components\\layout\\main\\desktop.jsx";





var DesktopContainer = Object(mobx_react__WEBPACK_IMPORTED_MODULE_1__["observer"])(function (_ref) {
  var rootStore = _ref.rootStore,
      _ref$open = _ref.open,
      open = _ref$open === void 0 ? rootStore.ModalStore.login : _ref$open,
      children = _ref.children;
  var WindowStore = rootStore.WindowStore;
  var fixed = WindowStore.fixedMenu;

  var showFixedMenu = function showFixedMenu() {
    return WindowStore.showFixedMenu();
  };

  var hideFixedMenu = function hideFixedMenu() {
    return WindowStore.hideFixedMenu();
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Visibility"], {
    once: false,
    onBottomPassed: showFixedMenu,
    onBottomPassedReverse: hideFixedMenu,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Segment"], {
    inverted: true,
    textAlign: "center",
    style: {
      minHeight: 700,
      padding: "1em 0em"
    },
    vertical: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Menu"], {
    fixed: fixed ? "top" : null,
    inverted: !fixed,
    pointing: !fixed,
    secondary: !fixed,
    size: "large",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
    as: "a",
    active: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "Home"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
    as: "a",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "Work"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
    as: "a",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "Company"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
    as: "a",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "Careers"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
    position: "right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_3__["LoginModal"], {
    rootStore: rootStore,
    trigger: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Button"], {
      as: "a",
      inverted: !fixed,
      onClick: function onClick() {
        return rootStore.ModalStore.openModal("login");
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, "\u0412\u043E\u0439\u0442\u0438"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_3__["RegistrationModal"], {
    rootStore: rootStore,
    trigger: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Button"], {
      as: "a",
      inverted: !fixed,
      primary: fixed,
      style: {
        marginLeft: "0.5em"
      },
      onClick: function onClick() {
        return rootStore.ModalStore.openModal("registration");
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }))), children);
});
/* harmony default export */ __webpack_exports__["default"] = (DesktopContainer);

/***/ })

})
//# sourceMappingURL=index.js.3b8f849978168ae0496c.hot-update.js.map