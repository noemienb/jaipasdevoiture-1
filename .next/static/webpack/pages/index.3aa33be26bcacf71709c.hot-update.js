webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Reviews.js":
/*!*******************************!*\
  !*** ./components/Reviews.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Reviews; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _Review__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Review */ "./components/Review.js");
var _jsxFileName = "C:\\Users\\Leduc\\Desktop\\simplon\\briefs\\web\\jaipasdevoiture\\components\\Reviews.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function Reviews(_ref) {
  var id = _ref.id;
  return __jsx("div", {
    id: id,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, __jsx(_Review__WEBPACK_IMPORTED_MODULE_2__["default"], {
    img: "/img/customers/adeline.jpg",
    size: 100,
    name: "Adeline",
    text: __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, "Un accueil irr\xE9prochable par une \xE9quipe toujours souriante et agr\xE9able !", __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 162
      }
    }), __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 168
      }
    }), "Et des v\xE9hicules toujours nickel !"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }), __jsx(_Review__WEBPACK_IMPORTED_MODULE_2__["default"], {
    img: "/img/customers/fran\xE7ois.jpg",
    size: 100,
    name: "François",
    text: __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, "Belle flotte de v\xE9hicules.", __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 118
      }
    }), " Accueil personnalis\xE9 et service professionnel. ", __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 172
      }
    }), __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 178
      }
    }), "Facilit\xE9 de mise \xE0 disposition et de restitution du v\xE9hicule.", __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 245
      }
    }), "Je recommande."),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }), __jsx(_Review__WEBPACK_IMPORTED_MODULE_2__["default"], {
    img: "/img/customers/astrid.jpg",
    size: 100,
    name: "Astrid",
    text: __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, "Accueil formidable \xE0 chaque fois ! ", __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 123
      }
    }), __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 129
      }
    }), "En plus d'avoir des voitures impeccables et des prix corrects !"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }));
}
_c = Reviews;

var _c;

$RefreshReg$(_c, "Reviews");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SZXZpZXdzLmpzIl0sIm5hbWVzIjpbIlJldmlld3MiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBRWUsU0FBU0EsT0FBVCxPQUF5QjtBQUFBLE1BQU5DLEVBQU0sUUFBTkEsRUFBTTtBQUNwQyxTQUNJO0FBQUssTUFBRSxFQUFFQSxFQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLCtDQUFEO0FBQVEsT0FBRyxFQUFDLDRCQUFaO0FBQXlDLFFBQUksRUFBRSxHQUEvQztBQUFvRCxRQUFJLEVBQUUsU0FBMUQ7QUFBcUUsUUFBSSxFQUFFLHdKQUEwRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQTFFLEVBQWdGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBaEYsMENBQTNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUVJLE1BQUMsK0NBQUQ7QUFBUSxPQUFHLEVBQUMsZ0NBQVo7QUFBMEMsUUFBSSxFQUFFLEdBQWhEO0FBQXFELFFBQUksRUFBRSxVQUEzRDtBQUF1RSxRQUFJLEVBQUUsb0dBQTRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBNUIseURBQWtGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBbEYsRUFBd0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUF4Riw0RUFBMko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUEzSixtQkFBN0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLEVBR0ksTUFBQywrQ0FBRDtBQUFRLE9BQUcsRUFBQywyQkFBWjtBQUF3QyxRQUFJLEVBQUUsR0FBOUM7QUFBbUQsUUFBSSxFQUFFLFFBQXpEO0FBQW1FLFFBQUksRUFBRSw2R0FBcUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUFyQyxFQUEyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQTNDLG9FQUF6RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEosQ0FESjtBQU9IO0tBUnVCRCxPIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjNhYTMzYmUyNmJjYWNmNzE3MDljLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IENhcmQsIENhcmRDb2x1bW5zIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuXHJcbmltcG9ydCBSZXZpZXcgZnJvbSAnLi9SZXZpZXcnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmV2aWV3cyh7IGlkIH0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBpZD17aWR9PlxyXG4gICAgICAgICAgICA8UmV2aWV3IGltZz1cIi9pbWcvY3VzdG9tZXJzL2FkZWxpbmUuanBnXCIgc2l6ZT17MTAwfSBuYW1lPXtcIkFkZWxpbmVcIn0gdGV4dD17PD5VbiBhY2N1ZWlsIGlycsOpcHJvY2hhYmxlIHBhciB1bmUgw6lxdWlwZSB0b3Vqb3VycyBzb3VyaWFudGUgZXQgYWdyw6lhYmxlICE8YnIgLz48YnIgLz5FdCBkZXMgdsOpaGljdWxlcyB0b3Vqb3VycyBuaWNrZWwgITwvPn0gLz5cclxuICAgICAgICAgICAgPFJldmlldyBpbWc9XCIvaW1nL2N1c3RvbWVycy9mcmFuw6dvaXMuanBnXCIgc2l6ZT17MTAwfSBuYW1lPXtcIkZyYW7Dp29pc1wifSB0ZXh0PXs8PkJlbGxlIGZsb3R0ZSBkZSB2w6loaWN1bGVzLjxiciAvPiBBY2N1ZWlsIHBlcnNvbm5hbGlzw6kgZXQgc2VydmljZSBwcm9mZXNzaW9ubmVsLiA8YnIgLz48YnIgLz5GYWNpbGl0w6kgZGUgbWlzZSDDoCBkaXNwb3NpdGlvbiBldCBkZSByZXN0aXR1dGlvbiBkdSB2w6loaWN1bGUuPGJyIC8+SmUgcmVjb21tYW5kZS48Lz59IC8+XHJcbiAgICAgICAgICAgIDxSZXZpZXcgaW1nPVwiL2ltZy9jdXN0b21lcnMvYXN0cmlkLmpwZ1wiIHNpemU9ezEwMH0gbmFtZT17XCJBc3RyaWRcIn0gdGV4dD17PD5BY2N1ZWlsIGZvcm1pZGFibGUgw6AgY2hhcXVlIGZvaXMgISA8YnIgLz48YnIgLz5FbiBwbHVzIGQnYXZvaXIgZGVzIHZvaXR1cmVzIGltcGVjY2FibGVzIGV0IGRlcyBwcml4IGNvcnJlY3RzICE8Lz59IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==