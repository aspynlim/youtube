/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/classes/Invoice.ts":
/*!********************************!*\
  !*** ./src/classes/Invoice.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Invoice\": () => (/* binding */ Invoice)\n/* harmony export */ });\nclass Invoice {\r\n    // private client: string;\r\n    // readonly details: string;\r\n    // amount: number;\r\n    // constructor(c: string, d: string, a: number){\r\n    //   this.client = c;\r\n    //   this.details = d;\r\n    //   this.amount = a;\r\n    // }\r\n    constructor(client, details, amount) {\r\n        this.client = client;\r\n        this.details = details;\r\n        this.amount = amount;\r\n    }\r\n    format() {\r\n        // this.details = 'test';\r\n        return `${this.client} owes $${this.amount} for ${this.details}!`;\r\n    }\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8xX3R5cGVzY3JpcHQvLi9zcmMvY2xhc3Nlcy9JbnZvaWNlLnRzPzdhNTYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNPLE1BQU0sT0FBTztJQUNsQiwwQkFBMEI7SUFDMUIsNEJBQTRCO0lBQzVCLGtCQUFrQjtJQUVsQixnREFBZ0Q7SUFDaEQscUJBQXFCO0lBQ3JCLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIsSUFBSTtJQUVKLFlBQ1UsTUFBYyxFQUNiLE9BQWUsRUFDakIsTUFBYztRQUZiLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDYixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQ2pCLFdBQU0sR0FBTixNQUFNLENBQVE7SUFDckIsQ0FBQztJQUVILE1BQU07UUFDSix5QkFBeUI7UUFDekIsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLFVBQVUsSUFBSSxDQUFDLE1BQU0sUUFBUSxJQUFJLENBQUMsT0FBTyxHQUFHO0lBQ25FLENBQUM7Q0FDRiIsImZpbGUiOiIuL3NyYy9jbGFzc2VzL0ludm9pY2UudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIYXNGb3JtYXR0ZXIgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9IYXNGb3JtYXR0ZXJcIlxyXG5leHBvcnQgY2xhc3MgSW52b2ljZSBpbXBsZW1lbnRzIEhhc0Zvcm1hdHRlciB7XHJcbiAgLy8gcHJpdmF0ZSBjbGllbnQ6IHN0cmluZztcclxuICAvLyByZWFkb25seSBkZXRhaWxzOiBzdHJpbmc7XHJcbiAgLy8gYW1vdW50OiBudW1iZXI7XHJcblxyXG4gIC8vIGNvbnN0cnVjdG9yKGM6IHN0cmluZywgZDogc3RyaW5nLCBhOiBudW1iZXIpe1xyXG4gIC8vICAgdGhpcy5jbGllbnQgPSBjO1xyXG4gIC8vICAgdGhpcy5kZXRhaWxzID0gZDtcclxuICAvLyAgIHRoaXMuYW1vdW50ID0gYTtcclxuICAvLyB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBjbGllbnQ6IHN0cmluZyxcclxuICAgIHJlYWRvbmx5IGRldGFpbHM6IHN0cmluZyxcclxuICAgIHB1YmxpYyBhbW91bnQ6IG51bWJlclxyXG4gICl7fVxyXG5cclxuICBmb3JtYXQoKXtcclxuICAgIC8vIHRoaXMuZGV0YWlscyA9ICd0ZXN0JztcclxuICAgIHJldHVybiBgJHt0aGlzLmNsaWVudH0gb3dlcyAkJHt0aGlzLmFtb3VudH0gZm9yICR7dGhpcy5kZXRhaWxzfSFgXHJcbiAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/classes/Invoice.ts\n");

/***/ }),

/***/ "./src/classes/Payment.ts":
/*!********************************!*\
  !*** ./src/classes/Payment.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Payment\": () => (/* binding */ Payment)\n/* harmony export */ });\nclass Payment {\r\n    constructor(recipient, details, amount) {\r\n        this.recipient = recipient;\r\n        this.details = details;\r\n        this.amount = amount;\r\n    }\r\n    format() {\r\n        // this.details = 'test';\r\n        return `${this.recipient} is owed $${this.amount} for ${this.details}!`;\r\n    }\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8xX3R5cGVzY3JpcHQvLi9zcmMvY2xhc3Nlcy9QYXltZW50LnRzP2ZjMGYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVPLE1BQU0sT0FBTztJQUNsQixZQUNVLFNBQWlCLEVBQ2hCLE9BQWUsRUFDakIsTUFBYztRQUZiLGNBQVMsR0FBVCxTQUFTLENBQVE7UUFDaEIsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUNqQixXQUFNLEdBQU4sTUFBTSxDQUFRO0lBQ3JCLENBQUM7SUFFSCxNQUFNO1FBQ0oseUJBQXlCO1FBQ3pCLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUyxhQUFhLElBQUksQ0FBQyxNQUFNLFFBQVEsSUFBSSxDQUFDLE9BQU8sR0FBRztJQUN6RSxDQUFDO0NBQ0YiLCJmaWxlIjoiLi9zcmMvY2xhc3Nlcy9QYXltZW50LnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSGFzRm9ybWF0dGVyIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvSGFzRm9ybWF0dGVyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUGF5bWVudCBpbXBsZW1lbnRzIEhhc0Zvcm1hdHRlciB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHJlY2lwaWVudDogc3RyaW5nLFxyXG4gICAgcmVhZG9ubHkgZGV0YWlsczogc3RyaW5nLFxyXG4gICAgcHVibGljIGFtb3VudDogbnVtYmVyXHJcbiAgKXt9XHJcblxyXG4gIGZvcm1hdCgpe1xyXG4gICAgLy8gdGhpcy5kZXRhaWxzID0gJ3Rlc3QnO1xyXG4gICAgcmV0dXJuIGAke3RoaXMucmVjaXBpZW50fSBpcyBvd2VkICQke3RoaXMuYW1vdW50fSBmb3IgJHt0aGlzLmRldGFpbHN9IWBcclxuICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/classes/Payment.ts\n");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _classes_Invoice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/Invoice */ \"./src/classes/Invoice.ts\");\n/* harmony import */ var _classes_Payment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/Payment */ \"./src/classes/Payment.ts\");\n\r\n\r\nconst anchor = document.querySelector('a');\r\nconsole.log(anchor.href);\r\nconst form = document.querySelector('.new-item-form');\r\n// console.log(form.children);\r\nconst type = document.querySelector('#type');\r\nconst tofrom = document.querySelector('#tofrom');\r\nconst details = document.querySelector('#details');\r\nconst amount = document.querySelector('#amount');\r\nform.addEventListener('submit', (e) => {\r\n    console.log(type.value);\r\n    e.preventDefault();\r\n    let doc;\r\n    if (type.value === 'invoice') {\r\n        doc = new _classes_Invoice__WEBPACK_IMPORTED_MODULE_0__.Invoice(tofrom.value, details.value, amount.valueAsNumber);\r\n    }\r\n    else {\r\n        doc = new _classes_Payment__WEBPACK_IMPORTED_MODULE_1__.Payment(tofrom.value, details.value, amount.valueAsNumber);\r\n    }\r\n    console.log(doc);\r\n});\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8xX3R5cGVzY3JpcHQvLi9zcmMvaW5kZXgudHM/ZmZiNCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBNEM7QUFDQTtBQUc1QyxNQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBRSxDQUFDO0FBQzVDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBRXpCLE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQW9CLENBQUM7QUFDekUsOEJBQThCO0FBRTlCLE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFzQixDQUFDO0FBQ2xFLE1BQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFxQixDQUFDO0FBQ3JFLE1BQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFxQixDQUFDO0FBQ3ZFLE1BQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFxQixDQUFDO0FBRXJFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRTtJQUNwQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN4QixDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7SUFFbkIsSUFBSSxHQUFpQixDQUFDO0lBRXRCLElBQUcsSUFBSSxDQUFDLEtBQUssS0FBSyxTQUFTLEVBQUM7UUFDMUIsR0FBRyxHQUFHLElBQUkscURBQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLGFBQWEsQ0FBQztLQUNyRTtTQUFNO1FBQ0wsR0FBRyxHQUFHLElBQUkscURBQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLGFBQWEsQ0FBQztLQUNyRTtJQUVELE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDbkIsQ0FBQyxDQUFDLENBQUMiLCJmaWxlIjoiLi9zcmMvaW5kZXgudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbnZvaWNlIH0gZnJvbSBcIi4vY2xhc3Nlcy9JbnZvaWNlXCI7XHJcbmltcG9ydCB7IFBheW1lbnQgfSBmcm9tIFwiLi9jbGFzc2VzL1BheW1lbnRcIjtcclxuaW1wb3J0IHsgSGFzRm9ybWF0dGVyIH0gZnJvbSBcIi4vaW50ZXJmYWNlcy9IYXNGb3JtYXR0ZXJcIjtcclxuXHJcbmNvbnN0IGFuY2hvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2EnKSE7XHJcbmNvbnNvbGUubG9nKGFuY2hvci5ocmVmKTtcclxuXHJcbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LWl0ZW0tZm9ybScpIGFzIEhUTUxGb3JtRWxlbWVudDtcclxuLy8gY29uc29sZS5sb2coZm9ybS5jaGlsZHJlbik7XHJcblxyXG5jb25zdCB0eXBlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3R5cGUnKSBhcyBIVE1MU2VsZWN0RWxlbWVudDtcclxuY29uc3QgdG9mcm9tID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZnJvbScpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbmNvbnN0IGRldGFpbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGV0YWlscycpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbmNvbnN0IGFtb3VudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhbW91bnQnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG5cclxuZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKHR5cGUudmFsdWUpO1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgbGV0IGRvYzogSGFzRm9ybWF0dGVyO1xyXG5cclxuICBpZih0eXBlLnZhbHVlID09PSAnaW52b2ljZScpe1xyXG4gICAgZG9jID0gbmV3IEludm9pY2UodG9mcm9tLnZhbHVlLCBkZXRhaWxzLnZhbHVlLCBhbW91bnQudmFsdWVBc051bWJlcilcclxuICB9IGVsc2Uge1xyXG4gICAgZG9jID0gbmV3IFBheW1lbnQodG9mcm9tLnZhbHVlLCBkZXRhaWxzLnZhbHVlLCBhbW91bnQudmFsdWVBc051bWJlcilcclxuICB9XHJcblxyXG4gIGNvbnNvbGUubG9nKGRvYyk7XHJcbn0pOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.ts\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;