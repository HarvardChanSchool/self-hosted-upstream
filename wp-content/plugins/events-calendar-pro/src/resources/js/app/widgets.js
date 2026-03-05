var tribe = typeof tribe === "object" ? tribe : {}; tribe["events-pro"] = tribe["events-pro"] || {}; tribe["events-pro"]["widgets"] =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "664k");
/******/ })
/************************************************************************/
/******/ ({

/***/ "3eHH":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "664k":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "React"
var external_React_ = __webpack_require__("cDcd");
var external_React_default = /*#__PURE__*/__webpack_require__.n(external_React_);

// CONCATENATED MODULE: ./src/modules/widgets/mini-calendar/template.js
/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */
const {
  InnerBlocks
} = wp.blockEditor;
const MINI_CALENDAR_TEMPLATE = [['core/legacy-widget', {
  idBase: 'tribe-widget-events-month',
  instance: {}
}]];
const MiniCalendar = () => wp.element.createElement("div", {
  className: "tribe-editor-mini-calendar-block"
}, wp.element.createElement(InnerBlocks, {
  template: MINI_CALENDAR_TEMPLATE,
  templateLock: "all"
}));
/* harmony default export */ var template = (MiniCalendar);
// CONCATENATED MODULE: ./src/modules/icons/arrow.svg
var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }
  return target;
};
function _objectWithoutProperties(obj, keys) {
  var target = {};
  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }
  return target;
}

/* harmony default export */ var arrow = (_ref => {
  let {
      styles = {}
    } = _ref,
    props = _objectWithoutProperties(_ref, ["styles"]);
  return /*#__PURE__*/external_React_default.a.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    width: "13",
    height: "7"
  }, props), /*#__PURE__*/external_React_default.a.createElement("defs", null, /*#__PURE__*/external_React_default.a.createElement("path", {
    id: "a",
    d: "M838 653.05l6.5 5.95 6.5-5.95-1.15-1.05-5.35 4.9-5.35-4.9"
  })), /*#__PURE__*/external_React_default.a.createElement("use", {
    fill: "#12181e",
    xlinkHref: "#a",
    transform: "translate(-838 -652)"
  }));
});
// CONCATENATED MODULE: ./src/modules/icons/trash.svg
var trash_extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }
  return target;
};
function trash_objectWithoutProperties(obj, keys) {
  var target = {};
  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }
  return target;
}

/* harmony default export */ var trash = (_ref => {
  let {
      styles = {}
    } = _ref,
    props = trash_objectWithoutProperties(_ref, ["styles"]);
  return /*#__PURE__*/external_React_default.a.createElement("svg", trash_extends({
    width: "11",
    height: "15",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/external_React_default.a.createElement("path", {
    d: "M3.93 1.58h3.14v.79H3.93v-.79zm4.71.79v-.8C8.64.71 7.94 0 7.07 0H3.93c-.87 0-1.57.7-1.57 1.58v.79H0v1.58h11V2.37H8.64zM1.48 13.52c.05.83.74 1.48 1.57 1.48h4.9c.84 0 1.53-.65 1.58-1.48l.55-8.78H.93l.55 8.78z",
    fill: "#8D949B"
  }));
});
// CONCATENATED MODULE: ./src/modules/icons/recurrence.svg
var recurrence_extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }
  return target;
};
function recurrence_objectWithoutProperties(obj, keys) {
  var target = {};
  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }
  return target;
}

/* harmony default export */ var recurrence = (_ref => {
  let {
      styles = {}
    } = _ref,
    props = recurrence_objectWithoutProperties(_ref, ["styles"]);
  return /*#__PURE__*/external_React_default.a.createElement("svg", recurrence_extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 12.66 16.52"
  }, props), /*#__PURE__*/external_React_default.a.createElement("path", {
    d: "M1.69 4.12h6.45L6.76 5.45 8 6.61l3.43-3.3L8 0 6.76 1.16l1.38 1.32H1.57A1.55 1.55 0 0 0 0 4v7.7a.44.44 0 0 0 .76.3l.94-.88zm10.77.34a.51.51 0 0 0-.67.15l-.79.82v7H4.46l1.38-1.33-1.2-1.19-3.43 3.3 3.43 3.3 1.2-1.16L4.46 14h6.62a1.55 1.55 0 0 0 1.57-1.52V4.89a.42.42 0 0 0-.19-.43z"
  }));
});
// CONCATENATED MODULE: ./src/modules/icons/related-events-placeholder.svg
var related_events_placeholder_extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }
  return target;
};
function related_events_placeholder_objectWithoutProperties(obj, keys) {
  var target = {};
  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }
  return target;
}

/* harmony default export */ var related_events_placeholder = (_ref => {
  let {
      styles = {}
    } = _ref,
    props = related_events_placeholder_objectWithoutProperties(_ref, ["styles"]);
  return /*#__PURE__*/external_React_default.a.createElement("svg", related_events_placeholder_extends({
    id: "Layer_1",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    viewBox: "0 0 600 600"
  }, props), /*#__PURE__*/external_React_default.a.createElement("image", {
    width: "600",
    height: "600",
    xlinkHref: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAlgAAAJYCAIAAAAxBA+LAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJ bWFnZVJlYWR5ccllPAAAA2hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdp bj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6 eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0 NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJo dHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlw dGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEu MC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVz b3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1N Ok9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo0NjU2NzVBQzEyMjA2ODExODIyQUQ2NkY1MzVE MzY2RSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFQ0E2MjNGQThBODkxMUUyQTM1OUU3MkM1 RjIxOUQyNSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFQ0E2MjNGOThBODkxMUUyQTM1OUU3 MkM1RjIxOUQyNSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRv c2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NDY1Njc1 QUMxMjIwNjgxMTgyMkFENjZGNTM1RDM2NkUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NDY1 Njc1QUMxMjIwNjgxMTgyMkFENjZGNTM1RDM2NkUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRm OlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4JkuExAAALZUlEQVR42uzdUW8S 2xqA4T1DB4gFNaVGJW2MiTHp//8xJMak9sK2Y6GRtjTQAWaveHVOthvYnnGfNcPzXDS9mJDVj1m8 A61jkuf5HwCwrxIhBEAIAUAIAUAIAUAIAUAIAUAIAUAIAUAIAUAIAUAIAUAIAUAIAUAIAUAIAUAI AUAIAUAIAUAIAUAIAUAIAUAIAUAIAUAIAUAIAUAIAUAIAUAIAUAIAUAIAUAIAUAIAUAIAUAIAUAI AUAIAUAIAUAIAUAIAUAIAUAIAUAIAUAIAUAIAUAIAUAIAUAIAUAIAUAIAUAIAUAIAUAIARBCIQRA CAFACAFACAFACAFACAFACAFACAFACAFACAFACAFACAFACAFACAFACAFACAFACAFACAFACAFACAFA CAFACAFACAFACAFACAFACAFACAFACAFACAFACAFACAFACAFACAFACAFACAFACAFACAFACAFACAFA CAFACAFACAFACAFACAFACAFACAFACAFACAFACAFACAFACAFACAEQQgAQQgAQQgAQQgAQQgAQQgAQ QgAQQgAQQgAQQgAQQgAQQgAQQgAQQgAQQgAQQgAQQgAQQgAQQgAQQgAQQgAQQgAQQgAQQgAQQgAQ QgAQQgAQQgAQQgAQQgAQQgAQQgAQQgAQQgAQQgAQQgAQQgAQQgAQQpqjLMvxeFzVo7169cpIq3Vz c1PVQx0fHydJYqTEIDUCAIQQAIQQAIQQAIQQAIQQAIQQAIQQAIQQAIQQAIQQAIQQAIQQAIQQAIQQ AIQQAIQQAIQQAIQQAIQQAIQQAIQQAIQQAIQQAIQQAIQQAIQQAIQQAIQQAIQQAIQQAIQQAIQQAIQQ AIQQAIQQACqV5HluCvujLMunp6eiKNbrdfg+utMxSRaLRVWP1m63PePVCidPVQ/V6XTiPAPTNM2y LJw84XvPuBDSKA8PD9+/f5/NZiGB0S4yvAC9ePGiquRPJhPPe7UGg0FVeZhOp+GCLNqfNOTw8PDw 5cuXvV7P8954B0bQePP5/OrqKnw1CthRuF68/6Hb7b59+zZ8NZMG8zvChru9vf3y5YsKwi9fR4Yd FPaRUXhHSC2Nx+ObmxtzgP9FWZZ5nof3iMfHx6bhHSF1Mp1OVRCqEnZT2FPmIITURlEU19fX5gAV Cnsq5j/wQQj5L9++fYv5r0OhjsKeCjvLHISQerwdvLu7MweoXNhZ3hQKIfXYq4YA9hdCuL9ms5kh gP2FEO6vCu9SBthfQkj9LJdLQwD7CyEEACEEACEEACEEACEEACEEACEEACEEQAiNAAAhBAAhBAAh BAAhhP+PsiwNwXMN/7IDIyAey+VyPB6bQ7Qmk4kh4B0hAAghAAghAAghAAghAAghAAghAAghAAgh AAghAAghAETMvUYbaDgcGgLAjpI8z00BACEEACEEACEEACEEACEEACEEACEEACEEACEEACEEACEk VkVRGAL8PlmWGUKTuOl2A33+/NkQ4Pc5OzszhCbx3zABIIQAIIQAIIQAIIQAIIQAIIQAIIQAIIQA IIQAIIQAIIQAIIQAIIQAIIQAIIQAIIQAIIQAIIQAIIQAIIQAIIQAIIQAIIQAEI8DI2CDd+/edTqd 2FZ1fX19d3e39bCPHz9GONKLi4vFYrH5mDDzMPkIF//p06etxzx//vzNmzexrTzMPEzejkYI+eef GKRpq9WKbVVJkuxyWIQr33Hx4Zg4F7/jDxjh4sOZbDvzt6eHEQAghAAghAAghAAghAAghAAghAAg hAAghAAghAAghAAghAAghAAghAAghAAghAAghAAghAAghAAghAAghAAghAAghAAghAAghAAghAAg hAAghAAghAAghAAghAAghAAghAAghAAghAAghAAghAAghAAghAAghAAghAAghAAghAAghAAghAAg hAAghAAghADwFwdGwAZXV1dpGt3V0tPT0y6HXVxcRDjSXRYfjolz8buYzWYRLn69XtvOCCG/Yj6f 13fxj4+PNV15eNWu7+KXP9g71IiPRgEQQgAQQgAQQgAQQgAQQgAQQgAQQgAQQgAQQgBoGrdYY+P5 cXCQJElsq1qtVrvcOjLLsghHulwuy7LcfEyYeZh8hIsvimL7xXWatlqt2FYeZu7Gbwghv+L09LTb 7ca2qsvLy+l0uvWwDx8+RDjS8/PzrXdw7XQ679+/j3Dxo9Fo6zH9fn84HMa28jDzMHk7mp9fvRkB AEIIAEIIAEIIAEIIAEIIAEIIAEIIAEIIAEIIAEIIAEIIAEIIAEIIAEIIAEIIAEIIAEIIAEIIAEII AEIIAEIIAEIIAEIIAEIIAEIIAEIIAEIIAEIIAEIIAEIIAEIIAEIIAEIIAEIIAEIIAEIIAEIIAEII AEIIAEIIAEIIAEIIAEIIAEIIAEIIAEIIAEIIAEIIAP8pyfPcFBpmNBpVdqGUxnipVP5Q08Wv1+v6 Tn6XxSc/1Hfyuzg7O/M60yQHRsC/89ph8Xuy+B0vUyAePhoFQAgBQAgBQAgBQAgBQAgBQAgBQAgB QAgBQAgBoGncYo1Nnj171mq1YlvVfD4vimLrYf1+P8KRzmazrbdPS9P08PAwwsXf399vPSbLsm63 G9vKV6vV4+OjHY0Q8o+9fv06whe1y8vL6XS69bCTk5MIR3p+fh5CvvmYdrsd5+J3uZ97uHgaDocR XjyFydvR/PzS0wgAEEIAEEIAEEIAEEIAEEIAEEIAEEIAEEIAEEIAEEIAEEIAEEIAEEIAEEIAEEIA EEIAEEIAEEIAEEIAEEIAEEIAEEIAEEIAEEIAEEIAEEIAEEIAEEIAEEIAEEIAEEIAEEIAEEIAEEIA EEIAEEIAEEIAEEIAEEIAEEIAEEIAEEIAEEIAEEIAEEIAEEIAEEIA+IsDI2CD5XJZFEVsq1qv17sc FuHKg7IsdzkmzsXv+OxEuPhwJtvO/J0kz3NTaJjRaGQI8PucnZ0ZQpP4aBQAIQQAIQQAIQQAIQQA IQQAIQQAIQQAIQQAIQQAIQQAIQQAISRSSZIYAthfCOH+yrLMEMD+Qgj3V7fbNQSwvxDC/dXr9QwB 7C+EcH/1+/1Wq2UOULmws8L+MgchJPonNU2Pjo7MASoXdlbYX+YghNTAYDBot9vmABUKeyrsLHMQ QuohSZKTkxOXrlDZa2Wahj3l304IIXXS6XROT0+1ECqpYNhNYU8ZRTPfOeR5bgoNtlgsvn79Gr4a Bfyadrsd3guqoBBSY2VZTiaT29vb1WplGrC7Vqt1dHQ0GAx8IiqENMF6vb6/v394eJjP50VRhDqa CfzkNTFJsizrdru9Xq/f7/vlghACgBACgBACgBACgBACgBACgBACgBACgBACgBACgBACgBACgBAC gBACgBACgBACgBACgBACgBACgBACgBACgBACgBACgBACgBACgBACgBACgBACgBACgBACgBACgBAC gBACgBACgBACgBACgBACgBACgBACgBACgBACgBACgBACgBACgBACgBACIIRCCIAQAoAQAoAQAoAQ AoAQAoAQAoAQAoAQAoAQAoAQAoAQAoAQAoAQAoAQAoAQAoAQAoAQAoAQAoAQAoAQAoAQAoAQAoAQ AoAQAoAQAoAQAoAQAoAQAoAQAoAQAoAQAoAQAoAQAoAQAoAQAoAQAoAQAoAQAoAQAoAQAoAQAoAQ AoAQAoAQAoAQAoAQAoAQAoAQAoAQAoAQAoAQAiCEpgCAEAKAEAKAEAKAEAKAEAKAEAKAEAKAEAKA EAKAEAKAEAKAEAKAEAKAEAKAEAKAEAKAEAKAEAKAEAKAEAKAEAKAEAKAEAKAEAKAEAKAEAKAEAKA EAKAEAKAEAKAEAKAEAKAEAKAEAKAEAKAEAKAEAKAEAKAEAKAEAKAEAKAEAKAEAKAEALARn8KMAB8 qgpVr8O+4QAAAABJRU5ErkJggg==",
    overflow: "visible"
  }), /*#__PURE__*/external_React_default.a.createElement("path", {
    className: styles["st0"] || "st0",
    d: "M445 218H157v-22c0-8.28 6.72-15 15-15h258c8.28 0 15 6.72 15 15v22z"
  }), /*#__PURE__*/external_React_default.a.createElement("path", {
    className: styles["st1"] || "st1",
    d: "M356 142h26v65h-26zM219 142h26v65h-26z"
  }), /*#__PURE__*/external_React_default.a.createElement("path", {
    className: styles["st0"] || "st0",
    d: "M157 231v210c0 8.28 6.72 15 15 15h258c8.28 0 15-6.72 15-15V231H157zm75 201.66h-51.21v-51.21H232v51.21zm0-63.56h-51.21v-51.2H232v51.2zm0-62.08h-51.21v-51.21H232v51.21zm62.21 125.64H243v-51.21h51.21v51.21zm0-62.56H243v-51.2h51.21v51.2zm0-63.12H243v-51.21h51.21v51.21zm63.23 125.68h-51.21v-51.21h51.21v51.21zm0-62.56h-51.21v-51.2h51.21v51.2zm0-63.12h-51.21v-51.21h51.21v51.21zm63.22 124.93h-51.21V380.7h51.21v51.21zm0-61.81h-51.21v-51.2h51.21v51.2zm0-63.12h-51.21v-51.21h51.21v51.21z"
  }));
});
// CONCATENATED MODULE: ./src/modules/icons/mini-calendar.svg
var mini_calendar_extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }
  return target;
};
function mini_calendar_objectWithoutProperties(obj, keys) {
  var target = {};
  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }
  return target;
}

/* harmony default export */ var mini_calendar = (_ref => {
  let {
      styles = {}
    } = _ref,
    props = mini_calendar_objectWithoutProperties(_ref, ["styles"]);
  return /*#__PURE__*/external_React_default.a.createElement("svg", mini_calendar_extends({
    width: "33",
    height: "26",
    viewBox: "0 0 33 26",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/external_React_default.a.createElement("g", {
    filter: "url(#a)"
  }, /*#__PURE__*/external_React_default.a.createElement("rect", {
    x: "4.32",
    y: "4.298",
    width: "24",
    height: "13.557",
    rx: "2",
    fill: "#499FD1"
  }), /*#__PURE__*/external_React_default.a.createElement("path", {
    stroke: "#fff",
    strokeWidth: "2",
    strokeLinecap: "round",
    d: "M8.511 13.193h.084M12.257 13.193h.085M16.004 13.193h.084M19.75 13.193h.085M23.497 13.193h.084"
  }), /*#__PURE__*/external_React_default.a.createElement("path", {
    stroke: "#499FD1",
    strokeWidth: "4",
    strokeLinecap: "round",
    d: "M10.844 2.464v2.203M21.043 2.464v2.203"
  }), /*#__PURE__*/external_React_default.a.createElement("path", {
    stroke: "#fff",
    strokeWidth: "2",
    strokeLinecap: "round",
    d: "M8.681 9.193h15.278"
  })), /*#__PURE__*/external_React_default.a.createElement("defs", null, /*#__PURE__*/external_React_default.a.createElement("filter", {
    id: "a",
    x: ".32",
    y: ".464",
    width: "32",
    height: "25.391",
    filterUnits: "userSpaceOnUse",
    colorInterpolationFilters: "sRGB"
  }, /*#__PURE__*/external_React_default.a.createElement("feFlood", {
    floodOpacity: "0",
    result: "BackgroundImageFix"
  }), /*#__PURE__*/external_React_default.a.createElement("feColorMatrix", {
    "in": "SourceAlpha",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
    result: "hardAlpha"
  }), /*#__PURE__*/external_React_default.a.createElement("feOffset", {
    dy: "4"
  }), /*#__PURE__*/external_React_default.a.createElement("feGaussianBlur", {
    stdDeviation: "2"
  }), /*#__PURE__*/external_React_default.a.createElement("feComposite", {
    in2: "hardAlpha",
    operator: "out"
  }), /*#__PURE__*/external_React_default.a.createElement("feColorMatrix", {
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
  }), /*#__PURE__*/external_React_default.a.createElement("feBlend", {
    in2: "BackgroundImageFix",
    result: "effect1_dropShadow_4079:11034"
  }), /*#__PURE__*/external_React_default.a.createElement("feBlend", {
    "in": "SourceGraphic",
    in2: "effect1_dropShadow_4079:11034",
    result: "shape"
  }))));
});
// CONCATENATED MODULE: ./src/modules/icons/events-countdown.svg
var events_countdown_extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }
  return target;
};
function events_countdown_objectWithoutProperties(obj, keys) {
  var target = {};
  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }
  return target;
}

/* harmony default export */ var events_countdown = (_ref => {
  let {
      styles = {}
    } = _ref,
    props = events_countdown_objectWithoutProperties(_ref, ["styles"]);
  return /*#__PURE__*/external_React_default.a.createElement("svg", events_countdown_extends({
    width: "24",
    height: "36",
    viewBox: "0 0 24 36",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/external_React_default.a.createElement("path", {
    d: "M10.424 15.685c.77-1.333 2.694-1.333 3.464 0l6.418 11.116c.77 1.333-.193 3-1.733 3H5.738c-1.54 0-2.501-1.667-1.732-3l6.418-11.116z",
    fill: "#499FD1"
  }), /*#__PURE__*/external_React_default.a.createElement("path", {
    d: "M13.888 20.473c-.77 1.333-2.694 1.333-3.464 0L4.006 9.357c-.77-1.333.193-3 1.732-3h12.835c1.54 0 2.502 1.667 1.732 3l-6.417 11.116z",
    fill: "#499FD1"
  }), /*#__PURE__*/external_React_default.a.createElement("path", {
    d: "M11.29 19.263a1 1 0 0 1 1.732 0l4.076 7.061a1 1 0 0 1-.866 1.5H8.08a1 1 0 0 1-.866-1.5l4.077-7.06z",
    fill: "#fff"
  }), /*#__PURE__*/external_React_default.a.createElement("path", {
    d: "M13.022 18.47a1 1 0 0 1-1.732 0l-1.423-2.463a1 1 0 0 1 .866-1.5h2.845a1 1 0 0 1 .866 1.5l-1.422 2.463z",
    fill: "#fff"
  }), /*#__PURE__*/external_React_default.a.createElement("path", {
    d: "M10.925 19.875c.563-.688.235-1.662 0-2.063h2.454c-.488.8-.204 1.709 0 2.063h-2.454z",
    fill: "#fff"
  }));
});
// CONCATENATED MODULE: ./src/modules/icons/events-featured-venue.svg
var events_featured_venue_extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }
  return target;
};
function events_featured_venue_objectWithoutProperties(obj, keys) {
  var target = {};
  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }
  return target;
}

/* harmony default export */ var events_featured_venue = (_ref => {
  let {
      styles = {}
    } = _ref,
    props = events_featured_venue_objectWithoutProperties(_ref, ["styles"]);
  return /*#__PURE__*/external_React_default.a.createElement("svg", events_featured_venue_extends({
    width: "20",
    height: "23",
    viewBox: "0 0 20 23",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/external_React_default.a.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M.446 2.328a2 2 0 0 1 2-2h15.2a2 2 0 0 1 2 2v18.32c0 1.586-1.757 2.54-3.088 1.678l-5.32-3.448a2 2 0 0 0-2.157-.012l-5.566 3.52c-1.331.843-3.069-.114-3.069-1.69V2.328z",
    fill: "#499FD1"
  }));
});
// CONCATENATED MODULE: ./src/modules/icons/virtual.svg
var virtual_extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }
  return target;
};
function virtual_objectWithoutProperties(obj, keys) {
  var target = {};
  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }
  return target;
}

/* harmony default export */ var virtual = (_ref => {
  let {
      styles = {}
    } = _ref,
    props = virtual_objectWithoutProperties(_ref, ["styles"]);
  return /*#__PURE__*/external_React_default.a.createElement("svg", virtual_extends({
    width: "16",
    height: "12",
    viewBox: "0 0 16 12",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/external_React_default.a.createElement("path", {
    d: "M13.775.181a.566.566 0 0 0-.831 0 .606.606 0 0 0 0 .855c2.446 2.516 2.446 6.613 0 9.129a.606.606 0 0 0 .423 1.032.562.562 0 0 0 .408-.177c2.9-2.984 2.9-7.855 0-10.839z",
    fill: "#0F0F30"
  }), /*#__PURE__*/external_React_default.a.createElement("path", {
    d: "M11.772 2.165a.567.567 0 0 0-.831 0 .606.606 0 0 0 0 .855 3.648 3.648 0 0 1 1.035 2.58 3.61 3.61 0 0 1-1.035 2.565.606.606 0 0 0 .423 1.032.562.562 0 0 0 .408-.177 4.77 4.77 0 0 0 1.38-3.42c0-1.29-.486-2.515-1.38-3.435zM3.007 1.036a.606.606 0 0 0 0-.855.567.567 0 0 0-.831 0c-2.901 2.984-2.901 7.855 0 10.838a.59.59 0 0 0 .407.178.626.626 0 0 0 .424-.177.606.606 0 0 0 0-.855C.56 7.649.56 3.552 3.007 1.036z",
    fill: "#0F0F30"
  }), /*#__PURE__*/external_React_default.a.createElement("path", {
    d: "M4.985 3.036a.606.606 0 0 0 0-.855.567.567 0 0 0-.83 0C2.32 4.068 2.32 7.133 4.17 9.036c.11.113.266.177.423.177a.562.562 0 0 0 .408-.177.606.606 0 0 0 0-.855c-1.38-1.42-1.396-3.726-.016-5.145z",
    fill: "#0F0F30"
  }), /*#__PURE__*/external_React_default.a.createElement("path", {
    d: "M7.982 7.134c.838 0 1.517-.691 1.517-1.544 0-.852-.68-1.543-1.517-1.543-.837 0-1.516.69-1.516 1.543s.679 1.544 1.516 1.544z",
    stroke: "#0F0F30",
    strokeWidth: "1.103"
  }));
});
// CONCATENATED MODULE: ./src/modules/icons/index.js








// CONCATENATED MODULE: ./src/modules/widgets/mini-calendar/index.js
/**
 * External dependencies
 */


/**
 * Internal dependencies
 */


const {
  __
} = wp.i18n;
const {
  InnerBlocks: mini_calendar_InnerBlocks
} = wp.blockEditor;

/**
 * Module Code
 */
/* harmony default export */ var widgets_mini_calendar = ({
  id: 'mini-calendar',
  title: __('Mini Calendar', 'tribe-events-calendar-pro'),
  description: __('Displays this month’s events.', 'tribe-events-calendar-pro'),
  icon: wp.element.createElement(mini_calendar, null),
  category: 'tribe-events',
  keywords: ['event', 'events-gutenberg', 'tribe'],
  example: {},
  edit: template,
  save() {
    return wp.element.createElement("div", {
      className: "tribe-mini-calendar-block"
    }, wp.element.createElement(mini_calendar_InnerBlocks.Content, null));
  }
});
// CONCATENATED MODULE: ./src/modules/widgets/events-countdown/template.js
/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */
const {
  InnerBlocks: template_InnerBlocks
} = wp.blockEditor;
const EVENTS_COUNTDOWN_TEMPLATE = [['core/legacy-widget', {
  idBase: 'tribe-widget-event-countdown',
  instance: {}
}]];
const EventsCountdown = () => wp.element.createElement("div", {
  className: "tribe-editor-events-countdown-block"
}, wp.element.createElement(template_InnerBlocks, {
  template: EVENTS_COUNTDOWN_TEMPLATE,
  templateLock: "all"
}));
/* harmony default export */ var events_countdown_template = (EventsCountdown);
// EXTERNAL MODULE: ./src/modules/widgets/events-countdown/style.pcss
var style = __webpack_require__("3eHH");

// CONCATENATED MODULE: ./src/modules/widgets/events-countdown/index.js
/**
 * External dependencies
 */


/**
 * Internal dependencies
 */



const {
  __: events_countdown_
} = wp.i18n;
const {
  InnerBlocks: events_countdown_InnerBlocks
} = wp.blockEditor;

/**
 * Module Code
 */
/* harmony default export */ var widgets_events_countdown = ({
  id: 'events-countdown',
  title: events_countdown_('Events Countdown', 'tribe-events-calendar-pro'),
  description: events_countdown_('Displays the time remaining until a specified event.', 'tribe-events-calendar-pro'),
  icon: wp.element.createElement(events_countdown, null),
  category: 'tribe-events',
  keywords: ['event', 'events-gutenberg', 'tribe'],
  example: {},
  edit: events_countdown_template,
  save() {
    return wp.element.createElement("div", {
      className: "tribe-events-countdown-block"
    }, wp.element.createElement(events_countdown_InnerBlocks.Content, null));
  }
});
// CONCATENATED MODULE: ./src/modules/widgets/events-featured-venue/template.js
/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */
const {
  InnerBlocks: events_featured_venue_template_InnerBlocks
} = wp.blockEditor;
const EVENTS_FEATURED_VENUE_TEMPLATE = [['core/legacy-widget', {
  idBase: 'tribe-widget-featured-venue',
  instance: {}
}]];
const EventsFeaturedVenue = () => wp.element.createElement("div", {
  className: "tribe-editor-events-featured-venue"
}, wp.element.createElement(events_featured_venue_template_InnerBlocks, {
  template: EVENTS_FEATURED_VENUE_TEMPLATE,
  templateLock: "all"
}));
/* harmony default export */ var events_featured_venue_template = (EventsFeaturedVenue);
// CONCATENATED MODULE: ./src/modules/widgets/events-featured-venue/index.js
/**
 * External dependencies
 */


/**
 * Internal dependencies
 */


const {
  __: events_featured_venue_
} = wp.i18n;
const {
  InnerBlocks: events_featured_venue_InnerBlocks
} = wp.blockEditor;

/**
 * Module Code
 */
/* harmony default export */ var widgets_events_featured_venue = ({
  id: 'events-featured-venue',
  title: events_featured_venue_('Events Featured Venue', 'tribe-events-calendar-pro'),
  description: events_featured_venue_('Displays a list of upcoming events at a specific venue.', 'tribe-events-calendar-pro'),
  icon: wp.element.createElement(events_featured_venue, null),
  category: 'tribe-events',
  keywords: ['event', 'events-gutenberg', 'tribe'],
  example: {},
  edit: events_featured_venue_template,
  save() {
    return wp.element.createElement("div", {
      className: "tribe-events-featured-venue-block"
    }, wp.element.createElement(events_featured_venue_InnerBlocks.Content, null));
  }
});
// EXTERNAL MODULE: ./src/modules/widgets/style.pcss
var widgets_style = __webpack_require__("o8Pa");

// CONCATENATED MODULE: ./src/modules/widgets/index.js
/**
 * Internal Dependencies
 */




const {
  registerBlockType
} = wp.blocks;
const blocks = [widgets_mini_calendar, widgets_events_countdown, widgets_events_featured_venue];
blocks.forEach(block => {
  const blockName = `tribe/${block.id}`;
  registerBlockType(blockName, block);
});
/* harmony default export */ var widgets = __webpack_exports__["default"] = (blocks);

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = React;

/***/ }),

/***/ "o8Pa":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });