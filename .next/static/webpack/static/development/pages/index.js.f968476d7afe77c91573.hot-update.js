webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/modal/modalWithForm/login.js":
/*!*************************************************!*\
  !*** ./components/modal/modalWithForm/login.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/index.module.js");
var _jsxFileName = "D:\\my_projects\\next_ezfood\\components\\modal\\modalWithForm\\login.js";


var LoginModal = Object(mobx_react__WEBPACK_IMPORTED_MODULE_1__["observer"])(function (_ref) {
  var fields = _ref.fields;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormWrapper, {
    fields: login,
    actions: {
      onSuccess: rootStore.UserStore.loginUser
    },
    render: function render(form) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CustomModal, {
        open: open,
        onClose: function onClose() {
          return rootStore.ModalStore.closeModal("login");
        },
        closeOnDimmerClick: false,
        size: "mini",
        trigger: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Button, {
          as: "a",
          inverted: !fixed,
          onClick: function onClick() {
            return rootStore.ModalStore.openModal("login");
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 16
          },
          __self: this
        }, "\u0412\u043E\u0439\u0442\u0438"),
        header: "\u0412\u043E\u0439\u0434\u0438\u0442\u0435 \u0432 \u0441\u0432\u043E\u0439 \u0430\u043A\u043A\u0430\u0443\u043D\u0442!",
        content: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LoginForm, {
          form: form,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          },
          __self: this
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  });
});
/* harmony default export */ __webpack_exports__["default"] = (LoginModal);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectDestructuringEmpty.js":
false

})
//# sourceMappingURL=index.js.f968476d7afe77c91573.hot-update.js.map