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

/***/ "./src/js/install.js":
/*!***************************!*\
  !*** ./src/js/install.js ***!
  \***************************/
/***/ (() => {

eval("var butInstall = document.getElementById('buttonInstall');\nvar textHeader = document.getElementById('textHeader');\n\n// Logic for installing the PWA\n// TODO: Add an event handler to the `beforeinstallprompt` event\nwindow.addEventListener('beforeinstallprompt', function (event) {});\nevent.preventDefault();\n// TODO: Implement a click event handler on the `butInstall` element\nbutInstall.addEventListener('click', function () {\n  event.prompt();\n  installBtn.setAttribute('disabled', true);\n  installBtn.textContent = 'Installed!';\n});\n\n// TODO: Add an handler for the `appinstalled` event\nwindow.addEventListener('appinstalled', function (event) {\n  textHeader.textContent = 'Successfully installed!';\n  console.log('👍', 'appinstalled', event);\n});\n\n//# sourceURL=webpack://JATE/./src/js/install.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/install.js"]();
/******/ 	
/******/ })()
;