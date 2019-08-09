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


var re = function re(email, password, setUser) {
  config_firebase__WEBPACK_IMPORTED_MODULE_0__["default"].auth().createUserWithEmailAndPassword(email, password).then(function (user) {
    setUser(user);
  })["catch"](function (error) {
    console.log(error);
  });
};

/* harmony default export */ __webpack_exports__["default"] = (login);

/***/ })

})
//# sourceMappingURL=index.js.11b2cd04d51240242603.hot-update.js.map