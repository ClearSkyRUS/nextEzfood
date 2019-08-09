webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/modal/modalWithForm/registration.js":
/*!********************************************************!*\
  !*** ./components/modal/modalWithForm/registration.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/index.module.js");
/* harmony import */ var forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! forms */ "./forms/index.js");
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components */ "./components/index.js");
var _jsxFileName = "D:\\my_projects\\next_ezfood\\components\\modal\\modalWithForm\\registration.js";




var RegistrationModal = Object(mobx_react__WEBPACK_IMPORTED_MODULE_1__["observer"])(function (_ref) {
  var rootStore = _ref.rootStore,
      _ref$open = _ref.open,
      open = _ref$open === void 0 ? rootStore.ModalStore.registration : _ref$open,
      trigger = _ref.trigger;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(forms__WEBPACK_IMPORTED_MODULE_2__["FormWrapper"], {
    fields: forms__WEBPACK_IMPORTED_MODULE_2__["registration"],
    actions: {
      onSuccess: rootStore.UserStore.registrUser
    },
    render: function render(form) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_3__["CustomModal"], {
        open: open,
        onClose: function onClose() {
          return rootStore.ModalStore.closeModal("registration");
        },
        closeOnDimmerClick: false,
        size: "mini",
        trigger: trigger,
        header: "\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0443\u0439\u0442\u0435\u0441\u044C!",
        content: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components__WEBPACK_IMPORTED_MODULE_3__["RegistrationForm"], {
          form: form,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 21
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
/* harmony default export */ __webpack_exports__["default"] = (RegistrationModal);

/***/ })

})
//# sourceMappingURL=index.js.30743ffa986c287479bd.hot-update.js.map