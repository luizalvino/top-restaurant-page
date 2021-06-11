/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/displayController.js":
/*!**********************************!*\
  !*** ./src/displayController.js ***!
  \**********************************/
/***/ ((module) => {

eval("class DisplayController {\n  constructor(targetEl) {\n    this.targetEl = targetEl;\n    this.tabRenderMap = {\n      home: this.home,\n      menu: this.menu,\n      contact: this.contact,\n    };\n    this.activeTab = null;\n  }\n\n  page() {\n    const self = this;\n\n    const main = document.createElement(\"main\");\n    const footer = document.createElement(\"footer\");\n\n    this.targetEl.innerHTML = \"\";\n    this.targetEl.appendChild(createHeader());\n    this.targetEl.appendChild(main);\n    this.targetEl.appendChild(createFooter());\n\n    function createHeader() {\n      const header = document.createElement(\"header\");\n\n      const container = document.createElement(\"div\");\n      container.classList.add(\"container\");\n\n      const h1 = document.createElement(\"h1\");\n      h1.textContent = \"Brazilian Restaurant\";\n\n      const nav = document.createElement(\"nav\");\n\n      const ul = document.createElement(\"ul\");\n      const li1 = document.createElement(\"li\");\n      li1.textContent = \"Home\";\n      li1.addEventListener(\"click\", () => {\n        self.activeTab = \"home\";\n        self.render();\n        li1.classList.add(\"active\");\n      });\n      const li2 = document.createElement(\"li\");\n      li2.textContent = \"Menu\";\n      li2.addEventListener(\"click\", () => {\n        self.activeTab = \"menu\";\n        self.render();\n        li2.classList.add(\"active\");\n      });\n      const li3 = document.createElement(\"li\");\n      li3.textContent = \"Contact\";\n      li3.addEventListener(\"click\", () => {\n        self.activeTab = \"contact\";\n        self.render();\n        li3.classList.add(\"active\");\n      });\n      ul.appendChild(li1);\n      ul.appendChild(li2);\n      ul.appendChild(li3);\n\n      nav.appendChild(ul);\n\n      container.appendChild(h1);\n      container.appendChild(nav);\n\n      header.appendChild(container);\n      return header;\n    }\n\n    function createFooter() {\n      const footer = document.createElement(\"footer\");\n\n      const container = document.createElement(\"div\");\n      container.classList.add(\"container\");\n      container.textContent = `© 2021 Brazilian Restaurant. All rights\n        reserved. Website Design by Luiz Alvino`;\n\n      footer.appendChild(container);\n      return footer;\n    }\n  }\n\n  render() {\n    if (!this.activeTab) {\n      this.page();\n      this.activeTab = \"home\";\n    }\n\n    const body = document.querySelector(\"body\");\n    body.classList.remove(\"main-image\");\n\n    const tabsLinks = document.querySelectorAll(\"header li\");\n    tabsLinks.forEach((link) => link.classList.remove(\"active\"));\n\n    this.tabRenderMap[this.activeTab].call(this);\n  }\n\n  home() {\n    const main = this.targetEl.querySelector(\"main\");\n    main.innerHTML = \"\";\n\n    const section = document.createElement(\"section\");\n    section.classList.add(\"home\");\n\n    const h2 = document.createElement(\"h2\");\n    h2.textContent = \"Explore our amazing brazilian food\";\n    const p = document.createElement(\"p\");\n    p.innerHTML = `\n      We prepare food to impress you.\n        <br />\n        We also have an awesome place where you\n        <br />\n        can eat and have a nice time.\n    `;\n\n    section.appendChild(h2);\n    section.appendChild(p);\n\n    main.appendChild(section);\n\n    document.querySelector(\"body\").classList.add(\"main-image\");\n  }\n\n  menu() {\n    const main = this.targetEl.querySelector(\"main\");\n    main.innerHTML = \"\";\n\n    const section = document.createElement(\"section\");\n    section.classList.add(\"menu\");\n\n    const h2 = document.createElement(\"h2\");\n    h2.textContent = \"Explore our amazing brazilian food\";\n\n    section.appendChild(h2);\n    section.appendChild(\n      createRow({\n        image: \"images/menu-1.png\",\n        title: \"Feijoada\",\n        description: `Feijoada is a stew of beans with beef and pork. The basic\n          ingredients of feijoada are beans with fresh or beef. In Brazil, it\n          is usually made with black beans (feijoada à brasileira). The stew\n          is best prepared over low heat in a thick clay pot.`,\n      })\n    );\n    section.appendChild(\n      createRow({\n        image: \"images/menu-2.png\",\n        title: \"Churrasco\",\n        description: `Churrasco is the Portuguese and Spanish name for beef or\n          grilled meat more generally. It is a prominent\n          feature in the cuisine of Brazil, Uruguay and Argentina.`,\n      })\n    );\n    section.appendChild(\n      createRow({\n        image: \"images/menu-3.png\",\n        title: \"Pão de queijo\",\n        description: `Pão de queijo or Brazilian cheese bread is a small, baked cheese\n          roll or cheese bun, a popular snack and\n          breakfast food in Brazil. It is a traditional Brazilian recipe,\n          originating in the state of Minas Gerais.`,\n      })\n    );\n    main.appendChild(section);\n\n    function createRow(props) {\n      const row = document.createElement(\"div\");\n      row.classList.add(\"row\");\n\n      const imgDiv = document.createElement(\"div\");\n      imgDiv.classList.add(\"img\");\n      const img = document.createElement(\"img\");\n      img.setAttribute(\"src\", props.image);\n      img.setAttribute(\"alt\", props.title);\n      imgDiv.appendChild(img);\n      row.appendChild(imgDiv);\n\n      const description = document.createElement(\"div\");\n      description.classList.add(\"description\");\n      const h3 = document.createElement(\"h3\");\n      h3.textContent = props.title;\n      const p = document.createElement(\"p\");\n      p.innerHTML = props.description;\n      description.appendChild(h3);\n      description.appendChild(p);\n\n      row.appendChild(description);\n\n      return row;\n    }\n  }\n\n  contact() {\n    const main = this.targetEl.querySelector(\"main\");\n    main.innerHTML = \"\";\n\n    const section = document.createElement(\"section\");\n    section.classList.add(\"contact\");\n\n    const h2 = document.createElement(\"h2\");\n    h2.textContent = \"Contact\";\n\n    const p = document.createElement(\"p\");\n    const ul = document.createElement(\"ul\");\n    const li1 = document.createElement(\"li\");\n    li1.textContent = \"Facebook\";\n    const li2 = document.createElement(\"li\");\n    li2.textContent = \"@brazilianrestaurant\";\n    const li3 = document.createElement(\"li\");\n    li3.textContent = \"Twitter\";\n    ul.appendChild(li1);\n    ul.appendChild(li2);\n    ul.appendChild(li3);\n    p.appendChild(ul);\n\n    section.appendChild(h2);\n    section.appendChild(p);\n\n    main.appendChild(section);\n  }\n}\n\nmodule.exports = DisplayController;\n\n\n//# sourceURL=webpack://restaurant-page/./src/displayController.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _displayController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayController */ \"./src/displayController.js\");\n/* harmony import */ var _displayController__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_displayController__WEBPACK_IMPORTED_MODULE_0__);\n\n\nnew (_displayController__WEBPACK_IMPORTED_MODULE_0___default())(document.querySelector(\"#content\")).render();\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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