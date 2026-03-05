var tribe = typeof tribe === "object" ? tribe : {}; tribe["events-pro"] =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["YhH6",1]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "+rk7":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "08tH":
/***/ (function(module, exports) {



/***/ }),

/***/ "0d9/":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "1ZqX":
/***/ (function(module, exports) {

module.exports = wp.data;

/***/ }),

/***/ "1bJb":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "1fKG":
/***/ (function(module, exports) {

module.exports = tribe.modules.reduxSaga;

/***/ }),

/***/ "2TDg":
/***/ (function(module, exports) {

module.exports = lodash.omit;

/***/ }),

/***/ "3lI2":
/***/ (function(module, exports) {

module.exports = tribe.common.utils.string;

/***/ }),

/***/ "6OzC":
/***/ (function(module, exports) {

module.exports = lodash.find;

/***/ }),

/***/ "6Ugf":
/***/ (function(module, exports) {

module.exports = tribe.common.elements;

/***/ }),

/***/ "7cHz":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "9lL/":
/***/ (function(module, exports) {

module.exports = tribe.common.data.plugins;

/***/ }),

/***/ "B8vQ":
/***/ (function(module, exports) {

module.exports = tribe.common.utils;

/***/ }),

/***/ "BWfU":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "Cn54":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "Etll":
/***/ (function(module, exports) {

module.exports = lodash.includes;

/***/ }),

/***/ "GE2E":
/***/ (function(module, exports) {

module.exports = tribe.common.icons;

/***/ }),

/***/ "HAtF":
/***/ (function(module, exports) {

module.exports = lodash.keys;

/***/ }),

/***/ "HSyU":
/***/ (function(module, exports) {

module.exports = wp.blocks;

/***/ }),

/***/ "In0u":
/***/ (function(module, exports) {

module.exports = lodash.noop;

/***/ }),

/***/ "ItXU":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "JDLU":
/***/ (function(module, exports) {

module.exports = lodash.invert;

/***/ }),

/***/ "K2gz":
/***/ (function(module, exports) {

module.exports = tribe.modules.classnames;

/***/ }),

/***/ "MWqi":
/***/ (function(module, exports) {

module.exports = tribe.modules.reselect;

/***/ }),

/***/ "NK/P":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "OM1g":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "OnHV":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "Q9xL":
/***/ (function(module, exports) {

module.exports = tribe.common.hoc;

/***/ }),

/***/ "RmXt":
/***/ (function(module, exports) {

module.exports = tribe.modules.reduxSaga.effects;

/***/ }),

/***/ "SE6A":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "Ti3b":
/***/ (function(module, exports) {

module.exports = lodash.uniq;

/***/ }),

/***/ "Tr2V":
/***/ (function(module, exports) {



/***/ }),

/***/ "UHF2":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "XNR4":
/***/ (function(module, exports) {

module.exports = lodash.some;

/***/ }),

/***/ "YREk":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "YhH6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "blocks", function() { return /* reexport */ modules_blocks_namespaceObject; });
__webpack_require__.d(__webpack_exports__, "data", function() { return /* reexport */ data_namespaceObject; });
__webpack_require__.d(__webpack_exports__, "elements", function() { return /* reexport */ modules_elements_namespaceObject; });
__webpack_require__.d(__webpack_exports__, "icons", function() { return /* reexport */ icons_namespaceObject; });

// NAMESPACE OBJECT: ./src/modules/data/blocks/recurring/types.js
var types_namespaceObject = {};
__webpack_require__.r(types_namespaceObject);
__webpack_require__.d(types_namespaceObject, "ADD_RULE_FIELD", function() { return ADD_RULE_FIELD; });
__webpack_require__.d(types_namespaceObject, "ADD_RULE", function() { return ADD_RULE; });
__webpack_require__.d(types_namespaceObject, "REMOVE_RULE_FIELD", function() { return REMOVE_RULE_FIELD; });
__webpack_require__.d(types_namespaceObject, "REMOVE_RULE", function() { return REMOVE_RULE; });
__webpack_require__.d(types_namespaceObject, "EDIT_RULE", function() { return EDIT_RULE; });
__webpack_require__.d(types_namespaceObject, "SYNC_RULES_FROM_DB", function() { return SYNC_RULES_FROM_DB; });

// NAMESPACE OBJECT: ./src/modules/data/blocks/recurring/actions.js
var actions_namespaceObject = {};
__webpack_require__.r(actions_namespaceObject);
__webpack_require__.d(actions_namespaceObject, "addField", function() { return actions_addField; });
__webpack_require__.d(actions_namespaceObject, "addRule", function() { return addRule; });
__webpack_require__.d(actions_namespaceObject, "removeField", function() { return removeField; });
__webpack_require__.d(actions_namespaceObject, "removeRule", function() { return actions_removeRule; });
__webpack_require__.d(actions_namespaceObject, "editRule", function() { return editRule; });
__webpack_require__.d(actions_namespaceObject, "syncRule", function() { return syncRule; });
__webpack_require__.d(actions_namespaceObject, "syncRulesFromDB", function() { return syncRulesFromDB; });

// NAMESPACE OBJECT: ./src/modules/data/blocks/recurring/constants.js
var constants_namespaceObject = {};
__webpack_require__.r(constants_namespaceObject);
__webpack_require__.d(constants_namespaceObject, "DAILY", function() { return DAILY; });
__webpack_require__.d(constants_namespaceObject, "WEEKLY", function() { return WEEKLY; });
__webpack_require__.d(constants_namespaceObject, "MONTHLY", function() { return MONTHLY; });
__webpack_require__.d(constants_namespaceObject, "YEARLY", function() { return YEARLY; });
__webpack_require__.d(constants_namespaceObject, "SINGLE", function() { return SINGLE; });
__webpack_require__.d(constants_namespaceObject, "DAILY_LABEL", function() { return DAILY_LABEL; });
__webpack_require__.d(constants_namespaceObject, "WEEKLY_LABEL", function() { return WEEKLY_LABEL; });
__webpack_require__.d(constants_namespaceObject, "MONTHLY_LABEL", function() { return MONTHLY_LABEL; });
__webpack_require__.d(constants_namespaceObject, "YEARLY_LABEL", function() { return YEARLY_LABEL; });
__webpack_require__.d(constants_namespaceObject, "DAILY_LABEL_PLURAL", function() { return DAILY_LABEL_PLURAL; });
__webpack_require__.d(constants_namespaceObject, "WEEKLY_LABEL_PLURAL", function() { return WEEKLY_LABEL_PLURAL; });
__webpack_require__.d(constants_namespaceObject, "MONTHLY_LABEL_PLURAL", function() { return MONTHLY_LABEL_PLURAL; });
__webpack_require__.d(constants_namespaceObject, "YEARLY_LABEL_PLURAL", function() { return YEARLY_LABEL_PLURAL; });
__webpack_require__.d(constants_namespaceObject, "SINGLE_LABEL", function() { return SINGLE_LABEL; });
__webpack_require__.d(constants_namespaceObject, "RECURRENCE_TYPES", function() { return RECURRENCE_TYPES; });
__webpack_require__.d(constants_namespaceObject, "ON", function() { return ON; });
__webpack_require__.d(constants_namespaceObject, "AFTER", function() { return AFTER; });
__webpack_require__.d(constants_namespaceObject, "NEVER", function() { return NEVER; });
__webpack_require__.d(constants_namespaceObject, "ON_LABEL", function() { return ON_LABEL; });
__webpack_require__.d(constants_namespaceObject, "AFTER_LABEL", function() { return AFTER_LABEL; });
__webpack_require__.d(constants_namespaceObject, "NEVER_LABEL", function() { return NEVER_LABEL; });
__webpack_require__.d(constants_namespaceObject, "DATE", function() { return DATE; });
__webpack_require__.d(constants_namespaceObject, "COUNT", function() { return COUNT; });
__webpack_require__.d(constants_namespaceObject, "DAYS_OF_THE_MONTH", function() { return DAYS_OF_THE_MONTH; });
__webpack_require__.d(constants_namespaceObject, "DAY", function() { return DAY; });
__webpack_require__.d(constants_namespaceObject, "DAY_LABEL", function() { return DAY_LABEL; });
__webpack_require__.d(constants_namespaceObject, "SUNDAY", function() { return SUNDAY; });
__webpack_require__.d(constants_namespaceObject, "MONDAY", function() { return MONDAY; });
__webpack_require__.d(constants_namespaceObject, "TUESDAY", function() { return TUESDAY; });
__webpack_require__.d(constants_namespaceObject, "WEDNESDAY", function() { return WEDNESDAY; });
__webpack_require__.d(constants_namespaceObject, "THURSDAY", function() { return THURSDAY; });
__webpack_require__.d(constants_namespaceObject, "FRIDAY", function() { return FRIDAY; });
__webpack_require__.d(constants_namespaceObject, "SATURDAY", function() { return SATURDAY; });
__webpack_require__.d(constants_namespaceObject, "SUNDAY_LABEL", function() { return SUNDAY_LABEL; });
__webpack_require__.d(constants_namespaceObject, "MONDAY_LABEL", function() { return MONDAY_LABEL; });
__webpack_require__.d(constants_namespaceObject, "TUESDAY_LABEL", function() { return TUESDAY_LABEL; });
__webpack_require__.d(constants_namespaceObject, "WEDNESDAY_LABEL", function() { return WEDNESDAY_LABEL; });
__webpack_require__.d(constants_namespaceObject, "THURSDAY_LABEL", function() { return THURSDAY_LABEL; });
__webpack_require__.d(constants_namespaceObject, "FRIDAY_LABEL", function() { return FRIDAY_LABEL; });
__webpack_require__.d(constants_namespaceObject, "SATURDAY_LABEL", function() { return SATURDAY_LABEL; });
__webpack_require__.d(constants_namespaceObject, "SUNDAY_ABBR", function() { return SUNDAY_ABBR; });
__webpack_require__.d(constants_namespaceObject, "MONDAY_ABBR", function() { return MONDAY_ABBR; });
__webpack_require__.d(constants_namespaceObject, "TUESDAY_ABBR", function() { return TUESDAY_ABBR; });
__webpack_require__.d(constants_namespaceObject, "WEDNESDAY_ABBR", function() { return WEDNESDAY_ABBR; });
__webpack_require__.d(constants_namespaceObject, "THURSDAY_ABBR", function() { return THURSDAY_ABBR; });
__webpack_require__.d(constants_namespaceObject, "FRIDAY_ABBR", function() { return FRIDAY_ABBR; });
__webpack_require__.d(constants_namespaceObject, "SATURDAY_ABBR", function() { return SATURDAY_ABBR; });
__webpack_require__.d(constants_namespaceObject, "SUNDAY_CHECKED", function() { return SUNDAY_CHECKED; });
__webpack_require__.d(constants_namespaceObject, "MONDAY_CHECKED", function() { return MONDAY_CHECKED; });
__webpack_require__.d(constants_namespaceObject, "TUESDAY_CHECKED", function() { return TUESDAY_CHECKED; });
__webpack_require__.d(constants_namespaceObject, "WEDNESDAY_CHECKED", function() { return WEDNESDAY_CHECKED; });
__webpack_require__.d(constants_namespaceObject, "THURSDAY_CHECKED", function() { return THURSDAY_CHECKED; });
__webpack_require__.d(constants_namespaceObject, "FRIDAY_CHECKED", function() { return FRIDAY_CHECKED; });
__webpack_require__.d(constants_namespaceObject, "SATURDAY_CHECKED", function() { return SATURDAY_CHECKED; });
__webpack_require__.d(constants_namespaceObject, "DAYS_OF_THE_WEEK_PROP_KEYS", function() { return DAYS_OF_THE_WEEK_PROP_KEYS; });
__webpack_require__.d(constants_namespaceObject, "DAYS_OF_THE_WEEK_MAPPING_TO_STATE", function() { return DAYS_OF_THE_WEEK_MAPPING_TO_STATE; });
__webpack_require__.d(constants_namespaceObject, "DAYS_OF_THE_WEEK_MAPPING_FROM_STATE", function() { return DAYS_OF_THE_WEEK_MAPPING_FROM_STATE; });
__webpack_require__.d(constants_namespaceObject, "DAYS_OF_THE_WEEK_PROP_KEY_MAPPING_FROM_STATE", function() { return DAYS_OF_THE_WEEK_PROP_KEY_MAPPING_FROM_STATE; });
__webpack_require__.d(constants_namespaceObject, "FIRST", function() { return FIRST; });
__webpack_require__.d(constants_namespaceObject, "SECOND", function() { return SECOND; });
__webpack_require__.d(constants_namespaceObject, "THIRD", function() { return THIRD; });
__webpack_require__.d(constants_namespaceObject, "FOURTH", function() { return FOURTH; });
__webpack_require__.d(constants_namespaceObject, "FIFTH", function() { return FIFTH; });
__webpack_require__.d(constants_namespaceObject, "LAST", function() { return LAST; });
__webpack_require__.d(constants_namespaceObject, "FIRST_LABEL", function() { return FIRST_LABEL; });
__webpack_require__.d(constants_namespaceObject, "SECOND_LABEL", function() { return SECOND_LABEL; });
__webpack_require__.d(constants_namespaceObject, "THIRD_LABEL", function() { return THIRD_LABEL; });
__webpack_require__.d(constants_namespaceObject, "FOURTH_LABEL", function() { return FOURTH_LABEL; });
__webpack_require__.d(constants_namespaceObject, "FIFTH_LABEL", function() { return FIFTH_LABEL; });
__webpack_require__.d(constants_namespaceObject, "LAST_LABEL", function() { return LAST_LABEL; });
__webpack_require__.d(constants_namespaceObject, "WEEKS_OF_THE_MONTH", function() { return WEEKS_OF_THE_MONTH; });
__webpack_require__.d(constants_namespaceObject, "WEEK_NUM_MAPPING_TO_WEEKS_OF_THE_MONTH", function() { return WEEK_NUM_MAPPING_TO_WEEKS_OF_THE_MONTH; });
__webpack_require__.d(constants_namespaceObject, "JANUARY", function() { return JANUARY; });
__webpack_require__.d(constants_namespaceObject, "FEBRUARY", function() { return FEBRUARY; });
__webpack_require__.d(constants_namespaceObject, "MARCH", function() { return MARCH; });
__webpack_require__.d(constants_namespaceObject, "APRIL", function() { return APRIL; });
__webpack_require__.d(constants_namespaceObject, "MAY", function() { return MAY; });
__webpack_require__.d(constants_namespaceObject, "JUNE", function() { return JUNE; });
__webpack_require__.d(constants_namespaceObject, "JULY", function() { return JULY; });
__webpack_require__.d(constants_namespaceObject, "AUGUST", function() { return AUGUST; });
__webpack_require__.d(constants_namespaceObject, "SEPTEMBER", function() { return SEPTEMBER; });
__webpack_require__.d(constants_namespaceObject, "OCTOBER", function() { return OCTOBER; });
__webpack_require__.d(constants_namespaceObject, "NOVEMBER", function() { return NOVEMBER; });
__webpack_require__.d(constants_namespaceObject, "DECEMBER", function() { return DECEMBER; });
__webpack_require__.d(constants_namespaceObject, "JANUARY_LABEL", function() { return JANUARY_LABEL; });
__webpack_require__.d(constants_namespaceObject, "FEBRUARY_LABEL", function() { return FEBRUARY_LABEL; });
__webpack_require__.d(constants_namespaceObject, "MARCH_LABEL", function() { return MARCH_LABEL; });
__webpack_require__.d(constants_namespaceObject, "APRIL_LABEL", function() { return APRIL_LABEL; });
__webpack_require__.d(constants_namespaceObject, "MAY_LABEL", function() { return MAY_LABEL; });
__webpack_require__.d(constants_namespaceObject, "JUNE_LABEL", function() { return JUNE_LABEL; });
__webpack_require__.d(constants_namespaceObject, "JULY_LABEL", function() { return JULY_LABEL; });
__webpack_require__.d(constants_namespaceObject, "AUGUST_LABEL", function() { return AUGUST_LABEL; });
__webpack_require__.d(constants_namespaceObject, "SEPTEMBER_LABEL", function() { return SEPTEMBER_LABEL; });
__webpack_require__.d(constants_namespaceObject, "OCTOBER_LABEL", function() { return OCTOBER_LABEL; });
__webpack_require__.d(constants_namespaceObject, "NOVEMBER_LABEL", function() { return NOVEMBER_LABEL; });
__webpack_require__.d(constants_namespaceObject, "DECEMBER_LABEL", function() { return DECEMBER_LABEL; });
__webpack_require__.d(constants_namespaceObject, "JANUARY_ABBR", function() { return JANUARY_ABBR; });
__webpack_require__.d(constants_namespaceObject, "FEBRUARY_ABBR", function() { return FEBRUARY_ABBR; });
__webpack_require__.d(constants_namespaceObject, "MARCH_ABBR", function() { return MARCH_ABBR; });
__webpack_require__.d(constants_namespaceObject, "APRIL_ABBR", function() { return APRIL_ABBR; });
__webpack_require__.d(constants_namespaceObject, "MAY_ABBR", function() { return MAY_ABBR; });
__webpack_require__.d(constants_namespaceObject, "JUNE_ABBR", function() { return JUNE_ABBR; });
__webpack_require__.d(constants_namespaceObject, "JULY_ABBR", function() { return JULY_ABBR; });
__webpack_require__.d(constants_namespaceObject, "AUGUST_ABBR", function() { return AUGUST_ABBR; });
__webpack_require__.d(constants_namespaceObject, "SEPTEMBER_ABBR", function() { return SEPTEMBER_ABBR; });
__webpack_require__.d(constants_namespaceObject, "OCTOBER_ABBR", function() { return OCTOBER_ABBR; });
__webpack_require__.d(constants_namespaceObject, "NOVEMBER_ABBR", function() { return NOVEMBER_ABBR; });
__webpack_require__.d(constants_namespaceObject, "DECEMBER_ABBR", function() { return DECEMBER_ABBR; });
__webpack_require__.d(constants_namespaceObject, "MONTHS_OF_THE_YEAR_MAPPING_TO_STATE", function() { return MONTHS_OF_THE_YEAR_MAPPING_TO_STATE; });
__webpack_require__.d(constants_namespaceObject, "MONTHS_OF_THE_YEAR_MAPPING_FROM_STATE", function() { return MONTHS_OF_THE_YEAR_MAPPING_FROM_STATE; });
__webpack_require__.d(constants_namespaceObject, "NEXT_DAY", function() { return NEXT_DAY; });
__webpack_require__.d(constants_namespaceObject, "SECOND_DAY", function() { return SECOND_DAY; });
__webpack_require__.d(constants_namespaceObject, "THIRD_DAY", function() { return THIRD_DAY; });
__webpack_require__.d(constants_namespaceObject, "FOURTH_DAY", function() { return FOURTH_DAY; });
__webpack_require__.d(constants_namespaceObject, "FIFTH_DAY", function() { return FIFTH_DAY; });
__webpack_require__.d(constants_namespaceObject, "SIXTH_DAY", function() { return SIXTH_DAY; });
__webpack_require__.d(constants_namespaceObject, "SEVENTH_DAY", function() { return SEVENTH_DAY; });
__webpack_require__.d(constants_namespaceObject, "NEXT_DAY_LABEL", function() { return NEXT_DAY_LABEL; });
__webpack_require__.d(constants_namespaceObject, "SECOND_DAY_LABEL", function() { return SECOND_DAY_LABEL; });
__webpack_require__.d(constants_namespaceObject, "THIRD_DAY_LABEL", function() { return THIRD_DAY_LABEL; });
__webpack_require__.d(constants_namespaceObject, "FOURTH_DAY_LABEL", function() { return FOURTH_DAY_LABEL; });
__webpack_require__.d(constants_namespaceObject, "FIFTH_DAY_LABEL", function() { return FIFTH_DAY_LABEL; });
__webpack_require__.d(constants_namespaceObject, "SIXTH_DAY_LABEL", function() { return SIXTH_DAY_LABEL; });
__webpack_require__.d(constants_namespaceObject, "SEVENTH_DAY_LABEL", function() { return SEVENTH_DAY_LABEL; });
__webpack_require__.d(constants_namespaceObject, "NUM_DAY_SPAN_MAPPING_TO_MULTI_DAY_SPAN", function() { return NUM_DAY_SPAN_MAPPING_TO_MULTI_DAY_SPAN; });

// NAMESPACE OBJECT: ./src/modules/data/blocks/recurring/options.js
var options_namespaceObject = {};
__webpack_require__.r(options_namespaceObject);
__webpack_require__.d(options_namespaceObject, "RECURRENCE_TYPE_RULES_OPTIONS", function() { return RECURRENCE_TYPE_RULES_OPTIONS; });
__webpack_require__.d(options_namespaceObject, "createNumericalOptions", function() { return createNumericalOptions; });
__webpack_require__.d(options_namespaceObject, "DAILY_RECURRENCE_FREQUENCY_OPTIONS", function() { return DAILY_RECURRENCE_FREQUENCY_OPTIONS; });
__webpack_require__.d(options_namespaceObject, "WEEKLY_RECURRENCE_FREQUENCY_OPTIONS", function() { return WEEKLY_RECURRENCE_FREQUENCY_OPTIONS; });
__webpack_require__.d(options_namespaceObject, "MONTHLY_RECURRENCE_FREQUENCY_OPTIONS", function() { return MONTHLY_RECURRENCE_FREQUENCY_OPTIONS; });
__webpack_require__.d(options_namespaceObject, "YEARLY_RECURRENCE_FREQUENCY_OPTIONS", function() { return YEARLY_RECURRENCE_FREQUENCY_OPTIONS; });
__webpack_require__.d(options_namespaceObject, "SERIES_ENDS_OPTIONS", function() { return SERIES_ENDS_OPTIONS; });
__webpack_require__.d(options_namespaceObject, "DAYS_OF_THE_WEEK_OPTIONS", function() { return DAYS_OF_THE_WEEK_OPTIONS; });
__webpack_require__.d(options_namespaceObject, "DAYS_OF_THE_MONTH_OPTIONS", function() { return DAYS_OF_THE_MONTH_OPTIONS; });
__webpack_require__.d(options_namespaceObject, "WEEKS_OF_THE_MONTH_OPTIONS", function() { return WEEKS_OF_THE_MONTH_OPTIONS; });
__webpack_require__.d(options_namespaceObject, "MONTH_DAYS_OPTIONS", function() { return MONTH_DAYS_OPTIONS; });
__webpack_require__.d(options_namespaceObject, "MONTHS_OF_THE_YEAR_OPTIONS", function() { return MONTHS_OF_THE_YEAR_OPTIONS; });
__webpack_require__.d(options_namespaceObject, "RECURRING_MULTI_DAY_OPTIONS", function() { return RECURRING_MULTI_DAY_OPTIONS; });

// NAMESPACE OBJECT: ./src/modules/data/blocks/constants.js
var blocks_constants_namespaceObject = {};
__webpack_require__.r(blocks_constants_namespaceObject);
__webpack_require__.d(blocks_constants_namespaceObject, "RECURRING", function() { return RECURRING; });
__webpack_require__.d(blocks_constants_namespaceObject, "EXCEPTION", function() { return EXCEPTION; });
__webpack_require__.d(blocks_constants_namespaceObject, "BLOCK_TYPES", function() { return BLOCK_TYPES; });
__webpack_require__.d(blocks_constants_namespaceObject, "KEY_TYPE", function() { return KEY_TYPE; });
__webpack_require__.d(blocks_constants_namespaceObject, "KEY_ALL_DAY", function() { return KEY_ALL_DAY; });
__webpack_require__.d(blocks_constants_namespaceObject, "KEY_MULTI_DAY", function() { return KEY_MULTI_DAY; });
__webpack_require__.d(blocks_constants_namespaceObject, "KEY_MULTI_DAY_SPAN", function() { return KEY_MULTI_DAY_SPAN; });
__webpack_require__.d(blocks_constants_namespaceObject, "KEY_START_TIME", function() { return KEY_START_TIME; });
__webpack_require__.d(blocks_constants_namespaceObject, "KEY_END_TIME", function() { return KEY_END_TIME; });
__webpack_require__.d(blocks_constants_namespaceObject, "KEY_START_TIME_INPUT", function() { return KEY_START_TIME_INPUT; });
__webpack_require__.d(blocks_constants_namespaceObject, "KEY_END_TIME_INPUT", function() { return KEY_END_TIME_INPUT; });
__webpack_require__.d(blocks_constants_namespaceObject, "KEY_START_DATE", function() { return KEY_START_DATE; });
__webpack_require__.d(blocks_constants_namespaceObject, "KEY_START_DATE_INPUT", function() { return KEY_START_DATE_INPUT; });
__webpack_require__.d(blocks_constants_namespaceObject, "KEY_START_DATE_OBJ", function() { return KEY_START_DATE_OBJ; });
__webpack_require__.d(blocks_constants_namespaceObject, "KEY_END_DATE", function() { return KEY_END_DATE; });
__webpack_require__.d(blocks_constants_namespaceObject, "KEY_END_DATE_INPUT", function() { return KEY_END_DATE_INPUT; });
__webpack_require__.d(blocks_constants_namespaceObject, "KEY_END_DATE_OBJ", function() { return KEY_END_DATE_OBJ; });
__webpack_require__.d(blocks_constants_namespaceObject, "KEY_LIMIT", function() { return KEY_LIMIT; });
__webpack_require__.d(blocks_constants_namespaceObject, "KEY_LIMIT_DATE_INPUT", function() { return KEY_LIMIT_DATE_INPUT; });
__webpack_require__.d(blocks_constants_namespaceObject, "KEY_LIMIT_DATE_OBJ", function() { return KEY_LIMIT_DATE_OBJ; });
__webpack_require__.d(blocks_constants_namespaceObject, "KEY_LIMIT_TYPE", function() { return KEY_LIMIT_TYPE; });
__webpack_require__.d(blocks_constants_namespaceObject, "KEY_BETWEEN", function() { return KEY_BETWEEN; });
__webpack_require__.d(blocks_constants_namespaceObject, "KEY_DAYS", function() { return KEY_DAYS; });
__webpack_require__.d(blocks_constants_namespaceObject, "KEY_WEEK", function() { return KEY_WEEK; });
__webpack_require__.d(blocks_constants_namespaceObject, "KEY_DAY", function() { return KEY_DAY; });
__webpack_require__.d(blocks_constants_namespaceObject, "KEY_MONTH", function() { return KEY_MONTH; });
__webpack_require__.d(blocks_constants_namespaceObject, "KEY_TIMEZONE", function() { return KEY_TIMEZONE; });

// NAMESPACE OBJECT: ./src/modules/data/blocks/recurring/selectors.js
var recurring_selectors_namespaceObject = {};
__webpack_require__.r(recurring_selectors_namespaceObject);
__webpack_require__.d(recurring_selectors_namespaceObject, "getRules", function() { return getRules; });
__webpack_require__.d(recurring_selectors_namespaceObject, "getRulesCount", function() { return getRulesCount; });
__webpack_require__.d(recurring_selectors_namespaceObject, "hasRules", function() { return selectors_hasRules; });
__webpack_require__.d(recurring_selectors_namespaceObject, "getIndex", function() { return getIndex; });
__webpack_require__.d(recurring_selectors_namespaceObject, "getRule", function() { return selectors_getRule; });
__webpack_require__.d(recurring_selectors_namespaceObject, "getType", function() { return selectors_getType; });
__webpack_require__.d(recurring_selectors_namespaceObject, "getAllDay", function() { return selectors_getAllDay; });
__webpack_require__.d(recurring_selectors_namespaceObject, "getMultiDay", function() { return selectors_getMultiDay; });
__webpack_require__.d(recurring_selectors_namespaceObject, "getMultiDaySpan", function() { return selectors_getMultiDaySpan; });
__webpack_require__.d(recurring_selectors_namespaceObject, "getStartDate", function() { return selectors_getStartDate; });
__webpack_require__.d(recurring_selectors_namespaceObject, "getStartDateObj", function() { return selectors_getStartDateObj; });
__webpack_require__.d(recurring_selectors_namespaceObject, "getStartDateInput", function() { return selectors_getStartDateInput; });
__webpack_require__.d(recurring_selectors_namespaceObject, "getStartTime", function() { return selectors_getStartTime; });
__webpack_require__.d(recurring_selectors_namespaceObject, "getStartTimeNoSeconds", function() { return selectors_getStartTimeNoSeconds; });
__webpack_require__.d(recurring_selectors_namespaceObject, "getStartTimeInput", function() { return selectors_getStartTimeInput; });
__webpack_require__.d(recurring_selectors_namespaceObject, "getEndDate", function() { return selectors_getEndDate; });
__webpack_require__.d(recurring_selectors_namespaceObject, "getEndDateObj", function() { return selectors_getEndDateObj; });
__webpack_require__.d(recurring_selectors_namespaceObject, "getEndDateInput", function() { return selectors_getEndDateInput; });
__webpack_require__.d(recurring_selectors_namespaceObject, "getEndTime", function() { return selectors_getEndTime; });
__webpack_require__.d(recurring_selectors_namespaceObject, "getEndTimeNoSeconds", function() { return selectors_getEndTimeNoSeconds; });
__webpack_require__.d(recurring_selectors_namespaceObject, "getEndTimeInput", function() { return selectors_getEndTimeInput; });
__webpack_require__.d(recurring_selectors_namespaceObject, "getBetween", function() { return selectors_getBetween; });
__webpack_require__.d(recurring_selectors_namespaceObject, "getLimitType", function() { return selectors_getLimitType; });
__webpack_require__.d(recurring_selectors_namespaceObject, "getLimit", function() { return selectors_getLimit; });
__webpack_require__.d(recurring_selectors_namespaceObject, "getLimitDateObj", function() { return selectors_getLimitDateObj; });
__webpack_require__.d(recurring_selectors_namespaceObject, "getLimitDateInput", function() { return selectors_getLimitDateInput; });
__webpack_require__.d(recurring_selectors_namespaceObject, "getDays", function() { return selectors_getDays; });
__webpack_require__.d(recurring_selectors_namespaceObject, "getDay", function() { return selectors_getDay; });
__webpack_require__.d(recurring_selectors_namespaceObject, "getMonth", function() { return selectors_getMonth; });
__webpack_require__.d(recurring_selectors_namespaceObject, "getWeek", function() { return selectors_getWeek; });
__webpack_require__.d(recurring_selectors_namespaceObject, "getTimezone", function() { return selectors_getTimezone; });
__webpack_require__.d(recurring_selectors_namespaceObject, "getTypeOption", function() { return getTypeOption; });
__webpack_require__.d(recurring_selectors_namespaceObject, "getLimitTypeOption", function() { return getLimitTypeOption; });

// NAMESPACE OBJECT: ./src/modules/data/blocks/recurring/index.js
var recurring_namespaceObject = {};
__webpack_require__.r(recurring_namespaceObject);
__webpack_require__.d(recurring_namespaceObject, "default", function() { return blocks_recurring; });
__webpack_require__.d(recurring_namespaceObject, "types", function() { return types_namespaceObject; });
__webpack_require__.d(recurring_namespaceObject, "actions", function() { return actions_namespaceObject; });
__webpack_require__.d(recurring_namespaceObject, "selectors", function() { return recurring_selectors_namespaceObject; });
__webpack_require__.d(recurring_namespaceObject, "options", function() { return options_namespaceObject; });
__webpack_require__.d(recurring_namespaceObject, "constants", function() { return constants_namespaceObject; });
__webpack_require__.d(recurring_namespaceObject, "sagas", function() { return watchers; });

// NAMESPACE OBJECT: ./src/modules/data/blocks/exception/types.js
var exception_types_namespaceObject = {};
__webpack_require__.r(exception_types_namespaceObject);
__webpack_require__.d(exception_types_namespaceObject, "ADD_EXCEPTION_FIELD", function() { return ADD_EXCEPTION_FIELD; });
__webpack_require__.d(exception_types_namespaceObject, "ADD_EXCEPTION", function() { return ADD_EXCEPTION; });
__webpack_require__.d(exception_types_namespaceObject, "REMOVE_EXCEPTION_FIELD", function() { return REMOVE_EXCEPTION_FIELD; });
__webpack_require__.d(exception_types_namespaceObject, "REMOVE_EXCEPTION", function() { return REMOVE_EXCEPTION; });
__webpack_require__.d(exception_types_namespaceObject, "EDIT_EXCEPTION", function() { return EDIT_EXCEPTION; });
__webpack_require__.d(exception_types_namespaceObject, "SYNC_EXCEPTIONS_FROM_DB", function() { return SYNC_EXCEPTIONS_FROM_DB; });

// NAMESPACE OBJECT: ./src/modules/data/blocks/exception/actions.js
var exception_actions_namespaceObject = {};
__webpack_require__.r(exception_actions_namespaceObject);
__webpack_require__.d(exception_actions_namespaceObject, "addField", function() { return exception_actions_addField; });
__webpack_require__.d(exception_actions_namespaceObject, "addException", function() { return addException; });
__webpack_require__.d(exception_actions_namespaceObject, "removeField", function() { return actions_removeField; });
__webpack_require__.d(exception_actions_namespaceObject, "removeException", function() { return actions_removeException; });
__webpack_require__.d(exception_actions_namespaceObject, "editException", function() { return editException; });
__webpack_require__.d(exception_actions_namespaceObject, "syncException", function() { return syncException; });
__webpack_require__.d(exception_actions_namespaceObject, "syncExceptionsFromDB", function() { return syncExceptionsFromDB; });

// NAMESPACE OBJECT: ./src/modules/data/blocks/exception/options.js
var exception_options_namespaceObject = {};
__webpack_require__.r(exception_options_namespaceObject);
__webpack_require__.d(exception_options_namespaceObject, "EXCEPTION_OCCURRENCE_OPTIONS", function() { return EXCEPTION_OCCURRENCE_OPTIONS; });

// NAMESPACE OBJECT: ./src/modules/data/blocks/exception/selectors.js
var exception_selectors_namespaceObject = {};
__webpack_require__.r(exception_selectors_namespaceObject);
__webpack_require__.d(exception_selectors_namespaceObject, "getExceptions", function() { return getExceptions; });
__webpack_require__.d(exception_selectors_namespaceObject, "getRules", function() { return selectors_getRules; });
__webpack_require__.d(exception_selectors_namespaceObject, "getExceptionsCount", function() { return getExceptionsCount; });
__webpack_require__.d(exception_selectors_namespaceObject, "hasExceptions", function() { return selectors_hasExceptions; });
__webpack_require__.d(exception_selectors_namespaceObject, "getIndex", function() { return selectors_getIndex; });
__webpack_require__.d(exception_selectors_namespaceObject, "getRule", function() { return exception_selectors_getRule; });
__webpack_require__.d(exception_selectors_namespaceObject, "getType", function() { return exception_selectors_getType; });
__webpack_require__.d(exception_selectors_namespaceObject, "getAllDay", function() { return exception_selectors_getAllDay; });
__webpack_require__.d(exception_selectors_namespaceObject, "getMultiDay", function() { return exception_selectors_getMultiDay; });
__webpack_require__.d(exception_selectors_namespaceObject, "getMultiDaySpan", function() { return exception_selectors_getMultiDaySpan; });
__webpack_require__.d(exception_selectors_namespaceObject, "getStartDate", function() { return exception_selectors_getStartDate; });
__webpack_require__.d(exception_selectors_namespaceObject, "getStartDateObj", function() { return exception_selectors_getStartDateObj; });
__webpack_require__.d(exception_selectors_namespaceObject, "getStartDateInput", function() { return exception_selectors_getStartDateInput; });
__webpack_require__.d(exception_selectors_namespaceObject, "getStartTime", function() { return exception_selectors_getStartTime; });
__webpack_require__.d(exception_selectors_namespaceObject, "getStartTimeNoSeconds", function() { return exception_selectors_getStartTimeNoSeconds; });
__webpack_require__.d(exception_selectors_namespaceObject, "getStartTimeInput", function() { return exception_selectors_getStartTimeInput; });
__webpack_require__.d(exception_selectors_namespaceObject, "getEndDate", function() { return exception_selectors_getEndDate; });
__webpack_require__.d(exception_selectors_namespaceObject, "getEndDateObj", function() { return exception_selectors_getEndDateObj; });
__webpack_require__.d(exception_selectors_namespaceObject, "getEndDateInput", function() { return exception_selectors_getEndDateInput; });
__webpack_require__.d(exception_selectors_namespaceObject, "getEndTime", function() { return exception_selectors_getEndTime; });
__webpack_require__.d(exception_selectors_namespaceObject, "getEndTimeNoSeconds", function() { return exception_selectors_getEndTimeNoSeconds; });
__webpack_require__.d(exception_selectors_namespaceObject, "getEndTimeInput", function() { return exception_selectors_getEndTimeInput; });
__webpack_require__.d(exception_selectors_namespaceObject, "getBetween", function() { return exception_selectors_getBetween; });
__webpack_require__.d(exception_selectors_namespaceObject, "getLimitType", function() { return exception_selectors_getLimitType; });
__webpack_require__.d(exception_selectors_namespaceObject, "getLimit", function() { return exception_selectors_getLimit; });
__webpack_require__.d(exception_selectors_namespaceObject, "getLimitDateObj", function() { return exception_selectors_getLimitDateObj; });
__webpack_require__.d(exception_selectors_namespaceObject, "getLimitDateInput", function() { return exception_selectors_getLimitDateInput; });
__webpack_require__.d(exception_selectors_namespaceObject, "getDays", function() { return exception_selectors_getDays; });
__webpack_require__.d(exception_selectors_namespaceObject, "getDay", function() { return exception_selectors_getDay; });
__webpack_require__.d(exception_selectors_namespaceObject, "getMonth", function() { return exception_selectors_getMonth; });
__webpack_require__.d(exception_selectors_namespaceObject, "getWeek", function() { return exception_selectors_getWeek; });
__webpack_require__.d(exception_selectors_namespaceObject, "getTimezone", function() { return exception_selectors_getTimezone; });
__webpack_require__.d(exception_selectors_namespaceObject, "getTypeOption", function() { return selectors_getTypeOption; });
__webpack_require__.d(exception_selectors_namespaceObject, "getLimitTypeOption", function() { return selectors_getLimitTypeOption; });

// NAMESPACE OBJECT: ./src/modules/data/blocks/additional-fields/types.js
var additional_fields_types_namespaceObject = {};
__webpack_require__.r(additional_fields_types_namespaceObject);
__webpack_require__.d(additional_fields_types_namespaceObject, "ADD_ADDITIONAL_FIELD", function() { return ADD_ADDITIONAL_FIELD; });
__webpack_require__.d(additional_fields_types_namespaceObject, "REMOVE_ADDITIONAL_FIELD", function() { return REMOVE_ADDITIONAL_FIELD; });
__webpack_require__.d(additional_fields_types_namespaceObject, "SET_ADDITIONAL_FIELD_LABEL", function() { return SET_ADDITIONAL_FIELD_LABEL; });
__webpack_require__.d(additional_fields_types_namespaceObject, "SET_ADDITIONAL_FIELD_VALUE", function() { return SET_ADDITIONAL_FIELD_VALUE; });

// NAMESPACE OBJECT: ./src/modules/data/blocks/additional-fields/actions.js
var additional_fields_actions_namespaceObject = {};
__webpack_require__.r(additional_fields_actions_namespaceObject);
__webpack_require__.d(additional_fields_actions_namespaceObject, "addField", function() { return additional_fields_actions_addField; });
__webpack_require__.d(additional_fields_actions_namespaceObject, "removeField", function() { return additional_fields_actions_removeField; });
__webpack_require__.d(additional_fields_actions_namespaceObject, "setFieldLabel", function() { return setFieldLabel; });
__webpack_require__.d(additional_fields_actions_namespaceObject, "setFieldValue", function() { return setFieldValue; });

// NAMESPACE OBJECT: ./src/modules/data/blocks/additional-fields/selectors.js
var additional_fields_selectors_namespaceObject = {};
__webpack_require__.r(additional_fields_selectors_namespaceObject);
__webpack_require__.d(additional_fields_selectors_namespaceObject, "getPlugin", function() { return getPlugin; });
__webpack_require__.d(additional_fields_selectors_namespaceObject, "getBlocks", function() { return getBlocks; });
__webpack_require__.d(additional_fields_selectors_namespaceObject, "getAdditionalFields", function() { return getAdditionalFields; });
__webpack_require__.d(additional_fields_selectors_namespaceObject, "getFieldName", function() { return getFieldName; });
__webpack_require__.d(additional_fields_selectors_namespaceObject, "getFieldBlock", function() { return getFieldBlock; });
__webpack_require__.d(additional_fields_selectors_namespaceObject, "getFieldLabel", function() { return getFieldLabel; });
__webpack_require__.d(additional_fields_selectors_namespaceObject, "getFieldValue", function() { return getFieldValue; });
__webpack_require__.d(additional_fields_selectors_namespaceObject, "getTextFieldValue", function() { return getTextFieldValue; });
__webpack_require__.d(additional_fields_selectors_namespaceObject, "getFieldOptions", function() { return getFieldOptions; });
__webpack_require__.d(additional_fields_selectors_namespaceObject, "getFieldOptionsWithLabels", function() { return getFieldOptionsWithLabels; });
__webpack_require__.d(additional_fields_selectors_namespaceObject, "getFieldDropdownValue", function() { return getFieldDropdownValue; });
__webpack_require__.d(additional_fields_selectors_namespaceObject, "getFieldCheckboxValue", function() { return getFieldCheckboxValue; });
__webpack_require__.d(additional_fields_selectors_namespaceObject, "getFieldCheckboxOptions", function() { return getFieldCheckboxOptions; });

// NAMESPACE OBJECT: ./src/modules/data/blocks/index.js
var blocks_namespaceObject = {};
__webpack_require__.r(blocks_namespaceObject);
__webpack_require__.d(blocks_namespaceObject, "default", function() { return data_blocks; });
__webpack_require__.d(blocks_namespaceObject, "setInitialState", function() { return reducer_setInitialState; });
__webpack_require__.d(blocks_namespaceObject, "constants", function() { return blocks_constants_namespaceObject; });
__webpack_require__.d(blocks_namespaceObject, "recurring", function() { return recurring_namespaceObject; });
__webpack_require__.d(blocks_namespaceObject, "exception", function() { return exception_namespaceObject; });

// NAMESPACE OBJECT: ./src/modules/data/blocks/exception/index.js
var exception_namespaceObject = {};
__webpack_require__.r(exception_namespaceObject);
__webpack_require__.d(exception_namespaceObject, "default", function() { return blocks_exception; });
__webpack_require__.d(exception_namespaceObject, "types", function() { return exception_types_namespaceObject; });
__webpack_require__.d(exception_namespaceObject, "actions", function() { return exception_actions_namespaceObject; });
__webpack_require__.d(exception_namespaceObject, "selectors", function() { return exception_selectors_namespaceObject; });
__webpack_require__.d(exception_namespaceObject, "options", function() { return exception_options_namespaceObject; });
__webpack_require__.d(exception_namespaceObject, "sagas", function() { return sagas_watchers; });

// NAMESPACE OBJECT: ./src/modules/icons/index.js
var icons_namespaceObject = {};
__webpack_require__.r(icons_namespaceObject);
__webpack_require__.d(icons_namespaceObject, "Arrow", function() { return arrow; });
__webpack_require__.d(icons_namespaceObject, "Trash", function() { return trash; });
__webpack_require__.d(icons_namespaceObject, "Recurrence", function() { return recurrence; });
__webpack_require__.d(icons_namespaceObject, "RelatedEvents", function() { return related_events_placeholder; });
__webpack_require__.d(icons_namespaceObject, "MiniCalendar", function() { return mini_calendar; });
__webpack_require__.d(icons_namespaceObject, "EventsCountdown", function() { return events_countdown; });
__webpack_require__.d(icons_namespaceObject, "EventsFeaturedVenue", function() { return events_featured_venue; });
__webpack_require__.d(icons_namespaceObject, "Virtual", function() { return virtual; });

// NAMESPACE OBJECT: ./src/modules/elements/index.js
var modules_elements_namespaceObject = {};
__webpack_require__.r(modules_elements_namespaceObject);
__webpack_require__.d(modules_elements_namespaceObject, "ExceptionAddField", function() { return exception_add_field; });
__webpack_require__.d(modules_elements_namespaceObject, "ExceptionField", function() { return exception_field; });
__webpack_require__.d(modules_elements_namespaceObject, "ExceptionForm", function() { return exception_form; });
__webpack_require__.d(modules_elements_namespaceObject, "RecurringAddField", function() { return recurring_add_field; });
__webpack_require__.d(modules_elements_namespaceObject, "RecurringField", function() { return recurring_field; });
__webpack_require__.d(modules_elements_namespaceObject, "RecurringForm", function() { return recurring_form; });
__webpack_require__.d(modules_elements_namespaceObject, "Panel", function() { return panel; });
__webpack_require__.d(modules_elements_namespaceObject, "PanelHeader", function() { return panel_header; });
__webpack_require__.d(modules_elements_namespaceObject, "Row", function() { return row; });
__webpack_require__.d(modules_elements_namespaceObject, "Fieldset", function() { return fieldset; });
__webpack_require__.d(modules_elements_namespaceObject, "Label", function() { return elements_label; });
__webpack_require__.d(modules_elements_namespaceObject, "LabeledRow", function() { return labeled_row; });
__webpack_require__.d(modules_elements_namespaceObject, "RemoveField", function() { return remove_field; });
__webpack_require__.d(modules_elements_namespaceObject, "MultiDayCheckbox", function() { return multi_day_checkbox; });
__webpack_require__.d(modules_elements_namespaceObject, "SeriesEnds", function() { return series_ends; });
__webpack_require__.d(modules_elements_namespaceObject, "DayOfWeekPicker", function() { return day_of_week_picker; });
__webpack_require__.d(modules_elements_namespaceObject, "OnDayOfWeek", function() { return on_day_of_week; });
__webpack_require__.d(modules_elements_namespaceObject, "OnDayOfMonthPicker", function() { return on_day_of_month_picker; });
__webpack_require__.d(modules_elements_namespaceObject, "DayOfMonthPicker", function() { return day_of_month_picker; });
__webpack_require__.d(modules_elements_namespaceObject, "RecurringToDateTimePicker", function() { return recurring_to_date_time_picker; });
__webpack_require__.d(modules_elements_namespaceObject, "SingleToDateTimePicker", function() { return single_to_date_time_picker; });
__webpack_require__.d(modules_elements_namespaceObject, "FromTimeRangePicker", function() { return from_time_range_picker; });
__webpack_require__.d(modules_elements_namespaceObject, "MonthPicker", function() { return month_picker; });
__webpack_require__.d(modules_elements_namespaceObject, "InMonth", function() { return in_month; });
__webpack_require__.d(modules_elements_namespaceObject, "TypePicker", function() { return type_picker; });
__webpack_require__.d(modules_elements_namespaceObject, "OnDatePicker", function() { return on_date_picker; });
__webpack_require__.d(modules_elements_namespaceObject, "FrequencySelect", function() { return frequency_select; });

// NAMESPACE OBJECT: ./src/modules/data/status/types.js
var status_types_namespaceObject = {};
__webpack_require__.r(status_types_namespaceObject);
__webpack_require__.d(status_types_namespaceObject, "SET_SERIES_QUEUE_STATUS", function() { return SET_SERIES_QUEUE_STATUS; });

// NAMESPACE OBJECT: ./src/modules/data/status/actions.js
var status_actions_namespaceObject = {};
__webpack_require__.r(status_actions_namespaceObject);
__webpack_require__.d(status_actions_namespaceObject, "setSeriesQueueStatus", function() { return setSeriesQueueStatus; });

// NAMESPACE OBJECT: ./src/modules/data/status/selectors.js
var status_selectors_namespaceObject = {};
__webpack_require__.r(status_selectors_namespaceObject);
__webpack_require__.d(status_selectors_namespaceObject, "getStatus", function() { return getStatus; });
__webpack_require__.d(status_selectors_namespaceObject, "isCompleted", function() { return selectors_isCompleted; });
__webpack_require__.d(status_selectors_namespaceObject, "getProgress", function() { return getProgress; });

// NAMESPACE OBJECT: ./src/modules/data/status/sagas.js
var status_sagas_namespaceObject = {};
__webpack_require__.r(status_sagas_namespaceObject);
__webpack_require__.d(status_sagas_namespaceObject, "NOTICE_EDITING_SERIES", function() { return NOTICE_EDITING_SERIES; });
__webpack_require__.d(status_sagas_namespaceObject, "NOTICE_PROGRESS_ON_SERIES_CREATION_COUNT", function() { return NOTICE_PROGRESS_ON_SERIES_CREATION_COUNT; });
__webpack_require__.d(status_sagas_namespaceObject, "NOTICE_PROGRESS_ON_SERIES_CREATION", function() { return NOTICE_PROGRESS_ON_SERIES_CREATION; });
__webpack_require__.d(status_sagas_namespaceObject, "NOTICES", function() { return NOTICES; });
__webpack_require__.d(status_sagas_namespaceObject, "fetchStatus", function() { return fetchStatus; });
__webpack_require__.d(status_sagas_namespaceObject, "pollUntilSeriesCompleted", function() { return pollUntilSeriesCompleted; });
__webpack_require__.d(status_sagas_namespaceObject, "createWPEditorChannel", function() { return createWPEditorChannel; });
__webpack_require__.d(status_sagas_namespaceObject, "actionTaker", function() { return actionTaker; });
__webpack_require__.d(status_sagas_namespaceObject, "showEditingAllSeriesPrompt", function() { return showEditingAllSeriesPrompt; });
__webpack_require__.d(status_sagas_namespaceObject, "default", function() { return status_sagas_watchers; });

// NAMESPACE OBJECT: ./src/modules/data/status/index.js
var status_namespaceObject = {};
__webpack_require__.r(status_namespaceObject);
__webpack_require__.d(status_namespaceObject, "default", function() { return data_status; });
__webpack_require__.d(status_namespaceObject, "types", function() { return status_types_namespaceObject; });
__webpack_require__.d(status_namespaceObject, "actions", function() { return status_actions_namespaceObject; });
__webpack_require__.d(status_namespaceObject, "selectors", function() { return status_selectors_namespaceObject; });
__webpack_require__.d(status_namespaceObject, "sagas", function() { return status_sagas_namespaceObject; });

// NAMESPACE OBJECT: ./src/modules/data/index.js
var data_namespaceObject = {};
__webpack_require__.r(data_namespaceObject);
__webpack_require__.d(data_namespaceObject, "initStore", function() { return initStore; });
__webpack_require__.d(data_namespaceObject, "getStore", function() { return getStore; });
__webpack_require__.d(data_namespaceObject, "blocks", function() { return blocks_namespaceObject; });
__webpack_require__.d(data_namespaceObject, "status", function() { return status_namespaceObject; });

// NAMESPACE OBJECT: ./src/modules/blocks/index.js
var modules_blocks_namespaceObject = {};
__webpack_require__.r(modules_blocks_namespaceObject);
__webpack_require__.d(modules_blocks_namespaceObject, "default", function() { return modules_blocks; });

// EXTERNAL MODULE: external "wp.blocks"
var external_wp_blocks_ = __webpack_require__("HSyU");

// EXTERNAL MODULE: external "React"
var external_React_ = __webpack_require__("cDcd");
var external_React_default = /*#__PURE__*/__webpack_require__.n(external_React_);

// EXTERNAL MODULE: external "tribe.common.utils"
var external_tribe_common_utils_ = __webpack_require__("B8vQ");

// EXTERNAL MODULE: external "tribe.modules.reactRedux"
var external_tribe_modules_reactRedux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: external "tribe.modules.redux"
var external_tribe_modules_redux_ = __webpack_require__("rKB8");

// EXTERNAL MODULE: external "tribe.common.hoc"
var external_tribe_common_hoc_ = __webpack_require__("Q9xL");

// CONCATENATED MODULE: ./src/modules/data/prefix.js
const PREFIX_EVENTS_PRO_STORE = '@@MT/EVENTS-PRO';
const PREFIX_EVENTS_VIRTUAL_STORE = '@@MT/EVENTS_VIRTUAL';
// CONCATENATED MODULE: ./src/modules/data/blocks/recurring/types.js
/* eslint-disable max-len */
/**
 * Internal dependencies
 */

const ADD_RULE_FIELD = `${PREFIX_EVENTS_PRO_STORE}/ADD_RULE_FIELD`;
const ADD_RULE = `${PREFIX_EVENTS_PRO_STORE}/ADD_RULE`;
const REMOVE_RULE_FIELD = `${PREFIX_EVENTS_PRO_STORE}/REMOVE_RULE_FIELD`;
const REMOVE_RULE = `${PREFIX_EVENTS_PRO_STORE}/REMOVE_RULE`;
const EDIT_RULE = `${PREFIX_EVENTS_PRO_STORE}/EDIT_RULE`;
const SYNC_RULES_FROM_DB = `${PREFIX_EVENTS_PRO_STORE}/SYNC_RULES_FROM_DB`;
// CONCATENATED MODULE: ./src/modules/data/blocks/recurring/reducer.js
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */

function reducer_edit(state, action) {
  const field = Object.assign({}, state[action.index], action.payload);
  if (state.length === 1) {
    return [field];
  }
  return [...state.slice(0, action.index), field, ...state.slice(action.index + 1)];
}
function recurring(state = [], action) {
  switch (action.type) {
    case ADD_RULE:
      return [...state, action.payload];
    case EDIT_RULE:
      return reducer_edit(state, action);
    case REMOVE_RULE:
      return state.filter((_, index) => index !== action.index);
    case SYNC_RULES_FROM_DB:
      return JSON.parse(action.payload);
    default:
      return state;
  }
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__("lSNA");
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: external "lodash.curry"
var external_lodash_curry_ = __webpack_require__("oNd/");
var external_lodash_curry_default = /*#__PURE__*/__webpack_require__.n(external_lodash_curry_);

// CONCATENATED MODULE: ./src/modules/data/blocks/recurring/actions.js


/**
 * External dependencies
 */
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { defineProperty_default()(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
/**
 * Internal dependencies
 */

const actions_addField = () => ({
  type: ADD_RULE_FIELD
});
const addRule = payload => ({
  type: ADD_RULE,
  payload
});
const removeField = () => ({
  type: REMOVE_RULE_FIELD
});
const actions_removeRule = index => ({
  type: REMOVE_RULE,
  index
});
const editRule = external_lodash_curry_default()((index, payload) => ({
  type: EDIT_RULE,
  index,
  payload
}));
const syncRule = external_lodash_curry_default()((index, payload) => _objectSpread(_objectSpread({}, editRule(index, payload)), {}, {
  sync: true
}));
const syncRulesFromDB = payload => ({
  type: SYNC_RULES_FROM_DB,
  payload
});
// EXTERNAL MODULE: external "lodash.find"
var external_lodash_find_ = __webpack_require__("6OzC");
var external_lodash_find_default = /*#__PURE__*/__webpack_require__.n(external_lodash_find_);

// EXTERNAL MODULE: external "tribe.modules.reselect"
var external_tribe_modules_reselect_ = __webpack_require__("MWqi");

// EXTERNAL MODULE: external "lodash.invert"
var external_lodash_invert_ = __webpack_require__("JDLU");
var external_lodash_invert_default = /*#__PURE__*/__webpack_require__.n(external_lodash_invert_);

// EXTERNAL MODULE: external "wp.i18n"
var external_wp_i18n_ = __webpack_require__("l3Sj");

// CONCATENATED MODULE: ./src/modules/data/blocks/recurring/constants.js

/**
 * External dependencies
 */


//
// ─── RECURRENCE TYPES ───────────────────────────────────────────────────────────
//

const DAILY = 'daily';
const WEEKLY = 'weekly';
const MONTHLY = 'monthly';
const YEARLY = 'yearly';
const SINGLE = 'single';
const DAILY_LABEL = Object(external_wp_i18n_["__"])('Day', 'tribe-events-calendar-pro');
const WEEKLY_LABEL = Object(external_wp_i18n_["__"])('Week', 'tribe-events-calendar-pro');
const MONTHLY_LABEL = Object(external_wp_i18n_["__"])('Month', 'tribe-events-calendar-pro');
const YEARLY_LABEL = Object(external_wp_i18n_["__"])('Year', 'tribe-events-calendar-pro');
const DAILY_LABEL_PLURAL = Object(external_wp_i18n_["__"])('Days', 'tribe-events-calendar-pro');
const WEEKLY_LABEL_PLURAL = Object(external_wp_i18n_["__"])('Weeks', 'tribe-events-calendar-pro');
const MONTHLY_LABEL_PLURAL = Object(external_wp_i18n_["__"])('Months', 'tribe-events-calendar-pro');
const YEARLY_LABEL_PLURAL = Object(external_wp_i18n_["__"])('Years', 'tribe-events-calendar-pro');
const SINGLE_LABEL = Object(external_wp_i18n_["__"])('Single Recurrence', 'tribe-events-calendar-pro');
const RECURRENCE_TYPES = [DAILY, WEEKLY, MONTHLY, YEARLY, SINGLE];

//
// ─── SERIES END TYPES ───────────────────────────────────────────────────────────
//

const ON = 'on';
const AFTER = 'after';
const NEVER = 'never';
const ON_LABEL = Object(external_wp_i18n_["__"])('On', 'tribe-events-calendar-pro');
const AFTER_LABEL = Object(external_wp_i18n_["__"])('After', 'tribe-events-calendar-pro');
const NEVER_LABEL = Object(external_wp_i18n_["__"])('Never', 'tribe-events-calendar-pro');
const DATE = 'date';
const COUNT = 'count';

//
// ─── DAYS OF THE MONTH ──────────────────────────────────────────────────────────
//

// returns an array from 1 - 31
const DAYS_OF_THE_MONTH = Array(31).fill().map((_, index) => index + 1);
const DAY = 'day';
const DAY_LABEL = Object(external_wp_i18n_["__"])('Day', 'tribe-events-calendar-pro');

//
// ─── DAYS OF THE WEEK ───────────────────────────────────────────────────────────
//

const SUNDAY = 'sunday';
const MONDAY = 'monday';
const TUESDAY = 'tuesday';
const WEDNESDAY = 'wednesday';
const THURSDAY = 'thursday';
const FRIDAY = 'friday';
const SATURDAY = 'saturday';
const SUNDAY_LABEL = Object(external_wp_i18n_["__"])('Sunday', 'tribe-events-calendar-pro');
const MONDAY_LABEL = Object(external_wp_i18n_["__"])('Monday', 'tribe-events-calendar-pro');
const TUESDAY_LABEL = Object(external_wp_i18n_["__"])('Tuesday', 'tribe-events-calendar-pro');
const WEDNESDAY_LABEL = Object(external_wp_i18n_["__"])('Wednesday', 'tribe-events-calendar-pro');
const THURSDAY_LABEL = Object(external_wp_i18n_["__"])('Thursday', 'tribe-events-calendar-pro');
const FRIDAY_LABEL = Object(external_wp_i18n_["__"])('Friday', 'tribe-events-calendar-pro');
const SATURDAY_LABEL = Object(external_wp_i18n_["__"])('Saturday', 'tribe-events-calendar-pro');
const SUNDAY_ABBR = Object(external_wp_i18n_["_x"])('S', 'The first-letter abbreviation for Sunday', 'tribe-events-calendar-pro');
const MONDAY_ABBR = Object(external_wp_i18n_["_x"])('M', 'The first-letter abbreviation for Monday', 'tribe-events-calendar-pro');
const TUESDAY_ABBR = Object(external_wp_i18n_["_x"])('T', 'The first-letter abbreviation for Tuesday', 'tribe-events-calendar-pro');
const WEDNESDAY_ABBR = Object(external_wp_i18n_["_x"])('W', 'The first-letter abbreviation for Wednesday', 'tribe-events-calendar-pro');
const THURSDAY_ABBR = Object(external_wp_i18n_["_x"])('T', 'The first-letter abbreviation for Thursday', 'tribe-events-calendar-pro');
const FRIDAY_ABBR = Object(external_wp_i18n_["_x"])('F', 'The first-letter abbreviation for Friday', 'tribe-events-calendar-pro');
const SATURDAY_ABBR = Object(external_wp_i18n_["_x"])('S', 'The first-letter abbreviation for Saturday', 'tribe-events-calendar-pro');
const SUNDAY_CHECKED = 'sundayChecked';
const MONDAY_CHECKED = 'mondayChecked';
const TUESDAY_CHECKED = 'tuesdayChecked';
const WEDNESDAY_CHECKED = 'wednesdayChecked';
const THURSDAY_CHECKED = 'thursdayChecked';
const FRIDAY_CHECKED = 'fridayChecked';
const SATURDAY_CHECKED = 'saturdayChecked';
const DAYS_OF_THE_WEEK_PROP_KEYS = [SUNDAY_CHECKED, MONDAY_CHECKED, TUESDAY_CHECKED, WEDNESDAY_CHECKED, THURSDAY_CHECKED, FRIDAY_CHECKED, SATURDAY_CHECKED];
const DAYS_OF_THE_WEEK_MAPPING_TO_STATE = {
  [MONDAY]: 1,
  [TUESDAY]: 2,
  [WEDNESDAY]: 3,
  [THURSDAY]: 4,
  [FRIDAY]: 5,
  [SATURDAY]: 6,
  [SUNDAY]: 7,
  [DAY]: 8
};
const DAYS_OF_THE_WEEK_MAPPING_FROM_STATE = external_lodash_invert_default()(DAYS_OF_THE_WEEK_MAPPING_TO_STATE);
const DAYS_OF_THE_WEEK_PROP_KEY_MAPPING_FROM_STATE = {
  1: MONDAY_CHECKED,
  2: TUESDAY_CHECKED,
  3: WEDNESDAY_CHECKED,
  4: THURSDAY_CHECKED,
  5: FRIDAY_CHECKED,
  6: SATURDAY_CHECKED,
  7: SUNDAY_CHECKED
};

//
// ─── WEEKS OF THE MONTH ─────────────────────────────────────────────────────────
//

const FIRST = 'first';
const SECOND = 'second';
const THIRD = 'third';
const FOURTH = 'fourth';
const FIFTH = 'fifth';
const LAST = 'last';
const FIRST_LABEL = Object(external_wp_i18n_["__"])('First', 'tribe-events-calendar-pro');
const SECOND_LABEL = Object(external_wp_i18n_["__"])('Second', 'tribe-events-calendar-pro');
const THIRD_LABEL = Object(external_wp_i18n_["__"])('Third', 'tribe-events-calendar-pro');
const FOURTH_LABEL = Object(external_wp_i18n_["__"])('Fourth', 'tribe-events-calendar-pro');
const FIFTH_LABEL = Object(external_wp_i18n_["__"])('Fifth', 'tribe-events-calendar-pro');
const LAST_LABEL = Object(external_wp_i18n_["__"])('Last', 'tribe-events-calendar-pro');
const WEEKS_OF_THE_MONTH = [FIRST, SECOND, THIRD, FOURTH, FIFTH, LAST];
const WEEK_NUM_MAPPING_TO_WEEKS_OF_THE_MONTH = {
  1: FIRST,
  2: SECOND,
  3: THIRD,
  4: FOURTH,
  5: FIFTH
};

//
// ─── MONTHS OF THE YEAR ─────────────────────────────────────────────────────────
//

const JANUARY = 'january';
const FEBRUARY = 'february';
const MARCH = 'march';
const APRIL = 'april';
const MAY = 'may';
const JUNE = 'june';
const JULY = 'july';
const AUGUST = 'august';
const SEPTEMBER = 'september';
const OCTOBER = 'october';
const NOVEMBER = 'november';
const DECEMBER = 'december';
const JANUARY_LABEL = Object(external_wp_i18n_["__"])('January', 'tribe-events-calendar-pro');
const FEBRUARY_LABEL = Object(external_wp_i18n_["__"])('February', 'tribe-events-calendar-pro');
const MARCH_LABEL = Object(external_wp_i18n_["__"])('March', 'tribe-events-calendar-pro');
const APRIL_LABEL = Object(external_wp_i18n_["__"])('April', 'tribe-events-calendar-pro');
const MAY_LABEL = Object(external_wp_i18n_["__"])('May', 'tribe-events-calendar-pro');
const JUNE_LABEL = Object(external_wp_i18n_["__"])('June', 'tribe-events-calendar-pro');
const JULY_LABEL = Object(external_wp_i18n_["__"])('July', 'tribe-events-calendar-pro');
const AUGUST_LABEL = Object(external_wp_i18n_["__"])('August', 'tribe-events-calendar-pro');
const SEPTEMBER_LABEL = Object(external_wp_i18n_["__"])('September', 'tribe-events-calendar-pro');
const OCTOBER_LABEL = Object(external_wp_i18n_["__"])('October', 'tribe-events-calendar-pro');
const NOVEMBER_LABEL = Object(external_wp_i18n_["__"])('November', 'tribe-events-calendar-pro');
const DECEMBER_LABEL = Object(external_wp_i18n_["__"])('December', 'tribe-events-calendar-pro');
const JANUARY_ABBR = Object(external_wp_i18n_["__"])('Jan', 'tribe-events-calendar-pro');
const FEBRUARY_ABBR = Object(external_wp_i18n_["__"])('Feb', 'tribe-events-calendar-pro');
const MARCH_ABBR = Object(external_wp_i18n_["__"])('Mar', 'tribe-events-calendar-pro');
const APRIL_ABBR = Object(external_wp_i18n_["__"])('Apr', 'tribe-events-calendar-pro');
const MAY_ABBR = Object(external_wp_i18n_["__"])('May', 'tribe-events-calendar-pro');
const JUNE_ABBR = Object(external_wp_i18n_["__"])('Jun', 'tribe-events-calendar-pro');
const JULY_ABBR = Object(external_wp_i18n_["__"])('Jul', 'tribe-events-calendar-pro');
const AUGUST_ABBR = Object(external_wp_i18n_["__"])('Aug', 'tribe-events-calendar-pro');
const SEPTEMBER_ABBR = Object(external_wp_i18n_["__"])('Sep', 'tribe-events-calendar-pro');
const OCTOBER_ABBR = Object(external_wp_i18n_["__"])('Oct', 'tribe-events-calendar-pro');
const NOVEMBER_ABBR = Object(external_wp_i18n_["__"])('Nov', 'tribe-events-calendar-pro');
const DECEMBER_ABBR = Object(external_wp_i18n_["__"])('Dec', 'tribe-events-calendar-pro');
const MONTHS_OF_THE_YEAR_MAPPING_TO_STATE = {
  [JANUARY]: 1,
  [FEBRUARY]: 2,
  [MARCH]: 3,
  [APRIL]: 4,
  [MAY]: 5,
  [JUNE]: 6,
  [JULY]: 7,
  [AUGUST]: 8,
  [SEPTEMBER]: 9,
  [OCTOBER]: 10,
  [NOVEMBER]: 11,
  [DECEMBER]: 12
};
const MONTHS_OF_THE_YEAR_MAPPING_FROM_STATE = external_lodash_invert_default()(MONTHS_OF_THE_YEAR_MAPPING_TO_STATE);

//
// ─── RECURRING MULTI DAY ────────────────────────────────────────────────────────
//

const NEXT_DAY = 'next_day';
const SECOND_DAY = 'second_day';
const THIRD_DAY = 'third_day';
const FOURTH_DAY = 'fourth_day';
const FIFTH_DAY = 'fifth_day';
const SIXTH_DAY = 'sixth_day';
const SEVENTH_DAY = 'seventh_day';
const NEXT_DAY_LABEL = Object(external_wp_i18n_["__"])('Next day', 'tribe-events-calendar-pro');
const SECOND_DAY_LABEL = Object(external_wp_i18n_["__"])('2nd day', 'tribe-events-calendar-pro');
const THIRD_DAY_LABEL = Object(external_wp_i18n_["__"])('3rd day', 'tribe-events-calendar-pro');
const FOURTH_DAY_LABEL = Object(external_wp_i18n_["__"])('4th day', 'tribe-events-calendar-pro');
const FIFTH_DAY_LABEL = Object(external_wp_i18n_["__"])('5th day', 'tribe-events-calendar-pro');
const SIXTH_DAY_LABEL = Object(external_wp_i18n_["__"])('6th day', 'tribe-events-calendar-pro');
const SEVENTH_DAY_LABEL = Object(external_wp_i18n_["__"])('7th day', 'tribe-events-calendar-pro');
const NUM_DAY_SPAN_MAPPING_TO_MULTI_DAY_SPAN = {
  1: NEXT_DAY,
  2: SECOND_DAY,
  3: THIRD_DAY,
  4: FOURTH_DAY,
  5: FIFTH_DAY,
  6: SIXTH_DAY,
  7: SEVENTH_DAY
};
// CONCATENATED MODULE: ./src/modules/data/blocks/recurring/options.js
/**
 * Internal Dependencies
 */


//
// ─── RECURRENCE TYPES OPTIONS ───────────────────────────────────────────────────
//

const RECURRENCE_TYPE_RULES_OPTIONS = [{
  label: DAILY_LABEL,
  label_plural: DAILY_LABEL_PLURAL,
  value: DAILY
}, {
  label: WEEKLY_LABEL,
  label_plural: WEEKLY_LABEL_PLURAL,
  value: WEEKLY
}, {
  label: MONTHLY_LABEL,
  label_plural: MONTHLY_LABEL_PLURAL,
  value: MONTHLY
}, {
  label: YEARLY_LABEL,
  label_plural: YEARLY_LABEL_PLURAL,
  value: YEARLY
}, {
  label: SINGLE_LABEL,
  value: SINGLE
}];

//
// ─── RECURRENCE FREQUENCY OPTIONS ───────────────────────────────────────────────
//

/**
 * Creates options for select element from 1 to max
 *
 * @param {number} max The last number in the options list
 */
const createNumericalOptions = max => Array(max).fill().map((_, index) => ({
  label: String(index + 1),
  value: index + 1
}));
const DAILY_RECURRENCE_FREQUENCY_OPTIONS = createNumericalOptions(6);
const WEEKLY_RECURRENCE_FREQUENCY_OPTIONS = createNumericalOptions(6);
const MONTHLY_RECURRENCE_FREQUENCY_OPTIONS = createNumericalOptions(12);
const YEARLY_RECURRENCE_FREQUENCY_OPTIONS = createNumericalOptions(6);

//
// ─── SERIES ENDS OPTIONS ────────────────────────────────────────────────────────
//

const SERIES_ENDS_OPTIONS = [{
  label: ON_LABEL,
  value: DATE
}, {
  label: AFTER_LABEL,
  value: COUNT
}, {
  label: NEVER_LABEL,
  value: NEVER
}];

//
// ─── DAYS OF THE WEEK OPTIONS ────────────────────────────────────────
//

const DAYS_OF_THE_WEEK_OPTIONS = [{
  label: MONDAY_LABEL,
  value: MONDAY
}, {
  label: TUESDAY_LABEL,
  value: TUESDAY
}, {
  label: WEDNESDAY_LABEL,
  value: WEDNESDAY
}, {
  label: THURSDAY_LABEL,
  value: THURSDAY
}, {
  label: FRIDAY_LABEL,
  value: FRIDAY
}, {
  label: SATURDAY_LABEL,
  value: SATURDAY
}, {
  label: SUNDAY_LABEL,
  value: SUNDAY
}, {
  label: DAY_LABEL,
  value: DAY
}];

//
// ─── DAYS AND WEEKS OF THE MONTH OPTIONS ────────────────────────────────────────
//

const DAYS_OF_THE_MONTH_OPTIONS = DAYS_OF_THE_MONTH.map(value => ({
  label: String(value),
  value
}));
const WEEKS_OF_THE_MONTH_OPTIONS = [{
  label: FIRST_LABEL,
  value: FIRST
}, {
  label: SECOND_LABEL,
  value: SECOND
}, {
  label: THIRD_LABEL,
  value: THIRD
}, {
  label: FOURTH_LABEL,
  value: FOURTH
}, {
  label: FIFTH_LABEL,
  value: FIFTH
}, {
  label: LAST_LABEL,
  value: LAST
}];
const MONTH_DAYS_OPTIONS = [...WEEKS_OF_THE_MONTH_OPTIONS, ...DAYS_OF_THE_MONTH_OPTIONS];

//
// ─── MONTHS OF THE YEAR OPTIONS ─────────────────────────────────────────────────
//

const MONTHS_OF_THE_YEAR_OPTIONS = [{
  label: JANUARY_LABEL,
  tag: JANUARY_ABBR,
  value: JANUARY
}, {
  label: FEBRUARY_LABEL,
  tag: FEBRUARY_ABBR,
  value: FEBRUARY
}, {
  label: MARCH_LABEL,
  tag: MARCH_ABBR,
  value: MARCH
}, {
  label: APRIL_LABEL,
  tag: APRIL_ABBR,
  value: APRIL
}, {
  label: MAY_LABEL,
  tag: MAY_ABBR,
  value: MAY
}, {
  label: JUNE_LABEL,
  tag: JUNE_ABBR,
  value: JUNE
}, {
  label: JULY_LABEL,
  tag: JULY_ABBR,
  value: JULY
}, {
  label: AUGUST_LABEL,
  tag: AUGUST_ABBR,
  value: AUGUST
}, {
  label: SEPTEMBER_LABEL,
  tag: SEPTEMBER_ABBR,
  value: SEPTEMBER
}, {
  label: OCTOBER_LABEL,
  tag: OCTOBER_ABBR,
  value: OCTOBER
}, {
  label: NOVEMBER_LABEL,
  tag: NOVEMBER_ABBR,
  value: NOVEMBER
}, {
  label: DECEMBER_LABEL,
  tag: DECEMBER_ABBR,
  value: DECEMBER
}];

//
// ─── RECURRING MULTI DAY OPTIONS ────────────────────────────────────────────────
//

const RECURRING_MULTI_DAY_OPTIONS = [{
  label: NEXT_DAY_LABEL,
  value: NEXT_DAY
}, {
  label: SECOND_DAY_LABEL,
  value: SECOND_DAY
}, {
  label: THIRD_DAY_LABEL,
  value: THIRD_DAY
}, {
  label: FOURTH_DAY_LABEL,
  value: FOURTH_DAY
}, {
  label: FIFTH_DAY_LABEL,
  value: FIFTH_DAY
}, {
  label: SIXTH_DAY_LABEL,
  value: SIXTH_DAY
}, {
  label: SEVENTH_DAY_LABEL,
  value: SEVENTH_DAY
}];
// EXTERNAL MODULE: external "tribe.common.data.plugins"
var external_tribe_common_data_plugins_ = __webpack_require__("9lL/");

// CONCATENATED MODULE: ./src/modules/data/blocks/constants.js
//
// ─── BLOCK TYPES ────────────────────────────────────────────────────────────────
//

const RECURRING = 'recurring';
const EXCEPTION = 'exception';
const BLOCK_TYPES = [RECURRING, EXCEPTION];

//
// ─── STATE KEYS ─────────────────────────────────────────────────────────────────
//

const KEY_TYPE = 'type';
const KEY_ALL_DAY = 'all_day';
const KEY_MULTI_DAY = 'multi_day';
const KEY_MULTI_DAY_SPAN = 'multi_day_span';
const KEY_START_TIME = 'start_time';
const KEY_END_TIME = 'end_time';
const KEY_START_TIME_INPUT = '_start_time_input';
const KEY_END_TIME_INPUT = '_end_time_input';
const KEY_START_DATE = 'start_date';
const KEY_START_DATE_INPUT = '_start_date_input';
const KEY_START_DATE_OBJ = '_start_date_obj';
const KEY_END_DATE = 'end_date';
const KEY_END_DATE_INPUT = '_end_date_input';
const KEY_END_DATE_OBJ = '_end_date_obj';
const KEY_LIMIT = 'limit';
const KEY_LIMIT_DATE_INPUT = '_limit_date_input';
const KEY_LIMIT_DATE_OBJ = '_limit_date_obj';
const KEY_LIMIT_TYPE = 'limit_type';
const KEY_BETWEEN = 'between';
const KEY_DAYS = 'days';
const KEY_WEEK = 'week';
const KEY_DAY = 'day';
const KEY_MONTH = 'month';
const KEY_TIMEZONE = 'timezone';
// CONCATENATED MODULE: ./src/modules/data/shared/selectors.js
/* eslint-disable max-len */

/**
 * External dependencies
 */


const getRule = rule => rule;
const getType = Object(external_tribe_modules_reselect_["createSelector"])([getRule], rule => rule[KEY_TYPE]);
const getAllDay = Object(external_tribe_modules_reselect_["createSelector"])([getRule], rule => rule[KEY_ALL_DAY]);
const getMultiDay = Object(external_tribe_modules_reselect_["createSelector"])([getRule], rule => rule[KEY_MULTI_DAY]);
const getMultiDaySpan = Object(external_tribe_modules_reselect_["createSelector"])([getRule], rule => rule[KEY_MULTI_DAY_SPAN]);
const getStartDate = Object(external_tribe_modules_reselect_["createSelector"])([getRule], rule => rule[KEY_START_DATE]);
const getStartDateInput = Object(external_tribe_modules_reselect_["createSelector"])([getRule], rule => rule[KEY_START_DATE_INPUT]);
const getStartDateObj = Object(external_tribe_modules_reselect_["createSelector"])([getRule], rule => rule[KEY_START_DATE_OBJ]);
const getStartTime = Object(external_tribe_modules_reselect_["createSelector"])([getRule], rule => rule[KEY_START_TIME]);
const getStartTimeNoSeconds = Object(external_tribe_modules_reselect_["createSelector"])([getStartTime], startTime => startTime.slice(0, -3));
const getStartTimeInput = Object(external_tribe_modules_reselect_["createSelector"])([getRule], rule => rule[KEY_START_TIME_INPUT]);
const getEndDate = Object(external_tribe_modules_reselect_["createSelector"])([getRule], rule => rule[KEY_END_DATE]);
const getEndDateInput = Object(external_tribe_modules_reselect_["createSelector"])([getRule], rule => rule[KEY_END_DATE_INPUT]);
const getEndDateObj = Object(external_tribe_modules_reselect_["createSelector"])([getRule], rule => rule[KEY_END_DATE_OBJ]);
const getEndTime = Object(external_tribe_modules_reselect_["createSelector"])([getRule], rule => rule[KEY_END_TIME]);
const getEndTimeNoSeconds = Object(external_tribe_modules_reselect_["createSelector"])([getEndTime], endTime => endTime.slice(0, -3));
const getEndTimeInput = Object(external_tribe_modules_reselect_["createSelector"])([getRule], rule => rule[KEY_END_TIME_INPUT]);
const getBetween = Object(external_tribe_modules_reselect_["createSelector"])([getRule], rule => rule[KEY_BETWEEN]);
const getLimitType = Object(external_tribe_modules_reselect_["createSelector"])([getRule], rule => rule[KEY_LIMIT_TYPE]);
const getLimit = Object(external_tribe_modules_reselect_["createSelector"])([getRule], rule => rule[KEY_LIMIT]);
const getLimitDateInput = Object(external_tribe_modules_reselect_["createSelector"])([getRule], rule => rule[KEY_LIMIT_DATE_INPUT]);
const getLimitDateObj = Object(external_tribe_modules_reselect_["createSelector"])([getRule], rule => rule[KEY_LIMIT_DATE_OBJ]);
const getDays = Object(external_tribe_modules_reselect_["createSelector"])([getRule], rule => rule[KEY_DAYS] || []);
const getWeek = Object(external_tribe_modules_reselect_["createSelector"])([getRule], rule => rule[KEY_WEEK]);
const getDay = Object(external_tribe_modules_reselect_["createSelector"])([getRule], rule => rule[KEY_DAY]);
const getMonth = Object(external_tribe_modules_reselect_["createSelector"])([getRule], rule => rule[KEY_MONTH] || []);
const getTimezone = Object(external_tribe_modules_reselect_["createSelector"])([getRule], rule => rule[KEY_TIMEZONE]);
// CONCATENATED MODULE: ./src/modules/data/blocks/recurring/selectors.js

/* eslint-disable max-len */

/**
 * External dependencies
 */

/**
 * Internal dependencies
 */



const getRules = state => state[external_tribe_common_data_plugins_["constants"].EVENTS_PRO_PLUGIN].blocks.recurring;
const getRulesCount = Object(external_tribe_modules_reselect_["createSelector"])(getRules, rules => rules.length);
const selectors_hasRules = Object(external_tribe_modules_reselect_["createSelector"])(getRulesCount, count => !!count);
const getIndex = (_, props) => props.index;
const selectors_getRule = Object(external_tribe_modules_reselect_["createSelector"])([getRules, getIndex], (rules, index) => rules[index]);
const selectors_getType = Object(external_tribe_modules_reselect_["createSelector"])(selectors_getRule, getType);
const selectors_getAllDay = Object(external_tribe_modules_reselect_["createSelector"])(selectors_getRule, getAllDay);
const selectors_getMultiDay = Object(external_tribe_modules_reselect_["createSelector"])(selectors_getRule, getMultiDay);
const selectors_getMultiDaySpan = Object(external_tribe_modules_reselect_["createSelector"])(selectors_getRule, getMultiDaySpan);
const selectors_getStartDate = Object(external_tribe_modules_reselect_["createSelector"])(selectors_getRule, getStartDate);
const selectors_getStartDateObj = Object(external_tribe_modules_reselect_["createSelector"])(selectors_getRule, getStartDateObj);
const selectors_getStartDateInput = Object(external_tribe_modules_reselect_["createSelector"])(selectors_getRule, getStartDateInput);
const selectors_getStartTime = Object(external_tribe_modules_reselect_["createSelector"])(selectors_getRule, getStartTime);
const selectors_getStartTimeNoSeconds = Object(external_tribe_modules_reselect_["createSelector"])(selectors_getRule, getStartTimeNoSeconds);
const selectors_getStartTimeInput = Object(external_tribe_modules_reselect_["createSelector"])(selectors_getRule, getStartTimeInput);
const selectors_getEndDate = Object(external_tribe_modules_reselect_["createSelector"])(selectors_getRule, getEndDate);
const selectors_getEndDateObj = Object(external_tribe_modules_reselect_["createSelector"])(selectors_getRule, getEndDateObj);
const selectors_getEndDateInput = Object(external_tribe_modules_reselect_["createSelector"])(selectors_getRule, getEndDateInput);
const selectors_getEndTime = Object(external_tribe_modules_reselect_["createSelector"])(selectors_getRule, getEndTime);
const selectors_getEndTimeNoSeconds = Object(external_tribe_modules_reselect_["createSelector"])(selectors_getRule, getEndTimeNoSeconds);
const selectors_getEndTimeInput = Object(external_tribe_modules_reselect_["createSelector"])(selectors_getRule, getEndTimeInput);
const selectors_getBetween = Object(external_tribe_modules_reselect_["createSelector"])(selectors_getRule, getBetween);
const selectors_getLimitType = Object(external_tribe_modules_reselect_["createSelector"])(selectors_getRule, getLimitType);
const selectors_getLimit = Object(external_tribe_modules_reselect_["createSelector"])(selectors_getRule, getLimit);
const selectors_getLimitDateObj = Object(external_tribe_modules_reselect_["createSelector"])(selectors_getRule, getLimitDateObj);
const selectors_getLimitDateInput = Object(external_tribe_modules_reselect_["createSelector"])(selectors_getRule, getLimitDateInput);
const selectors_getDays = Object(external_tribe_modules_reselect_["createSelector"])(selectors_getRule, getDays);
const selectors_getDay = Object(external_tribe_modules_reselect_["createSelector"])(selectors_getRule, getDay);
const selectors_getMonth = Object(external_tribe_modules_reselect_["createSelector"])(selectors_getRule, getMonth);
const selectors_getWeek = Object(external_tribe_modules_reselect_["createSelector"])(selectors_getRule, getWeek);
const selectors_getTimezone = Object(external_tribe_modules_reselect_["createSelector"])(selectors_getRule, getTimezone);
const getTypeOption = Object(external_tribe_modules_reselect_["createSelector"])([selectors_getType], type => external_lodash_find_default()(RECURRENCE_TYPE_RULES_OPTIONS, option => option.value === type));
const getLimitTypeOption = Object(external_tribe_modules_reselect_["createSelector"])([selectors_getLimitType], limitType => external_lodash_find_default()(SERIES_ENDS_OPTIONS, option => option.value === limitType));
// EXTERNAL MODULE: external "lodash.keys"
var external_lodash_keys_ = __webpack_require__("HAtF");
var external_lodash_keys_default = /*#__PURE__*/__webpack_require__.n(external_lodash_keys_);

// EXTERNAL MODULE: external "tribe.modules.reduxSaga.effects"
var external_tribe_modules_reduxSaga_effects_ = __webpack_require__("RmXt");

// EXTERNAL MODULE: external "tribe.common.utils.globals"
var external_tribe_common_utils_globals_ = __webpack_require__("kczL");

// EXTERNAL MODULE: external "tribe.events.data"
var external_tribe_events_data_ = __webpack_require__("xD0k");

// EXTERNAL MODULE: external "tribe.common.utils.date"
var external_tribe_common_utils_date_ = __webpack_require__("tbMi");

// CONCATENATED MODULE: ./src/modules/data/shared/sagas.js
/**
 * External dependencies
 */


/**
 * Internal dependencies
 */






const {
  KEY_TYPE: sagas_KEY_TYPE,
  KEY_ALL_DAY: sagas_KEY_ALL_DAY,
  KEY_MULTI_DAY: sagas_KEY_MULTI_DAY,
  KEY_START_TIME: sagas_KEY_START_TIME,
  KEY_END_TIME: sagas_KEY_END_TIME,
  KEY_START_TIME_INPUT: sagas_KEY_START_TIME_INPUT,
  KEY_END_TIME_INPUT: sagas_KEY_END_TIME_INPUT,
  KEY_START_DATE: sagas_KEY_START_DATE,
  KEY_START_DATE_INPUT: sagas_KEY_START_DATE_INPUT,
  KEY_START_DATE_OBJ: sagas_KEY_START_DATE_OBJ,
  KEY_END_DATE: sagas_KEY_END_DATE,
  KEY_END_DATE_INPUT: sagas_KEY_END_DATE_INPUT,
  KEY_END_DATE_OBJ: sagas_KEY_END_DATE_OBJ,
  KEY_LIMIT: sagas_KEY_LIMIT,
  KEY_LIMIT_DATE_INPUT: sagas_KEY_LIMIT_DATE_INPUT,
  KEY_LIMIT_DATE_OBJ: sagas_KEY_LIMIT_DATE_OBJ,
  KEY_LIMIT_TYPE: sagas_KEY_LIMIT_TYPE,
  KEY_BETWEEN: sagas_KEY_BETWEEN,
  KEY_DAYS: sagas_KEY_DAYS,
  KEY_WEEK: sagas_KEY_WEEK,
  KEY_DAY: sagas_KEY_DAY,
  KEY_MONTH: sagas_KEY_MONTH,
  KEY_TIMEZONE: sagas_KEY_TIMEZONE,
  KEY_MULTI_DAY_SPAN: sagas_KEY_MULTI_DAY_SPAN
} = blocks_constants_namespaceObject;
const {
  toMoment,
  toDate,
  toDatabaseDate,
  toDatabaseTime,
  toTime,
  TIME_FORMAT
} = external_tribe_common_utils_["moment"];
const {
  MINUTE_IN_SECONDS,
  HALF_HOUR_IN_SECONDS,
  HOUR_IN_SECONDS,
  DAY_IN_SECONDS,
  TIME_FORMAT_HH_MM,
  toSeconds,
  fromSeconds
} = external_tribe_common_utils_["time"];
function* handleAddition({
  actions
}) {
  const start = yield Object(external_tribe_modules_reduxSaga_effects_["select"])(external_tribe_events_data_["blocks"].datetime.selectors.getStart);
  const end = yield Object(external_tribe_modules_reduxSaga_effects_["select"])(external_tribe_events_data_["blocks"].datetime.selectors.getEnd);
  const allDay = yield Object(external_tribe_modules_reduxSaga_effects_["select"])(external_tribe_events_data_["blocks"].datetime.selectors.getAllDay);
  const multiDay = yield Object(external_tribe_modules_reduxSaga_effects_["select"])(external_tribe_events_data_["blocks"].datetime.selectors.getMultiDay);
  const timezone = yield Object(external_tribe_modules_reduxSaga_effects_["select"])(external_tribe_events_data_["blocks"].datetime.selectors.getTimeZone);
  const startMoment = yield Object(external_tribe_modules_reduxSaga_effects_["call"])(toMoment, start);
  const endMoment = yield Object(external_tribe_modules_reduxSaga_effects_["call"])(toMoment, end);
  const startMomentDate = yield Object(external_tribe_modules_reduxSaga_effects_["call"])([startMoment, 'date']);
  const startWeekNum = yield Object(external_tribe_modules_reduxSaga_effects_["call"])([Math, 'ceil'], startMomentDate / 7);
  const startWeek = WEEK_NUM_MAPPING_TO_WEEKS_OF_THE_MONTH[startWeekNum];
  const startWeekday = yield Object(external_tribe_modules_reduxSaga_effects_["call"])([startMoment, 'isoWeekday']);
  /* startMonth is zero-indexed, January is 0, December is 11 */
  const startMonth = yield Object(external_tribe_modules_reduxSaga_effects_["call"])([startMoment, 'month']);
  const startDate = yield Object(external_tribe_modules_reduxSaga_effects_["call"])(toDatabaseDate, startMoment);
  const startTime = yield Object(external_tribe_modules_reduxSaga_effects_["call"])(toDatabaseTime, startMoment);
  const endDate = yield Object(external_tribe_modules_reduxSaga_effects_["call"])(toDatabaseDate, endMoment);
  const endTime = yield Object(external_tribe_modules_reduxSaga_effects_["call"])(toDatabaseTime, endMoment);
  const startDateInput = yield Object(external_tribe_modules_reduxSaga_effects_["call"])(toDate, startMoment);
  const startDateObj = new Date(startDateInput);
  const endDateInput = yield Object(external_tribe_modules_reduxSaga_effects_["call"])(toDate, endMoment);
  const endDateObj = new Date(endDateInput);
  const startTimeInput = yield Object(external_tribe_modules_reduxSaga_effects_["call"])(toTime, startMoment);
  const endTimeInput = yield Object(external_tribe_modules_reduxSaga_effects_["call"])(toTime, endMoment);
  let numDaySpan = yield Object(external_tribe_modules_reduxSaga_effects_["call"])([endMoment, 'diff'], startMoment, 'days');
  if (numDaySpan > 7) {
    numDaySpan = 7;
  } else if (numDaySpan < 1) {
    numDaySpan = 1;
  }
  const multiDaySpan = NUM_DAY_SPAN_MAPPING_TO_MULTI_DAY_SPAN[numDaySpan];
  yield Object(external_tribe_modules_reduxSaga_effects_["put"])(actions.add({
    [sagas_KEY_TYPE]: SINGLE,
    [sagas_KEY_ALL_DAY]: allDay,
    [sagas_KEY_MULTI_DAY]: multiDay,
    [sagas_KEY_START_DATE]: startDate,
    [sagas_KEY_START_DATE_INPUT]: startDateInput,
    [sagas_KEY_START_DATE_OBJ]: startDateObj,
    [sagas_KEY_START_TIME]: startTime,
    [sagas_KEY_START_TIME_INPUT]: startTimeInput,
    [sagas_KEY_END_DATE]: endDate,
    [sagas_KEY_END_DATE_INPUT]: endDateInput,
    [sagas_KEY_END_DATE_OBJ]: endDateObj,
    [sagas_KEY_END_TIME]: endTime,
    [sagas_KEY_END_TIME_INPUT]: endTimeInput,
    [sagas_KEY_BETWEEN]: 1,
    [sagas_KEY_LIMIT_TYPE]: Object(external_tribe_common_utils_globals_["pro"])().blocks_recurrence_rules.key_limit_type,
    [sagas_KEY_LIMIT]: Object(external_tribe_common_utils_globals_["pro"])().blocks_recurrence_rules.key_limit,
    [sagas_KEY_LIMIT_DATE_INPUT]: endDateInput,
    [sagas_KEY_LIMIT_DATE_OBJ]: endDateObj,
    [sagas_KEY_DAYS]: [startWeekday],
    [sagas_KEY_WEEK]: startWeek,
    [sagas_KEY_DAY]: startWeekday,
    /* KEY_MONTH is one-indexed, January is 1, December is 12 */
    [sagas_KEY_MONTH]: [startMonth + 1],
    [sagas_KEY_TIMEZONE]: timezone,
    [sagas_KEY_MULTI_DAY_SPAN]: multiDaySpan
  }));
}
function* handleTimeChange({
  actions,
  selectors
}, action, key) {
  const payloadTime = action.payload[key];
  const isAllDay = payloadTime === 'all-day';
  const isMultiDay = yield Object(external_tribe_modules_reduxSaga_effects_["select"])(selectors.getMultiDay, action);
  if (isAllDay) {
    yield Object(external_tribe_modules_reduxSaga_effects_["put"])(actions.sync(action.index, {
      [sagas_KEY_ALL_DAY]: isAllDay,
      [sagas_KEY_START_TIME]: '00:00:00',
      [sagas_KEY_END_TIME]: '23:59:59'
    }));
  } else if (!isMultiDay) {
    const isStartTime = key === sagas_KEY_START_TIME;
    const isEndTime = key === sagas_KEY_END_TIME;
    const startTime = isStartTime ? payloadTime : yield Object(external_tribe_modules_reduxSaga_effects_["select"])(selectors.getStartTimeNoSeconds, action);
    const endTime = isEndTime ? payloadTime : yield Object(external_tribe_modules_reduxSaga_effects_["select"])(selectors.getEndTimeNoSeconds, action);

    // This put needs to be here to prevent incorrect time formats when 'adjusting'
    // as it will not adjust in all cases
    yield Object(external_tribe_modules_reduxSaga_effects_["put"])(actions.sync(action.index, {
      [sagas_KEY_ALL_DAY]: isAllDay,
      [key]: `${payloadTime}:00`
    }));
    isStartTime ? yield Object(external_tribe_modules_reduxSaga_effects_["call"])(preventEndTimeBeforeStartTime, {
      actions
    }, {
      startTime,
      endTime
    }, action) : yield Object(external_tribe_modules_reduxSaga_effects_["call"])(preventStartTimeAfterEndTime, {
      actions
    }, {
      startTime,
      endTime
    }, action);
  } else {
    yield Object(external_tribe_modules_reduxSaga_effects_["put"])(actions.sync(action.index, {
      [sagas_KEY_ALL_DAY]: isAllDay,
      [key]: `${payloadTime}:00`
    }));
  }
  yield Object(external_tribe_modules_reduxSaga_effects_["call"])(handleTimeInput, {
    actions,
    selectors
  }, action, key);
}
function* handleTimeInput({
  actions,
  selectors
}, action, key) {
  const payloadTime = action.payload[key];
  const isAllDay = payloadTime === 'all-day';
  let startTimeMoment, endTimeMoment;
  if (isAllDay) {
    startTimeMoment = yield Object(external_tribe_modules_reduxSaga_effects_["call"])(toMoment, '00:00', TIME_FORMAT, false);
    endTimeMoment = yield Object(external_tribe_modules_reduxSaga_effects_["call"])(toMoment, '23:59', TIME_FORMAT, false);
  } else {
    const startTime = yield Object(external_tribe_modules_reduxSaga_effects_["select"])(selectors.getStartTimeNoSeconds, action);
    const endTime = yield Object(external_tribe_modules_reduxSaga_effects_["select"])(selectors.getEndTimeNoSeconds, action);
    startTimeMoment = yield Object(external_tribe_modules_reduxSaga_effects_["call"])(toMoment, startTime, TIME_FORMAT, false);
    endTimeMoment = yield Object(external_tribe_modules_reduxSaga_effects_["call"])(toMoment, endTime, TIME_FORMAT, false);
  }
  const startTimeInput = yield Object(external_tribe_modules_reduxSaga_effects_["call"])(toTime, startTimeMoment);
  const endTimeInput = yield Object(external_tribe_modules_reduxSaga_effects_["call"])(toTime, endTimeMoment);
  yield Object(external_tribe_modules_reduxSaga_effects_["put"])(actions.sync(action.index, {
    [sagas_KEY_START_TIME_INPUT]: startTimeInput,
    [sagas_KEY_END_TIME_INPUT]: endTimeInput
  }));
}
function* handleMultiDayChange({
  actions,
  selectors
}, action, key) {
  const isMultiDay = action.payload[key];
  if (!isMultiDay) {
    const startTime = yield Object(external_tribe_modules_reduxSaga_effects_["select"])(selectors.getStartTimeNoSeconds, action);
    const endTime = yield Object(external_tribe_modules_reduxSaga_effects_["select"])(selectors.getEndTimeNoSeconds, action);
    yield Object(external_tribe_modules_reduxSaga_effects_["call"])(preventEndTimeBeforeStartTime, {
      actions
    }, {
      startTime,
      endTime
    }, action);
    yield Object(external_tribe_modules_reduxSaga_effects_["call"])(handleTimeInput, {
      actions,
      selectors
    }, action, key);
  }
}

/**
 * Prevents end time from being before start time.
 * Should only prevent when not a multi-day event.
 *
 * @export
 * @yields
 * @param {object} sagaArgs Arguments for sagas
 * @param {object} sagaArgs.actions Actions for syncing
 * @param {object} times Object with start and end time
 * @param {string} times.startTime The start time
 * @param {string} times.endTime The end time
 * @param {object} action Action received
 */
function* preventEndTimeBeforeStartTime({
  actions
}, {
  startTime,
  endTime
}, action) {
  let startTimeSeconds = yield Object(external_tribe_modules_reduxSaga_effects_["call"])(toSeconds, startTime, TIME_FORMAT_HH_MM);
  let endTimeSeconds = yield Object(external_tribe_modules_reduxSaga_effects_["call"])(toSeconds, endTime, TIME_FORMAT_HH_MM);

  // If end time is earlier than start time, fix time
  if (endTimeSeconds <= startTimeSeconds) {
    // If there is less than half an hour left in the day, roll back one hour
    if (startTimeSeconds + HALF_HOUR_IN_SECONDS >= DAY_IN_SECONDS) {
      startTimeSeconds -= HOUR_IN_SECONDS;
    }
    endTimeSeconds = startTimeSeconds + HALF_HOUR_IN_SECONDS;
    const adjustedStartTime = yield Object(external_tribe_modules_reduxSaga_effects_["call"])(fromSeconds, startTimeSeconds, TIME_FORMAT_HH_MM);
    const adjustedEndTime = yield Object(external_tribe_modules_reduxSaga_effects_["call"])(fromSeconds, endTimeSeconds, TIME_FORMAT_HH_MM);
    yield Object(external_tribe_modules_reduxSaga_effects_["put"])(actions.sync(action.index, {
      [sagas_KEY_START_TIME]: `${adjustedStartTime}:00`,
      [sagas_KEY_END_TIME]: `${adjustedEndTime}:00`
    }));
  }
}

/**
 * Prevents start time from appearing ahead of end time.
 * Should only prevent when not a multi-day event.
 *
 * @export
 * @yields
 * @param {object} sagaArgs Arguments for sagas
 * @param {object} sagaArgs.actions Actions for syncing
 * @param {object} times Object with start and end time
 * @param {string} times.startTime The start time
 * @param {string} times.endTime The end time
 * @param {object} action Action received
 */
function* preventStartTimeAfterEndTime({
  actions
}, {
  startTime,
  endTime
}, action) {
  let startTimeSeconds = yield Object(external_tribe_modules_reduxSaga_effects_["call"])(toSeconds, startTime, TIME_FORMAT_HH_MM);
  let endTimeSeconds = yield Object(external_tribe_modules_reduxSaga_effects_["call"])(toSeconds, endTime, TIME_FORMAT_HH_MM);
  if (startTimeSeconds >= endTimeSeconds) {
    startTimeSeconds = Math.max(endTimeSeconds - HALF_HOUR_IN_SECONDS, 0);
    endTimeSeconds = Math.max(startTimeSeconds + MINUTE_IN_SECONDS, endTimeSeconds);
    const adjustedStartTime = yield Object(external_tribe_modules_reduxSaga_effects_["call"])(fromSeconds, startTimeSeconds, TIME_FORMAT_HH_MM);
    const adjustedEndTime = yield Object(external_tribe_modules_reduxSaga_effects_["call"])(fromSeconds, endTimeSeconds, TIME_FORMAT_HH_MM);
    yield Object(external_tribe_modules_reduxSaga_effects_["put"])(actions.sync(action.index, {
      [sagas_KEY_START_TIME]: `${adjustedStartTime}:00`,
      [sagas_KEY_END_TIME]: `${adjustedEndTime}:00`
    }));
  }
}
function* handleWeekChange({
  actions,
  selectors
}, action, key) {
  const payloadWeek = action.payload[key];
  const weekWasNull = !(yield Object(external_tribe_modules_reduxSaga_effects_["select"])(selectors.getWeek, action));
  if (payloadWeek && weekWasNull) {
    yield Object(external_tribe_modules_reduxSaga_effects_["put"])(actions.sync(action.index, {
      [key]: payloadWeek,
      [sagas_KEY_DAY]: 1
    }));
  }
}
function* handleLimitTypeChange({
  actions
}, action, key) {
  const value = action.payload[key];
  const isDate = value === DATE;
  const isCount = value === COUNT;
  if (isDate) {
    const todayMoment = yield Object(external_tribe_modules_reduxSaga_effects_["call"])(toMoment, external_tribe_common_utils_date_["TODAY"]);
    // @todo Have a single place to reference this default value. Currently logic is duplicated.
    const limitDateMoment = yield Object(external_tribe_modules_reduxSaga_effects_["call"])([todayMoment, 'add'], 1, 'year');
    const startDate = yield Object(external_tribe_modules_reduxSaga_effects_["call"])(toDatabaseDate, limitDateMoment);
    yield Object(external_tribe_modules_reduxSaga_effects_["put"])(actions.sync(action.index, {
      [KEY_LIMIT]: startDate
    }));
  } else if (isCount) {
    yield Object(external_tribe_modules_reduxSaga_effects_["put"])(actions.sync(action.index, {
      [KEY_LIMIT]: 10
    }));
  } else {
    // Never ending
    yield Object(external_tribe_modules_reduxSaga_effects_["put"])(actions.sync(action.index, {
      [KEY_LIMIT]: null
    }));
  }
}
function* handleTimezoneChange({
  actions
}, action, key) {
  yield Object(external_tribe_modules_reduxSaga_effects_["put"])(actions.sync(action.index, {
    [KEY_TIMEZONE]: action.payload[key]
  }));
}
// CONCATENATED MODULE: ./src/modules/data/blocks/recurring/sagas.js


function sagas_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function sagas_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? sagas_ownKeys(Object(t), !0).forEach(function (r) { defineProperty_default()(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : sagas_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */






const sagaArgs = {
  actions: {
    add: addRule,
    sync: syncRule
  },
  selectors: recurring_selectors_namespaceObject
};
function* handleRuleEdit(action) {
  // Prevent rule syncs from looping
  if (action.sync) {
    return;
  }
  const fieldKeys = yield Object(external_tribe_modules_reduxSaga_effects_["call"])(external_lodash_keys_default.a, action.payload);
  for (let i = 0; i < fieldKeys.length; i++) {
    const fieldKey = fieldKeys[i];
    switch (fieldKey) {
      case KEY_START_TIME:
      case KEY_END_TIME:
        yield Object(external_tribe_modules_reduxSaga_effects_["call"])(handleTimeChange, sagaArgs, action, fieldKey);
        break;
      case KEY_MULTI_DAY:
        yield Object(external_tribe_modules_reduxSaga_effects_["call"])(handleMultiDayChange, sagaArgs, action, fieldKey);
        break;
      case KEY_WEEK:
        yield Object(external_tribe_modules_reduxSaga_effects_["call"])(handleWeekChange, sagaArgs, action, fieldKey);
        break;
      case KEY_LIMIT_TYPE:
        yield Object(external_tribe_modules_reduxSaga_effects_["call"])(handleLimitTypeChange, sagaArgs, action, fieldKey);
        break;
      default:
        break;
    }
  }
}
function* syncRules(action) {
  const rules = yield Object(external_tribe_modules_reduxSaga_effects_["select"])(getRules);
  for (let i = 0; i < rules.length; i++) {
    const _action = sagas_objectSpread({
      index: i
    }, action);
    switch (action.type) {
      case external_tribe_events_data_["blocks"].datetime.types.SET_TIME_ZONE:
        yield Object(external_tribe_modules_reduxSaga_effects_["call"])(handleTimezoneChange, sagaArgs, _action, 'timeZone');
        break;
      default:
        break;
    }
  }
}
function* watchers() {
  yield Object(external_tribe_modules_reduxSaga_effects_["takeEvery"])([ADD_RULE_FIELD], handleAddition, sagaArgs);
  yield Object(external_tribe_modules_reduxSaga_effects_["takeEvery"])([EDIT_RULE], handleRuleEdit);
  yield Object(external_tribe_modules_reduxSaga_effects_["takeEvery"])([external_tribe_events_data_["blocks"].datetime.types.SET_TIME_ZONE], syncRules);
}
// CONCATENATED MODULE: ./src/modules/data/blocks/recurring/index.js
/**
 * Internal dependencies
 */







/* harmony default export */ var blocks_recurring = (recurring);

// CONCATENATED MODULE: ./src/modules/data/blocks/exception/types.js
/* eslint-disable max-len */
/**
 * Internal dependencies
 */

const ADD_EXCEPTION_FIELD = `${PREFIX_EVENTS_PRO_STORE}/ADD_EXCEPTION_FIELD`;
const ADD_EXCEPTION = `${PREFIX_EVENTS_PRO_STORE}/ADD_EXCEPTION`;
const REMOVE_EXCEPTION_FIELD = `${PREFIX_EVENTS_PRO_STORE}/REMOVE_EXCEPTION_FIELD`;
const REMOVE_EXCEPTION = `${PREFIX_EVENTS_PRO_STORE}/REMOVE_EXCEPTION`;
const EDIT_EXCEPTION = `${PREFIX_EVENTS_PRO_STORE}/EDIT_EXCEPTION`;
const SYNC_EXCEPTIONS_FROM_DB = `${PREFIX_EVENTS_PRO_STORE}/SYNC_EXCEPTIONS_FROM_DB`;
// CONCATENATED MODULE: ./src/modules/data/blocks/exception/reducer.js
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */

function exception_reducer_edit(state, action) {
  const field = Object.assign({}, state[action.index], action.payload);
  if (state.length === 1) {
    return [field];
  }
  return [...state.slice(0, action.index), field, ...state.slice(action.index + 1)];
}
function reducer_exception(state = [], action) {
  switch (action.type) {
    case ADD_EXCEPTION:
      return [...state, action.payload];
    case EDIT_EXCEPTION:
      return exception_reducer_edit(state, action);
    case REMOVE_EXCEPTION:
      return state.filter((_, index) => index !== action.index);
    case SYNC_EXCEPTIONS_FROM_DB:
      return JSON.parse(action.payload);
    default:
      return state;
  }
}
// CONCATENATED MODULE: ./src/modules/data/blocks/exception/actions.js

/**
 * External dependencies
 */
/**
 * Internal dependencies
 */

const exception_actions_addField = () => ({
  type: ADD_EXCEPTION_FIELD
});
const addException = payload => ({
  type: ADD_EXCEPTION,
  payload
});
const actions_removeField = () => ({
  type: REMOVE_EXCEPTION_FIELD
});
const actions_removeException = index => ({
  type: REMOVE_EXCEPTION,
  index
});
const editException = external_lodash_curry_default()((index, payload) => ({
  type: EDIT_EXCEPTION,
  index,
  payload
}));
const syncException = external_lodash_curry_default()((index, payload) => ({
  type: EDIT_EXCEPTION,
  index,
  payload,
  sync: true
}));
const syncExceptionsFromDB = payload => ({
  type: SYNC_EXCEPTIONS_FROM_DB,
  payload
});
// CONCATENATED MODULE: ./src/modules/data/blocks/exception/options.js
/**
 * External Dependencies
 */


/**
 * Internal Dependencies
 */

const EXCEPTION_OCCURRENCE_OPTIONS = [{
  label: Object(external_wp_i18n_["__"])('Daily', 'tribe-events-calendar-pro'),
  value: DAILY
}, {
  label: Object(external_wp_i18n_["__"])('Weekly', 'tribe-events-calendar-pro'),
  value: WEEKLY
}, {
  label: Object(external_wp_i18n_["__"])('Monthly', 'tribe-events-calendar-pro'),
  value: MONTHLY
}, {
  label: Object(external_wp_i18n_["__"])('Yearly', 'tribe-events-calendar-pro'),
  value: YEARLY
}, {
  label: Object(external_wp_i18n_["__"])('Single Exception', 'tribe-events-calendar-pro'),
  value: SINGLE
}];
// CONCATENATED MODULE: ./src/modules/data/blocks/exception/selectors.js

/**
 * External dependencies
 */

/**
 * Internal dependencies
 */




const getExceptions = state => state[external_tribe_common_data_plugins_["constants"].EVENTS_PRO_PLUGIN].blocks.exception;
const selectors_getRules = getExceptions;
const getExceptionsCount = Object(external_tribe_modules_reselect_["createSelector"])(getExceptions, exceptions => exceptions.length);
const selectors_hasExceptions = Object(external_tribe_modules_reselect_["createSelector"])(getExceptionsCount, count => !!count);
const selectors_getIndex = (_, props) => props.index;
const exception_selectors_getRule = Object(external_tribe_modules_reselect_["createSelector"])([getExceptions, selectors_getIndex], (exceptions, index) => exceptions[index]);
const exception_selectors_getType = Object(external_tribe_modules_reselect_["createSelector"])(exception_selectors_getRule, getType);
const exception_selectors_getAllDay = Object(external_tribe_modules_reselect_["createSelector"])(exception_selectors_getRule, getAllDay);
const exception_selectors_getMultiDay = Object(external_tribe_modules_reselect_["createSelector"])(exception_selectors_getRule, getMultiDay);
const exception_selectors_getMultiDaySpan = Object(external_tribe_modules_reselect_["createSelector"])(exception_selectors_getRule, getMultiDaySpan);
const exception_selectors_getStartDate = Object(external_tribe_modules_reselect_["createSelector"])(exception_selectors_getRule, getStartDate);
const exception_selectors_getStartDateObj = Object(external_tribe_modules_reselect_["createSelector"])(exception_selectors_getRule, getStartDateObj);
const exception_selectors_getStartDateInput = Object(external_tribe_modules_reselect_["createSelector"])(exception_selectors_getRule, getStartDateInput);
const exception_selectors_getStartTime = Object(external_tribe_modules_reselect_["createSelector"])(exception_selectors_getRule, getStartTime);
const exception_selectors_getStartTimeNoSeconds = Object(external_tribe_modules_reselect_["createSelector"])(exception_selectors_getRule, getStartTimeNoSeconds);
const exception_selectors_getStartTimeInput = Object(external_tribe_modules_reselect_["createSelector"])(exception_selectors_getRule, getStartTimeInput);
const exception_selectors_getEndDate = Object(external_tribe_modules_reselect_["createSelector"])(exception_selectors_getRule, getEndDate);
const exception_selectors_getEndDateObj = Object(external_tribe_modules_reselect_["createSelector"])(exception_selectors_getRule, getEndDateObj);
const exception_selectors_getEndDateInput = Object(external_tribe_modules_reselect_["createSelector"])(exception_selectors_getRule, getEndDateInput);
const exception_selectors_getEndTime = Object(external_tribe_modules_reselect_["createSelector"])(exception_selectors_getRule, getEndTime);
const exception_selectors_getEndTimeNoSeconds = Object(external_tribe_modules_reselect_["createSelector"])(exception_selectors_getRule, getEndTimeNoSeconds);
const exception_selectors_getEndTimeInput = Object(external_tribe_modules_reselect_["createSelector"])(exception_selectors_getRule, getEndTimeInput);
const exception_selectors_getBetween = Object(external_tribe_modules_reselect_["createSelector"])(exception_selectors_getRule, getBetween);
const exception_selectors_getLimitType = Object(external_tribe_modules_reselect_["createSelector"])(exception_selectors_getRule, getLimitType);
const exception_selectors_getLimit = Object(external_tribe_modules_reselect_["createSelector"])(exception_selectors_getRule, getLimit);
const exception_selectors_getLimitDateObj = Object(external_tribe_modules_reselect_["createSelector"])(exception_selectors_getRule, getLimitDateObj);
const exception_selectors_getLimitDateInput = Object(external_tribe_modules_reselect_["createSelector"])(exception_selectors_getRule, getLimitDateInput);
const exception_selectors_getDays = Object(external_tribe_modules_reselect_["createSelector"])(exception_selectors_getRule, getDays);
const exception_selectors_getDay = Object(external_tribe_modules_reselect_["createSelector"])(exception_selectors_getRule, getDay);
const exception_selectors_getMonth = Object(external_tribe_modules_reselect_["createSelector"])(exception_selectors_getRule, getMonth);
const exception_selectors_getWeek = Object(external_tribe_modules_reselect_["createSelector"])(exception_selectors_getRule, getWeek);
const exception_selectors_getTimezone = Object(external_tribe_modules_reselect_["createSelector"])(exception_selectors_getRule, getTimezone);
const selectors_getTypeOption = Object(external_tribe_modules_reselect_["createSelector"])([exception_selectors_getType], type => external_lodash_find_default()(EXCEPTION_OCCURRENCE_OPTIONS, option => option.value === type));
const selectors_getLimitTypeOption = Object(external_tribe_modules_reselect_["createSelector"])([exception_selectors_getLimitType], limitType => external_lodash_find_default()(SERIES_ENDS_OPTIONS, option => option.value === limitType));
// CONCATENATED MODULE: ./src/modules/data/blocks/virtual-event/reducer.js
/**
 * Internal dependencies
 */

const defaultStateToMetaMap = {};
const setInitialState = data => {}; // eslint-disable-line no-unused-vars

const DEFAULT_STATE = {};
/* harmony default export */ var reducer = ((state = DEFAULT_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
});
// EXTERNAL MODULE: ./src/modules/data/blocks/virtual-event/selectors.js
var virtual_event_selectors = __webpack_require__("08tH");

// EXTERNAL MODULE: ./src/modules/data/blocks/virtual-event/actions.js
var virtual_event_actions = __webpack_require__("Tr2V");

// EXTERNAL MODULE: ./src/modules/data/blocks/virtual-event/types.js
var types = __webpack_require__("mZj9");

// CONCATENATED MODULE: ./src/modules/data/blocks/virtual-event/subscribers.js
/**
 * WordPress dependencies
 */


/**
 * Get blocks list from the block editor.
 *
 * @return {Array} The list of blocks in the block editor.
 */
const getBlockList = () => wp.data.select('core/block-editor').getBlocks();
let blockList = getBlockList();

/**
 * Listener for blocks change in the editor.
 *
 * @return {void}
 */
const onBlocksChangeListener = () => {
  const newBlockList = getBlockList();

  // Checks whether the virtual event block already exists.
  const virtualEventBlockExists = blockList.find(block => block.name === 'tribe/virtual-event');
  if (newBlockList.length < blockList.length &&
  // if the value is undefined it means that the VE block doesn't exist so we should bail.
  virtualEventBlockExists !== undefined && newBlockList.every(block => block.name !== 'tribe/virtual-event') && !tribe.events.metaboxDelete // checks if the virtual metabox has been deleted
  ) {
    alert(Object(external_wp_i18n_["__"])('Virtual event block deleted successfully.' + '\n\nPlease note the Virtual event details are still visible in their default location.' + '\n\nTo completely hide/remove these details, ' + 'please delete the Virtual Event meta box at the bottom of this page.', 'tribe-events-calendar-pro'));
  }
  blockList = newBlockList;
};

/**
 * @function subscribe
 * @description This subscribes to any changes in the wp data store.
 *              Since state and attribute changes should not be called
 *              in `componentDidMount()` and `componentWillUnmount()`,
 *              global state changes (tribe common store) and meta changes
 *              are handled in a global subscriber.
 */
const subscribe = () => {
  wp.data.subscribe(onBlocksChangeListener);
};
/* harmony default export */ var subscribers = (subscribe);
// CONCATENATED MODULE: ./src/modules/data/blocks/virtual-event/index.js
/**
 * Internal dependencies
 */





/* harmony default export */ var virtual_event = (reducer);

// EXTERNAL MODULE: external "lodash.omit"
var external_lodash_omit_ = __webpack_require__("2TDg");
var external_lodash_omit_default = /*#__PURE__*/__webpack_require__.n(external_lodash_omit_);

// CONCATENATED MODULE: ./src/modules/data/blocks/additional-fields/types.js
/**
 * Internal dependencies
 */

const ADD_ADDITIONAL_FIELD = `${PREFIX_EVENTS_PRO_STORE}/ADD_ADDITIONAL_FIELD`;
const REMOVE_ADDITIONAL_FIELD = `${PREFIX_EVENTS_PRO_STORE}/REMOVE_ADDITIONAL_FIELD`;
const SET_ADDITIONAL_FIELD_LABEL = `${PREFIX_EVENTS_PRO_STORE}/SET_ADDITIONAL_FIELD_LABEL`;
const SET_ADDITIONAL_FIELD_VALUE = `${PREFIX_EVENTS_PRO_STORE}/SET_ADDITIONAL_FIELD_VALUE`;
// CONCATENATED MODULE: ./src/modules/data/blocks/additional-fields/reducers/fields/field.js

function field_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function field_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? field_ownKeys(Object(t), !0).forEach(function (r) { defineProperty_default()(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : field_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
/**
 * Internal dependencies
 */

const field_DEFAULT_STATE = {
  value: '',
  label: '',
  options: []
};
/* harmony default export */ var fields_field = ((state = field_DEFAULT_STATE, action) => {
  const {
    payload = {}
  } = action;
  switch (action.type) {
    case additional_fields_types_namespaceObject.SET_ADDITIONAL_FIELD_LABEL:
      return field_objectSpread(field_objectSpread({}, state), {}, {
        label: payload.label
      });
    case additional_fields_types_namespaceObject.SET_ADDITIONAL_FIELD_VALUE:
      return field_objectSpread(field_objectSpread({}, state), {}, {
        value: payload.value
      });
    default:
      return state;
  }
});
// EXTERNAL MODULE: external "tribe.common.utils.string"
var external_tribe_common_utils_string_ = __webpack_require__("3lI2");

// CONCATENATED MODULE: ./src/modules/data/blocks/additional-fields/reducers/fields.js

function fields_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function fields_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? fields_ownKeys(Object(t), !0).forEach(function (r) { defineProperty_default()(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : fields_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
/**
 * External dependencies
 */


/**
 * Internal dependencies
 */




const fields_DEFAULT_STATE = {};
const fields_setInitialState = data => {
  const {
    meta
  } = data;
  external_tribe_common_utils_["globals"].pro().additional_fields.forEach(additionalField => {
    const {
      name,
      label,
      values
    } = additionalField;
    const key = `tribe/field-${Object(external_tribe_common_utils_string_["toBlockName"])(name)}`;
    const newField = fields_objectSpread({}, fields_field(undefined, {}));
    newField.label = label;
    if (meta && meta.hasOwnProperty(name)) {
      newField.value = meta[name];
    }
    if (Array.isArray(values)) {
      newField.options = values;
    }
    fields_DEFAULT_STATE[key] = newField;
  });
};
/* harmony default export */ var reducers_fields = ((state = fields_DEFAULT_STATE, action) => {
  const {
    payload = {}
  } = action;
  switch (action.type) {
    case ADD_ADDITIONAL_FIELD:
    case SET_ADDITIONAL_FIELD_VALUE:
    case SET_ADDITIONAL_FIELD_LABEL:
      return fields_objectSpread(fields_objectSpread({}, state), {}, {
        [payload.name]: fields_field(state[payload.name], action)
      });
    case REMOVE_ADDITIONAL_FIELD:
      return external_lodash_omit_default()(state, [payload.name]);
    default:
      return state;
  }
});
// CONCATENATED MODULE: ./src/modules/data/blocks/additional-fields/reducers/index.js
/**
 * Internal dependencies
 */

/* harmony default export */ var reducers = (reducers_fields);

// CONCATENATED MODULE: ./src/modules/data/blocks/additional-fields/actions.js
/**
 * Internal dependencies
 */

const additional_fields_actions_addField = name => ({
  type: additional_fields_types_namespaceObject.ADD_ADDITIONAL_FIELD,
  payload: {
    name
  }
});
const additional_fields_actions_removeField = name => ({
  type: additional_fields_types_namespaceObject.REMOVE_ADDITIONAL_FIELD,
  payload: {
    name
  }
});
const setFieldLabel = (name, label) => ({
  type: additional_fields_types_namespaceObject.SET_ADDITIONAL_FIELD_LABEL,
  payload: {
    name,
    label
  }
});
const setFieldValue = (name, value) => ({
  type: additional_fields_types_namespaceObject.SET_ADDITIONAL_FIELD_VALUE,
  payload: {
    name,
    value
  }
});
// EXTERNAL MODULE: external "lodash.includes"
var external_lodash_includes_ = __webpack_require__("Etll");
var external_lodash_includes_default = /*#__PURE__*/__webpack_require__.n(external_lodash_includes_);

// EXTERNAL MODULE: external "lodash.uniq"
var external_lodash_uniq_ = __webpack_require__("Ti3b");
var external_lodash_uniq_default = /*#__PURE__*/__webpack_require__.n(external_lodash_uniq_);

// EXTERNAL MODULE: external "tribe.modules.propTypes"
var external_tribe_modules_propTypes_ = __webpack_require__("rf6O");
var external_tribe_modules_propTypes_default = /*#__PURE__*/__webpack_require__.n(external_tribe_modules_propTypes_);

// EXTERNAL MODULE: ./node_modules/sprintf-js/src/sprintf.js
var sprintf = __webpack_require__("4Z/T");

// EXTERNAL MODULE: external "wp.components"
var external_wp_components_ = __webpack_require__("tI+e");

// CONCATENATED MODULE: ./src/modules/blocks/additional-fields/elements/settings/template.js
/**
 * External dependencies
 */




/**
 * Wordpress dependencies
 */



/**
 * Internal dependencies
 */

const {
  InspectorControls
} = external_tribe_common_utils_globals_["wpEditor"];
const Settings = ({
  name,
  before,
  after,
  settingsLink
}) => wp.element.createElement(InspectorControls, {
  key: "inspector"
}, before, wp.element.createElement(external_wp_components_["PanelBody"], {
  title: Object(sprintf["sprintf"])(Object(external_wp_i18n_["__"])('%1$s Settings', 'tribe-events-calendar-pro'), name)
}, !!settingsLink && wp.element.createElement("span", null, Object(external_wp_i18n_["__"])('Adjust this block’s options under Events → Settings → ', 'tribe-events-calendar-pro'), wp.element.createElement("a", {
  href: settingsLink,
  target: "_blank",
  rel: "noreferrer noopener"
}, Object(external_wp_i18n_["__"])('Additional Fields', 'tribe-events-calendar-pro')))), after);
Settings.propTypes = {
  before: external_tribe_modules_propTypes_default.a.node,
  name: external_tribe_modules_propTypes_default.a.string.isRequired,
  settingsLink: external_tribe_modules_propTypes_default.a.string,
  after: external_tribe_modules_propTypes_default.a.node
};
/* harmony default export */ var template = (Settings);
// CONCATENATED MODULE: ./src/modules/blocks/additional-fields/elements/settings/container.js
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */




/**
 * @todo get data from a selector
 */
const getSettingsLink = () => {
  return external_tribe_common_utils_["globals"].pro().additional_fields_tab || '';
};
const mapStateToProps = () => ({
  settingsLink: getSettingsLink()
});
/* harmony default export */ var container = (Object(external_tribe_modules_redux_["compose"])(Object(external_tribe_common_hoc_["withStore"])(), Object(external_tribe_modules_reactRedux_["connect"])(mapStateToProps))(template));
// CONCATENATED MODULE: ./src/modules/blocks/additional-fields/elements/settings/index.js
/**
 * Internal dependencies
 */

/* harmony default export */ var elements_settings = (container);
// EXTERNAL MODULE: external "tribe.modules.classnames"
var external_tribe_modules_classnames_ = __webpack_require__("K2gz");
var external_tribe_modules_classnames_default = /*#__PURE__*/__webpack_require__.n(external_tribe_modules_classnames_);

// EXTERNAL MODULE: external "lodash.isArray"
var external_lodash_isArray_ = __webpack_require__("e5yv");
var external_lodash_isArray_default = /*#__PURE__*/__webpack_require__.n(external_lodash_isArray_);

// EXTERNAL MODULE: external "tribe.common.elements"
var external_tribe_common_elements_ = __webpack_require__("6Ugf");

// EXTERNAL MODULE: ./src/modules/blocks/additional-fields/elements/preview/style.pcss
var style = __webpack_require__("fcXm");

// CONCATENATED MODULE: ./src/modules/blocks/additional-fields/elements/preview/element.js
/**
 * External dependencies
 */





/**
 * Internal dependencies
 */


const Preview = ({
  name,
  children,
  className
}) => {
  /**
   * Pass the control into the caller to decide how to render each child on an array, can be
   * a set of multiple paragraphs and to avoid the need to group a set of paragraphs inside another
   * we leave the control to the caller if is an array.
   */
  const body = external_lodash_isArray_default()(children) ? children : wp.element.createElement(external_tribe_common_elements_["Paragraph"], null, children);
  return wp.element.createElement("div", {
    className: external_tribe_modules_classnames_default()('tribe-editor__additional-fields__preview', className)
  }, wp.element.createElement(external_tribe_common_elements_["Heading"], {
    level: 3,
    className: "tribe-editor__additional-fields__preview-title"
  }, name), body);
};
Preview.propTypes = {
  name: external_tribe_modules_propTypes_default.a.string.isRequired,
  children: external_tribe_modules_propTypes_default.a.node.isRequired
};
/* harmony default export */ var preview_element = (Preview);
// CONCATENATED MODULE: ./src/modules/blocks/additional-fields/elements/preview/index.js
/**
 * Internal dependencies
 */

/* harmony default export */ var preview = (preview_element);
// EXTERNAL MODULE: ./src/modules/blocks/additional-fields/elements/edit-container/style.pcss
var edit_container_style = __webpack_require__("OnHV");

// CONCATENATED MODULE: ./src/modules/blocks/additional-fields/elements/edit-container/element.js
/**
 * External dependencies
 */




/**
 * Internal dependencies
 */


const EditContainer = ({
  name,
  children,
  className
}) => wp.element.createElement("div", {
  className: external_tribe_modules_classnames_default()('tribe-editor__additional-fields__edit', className)
}, wp.element.createElement("div", {
  className: "tribe-editor__aditional-fields__content"
}, wp.element.createElement(external_tribe_common_elements_["Heading"], {
  level: 2,
  className: "tribe-editor__additional-fields__edit-title"
}, name), children));
EditContainer.propTypes = {
  name: external_tribe_modules_propTypes_default.a.string.isRequired,
  children: external_tribe_modules_propTypes_default.a.node.isRequired
};
/* harmony default export */ var edit_container_element = (EditContainer);
// CONCATENATED MODULE: ./src/modules/blocks/additional-fields/elements/edit-container/index.js
/**
 * Internal dependencies
 */

/* harmony default export */ var edit_container = (edit_container_element);
// CONCATENATED MODULE: ./src/modules/blocks/additional-fields/elements/field-container/element.js
/**
 * External dependencies
 */




/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */



const FieldTemplate = ({
  isSelected,
  label,
  output,
  input,
  settings
}) => {
  if (isSelected) {
    const nameNormalized = Object(external_tribe_common_utils_string_["normalize"])(label);
    return [wp.element.createElement(edit_container, {
      key: `edit-container-${nameNormalized}`,
      name: label
    }, input), settings ? settings : wp.element.createElement(elements_settings, {
      key: `settings-${nameNormalized}`,
      name: label
    })];
  }
  if (!output) {
    const placeholderMessage = Object(sprintf["sprintf"])(Object(external_wp_i18n_["__"])('Add %1$s', 'tribe-events-calendar-pro'), label);
    return wp.element.createElement(external_tribe_common_elements_["Placeholder"], null, placeholderMessage);
  }
  return wp.element.createElement(preview, {
    name: label
  }, output);
};
FieldTemplate.propTypes = {
  input: external_tribe_modules_propTypes_default.a.node.isRequired,
  label: external_tribe_modules_propTypes_default.a.string,
  isSelected: external_tribe_modules_propTypes_default.a.bool,
  settings: external_tribe_modules_propTypes_default.a.node,
  output: external_tribe_modules_propTypes_default.a.node
};
FieldTemplate.defaultProps = {
  isSelected: false
};
/* harmony default export */ var field_container_element = (FieldTemplate);
// CONCATENATED MODULE: ./src/modules/blocks/additional-fields/elements/field-container/index.js
/**
 * Internal dependencies
 */

/* harmony default export */ var field_container = (field_container_element);
// CONCATENATED MODULE: ./src/modules/blocks/additional-fields/elements/index.js
/**
 * Internal dependencies
 */




// CONCATENATED MODULE: ./src/modules/blocks/additional-fields/text/template.js
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */


const TextField = ({
  label,
  isSelected,
  value,
  onInputChange
}) => wp.element.createElement(field_container, {
  label: label,
  input: wp.element.createElement(external_tribe_common_elements_["Input"], {
    type: "text",
    value: value,
    onChange: onInputChange
  }),
  output: value,
  isSelected: isSelected
});
TextField.propTypes = {
  label: external_tribe_modules_propTypes_default.a.string,
  isSelected: external_tribe_modules_propTypes_default.a.bool,
  onInputChange: external_tribe_modules_propTypes_default.a.func,
  value: external_tribe_modules_propTypes_default.a.string
};
TextField.defaultProps = {
  isSelected: false
};
/* harmony default export */ var text_template = (TextField);
// CONCATENATED MODULE: ./src/modules/blocks/additional-fields/text/container.js
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */



const container_mapStateToProps = (state, ownProps) => ({
  label: additional_fields_selectors_namespaceObject.getFieldLabel(state, ownProps),
  value: additional_fields_selectors_namespaceObject.getTextFieldValue(state, ownProps)
});
const mapDispatchToProps = (dispatch, {
  name,
  setAttributes
}) => ({
  onInputChange: e => {
    const {
      value
    } = e.target;
    setAttributes({
      value
    });
    dispatch(additional_fields_actions_namespaceObject.setFieldValue(name, value));
  }
});
/* harmony default export */ var text_container = (Object(external_tribe_modules_redux_["compose"])(Object(external_tribe_common_hoc_["withStore"])(), Object(external_tribe_modules_reactRedux_["connect"])(container_mapStateToProps, mapDispatchToProps))(text_template));
// CONCATENATED MODULE: ./src/modules/blocks/additional-fields/url/template.js
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */


const URLField = ({
  label,
  value,
  onInputChange,
  isSelected
}) => wp.element.createElement(field_container, {
  label: label,
  input: wp.element.createElement(external_tribe_common_elements_["UrlInput"], {
    value: value,
    onChange: onInputChange
  }),
  output: value,
  isSelected: isSelected
});
URLField.propTypes = {
  label: external_tribe_modules_propTypes_default.a.string,
  name: external_tribe_modules_propTypes_default.a.string,
  isSelected: external_tribe_modules_propTypes_default.a.bool,
  onInputChange: external_tribe_modules_propTypes_default.a.func,
  value: external_tribe_modules_propTypes_default.a.string
};
URLField.defaultProps = {
  isSelected: false
};
/* harmony default export */ var url_template = (URLField);
// CONCATENATED MODULE: ./src/modules/blocks/additional-fields/url/container.js
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */



const url_container_mapStateToProps = (state, ownProps) => ({
  label: additional_fields_selectors_namespaceObject.getFieldLabel(state, ownProps),
  value: additional_fields_selectors_namespaceObject.getTextFieldValue(state, ownProps)
});
const container_mapDispatchToProps = (dispatch, {
  name,
  setAttributes
}) => ({
  onInputChange: e => {
    const {
      value
    } = e.target;
    setAttributes({
      value
    });
    dispatch(additional_fields_actions_namespaceObject.setFieldValue(name, value));
  }
});
/* harmony default export */ var url_container = (Object(external_tribe_modules_redux_["compose"])(Object(external_tribe_common_hoc_["withStore"])(), Object(external_tribe_modules_reactRedux_["connect"])(url_container_mapStateToProps, container_mapDispatchToProps))(url_template));
// CONCATENATED MODULE: ./src/modules/blocks/additional-fields/text-area/template.js
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */


const TextAreaField = ({
  label,
  name,
  value,
  onInputChange,
  isSelected
}) => {
  const paragraphs = value ? value.split('\n').map((paragraph, index) => wp.element.createElement(external_tribe_common_elements_["Paragraph"], {
    key: `textarea-${name}-${index + 1}`
  }, paragraph)) : '';
  return wp.element.createElement(field_container, {
    label: label,
    input: wp.element.createElement(external_tribe_common_elements_["Textarea"], {
      rows: "5",
      wrap: "hard",
      value: value,
      onChange: onInputChange
    }),
    output: paragraphs,
    isSelected: isSelected
  });
};
TextAreaField.propTypes = {
  label: external_tribe_modules_propTypes_default.a.string,
  name: external_tribe_modules_propTypes_default.a.string.isRequired,
  isSelected: external_tribe_modules_propTypes_default.a.bool,
  onInputChange: external_tribe_modules_propTypes_default.a.func,
  value: external_tribe_modules_propTypes_default.a.string
};
TextAreaField.defaultProps = {
  isSelected: false
};
/* harmony default export */ var text_area_template = (TextAreaField);
// CONCATENATED MODULE: ./src/modules/blocks/additional-fields/text-area/container.js
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */



const text_area_container_mapStateToProps = (state, ownProps) => ({
  label: additional_fields_selectors_namespaceObject.getFieldLabel(state, ownProps),
  value: additional_fields_selectors_namespaceObject.getTextFieldValue(state, ownProps)
});
const text_area_container_mapDispatchToProps = (dispatch, {
  name,
  setAttributes
}) => ({
  onInputChange: e => {
    const {
      value
    } = e.target;
    setAttributes({
      value
    });
    dispatch(additional_fields_actions_namespaceObject.setFieldValue(name, value));
  }
});
/* harmony default export */ var text_area_container = (Object(external_tribe_modules_redux_["compose"])(Object(external_tribe_common_hoc_["withStore"])(), Object(external_tribe_modules_reactRedux_["connect"])(text_area_container_mapStateToProps, text_area_container_mapDispatchToProps))(text_area_template));
// CONCATENATED MODULE: ./src/modules/blocks/additional-fields/dropdown/template.js
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */


const DropdownField = ({
  label,
  value,
  selectValue,
  options,
  onInputChange,
  isSelected
}) => wp.element.createElement(field_container, {
  label: label,
  input: wp.element.createElement(external_tribe_common_elements_["Select"], {
    options: options,
    value: selectValue,
    onChange: onInputChange,
    isSearchable: false,
    backspaceRemovesValue: false
  }),
  output: value,
  isSelected: isSelected
});
DropdownField.propTypes = {
  label: external_tribe_modules_propTypes_default.a.string,
  isSelected: external_tribe_modules_propTypes_default.a.bool,
  onInputChange: external_tribe_modules_propTypes_default.a.func,
  value: external_tribe_modules_propTypes_default.a.string,
  selectValue: external_tribe_modules_propTypes_default.a.object,
  options: external_tribe_modules_propTypes_default.a.arrayOf(external_tribe_modules_propTypes_default.a.shape({
    value: external_tribe_modules_propTypes_default.a.string,
    label: external_tribe_modules_propTypes_default.a.string
  }))
};
DropdownField.defaultProps = {
  isSelected: false
};
/* harmony default export */ var dropdown_template = (DropdownField);
// CONCATENATED MODULE: ./src/modules/blocks/additional-fields/dropdown/container.js
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */



const dropdown_container_mapStateToProps = (state, ownProps) => ({
  label: additional_fields_selectors_namespaceObject.getFieldLabel(state, ownProps),
  value: additional_fields_selectors_namespaceObject.getFieldValue(state, ownProps),
  selectValue: additional_fields_selectors_namespaceObject.getFieldDropdownValue(state, ownProps),
  options: additional_fields_selectors_namespaceObject.getFieldOptionsWithLabels(state, ownProps)
});
const dropdown_container_mapDispatchToProps = (dispatch, {
  name,
  setAttributes
}) => ({
  onInputChange: ({
    value
  }) => {
    setAttributes({
      value
    });
    dispatch(additional_fields_actions_namespaceObject.setFieldValue(name, value));
  }
});
/* harmony default export */ var dropdown_container = (Object(external_tribe_modules_redux_["compose"])(Object(external_tribe_common_hoc_["withStore"])(), Object(external_tribe_modules_reactRedux_["connect"])(dropdown_container_mapStateToProps, dropdown_container_mapDispatchToProps))(dropdown_template));
// EXTERNAL MODULE: ./src/modules/blocks/additional-fields/radio/style.pcss
var radio_style = __webpack_require__("i0Sv");

// CONCATENATED MODULE: ./src/modules/blocks/additional-fields/radio/template.js
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */




const RadioInput = ({
  options,
  onChange,
  selectedValue
}) => wp.element.createElement("fieldset", {
  className: "tribe-editor__additional-fields__edit--horizontal-fields"
}, options.map((option, index) => {
  const {
    label = '',
    value = ''
  } = option;
  const isChecked = value === selectedValue;
  return wp.element.createElement(external_tribe_common_elements_["Radio"], {
    checked: isChecked,
    id: `name-${index + 1}`,
    key: `name-${index + 1}`,
    value: value,
    onChange: onChange,
    name: Object(external_tribe_common_utils_string_["normalize"])(label),
    label: label,
    className: 'tribe-editor__additional-fields__field--radio'
  });
}));
const RadioField = ({
  label,
  value,
  options,
  onInputChange,
  isSelected
}) => wp.element.createElement(field_container, {
  label: label,
  input: wp.element.createElement(RadioInput, {
    selectedValue: value,
    onChange: onInputChange,
    options: options
  }),
  output: value,
  isSelected: isSelected
});
RadioField.propTypes = {
  label: external_tribe_modules_propTypes_default.a.string,
  isSelected: external_tribe_modules_propTypes_default.a.bool,
  onInputChange: external_tribe_modules_propTypes_default.a.func,
  value: external_tribe_modules_propTypes_default.a.string,
  options: external_tribe_modules_propTypes_default.a.arrayOf(external_tribe_modules_propTypes_default.a.shape({
    value: external_tribe_modules_propTypes_default.a.string,
    label: external_tribe_modules_propTypes_default.a.string
  }))
};
RadioField.defaultProps = {
  isSelected: false
};
/* harmony default export */ var radio_template = (RadioField);
// CONCATENATED MODULE: ./src/modules/blocks/additional-fields/radio/container.js
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */



const radio_container_mapStateToProps = (state, ownProps) => ({
  label: additional_fields_selectors_namespaceObject.getFieldLabel(state, ownProps),
  value: additional_fields_selectors_namespaceObject.getTextFieldValue(state, ownProps),
  options: additional_fields_selectors_namespaceObject.getFieldOptionsWithLabels(state, ownProps)
});
const radio_container_mapDispatchToProps = (dispatch, {
  name,
  setAttributes
}) => ({
  onInputChange: e => {
    const {
      value
    } = e.target;
    setAttributes({
      value
    });
    dispatch(additional_fields_actions_namespaceObject.setFieldValue(name, value));
  }
});
/* harmony default export */ var radio_container = (Object(external_tribe_modules_redux_["compose"])(Object(external_tribe_common_hoc_["withStore"])(), Object(external_tribe_modules_reactRedux_["connect"])(radio_container_mapStateToProps, radio_container_mapDispatchToProps))(radio_template));
// EXTERNAL MODULE: external "lodash.identity"
var external_lodash_identity_ = __webpack_require__("df/k");
var external_lodash_identity_default = /*#__PURE__*/__webpack_require__.n(external_lodash_identity_);

// EXTERNAL MODULE: ./src/modules/blocks/additional-fields/checkbox/settings/style.pcss
var settings_style = __webpack_require__("YREk");

// CONCATENATED MODULE: ./src/modules/blocks/additional-fields/checkbox/settings/template.js
/**
 * External dependencies
 */



/**
 * Wordpress dependencies
 */



/**
 * Internal dependencies
 */


const After = ({
  listDividerOnChange,
  listDividerValue,
  listEnderOnChange,
  listEnderValue
}) => wp.element.createElement(external_wp_components_["PanelBody"], {
  title: Object(external_wp_i18n_["__"])('Custom Dividers', 'tribe-events-calendar-pro')
}, wp.element.createElement(external_wp_components_["TextControl"], {
  label: Object(external_wp_i18n_["__"])('List divider', 'tribe-events-calendar-pro'),
  value: listDividerValue,
  onChange: listDividerOnChange,
  className: "tribe-editor__additional-fields__divider-settings",
  __nextHasNoMarginBottom: true
}), wp.element.createElement(external_wp_components_["TextControl"], {
  label: Object(external_wp_i18n_["__"])('List ender', 'tribe-events-calendar-pro'),
  value: listEnderValue,
  onChange: listEnderOnChange,
  className: "tribe-editor__additional-fields__divider-settings",
  __nextHasNoMarginBottom: true
}));
const CheckboxSettings = ({
  label,
  listDividerOnChange,
  listDividerValue,
  listEnderOnChange,
  listEnderValue
}) => wp.element.createElement(elements_settings, {
  name: label,
  after: wp.element.createElement(After, {
    listDividerOnChange: listDividerOnChange,
    listDividerValue: listDividerValue,
    listEnderOnChange: listEnderOnChange,
    listEnderValue: listEnderValue
  })
});
CheckboxSettings.propTypes = {
  label: external_tribe_modules_propTypes_default.a.string,
  listDividerValue: external_tribe_modules_propTypes_default.a.string,
  listDividerOnChange: external_tribe_modules_propTypes_default.a.func,
  listEnderValue: external_tribe_modules_propTypes_default.a.string,
  listEnderOnChange: external_tribe_modules_propTypes_default.a.func
};
/* harmony default export */ var settings_template = (CheckboxSettings);
// EXTERNAL MODULE: ./src/modules/blocks/additional-fields/checkbox/style.pcss
var checkbox_style = __webpack_require__("Cn54");

// CONCATENATED MODULE: ./src/modules/blocks/additional-fields/checkbox/template.js
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */





const CheckboxInput = ({
  options,
  onChange
}) => wp.element.createElement("fieldset", {
  className: "tribe-editor__additional-fields__edit--horizontal-fields"
}, options.map((option, index) => {
  const {
    label = '',
    value = '',
    isChecked = false
  } = option;
  return wp.element.createElement(external_tribe_common_elements_["Checkbox"], {
    key: `name-${index + 1}`,
    id: `name-${index + 1}`,
    checked: isChecked,
    onChange: onChange,
    name: Object(external_tribe_common_utils_string_["normalize"])(label),
    value: value,
    label: label,
    className: 'tribe-editor__additional-fields__field--checkbox'
  });
}));
const CheckboxField = ({
  attributes,
  setAttributes,
  name,
  label,
  valueArray,
  options,
  onInputChange,
  isSelected = false
}) => {
  const {
    dividerList,
    dividerEnd
  } = attributes;
  const onDividerListChange = value => {
    setAttributes({
      dividerList: value
    });
  };
  const onDividerEndChange = value => {
    setAttributes({
      dividerEnd: value
    });
  };
  const output = Object(external_tribe_common_utils_string_["wordsAsList"])(valueArray, dividerList, dividerEnd);
  return wp.element.createElement(field_container, {
    id: name,
    label: label,
    input: wp.element.createElement(CheckboxInput, {
      onChange: onInputChange,
      options: options
    }),
    output: output,
    settings: wp.element.createElement(settings_template, {
      key: name,
      label: label,
      listDividerValue: dividerList,
      listDividerOnChange: onDividerListChange,
      listEnderValue: dividerEnd,
      listEnderOnChange: onDividerEndChange
    }),
    isSelected: isSelected
  });
};
CheckboxField.propTypes = {
  attributes: external_tribe_modules_propTypes_default.a.object,
  setAttributes: external_tribe_modules_propTypes_default.a.func,
  name: external_tribe_modules_propTypes_default.a.string.isRequired,
  label: external_tribe_modules_propTypes_default.a.string,
  valueArray: external_tribe_modules_propTypes_default.a.arrayOf(external_tribe_modules_propTypes_default.a.string),
  isSelected: external_tribe_modules_propTypes_default.a.bool,
  onInputChange: external_tribe_modules_propTypes_default.a.func,
  options: external_tribe_modules_propTypes_default.a.arrayOf(external_tribe_modules_propTypes_default.a.shape({
    value: external_tribe_modules_propTypes_default.a.string,
    label: external_tribe_modules_propTypes_default.a.string,
    isChecked: external_tribe_modules_propTypes_default.a.bool
  }))
};
/* harmony default export */ var checkbox_template = (CheckboxField);
// CONCATENATED MODULE: ./src/modules/blocks/additional-fields/checkbox/container.js


function container_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function container_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? container_ownKeys(Object(t), !0).forEach(function (r) { defineProperty_default()(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : container_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
/**
 * External dependencies
 */


/**
 * Internal dependencies
 */




const checkbox_container_mapStateToProps = (state, ownProps) => ({
  label: additional_fields_selectors_namespaceObject.getFieldLabel(state, ownProps),
  value: additional_fields_selectors_namespaceObject.getFieldValue(state, ownProps),
  valueArray: additional_fields_selectors_namespaceObject.getFieldCheckboxValue(state, ownProps),
  options: additional_fields_selectors_namespaceObject.getFieldCheckboxOptions(state, ownProps)
});
const mergeProps = (stateProps, {
  dispatch
}, ownProps) => container_objectSpread(container_objectSpread(container_objectSpread({}, ownProps), stateProps), {}, {
  onInputChange: e => {
    const {
      name,
      setAttributes
    } = ownProps;
    const {
      value,
      checked
    } = e.target;
    const currentValueItems = stateProps.value.split(CHECKBOX_VALUE_DIVIDER);
    const newValueItems = checked ? [...currentValueItems, value].filter(external_lodash_identity_default.a) : currentValueItems.filter(text => text !== value);
    const newValue = newValueItems.join(CHECKBOX_VALUE_DIVIDER);
    setAttributes({
      value: newValue
    });
    dispatch(additional_fields_actions_namespaceObject.setFieldValue(name, newValue));
  }
});
/* harmony default export */ var checkbox_container = (Object(external_tribe_modules_redux_["compose"])(Object(external_tribe_common_hoc_["withStore"])(), Object(external_tribe_modules_reactRedux_["connect"])(checkbox_container_mapStateToProps, null, mergeProps))(checkbox_template));
// CONCATENATED MODULE: ./src/modules/blocks/additional-fields/index.js






// CONCATENATED MODULE: ./src/modules/blocks/additional-fields/utils.js
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */



const CHECKBOX_VALUE_DIVIDER = '|';
const FIELD_TYPES = {
  text: 'text',
  checkbox: 'checkbox',
  dropdown: 'dropdown',
  url: 'url',
  radio: 'radio',
  textarea: 'textarea'
};
const FIELDS_SCHEMA = {
  text: {
    icon: 'editor-textcolor',
    container: text_container,
    type: 'string'
  },
  url: {
    icon: 'admin-links',
    container: url_container,
    type: 'string'
  },
  textarea: {
    icon: 'admin-comments',
    container: text_area_container,
    type: 'string'
  },
  dropdown: {
    icon: 'randomize',
    container: dropdown_container,
    type: 'array'
  },
  checkbox: {
    icon: 'yes',
    container: checkbox_container,
    type: 'array'
  },
  radio: {
    icon: 'editor-ul',
    container: radio_container,
    type: 'array'
  }
};

/**
 * Function used to return the configuration of a new block using the data from an additional field
 *
 * @since 4.5
 * @param {object} field An object with the fields of the field to be created as block
 * @returns {object} Returns an object that represents the block
 */
const fieldToBlock = field => {
  const {
    name,
    label,
    type
  } = field;
  const schema = FIELDS_SCHEMA[type] || FIELDS_SCHEMA.text;
  const block = {
    id: `field-${Object(external_tribe_common_utils_string_["toBlockName"])(name)}`,
    title: label,
    description: Object(external_wp_i18n_["__"])('Additional Field', 'tribe-events-calendar-pro'),
    icon: schema.icon,
    category: 'tribe-events-pro-additional-fields',
    keywords: ['event', 'events-gutenberg', 'tribe'],
    supports: {
      html: false
    },
    attributes: {
      value: {
        type: 'string',
        source: 'meta',
        meta: name
      }
    },
    edit: schema.container,
    save: () => null
  };
  if (type === FIELD_TYPES.checkbox) {
    block.attributes.dividerList = {
      type: 'string',
      default: ', '
    };
    block.attributes.dividerEnd = {
      type: 'string',
      default: Object(external_wp_i18n_["__"])(' and ', 'tribe-events-calendar-pro')
    };
  }
  return block;
};

/**
 * Extract the additional fields from the localized variable `tribe_js_config` and attempt to extract
 * any additional field and convert into a block.
 *
 * @since 4.5
 * @param {Array} blocks An array of blocks where to append more blocks
 * @returns {[]} An array with the merge of blocks an addiitional fields
 */
const addAdditionalFields = blocks => {
  const additionalFields = external_tribe_common_utils_["globals"].pro().additional_fields || [];
  const fields = additionalFields.map(field => fieldToBlock(field));
  return [...blocks, ...fields];
};
// CONCATENATED MODULE: ./src/modules/data/blocks/additional-fields/selectors.js

function selectors_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function selectors_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? selectors_ownKeys(Object(t), !0).forEach(function (r) { defineProperty_default()(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : selectors_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
/**
 * External dependencies
 */




/**
 * Internal dependencies
 */


const getPlugin = state => state[external_tribe_common_data_plugins_["constants"].EVENTS_PRO_PLUGIN];
const getBlocks = Object(external_tribe_modules_reselect_["createSelector"])([getPlugin], plugin => plugin.blocks);
const getAdditionalFields = Object(external_tribe_modules_reselect_["createSelector"])([getBlocks], blocks => blocks.additionalFields);
const getFieldName = (state, props) => props.name;
const getFieldBlock = Object(external_tribe_modules_reselect_["createSelector"])([getAdditionalFields, getFieldName], (fields, name) => fields[name] || {});
const getFieldLabel = Object(external_tribe_modules_reselect_["createSelector"])([getFieldBlock], field => field.label || '');
const getFieldValue = Object(external_tribe_modules_reselect_["createSelector"])([getFieldBlock], field => field.value);
const getTextFieldValue = Object(external_tribe_modules_reselect_["createSelector"])([getFieldValue], value => value || '');
const getFieldOptions = Object(external_tribe_modules_reselect_["createSelector"])([getFieldBlock], field => field.options || []);
const getFieldOptionsWithLabels = Object(external_tribe_modules_reselect_["createSelector"])([getFieldOptions], options => {
  return options.map(option => ({
    value: option,
    label: option
  }));
});
const getFieldDropdownValue = Object(external_tribe_modules_reselect_["createSelector"])([getFieldBlock], field => ({
  value: field.value,
  label: field.value
}));
const getFieldCheckboxValue = Object(external_tribe_modules_reselect_["createSelector"])([getTextFieldValue], value => external_lodash_uniq_default()(value.split(CHECKBOX_VALUE_DIVIDER)));
const getFieldCheckboxOptions = Object(external_tribe_modules_reselect_["createSelector"])([getFieldCheckboxValue, getFieldOptionsWithLabels], (values, optionsWithLabels) => {
  return optionsWithLabels.map(option => selectors_objectSpread(selectors_objectSpread({}, option), {}, {
    isChecked: external_lodash_includes_default()(values, option.value)
  }));
});
// CONCATENATED MODULE: ./src/modules/data/blocks/additional-fields/index.js
/**
 * Internal dependencies
 */




/* harmony default export */ var additional_fields = (reducers);

// CONCATENATED MODULE: ./src/modules/data/blocks/reducer.js
/**
 * External dependencies
 */


/**
 * Internal dependencies
 */




const reducer_setInitialState = data => {
  setInitialState(data);
  fields_setInitialState(data);
};
/* harmony default export */ var blocks_reducer = (Object(external_tribe_modules_redux_["combineReducers"])({
  virtualEvents: virtual_event,
  recurring: recurring,
  exception: reducer_exception,
  additionalFields: additional_fields
}));
// CONCATENATED MODULE: ./src/modules/data/blocks/index.js
/**
 * Internal dependencies
 */




/* harmony default export */ var data_blocks = (blocks_reducer);




// CONCATENATED MODULE: ./src/modules/data/blocks/exception/sagas.js


function exception_sagas_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function exception_sagas_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? exception_sagas_ownKeys(Object(t), !0).forEach(function (r) { defineProperty_default()(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : exception_sagas_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */






const sagas_sagaArgs = {
  actions: {
    add: addException,
    sync: syncException
  },
  selectors: exception_selectors_namespaceObject
};
function* handleExceptionEdit(action) {
  // Prevent rule syncs from looping
  if (action.sync) {
    return;
  }
  const fieldKeys = yield Object(external_tribe_modules_reduxSaga_effects_["call"])(external_lodash_keys_default.a, action.payload);
  for (let i = 0; i < fieldKeys.length; i++) {
    const fieldKey = fieldKeys[i];
    switch (fieldKey) {
      case blocks_constants_namespaceObject.KEY_START_TIME:
      case blocks_constants_namespaceObject.KEY_END_TIME:
        yield Object(external_tribe_modules_reduxSaga_effects_["call"])(handleTimeChange, sagas_sagaArgs, action, fieldKey);
        break;
      case blocks_constants_namespaceObject.KEY_MULTI_DAY:
        yield Object(external_tribe_modules_reduxSaga_effects_["call"])(handleMultiDayChange, sagas_sagaArgs, action, fieldKey);
        break;
      case blocks_constants_namespaceObject.KEY_WEEK:
        yield Object(external_tribe_modules_reduxSaga_effects_["call"])(handleWeekChange, sagas_sagaArgs, action, fieldKey);
        break;
      case blocks_constants_namespaceObject.KEY_LIMIT_TYPE:
        yield Object(external_tribe_modules_reduxSaga_effects_["call"])(handleLimitTypeChange, sagas_sagaArgs, action, fieldKey);
        break;
      default:
        break;
    }
  }
}
function* syncExceptions(action) {
  const exceptions = yield Object(external_tribe_modules_reduxSaga_effects_["select"])(getExceptions);
  for (let i = 0; i < exceptions.length; i++) {
    const _action = exception_sagas_objectSpread({
      index: i
    }, action);
    switch (action.type) {
      case external_tribe_events_data_["blocks"].datetime.types.SET_TIME_ZONE:
        yield Object(external_tribe_modules_reduxSaga_effects_["call"])(handleTimezoneChange, sagas_sagaArgs, _action, 'timeZone');
        break;
      default:
        break;
    }
  }
}
function* sagas_watchers() {
  yield Object(external_tribe_modules_reduxSaga_effects_["takeEvery"])([ADD_EXCEPTION_FIELD], handleAddition, sagas_sagaArgs);
  yield Object(external_tribe_modules_reduxSaga_effects_["takeEvery"])([EDIT_EXCEPTION], handleExceptionEdit);
  yield Object(external_tribe_modules_reduxSaga_effects_["takeEvery"])([external_tribe_events_data_["blocks"].datetime.types.SET_TIME_ZONE], syncExceptions);
}
// CONCATENATED MODULE: ./src/modules/data/blocks/exception/index.js
/**
 * Internal dependencies
 */






/* harmony default export */ var blocks_exception = (reducer_exception);

// EXTERNAL MODULE: ./src/modules/elements/add-field/style.pcss
var add_field_style = __webpack_require__("kK34");

// CONCATENATED MODULE: ./src/modules/elements/add-field/element.js
/**
 * External dependencies
 */




const AddField = ({
  children,
  noBorder,
  onClick
}) => wp.element.createElement("aside", {
  className: external_tribe_modules_classnames_default()('tribe-editor__events-pro__add-field', {
    'tribe-editor__events-pro__add-field--no-border': noBorder
  })
}, wp.element.createElement("button", {
  className: "tribe-editor__events-pro__add-field__button",
  onClick: onClick,
  type: "button"
}, wp.element.createElement("span", {
  className: "tribe-editor__events-pro__add-field__button__plus"
}, "+"), wp.element.createElement("span", null, children)));
AddField.propTypes = {
  children: external_tribe_modules_propTypes_default.a.node.isRequired,
  onClick: external_tribe_modules_propTypes_default.a.func.isRequired,
  noBorder: external_tribe_modules_propTypes_default.a.bool
};
/* harmony default export */ var add_field_element = (AddField);
// CONCATENATED MODULE: ./src/modules/elements/add-field/index.js
/**
 * Internal dependencies
 */

/* harmony default export */ var add_field = (add_field_element);
// CONCATENATED MODULE: ./src/modules/elements/attribute-sync/template.js

/**
 * External dependencies
 */


class template_AttributeSync extends external_React_["Component"] {
  componentDidMount() {
    this.props.initialize();
  }
  shouldComponentUpdate() {
    return false; // Never update
  }
  componentWillUnmount() {
    this.props.cancel();
  }
  render() {
    return null;
  }
}
defineProperty_default()(template_AttributeSync, "propTypes", {
  clientId: external_tribe_modules_propTypes_default.a.string.isRequired,
  initialize: external_tribe_modules_propTypes_default.a.func.isRequired,
  cancel: external_tribe_modules_propTypes_default.a.func.isRequired
});
// CONCATENATED MODULE: ./src/modules/data/shared/sync.js
/**
 * External dependencies
 */


const INITIALIZE_SYNC = `${PREFIX_EVENTS_PRO_STORE}/INITIALIZE_SYNC`;
const CANCEL_SYNC = `${PREFIX_EVENTS_PRO_STORE}/CANCEL_SYNC`;
function* serialize(payload) {
  return yield Object(external_tribe_modules_reduxSaga_effects_["call"])([JSON, 'stringify'], payload);
}
function* sync({
  selector,
  metaField,
  setAttributes,
  current
}) {
  const state = yield Object(external_tribe_modules_reduxSaga_effects_["select"])(selector);
  const payload = yield Object(external_tribe_modules_reduxSaga_effects_["call"])(serialize, state);
  if (current === payload) {
    return;
  }
  yield Object(external_tribe_modules_reduxSaga_effects_["call"])(setAttributes, {
    [metaField]: payload
  });
}
function* initialize({
  listeners,
  selector,
  clientId,
  metaField,
  setAttributes,
  current
}) {
  const syncSaga = yield Object(external_tribe_modules_reduxSaga_effects_["takeLatest"])(listeners, sync, {
    selector,
    metaField,
    setAttributes,
    current
  });
  while (true) {
    const action = yield Object(external_tribe_modules_reduxSaga_effects_["take"])(CANCEL_SYNC);
    if (action.clientId === clientId) {
      yield Object(external_tribe_modules_reduxSaga_effects_["cancel"])(syncSaga);
      break;
    }
  }
}
function* sync_watchers() {
  yield Object(external_tribe_modules_reduxSaga_effects_["takeEvery"])(INITIALIZE_SYNC, initialize);
}
// CONCATENATED MODULE: ./src/modules/elements/attribute-sync/element.js
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */



const element_mapDispatchToProps = (dispatch, ownProps) => {
  return {
    initialize: () => dispatch({
      type: INITIALIZE_SYNC,
      setAttributes: ownProps.setAttributes,
      listeners: ownProps.listeners,
      clientId: ownProps.clientId,
      selector: ownProps.selector,
      metaField: ownProps.metaField,
      current: ownProps.current
    }),
    cancel: () => dispatch({
      type: CANCEL_SYNC,
      clientId: ownProps.clientId
    })
  };
};
/* harmony default export */ var attribute_sync_element = (Object(external_tribe_modules_redux_["compose"])(Object(external_tribe_common_hoc_["withStore"])(), Object(external_tribe_modules_reactRedux_["connect"])(null, element_mapDispatchToProps))(template_AttributeSync));
// CONCATENATED MODULE: ./src/modules/elements/attribute-sync/index.js
/**
 * Internal dependencies
 */

/* harmony default export */ var attribute_sync = (attribute_sync_element);
// EXTERNAL MODULE: ./src/modules/elements/with-locked-overlay/style.pcss
var with_locked_overlay_style = __webpack_require__("SE6A");

// CONCATENATED MODULE: ./src/modules/elements/with-locked-overlay/element.js
/**
 * External dependencies
 */


/**
 * Internal dependencies
 */

const LockedOverlay = ({
  children
}) => {
  return wp.element.createElement("div", {
    className: external_tribe_modules_classnames_default()('tribe-editor__events-pro_recurrence-container', 'tribe-editor__events-pro_recurrence-lock-container')
  }, wp.element.createElement("div", {
    className: 'tribe-editor__events-pro_recurrence-lock-overlay'
  }), children);
};

/**
 * HOC that you can flag to show/hide an overlay that has a subtle opacity, and stops
 * interaction with UI elements on the component.
 *
 * @param isLocked
 * @param Component
 * @returns {(function(*): *)|*}
 */
const withLockedOverlay = (isLocked, Component) => props => {
  if (isLocked) {
    return wp.element.createElement(LockedOverlay, null, wp.element.createElement(Component, props));
  }
  return wp.element.createElement(Component, props);
};
/* harmony default export */ var with_locked_overlay_element = (withLockedOverlay);
// CONCATENATED MODULE: ./src/modules/elements/with-locked-overlay/index.js
/**
 * Internal dependencies
 */

/* harmony default export */ var with_locked_overlay = (with_locked_overlay_element);
// CONCATENATED MODULE: ./src/modules/elements/exception-add-field/element.js
var _tecEventDetails;
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */


const ExceptionAddField = props => {
  return wp.element.createElement(add_field, props, Object(external_wp_i18n_["__"])('Add Exception', 'tribe-events-calendar-pro'));
};
ExceptionAddField.propTypes = {};
const isLocked = typeof tecEventDetails !== 'undefined' && ((_tecEventDetails = tecEventDetails) === null || _tecEventDetails === void 0 ? void 0 : _tecEventDetails.lockExclusionsUi);
/* harmony default export */ var exception_add_field_element = (with_locked_overlay(isLocked, ExceptionAddField));
// CONCATENATED MODULE: ./src/modules/elements/exception-add-field/index.js
/**
 * Internal dependencies
 */

/* harmony default export */ var exception_add_field = (exception_add_field_element);
// EXTERNAL MODULE: ./src/modules/elements/fieldset/style.pcss
var fieldset_style = __webpack_require__("fZxb");

// CONCATENATED MODULE: ./src/modules/elements/fieldset/element.js
/**
 * External Dependencies
 */




const Fieldset = ({
  children,
  className
}) => wp.element.createElement("fieldset", {
  className: external_tribe_modules_classnames_default()('tribe-editor__events-pro__fieldset', className)
}, children);
Fieldset.propTypes = {
  children: external_tribe_modules_propTypes_default.a.node.isRequired,
  className: external_tribe_modules_propTypes_default.a.string
};
/* harmony default export */ var fieldset_element = (Fieldset);
// CONCATENATED MODULE: ./src/modules/elements/fieldset/index.js
/**
 * Internal dependencies
 */

/* harmony default export */ var fieldset = (fieldset_element);
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








// EXTERNAL MODULE: ./src/modules/elements/remove-field/style.pcss
var remove_field_style = __webpack_require__("m3e7");

// CONCATENATED MODULE: ./src/modules/elements/remove-field/element.js
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */


const RemoveField = ({
  onClick
}) => wp.element.createElement("button", {
  className: "tribe-editor__events-pro__remove-field",
  onClick: onClick,
  type: "button"
}, wp.element.createElement(trash, null));
RemoveField.propTypes = {
  onClick: external_tribe_modules_propTypes_default.a.func.isRequired
};
/* harmony default export */ var remove_field_element = (RemoveField);
// CONCATENATED MODULE: ./src/modules/elements/remove-field/index.js
/**
 * Internal dependencies
 */

/* harmony default export */ var remove_field = (remove_field_element);
// CONCATENATED MODULE: ./src/modules/elements/exception-field/singular.js
/* eslint-disable camelcase */
/**
 * External dependencies
 */




/**
 * Internal dependencies
 */


const {
  applyFilters
} = wp.hooks;
const getTypePickerRowLabel = () => applyFilters('elements.exceptionField.singularTypePickerRowLabelHook', Object(external_wp_i18n_["__"])('A', 'tribe-events-calendar-pro'));
const SingularField = ({
  index,
  options
}) => {
  return wp.element.createElement(external_React_["Fragment"], null, wp.element.createElement(type_picker, {
    blockType: blocks_constants_namespaceObject.EXCEPTION,
    index: index,
    options: options,
    rowLabel: getTypePickerRowLabel()
  }), wp.element.createElement(on_date_picker, {
    blockType: blocks_constants_namespaceObject.EXCEPTION,
    index: index
  }));
};
SingularField.propTypes = {
  index: external_tribe_modules_propTypes_default.a.number.isRequired
};
/* harmony default export */ var singular = (SingularField);
// CONCATENATED MODULE: ./src/modules/elements/exception-field/daily.js

function daily_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function daily_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? daily_ownKeys(Object(t), !0).forEach(function (r) { defineProperty_default()(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : daily_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
/**
 * External dependencies
 */




/**
 * Internal dependencies
 */


const {
  applyFilters: daily_applyFilters
} = wp.hooks;
const daily_getTypePickerRowLabel = () => daily_applyFilters('elements.exceptionField.dailyTypePickerRowLabelHook', Object(external_wp_i18n_["__"])('Every', 'tribe-events-calendar-pro'));
const getAfterTypePicker = props => daily_applyFilters('elements.exceptionField.dailyAfterTypePickerHook', null, daily_objectSpread({
  blockType: blocks_constants_namespaceObject.EXCEPTION
}, props));
const getSeriesEndsRowLabel = () => daily_applyFilters('elements.exceptionField.dailySeriesEndsRowLabelHook', Object(external_wp_i18n_["__"])('Exception ends', 'tribe-events-calendar-pro'));
const DailyField = props => {
  const {
    index,
    options
  } = props;
  return wp.element.createElement(external_React_["Fragment"], null, wp.element.createElement(type_picker, {
    blockType: blocks_constants_namespaceObject.EXCEPTION,
    index: index,
    options: options,
    rowLabel: daily_getTypePickerRowLabel()
  }), getAfterTypePicker(props), wp.element.createElement(series_ends, {
    blockType: blocks_constants_namespaceObject.EXCEPTION,
    index: index,
    rowLabel: getSeriesEndsRowLabel()
  }));
};
DailyField.propTypes = {
  index: external_tribe_modules_propTypes_default.a.number.isRequired
};
/* harmony default export */ var daily = (DailyField);
// CONCATENATED MODULE: ./src/modules/elements/exception-field/weekly.js

function weekly_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function weekly_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? weekly_ownKeys(Object(t), !0).forEach(function (r) { defineProperty_default()(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : weekly_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
/**
 * External dependencies
 */




/**
 * Internal dependencies
 */


const {
  applyFilters: weekly_applyFilters
} = wp.hooks;
const weekly_getTypePickerRowLabel = () => weekly_applyFilters('elements.exceptionField.weeklyTypePickerRowLabelHook', Object(external_wp_i18n_["__"])('Every', 'tribe-events-calendar-pro'));
const weekly_getAfterTypePicker = props => weekly_applyFilters('elements.exceptionField.weeklyAfterTypePickerHook', null, weekly_objectSpread({
  blockType: blocks_constants_namespaceObject.EXCEPTION
}, props));
const getOnDayOfWeek = props => weekly_applyFilters('elements.exceptionField.weeklyOnDayOfWeekHook', wp.element.createElement(on_day_of_week, {
  blockType: blocks_constants_namespaceObject.EXCEPTION,
  index: props.index
}), weekly_objectSpread({
  blockType: blocks_constants_namespaceObject.EXCEPTION
}, props));
const getSeriesEnds = props => weekly_applyFilters('elements.exceptionField.weeklySeriesEndsHook', wp.element.createElement(series_ends, {
  blockType: blocks_constants_namespaceObject.EXCEPTION,
  index: props.index,
  rowLabel: Object(external_wp_i18n_["__"])('Exception ends', 'tribe-events-calendar-pro')
}), weekly_objectSpread({
  blockType: blocks_constants_namespaceObject.EXCEPTION
}, props));
const WeeklyField = props => {
  const {
    index,
    options
  } = props;
  return wp.element.createElement(external_React_["Fragment"], null, wp.element.createElement(type_picker, {
    blockType: blocks_constants_namespaceObject.EXCEPTION,
    index: index,
    options: options,
    rowLabel: weekly_getTypePickerRowLabel()
  }), weekly_getAfterTypePicker(props), getOnDayOfWeek(props), getSeriesEnds(props));
};
WeeklyField.propTypes = {
  index: external_tribe_modules_propTypes_default.a.number.isRequired
};
/* harmony default export */ var weekly = (WeeklyField);
// CONCATENATED MODULE: ./src/modules/elements/exception-field/monthly.js

function monthly_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function monthly_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? monthly_ownKeys(Object(t), !0).forEach(function (r) { defineProperty_default()(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : monthly_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
/**
 * External dependencies
 */




/**
 * Internal dependencies
 */


const {
  applyFilters: monthly_applyFilters
} = wp.hooks;
const monthly_getTypePickerRowLabel = () => monthly_applyFilters('elements.exceptionField.monthlyTypePickerRowLabelHook', Object(external_wp_i18n_["__"])('Every', 'tribe-events-calendar-pro'));
const monthly_getAfterTypePicker = props => monthly_applyFilters('elements.exceptionField.monthlyAfterTypePickerHook', null, monthly_objectSpread({
  blockType: blocks_constants_namespaceObject.EXCEPTION
}, props));
const getOnDayOfMonthPicker = props => monthly_applyFilters('elements.exceptionField.monthlyOnDayOfMonthPickerHook', wp.element.createElement(on_day_of_month_picker, {
  blockType: blocks_constants_namespaceObject.EXCEPTION,
  index: props.index
}), monthly_objectSpread({
  blockType: blocks_constants_namespaceObject.EXCEPTION
}, props));
const monthly_getSeriesEnds = props => monthly_applyFilters('elements.exceptionField.monthlySeriesEndsHook', wp.element.createElement(series_ends, {
  blockType: blocks_constants_namespaceObject.EXCEPTION,
  index: props.index,
  rowLabel: Object(external_wp_i18n_["__"])('Exception ends', 'tribe-events-calendar-pro')
}), monthly_objectSpread({
  blockType: blocks_constants_namespaceObject.EXCEPTION
}, props));
const MonthlyField = props => {
  const {
    index,
    options
  } = props;
  return wp.element.createElement(external_React_["Fragment"], null, wp.element.createElement(type_picker, {
    blockType: blocks_constants_namespaceObject.EXCEPTION,
    index: index,
    options: options,
    rowLabel: monthly_getTypePickerRowLabel()
  }), monthly_getAfterTypePicker(props), getOnDayOfMonthPicker(props), monthly_getSeriesEnds(props));
};
MonthlyField.propTypes = {
  index: external_tribe_modules_propTypes_default.a.number.isRequired
};
/* harmony default export */ var monthly = (MonthlyField);
// CONCATENATED MODULE: ./src/modules/elements/exception-field/yearly.js

function yearly_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function yearly_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? yearly_ownKeys(Object(t), !0).forEach(function (r) { defineProperty_default()(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : yearly_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
/**
 * External dependencies
 */




/**
 * Internal dependencies
 */


const {
  applyFilters: yearly_applyFilters
} = wp.hooks;
const yearly_getTypePickerRowLabel = () => yearly_applyFilters('elements.exceptionField.yearlyTypePickerRowLabelHook', Object(external_wp_i18n_["__"])('Every', 'tribe-events-calendar-pro'));
const yearly_getAfterTypePicker = props => yearly_applyFilters('elements.exceptionField.yearlyAfterTypePickerHook', null, yearly_objectSpread({
  blockType: blocks_constants_namespaceObject.EXCEPTION
}, props));
const getInMonth = props => yearly_applyFilters('elements.exceptionField.yearlyInMonthHook', wp.element.createElement(in_month, {
  blockType: blocks_constants_namespaceObject.EXCEPTION,
  index: props.index
}), yearly_objectSpread({
  blockType: blocks_constants_namespaceObject.EXCEPTION
}, props));
const yearly_getOnDayOfMonthPicker = props => yearly_applyFilters('elements.exceptionField.yearlyOnDayOfMonthPickerHook', wp.element.createElement(on_day_of_month_picker, {
  blockType: blocks_constants_namespaceObject.EXCEPTION,
  index: props.index
}), yearly_objectSpread({
  blockType: blocks_constants_namespaceObject.EXCEPTION
}, props));
const yearly_getSeriesEnds = props => yearly_applyFilters('elements.exceptionField.yearlySeriesEndsHook', wp.element.createElement(series_ends, {
  blockType: blocks_constants_namespaceObject.EXCEPTION,
  index: props.index,
  rowLabel: Object(external_wp_i18n_["__"])('Exception ends', 'tribe-events-calendar-pro')
}), yearly_objectSpread({
  blockType: blocks_constants_namespaceObject.EXCEPTION
}, props));
const YearlyField = props => {
  const {
    index,
    options
  } = props;
  return wp.element.createElement(external_React_["Fragment"], null, wp.element.createElement(type_picker, {
    blockType: blocks_constants_namespaceObject.EXCEPTION,
    index: index,
    options: options,
    rowLabel: yearly_getTypePickerRowLabel()
  }), yearly_getAfterTypePicker(props), getInMonth(props), yearly_getOnDayOfMonthPicker(props), yearly_getSeriesEnds(props));
};
YearlyField.propTypes = {
  index: external_tribe_modules_propTypes_default.a.number.isRequired
};
/* harmony default export */ var yearly = (YearlyField);
// CONCATENATED MODULE: ./src/modules/elements/exception-field/element.js

/**
 * External dependencies
 */



/**
 * Internal dependencies
 */








const {
  DAILY: element_DAILY,
  WEEKLY: element_WEEKLY,
  MONTHLY: element_MONTHLY,
  YEARLY: element_YEARLY,
  RECURRENCE_TYPES: element_RECURRENCE_TYPES
} = constants_namespaceObject;
class element_ExceptionField extends external_React_["PureComponent"] {
  constructor(...args) {
    super(...args);
    defineProperty_default()(this, "handleRemove", () => this.props.onRemoveClick(this.props.index));
    defineProperty_default()(this, "renderFieldType", () => {
      const {
        index,
        options,
        type
      } = this.props;
      switch (type) {
        case element_DAILY:
          return wp.element.createElement(daily, {
            index: index,
            options: options
          });
        case element_WEEKLY:
          return wp.element.createElement(weekly, {
            index: index,
            options: options
          });
        case element_MONTHLY:
          return wp.element.createElement(monthly, {
            index: index,
            options: options
          });
        case element_YEARLY:
          return wp.element.createElement(yearly, {
            index: index,
            options: options
          });
        default:
          return wp.element.createElement(singular, {
            index: index,
            options: options
          });
      }
    });
  }
  render() {
    return wp.element.createElement(fieldset, null, wp.element.createElement(remove_field, {
      onClick: this.handleRemove
    }), this.renderFieldType());
  }
}
defineProperty_default()(element_ExceptionField, "propTypes", {
  index: external_tribe_modules_propTypes_default.a.number.isRequired,
  onRemoveClick: external_tribe_modules_propTypes_default.a.func.isRequired,
  type: external_tribe_modules_propTypes_default.a.oneOf(element_RECURRENCE_TYPES).isRequired
});
// CONCATENATED MODULE: ./src/modules/elements/exception-field/index.js
/**
 * Internal dependencies
 */

/* harmony default export */ var exception_field = (element_ExceptionField);
// CONCATENATED MODULE: ./src/modules/elements/exception-form/template.js
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */


const {
  KEY_TYPE: template_KEY_TYPE
} = blocks_constants_namespaceObject;
const ExceptionForm = ({
  exceptions = [],
  getOptions,
  removeException
}) => wp.element.createElement("section", null, exceptions.map((exception, i) => wp.element.createElement(exception_field, {
  key: i,
  index: i,
  onRemoveClick: removeException,
  options: getOptions(i),
  type: exception[template_KEY_TYPE]
})));
ExceptionForm.propTypes = {
  exceptions: external_tribe_modules_propTypes_default.a.arrayOf(external_tribe_modules_propTypes_default.a.shape({})),
  removeException: external_tribe_modules_propTypes_default.a.func.isRequired
};
/* harmony default export */ var exception_form_template = (ExceptionForm);
// CONCATENATED MODULE: ./src/modules/elements/exception-form/element.js
var element_tecEventDetails;
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */





/**
 * Module Code
 */

const element_mapStateToProps = state => ({
  getOptions: index => wp.hooks.applyFilters('elements.exceptionForm.exceptionFieldOptionsHook', exception_options_namespaceObject.EXCEPTION_OCCURRENCE_OPTIONS, state, index)
});
const element_isLocked = typeof tecEventDetails !== 'undefined' && ((element_tecEventDetails = tecEventDetails) === null || element_tecEventDetails === void 0 ? void 0 : element_tecEventDetails.lockExclusionsUi);
/* harmony default export */ var exception_form_element = (with_locked_overlay(element_isLocked, Object(external_tribe_modules_redux_["compose"])(Object(external_tribe_common_hoc_["withStore"])(), Object(external_tribe_modules_reactRedux_["connect"])(element_mapStateToProps))(exception_form_template)));
// CONCATENATED MODULE: ./src/modules/elements/exception-form/index.js
/**
 * Internal dependencies
 */

/* harmony default export */ var exception_form = (exception_form_element);
// CONCATENATED MODULE: ./src/modules/elements/recurring-add-field/element.js
var recurring_add_field_element_tecEventDetails;
/**
 * External dependencies
 */




/**
 * Internal dependencies
 */


const RecurringAddField = props => {
  return wp.element.createElement(add_field, props, Object(external_tribe_common_utils_globals_["pro"])().blocks_recurrence_rules.add_rule_text);
};
RecurringAddField.propTypes = {};
const recurring_add_field_element_isLocked = typeof tecEventDetails !== 'undefined' && ((recurring_add_field_element_tecEventDetails = tecEventDetails) === null || recurring_add_field_element_tecEventDetails === void 0 ? void 0 : recurring_add_field_element_tecEventDetails.lockRulesUi);
/* harmony default export */ var recurring_add_field_element = (with_locked_overlay(recurring_add_field_element_isLocked, RecurringAddField));
// CONCATENATED MODULE: ./src/modules/elements/recurring-add-field/index.js
/**
 * Internal dependencies
 */

/* harmony default export */ var recurring_add_field = (recurring_add_field_element);
// CONCATENATED MODULE: ./src/modules/elements/recurring-field/singular.js
/**
 * External dependencies
 */




/**
 * Internal dependencies
 */


const {
  applyFilters: singular_applyFilters
} = wp.hooks;
const singular_getTypePickerRowLabel = () => singular_applyFilters('elements.recurringField.singularTypePickerRowLabelHook', Object(external_wp_i18n_["__"])('Every', 'tribe-events-calendar-pro'));
const singular_SingularField = ({
  isMultiDay,
  options,
  index
}) => {
  return wp.element.createElement(external_React_["Fragment"], null, wp.element.createElement(type_picker, {
    blockType: blocks_constants_namespaceObject.RECURRING,
    index: index,
    options: options,
    rowLabel: singular_getTypePickerRowLabel()
  }), wp.element.createElement(on_date_picker, {
    blockType: blocks_constants_namespaceObject.RECURRING,
    index: index
  }), wp.element.createElement(from_time_range_picker, {
    blockType: blocks_constants_namespaceObject.RECURRING,
    index: index
  }), isMultiDay && wp.element.createElement(recurring_to_date_time_picker, {
    index: index
  }));
};
singular_SingularField.propTypes = {
  isMultiDay: external_tribe_modules_propTypes_default.a.bool.isRequired,
  index: external_tribe_modules_propTypes_default.a.number.isRequired
};
/* harmony default export */ var recurring_field_singular = (singular_SingularField);
// CONCATENATED MODULE: ./src/modules/elements/recurring-field/daily.js

function recurring_field_daily_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function recurring_field_daily_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? recurring_field_daily_ownKeys(Object(t), !0).forEach(function (r) { defineProperty_default()(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : recurring_field_daily_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
/**
 * External dependencies
 */



/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


const {
  applyFilters: recurring_field_daily_applyFilters
} = wp.hooks;
const getFromTimeRangePicker = props => recurring_field_daily_applyFilters('elements.recurringField.dailyFromTimeRangePickerHook', wp.element.createElement(from_time_range_picker, {
  blockType: blocks_constants_namespaceObject.RECURRING,
  index: props.index
}), props);
const getRecurringToDateTimePicker = props => props.isMultiDay && recurring_field_daily_applyFilters('elements.recurringField.dailyRecurringToDateTimePickerHook', wp.element.createElement(recurring_to_date_time_picker, {
  index: props.index
}), props);
const recurring_field_daily_getTypePickerRowLabel = () => recurring_field_daily_applyFilters('elements.recurringField.dailyTypePickerRowLabelHook', Object(external_wp_i18n_["__"])('Every', 'tribe-events-calendar-pro'));
const daily_getAfterTypePicker = props => recurring_field_daily_applyFilters('elements.recurringField.dailyAfterTypePickerHook', null, recurring_field_daily_objectSpread({
  blockType: blocks_constants_namespaceObject.RECURRING
}, props));
const daily_DailyField = props => {
  const {
    index,
    options
  } = props;
  return wp.element.createElement(external_React_["Fragment"], null, wp.element.createElement(type_picker, {
    blockType: blocks_constants_namespaceObject.RECURRING,
    index: index,
    options: options,
    rowLabel: recurring_field_daily_getTypePickerRowLabel()
  }), daily_getAfterTypePicker(props), getFromTimeRangePicker(props), getRecurringToDateTimePicker(props), wp.element.createElement(series_ends, {
    blockType: blocks_constants_namespaceObject.RECURRING,
    index: index
  }));
};
daily_DailyField.propTypes = {
  index: external_tribe_modules_propTypes_default.a.number.isRequired,
  isMultiDay: external_tribe_modules_propTypes_default.a.bool.isRequired
};
/* harmony default export */ var recurring_field_daily = (daily_DailyField);
// CONCATENATED MODULE: ./src/modules/elements/recurring-field/weekly.js

function recurring_field_weekly_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function recurring_field_weekly_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? recurring_field_weekly_ownKeys(Object(t), !0).forEach(function (r) { defineProperty_default()(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : recurring_field_weekly_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
/**
 * External dependencies
 */




/**
 * Internal dependencies
 */


const {
  applyFilters: recurring_field_weekly_applyFilters
} = wp.hooks;
const recurring_field_weekly_getTypePickerRowLabel = () => recurring_field_weekly_applyFilters('elements.recurringField.weeklyTypePickerRowLabelHook', Object(external_wp_i18n_["__"])('Every', 'tribe-events-calendar-pro'));
const recurring_field_weekly_getAfterTypePicker = props => recurring_field_weekly_applyFilters('elements.recurringField.weeklyAfterTypePickerHook', null, recurring_field_weekly_objectSpread({
  blockType: blocks_constants_namespaceObject.RECURRING
}, props));
const weekly_getOnDayOfWeek = props => recurring_field_weekly_applyFilters('elements.recurringField.weeklyOnDayOfWeekHook', wp.element.createElement(on_day_of_week, {
  blockType: blocks_constants_namespaceObject.RECURRING,
  index: props.index
}), recurring_field_weekly_objectSpread({
  blockType: blocks_constants_namespaceObject.RECURRING
}, props));
const weekly_getFromTimeRangePicker = props => recurring_field_weekly_applyFilters('elements.recurringField.weeklyFromTimeRangePickerHook', wp.element.createElement(from_time_range_picker, {
  blockType: blocks_constants_namespaceObject.RECURRING,
  index: props.index
}), props);
const weekly_getRecurringToDateTimePicker = props => props.isMultiDay && recurring_field_weekly_applyFilters('elements.recurringField.weeklyRecurringToDateTimePickerHook', wp.element.createElement(recurring_to_date_time_picker, {
  index: props.index
}), props);
const weekly_getSeriesEnds = props => recurring_field_weekly_applyFilters('elements.recurringField.weeklySeriesEndsHook', wp.element.createElement(series_ends, {
  blockType: blocks_constants_namespaceObject.RECURRING,
  index: props.index
}), recurring_field_weekly_objectSpread({
  blockType: blocks_constants_namespaceObject.RECURRING
}, props));
const weekly_WeeklyField = props => {
  const {
    options,
    index
  } = props;
  return wp.element.createElement(external_React_["Fragment"], null, wp.element.createElement(type_picker, {
    blockType: blocks_constants_namespaceObject.RECURRING,
    index: index,
    options: options,
    rowLabel: recurring_field_weekly_getTypePickerRowLabel()
  }), recurring_field_weekly_getAfterTypePicker(props), weekly_getOnDayOfWeek(props), weekly_getFromTimeRangePicker(props), weekly_getRecurringToDateTimePicker(props), weekly_getSeriesEnds(props));
};
weekly_WeeklyField.propTypes = {
  isMultiDay: external_tribe_modules_propTypes_default.a.bool.isRequired,
  index: external_tribe_modules_propTypes_default.a.number.isRequired
};
/* harmony default export */ var recurring_field_weekly = (weekly_WeeklyField);
// CONCATENATED MODULE: ./src/modules/elements/recurring-field/monthly.js

function recurring_field_monthly_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function recurring_field_monthly_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? recurring_field_monthly_ownKeys(Object(t), !0).forEach(function (r) { defineProperty_default()(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : recurring_field_monthly_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
/**
 * External dependencies
 */




/**
 * Internal dependencies
 */


const {
  applyFilters: recurring_field_monthly_applyFilters
} = wp.hooks;
const recurring_field_monthly_getTypePickerRowLabel = () => recurring_field_monthly_applyFilters('elements.recurringField.monthlyTypePickerRowLabelHook', Object(external_wp_i18n_["__"])('Every', 'tribe-events-calendar-pro'));
const recurring_field_monthly_getAfterTypePicker = props => recurring_field_monthly_applyFilters('elements.recurringField.monthlyAfterTypePickerHook', null, recurring_field_monthly_objectSpread({
  blockType: blocks_constants_namespaceObject.RECURRING
}, props));
const monthly_getOnDayOfMonthPicker = props => recurring_field_monthly_applyFilters('elements.recurringField.monthlyOnDayOfMonthPickerHook', wp.element.createElement(on_day_of_month_picker, {
  blockType: blocks_constants_namespaceObject.RECURRING,
  index: props.index
}), recurring_field_monthly_objectSpread({
  blockType: blocks_constants_namespaceObject.RECURRING
}, props));
const monthly_getFromTimeRangePicker = props => recurring_field_monthly_applyFilters('elements.recurringField.monthlyFromTimeRangePickerHook', wp.element.createElement(from_time_range_picker, {
  blockType: blocks_constants_namespaceObject.RECURRING,
  index: props.index
}), props);
const monthly_getRecurringToDateTimePicker = props => props.isMultiDay && recurring_field_monthly_applyFilters('elements.recurringField.monthlyRecurringToDateTimePickerHook', wp.element.createElement(recurring_to_date_time_picker, {
  index: props.index
}), props);
const recurring_field_monthly_getSeriesEnds = props => recurring_field_monthly_applyFilters('elements.recurringField.monthlySeriesEndsHook', wp.element.createElement(series_ends, {
  blockType: blocks_constants_namespaceObject.RECURRING,
  index: props.index
}), recurring_field_monthly_objectSpread({
  blockType: blocks_constants_namespaceObject.RECURRING
}, props));
const monthly_MonthlyField = props => {
  const {
    options,
    index
  } = props;
  return wp.element.createElement(external_React_["Fragment"], null, wp.element.createElement(type_picker, {
    blockType: blocks_constants_namespaceObject.RECURRING,
    index: index,
    options: options,
    rowLabel: recurring_field_monthly_getTypePickerRowLabel()
  }), recurring_field_monthly_getAfterTypePicker(props), monthly_getOnDayOfMonthPicker(props), monthly_getFromTimeRangePicker(props), monthly_getRecurringToDateTimePicker(props), recurring_field_monthly_getSeriesEnds(props));
};
monthly_MonthlyField.propTypes = {
  isMultiDay: external_tribe_modules_propTypes_default.a.bool.isRequired,
  index: external_tribe_modules_propTypes_default.a.number.isRequired
};
/* harmony default export */ var recurring_field_monthly = (monthly_MonthlyField);
// CONCATENATED MODULE: ./src/modules/elements/recurring-field/yearly.js

function recurring_field_yearly_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function recurring_field_yearly_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? recurring_field_yearly_ownKeys(Object(t), !0).forEach(function (r) { defineProperty_default()(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : recurring_field_yearly_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
/**
 * External dependencies
 */




/**
 * Internal dependencies
 */


const {
  applyFilters: recurring_field_yearly_applyFilters
} = wp.hooks;
const recurring_field_yearly_getTypePickerRowLabel = () => recurring_field_yearly_applyFilters('elements.recurringField.yearlyTypePickerRowLabelHook', Object(external_wp_i18n_["__"])('Every', 'tribe-events-calendar-pro'));
const recurring_field_yearly_getAfterTypePicker = props => recurring_field_yearly_applyFilters('elements.recurringField.yearlyAfterTypePickerHook', null, recurring_field_yearly_objectSpread({
  blockType: blocks_constants_namespaceObject.RECURRING
}, props));
const yearly_getInMonth = props => recurring_field_yearly_applyFilters('elements.recurringField.yearlyInMonthHook', wp.element.createElement(in_month, {
  blockType: blocks_constants_namespaceObject.RECURRING,
  index: props.index
}), recurring_field_yearly_objectSpread({
  blockType: blocks_constants_namespaceObject.RECURRING
}, props));
const recurring_field_yearly_getOnDayOfMonthPicker = props => recurring_field_yearly_applyFilters('elements.recurringField.yearlyOnDayOfMonthPickerHook', wp.element.createElement(on_day_of_month_picker, {
  blockType: blocks_constants_namespaceObject.RECURRING,
  index: props.index
}), recurring_field_yearly_objectSpread({
  blockType: blocks_constants_namespaceObject.RECURRING
}, props));
const yearly_getFromTimeRangePicker = props => recurring_field_yearly_applyFilters('elements.recurringField.yearlyFromTimeRangePickerHook', wp.element.createElement(from_time_range_picker, {
  blockType: blocks_constants_namespaceObject.RECURRING,
  index: props.index
}), props);
const yearly_getRecurringToDateTimePicker = props => props.isMultiDay && recurring_field_yearly_applyFilters('elements.recurringField.yearlyRecurringToDateTimePickerHook', wp.element.createElement(recurring_to_date_time_picker, {
  index: props.index
}), props);
const recurring_field_yearly_getSeriesEnds = props => recurring_field_yearly_applyFilters('elements.recurringField.yearlySeriesEndsHook', wp.element.createElement(series_ends, {
  blockType: blocks_constants_namespaceObject.RECURRING,
  index: props.index
}), recurring_field_yearly_objectSpread({
  blockType: blocks_constants_namespaceObject.RECURRING
}, props));
const yearly_YearlyField = props => {
  const {
    options,
    index
  } = props;
  return wp.element.createElement(external_React_["Fragment"], null, wp.element.createElement(type_picker, {
    blockType: blocks_constants_namespaceObject.RECURRING,
    index: index,
    options: options,
    rowLabel: recurring_field_yearly_getTypePickerRowLabel()
  }), recurring_field_yearly_getAfterTypePicker(props), yearly_getInMonth(props), recurring_field_yearly_getOnDayOfMonthPicker(props), yearly_getFromTimeRangePicker(props), yearly_getRecurringToDateTimePicker(props), recurring_field_yearly_getSeriesEnds(props));
};
yearly_YearlyField.propTypes = {
  isMultiDay: external_tribe_modules_propTypes_default.a.bool.isRequired,
  index: external_tribe_modules_propTypes_default.a.number.isRequired
};
/* harmony default export */ var recurring_field_yearly = (yearly_YearlyField);
// CONCATENATED MODULE: ./src/modules/elements/recurring-field/element.js

/**
 * External dependencies
 */



/**
 * Internal dependencies
 */








const {
  DAILY: recurring_field_element_DAILY,
  WEEKLY: recurring_field_element_WEEKLY,
  MONTHLY: recurring_field_element_MONTHLY,
  YEARLY: recurring_field_element_YEARLY,
  RECURRENCE_TYPES: recurring_field_element_RECURRENCE_TYPES
} = constants_namespaceObject;
class element_RecurringField extends external_React_["PureComponent"] {
  constructor(...args) {
    super(...args);
    defineProperty_default()(this, "handleRemove", () => this.props.onRemoveClick(this.props.index));
    defineProperty_default()(this, "renderFieldType", () => {
      const {
        index,
        isMultiDay,
        options,
        type
      } = this.props;
      switch (type) {
        case recurring_field_element_DAILY:
          return wp.element.createElement(recurring_field_daily, {
            index: index,
            isMultiDay: isMultiDay,
            options: options
          });
        case recurring_field_element_WEEKLY:
          return wp.element.createElement(recurring_field_weekly, {
            index: index,
            isMultiDay: isMultiDay,
            options: options
          });
        case recurring_field_element_MONTHLY:
          return wp.element.createElement(recurring_field_monthly, {
            index: index,
            isMultiDay: isMultiDay,
            options: options
          });
        case recurring_field_element_YEARLY:
          return wp.element.createElement(recurring_field_yearly, {
            index: index,
            isMultiDay: isMultiDay,
            options: options
          });
        default:
          return wp.element.createElement(recurring_field_singular, {
            index: index,
            isMultiDay: isMultiDay,
            options: options
          });
      }
    });
  }
  render() {
    return wp.element.createElement(fieldset, null, wp.element.createElement(remove_field, {
      onClick: this.handleRemove
    }), this.renderFieldType());
  }
}
defineProperty_default()(element_RecurringField, "propTypes", {
  index: external_tribe_modules_propTypes_default.a.number.isRequired,
  isMultiDay: external_tribe_modules_propTypes_default.a.bool.isRequired,
  onRemoveClick: external_tribe_modules_propTypes_default.a.func.isRequired,
  options: external_tribe_modules_propTypes_default.a.array.isRequired,
  type: external_tribe_modules_propTypes_default.a.oneOf(recurring_field_element_RECURRENCE_TYPES).isRequired
});
// CONCATENATED MODULE: ./src/modules/elements/recurring-field/index.js
/**
 * Internal dependencies
 */

/* harmony default export */ var recurring_field = (element_RecurringField);
// EXTERNAL MODULE: ./src/modules/elements/panel-header/style.pcss
var panel_header_style = __webpack_require__("1bJb");

// CONCATENATED MODULE: ./src/modules/elements/panel-header/element.js
/**
 * External Dependencies
 */




/**
 * Internal Dependencies
 */


const PanelHeader = ({
  children,
  count,
  isExpanded,
  onClick,
  type
}) => {
  return wp.element.createElement("header", {
    className: external_tribe_modules_classnames_default()('tribe-editor__events-pro__panel-header', {
      'tribe-editor__events-pro__panel-header--expanded': isExpanded,
      [`tribe-editor__events-pro__panel-header--${type}`]: type
    })
  }, wp.element.createElement("button", {
    className: "tribe-editor__events-pro__panel-header-button",
    onClick: onClick,
    type: "button"
  }, wp.element.createElement("span", {
    className: "tribe-editor__events-pro__panel-header-button-text"
  }, wp.element.createElement("span", {
    className: "tribe-editor__events-pro__panel-header-button-title"
  }, children), !!count && !isExpanded && wp.element.createElement("span", {
    className: "tribe-editor__events-pro__panel-header-button-count"
  }, `(${count})`)), wp.element.createElement(arrow, null)));
};
PanelHeader.propTypes = {
  children: external_tribe_modules_propTypes_default.a.node.isRequired,
  count: external_tribe_modules_propTypes_default.a.number.isRequired,
  isExpanded: external_tribe_modules_propTypes_default.a.bool.isRequired,
  onClick: external_tribe_modules_propTypes_default.a.func.isRequired,
  type: external_tribe_modules_propTypes_default.a.string
};
/* harmony default export */ var panel_header_element = (PanelHeader);
// CONCATENATED MODULE: ./src/modules/elements/panel-header/index.js
/**
 * Internal dependencies
 */

/* harmony default export */ var panel_header = (panel_header_element);
// CONCATENATED MODULE: ./src/modules/elements/panel/element.js
/**
 * External Dependencies
 */



/**
 * Internal Dependencies
 */


const Panel = ({
  children,
  count,
  isExpanded,
  onHeaderClick,
  panelTitle,
  type
}) => {
  return wp.element.createElement("section", null, wp.element.createElement(panel_header, {
    count: count,
    onClick: onHeaderClick,
    isExpanded: isExpanded,
    type: type
  }, panelTitle), isExpanded && children);
};
Panel.propTypes = {
  children: external_tribe_modules_propTypes_default.a.node.isRequired,
  count: external_tribe_modules_propTypes_default.a.number.isRequired,
  isExpanded: external_tribe_modules_propTypes_default.a.bool.isRequired,
  panelTitle: external_tribe_modules_propTypes_default.a.string.isRequired,
  onHeaderClick: external_tribe_modules_propTypes_default.a.func.isRequired,
  type: external_tribe_modules_propTypes_default.a.string
};
/* harmony default export */ var panel_element = (Panel);
// CONCATENATED MODULE: ./src/modules/elements/panel/index.js
/**
 * Internal dependencies
 */

/* harmony default export */ var panel = (panel_element);
// EXTERNAL MODULE: ./src/modules/elements/row/style.pcss
var row_style = __webpack_require__("uPrq");

// CONCATENATED MODULE: ./src/modules/elements/row/element.js
/**
 * External Dependencies
 */




const Row = ({
  children,
  className
}) => wp.element.createElement("div", {
  className: external_tribe_modules_classnames_default()('tribe-editor__events-pro__row', className)
}, children);
Row.propTypes = {
  children: external_tribe_modules_propTypes_default.a.node.isRequired,
  className: external_tribe_modules_propTypes_default.a.string
};
/* harmony default export */ var row_element = (Row);
// CONCATENATED MODULE: ./src/modules/elements/row/index.js
/**
 * Internal dependencies
 */

/* harmony default export */ var row = (row_element);
// EXTERNAL MODULE: ./src/modules/elements/label/style.pcss
var label_style = __webpack_require__("cEuG");

// CONCATENATED MODULE: ./src/modules/elements/label/element.js
/**
 * External Dependencies
 */




const Label = ({
  children,
  className
}) => wp.element.createElement("div", {
  className: external_tribe_modules_classnames_default()('tribe-editor__events-pro__label', className)
}, wp.element.createElement("span", {
  className: "tribe-editor__events-pro__label-text"
}, children));
Label.propTypes = {
  children: external_tribe_modules_propTypes_default.a.node.isRequired,
  className: external_tribe_modules_propTypes_default.a.string
};
/* harmony default export */ var label_element = (Label);
// CONCATENATED MODULE: ./src/modules/elements/label/index.js
/**
 * Internal dependencies
 */

/* harmony default export */ var elements_label = (label_element);
// EXTERNAL MODULE: ./src/modules/elements/labeled-row/style.pcss
var labeled_row_style = __webpack_require__("0d9/");

// CONCATENATED MODULE: ./src/modules/elements/labeled-row/element.js
/**
 * External Dependencies
 */




/**
 * Internal dependencies
 */



const LabeledRow = ({
  children,
  className,
  label
}) => wp.element.createElement(row, {
  className: external_tribe_modules_classnames_default()('tribe-editor__labeled-row', className)
}, wp.element.createElement(elements_label, {
  className: "tribe-editor__labeled-row__label"
}, label), wp.element.createElement("div", {
  className: "tribe-editor__labeled-row__content"
}, children));
LabeledRow.propTypes = {
  children: external_tribe_modules_propTypes_default.a.node,
  className: external_tribe_modules_propTypes_default.a.string,
  label: external_tribe_modules_propTypes_default.a.node
};
/* harmony default export */ var labeled_row_element = (LabeledRow);
// CONCATENATED MODULE: ./src/modules/elements/labeled-row/index.js
/**
 * Internal dependencies
 */

/* harmony default export */ var labeled_row = (labeled_row_element);
// EXTERNAL MODULE: ./node_modules/uniqid/index.js
var uniqid = __webpack_require__("zJgK");
var uniqid_default = /*#__PURE__*/__webpack_require__.n(uniqid);

// CONCATENATED MODULE: ./src/modules/elements/multi-day-checkbox/element.js

/**
 * External Dependencies
 */






/**
 * Internal Dependencies
 */

class element_MultiDayCheckbox extends external_React_["PureComponent"] {
  constructor(props) {
    super(props);
    this.id = uniqid_default()();
  }
  render() {
    const {
      checked,
      className,
      disabled,
      onChange
    } = this.props;
    return wp.element.createElement(external_tribe_common_elements_["Checkbox"], {
      checked: checked,
      className: external_tribe_modules_classnames_default()('tribe-editor__multi-day-checkbox', className),
      disabled: disabled,
      id: this.id,
      label: Object(external_wp_i18n_["__"])('Multi-day', 'tribe-events-calendar-pro'),
      onChange: onChange
    });
  }
}
defineProperty_default()(element_MultiDayCheckbox, "propTypes", {
  checked: external_tribe_modules_propTypes_default.a.bool.isRequired,
  className: external_tribe_modules_propTypes_default.a.string,
  disabled: external_tribe_modules_propTypes_default.a.bool,
  onChange: external_tribe_modules_propTypes_default.a.func.isRequired
});
/* harmony default export */ var multi_day_checkbox_element = (element_MultiDayCheckbox);
// CONCATENATED MODULE: ./src/modules/elements/multi-day-checkbox/index.js
/**
 * Internal dependencies
 */

/* harmony default export */ var multi_day_checkbox = (multi_day_checkbox_element);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__("QILm");
var objectWithoutProperties_default = /*#__PURE__*/__webpack_require__.n(objectWithoutProperties);

// EXTERNAL MODULE: ./node_modules/date-fns/format.js + 10 modules
var format = __webpack_require__("U4kA");

// EXTERNAL MODULE: ./node_modules/date-fns/parse.js + 44 modules
var parse = __webpack_require__("t3m+");

// EXTERNAL MODULE: ./src/modules/elements/series-ends/style.pcss
var series_ends_style = __webpack_require__("NK/P");

// CONCATENATED MODULE: ./src/modules/elements/series-ends/template.js
/**
 * External dependencies
 */






/**
 * Internal dependencies
 */





const getPostfix = props => {
  const {
    dayPickerInputDisabled,
    numberInputDisabled,
    onSeriesEndsAfterTimesChange,
    onSeriesEndsOnDateChange,
    seriesEnds,
    seriesEndsAfterTimes,
    seriesEndsOnDate,
    seriesEndsOnDateFormat = 'LL'
  } = props;
  let postfix = null;
  if (seriesEnds && seriesEnds.value === DATE) {
    const seriesEndsOnDateObj = new Date(seriesEndsOnDate);
    postfix = wp.element.createElement(external_tribe_common_elements_["DayPickerInput"], {
      value: seriesEndsOnDate,
      format: seriesEndsOnDateFormat,
      formatDate: format["a" /* formatDate */],
      parseDate: parse["a" /* parse */],
      dayPickerProps: {
        modifiers: {
          start: seriesEndsOnDateObj,
          end: seriesEndsOnDateObj
        }
      },
      onDayChange: onSeriesEndsOnDateChange,
      inputProps: {
        disabled: dayPickerInputDisabled
      }
    });
  } else if (seriesEnds && seriesEnds.value === COUNT) {
    postfix = wp.element.createElement(external_React_["Fragment"], null, wp.element.createElement(external_tribe_common_elements_["NumberInput"], {
      className: "tribe-editor__series-ends__number-input",
      disabled: numberInputDisabled,
      min: 1,
      value: seriesEndsAfterTimes,
      onChange: onSeriesEndsAfterTimesChange
    }), wp.element.createElement("span", {
      className: "tribe-editor__series-ends__number-input-label"
    }, seriesEndsAfterTimes > 1 ? Object(external_wp_i18n_["__"])('events', 'tribe-events-calendar-pro') : Object(external_wp_i18n_["__"])('event', 'tribe-events-calendar-pro')));
  }
  return postfix;
};
const SeriesEnds = props => {
  const {
    className,
    onSeriesEndsChange,
    rowLabel = Object(external_wp_i18n_["__"])('Ends', 'tribe-events-calendar-pro'),
    selectDisabled,
    seriesEnds,
    seriesEndsOnDateFormat = 'LL'
  } = props;
  return wp.element.createElement(labeled_row, {
    className: external_tribe_modules_classnames_default()('tribe-editor__series-ends', className),
    label: rowLabel
  }, wp.element.createElement(external_tribe_common_elements_["Select"], {
    className: "tribe-editor__series-ends__select",
    backspaceRemovesValue: false,
    isDisabled: selectDisabled,
    value: seriesEnds,
    isSearchable: false,
    options: SERIES_ENDS_OPTIONS,
    onChange: onSeriesEndsChange
  }), getPostfix(props));
};
SeriesEnds.propTypes = {
  className: external_tribe_modules_propTypes_default.a.string,
  dayPickerInputDisabled: external_tribe_modules_propTypes_default.a.bool,
  numberInputDisabled: external_tribe_modules_propTypes_default.a.bool,
  onSeriesEndsAfterTimesChange: external_tribe_modules_propTypes_default.a.func,
  onSeriesEndsChange: external_tribe_modules_propTypes_default.a.func,
  onSeriesEndsOnDateChange: external_tribe_modules_propTypes_default.a.func,
  rowLabel: external_tribe_modules_propTypes_default.a.string,
  selectDisabled: external_tribe_modules_propTypes_default.a.bool,
  seriesEnds: external_tribe_modules_propTypes_default.a.oneOf(SERIES_ENDS_OPTIONS),
  seriesEndsAfterTimes: external_tribe_modules_propTypes_default.a.number,
  seriesEndsOnDate: external_tribe_modules_propTypes_default.a.string,
  seriesEndsOnDateFormat: external_tribe_modules_propTypes_default.a.string
};
/* harmony default export */ var series_ends_template = (SeriesEnds);
// CONCATENATED MODULE: ./src/modules/elements/series-ends/element.js


const _excluded = ["end"],
  _excluded2 = ["edit"];
function element_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function element_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? element_ownKeys(Object(t), !0).forEach(function (r) { defineProperty_default()(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : element_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */







const {
  RECURRING: element_RECURRING,
  KEY_LIMIT: element_KEY_LIMIT,
  KEY_LIMIT_DATE_INPUT: element_KEY_LIMIT_DATE_INPUT,
  KEY_LIMIT_DATE_OBJ: element_KEY_LIMIT_DATE_OBJ,
  KEY_LIMIT_TYPE: element_KEY_LIMIT_TYPE
} = blocks_constants_namespaceObject;
const {
  COUNT: element_COUNT,
  DATE: element_DATE
} = constants_namespaceObject;
const {
  toMoment: element_toMoment,
  toDatabaseDate: element_toDatabaseDate
} = external_tribe_common_utils_["moment"];
const element_onSeriesEndsAfterTimesChange = (ownProps, edit) => e => {
  const limit = parseInt(e.target.value, 10);
  edit(ownProps.index, {
    [element_KEY_LIMIT]: limit
  });
};
const element_onSeriesEndsChange = (ownProps, edit) => selectedOption => edit(ownProps.index, {
  [element_KEY_LIMIT_TYPE]: selectedOption.value
});
const element_onSeriesEndsOnDateChange = (ownProps, edit, end) => (date, modifiers, dayPickerInput) => {
  // default end date is date time end date if date is undefined
  const limitDate = date ? date : end;
  edit(ownProps.index, {
    [element_KEY_LIMIT_DATE_INPUT]: dayPickerInput,
    [element_KEY_LIMIT_DATE_OBJ]: date,
    [element_KEY_LIMIT]: element_toDatabaseDate(element_toMoment(limitDate))
  });
};
const series_ends_element_mapStateToProps = (state, ownProps) => {
  const selectors = ownProps.blockType === element_RECURRING ? recurring_selectors_namespaceObject : exception_selectors_namespaceObject;
  const limitType = selectors.getLimitType(state, ownProps);
  const stateProps = {
    end: external_tribe_events_data_["blocks"].datetime.selectors.getEnd(state),
    seriesEnds: selectors.getLimitTypeOption(state, ownProps)
  };
  if (limitType === element_DATE) {
    stateProps.seriesEndsOnDate = selectors.getLimitDateInput(state, ownProps);
  } else if (limitType === element_COUNT) {
    stateProps.seriesEndsAfterTimes = selectors.getLimit(state, ownProps);
  }
  return stateProps;
};
const series_ends_element_mapDispatchToProps = (dispatch, ownProps) => {
  const editAction = ownProps.blockType === element_RECURRING ? actions_namespaceObject.editRule : exception_actions_namespaceObject.editException;
  const edit = (index, payload) => dispatch(editAction(index, payload));
  return {
    edit,
    onSeriesEndsAfterTimesChange: element_onSeriesEndsAfterTimesChange(ownProps, edit),
    onSeriesEndsChange: element_onSeriesEndsChange(ownProps, edit)
  };
};
const element_mergeProps = (stateProps, dispatchProps, ownProps) => {
  const {
      end
    } = stateProps,
    restStateProps = objectWithoutProperties_default()(stateProps, _excluded);
  const {
      edit
    } = dispatchProps,
    restDispatchProps = objectWithoutProperties_default()(dispatchProps, _excluded2);
  return element_objectSpread(element_objectSpread(element_objectSpread(element_objectSpread({}, ownProps), restStateProps), restDispatchProps), {}, {
    onSeriesEndsOnDateChange: element_onSeriesEndsOnDateChange(ownProps, edit, end)
  });
};
/* harmony default export */ var series_ends_element = (Object(external_tribe_modules_redux_["compose"])(Object(external_tribe_common_hoc_["withStore"])(), Object(external_tribe_modules_reactRedux_["connect"])(series_ends_element_mapStateToProps, series_ends_element_mapDispatchToProps, element_mergeProps))(series_ends_template));
// CONCATENATED MODULE: ./src/modules/elements/series-ends/index.js
/**
 * Internal dependencies
 */

/* harmony default export */ var series_ends = (series_ends_element);
// EXTERNAL MODULE: ./src/modules/elements/day-of-week-picker/day-of-week/style.pcss
var day_of_week_style = __webpack_require__("aJRi");

// CONCATENATED MODULE: ./src/modules/elements/day-of-week-picker/day-of-week/element.js

function day_of_week_element_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function day_of_week_element_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? day_of_week_element_ownKeys(Object(t), !0).forEach(function (r) { defineProperty_default()(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : day_of_week_element_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
/**
 * External dependencies
 */





/**
 * Internal dependencies
 */


const {
  applyFilters: element_applyFilters
} = wp.hooks;
class element_DayOfWeek extends external_React_["PureComponent"] {
  constructor(props) {
    super(props);
    defineProperty_default()(this, "getLabel", (label, labelTitle) => wp.element.createElement("abbr", {
      className: "tribe-editor__day-of-week__label-abbr",
      title: labelTitle
    }, label));
    this.id = uniqid_default()();
  }
  render() {
    const {
      checked,
      className,
      disabled,
      label,
      labelTitle,
      onChange,
      value
    } = this.props;
    return element_applyFilters('elements.dayOfWeek.dayOfWeekContentHook', wp.element.createElement(external_tribe_common_elements_["Checkbox"], {
      checked: checked,
      className: external_tribe_modules_classnames_default()('tribe-editor__day-of-week', className),
      disabled: disabled,
      id: this.id,
      label: this.getLabel(label, labelTitle),
      onChange: onChange,
      value: value
    }), day_of_week_element_objectSpread(day_of_week_element_objectSpread({}, this.props), {}, {
      id: this.id,
      labelComponent: this.getLabel(label, labelTitle)
    }));
  }
}
defineProperty_default()(element_DayOfWeek, "propTypes", {
  blockType: external_tribe_modules_propTypes_default.a.string,
  checked: external_tribe_modules_propTypes_default.a.bool.isRequired,
  className: external_tribe_modules_propTypes_default.a.string,
  disabled: external_tribe_modules_propTypes_default.a.bool,
  index: external_tribe_modules_propTypes_default.a.number,
  label: external_tribe_modules_propTypes_default.a.string.isRequired,
  labelTitle: external_tribe_modules_propTypes_default.a.string.isRequired,
  onChange: external_tribe_modules_propTypes_default.a.func.isRequired,
  value: external_tribe_modules_propTypes_default.a.string.isRequired
});
/* harmony default export */ var day_of_week_element = (element_DayOfWeek);
// CONCATENATED MODULE: ./src/modules/elements/day-of-week-picker/day-of-week/index.js
/**
 * Internal dependencies
 */

/* harmony default export */ var day_of_week = (day_of_week_element);
// EXTERNAL MODULE: ./src/modules/elements/day-of-week-picker/style.pcss
var day_of_week_picker_style = __webpack_require__("BWfU");

// CONCATENATED MODULE: ./src/modules/elements/day-of-week-picker/element.js
/**
 * External dependencies
 */




/**
 * Internal dependencies
 */



const {
  SUNDAY: element_SUNDAY,
  MONDAY: element_MONDAY,
  TUESDAY: element_TUESDAY,
  WEDNESDAY: element_WEDNESDAY,
  THURSDAY: element_THURSDAY,
  FRIDAY: element_FRIDAY,
  SATURDAY: element_SATURDAY,
  SUNDAY_LABEL: element_SUNDAY_LABEL,
  MONDAY_LABEL: element_MONDAY_LABEL,
  TUESDAY_LABEL: element_TUESDAY_LABEL,
  WEDNESDAY_LABEL: element_WEDNESDAY_LABEL,
  THURSDAY_LABEL: element_THURSDAY_LABEL,
  FRIDAY_LABEL: element_FRIDAY_LABEL,
  SATURDAY_LABEL: element_SATURDAY_LABEL,
  SUNDAY_ABBR: element_SUNDAY_ABBR,
  MONDAY_ABBR: element_MONDAY_ABBR,
  TUESDAY_ABBR: element_TUESDAY_ABBR,
  WEDNESDAY_ABBR: element_WEDNESDAY_ABBR,
  THURSDAY_ABBR: element_THURSDAY_ABBR,
  FRIDAY_ABBR: element_FRIDAY_ABBR,
  SATURDAY_ABBR: element_SATURDAY_ABBR
} = constants_namespaceObject;
const DayOfWeekPicker = ({
  blockType,
  className,
  sundayChecked,
  sundayDisabled,
  mondayChecked,
  mondayDisabled,
  tuesdayChecked,
  tuesdayDisabled,
  wednesdayChecked,
  wednesdayDisabled,
  thursdayChecked,
  thursdayDisabled,
  fridayChecked,
  fridayDisabled,
  saturdayChecked,
  saturdayDisabled,
  index,
  onDayChange
}) => /* eslint-disable max-len */
wp.element.createElement("div", {
  className: external_tribe_modules_classnames_default()('tribe-editor__day-of-week-picker', className)
}, wp.element.createElement(day_of_week, {
  blockType: blockType,
  checked: sundayChecked,
  className: external_tribe_modules_classnames_default()({
    'tribe-editor__day-of-week-picker__day': true,
    'tribe-editor__day-of-week-picker__day--sunday': true,
    'tribe-editor__day-of-week-picker__day--disabled': sundayDisabled
  }),
  disabled: sundayDisabled,
  index: index,
  label: element_SUNDAY_ABBR,
  labelTitle: element_SUNDAY_LABEL,
  onChange: onDayChange,
  value: element_SUNDAY
}), wp.element.createElement(day_of_week, {
  blockType: blockType,
  checked: mondayChecked,
  className: external_tribe_modules_classnames_default()({
    'tribe-editor__day-of-week-picker__day': true,
    'tribe-editor__day-of-week-picker__day--monday': true,
    'tribe-editor__day-of-week-picker__day--disabled': mondayDisabled
  }),
  disabled: mondayDisabled,
  index: index,
  label: element_MONDAY_ABBR,
  labelTitle: element_MONDAY_LABEL,
  onChange: onDayChange,
  value: element_MONDAY
}), wp.element.createElement(day_of_week, {
  blockType: blockType,
  checked: tuesdayChecked,
  className: external_tribe_modules_classnames_default()({
    'tribe-editor__day-of-week-picker__day': true,
    'tribe-editor__day-of-week-picker__day--tuesday': true,
    'tribe-editor__day-of-week-picker__day--disabled': tuesdayDisabled
  }),
  disabled: tuesdayDisabled,
  index: index,
  label: element_TUESDAY_ABBR,
  labelTitle: element_TUESDAY_LABEL,
  onChange: onDayChange,
  value: element_TUESDAY
}), wp.element.createElement(day_of_week, {
  blockType: blockType,
  checked: wednesdayChecked,
  className: external_tribe_modules_classnames_default()({
    'tribe-editor__day-of-week-picker__day': true,
    'tribe-editor__day-of-week-picker__day--wednesday': true,
    'tribe-editor__day-of-week-picker__day--disabled': wednesdayDisabled
  }),
  disabled: wednesdayDisabled,
  index: index,
  label: element_WEDNESDAY_ABBR,
  labelTitle: element_WEDNESDAY_LABEL,
  onChange: onDayChange,
  value: element_WEDNESDAY
}), wp.element.createElement(day_of_week, {
  blockType: blockType,
  checked: thursdayChecked,
  className: external_tribe_modules_classnames_default()({
    'tribe-editor__day-of-week-picker__day': true,
    'tribe-editor__day-of-week-picker__day--thursday': true,
    'tribe-editor__day-of-week-picker__day--disabled': thursdayDisabled
  }),
  disabled: thursdayDisabled,
  index: index,
  label: element_THURSDAY_ABBR,
  labelTitle: element_THURSDAY_LABEL,
  onChange: onDayChange,
  value: element_THURSDAY
}), wp.element.createElement(day_of_week, {
  blockType: blockType,
  checked: fridayChecked,
  className: external_tribe_modules_classnames_default()({
    'tribe-editor__day-of-week-picker__day': true,
    'tribe-editor__day-of-week-picker__day--friday': true,
    'tribe-editor__day-of-week-picker__day--disabled': fridayDisabled
  }),
  disabled: fridayDisabled,
  index: index,
  label: element_FRIDAY_ABBR,
  labelTitle: element_FRIDAY_LABEL,
  onChange: onDayChange,
  value: element_FRIDAY
}), wp.element.createElement(day_of_week, {
  blockType: blockType,
  checked: saturdayChecked,
  className: external_tribe_modules_classnames_default()({
    'tribe-editor__day-of-week-picker__day': true,
    'tribe-editor__day-of-week-picker__day--saturday': true,
    'tribe-editor__day-of-week-picker__day--disabled': saturdayDisabled
  }),
  disabled: saturdayDisabled,
  index: index,
  label: element_SATURDAY_ABBR,
  labelTitle: element_SATURDAY_LABEL,
  onChange: onDayChange,
  value: element_SATURDAY
}))
/* eslint-enable max-len */;
DayOfWeekPicker.propTypes = {
  className: external_tribe_modules_propTypes_default.a.string,
  sundayChecked: external_tribe_modules_propTypes_default.a.bool,
  sundayDisabled: external_tribe_modules_propTypes_default.a.bool,
  mondayChecked: external_tribe_modules_propTypes_default.a.bool,
  mondayDisabled: external_tribe_modules_propTypes_default.a.bool,
  tuesdayChecked: external_tribe_modules_propTypes_default.a.bool,
  tuesdayDisabled: external_tribe_modules_propTypes_default.a.bool,
  wednesdayChecked: external_tribe_modules_propTypes_default.a.bool,
  wednesdayDisabled: external_tribe_modules_propTypes_default.a.bool,
  thursdayChecked: external_tribe_modules_propTypes_default.a.bool,
  thursdayDisabled: external_tribe_modules_propTypes_default.a.bool,
  fridayChecked: external_tribe_modules_propTypes_default.a.bool,
  fridayDisabled: external_tribe_modules_propTypes_default.a.bool,
  saturdayChecked: external_tribe_modules_propTypes_default.a.bool,
  saturdayDisabled: external_tribe_modules_propTypes_default.a.bool,
  onDayChange: external_tribe_modules_propTypes_default.a.func.isRequired
};
/* harmony default export */ var day_of_week_picker_element = (DayOfWeekPicker);
// CONCATENATED MODULE: ./src/modules/elements/day-of-week-picker/index.js
/**
 * Internal dependencies
 */

/* harmony default export */ var day_of_week_picker = (day_of_week_picker_element);
// CONCATENATED MODULE: ./src/modules/elements/on-day-of-week/template.js
/**
 * External dependencies
 */





/**
 * Internal dependencies
 */


const OnDayOfWeek = ({
  blockType,
  className,
  sundayChecked,
  sundayDisabled,
  mondayChecked,
  mondayDisabled,
  tuesdayChecked,
  tuesdayDisabled,
  wednesdayChecked,
  wednesdayDisabled,
  thursdayChecked,
  thursdayDisabled,
  fridayChecked,
  fridayDisabled,
  saturdayChecked,
  saturdayDisabled,
  afterDayOfWeekPicker,
  index,
  onDayChange
}) => wp.element.createElement(labeled_row, {
  className: external_tribe_modules_classnames_default()('tribe-editor__on-day-of-week', className),
  label: Object(external_wp_i18n_["__"])('On', 'tribe-events-calendar-pro')
}, wp.element.createElement(day_of_week_picker, {
  blockType: blockType,
  sundayChecked: sundayChecked,
  sundayDisabled: sundayDisabled,
  mondayChecked: mondayChecked,
  mondayDisabled: mondayDisabled,
  tuesdayChecked: tuesdayChecked,
  tuesdayDisabled: tuesdayDisabled,
  wednesdayChecked: wednesdayChecked,
  wednesdayDisabled: wednesdayDisabled,
  thursdayChecked: thursdayChecked,
  thursdayDisabled: thursdayDisabled,
  fridayChecked: fridayChecked,
  fridayDisabled: fridayDisabled,
  saturdayChecked: saturdayChecked,
  saturdayDisabled: saturdayDisabled,
  index: index,
  onDayChange: onDayChange
}), afterDayOfWeekPicker);
OnDayOfWeek.propTypes = {
  blockType: external_tribe_modules_propTypes_default.a.string,
  className: external_tribe_modules_propTypes_default.a.string,
  sundayChecked: external_tribe_modules_propTypes_default.a.bool,
  sundayDisabled: external_tribe_modules_propTypes_default.a.bool,
  mondayChecked: external_tribe_modules_propTypes_default.a.bool,
  mondayDisabled: external_tribe_modules_propTypes_default.a.bool,
  tuesdayChecked: external_tribe_modules_propTypes_default.a.bool,
  tuesdayDisabled: external_tribe_modules_propTypes_default.a.bool,
  wednesdayChecked: external_tribe_modules_propTypes_default.a.bool,
  wednesdayDisabled: external_tribe_modules_propTypes_default.a.bool,
  thursdayChecked: external_tribe_modules_propTypes_default.a.bool,
  thursdayDisabled: external_tribe_modules_propTypes_default.a.bool,
  fridayChecked: external_tribe_modules_propTypes_default.a.bool,
  fridayDisabled: external_tribe_modules_propTypes_default.a.bool,
  saturdayChecked: external_tribe_modules_propTypes_default.a.bool,
  saturdayDisabled: external_tribe_modules_propTypes_default.a.bool,
  afterDayOfWeekPicker: external_tribe_modules_propTypes_default.a.node,
  index: external_tribe_modules_propTypes_default.a.number,
  onDayChange: external_tribe_modules_propTypes_default.a.func
};
/* harmony default export */ var on_day_of_week_template = (OnDayOfWeek);
// CONCATENATED MODULE: ./src/modules/elements/on-day-of-week/element.js


const element_excluded = ["days"];
function on_day_of_week_element_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function on_day_of_week_element_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? on_day_of_week_element_ownKeys(Object(t), !0).forEach(function (r) { defineProperty_default()(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : on_day_of_week_element_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */





const {
  DAYS_OF_THE_WEEK_PROP_KEYS: element_DAYS_OF_THE_WEEK_PROP_KEYS,
  DAYS_OF_THE_WEEK_MAPPING_TO_STATE: element_DAYS_OF_THE_WEEK_MAPPING_TO_STATE,
  DAYS_OF_THE_WEEK_PROP_KEY_MAPPING_FROM_STATE: element_DAYS_OF_THE_WEEK_PROP_KEY_MAPPING_FROM_STATE
} = constants_namespaceObject;
const on_day_of_week_element_mapStateToProps = (state, ownProps) => {
  const selectors = ownProps.blockType === blocks_constants_namespaceObject.RECURRING ? recurring_selectors_namespaceObject : exception_selectors_namespaceObject;
  const days = selectors.getDays(state, ownProps);
  const stateProps = {
    days
  };

  /* eslint-disable wpcalypso/redux-no-bound-selectors */
  // set default checked values of each weekday to false
  element_DAYS_OF_THE_WEEK_PROP_KEYS.forEach(key => {
    stateProps[key] = false;
  });

  // set checked value to true if weekday exists in state
  days.forEach(day => {
    const propKey = element_DAYS_OF_THE_WEEK_PROP_KEY_MAPPING_FROM_STATE[day];
    stateProps[propKey] = true;
  });
  /* eslint-enable wpcalypso/redux-no-bound-selectors */

  stateProps.afterDayOfWeekPicker = wp.hooks.applyFilters('elements.onDayOfWeek.afterDayOfWeekPickerHook', null, state, ownProps);
  return stateProps;
};
const on_day_of_week_element_mapDispatchToProps = (dispatch, ownProps) => {
  const edit = ownProps.blockType === blocks_constants_namespaceObject.RECURRING ? actions_namespaceObject.editRule : exception_actions_namespaceObject.editException;
  return {
    edit: (index, payload) => dispatch(edit(index, payload))
  };
};
const on_day_of_week_element_mergeProps = (stateProps, dispatchProps, ownProps) => {
  const {
      days
    } = stateProps,
    restStateProps = objectWithoutProperties_default()(stateProps, element_excluded);
  const {
    edit
  } = dispatchProps;
  return on_day_of_week_element_objectSpread(on_day_of_week_element_objectSpread(on_day_of_week_element_objectSpread({}, ownProps), restStateProps), {}, {
    onDayChange: e => {
      const {
        checked,
        value
      } = e.target;
      const mappedValue = element_DAYS_OF_THE_WEEK_MAPPING_TO_STATE[value];
      const newDays = checked ? [...days, mappedValue].sort((a, b) => a - b) : days.filter(day => day !== mappedValue);
      edit(ownProps.index, {
        [blocks_constants_namespaceObject.KEY_DAYS]: newDays
      });
    }
  });
};
/* harmony default export */ var on_day_of_week_element = (Object(external_tribe_modules_redux_["compose"])(Object(external_tribe_common_hoc_["withStore"])(), Object(external_tribe_modules_reactRedux_["connect"])(on_day_of_week_element_mapStateToProps, on_day_of_week_element_mapDispatchToProps, on_day_of_week_element_mergeProps))(on_day_of_week_template));
// CONCATENATED MODULE: ./src/modules/elements/on-day-of-week/index.js
/**
 * Internal dependencies
 */

/* harmony default export */ var on_day_of_week = (on_day_of_week_element);
// EXTERNAL MODULE: ./src/modules/elements/day-of-month-picker/style.pcss
var day_of_month_picker_style = __webpack_require__("fSse");

// CONCATENATED MODULE: ./src/modules/elements/day-of-month-picker/element.js

/**
 * External dependencies
 */





/**
 * Internal dependencies
 */



const DayOfMonthPicker = ({
  className,
  dayOfMonth,
  onDayOfMonthChange,
  onWeekDayChange,
  weekDay
}) => {
  const getWeekDaySelect = () => {
    const inWeekOfTheMonth = external_lodash_includes_default()(WEEKS_OF_THE_MONTH_OPTIONS, dayOfMonth);
    return inWeekOfTheMonth && wp.element.createElement(external_tribe_common_elements_["Select"], {
      className: "tribe-editor__day-of-month-picker__week-day-select",
      backspaceRemovesValue: false,
      value: weekDay,
      isSearchable: false,
      options: DAYS_OF_THE_WEEK_OPTIONS,
      onChange: onWeekDayChange
    });
  };
  return wp.element.createElement("div", {
    className: external_tribe_modules_classnames_default()('tribe-editor__day-of-month-picker', className)
  }, wp.element.createElement(external_tribe_common_elements_["Select"], {
    className: "tribe-editor__day-of-month-picker__day-of-month-select",
    backspaceRemovesValue: false,
    value: dayOfMonth,
    isSearchable: false,
    options: MONTH_DAYS_OPTIONS,
    onChange: onDayOfMonthChange
  }), getWeekDaySelect(), wp.element.createElement("span", null, Object(external_wp_i18n_["__"])('of the month', 'tribe-events-calendar-pro')));
};
DayOfMonthPicker.propTypes = {
  className: external_tribe_modules_propTypes_default.a.string,
  dayOfMonth: external_tribe_modules_propTypes_default.a.oneOf(MONTH_DAYS_OPTIONS),
  onWeekDayChange: external_tribe_modules_propTypes_default.a.func,
  onDayOfMonthChange: external_tribe_modules_propTypes_default.a.func,
  weekDay: external_tribe_modules_propTypes_default.a.oneOf(DAYS_OF_THE_WEEK_OPTIONS)
};
/* harmony default export */ var day_of_month_picker_element = (DayOfMonthPicker);
// CONCATENATED MODULE: ./src/modules/elements/day-of-month-picker/index.js
/**
 * Internal dependencies
 */

/* harmony default export */ var day_of_month_picker = (day_of_month_picker_element);
// CONCATENATED MODULE: ./src/modules/elements/on-day-of-month-picker/template.js
/**
 * External dependencies
 */





/**
 * Internal dependencies
 */



const OnDayOfMonthPicker = ({
  afterDayOfMonthPicker,
  className,
  dayOfMonth,
  onDayOfMonthChange,
  onWeekDayChange,
  weekDay
}) => wp.element.createElement(labeled_row, {
  className: external_tribe_modules_classnames_default()('tribe-editor__on-day-of-month-picker', className),
  label: Object(external_wp_i18n_["__"])('On the', 'tribe-events-calendar-pro')
}, wp.element.createElement(day_of_month_picker, {
  dayOfMonth: dayOfMonth,
  onDayOfMonthChange: onDayOfMonthChange,
  onWeekDayChange: onWeekDayChange,
  weekDay: weekDay
}), afterDayOfMonthPicker);
OnDayOfMonthPicker.propTypes = {
  afterDayOfMonthPicker: external_tribe_modules_propTypes_default.a.node,
  className: external_tribe_modules_propTypes_default.a.string,
  dayOfMonth: external_tribe_modules_propTypes_default.a.oneOf(MONTH_DAYS_OPTIONS),
  onDayOfMonthChange: external_tribe_modules_propTypes_default.a.func,
  onWeekDayChange: external_tribe_modules_propTypes_default.a.func,
  weekDay: external_tribe_modules_propTypes_default.a.oneOf(DAYS_OF_THE_WEEK_OPTIONS)
};
/* harmony default export */ var on_day_of_month_picker_template = (OnDayOfMonthPicker);
// CONCATENATED MODULE: ./src/modules/elements/on-day-of-month-picker/element.js


/**
 * External dependencies
 */


/**
 * Internal dependencies
 */





const {
  KEY_DAY: element_KEY_DAY,
  KEY_WEEK: element_KEY_WEEK
} = blocks_constants_namespaceObject;
const {
  DAYS_OF_THE_WEEK_MAPPING_TO_STATE: on_day_of_month_picker_element_DAYS_OF_THE_WEEK_MAPPING_TO_STATE,
  DAYS_OF_THE_WEEK_MAPPING_FROM_STATE: element_DAYS_OF_THE_WEEK_MAPPING_FROM_STATE,
  WEEKS_OF_THE_MONTH: element_WEEKS_OF_THE_MONTH
} = constants_namespaceObject;
const {
  DAYS_OF_THE_WEEK_OPTIONS: element_DAYS_OF_THE_WEEK_OPTIONS,
  WEEKS_OF_THE_MONTH_OPTIONS: element_WEEKS_OF_THE_MONTH_OPTIONS,
  DAYS_OF_THE_MONTH_OPTIONS: element_DAYS_OF_THE_MONTH_OPTIONS
} = options_namespaceObject;
const element_onDayOfMonthChange = (ownProps, edit) => selectedOption => {
  const {
    value
  } = selectedOption;
  const payload = {};
  if (external_lodash_includes_default()(element_WEEKS_OF_THE_MONTH, value)) {
    payload[element_KEY_WEEK] = value;
  } else {
    payload[element_KEY_WEEK] = null;
    payload[element_KEY_DAY] = value;
  }
  edit(ownProps.index, payload);
};
const element_onWeekDayChange = (ownProps, edit) => selectedOption => {
  const {
    value
  } = selectedOption;
  const mappedValue = on_day_of_month_picker_element_DAYS_OF_THE_WEEK_MAPPING_TO_STATE[value];
  edit(ownProps.index, {
    [element_KEY_DAY]: mappedValue
  });
};
const on_day_of_month_picker_element_mapStateToProps = (state, ownProps) => {
  const selectors = ownProps.blockType === blocks_constants_namespaceObject.RECURRING ? recurring_selectors_namespaceObject : exception_selectors_namespaceObject;
  const stateProps = {};
  const week = selectors.getWeek(state, ownProps);
  const day = selectors.getDay(state, ownProps);
  if (external_lodash_includes_default()(element_WEEKS_OF_THE_MONTH, week)) {
    stateProps.dayOfMonth = external_lodash_find_default()(element_WEEKS_OF_THE_MONTH_OPTIONS, {
      value: week
    });
    stateProps.weekDay = external_lodash_find_default()(element_DAYS_OF_THE_WEEK_OPTIONS, {
      value: element_DAYS_OF_THE_WEEK_MAPPING_FROM_STATE[day]
    });
  } else {
    stateProps.dayOfMonth = external_lodash_find_default()(element_DAYS_OF_THE_MONTH_OPTIONS, {
      value: day
    });
  }
  stateProps.afterDayOfMonthPicker = wp.hooks.applyFilters('elements.onDayOfMonthPicker.afterDayOfMonthPickerHook', null, state, ownProps);
  return stateProps;
};
const on_day_of_month_picker_element_mapDispatchToProps = (dispatch, ownProps) => {
  const editAction = ownProps.blockType === blocks_constants_namespaceObject.RECURRING ? actions_namespaceObject.editRule : exception_actions_namespaceObject.editException;
  const edit = (index, payload) => dispatch(editAction(index, payload));
  return {
    onDayOfMonthChange: element_onDayOfMonthChange(ownProps, edit),
    onWeekDayChange: element_onWeekDayChange(ownProps, edit)
  };
};
/* harmony default export */ var on_day_of_month_picker_element = (Object(external_tribe_modules_redux_["compose"])(Object(external_tribe_common_hoc_["withStore"])(), Object(external_tribe_modules_reactRedux_["connect"])(on_day_of_month_picker_element_mapStateToProps, on_day_of_month_picker_element_mapDispatchToProps))(on_day_of_month_picker_template));
// CONCATENATED MODULE: ./src/modules/elements/on-day-of-month-picker/index.js
/**
 * Internal dependencies
 */

/* harmony default export */ var on_day_of_month_picker = (on_day_of_month_picker_element);
// EXTERNAL MODULE: ./src/modules/elements/recurring-to-date-time-picker/style.pcss
var recurring_to_date_time_picker_style = __webpack_require__("zZOC");

// CONCATENATED MODULE: ./src/modules/elements/recurring-to-date-time-picker/template.js
/**
 * External dependencies
 */





/**
 * Internal dependencies
 */





const RecurringToDateTimePicker = ({
  className,
  endTimeInput,
  isAllDay,
  onEndTimeBlur,
  onEndTimeChange,
  onEndTimeClick,
  onRecurringMultiDayChange,
  recurringMultiDay
}) => wp.element.createElement(labeled_row, {
  className: external_tribe_modules_classnames_default()('tribe-editor__recurring-to-date-time-picker', className),
  label: Object(external_wp_i18n_["__"])('To', 'tribe-events-calendar-pro')
}, wp.element.createElement(external_tribe_common_elements_["TimePicker"], {
  current: endTimeInput,
  start: external_tribe_common_utils_["time"].START_OF_DAY,
  end: external_tribe_common_utils_["time"].END_OF_DAY,
  onBlur: onEndTimeBlur,
  onChange: onEndTimeChange,
  onClick: onEndTimeClick,
  showAllDay: true,
  allDay: isAllDay
}), wp.element.createElement("span", null, Object(external_wp_i18n_["__"])('on the', 'tribe-events-calendar-pro')), wp.element.createElement(external_tribe_common_elements_["Select"], {
  className: "tribe-editor__recurring-to-date-time-picker__select",
  backspaceRemovesValue: false,
  value: recurringMultiDay,
  isSearchable: false,
  options: RECURRING_MULTI_DAY_OPTIONS,
  onChange: onRecurringMultiDayChange
}));
RecurringToDateTimePicker.propTypes = {
  className: external_tribe_modules_propTypes_default.a.string,
  endTimeInput: external_tribe_modules_propTypes_default.a.string,
  isAllDay: external_tribe_modules_propTypes_default.a.bool,
  onEndTimeBlur: external_tribe_modules_propTypes_default.a.func,
  onEndTimeChange: external_tribe_modules_propTypes_default.a.func,
  onEndTimeClick: external_tribe_modules_propTypes_default.a.func,
  onRecurringMultiDayChange: external_tribe_modules_propTypes_default.a.func,
  recurringMultiDay: external_tribe_modules_propTypes_default.a.oneOf(RECURRING_MULTI_DAY_OPTIONS)
};
/* harmony default export */ var recurring_to_date_time_picker_template = (RecurringToDateTimePicker);
// CONCATENATED MODULE: ./src/modules/elements/recurring-to-date-time-picker/element.js



const recurring_to_date_time_picker_element_excluded = ["endTime"],
  element_excluded2 = ["dispatch"];
function recurring_to_date_time_picker_element_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function recurring_to_date_time_picker_element_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? recurring_to_date_time_picker_element_ownKeys(Object(t), !0).forEach(function (r) { defineProperty_default()(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : recurring_to_date_time_picker_element_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
/**
 * External dependencies
 */


/**
 * Internal dependencies
 */





const {
  KEY_END_TIME: element_KEY_END_TIME,
  KEY_END_TIME_INPUT: element_KEY_END_TIME_INPUT,
  KEY_MULTI_DAY_SPAN: element_KEY_MULTI_DAY_SPAN
} = blocks_constants_namespaceObject;
const {
  toMoment: recurring_to_date_time_picker_element_toMoment,
  toTime24Hr,
  TIME_FORMAT: element_TIME_FORMAT
} = external_tribe_common_utils_["moment"];
const {
  TIME_FORMAT_HH_MM: element_TIME_FORMAT_HH_MM,
  fromSeconds: element_fromSeconds
} = external_tribe_common_utils_["time"];
const getRecurringMultiDay = (state, ownProps) => {
  const recurringMultiDay = recurring_selectors_namespaceObject.getMultiDaySpan(state, ownProps);
  return external_lodash_find_default()(options_namespaceObject.RECURRING_MULTI_DAY_OPTIONS, option => option.value === recurringMultiDay);
};
const element_onEndTimeBlur = (dispatch, ownProps, endTimeNoSeconds) => e => {
  let endTimeMoment = recurring_to_date_time_picker_element_toMoment(e.target.value, element_TIME_FORMAT, false);
  if (!endTimeMoment.isValid()) {
    endTimeMoment = recurring_to_date_time_picker_element_toMoment(endTimeNoSeconds, element_TIME_FORMAT, false);
  }
  const endTime = toTime24Hr(endTimeMoment);
  dispatch(actions_namespaceObject.editRule(ownProps.index, {
    [element_KEY_END_TIME]: endTime
  }));
};
const element_onEndTimeChange = (dispatch, ownProps) => e => dispatch(actions_namespaceObject.editRule(ownProps.index, {
  [element_KEY_END_TIME_INPUT]: e.target.value
}));
const element_onEndTimeClick = (dispatch, ownProps) => (value, onClose) => {
  const endTime = value === 'all-day' ? value : element_fromSeconds(value, element_TIME_FORMAT_HH_MM);
  dispatch(actions_namespaceObject.editRule(ownProps.index, {
    [element_KEY_END_TIME]: endTime
  }));
  onClose();
};
const element_onRecurringMultiDayChange = (dispatch, ownProps) => selectedOption => dispatch(actions_namespaceObject.editRule(ownProps.index, {
  [element_KEY_MULTI_DAY_SPAN]: selectedOption.value
}));
const recurring_to_date_time_picker_element_mapStateToProps = (state, ownProps) => ({
  endTime: recurring_selectors_namespaceObject.getEndTimeNoSeconds(state, ownProps),
  endTimeInput: recurring_selectors_namespaceObject.getEndTimeInput(state, ownProps),
  isAllDay: recurring_selectors_namespaceObject.getAllDay(state, ownProps),
  recurringMultiDay: getRecurringMultiDay(state, ownProps)
});
const recurring_to_date_time_picker_element_mapDispatchToProps = (dispatch, ownProps) => ({
  onEndTimeChange: element_onEndTimeChange(dispatch, ownProps),
  onEndTimeClick: element_onEndTimeClick(dispatch, ownProps),
  onRecurringMultiDayChange: element_onRecurringMultiDayChange(dispatch, ownProps),
  dispatch
});
const recurring_to_date_time_picker_element_mergeProps = (stateProps, dispatchProps, ownProps) => {
  const {
      endTime
    } = stateProps,
    restStateProps = objectWithoutProperties_default()(stateProps, recurring_to_date_time_picker_element_excluded);
  const {
      dispatch
    } = dispatchProps,
    restDispatchProps = objectWithoutProperties_default()(dispatchProps, element_excluded2);
  return recurring_to_date_time_picker_element_objectSpread(recurring_to_date_time_picker_element_objectSpread(recurring_to_date_time_picker_element_objectSpread(recurring_to_date_time_picker_element_objectSpread({}, ownProps), restStateProps), restDispatchProps), {}, {
    onEndTimeBlur: element_onEndTimeBlur(dispatch, ownProps, endTime)
  });
};
/* harmony default export */ var recurring_to_date_time_picker_element = (Object(external_tribe_modules_redux_["compose"])(Object(external_tribe_common_hoc_["withStore"])(), Object(external_tribe_modules_reactRedux_["connect"])(recurring_to_date_time_picker_element_mapStateToProps, recurring_to_date_time_picker_element_mapDispatchToProps, recurring_to_date_time_picker_element_mergeProps))(recurring_to_date_time_picker_template));
// CONCATENATED MODULE: ./src/modules/elements/recurring-to-date-time-picker/index.js
/**
 * Internal dependencies
 */

/* harmony default export */ var recurring_to_date_time_picker = (recurring_to_date_time_picker_element);
// EXTERNAL MODULE: ./src/modules/elements/single-to-date-time-picker/style.pcss
var single_to_date_time_picker_style = __webpack_require__("OM1g");

// CONCATENATED MODULE: ./src/modules/elements/single-to-date-time-picker/template.js
/**
 * External dependencies
 */






/**
 * Internal dependencies
 */




const SingleToDateTimePicker = ({
  className,
  endDate,
  endDateFormat,
  endTimeInput,
  isAllDay,
  onEndTimeBlur,
  onEndDateChange,
  onEndTimeChange,
  onEndTimeClick
}) => {
  const endDateObj = new Date(endDate);
  return wp.element.createElement(labeled_row, {
    className: external_tribe_modules_classnames_default()('tribe-editor__single-to-date-time-picker', className),
    label: Object(external_wp_i18n_["__"])('To', 'tribe-events-calendar-pro')
  }, wp.element.createElement(external_tribe_common_elements_["TimePicker"], {
    current: endTimeInput,
    start: external_tribe_common_utils_["time"].START_OF_DAY,
    end: external_tribe_common_utils_["time"].END_OF_DAY,
    onBlur: onEndTimeBlur,
    onChange: onEndTimeChange,
    onClick: onEndTimeClick,
    allDay: isAllDay
  }), wp.element.createElement("span", null, Object(external_wp_i18n_["__"])('on', 'tribe-events-calendar-pro')), wp.element.createElement(external_tribe_common_elements_["DayPickerInput"], {
    value: endDate,
    format: endDateFormat,
    formatDate: format["a" /* formatDate */],
    parseDate: parse["a" /* parse */],
    dayPickerProps: {
      modifiers: {
        start: endDateObj,
        end: endDateObj
      }
    },
    onDayChange: onEndDateChange
  }));
};
SingleToDateTimePicker.propTypes = {
  className: external_tribe_modules_propTypes_default.a.string,
  endDate: external_tribe_modules_propTypes_default.a.string,
  endDateFormat: external_tribe_modules_propTypes_default.a.string,
  endTimeInput: external_tribe_modules_propTypes_default.a.string,
  isAllDay: external_tribe_modules_propTypes_default.a.bool,
  onEndDateChange: external_tribe_modules_propTypes_default.a.func,
  onEndTimeBlur: external_tribe_modules_propTypes_default.a.func,
  onEndTimeChange: external_tribe_modules_propTypes_default.a.func,
  onEndTimeClick: external_tribe_modules_propTypes_default.a.func
};
SingleToDateTimePicker.defaultProps = {
  endDateFormat: 'LL'
};
/* harmony default export */ var single_to_date_time_picker_template = (SingleToDateTimePicker);
// CONCATENATED MODULE: ./src/modules/elements/single-to-date-time-picker/element.js


const single_to_date_time_picker_element_excluded = ["end", "endTime"],
  single_to_date_time_picker_element_excluded2 = ["edit"];
function single_to_date_time_picker_element_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function single_to_date_time_picker_element_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? single_to_date_time_picker_element_ownKeys(Object(t), !0).forEach(function (r) { defineProperty_default()(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : single_to_date_time_picker_element_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */







const {
  RECURRING: single_to_date_time_picker_element_RECURRING,
  KEY_END_DATE: element_KEY_END_DATE,
  KEY_END_DATE_INPUT: element_KEY_END_DATE_INPUT,
  KEY_END_DATE_OBJ: element_KEY_END_DATE_OBJ,
  KEY_END_TIME: single_to_date_time_picker_element_KEY_END_TIME,
  KEY_END_TIME_INPUT: single_to_date_time_picker_element_KEY_END_TIME_INPUT
} = blocks_constants_namespaceObject;
const {
  toMoment: single_to_date_time_picker_element_toMoment,
  toDatabaseDate: single_to_date_time_picker_element_toDatabaseDate,
  toTime24Hr: element_toTime24Hr,
  TIME_FORMAT: single_to_date_time_picker_element_TIME_FORMAT
} = external_tribe_common_utils_["moment"];
const {
  TIME_FORMAT_HH_MM: single_to_date_time_picker_element_TIME_FORMAT_HH_MM,
  fromSeconds: single_to_date_time_picker_element_fromSeconds
} = external_tribe_common_utils_["time"];
const element_onEndDateChange = (ownProps, edit, end) => (date, modifiers, dayPickerInput) => {
  // default end date is date time end date if date is undefined
  const endDate = date ? date : end;
  edit(ownProps.index, {
    [element_KEY_END_DATE_INPUT]: dayPickerInput.input.value,
    [element_KEY_END_DATE_OBJ]: date,
    [element_KEY_END_DATE]: single_to_date_time_picker_element_toDatabaseDate(single_to_date_time_picker_element_toMoment(endDate))
  });
};
const single_to_date_time_picker_element_onEndTimeBlur = (ownProps, edit, endTimeNoSeconds) => e => {
  let endTimeMoment = single_to_date_time_picker_element_toMoment(e.target.value, single_to_date_time_picker_element_TIME_FORMAT, false);
  if (!endTimeMoment.isValid()) {
    endTimeMoment = single_to_date_time_picker_element_toMoment(endTimeNoSeconds, single_to_date_time_picker_element_TIME_FORMAT, false);
  }
  const endTime = element_toTime24Hr(endTimeMoment);
  edit(ownProps.index, {
    [single_to_date_time_picker_element_KEY_END_TIME]: endTime
  });
};
const single_to_date_time_picker_element_onEndTimeChange = (ownProps, edit) => e => edit(ownProps.index, {
  [single_to_date_time_picker_element_KEY_END_TIME_INPUT]: e.target.value
});
const single_to_date_time_picker_element_onEndTimeClick = (ownProps, edit) => (value, onClose) => {
  const endTime = value === 'all-day' ? value : single_to_date_time_picker_element_fromSeconds(value, single_to_date_time_picker_element_TIME_FORMAT_HH_MM);
  edit(ownProps.index, {
    [single_to_date_time_picker_element_KEY_END_TIME]: endTime
  });
  onClose();
};
const single_to_date_time_picker_element_mapStateToProps = (state, ownProps) => {
  const selectors = ownProps.blockType === single_to_date_time_picker_element_RECURRING ? recurring_selectors_namespaceObject : exception_selectors_namespaceObject;
  return {
    end: external_tribe_events_data_["blocks"].datetime.selectors.getEnd(state),
    endDate: selectors.getEndDateInput(state, ownProps),
    endTime: selectors.getEndTimeNoSeconds(state, ownProps),
    endTimeInput: selectors.getEndTimeInput(state, ownProps),
    isAllDay: selectors.getAllDay(state, ownProps)
  };
};
const single_to_date_time_picker_element_mapDispatchToProps = (dispatch, ownProps) => {
  const editAction = ownProps.blockType === single_to_date_time_picker_element_RECURRING ? actions_namespaceObject.editRule : exception_actions_namespaceObject.editException;
  const edit = (index, payload) => dispatch(editAction(index, payload));
  return {
    edit,
    onEndTimeChange: single_to_date_time_picker_element_onEndTimeChange(ownProps, edit),
    onEndTimeClick: single_to_date_time_picker_element_onEndTimeClick(ownProps, edit)
  };
};
const single_to_date_time_picker_element_mergeProps = (stateProps, dispatchProps, ownProps) => {
  const {
      end,
      endTime
    } = stateProps,
    restStateProps = objectWithoutProperties_default()(stateProps, single_to_date_time_picker_element_excluded);
  const {
      edit
    } = dispatchProps,
    restDispatchProps = objectWithoutProperties_default()(dispatchProps, single_to_date_time_picker_element_excluded2);
  return single_to_date_time_picker_element_objectSpread(single_to_date_time_picker_element_objectSpread(single_to_date_time_picker_element_objectSpread(single_to_date_time_picker_element_objectSpread({}, ownProps), restStateProps), restDispatchProps), {}, {
    onEndDateChange: element_onEndDateChange(ownProps, edit, end),
    onEndTimeBlur: single_to_date_time_picker_element_onEndTimeBlur(ownProps, edit, endTime)
  });
};
/* harmony default export */ var single_to_date_time_picker_element = (Object(external_tribe_modules_redux_["compose"])(Object(external_tribe_common_hoc_["withStore"])(), Object(external_tribe_modules_reactRedux_["connect"])(single_to_date_time_picker_element_mapStateToProps, single_to_date_time_picker_element_mapDispatchToProps, single_to_date_time_picker_element_mergeProps))(single_to_date_time_picker_template));
// CONCATENATED MODULE: ./src/modules/elements/single-to-date-time-picker/index.js
/**
 * Internal dependencies
 */

/* harmony default export */ var single_to_date_time_picker = (single_to_date_time_picker_element);
// EXTERNAL MODULE: ./src/modules/elements/from-time-range-picker/style.pcss
var from_time_range_picker_style = __webpack_require__("sqH4");

// CONCATENATED MODULE: ./src/modules/elements/from-time-range-picker/template.js
/**
 * External dependencies
 */





/**
 * Internal dependencies
 */





const FromTimeRangePicker = ({
  className,
  endTimeInput,
  isAllDay,
  isMultiDay,
  onEndTimeBlur,
  onEndTimeChange,
  onEndTimeClick,
  onMultiDayChange,
  onStartTimeBlur,
  onStartTimeChange,
  onStartTimeClick,
  startTimeInput
}) => {
  const getStartTimePickerProps = () => {
    const props = {
      current: startTimeInput,
      onBlur: onStartTimeBlur,
      onChange: onStartTimeChange,
      onClick: onStartTimeClick,
      start: external_tribe_common_utils_["time"].START_OF_DAY,
      end: external_tribe_common_utils_["time"].END_OF_DAY,
      showAllDay: false,
      allDay: isAllDay
    };
    return props;
  };
  const getEndTimePickerProps = () => {
    const props = {
      current: endTimeInput,
      onBlur: onEndTimeBlur,
      onChange: onEndTimeChange,
      onClick: onEndTimeClick,
      start: external_tribe_common_utils_["time"].START_OF_DAY,
      end: external_tribe_common_utils_["time"].END_OF_DAY,
      disabled: isMultiDay,
      showAllDay: false,
      allDay: isAllDay
    };
    return props;
  };
  return wp.element.createElement(labeled_row, {
    className: external_tribe_modules_classnames_default()('tribe-editor__from-time-range-picker', {
      'tribe-editor__from-time-range-picker--multi-day': isMultiDay
    }, className),
    label: Object(external_wp_i18n_["__"])('From', 'tribe-events-calendar-pro')
  }, wp.element.createElement(external_tribe_common_elements_["TimePicker"], getStartTimePickerProps()), !isAllDay && wp.element.createElement(external_React_["Fragment"], null, wp.element.createElement("span", null, Object(external_wp_i18n_["__"])('to', 'tribe-events-calendar-pro')), wp.element.createElement(external_tribe_common_elements_["TimePicker"], getEndTimePickerProps())), wp.element.createElement(multi_day_checkbox, {
    className: "tribe-editor__from-time-range-picker__multi-day-checkbox",
    checked: isMultiDay,
    onChange: onMultiDayChange
  }));
};
FromTimeRangePicker.propTypes = {
  className: external_tribe_modules_propTypes_default.a.string,
  endTimeInput: external_tribe_modules_propTypes_default.a.string,
  isAllDay: external_tribe_modules_propTypes_default.a.bool,
  isMultiDay: external_tribe_modules_propTypes_default.a.bool,
  onEndTimeBlur: external_tribe_modules_propTypes_default.a.func,
  onEndTimeChange: external_tribe_modules_propTypes_default.a.func,
  onEndTimeClick: external_tribe_modules_propTypes_default.a.func,
  onMultiDayChange: external_tribe_modules_propTypes_default.a.func,
  onStartTimeBlur: external_tribe_modules_propTypes_default.a.func,
  onStartTimeChange: external_tribe_modules_propTypes_default.a.func,
  onStartTimeClick: external_tribe_modules_propTypes_default.a.func,
  startTimeInput: external_tribe_modules_propTypes_default.a.string
};
/* harmony default export */ var from_time_range_picker_template = (FromTimeRangePicker);
// CONCATENATED MODULE: ./src/modules/elements/from-time-range-picker/element.js


const from_time_range_picker_element_excluded = ["endTime", "startTime"];
function from_time_range_picker_element_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function from_time_range_picker_element_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? from_time_range_picker_element_ownKeys(Object(t), !0).forEach(function (r) { defineProperty_default()(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : from_time_range_picker_element_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */






const {
  toMoment: from_time_range_picker_element_toMoment,
  toTime24Hr: from_time_range_picker_element_toTime24Hr,
  TIME_FORMAT: from_time_range_picker_element_TIME_FORMAT
} = external_tribe_common_utils_["moment"];
const {
  TIME_FORMAT_HH_MM: from_time_range_picker_element_TIME_FORMAT_HH_MM,
  fromSeconds: from_time_range_picker_element_fromSeconds
} = external_tribe_common_utils_["time"];
const {
  KEY_END_TIME: from_time_range_picker_element_KEY_END_TIME,
  KEY_END_TIME_INPUT: from_time_range_picker_element_KEY_END_TIME_INPUT,
  KEY_MULTI_DAY: element_KEY_MULTI_DAY,
  KEY_START_TIME: element_KEY_START_TIME,
  KEY_START_TIME_INPUT: element_KEY_START_TIME_INPUT
} = blocks_constants_namespaceObject;
const from_time_range_picker_element_onEndTimeBlur = (dispatchProps, ownProps, endTimeNoSeconds) => e => {
  let endTimeMoment = from_time_range_picker_element_toMoment(e.target.value, from_time_range_picker_element_TIME_FORMAT, false);
  if (!endTimeMoment.isValid()) {
    endTimeMoment = from_time_range_picker_element_toMoment(endTimeNoSeconds, from_time_range_picker_element_TIME_FORMAT, false);
  }
  const endTime = from_time_range_picker_element_toTime24Hr(endTimeMoment);
  dispatchProps.editRule(ownProps.index, {
    [from_time_range_picker_element_KEY_END_TIME]: endTime
  });
};
const element_onStartTimeBlur = (dispatchProps, ownProps, startTimeNoSeconds) => e => {
  let startTimeMoment = from_time_range_picker_element_toMoment(e.target.value, from_time_range_picker_element_TIME_FORMAT, false);
  if (!startTimeMoment.isValid()) {
    startTimeMoment = from_time_range_picker_element_toMoment(startTimeNoSeconds, from_time_range_picker_element_TIME_FORMAT, false);
  }
  const startTime = from_time_range_picker_element_toTime24Hr(startTimeMoment);
  dispatchProps.editRule(ownProps.index, {
    [element_KEY_START_TIME]: startTime
  });
};
const from_time_range_picker_element_onEndTimeChange = (dispatchProps, ownProps) => e => {
  dispatchProps.editRule(ownProps.index, {
    [from_time_range_picker_element_KEY_END_TIME_INPUT]: e.target.value
  });
};
const element_onStartTimeChange = (dispatchProps, ownProps) => e => {
  dispatchProps.editRule(ownProps.index, {
    [element_KEY_START_TIME_INPUT]: e.target.value
  });
};
const element_onMultiDayChange = (dispatchProps, ownProps) => e => {
  dispatchProps.editRule(ownProps.index, {
    [element_KEY_MULTI_DAY]: e.target.checked
  });
};
const from_time_range_picker_element_onEndTimeClick = (dispatchProps, ownProps) => (value, onClose) => {
  const endTime = value === 'all-day' ? value : from_time_range_picker_element_fromSeconds(value, from_time_range_picker_element_TIME_FORMAT_HH_MM);
  dispatchProps.editRule(ownProps.index, {
    [from_time_range_picker_element_KEY_END_TIME]: endTime
  });
  onClose();
};
const element_onStartTimeClick = (dispatchProps, ownProps) => (value, onClose) => {
  const startTime = value === 'all-day' ? value : from_time_range_picker_element_fromSeconds(value, from_time_range_picker_element_TIME_FORMAT_HH_MM);
  dispatchProps.editRule(ownProps.index, {
    [element_KEY_START_TIME]: startTime
  });
  onClose();
};
const from_time_range_picker_element_mapStateToProps = (state, ownProps) => {
  const selectors = ownProps.blockType === blocks_constants_namespaceObject.RECURRING ? recurring_selectors_namespaceObject : exception_selectors_namespaceObject;
  const rule = selectors.getRule(state, ownProps);
  if (!rule) {
    return {
      endTime: null,
      endTimeInput: '',
      isAllDay: false,
      isMultiDay: false,
      startTime: null,
      startTimeInput: ''
    };
  }
  return {
    endTime: selectors.getEndTimeNoSeconds(state, ownProps),
    endTimeInput: selectors.getEndTimeInput(state, ownProps),
    isAllDay: selectors.getAllDay(state, ownProps),
    isMultiDay: selectors.getMultiDay(state, ownProps),
    startTime: selectors.getStartTimeNoSeconds(state, ownProps),
    startTimeInput: selectors.getStartTimeInput(state, ownProps)
  };
};
const from_time_range_picker_element_mapDispatchToProps = (dispatch, ownProps) => {
  const action = ownProps.blockType === blocks_constants_namespaceObject.RECURRING ? actions_namespaceObject : exception_actions_namespaceObject;
  return {
    editRule: (index, payload) => dispatch(action.editRule(index, payload))
  };
};
const from_time_range_picker_element_mergeProps = (stateProps, dispatchProps, ownProps) => {
  const {
      endTime,
      startTime
    } = stateProps,
    restStateProps = objectWithoutProperties_default()(stateProps, from_time_range_picker_element_excluded);
  return from_time_range_picker_element_objectSpread(from_time_range_picker_element_objectSpread(from_time_range_picker_element_objectSpread(from_time_range_picker_element_objectSpread({}, ownProps), restStateProps), dispatchProps), {}, {
    onEndTimeBlur: from_time_range_picker_element_onEndTimeBlur(dispatchProps, ownProps, endTime),
    onEndTimeChange: from_time_range_picker_element_onEndTimeChange(dispatchProps, ownProps),
    onEndTimeClick: from_time_range_picker_element_onEndTimeClick(dispatchProps, ownProps),
    onMultiDayChange: element_onMultiDayChange(dispatchProps, ownProps),
    onStartTimeBlur: element_onStartTimeBlur(dispatchProps, ownProps, startTime),
    onStartTimeChange: element_onStartTimeChange(dispatchProps, ownProps),
    onStartTimeClick: element_onStartTimeClick(dispatchProps, ownProps)
  });
};
/* harmony default export */ var from_time_range_picker_element = (Object(external_tribe_modules_redux_["compose"])(Object(external_tribe_common_hoc_["withStore"])(), Object(external_tribe_modules_reactRedux_["connect"])(from_time_range_picker_element_mapStateToProps, from_time_range_picker_element_mapDispatchToProps, from_time_range_picker_element_mergeProps))(from_time_range_picker_template));
// CONCATENATED MODULE: ./src/modules/elements/from-time-range-picker/index.js
/**
 * Internal dependencies
 */

/* harmony default export */ var from_time_range_picker = (from_time_range_picker_element);
// EXTERNAL MODULE: external "tribe.common.icons"
var external_tribe_common_icons_ = __webpack_require__("GE2E");

// EXTERNAL MODULE: ./src/modules/elements/month-picker/month-tag/style.pcss
var month_tag_style = __webpack_require__("+rk7");

// CONCATENATED MODULE: ./src/modules/elements/month-picker/month-tag/element.js
/**
 * External dependencies
 */





/**
 * Internal dependencies
 */


const {
  applyFilters: month_tag_element_applyFilters
} = wp.hooks;
const MonthTag = props => {
  const {
    children,
    className,
    disabled,
    onClick
  } = props;
  return month_tag_element_applyFilters('elements.monthTag.monthTagContentHook', wp.element.createElement("button", {
    className: external_tribe_modules_classnames_default()({
      'tribe-editor__month-tag': true,
      'tribe-editor__month-tag--disabled': disabled
    }, className),
    disabled: disabled,
    onClick: onClick
  }, wp.element.createElement(external_tribe_common_icons_["Close"], null), wp.element.createElement("span", {
    className: "tribe-editor__month-tag__remove"
  }, Object(external_wp_i18n_["__"])('Remove', 'tribe-events-calendar-pro')), children), props);
};
MonthTag.propTypes = {
  children: external_tribe_modules_propTypes_default.a.node,
  className: external_tribe_modules_propTypes_default.a.string,
  disabled: external_tribe_modules_propTypes_default.a.bool,
  onClick: external_tribe_modules_propTypes_default.a.func
};
/* harmony default export */ var month_tag_element = (MonthTag);
// CONCATENATED MODULE: ./src/modules/elements/month-picker/month-tag/index.js
/**
 * Internal dependencies
 */

/* harmony default export */ var month_tag = (month_tag_element);
// EXTERNAL MODULE: ./src/modules/elements/month-picker/style.pcss
var month_picker_style = __webpack_require__("7cHz");

// CONCATENATED MODULE: ./src/modules/elements/month-picker/element.js

/**
 * External dependencies
 */





/**
 * Internal dependencies
 */




class element_MonthPicker extends external_React_["PureComponent"] {
  constructor(props) {
    super(props);
    defineProperty_default()(this, "onAddClick", () => this.setState({
      isSelecting: true
    }));
    defineProperty_default()(this, "onSelectBlur", () => this.setState({
      isSelecting: false
    }));
    defineProperty_default()(this, "getSelect", () => this.state.isSelecting ? wp.element.createElement(external_tribe_common_elements_["Select"], {
      className: "tribe-editor__month-picker__select",
      autoFocus: true // eslint-disable-line jsx-a11y/no-autofocus
      ,
      backspaceRemovesValue: false,
      isClearable: false,
      isDisabled: this.props.disabled,
      isMulti: true,
      onBlur: this.onSelectBlur,
      onChange: this.props.onSelectChange,
      openMenuOnFocus: true,
      options: MONTHS_OF_THE_YEAR_OPTIONS,
      value: this.props.months
    }) : wp.element.createElement("button", {
      className: external_tribe_modules_classnames_default()({
        'tribe-editor__month-picker__add': true,
        'tribe-editor__month-picker__add--disabled': this.props.disabled
      }),
      disabled: this.props.disabled,
      onClick: this.onAddClick
    }, wp.element.createElement("span", {
      className: "tribe-editor__month-picker__add-icon"
    }, "+"), Object(external_wp_i18n_["__"])('Add', 'tribe-events-calendar-pro')));
    this.state = {
      isSelecting: false
    };
  }
  render() {
    const {
      blockType,
      className,
      disabled,
      index,
      months,
      onMonthClick
    } = this.props;
    return wp.element.createElement("div", {
      className: external_tribe_modules_classnames_default()('tribe-editor__month-picker', className)
    }, months.map(month => wp.element.createElement(month_tag, {
      key: month.value,
      blockType: blockType,
      className: "tribe-editor__month-picker__month-tag",
      disabled: disabled,
      index: index,
      onClick: onMonthClick(month.value),
      value: month.value
    }, month.tag)), this.getSelect());
  }
}
defineProperty_default()(element_MonthPicker, "propTypes", {
  blockType: external_tribe_modules_propTypes_default.a.string,
  className: external_tribe_modules_propTypes_default.a.string,
  index: external_tribe_modules_propTypes_default.a.number,
  months: external_tribe_modules_propTypes_default.a.arrayOf(external_tribe_modules_propTypes_default.a.oneOf(MONTHS_OF_THE_YEAR_OPTIONS)),
  onMonthClick: external_tribe_modules_propTypes_default.a.func,
  onSelectChange: external_tribe_modules_propTypes_default.a.func
});
defineProperty_default()(element_MonthPicker, "defaultProps", {
  months: []
});
/* harmony default export */ var month_picker_element = (element_MonthPicker);
// CONCATENATED MODULE: ./src/modules/elements/month-picker/index.js
/**
 * Internal dependencies
 */

/* harmony default export */ var month_picker = (month_picker_element);
// CONCATENATED MODULE: ./src/modules/elements/in-month/template.js
/**
 * External dependencies
 */





/**
 * Internal dependencies
 */



const InMonth = ({
  blockType,
  className,
  disabled,
  index,
  months,
  onMonthClick,
  onSelectChange
}) => wp.element.createElement(labeled_row, {
  className: external_tribe_modules_classnames_default()('tribe-editor__in-month', className),
  label: Object(external_wp_i18n_["__"])('In', 'tribe-events-calendar-pro')
}, wp.element.createElement(month_picker, {
  blockType: blockType,
  className: "tribe-editor__in-month__month-picker",
  disabled: disabled,
  index: index,
  months: months,
  onMonthClick: onMonthClick,
  onSelectChange: onSelectChange
}));
InMonth.propTypes = {
  blockType: external_tribe_modules_propTypes_default.a.string,
  className: external_tribe_modules_propTypes_default.a.string,
  disabled: external_tribe_modules_propTypes_default.a.bool,
  index: external_tribe_modules_propTypes_default.a.number,
  months: external_tribe_modules_propTypes_default.a.arrayOf(external_tribe_modules_propTypes_default.a.oneOf(MONTHS_OF_THE_YEAR_OPTIONS)),
  onMonthClick: external_tribe_modules_propTypes_default.a.func,
  onSelectChange: external_tribe_modules_propTypes_default.a.func
};
/* harmony default export */ var in_month_template = (InMonth);
// CONCATENATED MODULE: ./src/modules/elements/in-month/element.js



const in_month_element_excluded = ["monthsArr"];
function in_month_element_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function in_month_element_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? in_month_element_ownKeys(Object(t), !0).forEach(function (r) { defineProperty_default()(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : in_month_element_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
/**
 * External dependencies
 */


/**
 * Internal dependencies
 */





const {
  KEY_MONTH: element_KEY_MONTH
} = blocks_constants_namespaceObject;
const {
  MONTHS_OF_THE_YEAR_OPTIONS: element_MONTHS_OF_THE_YEAR_OPTIONS
} = options_namespaceObject;
const {
  MONTHS_OF_THE_YEAR_MAPPING_TO_STATE: element_MONTHS_OF_THE_YEAR_MAPPING_TO_STATE,
  MONTHS_OF_THE_YEAR_MAPPING_FROM_STATE: element_MONTHS_OF_THE_YEAR_MAPPING_FROM_STATE
} = constants_namespaceObject;
const mapMonths = monthNum => {
  const month = element_MONTHS_OF_THE_YEAR_MAPPING_FROM_STATE[monthNum];
  return external_lodash_find_default()(element_MONTHS_OF_THE_YEAR_OPTIONS, {
    value: month
  });
};
const in_month_element_mapStateToProps = (state, ownProps) => {
  const selectors = ownProps.blockType === blocks_constants_namespaceObject.RECURRING ? recurring_selectors_namespaceObject : exception_selectors_namespaceObject;
  const monthsArr = selectors.getMonth(state, ownProps);
  const months = monthsArr.map(mapMonths);
  return {
    monthsArr,
    months
  };
};
const in_month_element_mapDispatchToProps = (dispatch, ownProps) => {
  const edit = ownProps.blockType === blocks_constants_namespaceObject.RECURRING ? actions_namespaceObject.editRule : exception_actions_namespaceObject.editException;
  return {
    edit: (index, payload) => dispatch(edit(index, payload))
  };
};
const in_month_element_mergeProps = (stateProps, dispatchProps, ownProps) => {
  const {
      monthsArr
    } = stateProps,
    restStateProps = objectWithoutProperties_default()(stateProps, in_month_element_excluded);
  const {
    edit
  } = dispatchProps;
  return in_month_element_objectSpread(in_month_element_objectSpread(in_month_element_objectSpread({}, ownProps), restStateProps), {}, {
    onMonthClick: month => () => {
      const mappedMonth = element_MONTHS_OF_THE_YEAR_MAPPING_TO_STATE[month];
      const newMonths = monthsArr.filter(monthNum => monthNum !== mappedMonth);
      edit(ownProps.index, {
        [element_KEY_MONTH]: newMonths
      });
    },
    onSelectChange: selectedOptions => {
      const selectedMonths = selectedOptions.map(option => element_MONTHS_OF_THE_YEAR_MAPPING_TO_STATE[option.value]);
      const months = [...selectedMonths].sort((a, b) => a - b);
      edit(ownProps.index, {
        [element_KEY_MONTH]: months
      });
    }
  });
};
/* harmony default export */ var in_month_element = (Object(external_tribe_modules_redux_["compose"])(Object(external_tribe_common_hoc_["withStore"])(), Object(external_tribe_modules_reactRedux_["connect"])(in_month_element_mapStateToProps, in_month_element_mapDispatchToProps, in_month_element_mergeProps))(in_month_template));
// CONCATENATED MODULE: ./src/modules/elements/in-month/index.js
/**
 * Internal dependencies
 */

/* harmony default export */ var in_month = (in_month_element);
// EXTERNAL MODULE: external "lodash.noop"
var external_lodash_noop_ = __webpack_require__("In0u");
var external_lodash_noop_default = /*#__PURE__*/__webpack_require__.n(external_lodash_noop_);

// EXTERNAL MODULE: ./src/modules/elements/frequency-select/style.pcss
var frequency_select_style = __webpack_require__("ItXU");

// CONCATENATED MODULE: ./src/modules/elements/frequency-select/template.js
/**
 * External dependencies
 */




/**
 * Internal dependencies
 */



const FrequencySelect = ({
  className,
  disabled,
  frequency,
  onChange,
  options
}) => {
  const formatCreateLabel = inputValue => inputValue;
  const isValidNewOption = (inputValue, selectValue, selectOptions) => {
    const isNotDuplicated = !selectOptions.filter(option => option.label === inputValue).length;
    const isNotEmpty = inputValue !== '';
    const isNumber = !isNaN(inputValue);
    return isNotEmpty && isNotDuplicated && isNumber;
  };
  return wp.element.createElement(external_tribe_common_elements_["CreatableSelect"], {
    className: external_tribe_modules_classnames_default()('tribe-editor__frequency-select', className),
    backspaceRemovesValue: false,
    isDisabled: disabled,
    formatCreateLabel: formatCreateLabel,
    isValidNewOption: isValidNewOption,
    onChange: onChange,
    options: options,
    value: frequency
  });
};
FrequencySelect.propTypes = {
  className: external_tribe_modules_propTypes_default.a.string,
  frequency: external_tribe_common_data_plugins_["proptypes"].ReactSelectOption.isRequired,
  onChange: external_tribe_modules_propTypes_default.a.func.isRequired,
  options: external_tribe_common_data_plugins_["proptypes"].ReactSelectOptions.isRequired
};
/* harmony default export */ var frequency_select_template = (FrequencySelect);
// CONCATENATED MODULE: ./src/modules/elements/frequency-select/element.js
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */









const {
  RECURRING: frequency_select_element_RECURRING,
  KEY_BETWEEN: element_KEY_BETWEEN
} = blocks_constants_namespaceObject;
const {
  DAILY: frequency_select_element_DAILY,
  WEEKLY: frequency_select_element_WEEKLY,
  MONTHLY: frequency_select_element_MONTHLY,
  YEARLY: frequency_select_element_YEARLY
} = constants_namespaceObject;
const {
  DAILY_RECURRENCE_FREQUENCY_OPTIONS: element_DAILY_RECURRENCE_FREQUENCY_OPTIONS,
  WEEKLY_RECURRENCE_FREQUENCY_OPTIONS: element_WEEKLY_RECURRENCE_FREQUENCY_OPTIONS,
  MONTHLY_RECURRENCE_FREQUENCY_OPTIONS: element_MONTHLY_RECURRENCE_FREQUENCY_OPTIONS,
  YEARLY_RECURRENCE_FREQUENCY_OPTIONS: element_YEARLY_RECURRENCE_FREQUENCY_OPTIONS
} = options_namespaceObject;
const getFrequency = (state, ownProps) => {
  const selectors = ownProps.blockType === frequency_select_element_RECURRING ? recurring_selectors_namespaceObject : exception_selectors_namespaceObject;
  const frequency = selectors.getBetween(state, ownProps);
  return {
    label: String(frequency),
    value: frequency
  };
};
const element_getOptions = ownProps => {
  let options = [];
  switch (ownProps.selected.value) {
    case frequency_select_element_DAILY:
      options = element_DAILY_RECURRENCE_FREQUENCY_OPTIONS;
      break;
    case frequency_select_element_WEEKLY:
      options = element_WEEKLY_RECURRENCE_FREQUENCY_OPTIONS;
      break;
    case frequency_select_element_MONTHLY:
      options = element_MONTHLY_RECURRENCE_FREQUENCY_OPTIONS;
      break;
    case frequency_select_element_YEARLY:
      options = element_YEARLY_RECURRENCE_FREQUENCY_OPTIONS;
      break;
    default:
      break;
  }
  return options;
};
const frequency_select_element_mapStateToProps = (state, ownProps) => ({
  frequency: getFrequency(state, ownProps),
  options: element_getOptions(ownProps)
});
const frequency_select_element_mapDispatchToProps = (dispatch, ownProps) => {
  const edit = ownProps.blockType === frequency_select_element_RECURRING ? editRule : editException;
  return {
    onChange: selectedOption => {
      dispatch(edit(ownProps.index, {
        [element_KEY_BETWEEN]: Number(selectedOption.value)
      }));
    }
  };
};
/* harmony default export */ var frequency_select_element = (Object(external_tribe_modules_redux_["compose"])(Object(external_tribe_common_hoc_["withStore"])(), Object(external_tribe_modules_reactRedux_["connect"])(frequency_select_element_mapStateToProps, frequency_select_element_mapDispatchToProps))(frequency_select_template));
// CONCATENATED MODULE: ./src/modules/elements/frequency-select/index.js
/**
 * Internal dependencies
 */

/* harmony default export */ var frequency_select = (frequency_select_element);
// EXTERNAL MODULE: ./src/modules/elements/type-picker/style.pcss
var type_picker_style = __webpack_require__("UHF2");

// CONCATENATED MODULE: ./src/modules/elements/type-picker/template.js

/**
 * External dependencies
 */





/**
 * Internal dependencies
 */






const {
  applyFilters: template_applyFilters
} = wp.hooks;
const getFrequencySelect = props => {
  const {
    blockType,
    index,
    selected
  } = props;
  return selected && selected.value !== SINGLE && wp.element.createElement(frequency_select, {
    className: "tribe-editor__type-picker__frequency-select",
    blockType: blockType,
    index: index,
    selected: selected
  });
};
const getTypePickerContent = props => {
  const {
    afterSelect,
    onChange,
    options,
    selected,
    isPlural
  } = props;
  const getOptionLabel = option => {
    return isPlural && option.label_plural ? option.label_plural : option.label;
  };
  return template_applyFilters('elements.typePicker.typePickerContentHook', wp.element.createElement(external_React_["Fragment"], null, getFrequencySelect(props), wp.element.createElement(external_tribe_common_elements_["Select"], {
    className: "tribe-editor__type-picker__type-select",
    backspaceRemovesValue: false,
    value: selected,
    isSearchable: false,
    options: options,
    onChange: onChange,
    getOptionLabel: getOptionLabel
  }), afterSelect), props);
};
const TypePicker = props => {
  const {
    className,
    rowLabel,
    onChange = external_lodash_noop_default.a,
    options = []
  } = props;
  return wp.element.createElement(labeled_row, {
    className: external_tribe_modules_classnames_default()('tribe-editor__type-picker', className),
    label: rowLabel
  }, getTypePickerContent(props));
};
TypePicker.propTypes = {
  afterSelect: external_tribe_modules_propTypes_default.a.node,
  blockType: external_tribe_modules_propTypes_default.a.oneOf(BLOCK_TYPES),
  className: external_tribe_modules_propTypes_default.a.string,
  index: external_tribe_modules_propTypes_default.a.number,
  onChange: external_tribe_modules_propTypes_default.a.func,
  options: external_tribe_common_data_plugins_["proptypes"].ReactSelectOptions,
  selected: external_tribe_common_data_plugins_["proptypes"].ReactSelectOption.isRequired,
  rowLabel: external_tribe_modules_propTypes_default.a.string
};
/* harmony default export */ var type_picker_template = (TypePicker);
// CONCATENATED MODULE: ./src/modules/elements/type-picker/element.js
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */





const {
  applyFilters: type_picker_element_applyFilters
} = wp.hooks;
const {
  RECURRING: type_picker_element_RECURRING,
  KEY_TYPE: element_KEY_TYPE
} = blocks_constants_namespaceObject;
const getSelected = (state, ownProps) => {
  const selectors = ownProps.blockType === type_picker_element_RECURRING ? recurring_selectors_namespaceObject : exception_selectors_namespaceObject;
  return selectors.getTypeOption(state, ownProps);
};
const element_getFrequency = (state, ownProps) => {
  const selectors = ownProps.blockType === type_picker_element_RECURRING ? recurring_selectors_namespaceObject : exception_selectors_namespaceObject;
  return selectors.getBetween(state, ownProps);
};
const type_picker_element_mapStateToProps = (state, ownProps) => {
  const selectors = ownProps.blockType === type_picker_element_RECURRING ? recurring_selectors_namespaceObject : exception_selectors_namespaceObject;
  const rule = selectors.getRule(state, ownProps);
  if (!rule) {
    return {
      selected: false,
      isPlural: false,
      afterSelect: null
    };
  }
  const frequency = element_getFrequency(state, ownProps);
  const isPlural = frequency > 1;
  const selected = type_picker_element_applyFilters('elements.typePicker.typePickerSelectedOptionHook', getSelected(state, ownProps), state, ownProps);
  const afterTypePickerSelect = type_picker_element_applyFilters('elements.typePicker.afterTypePickerSelectHook', null, state, ownProps);
  return {
    selected,
    isPlural,
    afterSelect: afterTypePickerSelect
  };
};
const type_picker_element_mapDispatchToProps = (dispatch, ownProps) => {
  const edit = ownProps.blockType === type_picker_element_RECURRING ? actions_namespaceObject.editRule : exception_actions_namespaceObject.editException;
  return {
    dispatch,
    onChange: selectedOption => dispatch(edit(ownProps.index, {
      [element_KEY_TYPE]: selectedOption.value
    }))
  };
};
/* harmony default export */ var type_picker_element = (Object(external_tribe_modules_redux_["compose"])(Object(external_tribe_common_hoc_["withStore"])(), Object(external_tribe_modules_reactRedux_["connect"])(type_picker_element_mapStateToProps, type_picker_element_mapDispatchToProps))(type_picker_template));
// CONCATENATED MODULE: ./src/modules/elements/type-picker/index.js
/**
 * Internal dependencies
 */

/* harmony default export */ var type_picker = (type_picker_element);
// EXTERNAL MODULE: ./src/modules/elements/on-date-picker/style.pcss
var on_date_picker_style = __webpack_require__("sSeK");

// CONCATENATED MODULE: ./src/modules/elements/on-date-picker/template.js
/**
 * External dependencies
 */






/**
 * Internal dependencies
 */



const OnDatePicker = ({
  className,
  date,
  dateFormat = 'LL',
  onDateChange
}) => {
  const dateObj = new Date(date);
  return wp.element.createElement(labeled_row, {
    className: external_tribe_modules_classnames_default()('tribe-editor__on-date-picker', className),
    label: Object(external_wp_i18n_["__"])('On', 'tribe-events-calendar-pro')
  }, wp.element.createElement(external_tribe_common_elements_["DayPickerInput"], {
    value: date,
    format: dateFormat,
    formatDate: format["a" /* formatDate */],
    parseDate: parse["a" /* parse */],
    dayPickerProps: {
      modifiers: {
        start: dateObj,
        end: dateObj
      }
    },
    onDayChange: onDateChange
  }));
};
OnDatePicker.propTypes = {
  className: external_tribe_modules_propTypes_default.a.string,
  date: external_tribe_modules_propTypes_default.a.string,
  dateFormat: external_tribe_modules_propTypes_default.a.string,
  onDateChange: external_tribe_modules_propTypes_default.a.func
};
/* harmony default export */ var on_date_picker_template = (OnDatePicker);
// CONCATENATED MODULE: ./src/modules/elements/on-date-picker/element.js


const on_date_picker_element_excluded = ["start"];
function on_date_picker_element_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function on_date_picker_element_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? on_date_picker_element_ownKeys(Object(t), !0).forEach(function (r) { defineProperty_default()(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : on_date_picker_element_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */







const {
  RECURRING: on_date_picker_element_RECURRING,
  KEY_START_DATE: element_KEY_START_DATE,
  KEY_START_DATE_INPUT: element_KEY_START_DATE_INPUT,
  KEY_START_DATE_OBJ: element_KEY_START_DATE_OBJ
} = blocks_constants_namespaceObject;
const {
  toMoment: on_date_picker_element_toMoment,
  toDatabaseDate: on_date_picker_element_toDatabaseDate
} = external_tribe_common_utils_["moment"];
const element_onDateChange = (ownProps, edit, start) => (date, modifiers, value) => {
  // default end date is date time end date if date is undefined
  const startDate = date ? date : start;
  edit(ownProps.index, {
    [element_KEY_START_DATE_INPUT]: value,
    [element_KEY_START_DATE_OBJ]: date,
    [element_KEY_START_DATE]: on_date_picker_element_toDatabaseDate(on_date_picker_element_toMoment(startDate))
  });
};
const on_date_picker_element_mapStateToProps = (state, ownProps) => {
  const selectors = ownProps.blockType === on_date_picker_element_RECURRING ? recurring_selectors_namespaceObject : exception_selectors_namespaceObject;
  const rule = selectors.getRule(state, ownProps);
  if (!rule) {
    return {
      date: null,
      start: null
    };
  }
  return {
    date: selectors.getStartDateInput(state, ownProps),
    start: external_tribe_events_data_["blocks"].datetime.selectors.getStart(state)
  };
};
const on_date_picker_element_mapDispatchToProps = (dispatch, ownProps) => {
  const edit = ownProps.blockType === on_date_picker_element_RECURRING ? actions_namespaceObject.editRule : exception_actions_namespaceObject.editException;
  return {
    edit: (index, payload) => dispatch(edit(index, payload))
  };
};
const on_date_picker_element_mergeProps = (stateProps, dispatchProps, ownProps) => {
  const {
      start
    } = stateProps,
    restStateProps = objectWithoutProperties_default()(stateProps, on_date_picker_element_excluded);
  const {
    edit
  } = dispatchProps;
  return on_date_picker_element_objectSpread(on_date_picker_element_objectSpread(on_date_picker_element_objectSpread({}, ownProps), restStateProps), {}, {
    onDateChange: element_onDateChange(ownProps, edit, start)
  });
};
/* harmony default export */ var on_date_picker_element = (Object(external_tribe_modules_redux_["compose"])(Object(external_tribe_common_hoc_["withStore"])(), Object(external_tribe_modules_reactRedux_["connect"])(on_date_picker_element_mapStateToProps, on_date_picker_element_mapDispatchToProps, on_date_picker_element_mergeProps))(on_date_picker_template));
// CONCATENATED MODULE: ./src/modules/elements/on-date-picker/index.js
/**
 * Internal dependencies
 */

/* harmony default export */ var on_date_picker = (on_date_picker_element);
// CONCATENATED MODULE: ./src/modules/elements/index.js



























// CONCATENATED MODULE: ./src/modules/elements/recurring-form/template.js
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */


const {
  KEY_MULTI_DAY: template_KEY_MULTI_DAY,
  KEY_TYPE: recurring_form_template_KEY_TYPE
} = blocks_constants_namespaceObject;
const RecurringForm = ({
  getOptions,
  rules = [],
  removeRule
}) => {
  return wp.element.createElement("section", null, rules.map((rule, i) => wp.element.createElement(recurring_field, {
    key: i,
    index: i,
    isMultiDay: rule[template_KEY_MULTI_DAY],
    onRemoveClick: removeRule,
    options: getOptions(i),
    type: rule[recurring_form_template_KEY_TYPE]
  })));
};
RecurringForm.propTypes = {
  rules: external_tribe_modules_propTypes_default.a.arrayOf(external_tribe_modules_propTypes_default.a.shape({})),
  removeRule: external_tribe_modules_propTypes_default.a.func.isRequired
};
/* harmony default export */ var recurring_form_template = (RecurringForm);
// CONCATENATED MODULE: ./src/modules/elements/recurring-form/element.js
var recurring_form_element_tecEventDetails;
/* global tecEventDetails */
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */





/**
 * Module Code
 */

/**
 * Map state to Recurring Form
 *
 * @since 6.0.0
 * @param state Redux state
 * @returns {{getOptions: (function(*=): *)}} Mapped props
 */
const recurring_form_element_mapStateToProps = state => ({
  getOptions: index => wp.hooks.applyFilters('elements.recurringForm.recurringFieldOptionsHook', options_namespaceObject.RECURRENCE_TYPE_RULES_OPTIONS, state, index)
});
const recurring_form_element_isLocked = typeof tecEventDetails !== 'undefined' && ((recurring_form_element_tecEventDetails = tecEventDetails) === null || recurring_form_element_tecEventDetails === void 0 ? void 0 : recurring_form_element_tecEventDetails.lockRulesUi);
/* harmony default export */ var recurring_form_element = (with_locked_overlay(recurring_form_element_isLocked, Object(external_tribe_modules_redux_["compose"])(Object(external_tribe_common_hoc_["withStore"])(), Object(external_tribe_modules_reactRedux_["connect"])(recurring_form_element_mapStateToProps))(recurring_form_template)));
// CONCATENATED MODULE: ./src/modules/elements/recurring-form/index.js
/**
 * Internal dependencies
 */

/* harmony default export */ var recurring_form = (recurring_form_element);
// CONCATENATED MODULE: ./src/modules/blocks/recurrence-rule/template.js
/**
 * External dependencies
 */




/**
 * Internal dependencies
 */



const SectionRow = ({
  children
}) => {
  return wp.element.createElement("section", null, wp.element.createElement("fieldset", {
    className: 'tribe-editor__events-pro__fieldset'
  }, children));
};
const EventRecurring = ({
  isRulePanelVisible,
  hasRules,
  rulesCount,
  toggleRulePanelExpand,
  isRulePanelExpanded,
  rules,
  removeRule,
  addField,
  initialRulePanelClick
}) => {
  if (isRulePanelVisible || hasRules) {
    const output = wp.hooks.applyFilters('elements.recurringForm.outputBeforeRecurringForm', null);
    return wp.element.createElement(panel, {
      count: rulesCount,
      onHeaderClick: toggleRulePanelExpand,
      isExpanded: isRulePanelExpanded,
      panelTitle: Object(external_tribe_common_utils_globals_["pro"])().blocks_recurrence_rules.panel_title_text,
      type: "recurring"
    }, output ? wp.element.createElement(SectionRow, null, output) : null, wp.element.createElement(recurring_form, {
      rules: rules,
      removeRule: removeRule
    }), wp.element.createElement(recurring_add_field, {
      onClick: addField,
      noBorder: true
    }));
  }
  return wp.element.createElement(recurring_add_field, {
    onClick: initialRulePanelClick
  });
};
EventRecurring.propTypes = {
  addField: external_tribe_modules_propTypes_default.a.func.isRequired,
  hasRules: external_tribe_modules_propTypes_default.a.bool.isRequired,
  initialRulePanelClick: external_tribe_modules_propTypes_default.a.func.isRequired,
  isRulePanelExpanded: external_tribe_modules_propTypes_default.a.bool.isRequired,
  isRulePanelVisible: external_tribe_modules_propTypes_default.a.bool.isRequired,
  removeRule: external_tribe_modules_propTypes_default.a.func.isRequired,
  rules: external_tribe_modules_propTypes_default.a.array.isRequired,
  rulesCount: external_tribe_modules_propTypes_default.a.number.isRequired,
  toggleRulePanelExpand: external_tribe_modules_propTypes_default.a.func.isRequired
};
/* harmony default export */ var recurrence_rule_template = (EventRecurring);
// CONCATENATED MODULE: ./src/modules/blocks/recurrence-rule/container.js
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */




/**
 * Module Code
 */

const recurrence_rule_container_mapStateToProps = state => ({
  rules: recurring_selectors_namespaceObject.getRules(state),
  rulesCount: recurring_selectors_namespaceObject.getRulesCount(state),
  hasRules: recurring_selectors_namespaceObject.hasRules(state)
});
const recurrence_rule_container_mapDispatchToProps = (dispatch, {
  toggleRulePanelVisibility,
  expandRulePanel
}) => {
  const addField = () => dispatch(actions_namespaceObject.addField());
  const removeRule = index => dispatch(actions_namespaceObject.removeRule(index));
  return {
    addField,
    removeRule,
    initialRulePanelClick: Object(external_tribe_modules_redux_["compose"])(toggleRulePanelVisibility, expandRulePanel, addField)
  };
};
/* harmony default export */ var recurrence_rule_container = (Object(external_tribe_modules_redux_["compose"])(Object(external_tribe_common_hoc_["withStore"])(), Object(external_tribe_modules_reactRedux_["connect"])(recurrence_rule_container_mapStateToProps, recurrence_rule_container_mapDispatchToProps))(recurrence_rule_template));
// CONCATENATED MODULE: ./src/modules/blocks/recurrence-rule/index.js
/**
 * This is not a block, the recurrence rule component is used in the
 * Recurrence component.
 */

// CONCATENATED MODULE: ./src/modules/blocks/recurrence-exception/template.js
/**
 * External dependencies
 */




/**
 * Internal dependencies
 */



const RecurringExceptions = ({
  isExceptionPanelVisible,
  hasExceptions,
  exceptionsCount,
  toggleExceptionPanelExpand,
  isExceptionPanelExpanded,
  exceptions,
  removeException,
  addField,
  initialExceptionPanelClick
}) => isExceptionPanelVisible || hasExceptions ? wp.element.createElement(panel, {
  count: exceptionsCount,
  onHeaderClick: toggleExceptionPanelExpand,
  isExpanded: isExceptionPanelExpanded,
  panelTitle: Object(external_wp_i18n_["__"])('Exceptions', 'tribe-events-calendar-pro'),
  type: "exception"
}, wp.element.createElement(exception_form, {
  exceptions: exceptions,
  removeException: removeException
}), wp.element.createElement(exception_add_field, {
  onClick: addField,
  noBorder: true
})) : wp.element.createElement(exception_add_field, {
  onClick: initialExceptionPanelClick
});
RecurringExceptions.propTypes = {
  addField: external_tribe_modules_propTypes_default.a.func.isRequired,
  exceptions: external_tribe_modules_propTypes_default.a.array.isRequired,
  exceptionsCount: external_tribe_modules_propTypes_default.a.number.isRequired,
  hasExceptions: external_tribe_modules_propTypes_default.a.bool.isRequired,
  initialExceptionPanelClick: external_tribe_modules_propTypes_default.a.func.isRequired,
  isExceptionPanelExpanded: external_tribe_modules_propTypes_default.a.bool.isRequired,
  isExceptionPanelVisible: external_tribe_modules_propTypes_default.a.bool.isRequired,
  removeException: external_tribe_modules_propTypes_default.a.func.isRequired,
  toggleExceptionPanelExpand: external_tribe_modules_propTypes_default.a.func.isRequired
};
/* harmony default export */ var recurrence_exception_template = (RecurringExceptions);
// CONCATENATED MODULE: ./src/modules/blocks/recurrence-exception/container.js
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */




/**
 * Module Code
 */

const recurrence_exception_container_mapStateToProps = state => ({
  exceptions: exception_selectors_namespaceObject.getExceptions(state),
  exceptionsCount: exception_selectors_namespaceObject.getExceptionsCount(state),
  hasExceptions: exception_selectors_namespaceObject.hasExceptions(state)
});
const recurrence_exception_container_mapDispatchToProps = (dispatch, {
  toggleExceptionPanelVisibility,
  expandExceptionPanel
}) => {
  const addField = () => dispatch(exception_actions_namespaceObject.addField());
  const removeException = id => dispatch(exception_actions_namespaceObject.removeException(id));
  return {
    addField,
    removeException,
    initialExceptionPanelClick: Object(external_tribe_modules_redux_["compose"])(toggleExceptionPanelVisibility, expandExceptionPanel, addField)
  };
};
/* harmony default export */ var recurrence_exception_container = (Object(external_tribe_modules_redux_["compose"])(Object(external_tribe_common_hoc_["withStore"])(), Object(external_tribe_modules_reactRedux_["connect"])(recurrence_exception_container_mapStateToProps, recurrence_exception_container_mapDispatchToProps))(recurrence_exception_template));
// CONCATENATED MODULE: ./src/modules/blocks/recurrence-exception/index.js
/**
 * This is not a block, the recurrence exception component is used in the
 * Recurrence component.
 */

// CONCATENATED MODULE: ./src/modules/blocks/recurrence/template.js

/**
 * External dependencies
 */



/**
 * Internal Dependencies
 */







const {
  applyFilters: recurrence_template_applyFilters
} = wp.hooks;
class template_RecurringEntry extends external_React_["PureComponent"] {
  constructor(props) {
    super(props);
    defineProperty_default()(this, "toggleRepeatBlocksVisibility", () => {
      this.setState({
        isRepeatBlockVisible: !this.state.isRepeatBlockVisible
      });
    });
    defineProperty_default()(this, "toggleRulePanelVisibility", () => {
      this.setState({
        isRulePanelVisible: !this.state.isRulePanelVisible
      });
    });
    defineProperty_default()(this, "hideRulePanel", () => {
      this.setState({
        isRulePanelVisible: false
      });
    });
    defineProperty_default()(this, "toggleExceptionPanelVisibility", () => {
      this.setState({
        isExceptionPanelVisible: !this.state.isExceptionPanelVisible
      });
    });
    defineProperty_default()(this, "hideExceptionPanel", () => {
      this.setState({
        isExceptionPanelVisible: false
      });
    });
    defineProperty_default()(this, "toggleRulePanelExpand", () => {
      this.setState({
        isRulePanelExpanded: !this.state.isRulePanelExpanded
      });
    });
    defineProperty_default()(this, "expandRulePanel", () => {
      this.setState({
        isRulePanelExpanded: true
      });
    });
    defineProperty_default()(this, "toggleExceptionPanelExpand", () => {
      this.setState({
        isExceptionPanelExpanded: !this.state.isExceptionPanelExpanded
      });
    });
    defineProperty_default()(this, "expandExceptionPanel", () => {
      this.setState({
        isExceptionPanelExpanded: true
      });
    });
    this.state = {
      isRepeatBlockVisible: false,
      isRulePanelVisible: false,
      isRulePanelExpanded: false,
      isExceptionPanelVisible: false,
      isExceptionPanelExpanded: false
    };
  }
  componentDidMount() {
    const {
      rules,
      exceptions
    } = this.props.attributes;
    rules && this.props.syncRulesFromDB(rules);
    exceptions && this.props.syncExceptionsFromDB(exceptions);
  }
  componentDidUpdate(prevProps) {
    if (!this.props.hasRules && prevProps.hasRules) {
      this.hideRulePanel();
    }
    if (!this.props.hasExceptions && prevProps.hasExceptions) {
      this.hideExceptionPanel();
    }
  }
  renderRepeatEventButton() {
    const initialRepeatBlockClick = () => {
      this.toggleRepeatBlocksVisibility();
      this.toggleRulePanelVisibility();
      this.toggleRulePanelExpand();
      this.props.addField();
    };
    return wp.element.createElement(add_field, {
      onClick: initialRepeatBlockClick
    }, Object(external_tribe_common_utils_globals_["pro"])().blocks_recurrence_rules.panel_title_text);
  }
  renderRecurrence() {
    const ruleProps = {
      isRulePanelVisible: this.state.isRulePanelVisible,
      isRulePanelExpanded: this.state.isRulePanelExpanded,
      toggleRulePanelVisibility: this.toggleRulePanelVisibility,
      toggleRulePanelExpand: this.toggleRulePanelExpand,
      expandRulePanel: this.expandRulePanel
    };
    const exceptionProps = {
      isExceptionPanelVisible: this.state.isExceptionPanelVisible,
      isExceptionPanelExpanded: this.state.isExceptionPanelExpanded,
      toggleExceptionPanelVisibility: this.toggleExceptionPanelVisibility,
      toggleExceptionPanelExpand: this.toggleExceptionPanelExpand,
      expandExceptionPanel: this.expandExceptionPanel
    };
    return this.state.isRepeatBlockVisible || this.props.hasRules || this.props.hasExceptions ? wp.element.createElement(external_React_["Fragment"], null, wp.element.createElement(recurrence_rule_container, ruleProps), wp.element.createElement(recurrence_exception_container, exceptionProps)) : this.renderRepeatEventButton();
  }
  render() {
    return wp.element.createElement(external_React_["Fragment"], null, recurrence_template_applyFilters('blocks.recurrence.renderRecurrenceHook', this.renderRecurrence()), wp.element.createElement(attribute_sync, {
      setAttributes: this.props.setAttributes,
      clientId: this.props.clientId,
      metaField: "exceptions",
      current: this.props.attributes.exceptions,
      selector: exception_selectors_namespaceObject.getExceptions,
      listeners: [exception_types_namespaceObject.ADD_EXCEPTION, exception_types_namespaceObject.EDIT_EXCEPTION, exception_types_namespaceObject.REMOVE_EXCEPTION]
    }), wp.element.createElement(attribute_sync, {
      setAttributes: this.props.setAttributes,
      clientId: this.props.clientId,
      metaField: "rules",
      selector: recurring_selectors_namespaceObject.getRules,
      current: this.props.attributes.rules,
      listeners: [types_namespaceObject.ADD_RULE, types_namespaceObject.EDIT_RULE, types_namespaceObject.REMOVE_RULE]
    }));
  }
}
defineProperty_default()(template_RecurringEntry, "propTypes", {
  attributes: external_tribe_modules_propTypes_default.a.shape({
    rules: external_tribe_modules_propTypes_default.a.string,
    exceptions: external_tribe_modules_propTypes_default.a.string
  }),
  clientId: external_tribe_modules_propTypes_default.a.string.isRequired,
  hasExceptions: external_tribe_modules_propTypes_default.a.bool.isRequired,
  hasRules: external_tribe_modules_propTypes_default.a.bool.isRequired,
  setAttributes: external_tribe_modules_propTypes_default.a.func.isRequired,
  syncExceptionsFromDB: external_tribe_modules_propTypes_default.a.func.isRequired,
  syncRulesFromDB: external_tribe_modules_propTypes_default.a.func.isRequired
});
// CONCATENATED MODULE: ./src/modules/blocks/recurrence/container.js
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */





/**
 * Module Code
 */

const recurrence_container_mapStateToProps = state => ({
  hasRules: recurring_selectors_namespaceObject.hasRules(state),
  hasExceptions: exception_selectors_namespaceObject.hasExceptions(state)
});
const recurrence_container_mapDispatchToProps = dispatch => ({
  addField: () => dispatch(actions_namespaceObject.addField()),
  syncRulesFromDB: payload => dispatch(actions_namespaceObject.syncRulesFromDB(payload)),
  syncExceptionsFromDB: payload => dispatch(exception_actions_namespaceObject.syncExceptionsFromDB(payload))
});
/* harmony default export */ var recurrence_container = (Object(external_tribe_modules_redux_["compose"])(Object(external_tribe_common_hoc_["withStore"])(), Object(external_tribe_modules_reactRedux_["connect"])(recurrence_container_mapStateToProps, recurrence_container_mapDispatchToProps))(template_RecurringEntry));
// CONCATENATED MODULE: ./src/modules/blocks/recurrence/utils.js
/**
 * Internal dependencies
 */


/**
 * Internal dependencies
 */


const addRecurrence = (content, props) => wp.element.createElement(recurrence_container, props);
const hook = () => {
  external_tribe_common_utils_["globals"].wpHooks.addFilter('blocks.eventDatetime.dashboardHook', 'tribe/addRecurrence', addRecurrence);
};
// CONCATENATED MODULE: ./src/modules/blocks/recurrence/index.js
/**
 * This is not a block, the recurrence component is hooked into the
 * Event datetime block if Events Pro is activated.
 */

// EXTERNAL MODULE: external "wp.data"
var external_wp_data_ = __webpack_require__("1ZqX");

// EXTERNAL MODULE: ./src/modules/blocks/recurrence-description/style.pcss
var recurrence_description_style = __webpack_require__("uwex");

// CONCATENATED MODULE: ./src/modules/blocks/recurrence-description/template.js

/**
 * External Dependencies
 */




/*
 * Internal Dependencies
 */


const DEFAULT_DESCRIPTION = Object(external_wp_i18n_["__"])('Recurring Event', 'tribe-events-calendar-pro');
class template_RecurrenceDescription extends external_React_["PureComponent"] {
  constructor(props, context) {
    super(props, context);
    defineProperty_default()(this, "handleClick", () => this.setState({
      isEditing: true
    }, () => this.input.current.focus()));
    defineProperty_default()(this, "handleChange", e => this.setState({
      description: e.target.value
    }));
    defineProperty_default()(this, "handleBlur", () => this.setState({
      isEditing: false
    }, () => this.props.setAttributes({
      description: this.state.description
    })));
    this.input = /*#__PURE__*/external_React_default.a.createRef();
    this.state = {
      isEditing: false,
      description: props.attributes.description || DEFAULT_DESCRIPTION
    };
  }
  render() {
    return this.props.hasRules && wp.element.createElement("span", {
      className: "tribe-editor__events-pro__recurrence-description"
    }, wp.element.createElement(recurrence, null), this.state.isEditing ? wp.element.createElement("input", {
      type: "text",
      name: "description",
      value: this.state.description,
      onChange: this.handleChange,
      onBlur: this.handleBlur,
      ref: this.input,
      disabled: !this.props.isEditable
    }) : wp.element.createElement("button", {
      type: "button",
      onClick: this.handleClick,
      disabled: !this.props.isEditable
    }, this.state.description), wp.element.createElement("a", {
      href: this.props.url,
      target: "__blank"
    }, Object(external_wp_i18n_["__"])('see all', 'tribe-events-calendar-pro')));
  }
}
defineProperty_default()(template_RecurrenceDescription, "propTypes", {
  attributes: external_tribe_modules_propTypes_default.a.shape({
    description: external_tribe_modules_propTypes_default.a.string
  }),
  setAttributes: external_tribe_modules_propTypes_default.a.func,
  hasRules: external_tribe_modules_propTypes_default.a.bool.isRequired,
  url: external_tribe_modules_propTypes_default.a.string.isRequired,
  isEditable: external_tribe_modules_propTypes_default.a.bool.isRequired
});
// CONCATENATED MODULE: ./src/modules/blocks/recurrence-description/container.js
/**
 * External dependencies
 */



/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */





/**
 * Module Code
 */

const recurrence_description_container_mapStateToProps = state => ({
  hasRules: recurring_selectors_namespaceObject.hasRules(state),
  isEditable: external_tribe_events_data_["blocks"].datetime.selectors.isEditable(state)
});
const applyWithSelect = Object(external_wp_data_["withSelect"])(select => {
  const slug = select('core/editor').getCurrentPostAttribute('slug') || '';
  const link = select('core/editor').getCurrentPostAttribute('link') || '';
  return {
    url: link.replace(new RegExp(`${slug}/.*/?$`), `${slug}/all`)
  };
});
/* harmony default export */ var recurrence_description_container = (Object(external_tribe_modules_redux_["compose"])(Object(external_tribe_common_hoc_["withStore"])(), Object(external_tribe_modules_reactRedux_["connect"])(recurrence_description_container_mapStateToProps), applyWithSelect)(template_RecurrenceDescription));
// CONCATENATED MODULE: ./src/modules/blocks/recurrence-description/utils.js
/**
 * Internal dependencies
 */


/**
 * Internal dependencies
 */


const addRecurrenceDescription = (content, props) => external_tribe_common_utils_["globals"].wpHooks.applyFilters('blocks.recurrenceDescription.contentHook', wp.element.createElement(recurrence_description_container, props), props);
const utils_hook = () => {
  external_tribe_common_utils_["globals"].wpHooks.addFilter('blocks.eventDatetime.contentHook', 'tribe/addRecurrenceDescription', addRecurrenceDescription);
};
// CONCATENATED MODULE: ./src/modules/blocks/recurrence-description/index.js
/**
 * This is not a block, the recurrence description component is hooked
 * into the Event datetime block if Events Pro is activated.
 */

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__("pVnL");
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: external "tribe.events.icons"
var external_tribe_events_icons_ = __webpack_require__("d/5d");

// CONCATENATED MODULE: ./src/modules/blocks/single-venue/index.js


const single_venue_excluded = ["className"];
/**
 * External Dependencies
 */
const {
  __
} = wp.i18n;
const {
  useBlockProps
} = wp.blockEditor;


/**
 * Small component to simplify some pseudo event blocks.
 *
 * @param width
 * @returns {JSX.Element}
 * @constructor
 */
const EventItem = ({
  width = '40%'
}) => {
  return wp.element.createElement("div", {
    style: {
      width,
      height: 16,
      background: '#eee',
      margin: '18px 4px'
    }
  });
};

/**
 * The Venue block used in Site Editor templates.
 */
/* harmony default export */ var single_venue = ({
  id: 'tec/single-venue',
  title: __('Single Venue', 'tribe-events-calendar-pro'),
  icon: wp.element.createElement(external_tribe_events_icons_["Venue"], null),
  category: 'tribe-events',
  keywords: [__('Single Venue', 'tribe-events-calendar-pro'), __('The Events Calendar', 'tribe-events-calendar-pro')],
  edit: props => {
    const _useBlockProps = useBlockProps(),
      {
        className
      } = _useBlockProps,
      blockProps = objectWithoutProperties_default()(_useBlockProps, single_venue_excluded);
    return wp.element.createElement("div", extends_default()({
      className: `${className} ${props.className}`
    }, blockProps), wp.element.createElement("h3", null, __('Venue Title', 'tribe-events-calendar-pro')), wp.element.createElement("div", {
      style: {
        float: 'left',
        width: '40%'
      }
    }, wp.element.createElement(EventItem, {
      width: '70%'
    }), wp.element.createElement(EventItem, {
      width: '84%'
    }), wp.element.createElement(EventItem, {
      width: '73%'
    }), wp.element.createElement(EventItem, {
      width: '63%'
    })), wp.element.createElement("div", {
      style: {
        float: 'left',
        width: '30%'
      }
    }, wp.element.createElement("div", {
      style: {
        width: '70%',
        maxWidth: 340,
        height: 180,
        background: '#eee',
        margin: '18px 4px'
      }
    })), wp.element.createElement("div", {
      style: {
        clear: 'both',
        height: 1
      }
    }));
  }
});
// EXTERNAL MODULE: external "lodash.isEqual"
var external_lodash_isEqual_ = __webpack_require__("zgRa");
var external_lodash_isEqual_default = /*#__PURE__*/__webpack_require__.n(external_lodash_isEqual_);

// EXTERNAL MODULE: ./node_modules/react-18-input-autosize/lib/AutosizeInput.js
var AutosizeInput = __webpack_require__("Tu9x");
var AutosizeInput_default = /*#__PURE__*/__webpack_require__.n(AutosizeInput);

// EXTERNAL MODULE: ./src/modules/blocks/related-events/style.pcss
var related_events_style = __webpack_require__("d2qS");

// CONCATENATED MODULE: ./src/modules/blocks/related-events/template.js



/**
 * External dependencies
 */




/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */



const {
  InspectorControls: template_InspectorControls
} = external_tribe_common_utils_globals_["wpEditor"];

/**
 * Module Code
 */

const placeholder = Object(external_wp_i18n_["__"])('Related Events', 'tribe-events-calendar-pro');
const renderPlaceholder = () => {
  const classes = ['tribe-editor__related-events__title', 'tribe-editor__related-events__title--placeholder'];
  return wp.element.createElement("span", {
    className: external_tribe_modules_classnames_default()(classes)
  }, placeholder);
};
const renderLabelInput = ({
  isSelected,
  attributes,
  setAttributes
}) => {
  const {
    title
  } = attributes;
  const setTitle = e => setAttributes({
    title: e.target.value
  });
  const containerClassNames = external_tribe_modules_classnames_default()({
    'tribe-editor__related-events__title': true,
    'tribe-editor__related-events__title--selected': isSelected
  });
  return wp.element.createElement("div", {
    key: "tribe-events-related-events-label",
    className: containerClassNames
  }, wp.element.createElement(AutosizeInput_default.a, {
    id: "tribe-events-related-events-title",
    className: "tribe-editor__related-events__title-text",
    value: title,
    placeholder: placeholder,
    onChange: setTitle
  }));
};
const UI = props => {
  const {
    isSelected,
    categories,
    tags,
    events,
    attributes
  } = props;
  const hasTaxonomy = categories.length || tags.length;
  const hasEvents = events.length;
  const blockTitle = !(isSelected || attributes.title) ? renderPlaceholder() : renderLabelInput(props);
  return wp.element.createElement("div", {
    key: "event-links",
    className: "tribe-editor__block tribe-editor__related-events"
  }, wp.element.createElement("h2", null, blockTitle), hasTaxonomy && hasEvents ? wp.element.createElement(RelatedEventsGrid, {
    events: events,
    displayImages: attributes.displayImages
  }) : wp.element.createElement(RelatedEventsWarning, null));
};
const RelatedEventsWarning = () => {
  /* eslint-disable max-len */
  return wp.element.createElement("div", {
    className: "tribe-editor__related-events__warning"
  }, Object(external_wp_i18n_["__"])('This block displays related events based on the tags and categories you select. Please add tags and categories to display related events, and be sure you have more events for these tags and categories.', 'tribe-events-calendar-pro'));
  /* eslint-enable max-len */
};
const RelatedEventsGrid = ({
  events,
  displayImages
}) => {
  return wp.element.createElement("div", {
    className: "tribe-editor__related-events__grid"
  }, events.map(event => wp.element.createElement(RelatedEventsGridItem, {
    key: event.slug,
    displayImages: displayImages,
    event: event
  })));
};
const RelatedEventsGridItem = ({
  displayImages,
  event
}) => {
  const date = `${event.start_date} - ${event.end_date_details.hour}:${event.end_date_details.minutes}:${event.end_date_details.seconds}`; // eslint-disable-line max-len

  return wp.element.createElement("div", {
    className: "tribe-editor__related-events__grid--item"
  }, displayImages && wp.element.createElement(related_events_placeholder, null), wp.element.createElement("div", {
    className: "tribe-editor__related-events__grid--item-details"
  }, wp.element.createElement(RelatedEventsGridItemTitle, {
    title: event.title
  }), wp.element.createElement(RelatedEventsGridItemDetails, {
    date: date
  })));
};
const RelatedEventsGridItemTitle = ({
  title
}) => wp.element.createElement("h3", {
  className: "tribe-editor__related-events__grid--item-title"
}, title);
const RelatedEventsGridItemDetails = ({
  date
}) => wp.element.createElement("div", {
  className: "tribe-editor__related-events__grid--item-date"
}, date);
const Controls = ({
  isSelected,
  attributes,
  setAttributes
}) => {
  const setDisplayImages = checked => setAttributes({
    displayImages: checked
  });
  return isSelected && wp.element.createElement(template_InspectorControls, {
    key: "inspector"
  }, wp.element.createElement(external_wp_components_["PanelBody"], {
    title: Object(external_wp_i18n_["__"])('Related Events Settings', 'tribe-events-calendar-pro')
  }, wp.element.createElement(external_wp_components_["ToggleControl"], {
    label: Object(external_wp_i18n_["__"])('Display Images', 'tribe-events-calendar-pro'),
    checked: attributes.displayImages,
    onChange: setDisplayImages,
    __nextHasNoMarginBottom: true
  })));
};
class template_RelatedEvents extends external_React_["PureComponent"] {
  constructor(props) {
    super(props);

    // Get initial state
    defineProperty_default()(this, "fetch", () => {
      const {
        tags,
        categories,
        postId
      } = this.props;
      /**
       * @todo: this rest url does not work as expected with categories and tags query string, needs fixing.
       */
      let restUrl = `${Object(external_tribe_common_utils_globals_["rest"])().url}tribe/events/v1/events?&per_page=3`;
      if (categories.length) {
        restUrl = `${restUrl}&categories=${categories.join()}`;
      }
      if (tags.length) {
        restUrl = `${restUrl}&tags=${tags.join()}`;
      }
      fetch(restUrl).then(result => result.json()).then(json => {
        // get the results without the current event
        const events = json.events.filter(e => e.id !== postId);
        this.setState({
          events
        });
      });
    });
    this.state = {
      events: []
    };
  }
  componentDidMount() {
    // Initial fetch
    const attrs = this.props;
    const hasTaxonomy = attrs.categories.length || attrs.tags.length;
    if (hasTaxonomy) {
      this.fetch();
    }
  }
  componentDidUpdate(prevProps) {
    const {
      tags,
      categories
    } = this.props;
    if (!external_lodash_isEqual_default()(tags, prevProps.tags) || !external_lodash_isEqual_default()(categories, prevProps.categories)) {
      this.fetch();
    }
  }
  render() {
    return wp.element.createElement(external_React_["Fragment"], null, wp.element.createElement(UI, extends_default()({}, this.props, {
      events: this.state.events
    })), wp.element.createElement(Controls, this.props));
  }
}
template_RelatedEvents.propTypes = {
  attributes: external_tribe_modules_propTypes_default.a.object,
  setAttributes: external_tribe_modules_propTypes_default.a.func,
  isSelected: external_tribe_modules_propTypes_default.a.bool,
  tags: external_tribe_modules_propTypes_default.a.array,
  categories: external_tribe_modules_propTypes_default.a.array,
  postId: external_tribe_modules_propTypes_default.a.number
};
/* harmony default export */ var related_events_template = (template_RelatedEvents);
// CONCATENATED MODULE: ./src/modules/blocks/related-events/container.js
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


/**
 * Module Code
 */
const container_applyWithSelect = Object(external_wp_data_["withSelect"])(select => {
  const tags = select('core/editor').getEditedPostAttribute('tags');
  const categories = select('core/editor').getEditedPostAttribute('tribe_events_cat');
  const postId = select('core/editor').getCurrentPostId();
  return {
    tags: tags || [],
    categories: categories || [],
    postId
  };
});
/* harmony default export */ var related_events_container = (container_applyWithSelect(related_events_template));
// CONCATENATED MODULE: ./src/modules/blocks/related-events/index.js
/**
 * Internal dependencies
 */


/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */



/**
 * Module Code
 */
/* harmony default export */ var related_events = ({
  id: 'related-events',
  title: Object(external_wp_i18n_["__"])('Related Events', 'tribe-events-calendar-pro'),
  description: Object(external_wp_i18n_["__"])('Show other events with the same event categories and/or tags.', 'tribe-events-calendar-pro'),
  icon: wp.element.createElement(external_tribe_events_icons_["Sharing"], null),
  category: 'tribe-events',
  keywords: ['event', 'events-gutenberg', 'tribe'],
  supports: {
    html: false
  },
  attributes: {
    title: {
      type: 'html',
      default: Object(external_wp_i18n_["__"])('Related Events', 'tribe-events-calendar-pro')
    },
    displayImages: {
      type: 'boolean',
      default: true
    }
  },
  edit: related_events_container,
  save: () => null
});
// CONCATENATED MODULE: ./src/modules/blocks/virtual-event/template.js
/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */


/**
 * Module Code
 */

const VirtualEvents = () => wp.element.createElement("section", {
  className: "tribe-editor__block components-placeholder is-large"
}, wp.element.createElement("div", {
  className: "tribe-editor__event-virtual"
}, wp.element.createElement("h3", null, Object(external_wp_i18n_["__"])('Virtual Event Details', 'tribe-events-calendar-pro')), wp.element.createElement("p", {
  className: "components-placeholder__instructions"
}, Object(external_wp_i18n_["__"])('Configure Virtual Event details using the section at the bottom of this page', 'tribe-events-calendar-pro'))));
/* harmony default export */ var virtual_event_template = (VirtualEvents);
// CONCATENATED MODULE: ./src/modules/blocks/virtual-event/index.js
/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */



/**
 * Module Code
 */
/* harmony default export */ var blocks_virtual_event = ({
  id: 'virtual-event',
  title: Object(external_wp_i18n_["__"])('Virtual Event', 'tribe-events-calendar-pro'),
  description: Object(external_wp_i18n_["__"])('Displays the virtual event block.', 'tribe-events-calendar-pro'),
  icon: wp.element.createElement(virtual, null),
  category: 'tribe-events',
  keywords: ['event', 'events-gutenberg', 'tribe'],
  supports: {
    html: false
  },
  attributes: {},
  edit: virtual_event_template,
  save() {
    return null;
  }
});
// CONCATENATED MODULE: ./src/modules/data/status/types.js
/* eslint-disable max-len */
/**
 * Internal dependencies
 */

const SET_SERIES_QUEUE_STATUS = `${PREFIX_EVENTS_PRO_STORE}/SET_SERIES_QUEUE_STATUS`;
// CONCATENATED MODULE: ./src/modules/data/status/reducer.js

function reducer_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function reducer_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? reducer_ownKeys(Object(t), !0).forEach(function (r) { defineProperty_default()(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : reducer_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
/**
 * Internal dependencies
 */

const reducer_DEFAULT_STATE = {};
/* harmony default export */ var status_reducer = ((state = reducer_DEFAULT_STATE, action) => {
  switch (action.type) {
    case SET_SERIES_QUEUE_STATUS:
      return reducer_objectSpread(reducer_objectSpread({}, state), action.payload);
    default:
      return state;
  }
});
// CONCATENATED MODULE: ./src/modules/data/status/actions.js
/**
 * Internal dependencies
 */

const setSeriesQueueStatus = payload => ({
  type: SET_SERIES_QUEUE_STATUS,
  payload
});
// CONCATENATED MODULE: ./src/modules/data/status/selectors.js
/**
 * External dependencies
 */


const getStatus = state => state[external_tribe_common_data_plugins_["constants"].EVENTS_PRO_PLUGIN].status;
const selectors_isCompleted = Object(external_tribe_modules_reselect_["createSelector"])(getStatus, status => !!status.done);
const getProgress = Object(external_tribe_modules_reselect_["createSelector"])(getStatus, status => status.progress);
// EXTERNAL MODULE: external "lodash.some"
var external_lodash_some_ = __webpack_require__("XNR4");
var external_lodash_some_default = /*#__PURE__*/__webpack_require__.n(external_lodash_some_);

// EXTERNAL MODULE: external "tribe.modules.reduxSaga"
var external_tribe_modules_reduxSaga_ = __webpack_require__("1fKG");

// EXTERNAL MODULE: ./node_modules/whatwg-fetch/fetch.js
var whatwg_fetch_fetch = __webpack_require__("bZMm");

// CONCATENATED MODULE: ./src/modules/data/status/sagas.js

/* eslint-disable max-len, camelcase */
/**
 * External dependencies
 */








/**
 * Internal dependencies
 */





//
// ─── NOTICES ─────────────────────────────────────────────────────────────────────
//
const NOTICE_EDITING_SERIES = 'NOTICE_EDITING_SERIES';
const NOTICE_PROGRESS_ON_SERIES_CREATION_COUNT = 'NOTICE_PROGRESS_ON_SERIES_CREATION_COUNT';
const NOTICE_PROGRESS_ON_SERIES_CREATION = 'NOTICE_PROGRESS_ON_SERIES_CREATION';
const NOTICES = {
  [NOTICE_EDITING_SERIES]: Object(external_wp_i18n_["__"])('You are currently editing all events in a recurring series.', 'tribe-events-calendar-pro'),
  [NOTICE_PROGRESS_ON_SERIES_CREATION_COUNT]: Object(external_wp_i18n_["_n"])('%d instance', '%d instances', 1, 'tribe-events-calendar-pro'),
  [NOTICE_PROGRESS_ON_SERIES_CREATION]: Object(external_wp_i18n_["__"])('of this event have been created through %s.', 'tribe-events-calendar-pro')
};

/**
 * Fetches current series queue status
 *
 * @export
 * @yields
 * @returns {object | boolean} JSON status or false when no series being edited
 */
function* fetchStatus() {
  try {
    const payload = new FormData();
    const postId = Object(external_wp_data_["select"])('core/editor').getCurrentPostId();
    if (!postId) {
      throw 'No post ID';
    }
    yield Object(external_tribe_modules_reduxSaga_effects_["call"])([payload, 'append'], 'action', 'gutenberg_events_pro_recurrence_queue');
    yield Object(external_tribe_modules_reduxSaga_effects_["call"])([payload, 'append'], 'recurrence_queue_status_nonce', external_tribe_common_utils_["globals"].restNonce().queue_status_nonce); // eslint-disable-line max-len
    yield Object(external_tribe_modules_reduxSaga_effects_["call"])([payload, 'append'], 'post_id', postId);
    const response = yield Object(external_tribe_modules_reduxSaga_effects_["call"])(fetch, window.ajaxurl, {
      method: 'POST',
      credentials: 'same-origin',
      body: payload
    });
    return yield Object(external_tribe_modules_reduxSaga_effects_["call"])([response, 'json']);
  } catch (error) {
    // TODO: Better error handling
    console.error(error);
    return false; // To mark as completed
  }
}

/**
 * Polls series status until series is completed
 *
 * @export
 * @yields
 */
function* pollUntilSeriesCompleted() {
  // Disable datetime block edits until we know we're not making any series events
  yield Object(external_tribe_modules_reduxSaga_effects_["put"])(external_tribe_events_data_["blocks"].datetime.actions.disableEdits());
  while (true) {
    const response = yield Object(external_tribe_modules_reduxSaga_effects_["call"])(fetchStatus);
    const isCompleted = response === false || response.done; // If false, no edits being done

    if (isCompleted) {
      const payload = response === false ? {
        done: isCompleted
      } : response;
      yield Object(external_tribe_modules_reduxSaga_effects_["put"])(setSeriesQueueStatus(payload));
      const {
        items_created,
        last_created_at,
        done,
        percentage
      } = response;

      // Show progress notice
      if (done && 100 === percentage) {
        const date = external_tribe_common_utils_["moment"].toDate(external_tribe_common_utils_["moment"].toMoment(last_created_at));
        yield Object(external_tribe_modules_reduxSaga_effects_["call"])([Object(external_wp_data_["dispatch"])('core/notices'), 'createSuccessNotice'], `${Object(external_wp_i18n_["sprintf"])(Object(external_wp_i18n_["_n"])('%d instance', '%d instances', items_created, 'tribe-events-calendar-pro'), items_created)} ${Object(external_wp_i18n_["sprintf"])(NOTICES[NOTICE_PROGRESS_ON_SERIES_CREATION], date)}`, {
          id: NOTICE_PROGRESS_ON_SERIES_CREATION,
          isDismissible: true
        });
      }
    } else {
      yield Object(external_tribe_modules_reduxSaga_effects_["put"])(setSeriesQueueStatus(response));

      // Show "still creating" notice. Same NOTICE_PROGRESS_ON_SERIES_CREATION id is used here so that the above "completion" notice replaces this "still working" notice.
      yield Object(external_tribe_modules_reduxSaga_effects_["call"])([Object(external_wp_data_["dispatch"])('core/notices'), 'createSuccessNotice'], Object(external_wp_i18n_["__"])('Recurring event instances are still being created…', 'tribe-events-calendar-pro'), {
        id: NOTICE_PROGRESS_ON_SERIES_CREATION,
        isDismissible: true
      });
    }
    if (yield Object(external_tribe_modules_reduxSaga_effects_["select"])(selectors_isCompleted)) {
      yield Object(external_tribe_modules_reduxSaga_effects_["put"])(external_tribe_events_data_["blocks"].datetime.actions.allowEdits()); // Allow datetime block to be editable again
      break; // We done
    }
    yield Object(external_tribe_modules_reduxSaga_effects_["call"])(external_tribe_modules_reduxSaga_["delay"], 1000);
  }
}

/**
 * Creates event channel subscribing to WP editor state
 *
 * @returns {Function} Channel
 */
function createWPEditorChannel() {
  return Object(external_tribe_modules_reduxSaga_["eventChannel"])(emit => {
    const editor = Object(external_wp_data_["select"])('core/editor');
    const predicates = [() => editor.isSavingPost() && !editor.isAutosavingPost(), editor.isPublishingPost];

    // Returns unsubscribe function
    return Object(external_wp_data_["subscribe"])(() => {
      // Only emit when truthy
      if (external_lodash_some_default()(predicates, fn => fn())) {
        emit(true); // Emitted value is insignificant here, but cannot be left undefined
      }
    });
  });
}

/**
 * Only used to get around redux saga bug when using channels and actions `takes` together
 *
 * @export
 * @yields
 */
function* actionTaker() {
  yield Object(external_tribe_modules_reduxSaga_effects_["take"])([SYNC_RULES_FROM_DB]);
}

/**
 * Show edit all prompt
 *
 * @export
 * @yields
 */
function* showEditingAllSeriesPrompt() {
  yield Object(external_tribe_modules_reduxSaga_effects_["take"])([SYNC_RULES_FROM_DB]);
  const isRecurring = yield Object(external_tribe_modules_reduxSaga_effects_["select"])(selectors_hasRules);
  const isEditingAll = yield Object(external_tribe_modules_reduxSaga_effects_["call"])([/action=edit/, 'test'], window.location.search);
  if (isRecurring && isEditingAll) {
    // Show editing notice
    yield Object(external_tribe_modules_reduxSaga_effects_["call"])([Object(external_wp_data_["dispatch"])('core/notices'), 'createSuccessNotice'], NOTICES[NOTICE_EDITING_SERIES], {
      id: NOTICE_EDITING_SERIES,
      isDismissible: false
    });
  }
}

/**
 * Poll on actions or channel emit
 *
 * @export
 * @yields
 */
function* status_sagas_watchers() {
  yield Object(external_tribe_modules_reduxSaga_effects_["fork"])(showEditingAllSeriesPrompt);
  const channel = yield Object(external_tribe_modules_reduxSaga_effects_["call"])(createWPEditorChannel);
  while (true) {
    yield Object(external_tribe_modules_reduxSaga_effects_["race"])([Object(external_tribe_modules_reduxSaga_effects_["take"])(channel), Object(external_tribe_modules_reduxSaga_effects_["call"])(actionTaker)]);
    yield Object(external_tribe_modules_reduxSaga_effects_["call"])(pollUntilSeriesCompleted);
  }
}
// CONCATENATED MODULE: ./src/modules/data/status/index.js
/**
 * Internal dependencies
 */





/* harmony default export */ var data_status = (status_reducer);

// CONCATENATED MODULE: ./src/modules/data/reducers.js
/**
 * External dependencies
 */


/**
 * Internal dependencies
 */


/* harmony default export */ var data_reducers = (Object(external_tribe_modules_redux_["combineReducers"])({
  blocks: data_blocks,
  status: data_status
}));
// EXTERNAL MODULE: external "tribe.common.store"
var external_tribe_common_store_ = __webpack_require__("g8L8");

// CONCATENATED MODULE: ./src/modules/data/sagas.js
/**
 * External dependencies
 */


/**
 * Internal dependencies
 */




/* harmony default export */ var data_sagas = (() => [sync_watchers, status_sagas_watchers, watchers, sagas_watchers].forEach(sagas => external_tribe_common_store_["store"].run(sagas)));
// CONCATENATED MODULE: ./src/modules/data/subscribers.js
/**
 * Internal dependencies
 */

/* harmony default export */ var data_subscribers = (() => {
  subscribers();
});
// CONCATENATED MODULE: ./src/modules/data/index.js
/**
 * External dependencies
 */









const {
  EVENTS_PRO_PLUGIN
} = external_tribe_common_data_plugins_["constants"];
const data_setInitialState = data => {
  reducer_setInitialState(data);
};
const initStore = () => {
  const data = external_tribe_common_utils_["globals"].postObjects().tribe_events;
  data_setInitialState(data);
  const {
    dispatch,
    injectReducers
  } = external_tribe_common_store_["store"];
  data_sagas();
  data_subscribers();
  injectReducers({
    [EVENTS_PRO_PLUGIN]: data_reducers
  });
  dispatch(external_tribe_common_data_plugins_["actions"].addPlugin(EVENTS_PRO_PLUGIN));
};
const getStore = () => external_tribe_common_store_["store"];

// CONCATENATED MODULE: ./src/modules/blocks/index.js
/**
 * External Dependencies
 */


/**
 * Internal Dependencies
 */







hook();
utils_hook();
const blocks_blocks = addAdditionalFields([blocks_virtual_event, related_events, single_venue]);
blocks_blocks.forEach(block => {
  const blockName = block.id.includes('/') ? block.id : `tribe/${block.id}`;
  Object(external_wp_blocks_["registerBlockType"])(blockName, block);
});

// Initialize AFTER blocks are registered
// to avoid plugin shown as available in reducer
// but not having block available for use
initStore();
/* harmony default export */ var modules_blocks = (blocks_blocks);
// CONCATENATED MODULE: ./src/modules/modifiers/event-venue/index.js
/**
 * Internal dependencies
 */

external_tribe_common_utils_globals_["wpHooks"].addFilter('tec.events.blocks.tribe_event_venue.getVenueId', 'tec/events-pro/getVenueId', (venueId, props) => {
  return props.attributes.venue || null;
});
// CONCATENATED MODULE: ./src/modules/index.js
/**
 * Internal dependencies
 */







/***/ }),

/***/ "aJRi":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = React;

/***/ }),

/***/ "cEuG":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "d/5d":
/***/ (function(module, exports) {

module.exports = tribe.events.icons;

/***/ }),

/***/ "d2qS":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "df/k":
/***/ (function(module, exports) {

module.exports = lodash.identity;

/***/ }),

/***/ "e5yv":
/***/ (function(module, exports) {

module.exports = lodash.isArray;

/***/ }),

/***/ "fSse":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "fZxb":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "fcXm":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "g8L8":
/***/ (function(module, exports) {

module.exports = tribe.common.store;

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = tribe.modules.reactRedux;

/***/ }),

/***/ "i0Sv":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "kK34":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "kczL":
/***/ (function(module, exports) {

module.exports = tribe.common.utils.globals;

/***/ }),

/***/ "l3Sj":
/***/ (function(module, exports) {

module.exports = wp.i18n;

/***/ }),

/***/ "m3e7":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "mZj9":
/***/ (function(module, exports) {



/***/ }),

/***/ "oNd/":
/***/ (function(module, exports) {

module.exports = lodash.curry;

/***/ }),

/***/ "rKB8":
/***/ (function(module, exports) {

module.exports = tribe.modules.redux;

/***/ }),

/***/ "rf6O":
/***/ (function(module, exports) {

module.exports = tribe.modules.propTypes;

/***/ }),

/***/ "sSeK":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "sqH4":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "tI+e":
/***/ (function(module, exports) {

module.exports = wp.components;

/***/ }),

/***/ "tbMi":
/***/ (function(module, exports) {

module.exports = tribe.common.utils.date;

/***/ }),

/***/ "uPrq":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "uwex":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "xD0k":
/***/ (function(module, exports) {

module.exports = tribe.events.data;

/***/ }),

/***/ "zZOC":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "zgRa":
/***/ (function(module, exports) {

module.exports = lodash.isEqual;

/***/ })

/******/ });