"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/crap",{

/***/ "./components/noteImage.js":
/*!*********************************!*\
  !*** ./components/noteImage.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"NoteImage\": function() { return /* binding */ NoteImage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var primereact_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primereact/image */ \"./node_modules/primereact/image/image.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction NoteImage(param) {\n    let { src , height  } = param;\n    _s();\n    const [width, setWidth] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        setWidth(window.innerWidth * 0.7);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            // width: 'fit-content',\n            position: \"relative\",\n            display: \"block\",\n            // boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',\n            // border:\n            textAlign: \"center\",\n            overflow: \"hidden\",\n            padding: \"5px\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"card flex justify-content-center\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(primereact_image__WEBPACK_IMPORTED_MODULE_1__.Image, {\n                src: src,\n                zoomSrc: src,\n                alt: \"Image\",\n                width: \"80\",\n                height: \"60\",\n                preview: true\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\k102\\\\Documents\\\\workspace\\\\tkPage\\\\components\\\\noteImage.js\",\n                lineNumber: 25,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\k102\\\\Documents\\\\workspace\\\\tkPage\\\\components\\\\noteImage.js\",\n            lineNumber: 24,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\k102\\\\Documents\\\\workspace\\\\tkPage\\\\components\\\\noteImage.js\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, this);\n}\n_s(NoteImage, \"sZDZLp4sbuFhmKdsymtRbNmF+r0=\");\n_c = NoteImage;\nvar _c;\n$RefreshReg$(_c, \"NoteImage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL25vdGVJbWFnZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUF5QztBQUNHO0FBQ3JDLFNBQVNHLFVBQVUsS0FBZSxFQUFFO1FBQWpCLEVBQUVDLElBQUcsRUFBRUMsT0FBTSxFQUFFLEdBQWY7O0lBQ3hCLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHTiwrQ0FBUUE7SUFFbENDLGdEQUFTQSxDQUFDLElBQU07UUFDZEssU0FBU0MsT0FBT0MsVUFBVSxHQUFHO0lBQy9CLEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDQztRQUNDQyxPQUFPO1lBQ0wsd0JBQXdCO1lBQ3hCQyxVQUFVO1lBQ1ZDLFNBQVM7WUFDVCxnREFBZ0Q7WUFDaEQsVUFBVTtZQUNWQyxXQUFXO1lBQ1hDLFVBQVU7WUFDVkMsU0FBUztRQUNYO2tCQUdBLDRFQUFDTjtZQUFJTyxXQUFVO3NCQUNiLDRFQUFDakIsbURBQUtBO2dCQUNKSSxLQUFLQTtnQkFDTGMsU0FBU2Q7Z0JBQ1RlLEtBQUk7Z0JBQ0piLE9BQU07Z0JBQ05ELFFBQU87Z0JBQ1BlLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7QUFLakIsQ0FBQztHQWpDZWpCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbm90ZUltYWdlLmpzPzVkYzQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW1hZ2UgfSBmcm9tICdwcmltZXJlYWN0L2ltYWdlJztcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuZXhwb3J0IGZ1bmN0aW9uIE5vdGVJbWFnZSh7IHNyYywgaGVpZ2h0IH0pIHtcclxuICBjb25zdCBbd2lkdGgsIHNldFdpZHRoXSA9IHVzZVN0YXRlKCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRXaWR0aCh3aW5kb3cuaW5uZXJXaWR0aCAqIDAuNyk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBzdHlsZT17e1xyXG4gICAgICAgIC8vIHdpZHRoOiAnZml0LWNvbnRlbnQnLFxyXG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgICAgIGRpc3BsYXk6ICdibG9jaycsXHJcbiAgICAgICAgLy8gYm94U2hhZG93OiAnMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KScsXHJcbiAgICAgICAgLy8gYm9yZGVyOlxyXG4gICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxyXG4gICAgICAgIHBhZGRpbmc6ICc1cHgnLFxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICB7LyogPEltYWdlIHdpZHRoPXt3aWR0aH0gc3JjPXtzcmN9PjwvSW1hZ2U+ICovfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICBzcmM9e3NyY31cclxuICAgICAgICAgIHpvb21TcmM9e3NyY31cclxuICAgICAgICAgIGFsdD1cIkltYWdlXCJcclxuICAgICAgICAgIHdpZHRoPVwiODBcIlxyXG4gICAgICAgICAgaGVpZ2h0PVwiNjBcIlxyXG4gICAgICAgICAgcHJldmlld1xyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIk5vdGVJbWFnZSIsInNyYyIsImhlaWdodCIsIndpZHRoIiwic2V0V2lkdGgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiZGl2Iiwic3R5bGUiLCJwb3NpdGlvbiIsImRpc3BsYXkiLCJ0ZXh0QWxpZ24iLCJvdmVyZmxvdyIsInBhZGRpbmciLCJjbGFzc05hbWUiLCJ6b29tU3JjIiwiYWx0IiwicHJldmlldyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/noteImage.js\n"));

/***/ })

});