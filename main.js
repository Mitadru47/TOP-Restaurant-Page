/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderhome: () => (/* binding */ renderhome)\n/* harmony export */ });\nfunction renderhome(){\r\n\r\n    // Section B:\r\n\r\n    let primaryContainer = document.querySelector(\"#primary-container\");\r\n    \r\n    let sectionB = document.createElement(\"div\");\r\n    sectionB.setAttribute(\"id\", \"sectionB\");\r\n    \r\n    let bulletPoints = document.createElement(\"div\");\r\n    bulletPoints.setAttribute(\"id\", \"bullet-points\");\r\n\r\n    let points = [\r\n        \r\n        \"- We will serve you food for money!\", \r\n        \"- We are open 24/7!\",\r\n        \"- You can expect fresh veggies & meat once every full moon!\", \r\n        \"- The customer is always right but we don't care!\",\r\n        \"- You will always be greeted with an unconvincing welcoming smile!\"\r\n    ];\r\n\r\n    for(let i=0; i<5; i++){\r\n\r\n        let div = document.createElement(\"div\");\r\n        div.innerText = points[i];\r\n\r\n        bulletPoints.appendChild(div);\r\n    }\r\n    \r\n    sectionB.appendChild(bulletPoints);\r\n\r\n    // Section C:\r\n\r\n    let sectionC = document.createElement(\"div\");\r\n    sectionC.setAttribute(\"id\", \"sectionC\");\r\n    \r\n    let reviews = document.createElement(\"div\");\r\n    reviews.setAttribute(\"id\", \"reviews\");\r\n\r\n    let reviewList = [\r\n        \r\n        {\r\n            review: \"\\\"I almost died! Thank God for health insurance.\\\"\", \r\n            reviewer: \"- Our First Customer\", \r\n        },\r\n        \r\n        {\r\n            review: \"\\\"Great Restaurant!!! OMG!!!!\\\"\",\r\n            reviewer: \"- Our Owner Trying to pose as a Customer\",\r\n        }\r\n    ];\r\n\r\n\r\n    for(let i=0; i<2; i++){\r\n\r\n        let div1 = document.createElement(\"div\");\r\n\r\n        div1.classList.add(\"review\");\r\n        div1.innerText = reviewList[i].review;\r\n\r\n        let div2 = document.createElement(\"div\");\r\n\r\n        div2.classList.add(\"reviewer\");\r\n        div2.innerText = reviewList[i].reviewer;\r\n\r\n        let div = document.createElement(\"div\");\r\n\r\n        div.appendChild(div1);\r\n        div.appendChild(div2);\r\n\r\n        reviews.appendChild(div);\r\n    }\r\n    \r\n    sectionC.appendChild(reviews);\r\n\r\n    primaryContainer.appendChild(sectionB);\r\n    primaryContainer.appendChild(sectionC);\r\n}\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n\r\n\r\nlet homeButton = document.querySelector(\"#home-button\");\r\nhomeButton.addEventListener(\"click\", () => {\r\n\r\n    try{\r\n    \r\n        let sectionB = document.querySelector(\"#sectionB\");\r\n        sectionB.remove();\r\n\r\n        let sectionC = document.querySelector(\"#sectionC\");\r\n        sectionC.remove();\r\n    }\r\n\r\n    catch(error){console.log(\"Handled!\");}\r\n    (0,_home__WEBPACK_IMPORTED_MODULE_0__.renderhome)();\r\n\r\n}, true);\r\n\r\n// renderhome();\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;