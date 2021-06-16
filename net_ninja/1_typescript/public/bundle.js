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

/***/ "./src/forms.ts":
/*!**********************!*\
  !*** ./src/forms.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"formData\": () => (/* binding */ formData)\n/* harmony export */ });\nconst formData = (form) => {\r\n    const inputs = form.querySelectorAll('input');\r\n    let values = {};\r\n    inputs.forEach(input => {\r\n        values[input.id] = input.value;\r\n    });\r\n    return values;\r\n};\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8xX3R5cGVzY3JpcHQvLi9zcmMvZm9ybXMudHM/NTBiNiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQU8sTUFBTSxRQUFRLEdBQUcsQ0FBQyxJQUFxQixFQUFFLEVBQUU7SUFDaEQsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzlDLElBQUksTUFBTSxHQUE2QixFQUFFLENBQUM7SUFFMUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtRQUNyQixNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7SUFDakMsQ0FBQyxDQUFDLENBQUM7SUFDSCxPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDIiwiZmlsZSI6Ii4vc3JjL2Zvcm1zLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGZvcm1EYXRhID0gKGZvcm06IEhUTUxGb3JtRWxlbWVudCkgPT4ge1xyXG4gIGNvbnN0IGlucHV0cyA9IGZvcm0ucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQnKTtcclxuICBsZXQgdmFsdWVzOiB7W3Byb3A6IHN0cmluZ106IHN0cmluZ30gPSB7fTtcclxuXHJcbiAgaW5wdXRzLmZvckVhY2goaW5wdXQgPT4ge1xyXG4gICAgdmFsdWVzW2lucHV0LmlkXSA9IGlucHV0LnZhbHVlO1xyXG4gIH0pO1xyXG4gIHJldHVybiB2YWx1ZXM7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/forms.ts\n");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forms */ \"./src/forms.ts\");\n/* harmony import */ var _classes_Payment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/Payment */ \"./src/classes/Payment.ts\");\n/* harmony import */ var _classes_Invoice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classes/Invoice */ \"./src/classes/Invoice.ts\");\n\r\n\r\n\r\n// formData\r\nconst form = document.querySelector('form');\r\nform.addEventListener('submit', (e) => {\r\n    e.preventDefault();\r\n    const data = (0,_forms__WEBPACK_IMPORTED_MODULE_0__.formData)(form);\r\n    console.log(data);\r\n});\r\nconst person = {};\r\n// console.log(person.speak());\r\n// Interfaces > isPerson\r\nconst me = {\r\n    name: 'jay',\r\n    age: 30,\r\n    speak(text) {\r\n        console.log(text);\r\n    },\r\n    spend(amount) {\r\n        console.log(`I spent ${amount}.`);\r\n        return amount;\r\n    }\r\n};\r\nconst greetPerson = (person) => {\r\n    console.log(`hello, ${person.name}`);\r\n};\r\ngreetPerson(me);\r\n// Interfaces with Classes\r\nlet docOne;\r\nlet docTwo;\r\ndocOne = new _classes_Invoice__WEBPACK_IMPORTED_MODULE_2__.Invoice('jen', 'web work', 250);\r\ndocTwo = new _classes_Payment__WEBPACK_IMPORTED_MODULE_1__.Payment('joy', 'plumbing work', 200);\r\nlet docs = [];\r\ndocs.push(docOne);\r\ndocs.push(docTwo);\r\nconsole.log(docs);\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8xX3R5cGVzY3JpcHQvLi9zcmMvaW5kZXgudHM/ZmZiNCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQW1DO0FBRVM7QUFFQTtBQUU1QyxXQUFXO0FBQ1gsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUUsQ0FBQztBQUU3QyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUU7SUFDcEMsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ25CLE1BQU0sSUFBSSxHQUFHLGdEQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNwQixDQUFDLENBQUMsQ0FBQztBQUVILE1BQU0sTUFBTSxHQUFRLEVBQUUsQ0FBQztBQUN2QiwrQkFBK0I7QUFFL0Isd0JBQXdCO0FBQ3hCLE1BQU0sRUFBRSxHQUFhO0lBQ25CLElBQUksRUFBRSxLQUFLO0lBQ1gsR0FBRyxFQUFFLEVBQUU7SUFDUCxLQUFLLENBQUMsSUFBWTtRQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BCLENBQUM7SUFDRCxLQUFLLENBQUMsTUFBYztRQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUNsQyxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0NBQ0YsQ0FBQztBQUVGLE1BQU0sV0FBVyxHQUFHLENBQUMsTUFBZ0IsRUFBRSxFQUFFO0lBQ3ZDLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUN2QyxDQUFDO0FBQ0QsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBRWhCLDBCQUEwQjtBQUMxQixJQUFJLE1BQW9CLENBQUM7QUFDekIsSUFBSSxNQUFvQixDQUFDO0FBRXpCLE1BQU0sR0FBRyxJQUFJLHFEQUFPLENBQUMsS0FBSyxFQUFFLFVBQVUsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUM3QyxNQUFNLEdBQUcsSUFBSSxxREFBTyxDQUFDLEtBQUssRUFBRSxlQUFlLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFFbEQsSUFBSSxJQUFJLEdBQW1CLEVBQUUsQ0FBQztBQUM5QixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ2xCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7QUFFbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyIsImZpbGUiOiIuL3NyYy9pbmRleC50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGZvcm1EYXRhIH0gZnJvbSAnLi9mb3Jtcyc7XHJcbmltcG9ydCB7IElzUGVyc29uIH0gZnJvbSAnLi9pbnRlcmZhY2VzL0lzUGVyc29uJztcclxuaW1wb3J0IHsgUGF5bWVudCB9IGZyb20gJy4vY2xhc3Nlcy9QYXltZW50JztcclxuaW1wb3J0IHsgSGFzRm9ybWF0dGVyIH0gZnJvbSAnLi9pbnRlcmZhY2VzL0hhc0Zvcm1hdHRlcic7XHJcbmltcG9ydCB7IEludm9pY2UgfSBmcm9tICcuL2NsYXNzZXMvSW52b2ljZSc7XHJcblxyXG4vLyBmb3JtRGF0YVxyXG5jb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybScpITtcclxuXHJcbmZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgY29uc3QgZGF0YSA9IGZvcm1EYXRhKGZvcm0pO1xyXG4gIGNvbnNvbGUubG9nKGRhdGEpO1xyXG59KTtcclxuXHJcbmNvbnN0IHBlcnNvbjogYW55ID0ge307XHJcbi8vIGNvbnNvbGUubG9nKHBlcnNvbi5zcGVhaygpKTtcclxuXHJcbi8vIEludGVyZmFjZXMgPiBpc1BlcnNvblxyXG5jb25zdCBtZTogSXNQZXJzb24gPSB7XHJcbiAgbmFtZTogJ2pheScsXHJcbiAgYWdlOiAzMCxcclxuICBzcGVhayh0ZXh0OiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIGNvbnNvbGUubG9nKHRleHQpO1xyXG4gIH0sXHJcbiAgc3BlbmQoYW1vdW50OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgY29uc29sZS5sb2coYEkgc3BlbnQgJHthbW91bnR9LmApO1xyXG4gICAgcmV0dXJuIGFtb3VudDtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBncmVldFBlcnNvbiA9IChwZXJzb246IElzUGVyc29uKSA9PiB7XHJcbiAgY29uc29sZS5sb2coYGhlbGxvLCAke3BlcnNvbi5uYW1lfWApO1xyXG59XHJcbmdyZWV0UGVyc29uKG1lKTtcclxuXHJcbi8vIEludGVyZmFjZXMgd2l0aCBDbGFzc2VzXHJcbmxldCBkb2NPbmU6IEhhc0Zvcm1hdHRlcjtcclxubGV0IGRvY1R3bzogSGFzRm9ybWF0dGVyO1xyXG5cclxuZG9jT25lID0gbmV3IEludm9pY2UoJ2plbicsICd3ZWIgd29yaycsIDI1MCk7XHJcbmRvY1R3byA9IG5ldyBQYXltZW50KCdqb3knLCAncGx1bWJpbmcgd29yaycsIDIwMCk7XHJcblxyXG5sZXQgZG9jczogSGFzRm9ybWF0dGVyW10gPSBbXTtcclxuZG9jcy5wdXNoKGRvY09uZSk7XHJcbmRvY3MucHVzaChkb2NUd28pO1xyXG5cclxuY29uc29sZS5sb2coZG9jcyk7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.ts\n");

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