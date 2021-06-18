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

/***/ "./src/classes/ListTemplate.ts":
/*!*************************************!*\
  !*** ./src/classes/ListTemplate.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ListTemplate\": () => (/* binding */ ListTemplate)\n/* harmony export */ });\nclass ListTemplate {\r\n    constructor(container) {\r\n        this.container = container;\r\n    }\r\n    // Both of \"Invoice\" & \"Payment\" classes implement the \"HasFormatter\" interface.\r\n    render(item, heading, pos) {\r\n        const li = document.createElement('li');\r\n        const h4 = document.createElement('h4');\r\n        h4.innerText = heading;\r\n        li.append(h4);\r\n        const p = document.createElement('p');\r\n        p.innerText = item.format();\r\n        li.append(p);\r\n        if (pos === 'start') {\r\n            this.container.prepend(li);\r\n        }\r\n        else {\r\n            this.container.append(li);\r\n        }\r\n    }\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8xX3R5cGVzY3JpcHQvLi9zcmMvY2xhc3Nlcy9MaXN0VGVtcGxhdGUudHM/MTExNyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRU8sTUFBTSxZQUFZO0lBQ3ZCLFlBQW9CLFNBQTJCO1FBQTNCLGNBQVMsR0FBVCxTQUFTLENBQWtCO0lBQUUsQ0FBQztJQUVsRCxnRkFBZ0Y7SUFDaEYsTUFBTSxDQUFDLElBQWtCLEVBQUUsT0FBZSxFQUFFLEdBQW9CO1FBQzlELE1BQU0sRUFBRSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFeEMsTUFBTSxFQUFFLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QyxFQUFFLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQztRQUN2QixFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRWQsTUFBTSxDQUFDLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN0QyxDQUFDLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUM1QixFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRWIsSUFBRyxHQUFHLEtBQUssT0FBTyxFQUFDO1lBQ2pCLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQzVCO2FBQU07WUFDTCxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUMzQjtJQUNILENBQUM7Q0FDRiIsImZpbGUiOiIuL3NyYy9jbGFzc2VzL0xpc3RUZW1wbGF0ZS50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEhhc0Zvcm1hdHRlciB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL0hhc0Zvcm1hdHRlclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIExpc3RUZW1wbGF0ZSB7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjb250YWluZXI6IEhUTUxVTGlzdEVsZW1lbnQpe31cclxuXHJcbiAgLy8gQm90aCBvZiBcIkludm9pY2VcIiAmIFwiUGF5bWVudFwiIGNsYXNzZXMgaW1wbGVtZW50IHRoZSBcIkhhc0Zvcm1hdHRlclwiIGludGVyZmFjZS5cclxuICByZW5kZXIoaXRlbTogSGFzRm9ybWF0dGVyLCBoZWFkaW5nOiBzdHJpbmcsIHBvczogJ3N0YXJ0JyB8ICdlbmQnKXtcclxuICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuXHJcbiAgICBjb25zdCBoNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XHJcbiAgICBoNC5pbm5lclRleHQgPSBoZWFkaW5nO1xyXG4gICAgbGkuYXBwZW5kKGg0KTtcclxuXHJcbiAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgcC5pbm5lclRleHQgPSBpdGVtLmZvcm1hdCgpO1xyXG4gICAgbGkuYXBwZW5kKHApO1xyXG5cclxuICAgIGlmKHBvcyA9PT0gJ3N0YXJ0Jyl7XHJcbiAgICAgIHRoaXMuY29udGFpbmVyLnByZXBlbmQobGkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kKGxpKTtcclxuICAgIH1cclxuICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/classes/ListTemplate.ts\n");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _classes_Invoice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/Invoice */ \"./src/classes/Invoice.ts\");\n/* harmony import */ var _classes_ListTemplate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/ListTemplate */ \"./src/classes/ListTemplate.ts\");\n/* harmony import */ var _classes_Payment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classes/Payment */ \"./src/classes/Payment.ts\");\n\r\n\r\n\r\nconst anchor = document.querySelector('a');\r\nconsole.log(anchor.href);\r\nconst form = document.querySelector('.new-item-form');\r\n// console.log(form.children);\r\nconst type = document.querySelector('#type');\r\nconst tofrom = document.querySelector('#tofrom');\r\nconst details = document.querySelector('#details');\r\nconst amount = document.querySelector('#amount');\r\n// list template instance\r\nconst ul = document.querySelector('ul'); // This will be definitely found in the page.\r\nconst list = new _classes_ListTemplate__WEBPACK_IMPORTED_MODULE_1__.ListTemplate(ul);\r\nform.addEventListener('submit', (e) => {\r\n    console.log(type.value);\r\n    e.preventDefault();\r\n    let doc;\r\n    if (type.value === 'invoice') {\r\n        doc = new _classes_Invoice__WEBPACK_IMPORTED_MODULE_0__.Invoice(tofrom.value, details.value, amount.valueAsNumber);\r\n    }\r\n    else {\r\n        doc = new _classes_Payment__WEBPACK_IMPORTED_MODULE_2__.Payment(tofrom.value, details.value, amount.valueAsNumber);\r\n    }\r\n    list.render(doc, type.value, 'end');\r\n});\r\n// Generics\r\nconst addUID = (obj) => {\r\n    let uid = Math.floor(Math.random() * 100);\r\n    return Object.assign(Object.assign({}, obj), { uid });\r\n};\r\nlet docOne = addUID({ name: 'jen', age: 30 });\r\nconsole.log(docOne.name); // ERROR : Property 'name' does not exist on type\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8xX3R5cGVzY3JpcHQvLi9zcmMvaW5kZXgudHM/ZmZiNCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQTRDO0FBQ1U7QUFDVjtBQUc1QyxNQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBRSxDQUFDO0FBQzVDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBRXpCLE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQW9CLENBQUM7QUFDekUsOEJBQThCO0FBRTlCLE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFzQixDQUFDO0FBQ2xFLE1BQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFxQixDQUFDO0FBQ3JFLE1BQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFxQixDQUFDO0FBQ3ZFLE1BQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFxQixDQUFDO0FBRXJFLHlCQUF5QjtBQUN6QixNQUFNLEVBQUUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBRSxDQUFDLENBQUMsNkNBQTZDO0FBQ3ZGLE1BQU0sSUFBSSxHQUFHLElBQUksK0RBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUVsQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUU7SUFDcEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDeEIsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBRW5CLElBQUksR0FBaUIsQ0FBQztJQUV0QixJQUFHLElBQUksQ0FBQyxLQUFLLEtBQUssU0FBUyxFQUFDO1FBQzFCLEdBQUcsR0FBRyxJQUFJLHFEQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxhQUFhLENBQUM7S0FDckU7U0FBTTtRQUNMLEdBQUcsR0FBRyxJQUFJLHFEQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxhQUFhLENBQUM7S0FDckU7SUFFRCxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQ3RDLENBQUMsQ0FBQyxDQUFDO0FBR0gsV0FBVztBQUNYLE1BQU0sTUFBTSxHQUFHLENBQUMsR0FBVyxFQUFFLEVBQUU7SUFDN0IsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUM7SUFDMUMsdUNBQVcsR0FBRyxLQUFFLEdBQUcsSUFBRTtBQUN2QixDQUFDO0FBQ0QsSUFBSSxNQUFNLEdBQUcsTUFBTSxDQUFDLEVBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFDLENBQUMsQ0FBQztBQUM1QyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLGlEQUFpRCIsImZpbGUiOiIuL3NyYy9pbmRleC50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEludm9pY2UgfSBmcm9tIFwiLi9jbGFzc2VzL0ludm9pY2VcIjtcclxuaW1wb3J0IHsgTGlzdFRlbXBsYXRlIH0gZnJvbSBcIi4vY2xhc3Nlcy9MaXN0VGVtcGxhdGVcIjtcclxuaW1wb3J0IHsgUGF5bWVudCB9IGZyb20gXCIuL2NsYXNzZXMvUGF5bWVudFwiO1xyXG5pbXBvcnQgeyBIYXNGb3JtYXR0ZXIgfSBmcm9tIFwiLi9pbnRlcmZhY2VzL0hhc0Zvcm1hdHRlclwiO1xyXG5cclxuY29uc3QgYW5jaG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYScpITtcclxuY29uc29sZS5sb2coYW5jaG9yLmhyZWYpO1xyXG5cclxuY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctaXRlbS1mb3JtJykgYXMgSFRNTEZvcm1FbGVtZW50O1xyXG4vLyBjb25zb2xlLmxvZyhmb3JtLmNoaWxkcmVuKTtcclxuXHJcbmNvbnN0IHR5cGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdHlwZScpIGFzIEhUTUxTZWxlY3RFbGVtZW50O1xyXG5jb25zdCB0b2Zyb20gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9mcm9tJykgYXMgSFRNTElucHV0RWxlbWVudDtcclxuY29uc3QgZGV0YWlscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZXRhaWxzJykgYXMgSFRNTElucHV0RWxlbWVudDtcclxuY29uc3QgYW1vdW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Ftb3VudCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcblxyXG4vLyBsaXN0IHRlbXBsYXRlIGluc3RhbmNlXHJcbmNvbnN0IHVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndWwnKSE7IC8vIFRoaXMgd2lsbCBiZSBkZWZpbml0ZWx5IGZvdW5kIGluIHRoZSBwYWdlLlxyXG5jb25zdCBsaXN0ID0gbmV3IExpc3RUZW1wbGF0ZSh1bCk7XHJcblxyXG5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XHJcbiAgY29uc29sZS5sb2codHlwZS52YWx1ZSk7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICBsZXQgZG9jOiBIYXNGb3JtYXR0ZXI7XHJcblxyXG4gIGlmKHR5cGUudmFsdWUgPT09ICdpbnZvaWNlJyl7XHJcbiAgICBkb2MgPSBuZXcgSW52b2ljZSh0b2Zyb20udmFsdWUsIGRldGFpbHMudmFsdWUsIGFtb3VudC52YWx1ZUFzTnVtYmVyKVxyXG4gIH0gZWxzZSB7XHJcbiAgICBkb2MgPSBuZXcgUGF5bWVudCh0b2Zyb20udmFsdWUsIGRldGFpbHMudmFsdWUsIGFtb3VudC52YWx1ZUFzTnVtYmVyKVxyXG4gIH1cclxuXHJcbiAgbGlzdC5yZW5kZXIoZG9jLCB0eXBlLnZhbHVlLCAnZW5kJyk7XHJcbn0pO1xyXG5cclxuXHJcbi8vIEdlbmVyaWNzXHJcbmNvbnN0IGFkZFVJRCA9IChvYmo6IG9iamVjdCkgPT4ge1xyXG4gIGxldCB1aWQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDApO1xyXG4gIHJldHVybiB7Li4ub2JqLCB1aWR9O1xyXG59XHJcbmxldCBkb2NPbmUgPSBhZGRVSUQoe25hbWU6ICdqZW4nLCBhZ2U6IDMwfSk7XHJcbmNvbnNvbGUubG9nKGRvY09uZS5uYW1lKTsgLy8gRVJST1IgOiBQcm9wZXJ0eSAnbmFtZScgZG9lcyBub3QgZXhpc3Qgb24gdHlwZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.ts\n");

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