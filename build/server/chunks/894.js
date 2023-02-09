"use strict";
exports.id = 894;
exports.ids = [894];
exports.modules = {

/***/ 894:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ Layout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var primereact_resources_themes_mdc_light_deeppurple_theme_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(829);
/* harmony import */ var primereact_resources_themes_mdc_light_deeppurple_theme_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(primereact_resources_themes_mdc_light_deeppurple_theme_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var primereact_resources_primereact_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(909);
/* harmony import */ var primereact_resources_primereact_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primereact_resources_primereact_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var primeicons_primeicons_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(248);
/* harmony import */ var primeicons_primeicons_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeicons_primeicons_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var primeflex_primeflex_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(723);
/* harmony import */ var primeflex_primeflex_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeflex_primeflex_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var primereact_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(88);
/* harmony import */ var primereact_button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primereact_button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);


 // core css
 // icons





function Layout({ children , active  }) {
    const [activeIndex, setActiveIndex] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(active);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)();
    const model = [
        {
            label: "About",
            icon: "pi-user",
            url: "/"
        },
        {
            label: "Photos",
            icon: "pi-camera",
            url: "/photo"
        }
    ];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "surface-50 p-3 flex justify-content-center flex-wrap",
                children: model.map((item)=>{
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(primereact_button__WEBPACK_IMPORTED_MODULE_5__.Button, {
                        label: item.label,
                        icon: `pi ${item.icon}`,
                        className: "mx-2 p-button-outlined",
                        onClick: ()=>{
                            router.push(item.url);
                        }
                    }, item.label);
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "pt-2 surface-200",
                children: children
            })
        ]
    });
}


/***/ })

};
;