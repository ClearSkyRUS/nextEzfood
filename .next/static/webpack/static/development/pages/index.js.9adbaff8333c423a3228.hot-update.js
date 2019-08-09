webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./utils/firebase/auth/registration.js":
/*!*********************************************!*\
  !*** ./utils/firebase/auth/registration.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var config_firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! config/firebase */ "./config/firebase.js");


var login = function login(email, password, setUser) {
  config_firebase__WEBPACK_IMPORTED_MODULE_0__["default"].auth().signInWithEmailAndPassword(email, password).then(function (user) {
    setUser(user);
  })["catch"](function (error) {
    console.log(error);
  });
};

/* harmony default export */ __webpack_exports__["default"] = (login);

/***/ }),

/***/ "./utils/index.js":
/*!************************!*\
  !*** ./utils/index.js ***!
  \************************/
/*! exports provided: getInitialState, checkAuth, login, registration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _InitalState_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InitalState/index */ "./utils/InitalState/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getInitialState", function() { return _InitalState_index__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _firebase_auth_checkAuth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./firebase/auth/checkAuth */ "./utils/firebase/auth/checkAuth.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "checkAuth", function() { return _firebase_auth_checkAuth__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _firebase_auth_login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./firebase/auth/login */ "./utils/firebase/auth/login.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "login", function() { return _firebase_auth_login__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _firebase_auth_registration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./firebase/auth/registration */ "./utils/firebase/auth/registration.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registration", function() { return _firebase_auth_registration__WEBPACK_IMPORTED_MODULE_3__["default"]; });






/***/ })

})
//# sourceMappingURL=index.js.9adbaff8333c423a3228.hot-update.js.map