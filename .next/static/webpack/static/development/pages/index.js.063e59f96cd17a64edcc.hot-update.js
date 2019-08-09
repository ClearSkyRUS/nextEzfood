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
/* harmony import */ var forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! forms */ "./forms/index.js");
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components */ "./components/index.js");
var _jsxFileName = "D:\\my_projects\\next_ezfood\\components\\modal\\modalWithForm\\login.js";




var LoginModal = Object(mobx_react__WEBPACK_IMPORTED_MODULE_1__["observer"])(function (_ref) {
  var rootStore = _ref.rootStore,
      _ref$open = _ref.open,
      open = _ref$open === void 0 ? rootStore.ModalStore.login : _ref$open,
      tr = _ref.tr;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(forms__WEBPACK_IMPORTED_MODULE_2__["FormWrapper"], {
    fields: forms__WEBPACK_IMPORTED_MODULE_2__["login"],
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
        trigger: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Button, {
          as: "a",
          inverted: !fixed,
          onClick: function onClick() {
            return rootStore.ModalStore.openModal("login");
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 20
          },
          __self: this
        }, "\u0412\u043E\u0439\u0442\u0438"),
        header: "\u0412\u043E\u0439\u0434\u0438\u0442\u0435 \u0432 \u0441\u0432\u043E\u0439 \u0430\u043A\u043A\u0430\u0443\u043D\u0442!",
        content: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_3__["LoginForm"], {
          form: form,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 29
          },
          __self: this
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  });
});
/* harmony default export */ __webpack_exports__["default"] = (LoginModal);

/***/ })

})
//# sourceMappingURL=index.js.063e59f96cd17a64edcc.hot-update.js.map