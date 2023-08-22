/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
  margin: 0;
  padding: 0;
}

.body-wrapper {
  background-color: rgba(168, 12, 155, 0.711);
}

.list-container {
  text-transform: capitalize;
  color: #fff;
  font-size: 1rem;
  width: 100%;
  list-style: none;
}

/* .check-box {
  margin-right: 1em;
} */

.text-box {
  background-color: rgb(153, 51, 129);
  color: #fff;
  flex: 1;
  margin: 0 10px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-style: italic;
  margin-bottom: 0.7em;
  box-shadow: #48064bc2 0 0 0 1px inset;
  width: 80%;
  align-self: center;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  border-bottom: 1px solid rgb(103, 103, 103);
  padding-top: 5%;
  padding-bottom: 5%;
}

#new-item {
  background-color: rgb(153, 51, 150);
  color: #fff;
  border: none;
  font-style: italic;
  margin-bottom: 0.7em;
  width: 100%;
}

::placeholder {
  color: #fff;
}

.heading {
  font-size: 1em;
  margin-bottom: 5%;
}

.clear p {
  text-align: center;
  color: rgb(165, 193, 189);
  padding-top: 5%;
  padding-bottom: 5%;
}

.clear p:hover {
  text-decoration: underline;
  color: #fff;
  cursor: pointer;
}

i {
  cursor: pointer;
  float: right;
  color: rgb(255, 253, 253);
}

/* Style for completed tasks */
.checkbox:checked ~ .text-box {
  text-decoration: line-through;
  color: #92fb9c;
}

.fa-arrow-turn-down {
  transform: rotate(90deg);
  opacity: 70%;
}

.fa-arrows-rotate {
  margin-top: 1em;
  margin-left: 5px;
  opacity: 70%;
}

.fa-trash-can,
.fa-pe-to-square,
.fa-floppy-disk {
  opacity: 70%;
}

.fa-arrow-turn-down:hover,
.fa-arrows-rotate:hover,
.fa-trash-can:hover,
.fa-pen-to-square:hover,
.fa-floppy-disk:hover {
  opacity: 100%;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,2CAA2C;AAC7C;;AAEA;EACE,0BAA0B;EAC1B,WAAW;EACX,eAAe;EACf,WAAW;EACX,gBAAgB;AAClB;;AAEA;;GAEG;;AAEH;EACE,mCAAmC;EACnC,WAAW;EACX,OAAO;EACP,cAAc;EACd,YAAY;EACZ,sBAAsB;EACtB,kBAAkB;EAClB,kBAAkB;EAClB,oBAAoB;EACpB,qCAAqC;EACrC,UAAU;EACV,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;EAChB,UAAU;AACZ;;AAEA;EACE,2CAA2C;EAC3C,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,mCAAmC;EACnC,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,oBAAoB;EACpB,WAAW;AACb;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,cAAc;EACd,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;EAClB,yBAAyB;EACzB,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,0BAA0B;EAC1B,WAAW;EACX,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,yBAAyB;AAC3B;;AAEA,8BAA8B;AAC9B;EACE,6BAA6B;EAC7B,cAAc;AAChB;;AAEA;EACE,wBAAwB;EACxB,YAAY;AACd;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,YAAY;AACd;;AAEA;;;EAGE,YAAY;AACd;;AAEA;;;;;EAKE,aAAa;AACf","sourcesContent":["body {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.body-wrapper {\r\n  background-color: rgba(168, 12, 155, 0.711);\r\n}\r\n\r\n.list-container {\r\n  text-transform: capitalize;\r\n  color: #fff;\r\n  font-size: 1rem;\r\n  width: 100%;\r\n  list-style: none;\r\n}\r\n\r\n/* .check-box {\r\n  margin-right: 1em;\r\n} */\r\n\r\n.text-box {\r\n  background-color: rgb(153, 51, 129);\r\n  color: #fff;\r\n  flex: 1;\r\n  margin: 0 10px;\r\n  padding: 5px;\r\n  border: 1px solid #ccc;\r\n  border-radius: 5px;\r\n  font-style: italic;\r\n  margin-bottom: 0.7em;\r\n  box-shadow: #48064bc2 0 0 0 1px inset;\r\n  width: 80%;\r\n  align-self: center;\r\n}\r\n\r\nul {\r\n  list-style: none;\r\n  padding: 0;\r\n}\r\n\r\nli {\r\n  border-bottom: 1px solid rgb(103, 103, 103);\r\n  padding-top: 5%;\r\n  padding-bottom: 5%;\r\n}\r\n\r\n#new-item {\r\n  background-color: rgb(153, 51, 150);\r\n  color: #fff;\r\n  border: none;\r\n  font-style: italic;\r\n  margin-bottom: 0.7em;\r\n  width: 100%;\r\n}\r\n\r\n::placeholder {\r\n  color: #fff;\r\n}\r\n\r\n.heading {\r\n  font-size: 1em;\r\n  margin-bottom: 5%;\r\n}\r\n\r\n.clear p {\r\n  text-align: center;\r\n  color: rgb(165, 193, 189);\r\n  padding-top: 5%;\r\n  padding-bottom: 5%;\r\n}\r\n\r\n.clear p:hover {\r\n  text-decoration: underline;\r\n  color: #fff;\r\n  cursor: pointer;\r\n}\r\n\r\ni {\r\n  cursor: pointer;\r\n  float: right;\r\n  color: rgb(255, 253, 253);\r\n}\r\n\r\n/* Style for completed tasks */\r\n.checkbox:checked ~ .text-box {\r\n  text-decoration: line-through;\r\n  color: #92fb9c;\r\n}\r\n\r\n.fa-arrow-turn-down {\r\n  transform: rotate(90deg);\r\n  opacity: 70%;\r\n}\r\n\r\n.fa-arrows-rotate {\r\n  margin-top: 1em;\r\n  margin-left: 5px;\r\n  opacity: 70%;\r\n}\r\n\r\n.fa-trash-can,\r\n.fa-pe-to-square,\r\n.fa-floppy-disk {\r\n  opacity: 70%;\r\n}\r\n\r\n.fa-arrow-turn-down:hover,\r\n.fa-arrows-rotate:hover,\r\n.fa-trash-can:hover,\r\n.fa-pen-to-square:hover,\r\n.fa-floppy-disk:hover {\r\n  opacity: 100%;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/add-remove.js":
/*!***************************!*\
  !*** ./src/add-remove.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addToArr: () => (/* binding */ addToArr),
/* harmony export */   appendList: () => (/* binding */ appendList),
/* harmony export */   removeFromArr: () => (/* binding */ removeFromArr),
/* harmony export */   reorder: () => (/* binding */ reorder),
/* harmony export */   saveToLocal: () => (/* binding */ saveToLocal),
/* harmony export */   updateArr: () => (/* binding */ updateArr)
/* harmony export */ });
const saveToLocal = (arr) => {
  localStorage.setItem('myList', JSON.stringify(arr));
};

const reorder = (arr) => {
  for (let i = 0; i < arr.length; i += 1) {
    arr[i].index = i + 1;
  }
  saveToLocal(arr);
};

const addToArr = (val, arr) => {
  arr.push({
    description: val,
    completed: false,
    index: arr.length + 1,
  });
  reorder(arr);
};

const appendList = (i, arr) => {
  const ul = document.querySelector('.list-container');

  const li = document.createElement('li');
  li.className = 'todo-li-elements';
  const check = document.createElement('input');
  const txt = document.createElement('input');
  txt.type = 'text';
  txt.className = 'text-box';
  txt.readOnly = true;
  const del = document.createElement('i');
  const edt = document.createElement('i');
  const sav = document.createElement('i');
  check.type = 'checkbox';
  check.className = 'checkbox';
  del.className = 'fa-solid fa-trash-can fa-xs';
  edt.className = 'fa-regular fa-pen-to-square fa-xs';
  sav.className = 'fa-regular fa-floppy-disk fa-xs';
  sav.style.display = 'none';
  ul.append(li);
  li.append(check, txt, del, edt, sav);
  txt.value += arr[i - 1].description;
};

const removeFromArr = (index, arr) => {
  arr.splice(index - 1, 1);
  // reorder(arr);
};

const updateArr = (index, newVal, arr) => {
  arr[index - 1].description = newVal;
  // saveToLocal(arr);
  localStorage.setItem('myList', JSON.stringify(arr));
};

/***/ }),

/***/ "./src/update.js":
/*!***********************!*\
  !*** ./src/update.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clearCompleted: () => (/* binding */ clearCompleted),
/* harmony export */   updateArr: () => (/* binding */ updateArr),
/* harmony export */   updateCompleted: () => (/* binding */ updateCompleted)
/* harmony export */ });
/* harmony import */ var _add_remove_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-remove.js */ "./src/add-remove.js");


const updateCompleted = (index, arr, status) => {
  arr[index - 1].completed = status;
  (0,_add_remove_js__WEBPACK_IMPORTED_MODULE_0__.saveToLocal)(arr);
};

const updateArr = (index, newVal, arr) => {
  arr[index - 1].description = newVal;
  (0,_add_remove_js__WEBPACK_IMPORTED_MODULE_0__.saveToLocal)(arr);
};

const clearCompleted = (arr) => {
  arr = arr.filter((tasksArr) => !tasksArr.completed);
  (0,_add_remove_js__WEBPACK_IMPORTED_MODULE_0__.reorder)(arr);
  return arr;
};

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _add_remove_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-remove.js */ "./src/add-remove.js");
/* harmony import */ var _update_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./update.js */ "./src/update.js");




let tasksArr = [];
if (localStorage.getItem('myList') === 'undefined') {
  localStorage.clear();
}
if (localStorage.getItem('myList')) {
  tasksArr = JSON.parse(localStorage.getItem('myList'));
}

let del = document.createElement('i');
let edt = document.createElement('i');
let sav = document.createElement('i');

const ul = document.querySelector('.list-container');

const generateList = () => {
  if (localStorage.getItem('myList')) {
    tasksArr = JSON.parse(localStorage.getItem('myList'));
  }
  ul.innerHTML = '';
  if (tasksArr) {
    for (let i = 0; i < tasksArr.length; i += 1) {
      const li = document.createElement('li');
      li.className = 'todo-li-elements';
      const check = document.createElement('input');
      const txt = document.createElement('input');
      txt.type = 'text';
      txt.className = 'text-box';
      txt.readOnly = true;
      del = document.createElement('i');
      edt = document.createElement('i');
      sav = document.createElement('i');
      check.type = 'checkbox';
      check.className = 'checkbox';
      del.className = 'fa-solid fa-trash-can fa-xs';
      edt.className = 'fa-regular fa-pen-to-square fa-xs';
      sav.className = 'fa-regular fa-floppy-disk fa-xs';
      sav.style.display = 'none';
      ul.append(li);
      li.append(check, txt, del, edt, sav);
      txt.value += tasksArr[i].description;
      check.checked = tasksArr[i].completed;
    }
  }
};

window.addEventListener('load', () => {
  if (!ul.innerText) {
    generateList();
  }
});

const input = document.getElementById('new-item');
input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter' && input.value) {
    (0,_add_remove_js__WEBPACK_IMPORTED_MODULE_1__.addToArr)(input.value, tasksArr);
    input.value = '';
    (0,_add_remove_js__WEBPACK_IMPORTED_MODULE_1__.appendList)(tasksArr.length, tasksArr);
  }
});

const enterIcon = document.querySelector('.fa-arrow-turn-down');
enterIcon.addEventListener('click', () => {
  if (input.value) {
    (0,_add_remove_js__WEBPACK_IMPORTED_MODULE_1__.addToArr)(input.value, tasksArr);
    input.value = '';
    (0,_add_remove_js__WEBPACK_IMPORTED_MODULE_1__.appendList)(tasksArr.length, tasksArr);
  }
});

const refreshIcon = document.querySelector('.fa-arrows-rotate');
if (refreshIcon) {
  refreshIcon.addEventListener('click', () => {
    generateList();
  });
}

const saveFunc = (e) => {
  const editTextBox = e.target.previousElementSibling.previousElementSibling
    .previousElementSibling;
  let elementID;
  if (editTextBox.value) {
    e.target.style.display = 'none';
    e.target.previousElementSibling.style.display = 'block';
    const delElementDOM = document.getElementsByClassName('todo-li-elements');
    const delElementArr = e.target.parentNode;
    for (let j = 0; j < delElementDOM.length; j += 1) {
      if (delElementDOM[j] === delElementArr) {
        elementID = j + 1;
      }
    }
    (0,_update_js__WEBPACK_IMPORTED_MODULE_2__.updateArr)(elementID, editTextBox.value, tasksArr);
    editTextBox.readOnly = true;
  }
};

document.addEventListener('click', (e) => {
  if (e.target.className === 'fa-solid fa-trash-can fa-xs') {
    const delElementDOM = document.getElementsByClassName('todo-li-elements');
    const delElementArr = e.target.parentNode;
    let elementID;
    for (let j = 0; j < delElementDOM.length; j += 1) {
      if (delElementDOM[j] === delElementArr) {
        elementID = j + 1;
      }
    }
    e.target.parentNode.remove();
    (0,_add_remove_js__WEBPACK_IMPORTED_MODULE_1__.removeFromArr)(elementID, tasksArr);
    (0,_add_remove_js__WEBPACK_IMPORTED_MODULE_1__.reorder)(tasksArr);
  }

  // Edit
  if (e.target.className === 'fa-regular fa-pen-to-square fa-xs') {
    e.target.nextElementSibling.style.display = 'block';
    e.target.style.display = 'none';
    const editTextBox = e.target.previousElementSibling.previousElementSibling;
    editTextBox.readOnly = false;
    editTextBox.focus();
  }

  // Save edited
  if (e.target.className === 'fa-regular fa-floppy-disk fa-xs') {
    saveFunc(e);
  }
});

// Clear completed
const clearList = document.querySelector('.clear');
clearList.addEventListener('click', () => {
  (0,_update_js__WEBPACK_IMPORTED_MODULE_2__.clearCompleted)(tasksArr);
  generateList();
});

// check box
document.addEventListener('change', (e) => {
  if (e.target.className === 'checkbox') {
    const edtElementDOM = document.getElementsByClassName('todo-li-elements');
    const edtElementArr = e.target.parentNode;
    let elementID;
    for (let j = 0; j < edtElementDOM.length; j += 1) {
      if (edtElementDOM[j] === edtElementArr) {
        elementID = j + 1;
      }
    }
    const status = e.target.checked;
    (0,_update_js__WEBPACK_IMPORTED_MODULE_2__.updateCompleted)(elementID, tasksArr, status);
  }
});
})();

/******/ })()
;
//# sourceMappingURL=main.js.map