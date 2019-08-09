webpackHotUpdate("static\\development\\pages\\index.js",{

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
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormWrapper, {
    fields: login,
    actions: {
      onSuccess: rootStore.UserStore.loginUser
    },
    render: function render(form) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_3__["CustomModal"], {
        open: open,
        onClose: function onClose() {
          return rootStore.ModalStore.closeModal("login");
        },
        closeOnDimmerClick: false,
        size: "mini",
        trigger: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Button"], {
          as: "a",
          inverted: !fixed,
          onClick: function onClick() {
            return rootStore.ModalStore.openModal("login");
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 59
          },
          __self: this
        }, "\u0412\u043E\u0439\u0442\u0438"),
        header: "\u0412\u043E\u0439\u0434\u0438\u0442\u0435 \u0432 \u0441\u0432\u043E\u0439 \u0430\u043A\u043A\u0430\u0443\u043D\u0442!",
        content: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_3__["LoginForm"], {
          form: form,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 70
          },
          __self: this
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    as: "a",
    inverted: !fixed,
    primary: fixed,
    style: {
      marginLeft: "0.5em"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }))), children);
});
/* harmony default export */ __webpack_exports__["default"] = (DesktopContainer);

/***/ }),

/***/ "./forms/auth/login.js":
false,

/***/ "./forms/hooks.js":
false,

/***/ "./forms/index.js":
false,

/***/ "./forms/plugins.js":
false,

/***/ "./forms/wrapper.js":
false,

/***/ "./node_modules/lodash/lodash.js":
false,

/***/ "./node_modules/mobx-react-form/lib/Base.js":
false,

/***/ "./node_modules/mobx-react-form/lib/Bindings.js":
false,

/***/ "./node_modules/mobx-react-form/lib/Field.js":
false,

/***/ "./node_modules/mobx-react-form/lib/Form.js":
false,

/***/ "./node_modules/mobx-react-form/lib/Options.js":
false,

/***/ "./node_modules/mobx-react-form/lib/State.js":
false,

/***/ "./node_modules/mobx-react-form/lib/Validator.js":
false,

/***/ "./node_modules/mobx-react-form/lib/index.js":
false,

/***/ "./node_modules/mobx-react-form/lib/parser.js":
false,

/***/ "./node_modules/mobx-react-form/lib/props.js":
false,

/***/ "./node_modules/mobx-react-form/lib/shared/Actions.js":
false,

/***/ "./node_modules/mobx-react-form/lib/shared/Events.js":
false,

/***/ "./node_modules/mobx-react-form/lib/shared/Helpers.js":
false,

/***/ "./node_modules/mobx-react-form/lib/shared/Initializer.js":
false,

/***/ "./node_modules/mobx-react-form/lib/shared/Utils.js":
false,

/***/ "./node_modules/mobx-react-form/lib/utils.js":
false,

/***/ "./node_modules/mobx-react-form/lib/validators/DVR.js":
false,

/***/ "./node_modules/validatorjs/src/async.js":
false,

/***/ "./node_modules/validatorjs/src/attributes.js":
false,

/***/ "./node_modules/validatorjs/src/errors.js":
false,

/***/ "./node_modules/validatorjs/src/lang sync recursive ^\\.\\/.*$":
false,

/***/ "./node_modules/validatorjs/src/lang.js":
false,

/***/ "./node_modules/validatorjs/src/lang/ar.js":
false,

/***/ "./node_modules/validatorjs/src/lang/az.js":
false,

/***/ "./node_modules/validatorjs/src/lang/be.js":
false,

/***/ "./node_modules/validatorjs/src/lang/bg.js":
false,

/***/ "./node_modules/validatorjs/src/lang/bs.js":
false,

/***/ "./node_modules/validatorjs/src/lang/ca.js":
false,

/***/ "./node_modules/validatorjs/src/lang/cs.js":
false,

/***/ "./node_modules/validatorjs/src/lang/cy.js":
false,

/***/ "./node_modules/validatorjs/src/lang/da.js":
false,

/***/ "./node_modules/validatorjs/src/lang/de.js":
false,

/***/ "./node_modules/validatorjs/src/lang/el.js":
false,

/***/ "./node_modules/validatorjs/src/lang/en.js":
false,

/***/ "./node_modules/validatorjs/src/lang/es.js":
false,

/***/ "./node_modules/validatorjs/src/lang/et.js":
false,

/***/ "./node_modules/validatorjs/src/lang/eu.js":
false,

/***/ "./node_modules/validatorjs/src/lang/fa.js":
false,

/***/ "./node_modules/validatorjs/src/lang/fi.js":
false,

/***/ "./node_modules/validatorjs/src/lang/fr.js":
false,

/***/ "./node_modules/validatorjs/src/lang/hr.js":
false,

/***/ "./node_modules/validatorjs/src/lang/hu.js":
false,

/***/ "./node_modules/validatorjs/src/lang/id.js":
false,

/***/ "./node_modules/validatorjs/src/lang/it.js":
false,

/***/ "./node_modules/validatorjs/src/lang/ja.js":
false,

/***/ "./node_modules/validatorjs/src/lang/ka.js":
false,

/***/ "./node_modules/validatorjs/src/lang/ko.js":
false,

/***/ "./node_modules/validatorjs/src/lang/lt.js":
false,

/***/ "./node_modules/validatorjs/src/lang/lv.js":
false,

/***/ "./node_modules/validatorjs/src/lang/mk.js":
false,

/***/ "./node_modules/validatorjs/src/lang/mn.js":
false,

/***/ "./node_modules/validatorjs/src/lang/ms.js":
false,

/***/ "./node_modules/validatorjs/src/lang/nb_NO.js":
false,

/***/ "./node_modules/validatorjs/src/lang/nl.js":
false,

/***/ "./node_modules/validatorjs/src/lang/pl.js":
false,

/***/ "./node_modules/validatorjs/src/lang/pt.js":
false,

/***/ "./node_modules/validatorjs/src/lang/pt_BR.js":
false,

/***/ "./node_modules/validatorjs/src/lang/ro.js":
false,

/***/ "./node_modules/validatorjs/src/lang/ru.js":
false,

/***/ "./node_modules/validatorjs/src/lang/sl.js":
false,

/***/ "./node_modules/validatorjs/src/lang/sq.js":
false,

/***/ "./node_modules/validatorjs/src/lang/sr.js":
false,

/***/ "./node_modules/validatorjs/src/lang/sv.js":
false,

/***/ "./node_modules/validatorjs/src/lang/tr.js":
false,

/***/ "./node_modules/validatorjs/src/lang/ua.js":
false,

/***/ "./node_modules/validatorjs/src/lang/uk.js":
false,

/***/ "./node_modules/validatorjs/src/lang/vi.js":
false,

/***/ "./node_modules/validatorjs/src/lang/zh.js":
false,

/***/ "./node_modules/validatorjs/src/lang/zh_TW.js":
false,

/***/ "./node_modules/validatorjs/src/messages.js":
false,

/***/ "./node_modules/validatorjs/src/rules.js":
false,

/***/ "./node_modules/validatorjs/src/validator.js":
false

})
//# sourceMappingURL=index.js.bfe242c5c31c45982e1c.hot-update.js.map