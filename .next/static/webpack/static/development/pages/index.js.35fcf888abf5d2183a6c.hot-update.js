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


var registration = function registration(email, password, setUser) {
  config_firebase__WEBPACK_IMPORTED_MODULE_0__["default"].auth().createUserWithEmailAndPassword(email, password).then(function (user) {
    setUser(user);
  })["catch"](function (error) {
    console.log(error);
  });
};

/* harmony default export */ __webpack_exports__["default"] = (registration);

/***/ })

})
//# sourceMappingURL=index.js.35fcf888abf5d2183a6c.hot-update.js.map