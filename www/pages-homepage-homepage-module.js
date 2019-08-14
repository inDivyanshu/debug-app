(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-homepage-homepage-module"],{

/***/ "./src/app/pages/homepage/homepage.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/homepage/homepage.module.ts ***!
  \***************************************************/
/*! exports provided: HomepagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepagePageModule", function() { return HomepagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _homepage_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./homepage.page */ "./src/app/pages/homepage/homepage.page.ts");







const routes = [
    {
        path: '',
        component: _homepage_page__WEBPACK_IMPORTED_MODULE_6__["HomepagePage"]
    }
];
let HomepagePageModule = class HomepagePageModule {
};
HomepagePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_homepage_page__WEBPACK_IMPORTED_MODULE_6__["HomepagePage"]]
    })
], HomepagePageModule);



/***/ }),

/***/ "./src/app/pages/homepage/homepage.page.html":
/*!***************************************************!*\
  !*** ./src/app/pages/homepage/homepage.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>homepage</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/homepage/homepage.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/homepage/homepage.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWVwYWdlL2hvbWVwYWdlLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/homepage/homepage.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/homepage/homepage.page.ts ***!
  \*************************************************/
/*! exports provided: HomepagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepagePage", function() { return HomepagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomepagePage = class HomepagePage {
    constructor() { }
    ngOnInit() {
    }
};
HomepagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-homepage',
        template: __webpack_require__(/*! ./homepage.page.html */ "./src/app/pages/homepage/homepage.page.html"),
        styles: [__webpack_require__(/*! ./homepage.page.scss */ "./src/app/pages/homepage/homepage.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], HomepagePage);



/***/ })

}]);
//# sourceMappingURL=pages-homepage-homepage-module.js.map