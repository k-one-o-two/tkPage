"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/mapping",{

/***/ "./components/noteImage.js":
/*!*********************************!*\
  !*** ./components/noteImage.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"NoteImage\": function() { return /* binding */ NoteImage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction NoteImage(param) {\n    let { src , height  } = param;\n    _s();\n    const [full, setFull] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                popovertarget: \"pop_\".concat(src),\n                children: \" Open Popover \"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\k102\\\\Documents\\\\workspace\\\\tkPage\\\\components\\\\noteImage.js\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dialog\", {\n                id: \"pop_\".concat(src),\n                popover: true,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"olololo\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\k102\\\\Documents\\\\workspace\\\\tkPage\\\\components\\\\noteImage.js\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\k102\\\\Documents\\\\workspace\\\\tkPage\\\\components\\\\noteImage.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(NoteImage, \"b5CG153pdwgO321mWA/2Z46QJVQ=\");\n_c = NoteImage;\nvar _c;\n$RefreshReg$(_c, \"NoteImage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL25vdGVJbWFnZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBK0I7QUFDRTtBQUUxQixTQUFTRSxVQUFVLEtBQWUsRUFBRTtRQUFqQixFQUFFQyxJQUFHLEVBQUVDLE9BQU0sRUFBRSxHQUFmOztJQUN4QixNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR0wsK0NBQVFBLENBQUMsS0FBSztJQUN0QyxxQkFDRTs7MEJBa0JFLDhEQUFDTTtnQkFBT0MsZUFBZSxPQUFXLE9BQUpMOzBCQUFPOzs7Ozs7MEJBRXJDLDhEQUFDTTtnQkFBT0MsSUFBSSxPQUFXLE9BQUpQO2dCQUFPUSxPQUFPOzBCQUMvQiw0RUFBQ0M7OEJBQUU7Ozs7Ozs7Ozs7Ozs7QUFtQ1gsQ0FBQztHQTNEZVY7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ub3RlSW1hZ2UuanM/NWRjNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIE5vdGVJbWFnZSh7IHNyYywgaGVpZ2h0IH0pIHtcclxuICBjb25zdCBbZnVsbCwgc2V0RnVsbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHsvKiA8ZGl2XHJcbiAgICAgICAgLy8gb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgIC8vICAgY29uc29sZS5pbmZvKCdjbGljaycpO1xyXG4gICAgICAgIC8vICAgc2V0RnVsbCh0cnVlKTtcclxuICAgICAgICAvLyB9fVxyXG4gICAgICAgIHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCBoZWlnaHQ6ICc0MDBweCcsIGN1cnNvcjogJ3BvaW50ZXInIH19XHJcbiAgICAgID5cclxuICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgIHNyYz17c3JjfVxyXG4gICAgICAgICAgYWx0PVwiSW1hZ2VcIlxyXG4gICAgICAgICAgZmlsbFxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgb2JqZWN0Rml0OiAnY29udGFpbicsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PiAqL31cclxuXHJcbiAgICAgIDxidXR0b24gcG9wb3ZlcnRhcmdldD17YHBvcF8ke3NyY31gfT4gT3BlbiBQb3BvdmVyIDwvYnV0dG9uPlxyXG5cclxuICAgICAgPGRpYWxvZyBpZD17YHBvcF8ke3NyY31gfSBwb3BvdmVyPlxyXG4gICAgICAgIDxwPm9sb2xvbG88L3A+XHJcbiAgICAgICAgey8qIDxkaXZcclxuICAgICAgICAgIC8vIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgIC8vICAgY29uc29sZS5pbmZvKCdjbGljaycpO1xyXG4gICAgICAgICAgLy8gICBzZXRGdWxsKGZhbHNlKTtcclxuICAgICAgICAgIC8vIH19XHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmdWxsID8gJ2Jsb2NrJyA6ICdub25lJyxcclxuICAgICAgICAgICAgLy8gcG9zaXRpb246ICdmaXhlZCcsXHJcbiAgICAgICAgICAgIC8vIGxlZnQ6IDAsXHJcbiAgICAgICAgICAgIC8vIHRvcDogMCxcclxuICAgICAgICAgICAgaGVpZ2h0OiAnMTAwdmgnLFxyXG4gICAgICAgICAgICB3aWR0aDogJzEwMHZ3JyxcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogJyM0QzU2NkEnLFxyXG4gICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgICAgICAgICBhbGlnbkNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICB6SW5kZXg6IDEwMDUwMCxcclxuICAgICAgICAgICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID4gKi99XHJcbiAgICAgICAgey8qIDxJbWFnZVxyXG4gICAgICAgICAgLy8gaGVpZ2h0PVwiODB2aFwiXHJcbiAgICAgICAgICAvLyB3aWR0aD1cIjgwdndcIlxyXG4gICAgICAgICAgc3JjPXtzcmN9XHJcbiAgICAgICAgICBhbHQ9XCJJbWFnZVwiXHJcbiAgICAgICAgICBmaWxsXHJcbiAgICAgICAgICAvLyBzaXplcz1cIihtYXgtd2lkdGg6IDc2OHB4KSAxMDB2dywgKG1heC13aWR0aDogMTIwMHB4KSA1MHZ3LCAzM3Z3XCJcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIG9iamVjdEZpdDogJ2NvbnRhaW4nLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAvPiAqL31cclxuICAgICAgICB7LyogPC9kaXY+ICovfVxyXG4gICAgICA8L2RpYWxvZz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIkltYWdlIiwidXNlU3RhdGUiLCJOb3RlSW1hZ2UiLCJzcmMiLCJoZWlnaHQiLCJmdWxsIiwic2V0RnVsbCIsImJ1dHRvbiIsInBvcG92ZXJ0YXJnZXQiLCJkaWFsb2ciLCJpZCIsInBvcG92ZXIiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/noteImage.js\n"));

/***/ })

});