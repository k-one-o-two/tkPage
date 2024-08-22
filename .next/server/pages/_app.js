/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/layout.js":
/*!******************************!*\
  !*** ./components/layout.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Layout\": () => (/* binding */ Layout)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var primeicons_primeicons_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeicons/primeicons.css */ \"./node_modules/primeicons/primeicons.css\");\n/* harmony import */ var primeicons_primeicons_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(primeicons_primeicons_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var primeflex_primeflex_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeflex/primeflex.css */ \"./node_modules/primeflex/primeflex.css\");\n/* harmony import */ var primeflex_primeflex_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeflex_primeflex_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var primereact_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primereact/image */ \"primereact/image\");\n/* harmony import */ var primereact_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primereact_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n// import 'primereact/resources/primereact.css'; // core css\n\n // icons\n\n\n\n\nfunction Layout({ children , active  }) {\n    const [activeIndex, setActiveIndex] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(active);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    const model = [\n        {\n            label: \"About\",\n            icon: \"pi-user\",\n            url: \"/\"\n        },\n        {\n            label: \"Photos\",\n            icon: \"pi-camera\",\n            url: \"/photo\"\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-content-center flex-wrap\",\n                style: {\n                    marginBottom: \"10px\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(primereact_image__WEBPACK_IMPORTED_MODULE_3__.Image, {\n                        src: \"k102.svg\",\n                        height: \"40\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\k102\\\\Documents\\\\workspace\\\\tkPage\\\\components\\\\layout.js\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, this),\n                    model.map((item)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"top-button\",\n                            icon: `pi ${item.icon}`,\n                            severity: \"secondary\",\n                            onClick: ()=>{\n                                router.push(item.url);\n                            },\n                            children: item.label\n                        }, item.label, false, {\n                            fileName: \"C:\\\\Users\\\\k102\\\\Documents\\\\workspace\\\\tkPage\\\\components\\\\layout.js\",\n                            lineNumber: 36,\n                            columnNumber: 13\n                        }, this);\n                    })\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\k102\\\\Documents\\\\workspace\\\\tkPage\\\\components\\\\layout.js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"paper\",\n                children: children\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\k102\\\\Documents\\\\workspace\\\\tkPage\\\\components\\\\layout.js\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\k102\\\\Documents\\\\workspace\\\\tkPage\\\\components\\\\layout.js\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNERBQTREOztBQUN6QixDQUFDLFFBQVE7QUFDWDtBQUVRO0FBRVI7QUFDTztBQUVqQyxTQUFTRyxPQUFPLEVBQUVDLFNBQVEsRUFBRUMsT0FBTSxFQUFFLEVBQUU7SUFDM0MsTUFBTSxDQUFDQyxhQUFhQyxlQUFlLEdBQUdOLCtDQUFRQSxDQUFDSTtJQUMvQyxNQUFNRyxTQUFTTixzREFBU0E7SUFFeEIsTUFBTU8sUUFBUTtRQUNaO1lBQ0VDLE9BQU87WUFDUEMsTUFBTTtZQUNOQyxLQUFLO1FBQ1A7UUFDQTtZQUNFRixPQUFPO1lBQ1BDLE1BQU07WUFDTkMsS0FBSztRQUNQO0tBQ0Q7SUFFRCxxQkFDRSw4REFBQ0M7OzBCQUNDLDhEQUFDQTtnQkFDQ0MsV0FBVTtnQkFDVkMsT0FBTztvQkFBRUMsY0FBYztnQkFBTzs7a0NBRTlCLDhEQUFDaEIsbURBQUtBO3dCQUFDaUIsS0FBSTt3QkFBV0MsUUFBTzs7Ozs7O29CQUM1QlQsTUFBTVUsR0FBRyxDQUFDLENBQUNDLE9BQVM7d0JBQ25CLHFCQUNFLDhEQUFDUDs0QkFDQ0MsV0FBVTs0QkFFVkgsTUFBTSxDQUFDLEdBQUcsRUFBRVMsS0FBS1QsSUFBSSxDQUFDLENBQUM7NEJBQ3ZCVSxVQUFTOzRCQUNUQyxTQUFTLElBQU07Z0NBQ2JkLE9BQU9lLElBQUksQ0FBQ0gsS0FBS1IsR0FBRzs0QkFDdEI7c0NBRUNRLEtBQUtWLEtBQUs7MkJBUE5VLEtBQUtWLEtBQUs7Ozs7O29CQVVyQjs7Ozs7OzswQkFFRiw4REFBQ0c7Z0JBQUlDLFdBQVU7MEJBQVNWOzs7Ozs7Ozs7Ozs7QUFHOUIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RrcGFnZS8uL2NvbXBvbmVudHMvbGF5b3V0LmpzPzI5YTciXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0ICdwcmltZXJlYWN0L3Jlc291cmNlcy9wcmltZXJlYWN0LmNzcyc7IC8vIGNvcmUgY3NzXG5pbXBvcnQgJ3ByaW1laWNvbnMvcHJpbWVpY29ucy5jc3MnOyAvLyBpY29uc1xuaW1wb3J0ICdwcmltZWZsZXgvcHJpbWVmbGV4LmNzcyc7XG5cbmltcG9ydCB7IEltYWdlIH0gZnJvbSAncHJpbWVyZWFjdC9pbWFnZSc7XG5cbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5leHBvcnQgZnVuY3Rpb24gTGF5b3V0KHsgY2hpbGRyZW4sIGFjdGl2ZSB9KSB7XG4gIGNvbnN0IFthY3RpdmVJbmRleCwgc2V0QWN0aXZlSW5kZXhdID0gdXNlU3RhdGUoYWN0aXZlKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc3QgbW9kZWwgPSBbXG4gICAge1xuICAgICAgbGFiZWw6ICdBYm91dCcsXG4gICAgICBpY29uOiAncGktdXNlcicsXG4gICAgICB1cmw6ICcvJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGxhYmVsOiAnUGhvdG9zJyxcbiAgICAgIGljb246ICdwaS1jYW1lcmEnLFxuICAgICAgdXJsOiAnL3Bob3RvJyxcbiAgICB9LFxuICBdO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGZsZXgtd3JhcFwiXG4gICAgICAgIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogJzEwcHgnIH19XG4gICAgICA+XG4gICAgICAgIDxJbWFnZSBzcmM9XCJrMTAyLnN2Z1wiIGhlaWdodD1cIjQwXCI+PC9JbWFnZT5cbiAgICAgICAge21vZGVsLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRvcC1idXR0b25cIlxuICAgICAgICAgICAgICBrZXk9e2l0ZW0ubGFiZWx9XG4gICAgICAgICAgICAgIGljb249e2BwaSAke2l0ZW0uaWNvbn1gfVxuICAgICAgICAgICAgICBzZXZlcml0eT1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICByb3V0ZXIucHVzaChpdGVtLnVybCk7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtpdGVtLmxhYmVsfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFwZXJcIj57Y2hpbGRyZW59PC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsIkxheW91dCIsImNoaWxkcmVuIiwiYWN0aXZlIiwiYWN0aXZlSW5kZXgiLCJzZXRBY3RpdmVJbmRleCIsInJvdXRlciIsIm1vZGVsIiwibGFiZWwiLCJpY29uIiwidXJsIiwiZGl2IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJtYXJnaW5Cb3R0b20iLCJzcmMiLCJoZWlnaHQiLCJtYXAiLCJpdGVtIiwic2V2ZXJpdHkiLCJvbkNsaWNrIiwicHVzaCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/layout.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../style/main.scss */ \"./style/main.scss\");\n/* harmony import */ var _style_main_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_main_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout */ \"./components/layout.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction App({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_2__.Layout, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                    rel: \"icon\",\n                    href: \"/k102.svg\",\n                    type: \"image/svg+xml\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\k102\\\\Documents\\\\workspace\\\\tkPage\\\\pages\\\\_app.js\",\n                    lineNumber: 9,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\k102\\\\Documents\\\\workspace\\\\tkPage\\\\pages\\\\_app.js\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\k102\\\\Documents\\\\workspace\\\\tkPage\\\\pages\\\\_app.js\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\k102\\\\Documents\\\\workspace\\\\tkPage\\\\pages\\\\_app.js\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUE0QjtBQUNrQjtBQUNqQjtBQUVkLFNBQVNFLElBQUksRUFBRUMsVUFBUyxFQUFFQyxVQUFTLEVBQUUsRUFBRTtJQUNwRCxxQkFDRSw4REFBQ0osc0RBQU1BOzswQkFDTCw4REFBQ0Msa0RBQUlBOzBCQUNILDRFQUFDSTtvQkFBS0MsS0FBSTtvQkFBT0MsTUFBSztvQkFBWUMsTUFBSzs7Ozs7Ozs7Ozs7MEJBRXpDLDhEQUFDTDtnQkFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7Ozs7QUFHOUIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RrcGFnZS8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3N0eWxlL21haW4uc2Nzcyc7XG5pbXBvcnQgeyBMYXlvdXQgfSBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9rMTAyLnN2Z1wiIHR5cGU9XCJpbWFnZS9zdmcreG1sXCI+PC9saW5rPlxuICAgICAgPC9IZWFkPlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgIDwvTGF5b3V0PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkxheW91dCIsIkhlYWQiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJsaW5rIiwicmVsIiwiaHJlZiIsInR5cGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./node_modules/primeflex/primeflex.css":
/*!**********************************************!*\
  !*** ./node_modules/primeflex/primeflex.css ***!
  \**********************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/primeicons/primeicons.css":
/*!************************************************!*\
  !*** ./node_modules/primeicons/primeicons.css ***!
  \************************************************/
/***/ (() => {



/***/ }),

/***/ "./style/main.scss":
/*!*************************!*\
  !*** ./style/main.scss ***!
  \*************************/
/***/ (() => {



/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "primereact/image":
/*!***********************************!*\
  !*** external "primereact/image" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("primereact/image");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();