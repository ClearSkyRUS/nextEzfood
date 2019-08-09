webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./forms/auth/registration.js":
/*!************************************!*\
  !*** ./forms/auth/registration.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var fields = [{
  name: "email",
  label: "Email",
  type: "email",
  placeholder: "Insert Email",
  rules: "required|email|string|between:5,25"
}, {
  name: "password",
  label: "Password",
  type: "password",
  placeholder: "Insert Password",
  rules: "required|string|between:5,25"
}, {
  name: "passwordConfirm",
  label: "Password Confirmation",
  placeholder: "Confirm Password",
  rules: "required|string|same:password"
}];
/* harmony default export */ __webpack_exports__["default"] = (fields);

/***/ }),

/***/ "./forms/index.js":
/*!************************!*\
  !*** ./forms/index.js ***!
  \************************/
/*! exports provided: FormWrapper, plugins, hooks, login, registration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wrapper */ "./forms/wrapper.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormWrapper", function() { return _wrapper__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _plugins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./plugins */ "./forms/plugins.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "plugins", function() { return _plugins__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hooks */ "./forms/hooks.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hooks", function() { return _hooks__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _auth_login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/login */ "./forms/auth/login.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "login", function() { return _auth_login__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _auth_registration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/registration */ "./forms/auth/registration.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registration", function() { return _auth_registration__WEBPACK_IMPORTED_MODULE_4__["default"]; });







/***/ })

})
//# sourceMappingURL=index.js.c1a035192d304f8001bd.hot-update.js.map