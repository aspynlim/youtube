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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _classes_Invoice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/Invoice */ \"./src/classes/Invoice.ts\");\n/* harmony import */ var _classes_ListTemplate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/ListTemplate */ \"./src/classes/ListTemplate.ts\");\n/* harmony import */ var _classes_Payment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classes/Payment */ \"./src/classes/Payment.ts\");\n\r\n\r\n\r\nconst anchor = document.querySelector('a');\r\nconsole.log(anchor.href);\r\nconst form = document.querySelector('.new-item-form');\r\n// console.log(form.children);\r\nconst type = document.querySelector('#type');\r\nconst tofrom = document.querySelector('#tofrom');\r\nconst details = document.querySelector('#details');\r\nconst amount = document.querySelector('#amount');\r\n// list template instance\r\nconst ul = document.querySelector('ul'); // This will be definitely found in the page.\r\nconst list = new _classes_ListTemplate__WEBPACK_IMPORTED_MODULE_1__.ListTemplate(ul);\r\nform.addEventListener('submit', (e) => {\r\n    console.log(type.value);\r\n    e.preventDefault();\r\n    let doc;\r\n    if (type.value === 'invoice') {\r\n        doc = new _classes_Invoice__WEBPACK_IMPORTED_MODULE_0__.Invoice(tofrom.value, details.value, amount.valueAsNumber);\r\n    }\r\n    else {\r\n        doc = new _classes_Payment__WEBPACK_IMPORTED_MODULE_2__.Payment(tofrom.value, details.value, amount.valueAsNumber);\r\n    }\r\n    list.render(doc, type.value, 'end');\r\n});\r\n// Generics\r\nconst addUID = (obj) => {\r\n    let uid = Math.floor(Math.random() * 100);\r\n    return Object.assign(Object.assign({}, obj), { uid });\r\n};\r\nlet docOne = addUID({ name: 'jen', age: 30 });\r\nconsole.log(docOne.name); // jen\r\nconst docThree = {\r\n    uId: 1,\r\n    resourceName: 'person',\r\n    data: { color: 'black' }\r\n};\r\nconst docFour = {\r\n    uId: 2,\r\n    resourceName: 'person',\r\n    data: ['red', 'blue']\r\n};\r\nconsole.log(docThree, docFour);\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8xX3R5cGVzY3JpcHQvLi9zcmMvaW5kZXgudHM/ZmZiNCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQTRDO0FBQ1U7QUFDVjtBQUc1QyxNQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBRSxDQUFDO0FBQzVDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBRXpCLE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQW9CLENBQUM7QUFDekUsOEJBQThCO0FBRTlCLE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFzQixDQUFDO0FBQ2xFLE1BQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFxQixDQUFDO0FBQ3JFLE1BQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFxQixDQUFDO0FBQ3ZFLE1BQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFxQixDQUFDO0FBRXJFLHlCQUF5QjtBQUN6QixNQUFNLEVBQUUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBRSxDQUFDLENBQUMsNkNBQTZDO0FBQ3ZGLE1BQU0sSUFBSSxHQUFHLElBQUksK0RBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUVsQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUU7SUFDcEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDeEIsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBRW5CLElBQUksR0FBaUIsQ0FBQztJQUV0QixJQUFHLElBQUksQ0FBQyxLQUFLLEtBQUssU0FBUyxFQUFDO1FBQzFCLEdBQUcsR0FBRyxJQUFJLHFEQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxhQUFhLENBQUM7S0FDckU7U0FBTTtRQUNMLEdBQUcsR0FBRyxJQUFJLHFEQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxhQUFhLENBQUM7S0FDckU7SUFFRCxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQ3RDLENBQUMsQ0FBQyxDQUFDO0FBR0gsV0FBVztBQUNYLE1BQU0sTUFBTSxHQUFHLENBQTJCLEdBQU0sRUFBRSxFQUFFO0lBQ2xELElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDO0lBQzFDLHVDQUFXLEdBQUcsS0FBRSxHQUFHLElBQUU7QUFDdkIsQ0FBQztBQUNELElBQUksTUFBTSxHQUFHLE1BQU0sQ0FBQyxFQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBQyxDQUFDLENBQUM7QUFDNUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNO0FBU2hDLE1BQU0sUUFBUSxHQUFxQjtJQUNqQyxHQUFHLEVBQUUsQ0FBQztJQUNOLFlBQVksRUFBRSxRQUFRO0lBQ3RCLElBQUksRUFBRSxFQUFDLEtBQUssRUFBRyxPQUFPLEVBQUM7Q0FDeEI7QUFFRCxNQUFNLE9BQU8sR0FBdUI7SUFDbEMsR0FBRyxFQUFFLENBQUM7SUFDTixZQUFZLEVBQUUsUUFBUTtJQUN0QixJQUFJLEVBQUUsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDO0NBQ3RCO0FBRUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUMiLCJmaWxlIjoiLi9zcmMvaW5kZXgudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbnZvaWNlIH0gZnJvbSBcIi4vY2xhc3Nlcy9JbnZvaWNlXCI7XHJcbmltcG9ydCB7IExpc3RUZW1wbGF0ZSB9IGZyb20gXCIuL2NsYXNzZXMvTGlzdFRlbXBsYXRlXCI7XHJcbmltcG9ydCB7IFBheW1lbnQgfSBmcm9tIFwiLi9jbGFzc2VzL1BheW1lbnRcIjtcclxuaW1wb3J0IHsgSGFzRm9ybWF0dGVyIH0gZnJvbSBcIi4vaW50ZXJmYWNlcy9IYXNGb3JtYXR0ZXJcIjtcclxuXHJcbmNvbnN0IGFuY2hvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2EnKSE7XHJcbmNvbnNvbGUubG9nKGFuY2hvci5ocmVmKTtcclxuXHJcbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LWl0ZW0tZm9ybScpIGFzIEhUTUxGb3JtRWxlbWVudDtcclxuLy8gY29uc29sZS5sb2coZm9ybS5jaGlsZHJlbik7XHJcblxyXG5jb25zdCB0eXBlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3R5cGUnKSBhcyBIVE1MU2VsZWN0RWxlbWVudDtcclxuY29uc3QgdG9mcm9tID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZnJvbScpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbmNvbnN0IGRldGFpbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGV0YWlscycpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbmNvbnN0IGFtb3VudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhbW91bnQnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG5cclxuLy8gbGlzdCB0ZW1wbGF0ZSBpbnN0YW5jZVxyXG5jb25zdCB1bCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3VsJykhOyAvLyBUaGlzIHdpbGwgYmUgZGVmaW5pdGVseSBmb3VuZCBpbiB0aGUgcGFnZS5cclxuY29uc3QgbGlzdCA9IG5ldyBMaXN0VGVtcGxhdGUodWwpO1xyXG5cclxuZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKHR5cGUudmFsdWUpO1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgbGV0IGRvYzogSGFzRm9ybWF0dGVyO1xyXG5cclxuICBpZih0eXBlLnZhbHVlID09PSAnaW52b2ljZScpe1xyXG4gICAgZG9jID0gbmV3IEludm9pY2UodG9mcm9tLnZhbHVlLCBkZXRhaWxzLnZhbHVlLCBhbW91bnQudmFsdWVBc051bWJlcilcclxuICB9IGVsc2Uge1xyXG4gICAgZG9jID0gbmV3IFBheW1lbnQodG9mcm9tLnZhbHVlLCBkZXRhaWxzLnZhbHVlLCBhbW91bnQudmFsdWVBc051bWJlcilcclxuICB9XHJcblxyXG4gIGxpc3QucmVuZGVyKGRvYywgdHlwZS52YWx1ZSwgJ2VuZCcpO1xyXG59KTtcclxuXHJcblxyXG4vLyBHZW5lcmljc1xyXG5jb25zdCBhZGRVSUQgPSA8VCBleHRlbmRzIHtuYW1lOiBzdHJpbmd9PihvYmo6IFQpID0+IHtcclxuICBsZXQgdWlkID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwKTtcclxuICByZXR1cm4gey4uLm9iaiwgdWlkfTtcclxufVxyXG5sZXQgZG9jT25lID0gYWRkVUlEKHtuYW1lOiAnamVuJywgYWdlOiAzMH0pO1xyXG5jb25zb2xlLmxvZyhkb2NPbmUubmFtZSk7IC8vIGplblxyXG5cclxuLy8gR2VuZXJpY3Mgd2l0aCBhbiBpbnRlcmZhY2VcclxuaW50ZXJmYWNlIFJlc291cmNlPFQ+IHtcclxuICB1SWQ6IG51bWJlcjtcclxuICByZXNvdXJjZU5hbWU6IHN0cmluZztcclxuICBkYXRhOiBUO1xyXG59XHJcblxyXG5jb25zdCBkb2NUaHJlZTogUmVzb3VyY2U8b2JqZWN0PiA9IHtcclxuICB1SWQ6IDEsXHJcbiAgcmVzb3VyY2VOYW1lOiAncGVyc29uJyxcclxuICBkYXRhOiB7Y29sb3IgOiAnYmxhY2snfVxyXG59XHJcblxyXG5jb25zdCBkb2NGb3VyOiBSZXNvdXJjZTxzdHJpbmdbXT4gPSB7XHJcbiAgdUlkOiAyLFxyXG4gIHJlc291cmNlTmFtZTogJ3BlcnNvbicsXHJcbiAgZGF0YTogWydyZWQnLCAnYmx1ZSddXHJcbn1cclxuXHJcbmNvbnNvbGUubG9nKGRvY1RocmVlLCBkb2NGb3VyKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.ts\n");

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