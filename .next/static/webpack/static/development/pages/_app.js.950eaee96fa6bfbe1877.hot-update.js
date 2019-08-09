webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./utils/firebase/auth/registration.js":
/*!*********************************************!*\
  !*** ./utils/firebase/auth/registration.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var config_firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! config/firebase */ "./config/firebase.js");


var registration = function registration(email, password, setUser) {
  config_firebase__WEBPACK_IMPORTED_MODULE_0__["default"].auth().createUserWithEmailAndPassword(email, password).then(function (user) {
    setUser(user);
  })["catch"](function (error) {
    console.log(error);
  });
};

/* harmony default export */ __webpack_exports__["default"] = (login);

/***/ })

})
//# sourceMappingURL=_app.js.950eaee96fa6bfbe1877.hot-update.js.map