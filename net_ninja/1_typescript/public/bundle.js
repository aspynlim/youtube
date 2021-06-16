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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forms */ \"./src/forms.ts\");\n\r\n// formData\r\nconst form = document.querySelector('form');\r\nform.addEventListener('submit', (e) => {\r\n    e.preventDefault();\r\n    const data = (0,_forms__WEBPACK_IMPORTED_MODULE_0__.formData)(form);\r\n    console.log(data);\r\n});\r\nconst person = {};\r\n// console.log(person.speak());\r\n// Interfaces > isPerson\r\nconst me = {\r\n    name: 'jay',\r\n    age: 30,\r\n    speak(text) {\r\n        console.log(text);\r\n    },\r\n    spend(amount) {\r\n        console.log(`I spent ${amount}.`);\r\n        return amount;\r\n    }\r\n};\r\nconst greetPerson = (person) => {\r\n    console.log(`hello, ${person.name}`);\r\n};\r\ngreetPerson(me);\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8xX3R5cGVzY3JpcHQvLi9zcmMvaW5kZXgudHM/ZmZiNCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFtQztBQUduQyxXQUFXO0FBQ1gsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUUsQ0FBQztBQUU3QyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUU7SUFDcEMsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ25CLE1BQU0sSUFBSSxHQUFHLGdEQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNwQixDQUFDLENBQUMsQ0FBQztBQUVILE1BQU0sTUFBTSxHQUFRLEVBQUUsQ0FBQztBQUN2QiwrQkFBK0I7QUFFL0Isd0JBQXdCO0FBQ3hCLE1BQU0sRUFBRSxHQUFhO0lBQ25CLElBQUksRUFBRSxLQUFLO0lBQ1gsR0FBRyxFQUFFLEVBQUU7SUFDUCxLQUFLLENBQUMsSUFBWTtRQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BCLENBQUM7SUFDRCxLQUFLLENBQUMsTUFBYztRQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUNsQyxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0NBQ0YsQ0FBQztBQUVGLE1BQU0sV0FBVyxHQUFHLENBQUMsTUFBZ0IsRUFBRSxFQUFFO0lBQ3ZDLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUN2QyxDQUFDO0FBQ0QsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDIiwiZmlsZSI6Ii4vc3JjL2luZGV4LnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZm9ybURhdGEgfSBmcm9tICcuL2Zvcm1zJztcclxuaW1wb3J0IHsgSXNQZXJzb24gfSBmcm9tICcuL2ludGVyZmFjZXMvaXNQZXJzb24nO1xyXG5cclxuLy8gZm9ybURhdGFcclxuY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKSE7XHJcblxyXG5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIGNvbnN0IGRhdGEgPSBmb3JtRGF0YShmb3JtKTtcclxuICBjb25zb2xlLmxvZyhkYXRhKTtcclxufSk7XHJcblxyXG5jb25zdCBwZXJzb246IGFueSA9IHt9O1xyXG4vLyBjb25zb2xlLmxvZyhwZXJzb24uc3BlYWsoKSk7XHJcblxyXG4vLyBJbnRlcmZhY2VzID4gaXNQZXJzb25cclxuY29uc3QgbWU6IElzUGVyc29uID0ge1xyXG4gIG5hbWU6ICdqYXknLFxyXG4gIGFnZTogMzAsXHJcbiAgc3BlYWsodGV4dDogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBjb25zb2xlLmxvZyh0ZXh0KTtcclxuICB9LFxyXG4gIHNwZW5kKGFtb3VudDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIGNvbnNvbGUubG9nKGBJIHNwZW50ICR7YW1vdW50fS5gKTtcclxuICAgIHJldHVybiBhbW91bnQ7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgZ3JlZXRQZXJzb24gPSAocGVyc29uOiBJc1BlcnNvbikgPT4ge1xyXG4gIGNvbnNvbGUubG9nKGBoZWxsbywgJHtwZXJzb24ubmFtZX1gKTtcclxufVxyXG5ncmVldFBlcnNvbihtZSk7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.ts\n");

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