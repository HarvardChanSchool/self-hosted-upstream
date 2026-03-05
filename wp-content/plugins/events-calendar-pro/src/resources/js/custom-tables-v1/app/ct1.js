var tribe = typeof tribe === "object" ? tribe : {}; tribe["custom-tables-v1"] = tribe["custom-tables-v1"] || {}; tribe["custom-tables-v1"]["ct1"] =
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
/******/ 	deferredModules.push(["NFBX",1]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "13aI":
/***/ (function(module, exports) {

module.exports = tribe["events-pro"].data.blocks.recurring.actions;

/***/ }),

/***/ "644Q":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "6OzC":
/***/ (function(module, exports) {

module.exports = lodash.find;

/***/ }),

/***/ "6Ugf":
/***/ (function(module, exports) {

module.exports = tribe.common.elements;

/***/ }),

/***/ "8N8N":
/***/ (function(module, exports) {

module.exports = tribe["events-pro"].elements;

/***/ }),

/***/ "9lL/":
/***/ (function(module, exports) {

module.exports = tribe.common.data.plugins;

/***/ }),

/***/ "B8vQ":
/***/ (function(module, exports) {

module.exports = tribe.common.utils;

/***/ }),

/***/ "GE2E":
/***/ (function(module, exports) {

module.exports = tribe.common.icons;

/***/ }),

/***/ "HJt2":
/***/ (function(module, exports) {

module.exports = tribe.events.data.blocks.datetime;

/***/ }),

/***/ "Ixdi":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "JXX8":
/***/ (function(module, exports) {

module.exports = tribe["events-pro"].data.blocks.recurring;

/***/ }),

/***/ "K2gz":
/***/ (function(module, exports) {

module.exports = tribe.modules.classnames;

/***/ }),

/***/ "MWqi":
/***/ (function(module, exports) {

module.exports = tribe.modules.reselect;

/***/ }),

/***/ "MXy+":
/***/ (function(module, exports) {

module.exports = tribe.events.data.blocks.datetime.reducer;

/***/ }),

/***/ "NFBX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "blocks", function() { return /* reexport */ custom_tables_v1_blocks_namespaceObject; });
__webpack_require__.d(__webpack_exports__, "data", function() { return /* reexport */ data_namespaceObject; });
__webpack_require__.d(__webpack_exports__, "dialog", function() { return /* reexport */ custom_tables_v1_dialog_namespaceObject; });
__webpack_require__.d(__webpack_exports__, "elements", function() { return /* reexport */ elements_namespaceObject; });
__webpack_require__.d(__webpack_exports__, "plugins", function() { return /* reexport */ custom_tables_v1_plugins_namespaceObject; });
__webpack_require__.d(__webpack_exports__, "occurrenceRedirect", function() { return /* reexport */ custom_tables_v1_occurrence_redirect_namespaceObject; });
__webpack_require__.d(__webpack_exports__, "seriesMetabox", function() { return /* reexport */ custom_tables_v1_series_metabox_namespaceObject; });

// NAMESPACE OBJECT: ./src/modules/custom-tables-v1/data/plugins/constants.js
var constants_namespaceObject = {};
__webpack_require__.r(constants_namespaceObject);
__webpack_require__.d(constants_namespaceObject, "TEC_EVENTS_PRO_PLUGIN", function() { return TEC_EVENTS_PRO_PLUGIN; });

// NAMESPACE OBJECT: ./src/modules/custom-tables-v1/data/blocks/exception/types.js
var exception_types_namespaceObject = {};
__webpack_require__.r(exception_types_namespaceObject);
__webpack_require__.d(exception_types_namespaceObject, "ADD_EXCEPTION_RULE", function() { return ADD_EXCEPTION_RULE; });
__webpack_require__.d(exception_types_namespaceObject, "REMOVE_EXCEPTION_RULE", function() { return REMOVE_EXCEPTION_RULE; });
__webpack_require__.d(exception_types_namespaceObject, "EDIT_EXCEPTION_RULE", function() { return EDIT_EXCEPTION_RULE; });

// NAMESPACE OBJECT: ./src/modules/custom-tables-v1/data/blocks/exception/actions.js
var exception_actions_namespaceObject = {};
__webpack_require__.r(exception_actions_namespaceObject);
__webpack_require__.d(exception_actions_namespaceObject, "addExceptionRule", function() { return addExceptionRule; });
__webpack_require__.d(exception_actions_namespaceObject, "removeExceptionRule", function() { return removeExceptionRule; });
__webpack_require__.d(exception_actions_namespaceObject, "editExceptionRule", function() { return editExceptionRule; });

// NAMESPACE OBJECT: ./src/modules/custom-tables-v1/data/shared/constants.js
var shared_constants_namespaceObject = {};
__webpack_require__.r(shared_constants_namespaceObject);
__webpack_require__.d(shared_constants_namespaceObject, "DAY_LABEL", function() { return DAY_LABEL; });
__webpack_require__.d(shared_constants_namespaceObject, "WEEK_LABEL", function() { return WEEK_LABEL; });
__webpack_require__.d(shared_constants_namespaceObject, "MONTH_LABEL", function() { return MONTH_LABEL; });
__webpack_require__.d(shared_constants_namespaceObject, "YEAR_LABEL", function() { return YEAR_LABEL; });
__webpack_require__.d(shared_constants_namespaceObject, "DAY_LABEL_PLURAL", function() { return DAY_LABEL_PLURAL; });
__webpack_require__.d(shared_constants_namespaceObject, "WEEK_LABEL_PLURAL", function() { return WEEK_LABEL_PLURAL; });
__webpack_require__.d(shared_constants_namespaceObject, "MONTH_LABEL_PLURAL", function() { return MONTH_LABEL_PLURAL; });
__webpack_require__.d(shared_constants_namespaceObject, "YEAR_LABEL_PLURAL", function() { return YEAR_LABEL_PLURAL; });
__webpack_require__.d(shared_constants_namespaceObject, "SINGLE_LABEL", function() { return SINGLE_LABEL; });
__webpack_require__.d(shared_constants_namespaceObject, "DAILY_LABEL", function() { return DAILY_LABEL; });
__webpack_require__.d(shared_constants_namespaceObject, "WEEKLY_LABEL", function() { return WEEKLY_LABEL; });
__webpack_require__.d(shared_constants_namespaceObject, "MONTHLY_LABEL", function() { return MONTHLY_LABEL; });
__webpack_require__.d(shared_constants_namespaceObject, "YEARLY_LABEL", function() { return YEARLY_LABEL; });
__webpack_require__.d(shared_constants_namespaceObject, "WEEKLY_CUSTOM_LABEL", function() { return WEEKLY_CUSTOM_LABEL; });
__webpack_require__.d(shared_constants_namespaceObject, "MONTHLY_CUSTOM_LABEL", function() { return MONTHLY_CUSTOM_LABEL; });
__webpack_require__.d(shared_constants_namespaceObject, "YEARLY_CUSTOM_LABEL", function() { return YEARLY_CUSTOM_LABEL; });
__webpack_require__.d(shared_constants_namespaceObject, "WEEKLY_CUSTOM_TYPE_ID", function() { return WEEKLY_CUSTOM_TYPE_ID; });
__webpack_require__.d(shared_constants_namespaceObject, "MONTHLY_CUSTOM_TYPE_ID", function() { return MONTHLY_CUSTOM_TYPE_ID; });
__webpack_require__.d(shared_constants_namespaceObject, "YEARLY_CUSTOM_TYPE_ID", function() { return YEARLY_CUSTOM_TYPE_ID; });
__webpack_require__.d(shared_constants_namespaceObject, "KEY_IS_OFF_START", function() { return KEY_IS_OFF_START; });

// NAMESPACE OBJECT: ./src/modules/custom-tables-v1/data/blocks/exception/options.js
var options_namespaceObject = {};
__webpack_require__.r(options_namespaceObject);
__webpack_require__.d(options_namespaceObject, "WEEKLY_CUSTOM_EXCEPTION_RULE_TYPES_OPTION", function() { return WEEKLY_CUSTOM_EXCEPTION_RULE_TYPES_OPTION; });
__webpack_require__.d(options_namespaceObject, "MONTHLY_CUSTOM_EXCEPTION_RULE_TYPES_OPTION", function() { return MONTHLY_CUSTOM_EXCEPTION_RULE_TYPES_OPTION; });
__webpack_require__.d(options_namespaceObject, "YEARLY_CUSTOM_EXCEPTION_RULE_TYPES_OPTION", function() { return YEARLY_CUSTOM_EXCEPTION_RULE_TYPES_OPTION; });
__webpack_require__.d(options_namespaceObject, "EXCEPTION_RULE_TYPES_OPTIONS", function() { return EXCEPTION_RULE_TYPES_OPTIONS; });
__webpack_require__.d(options_namespaceObject, "CUSTOM_EXCEPTION_RULE_TYPES_OPTIONS", function() { return CUSTOM_EXCEPTION_RULE_TYPES_OPTIONS; });

// NAMESPACE OBJECT: ./src/modules/custom-tables-v1/data/blocks/exception/selectors.js
var exception_selectors_namespaceObject = {};
__webpack_require__.r(exception_selectors_namespaceObject);
__webpack_require__.d(exception_selectors_namespaceObject, "getIndex", function() { return getIndex; });
__webpack_require__.d(exception_selectors_namespaceObject, "getAllExceptionRules", function() { return getAllExceptionRules; });
__webpack_require__.d(exception_selectors_namespaceObject, "getExceptionRule", function() { return getExceptionRule; });
__webpack_require__.d(exception_selectors_namespaceObject, "getExceptionRuleTypes", function() { return getExceptionRuleTypes; });
__webpack_require__.d(exception_selectors_namespaceObject, "getIsOffStart", function() { return getIsOffStart; });
__webpack_require__.d(exception_selectors_namespaceObject, "getOffStartIndex", function() { return getOffStartIndex; });
__webpack_require__.d(exception_selectors_namespaceObject, "getTypeId", function() { return getTypeId; });
__webpack_require__.d(exception_selectors_namespaceObject, "getTypeOption", function() { return getTypeOption; });
__webpack_require__.d(exception_selectors_namespaceObject, "isRuleTypeCustom", function() { return isRuleTypeCustom; });

// NAMESPACE OBJECT: ./src/modules/custom-tables-v1/data/blocks/exception/index.js
var exception_namespaceObject = {};
__webpack_require__.r(exception_namespaceObject);
__webpack_require__.d(exception_namespaceObject, "types", function() { return exception_types_namespaceObject; });
__webpack_require__.d(exception_namespaceObject, "actions", function() { return exception_actions_namespaceObject; });
__webpack_require__.d(exception_namespaceObject, "selectors", function() { return exception_selectors_namespaceObject; });
__webpack_require__.d(exception_namespaceObject, "options", function() { return options_namespaceObject; });
__webpack_require__.d(exception_namespaceObject, "sagas", function() { return watchers; });
__webpack_require__.d(exception_namespaceObject, "default", function() { return exception_reducer; });
__webpack_require__.d(exception_namespaceObject, "setInitialState", function() { return reducer_setInitialState; });

// NAMESPACE OBJECT: ./src/modules/custom-tables-v1/data/blocks/recurring/types.js
var recurring_types_namespaceObject = {};
__webpack_require__.r(recurring_types_namespaceObject);
__webpack_require__.d(recurring_types_namespaceObject, "ADD_RECURRENCE_RULE", function() { return ADD_RECURRENCE_RULE; });
__webpack_require__.d(recurring_types_namespaceObject, "REMOVE_RECURRENCE_RULE", function() { return REMOVE_RECURRENCE_RULE; });
__webpack_require__.d(recurring_types_namespaceObject, "EDIT_RECURRENCE_RULE", function() { return EDIT_RECURRENCE_RULE; });

// NAMESPACE OBJECT: ./src/modules/custom-tables-v1/data/blocks/recurring/actions.js
var recurring_actions_namespaceObject = {};
__webpack_require__.r(recurring_actions_namespaceObject);
__webpack_require__.d(recurring_actions_namespaceObject, "addRecurrenceRule", function() { return addRecurrenceRule; });
__webpack_require__.d(recurring_actions_namespaceObject, "removeRecurrenceRule", function() { return removeRecurrenceRule; });
__webpack_require__.d(recurring_actions_namespaceObject, "editRecurrenceRule", function() { return editRecurrenceRule; });

// NAMESPACE OBJECT: ./src/modules/custom-tables-v1/data/blocks/recurring/options.js
var recurring_options_namespaceObject = {};
__webpack_require__.r(recurring_options_namespaceObject);
__webpack_require__.d(recurring_options_namespaceObject, "WEEKLY_CUSTOM_RECURRENCE_RULE_TYPES_OPTION", function() { return WEEKLY_CUSTOM_RECURRENCE_RULE_TYPES_OPTION; });
__webpack_require__.d(recurring_options_namespaceObject, "MONTHLY_CUSTOM_RECURRENCE_RULE_TYPES_OPTION", function() { return MONTHLY_CUSTOM_RECURRENCE_RULE_TYPES_OPTION; });
__webpack_require__.d(recurring_options_namespaceObject, "YEARLY_CUSTOM_RECURRENCE_RULE_TYPES_OPTION", function() { return YEARLY_CUSTOM_RECURRENCE_RULE_TYPES_OPTION; });
__webpack_require__.d(recurring_options_namespaceObject, "RECURRENCE_RULE_TYPES_OPTIONS", function() { return RECURRENCE_RULE_TYPES_OPTIONS; });
__webpack_require__.d(recurring_options_namespaceObject, "CUSTOM_RECURRENCE_RULE_TYPES_OPTIONS", function() { return CUSTOM_RECURRENCE_RULE_TYPES_OPTIONS; });

// NAMESPACE OBJECT: ./src/modules/custom-tables-v1/data/blocks/recurring/selectors.js
var recurring_selectors_namespaceObject = {};
__webpack_require__.r(recurring_selectors_namespaceObject);
__webpack_require__.d(recurring_selectors_namespaceObject, "getIndex", function() { return selectors_getIndex; });
__webpack_require__.d(recurring_selectors_namespaceObject, "getAllRecurrenceRules", function() { return getAllRecurrenceRules; });
__webpack_require__.d(recurring_selectors_namespaceObject, "getRecurrenceRule", function() { return getRecurrenceRule; });
__webpack_require__.d(recurring_selectors_namespaceObject, "getRecurrenceRuleTypes", function() { return getRecurrenceRuleTypes; });
__webpack_require__.d(recurring_selectors_namespaceObject, "getIsOffStart", function() { return selectors_getIsOffStart; });
__webpack_require__.d(recurring_selectors_namespaceObject, "getOffStartIndex", function() { return selectors_getOffStartIndex; });
__webpack_require__.d(recurring_selectors_namespaceObject, "getTypeId", function() { return selectors_getTypeId; });
__webpack_require__.d(recurring_selectors_namespaceObject, "getTypeOption", function() { return selectors_getTypeOption; });
__webpack_require__.d(recurring_selectors_namespaceObject, "isRuleTypeCustom", function() { return selectors_isRuleTypeCustom; });

// NAMESPACE OBJECT: ./src/modules/custom-tables-v1/data/blocks/recurring/index.js
var recurring_namespaceObject = {};
__webpack_require__.r(recurring_namespaceObject);
__webpack_require__.d(recurring_namespaceObject, "types", function() { return recurring_types_namespaceObject; });
__webpack_require__.d(recurring_namespaceObject, "actions", function() { return recurring_actions_namespaceObject; });
__webpack_require__.d(recurring_namespaceObject, "selectors", function() { return recurring_selectors_namespaceObject; });
__webpack_require__.d(recurring_namespaceObject, "options", function() { return recurring_options_namespaceObject; });
__webpack_require__.d(recurring_namespaceObject, "sagas", function() { return sagas_watchers; });
__webpack_require__.d(recurring_namespaceObject, "default", function() { return recurring_reducer; });
__webpack_require__.d(recurring_namespaceObject, "setInitialState", function() { return recurring_reducer_setInitialState; });

// NAMESPACE OBJECT: ./src/modules/custom-tables-v1/data/blocks/recurrence/selectors.js
var recurrence_selectors_namespaceObject = {};
__webpack_require__.r(recurrence_selectors_namespaceObject);
__webpack_require__.d(recurrence_selectors_namespaceObject, "getTickets", function() { return getTickets; });
__webpack_require__.d(recurrence_selectors_namespaceObject, "isEventTicketsActive", function() { return isEventTicketsActive; });
__webpack_require__.d(recurrence_selectors_namespaceObject, "hasRSVP", function() { return hasRSVP; });
__webpack_require__.d(recurrence_selectors_namespaceObject, "hasTickets", function() { return hasTickets; });

// NAMESPACE OBJECT: ./src/modules/custom-tables-v1/data/shared/selectors.js
var shared_selectors_namespaceObject = {};
__webpack_require__.r(shared_selectors_namespaceObject);
__webpack_require__.d(shared_selectors_namespaceObject, "getShared", function() { return getShared; });
__webpack_require__.d(shared_selectors_namespaceObject, "getDayOfMonthOptions", function() { return getDayOfMonthOptions; });

// NAMESPACE OBJECT: ./src/modules/custom-tables-v1/data/index.js
var data_namespaceObject = {};
__webpack_require__.r(data_namespaceObject);
__webpack_require__.d(data_namespaceObject, "initStore", function() { return initStore; });
__webpack_require__.d(data_namespaceObject, "getStore", function() { return getStore; });

// NAMESPACE OBJECT: ./src/modules/custom-tables-v1/blocks/index.js
var custom_tables_v1_blocks_namespaceObject = {};
__webpack_require__.r(custom_tables_v1_blocks_namespaceObject);

// NAMESPACE OBJECT: ./src/modules/custom-tables-v1/dialog/index.js
var custom_tables_v1_dialog_namespaceObject = {};
__webpack_require__.r(custom_tables_v1_dialog_namespaceObject);

// NAMESPACE OBJECT: ./src/modules/custom-tables-v1/elements/index.js
var elements_namespaceObject = {};
__webpack_require__.r(elements_namespaceObject);
__webpack_require__.d(elements_namespaceObject, "DayOfMonthPicker", function() { return day_of_month_picker; });
__webpack_require__.d(elements_namespaceObject, "EveryFrequency", function() { return every_frequency; });
__webpack_require__.d(elements_namespaceObject, "OnDayOfMonthPicker", function() { return on_day_of_month_picker; });

// NAMESPACE OBJECT: ./src/modules/custom-tables-v1/occurrence-redirect/index.js
var custom_tables_v1_occurrence_redirect_namespaceObject = {};
__webpack_require__.r(custom_tables_v1_occurrence_redirect_namespaceObject);

// NAMESPACE OBJECT: ./src/modules/custom-tables-v1/plugins/index.js
var custom_tables_v1_plugins_namespaceObject = {};
__webpack_require__.r(custom_tables_v1_plugins_namespaceObject);

// NAMESPACE OBJECT: ./src/modules/custom-tables-v1/series-metabox/index.js
var custom_tables_v1_series_metabox_namespaceObject = {};
__webpack_require__.r(custom_tables_v1_series_metabox_namespaceObject);

// EXTERNAL MODULE: external "tribe.common.utils"
var external_tribe_common_utils_ = __webpack_require__("B8vQ");

// EXTERNAL MODULE: external "tribe.common.data.plugins"
var external_tribe_common_data_plugins_ = __webpack_require__("9lL/");

// EXTERNAL MODULE: external "tribe.common.store"
var external_tribe_common_store_ = __webpack_require__("g8L8");

// CONCATENATED MODULE: ./src/modules/custom-tables-v1/data/prefix.js
const PREFIX_EVENTS_PRO_STORE = '@@MT/EVENTS_PRO';
// CONCATENATED MODULE: ./src/modules/custom-tables-v1/data/blocks/datetime/types.js
/**
 * Internal dependencies
 */

const SET_PREVIOUS_START_DATE_TIME = `${PREFIX_EVENTS_PRO_STORE}/SET_PREVIOUS_START_DATE_TIME`;
// CONCATENATED MODULE: ./src/modules/custom-tables-v1/data/blocks/datetime/actions.js
/**
 * Internal dependencies
 */

const setPreviousStartDateTime = start => ({
  type: SET_PREVIOUS_START_DATE_TIME,
  payload: {
    start
  }
});
// EXTERNAL MODULE: external "tribe.modules.reselect"
var external_tribe_modules_reselect_ = __webpack_require__("MWqi");

// CONCATENATED MODULE: ./src/modules/custom-tables-v1/data/plugins/constants.js
const TEC_EVENTS_PRO_PLUGIN = 'tec-events-pro';
// CONCATENATED MODULE: ./src/modules/custom-tables-v1/data/plugins/index.js


// CONCATENATED MODULE: ./src/modules/custom-tables-v1/data/blocks/datetime/selectors.js
/**
 * External dependencies
 */


/**
 * Internal dependencies
 */

const getDateTime = state => state[constants_namespaceObject.TEC_EVENTS_PRO_PLUGIN].blocks.datetime;
const getPreviousStart = Object(external_tribe_modules_reselect_["createSelector"])([getDateTime], dateTime => dateTime.previousStart);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__("lSNA");
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: external "tribe.common.utils.moment"
var external_tribe_common_utils_moment_ = __webpack_require__("zCYh");

// EXTERNAL MODULE: external "tribe.events.data.blocks.datetime.reducer"
var external_tribe_events_data_blocks_datetime_reducer_ = __webpack_require__("MXy+");

// CONCATENATED MODULE: ./src/modules/custom-tables-v1/data/blocks/datetime/reducer.js

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { defineProperty_default()(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
/**
 * Internal dependencies
 */



const defaultStartDateTime = Object(external_tribe_common_utils_moment_["toDateTime"])(external_tribe_events_data_blocks_datetime_reducer_["defaultStartMoment"]);
const DEFAULT_STATE = {
  previousStart: defaultStartDateTime
};
const defaultStateToMetaMap = {
  previousStart: '_EventStartDate'
};
const setInitialState = data => {
  const {
    meta
  } = data;
  Object.keys(defaultStateToMetaMap).forEach(key => {
    const metaKey = defaultStateToMetaMap[key];
    if (meta.hasOwnProperty(metaKey)) {
      DEFAULT_STATE[key] = meta[metaKey];
    }
  });
};
/* harmony default export */ var reducer = ((state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SET_PREVIOUS_START_DATE_TIME:
      return _objectSpread(_objectSpread({}, state), {}, {
        previousStart: action.payload.start
      });
    default:
      return state;
  }
});
// CONCATENATED MODULE: ./src/modules/custom-tables-v1/data/blocks/datetime/index.js





// CONCATENATED MODULE: ./src/modules/custom-tables-v1/data/blocks/exception/types.js
/**
 * Internal dependencies
 */

const ADD_EXCEPTION_RULE = `${PREFIX_EVENTS_PRO_STORE}/ADD_EXCEPTION_RULE`;
const REMOVE_EXCEPTION_RULE = `${PREFIX_EVENTS_PRO_STORE}/REMOVE_EXCEPTION_RULE`;
const EDIT_EXCEPTION_RULE = `${PREFIX_EVENTS_PRO_STORE}/EDIT_EXCEPTION_RULE`;
// CONCATENATED MODULE: ./src/modules/custom-tables-v1/data/blocks/exception/actions.js
/**
 * Internal dependencies
 */

const addExceptionRule = payload => ({
  type: ADD_EXCEPTION_RULE,
  payload
});
const removeExceptionRule = index => ({
  type: REMOVE_EXCEPTION_RULE,
  index
});
const editExceptionRule = (index, payload) => ({
  type: EDIT_EXCEPTION_RULE,
  index,
  payload
});
// EXTERNAL MODULE: external "lodash.find"
var external_lodash_find_ = __webpack_require__("6OzC");
var external_lodash_find_default = /*#__PURE__*/__webpack_require__.n(external_lodash_find_);

// EXTERNAL MODULE: external "tribe[\"events-pro\"].data.blocks.exception.selectors"
var external_tribe_events_pro_data_blocks_exception_selectors_ = __webpack_require__("UnPw");

// EXTERNAL MODULE: external "tribe[\"events-pro\"].data.blocks.recurring.constants"
var external_tribe_events_pro_data_blocks_recurring_constants_ = __webpack_require__("gGza");

// CONCATENATED MODULE: ./src/modules/custom-tables-v1/data/shared/constants.js
/**
 * Internal dependencies
 */

const {
  __
} = wp.i18n;
const DAY_LABEL = __('day', 'tribe-events-calendar-pro');
const WEEK_LABEL = __('week', 'tribe-events-calendar-pro');
const MONTH_LABEL = __('month', 'tribe-events-calendar-pro');
const YEAR_LABEL = __('year', 'tribe-events-calendar-pro');
const DAY_LABEL_PLURAL = __('days', 'tribe-events-calendar-pro');
const WEEK_LABEL_PLURAL = __('weeks', 'tribe-events-calendar-pro');
const MONTH_LABEL_PLURAL = __('months', 'tribe-events-calendar-pro');
const YEAR_LABEL_PLURAL = __('years', 'tribe-events-calendar-pro');
const SINGLE_LABEL = __('once', 'tribe-events-calendar-pro');
const DAILY_LABEL = __('daily', 'tribe-events-calendar-pro');
const WEEKLY_LABEL = __('weekly', 'tribe-events-calendar-pro');
const MONTHLY_LABEL = __('monthly', 'tribe-events-calendar-pro');
const YEARLY_LABEL = __('yearly', 'tribe-events-calendar-pro');
const WEEKLY_CUSTOM_LABEL = __('weekly (custom)', 'tribe-events-calendar-pro');
const MONTHLY_CUSTOM_LABEL = __('monthly (custom)', 'tribe-events-calendar-pro');
const YEARLY_CUSTOM_LABEL = __('yearly (custom)', 'tribe-events-calendar-pro');
const WEEKLY_CUSTOM_TYPE_ID = `${external_tribe_events_pro_data_blocks_recurring_constants_["WEEKLY"]}-custom`;
const MONTHLY_CUSTOM_TYPE_ID = `${external_tribe_events_pro_data_blocks_recurring_constants_["MONTHLY"]}-custom`;
const YEARLY_CUSTOM_TYPE_ID = `${external_tribe_events_pro_data_blocks_recurring_constants_["YEARLY"]}-custom`;
const KEY_IS_OFF_START = 'isOffStart';
// CONCATENATED MODULE: ./src/modules/custom-tables-v1/data/blocks/exception/options.js
/**
 * Internal dependencies
 */


const WEEKLY_CUSTOM_EXCEPTION_RULE_TYPES_OPTION = {
  label: WEEKLY_CUSTOM_LABEL,
  value: external_tribe_events_pro_data_blocks_recurring_constants_["WEEKLY"],
  id: WEEKLY_CUSTOM_TYPE_ID
};
const MONTHLY_CUSTOM_EXCEPTION_RULE_TYPES_OPTION = {
  label: MONTHLY_CUSTOM_LABEL,
  value: external_tribe_events_pro_data_blocks_recurring_constants_["MONTHLY"],
  id: MONTHLY_CUSTOM_TYPE_ID
};
const YEARLY_CUSTOM_EXCEPTION_RULE_TYPES_OPTION = {
  label: YEARLY_CUSTOM_LABEL,
  value: external_tribe_events_pro_data_blocks_recurring_constants_["YEARLY"],
  id: YEARLY_CUSTOM_TYPE_ID
};
const EXCEPTION_RULE_TYPES_OPTIONS = [{
  label: SINGLE_LABEL,
  value: external_tribe_events_pro_data_blocks_recurring_constants_["SINGLE"],
  id: external_tribe_events_pro_data_blocks_recurring_constants_["SINGLE"]
}, {
  label: DAILY_LABEL,
  value: external_tribe_events_pro_data_blocks_recurring_constants_["DAILY"],
  id: external_tribe_events_pro_data_blocks_recurring_constants_["DAILY"]
}, {
  label: WEEKLY_LABEL,
  value: external_tribe_events_pro_data_blocks_recurring_constants_["WEEKLY"],
  id: external_tribe_events_pro_data_blocks_recurring_constants_["WEEKLY"]
}, {
  label: MONTHLY_LABEL,
  value: external_tribe_events_pro_data_blocks_recurring_constants_["MONTHLY"],
  id: external_tribe_events_pro_data_blocks_recurring_constants_["MONTHLY"]
}, {
  label: YEARLY_LABEL,
  value: external_tribe_events_pro_data_blocks_recurring_constants_["YEARLY"],
  id: external_tribe_events_pro_data_blocks_recurring_constants_["YEARLY"]
}];
const CUSTOM_EXCEPTION_RULE_TYPES_OPTIONS = [WEEKLY_CUSTOM_EXCEPTION_RULE_TYPES_OPTION, MONTHLY_CUSTOM_EXCEPTION_RULE_TYPES_OPTION, YEARLY_CUSTOM_EXCEPTION_RULE_TYPES_OPTION];
// CONCATENATED MODULE: ./src/modules/custom-tables-v1/data/blocks/exception/selectors.js

/**
 * External dependencies
 */

/**
 * Internal dependencies
 */



const getIndex = (_, props) => props.index;
const getAllExceptionRules = state => state[constants_namespaceObject.TEC_EVENTS_PRO_PLUGIN].blocks.exception;
const getExceptionRule = Object(external_tribe_modules_reselect_["createSelector"])([getAllExceptionRules, getIndex], (allExceptions, index) => allExceptions[index]);
const getExceptionRuleTypes = Object(external_tribe_modules_reselect_["createSelector"])([getExceptionRule], rule => rule.ruleTypes || EXCEPTION_RULE_TYPES_OPTIONS);
const getIsOffStart = Object(external_tribe_modules_reselect_["createSelector"])([getExceptionRule], rule => rule.isOffStart);
const getOffStartIndex = Object(external_tribe_modules_reselect_["createSelector"])([getExceptionRule], rule => rule.offStartIndex);
const getTypeId = Object(external_tribe_modules_reselect_["createSelector"])([getExceptionRule], rule => rule.typeId);
const getTypeOption = Object(external_tribe_modules_reselect_["createSelector"])([external_tribe_events_pro_data_blocks_exception_selectors_["getType"], getTypeId], (type, typeId) => {
  const options = [...EXCEPTION_RULE_TYPES_OPTIONS];
  return external_lodash_find_default()(options, option => {
    const optionValueMatches = option.value === type;
    return typeId ? optionValueMatches && option.id === typeId : optionValueMatches;
  });
});
const isRuleTypeCustom = Object(external_tribe_modules_reselect_["createSelector"])([getTypeId], typeId => typeId ? typeId.includes('custom') : false);
// EXTERNAL MODULE: external "tribe.modules.reduxSaga.effects"
var external_tribe_modules_reduxSaga_effects_ = __webpack_require__("RmXt");

// EXTERNAL MODULE: external "tribe[\"events-pro\"].data.blocks.exception.types"
var external_tribe_events_pro_data_blocks_exception_types_ = __webpack_require__("OuoG");

// CONCATENATED MODULE: ./src/modules/custom-tables-v1/data/blocks/exception/sagas.js
/**
 * External dependencies
 */


/**
 * Internal dependencies
 */






/**
 * Handles exception meta when adding a new exception.
 *
 * @export
 * @yields
 * @since 6.0.0
 * @return {void}
 */
function* sagas_addExceptionRule() {
  const exceptions = yield Object(external_tribe_modules_reduxSaga_effects_["select"])(external_tribe_events_pro_data_blocks_exception_selectors_["getExceptions"]);
  const nonSingleExceptions = exceptions.filter(exception => exception.type !== external_tribe_events_pro_data_blocks_recurring_constants_["SINGLE"]);
  const payload = {
    isOffStart: false,
    offStartIndex: -1,
    typeId: external_tribe_events_pro_data_blocks_recurring_constants_["SINGLE"]
  };

  // If a non-single exception exists in the UI, set the allowed exception type to only single.
  if (nonSingleExceptions.length) {
    const allowedExceptions = EXCEPTION_RULE_TYPES_OPTIONS.filter(exception => exception.value === external_tribe_events_pro_data_blocks_recurring_constants_["SINGLE"]);
    payload.ruleTypes = allowedExceptions;
  } else {
    payload.ruleTypes = EXCEPTION_RULE_TYPES_OPTIONS;
  }
  yield Object(external_tribe_modules_reduxSaga_effects_["put"])(addExceptionRule(payload));
}

/**
 * Handles exception meta when removing an exception.
 *
 * @param action
 * @export
 * @yields
 * @since 6.0.0
 * @return {void}
 */
function* unlockExceptionRule(action) {
  yield Object(external_tribe_modules_reduxSaga_effects_["put"])(removeExceptionRule(action.index));
  const exceptions = yield Object(external_tribe_modules_reduxSaga_effects_["select"])(external_tribe_events_pro_data_blocks_exception_selectors_["getExceptions"]);
  const nonSingleExceptions = exceptions.filter(exception => exception.type !== external_tribe_events_pro_data_blocks_recurring_constants_["SINGLE"]);

  // If there is a non-single exceptions in the UI, return early.
  if (nonSingleExceptions.length) {
    return;
  }

  // If there is no non-single exception in the UI, allow all other exceptions to have access to all available exception types.
  yield Object(external_tribe_modules_reduxSaga_effects_["all"])(exceptions.map((exception, index) => Object(external_tribe_modules_reduxSaga_effects_["put"])(editExceptionRule(index, {
    ruleTypes: EXCEPTION_RULE_TYPES_OPTIONS
  }))));
}

/**
 * Handles exception meta when editing an exception.
 *
 * @export
 * @yields
 * @since 6.0.0
 * @return {void}
 */
function* sagas_editExceptionRule() {
  const exceptions = yield Object(external_tribe_modules_reduxSaga_effects_["select"])(external_tribe_events_pro_data_blocks_exception_selectors_["getExceptions"]);
  const nonSingleExceptions = exceptions.filter(exception => exception.type !== external_tribe_events_pro_data_blocks_recurring_constants_["SINGLE"]);
  if (!nonSingleExceptions.length) {
    // If there is no non-single exception in the UI, enable all exception types for all exceptions.
    yield Object(external_tribe_modules_reduxSaga_effects_["all"])(exceptions.map((exception, index) => Object(external_tribe_modules_reduxSaga_effects_["put"])(editExceptionRule(index, {
      ruleTypes: EXCEPTION_RULE_TYPES_OPTIONS
    }))));
  } else {
    // If there is a non-single exception in the UI, update rule types for all other non-single exceptions.
    const allowedExceptions = EXCEPTION_RULE_TYPES_OPTIONS.filter(exception => exception.value === external_tribe_events_pro_data_blocks_recurring_constants_["SINGLE"]);
    yield Object(external_tribe_modules_reduxSaga_effects_["all"])(exceptions.map((exception, index) => {
      if (exception.type !== external_tribe_events_pro_data_blocks_recurring_constants_["SINGLE"]) {
        return;
      }
      return Object(external_tribe_modules_reduxSaga_effects_["put"])(editExceptionRule(index, {
        ruleTypes: allowedExceptions
      }));
    }));
  }
}

/**
 * Watches the dispatched actions.
 *
 * @export
 * @yields
 * @since 6.0.0
 * @return {void}
 */
function* watchers() {
  yield Object(external_tribe_modules_reduxSaga_effects_["takeEvery"])([external_tribe_events_pro_data_blocks_exception_types_["ADD_EXCEPTION_FIELD"]], sagas_addExceptionRule);
  yield Object(external_tribe_modules_reduxSaga_effects_["takeEvery"])([external_tribe_events_pro_data_blocks_exception_types_["REMOVE_EXCEPTION"]], unlockExceptionRule);
  yield Object(external_tribe_modules_reduxSaga_effects_["takeEvery"])([external_tribe_events_pro_data_blocks_exception_types_["EDIT_EXCEPTION"]], sagas_editExceptionRule);
}
// CONCATENATED MODULE: ./src/modules/custom-tables-v1/data/blocks/exception/reducer.js
/**
 * Internal dependencies
 */



const reducer_DEFAULT_STATE = [];
const reducer_setInitialState = data => {
  // If no data, return early.
  if (!data.meta._tribe_blocks_recurrence_exclusions) {
    return;
  }
  try {
    const rules = JSON.parse(data.meta._tribe_blocks_recurrence_exclusions);
    const nonSingleRules = rules.filter(rule => rule.type !== external_tribe_events_pro_data_blocks_recurring_constants_["SINGLE"]);

    // Set allowed rule types to only single if non-single rule exists.
    const allowedRules = EXCEPTION_RULE_TYPES_OPTIONS.filter(rule => rule.value === external_tribe_events_pro_data_blocks_recurring_constants_["SINGLE"]);
    rules.forEach((rule, index) => {
      const payload = {
        isOffStart: false,
        offStartIndex: -1,
        typeId: rule.type
      };
      if (nonSingleRules.length && rule.type === external_tribe_events_pro_data_blocks_recurring_constants_["SINGLE"]) {
        // If there is a non-single rule, disable other rule types for those rules with a single rule type.
        payload.ruleTypes = allowedRules;
      } else {
        payload.ruleTypes = EXCEPTION_RULE_TYPES_OPTIONS;
      }
      reducer_DEFAULT_STATE.push(payload);
    });
  } catch (e) {
    console.error(e);
  }
};
const reducer_edit = (state, action) => {
  const field = Object.assign({}, state[action.index], action.payload);
  if (state.length === 1) {
    return [field];
  }
  return [...state.slice(0, action.index), field, ...state.slice(action.index + 1)];
};
/* harmony default export */ var exception_reducer = ((state = reducer_DEFAULT_STATE, action) => {
  switch (action.type) {
    case ADD_EXCEPTION_RULE:
      return [...state, action.payload];
    case REMOVE_EXCEPTION_RULE:
      return state.filter((rule, index) => index !== action.index);
    case EDIT_EXCEPTION_RULE:
      return reducer_edit(state, action);
    default:
      return state;
  }
});
// CONCATENATED MODULE: ./src/modules/custom-tables-v1/data/blocks/exception/index.js
/**
 * Internal dependencies
 */







// CONCATENATED MODULE: ./src/modules/custom-tables-v1/data/blocks/recurring/types.js
/**
 * Internal dependencies
 */

const ADD_RECURRENCE_RULE = `${PREFIX_EVENTS_PRO_STORE}/ADD_RECURRENCE_RULE`;
const REMOVE_RECURRENCE_RULE = `${PREFIX_EVENTS_PRO_STORE}/REMOVE_RECURRENCE_RULE`;
const EDIT_RECURRENCE_RULE = `${PREFIX_EVENTS_PRO_STORE}/EDIT_RECURRENCE_RULE`;
// CONCATENATED MODULE: ./src/modules/custom-tables-v1/data/blocks/recurring/actions.js
/**
 * Internal dependencies
 */

const addRecurrenceRule = payload => ({
  type: ADD_RECURRENCE_RULE,
  payload
});
const removeRecurrenceRule = index => ({
  type: REMOVE_RECURRENCE_RULE,
  index
});
const editRecurrenceRule = (index, payload) => ({
  type: EDIT_RECURRENCE_RULE,
  index,
  payload
});
// EXTERNAL MODULE: external "tribe[\"events-pro\"].data.blocks.recurring.selectors"
var external_tribe_events_pro_data_blocks_recurring_selectors_ = __webpack_require__("iy/v");

// CONCATENATED MODULE: ./src/modules/custom-tables-v1/data/blocks/recurring/options.js
/**
 * Internal dependencies
 */


const WEEKLY_CUSTOM_RECURRENCE_RULE_TYPES_OPTION = {
  label: WEEKLY_CUSTOM_LABEL,
  value: external_tribe_events_pro_data_blocks_recurring_constants_["WEEKLY"],
  id: WEEKLY_CUSTOM_TYPE_ID
};
const MONTHLY_CUSTOM_RECURRENCE_RULE_TYPES_OPTION = {
  label: MONTHLY_CUSTOM_LABEL,
  value: external_tribe_events_pro_data_blocks_recurring_constants_["MONTHLY"],
  id: MONTHLY_CUSTOM_TYPE_ID
};
const YEARLY_CUSTOM_RECURRENCE_RULE_TYPES_OPTION = {
  label: YEARLY_CUSTOM_LABEL,
  value: external_tribe_events_pro_data_blocks_recurring_constants_["YEARLY"],
  id: YEARLY_CUSTOM_TYPE_ID
};
const RECURRENCE_RULE_TYPES_OPTIONS = [{
  label: SINGLE_LABEL,
  value: external_tribe_events_pro_data_blocks_recurring_constants_["SINGLE"],
  id: external_tribe_events_pro_data_blocks_recurring_constants_["SINGLE"]
}, {
  label: DAILY_LABEL,
  value: external_tribe_events_pro_data_blocks_recurring_constants_["DAILY"],
  id: external_tribe_events_pro_data_blocks_recurring_constants_["DAILY"]
}, {
  label: WEEKLY_LABEL,
  value: external_tribe_events_pro_data_blocks_recurring_constants_["WEEKLY"],
  id: external_tribe_events_pro_data_blocks_recurring_constants_["WEEKLY"]
}, {
  label: MONTHLY_LABEL,
  value: external_tribe_events_pro_data_blocks_recurring_constants_["MONTHLY"],
  id: external_tribe_events_pro_data_blocks_recurring_constants_["MONTHLY"]
}, {
  label: YEARLY_LABEL,
  value: external_tribe_events_pro_data_blocks_recurring_constants_["YEARLY"],
  id: external_tribe_events_pro_data_blocks_recurring_constants_["YEARLY"]
}];
const CUSTOM_RECURRENCE_RULE_TYPES_OPTIONS = [WEEKLY_CUSTOM_RECURRENCE_RULE_TYPES_OPTION, MONTHLY_CUSTOM_RECURRENCE_RULE_TYPES_OPTION, YEARLY_CUSTOM_RECURRENCE_RULE_TYPES_OPTION];
// CONCATENATED MODULE: ./src/modules/custom-tables-v1/data/blocks/recurring/selectors.js

/**
 * External dependencies
 */

/**
 * Internal dependencies
 */



const selectors_getIndex = (_, props) => props.index;
const getAllRecurrenceRules = state => state[constants_namespaceObject.TEC_EVENTS_PRO_PLUGIN].blocks.recurring;
const getRecurrenceRule = Object(external_tribe_modules_reselect_["createSelector"])([getAllRecurrenceRules, selectors_getIndex], (allRecurrence, index) => allRecurrence[index]);
const getRecurrenceRuleTypes = Object(external_tribe_modules_reselect_["createSelector"])([getRecurrenceRule], rule => rule.ruleTypes || RECURRENCE_RULE_TYPES_OPTIONS);
const selectors_getIsOffStart = Object(external_tribe_modules_reselect_["createSelector"])([getRecurrenceRule], rule => rule.isOffStart);
const selectors_getOffStartIndex = Object(external_tribe_modules_reselect_["createSelector"])([getRecurrenceRule], rule => rule.offStartIndex);
const selectors_getTypeId = Object(external_tribe_modules_reselect_["createSelector"])([getRecurrenceRule], rule => rule.typeId);
const selectors_getTypeOption = Object(external_tribe_modules_reselect_["createSelector"])([external_tribe_events_pro_data_blocks_recurring_selectors_["getType"], selectors_getTypeId], (type, typeId) => {
  let options = [...RECURRENCE_RULE_TYPES_OPTIONS];
  if (typeId) {
    options = [...options, ...CUSTOM_RECURRENCE_RULE_TYPES_OPTIONS];
  }
  return external_lodash_find_default()(options, option => {
    const optionValueMatches = option.value === type;
    return typeId ? optionValueMatches && option.id === typeId : optionValueMatches;
  });
});
const selectors_isRuleTypeCustom = Object(external_tribe_modules_reselect_["createSelector"])([selectors_getTypeId], typeId => typeId ? typeId.includes('custom') : false);
// EXTERNAL MODULE: external "tribe.common.utils.date"
var external_tribe_common_utils_date_ = __webpack_require__("tbMi");

// EXTERNAL MODULE: external "tribe[\"events-pro\"].data.blocks.constants"
var external_tribe_events_pro_data_blocks_constants_ = __webpack_require__("gSph");

// EXTERNAL MODULE: external "tribe[\"events-pro\"].data.blocks.recurring.types"
var external_tribe_events_pro_data_blocks_recurring_types_ = __webpack_require__("pVH8");

// EXTERNAL MODULE: external "tribe[\"events-pro\"].data.blocks.recurring.actions"
var external_tribe_events_pro_data_blocks_recurring_actions_ = __webpack_require__("13aI");

// CONCATENATED MODULE: ./src/modules/custom-tables-v1/data/blocks/recurring/sagas.js
/**
 * External dependencies
 */


/**
 * Internal dependencies
 */










/**
 * Handles recurrence meta when adding a new recurrence rule.
 *
 * @exports
 * @yields
 * @since 6.0.0
 * @return {void}
 */
function* sagas_addRecurrenceRule() {
  const rules = yield Object(external_tribe_modules_reduxSaga_effects_["select"])(external_tribe_events_pro_data_blocks_recurring_selectors_["getRules"]);
  const nonSingleRules = rules.filter(rule => rule.type !== external_tribe_events_pro_data_blocks_recurring_constants_["SINGLE"]);
  const payload = {
    isOffStart: false,
    offStartIndex: -1,
    typeId: external_tribe_events_pro_data_blocks_recurring_constants_["SINGLE"]
  };

  // If a non-single rule exists in the UI, set the allowed rule type to only single.
  if (nonSingleRules.length) {
    const allowedRules = RECURRENCE_RULE_TYPES_OPTIONS.filter(rule => rule.value === external_tribe_events_pro_data_blocks_recurring_constants_["SINGLE"]);
    payload.ruleTypes = allowedRules;
  } else {
    payload.ruleTypes = RECURRENCE_RULE_TYPES_OPTIONS;
  }
  yield Object(external_tribe_modules_reduxSaga_effects_["put"])(addRecurrenceRule(payload));
}

/**
 * Handles recurrence meta when removing a recurrence rule.
 *
 * @param action
 * @exports
 * @yields
 * @since 6.0.0
 * @return {void}
 */
function* sagas_removeRecurrenceRule(action) {
  yield Object(external_tribe_modules_reduxSaga_effects_["put"])(removeRecurrenceRule(action.index));
  const rules = yield Object(external_tribe_modules_reduxSaga_effects_["select"])(external_tribe_events_pro_data_blocks_recurring_selectors_["getRules"]);
  const nonSingleRules = rules.filter(rule => rule.type !== external_tribe_events_pro_data_blocks_recurring_constants_["SINGLE"]);

  // If there is a non-single rule in the UI, return early.
  if (nonSingleRules.length) {
    return;
  }

  // If there is no non-single rule in the UI, allow all other rules to have access to all available rule types.
  yield Object(external_tribe_modules_reduxSaga_effects_["all"])(rules.map((rule, index) => Object(external_tribe_modules_reduxSaga_effects_["put"])(editRecurrenceRule(index, {
    ruleTypes: RECURRENCE_RULE_TYPES_OPTIONS
  }))));
}

/**
 * Handles recurrence meta when editing a recurrence rule.
 *
 * @exports
 * @yields
 * @since 6.0.0
 * @param {object} action The dispatched action.
 * @return {void}
 */
function* sagas_editRecurrenceRule(action) {
  if (action.sync) {
    // Syncing, return early.
    return;
  }
  const rules = yield Object(external_tribe_modules_reduxSaga_effects_["select"])(external_tribe_events_pro_data_blocks_recurring_selectors_["getRules"]);
  const nonSingleRules = rules.filter(rule => rule.type !== external_tribe_events_pro_data_blocks_recurring_constants_["SINGLE"]);
  if (!nonSingleRules.length) {
    // If there is no non-single rule in the UI, enable all rule types for all rules.
    yield Object(external_tribe_modules_reduxSaga_effects_["all"])(rules.map((rule, index) => Object(external_tribe_modules_reduxSaga_effects_["put"])(editRecurrenceRule(index, {
      ruleTypes: RECURRENCE_RULE_TYPES_OPTIONS
    }))));
  } else {
    // If there is a non-single rule in the UI, update rule types for all other non-single rules.
    const allowedRules = RECURRENCE_RULE_TYPES_OPTIONS.filter(rule => rule.value === external_tribe_events_pro_data_blocks_recurring_constants_["SINGLE"]);
    yield Object(external_tribe_modules_reduxSaga_effects_["all"])(rules.map((rule, index) => {
      if (rule.type !== external_tribe_events_pro_data_blocks_recurring_constants_["SINGLE"]) {
        return;
      }
      return Object(external_tribe_modules_reduxSaga_effects_["put"])(editRecurrenceRule(index, {
        ruleTypes: allowedRules
      }));
    }));
  }
}

/**
 * Edits the default state for recurrence rules when added.
 *
 * @exports
 * @yields
 * @since 6.0.0
 * @return {void}
 */
function* editRecurrenceRuleDefaults() {
  const rulesCount = yield Object(external_tribe_modules_reduxSaga_effects_["select"])(external_tribe_events_pro_data_blocks_recurring_selectors_["getRulesCount"]);
  const index = rulesCount - 1;
  const todayMoment = yield Object(external_tribe_modules_reduxSaga_effects_["call"])(external_tribe_common_utils_moment_["toMoment"], external_tribe_common_utils_date_["TODAY"]);
  const limitDateMoment = yield Object(external_tribe_modules_reduxSaga_effects_["call"])([todayMoment, 'add'], 1, 'year');
  const limitDateInput = yield Object(external_tribe_modules_reduxSaga_effects_["call"])(external_tribe_common_utils_moment_["toDate"], limitDateMoment);
  const limitDateObj = new Date(limitDateInput);
  yield Object(external_tribe_modules_reduxSaga_effects_["put"])(external_tribe_events_pro_data_blocks_recurring_actions_["syncRule"](index, {
    [external_tribe_events_pro_data_blocks_constants_["KEY_LIMIT_DATE_INPUT"]]: limitDateInput,
    [external_tribe_events_pro_data_blocks_constants_["KEY_LIMIT_DATE_OBJ"]]: limitDateObj
  }));
}

/**
 * Watches the dispatched actions.
 *
 * @exports
 * @yields
 * @since 6.0.0
 * @return {void}
 */
function* sagas_watchers() {
  yield Object(external_tribe_modules_reduxSaga_effects_["takeEvery"])([external_tribe_events_pro_data_blocks_recurring_types_["ADD_RULE_FIELD"]], sagas_addRecurrenceRule);
  yield Object(external_tribe_modules_reduxSaga_effects_["takeEvery"])([external_tribe_events_pro_data_blocks_recurring_types_["REMOVE_RULE"]], sagas_removeRecurrenceRule);
  yield Object(external_tribe_modules_reduxSaga_effects_["takeEvery"])([external_tribe_events_pro_data_blocks_recurring_types_["EDIT_RULE"]], sagas_editRecurrenceRule);
  yield Object(external_tribe_modules_reduxSaga_effects_["takeEvery"])([external_tribe_events_pro_data_blocks_recurring_types_["ADD_RULE"]], editRecurrenceRuleDefaults);
}
// CONCATENATED MODULE: ./src/modules/custom-tables-v1/data/blocks/recurring/reducer.js
/**
 * Internal dependencies
 */




const recurring_reducer_DEFAULT_STATE = [];
const recurring_reducer_setInitialState = data => {
  // If no data, return early.
  if (!data.meta._tribe_blocks_recurrence_rules) {
    return;
  }
  try {
    const rules = JSON.parse(data.meta._tribe_blocks_recurrence_rules);
    const nonSingleRules = rules.filter(rule => rule.type !== external_tribe_events_pro_data_blocks_recurring_constants_["SINGLE"]);

    // Set allowed rule types to only single if non-single rule exists.
    const allowedRuleTypes = RECURRENCE_RULE_TYPES_OPTIONS.filter(rule => rule.value === external_tribe_events_pro_data_blocks_recurring_constants_["SINGLE"]);
    rules.forEach((rule, index) => {
      const payload = {
        isOffStart: !!rule[KEY_IS_OFF_START],
        offStartIndex: -1,
        typeId: rule.type
      };
      if (rule[KEY_IS_OFF_START]) {
        // If rule is off-start, add custom option.
        const offStartRuleTypes = [...RECURRENCE_RULE_TYPES_OPTIONS, recurring_options_namespaceObject[`${rule.type.toUpperCase()}_CUSTOM_RECURRENCE_RULE_TYPES_OPTION`]];
        payload.offStartIndex = index;
        payload.typeId = shared_constants_namespaceObject[`${rule.type.toUpperCase()}_CUSTOM_TYPE_ID`];
        payload.ruleTypes = offStartRuleTypes;
      } else if (nonSingleRules.length && rule.type === external_tribe_events_pro_data_blocks_recurring_constants_["SINGLE"]) {
        // If there is a non-single rule, disable other rule types for those rules with a single rule type.
        payload.ruleTypes = allowedRuleTypes;
      } else {
        payload.ruleTypes = RECURRENCE_RULE_TYPES_OPTIONS;
      }
      recurring_reducer_DEFAULT_STATE.push(payload);
    });
  } catch (e) {
    console.error(e);
  }
};
const recurring_reducer_edit = (state, action) => {
  const field = Object.assign({}, state[action.index], action.payload);
  if (state.length === 1) {
    return [field];
  }
  return [...state.slice(0, action.index), field, ...state.slice(action.index + 1)];
};
/* harmony default export */ var recurring_reducer = ((state = recurring_reducer_DEFAULT_STATE, action) => {
  switch (action.type) {
    case ADD_RECURRENCE_RULE:
      return [...state, action.payload];
    case REMOVE_RECURRENCE_RULE:
      return state.filter((rules, index) => index !== action.index);
    case EDIT_RECURRENCE_RULE:
      return recurring_reducer_edit(state, action);
    default:
      return state;
  }
});
// CONCATENATED MODULE: ./src/modules/custom-tables-v1/data/blocks/recurring/index.js







// CONCATENATED MODULE: ./src/modules/custom-tables-v1/data/blocks/recurrence/selectors.js
/**
 * External dependencies
 */

const getTickets = state => state.tickets;
const isEventTicketsActive = Object(external_tribe_modules_reselect_["createSelector"])([getTickets], tickets => !!tickets);
const hasRSVP = Object(external_tribe_modules_reselect_["createSelector"])([getTickets], tickets => {
  if (!tickets) {
    return false;
  }
  return !!tickets.blocks.rsvp.id;
});
const hasTickets = Object(external_tribe_modules_reselect_["createSelector"])([getTickets], tickets => {
  if (!tickets) {
    return false;
  }
  return !!tickets.blocks.ticket.tickets.allClientIds.length;
});
// CONCATENATED MODULE: ./src/modules/custom-tables-v1/data/blocks/recurrence/index.js


// EXTERNAL MODULE: external "tribe.modules.redux"
var external_tribe_modules_redux_ = __webpack_require__("rKB8");

// CONCATENATED MODULE: ./src/modules/custom-tables-v1/data/blocks/reducer.js
/**
 * External dependencies
 */


/**
 * Internal dependencies
 */



const blocks_reducer_setInitialState = data => {
  setInitialState(data);
  recurring_reducer_setInitialState(data);
  reducer_setInitialState(data);
};
/* harmony default export */ var blocks_reducer = (Object(external_tribe_modules_redux_["combineReducers"])({
  datetime: reducer,
  exception: exception_reducer,
  recurring: recurring_reducer
}));
// CONCATENATED MODULE: ./src/modules/custom-tables-v1/data/blocks/index.js
/**
 * Internal dependencies
 */






// CONCATENATED MODULE: ./src/modules/custom-tables-v1/data/shared/types.js
/**
 * Internal dependencies
 */

const SET_DAY_OF_MONTH_OPTIONS = `${PREFIX_EVENTS_PRO_STORE}/SET_DAY_OF_MONTH_OPTIONS`;
// CONCATENATED MODULE: ./src/modules/custom-tables-v1/data/shared/actions.js
/**
 * Internal dependencies
 */

const setDayOfMonthOptions = ({
  options
}) => ({
  type: SET_DAY_OF_MONTH_OPTIONS,
  payload: {
    options
  }
});
// CONCATENATED MODULE: ./src/modules/custom-tables-v1/data/shared/selectors.js
/**
 * External dependencies
 */


/**
 * Internal dependencies
 */

const getShared = state => state[constants_namespaceObject.TEC_EVENTS_PRO_PLUGIN].shared;
const getDayOfMonthOptions = Object(external_tribe_modules_reselect_["createSelector"])([getShared], shared => shared.dayOfMonthOptions);
// EXTERNAL MODULE: external "tribe.common.utils.globals"
var external_tribe_common_utils_globals_ = __webpack_require__("kczL");

// EXTERNAL MODULE: external "tribe.events.data.blocks.datetime.types"
var external_tribe_events_data_blocks_datetime_types_ = __webpack_require__("Yht6");

// EXTERNAL MODULE: external "tribe.events.data.blocks.datetime.selectors"
var external_tribe_events_data_blocks_datetime_selectors_ = __webpack_require__("SOG1");

// EXTERNAL MODULE: external "tribe[\"events-pro\"].data.blocks.exception.actions"
var external_tribe_events_pro_data_blocks_exception_actions_ = __webpack_require__("tPgE");

// EXTERNAL MODULE: external "tribe[\"events-pro\"].data.status.sagas"
var external_tribe_events_pro_data_status_sagas_ = __webpack_require__("OluY");

// CONCATENATED MODULE: ./src/modules/custom-tables-v1/data/shared/utils.js
/**
 * Internal dependencies
 */




/**
 * Cardinal to ordinal map.
 *
 * @since 6.0.0
 * @type {PlainObject}
 */
const cardinalToOrdinalMap = {
  1: external_tribe_events_pro_data_blocks_recurring_constants_["FIRST"],
  2: external_tribe_events_pro_data_blocks_recurring_constants_["SECOND"],
  3: external_tribe_events_pro_data_blocks_recurring_constants_["THIRD"],
  4: external_tribe_events_pro_data_blocks_recurring_constants_["FOURTH"],
  5: external_tribe_events_pro_data_blocks_recurring_constants_["FIFTH"]
};

/**
 * ISO weekday to day name (in English) map.
 *
 * @since 6.0.0
 * @type {PlainObject}
 */
const isoWeekdayToDayNameMap = {
  1: 'Monday',
  2: 'Tuesday',
  3: 'Wednesday',
  4: 'Thursday',
  5: 'Friday',
  6: 'Saturday',
  7: 'Sunday'
};

/**
 * Get the weekday name.
 * Possible return values are `Monday`, `Tuesday`, `Wednesday`, `Thursday`,
 * `Friday`, `Saturday`, or `Sunday`.
 *
 * @since 6.0.0
 * @param {moment} dateMoment The date moment to get the weekday name for.
 * @return {string}
 */
const getWeekdayName = dateMoment => {
  const weekday = dateMoment.isoWeekday();
  return isoWeekdayToDayNameMap[weekday];
};

/**
 * Get the weekday ordinal value.
 * Possible return values are `first`, `second`, `third`, `fourth`, or `fifth`.
 *
 * @since 6.0.0
 * @param {moment} dateMoment The date moment to get the weekday ordinal value for.
 * @return {string}
 */
const getWeekdayOrdinalValue = dateMoment => {
  const date = dateMoment.date();
  const cardinalWeek = Math.floor((date - 1) / 7) + 1;
  return cardinalToOrdinalMap[cardinalWeek];
};

/**
 * Determines whether the weekday of the date moment provided is the last of the month or not.
 *
 * @since 6.0.0
 * @param {moment} dateMoment The date moment to check whether it is the last weekday of the month or not.
 * @return {boolean}
 */
const isWeekdayLastOfMonth = dateMoment => {
  const daysInMonth = dateMoment.daysInMonth();
  const date = dateMoment.date();
  return daysInMonth - date < 7;
};

/**
 * Determines whether the date moment provided is the last day of the month or not.
 *
 * @since 6.0.0
 * @param {moment} dateMoment The date moment to check whether it is the last date of the month or not.
 * @return {boolean}
 */
const isDateLastOfMonth = dateMoment => {
  const daysInMonth = dateMoment.daysInMonth();
  const date = dateMoment.date();
  return daysInMonth === date;
};

/**
 * Get day of month select options.
 *
 * @since 6.0.0
 * @param {moment} dateMoment The date moment to get the day of month options for.
 * @return {Array}
 */
const utils_getDayOfMonthOptions = dateMoment => {
  const options = [];
  const recurrenceStrings = Object(external_tribe_common_utils_globals_["get"])('tribe_events_pro_recurrence_strings');

  // Create pattern option and add it to dropdown.
  const ordinal = getWeekdayOrdinalValue(dateMoment);
  const weekdayName = getWeekdayName(dateMoment);
  const patternKey = ordinal + weekdayName;
  const patternObj = recurrenceStrings.customTablesV1.dayOfMonth.pattern[patternKey];
  options.push({
    label: patternObj.label,
    value: patternObj.ordinal.toLowerCase() + '-' + patternObj.day
  });

  // If the date moment is last weekday of the month, add last weekday option.
  if (isWeekdayLastOfMonth(dateMoment)) {
    const lastWeekdayPatternKey = 'last' + weekdayName;
    const lastWeekdayPatternObj = recurrenceStrings.customTablesV1.dayOfMonth.pattern[lastWeekdayPatternKey];
    options.push({
      label: lastWeekdayPatternObj.label,
      value: lastWeekdayPatternObj.ordinal.toLowerCase() + '-' + lastWeekdayPatternObj.day
    });
  }

  // If the date moment is the last day of the month, add last day option.
  if (isDateLastOfMonth(dateMoment)) {
    const lastDayPatternKey = 'lastDay';
    const lastDayPatternObj = recurrenceStrings.customTablesV1.dayOfMonth.pattern[lastDayPatternKey];
    options.push({
      label: lastDayPatternObj.label,
      value: lastDayPatternObj.ordinal.toLowerCase() + '-' + lastDayPatternObj.day
    });
  }

  // Create date option and add to dropdown.
  const date = dateMoment.date();
  const label = recurrenceStrings.customTablesV1.dayOfMonth.date[date];
  options.push({
    label,
    value: String(date)
  });
  return options;
};

/**
 * Get custom rule day of month select options.
 *
 * @param {string} optionValue The option value to map to state.
 * @return {Array}
 */
const getCustomDayOfMonthOptions = optionValue => {
  const valuesArr = optionValue.split('-');
  const recurrenceStrings = Object(external_tribe_common_utils_globals_["get"])('tribe_events_pro_recurrence_strings');

  // If array length is 1, value is date.
  if (1 === valuesArr.length) {
    const date = valuesArr[0];
    const label = recurrenceStrings.customTablesV1.dayOfMonth.date[date];
    return [{
      label,
      value: String(date)
    }];
  }

  // If array length is 2, value is pattern.
  if (2 === valuesArr.length) {
    const ordinal = valuesArr[0];
    const weekdayName = isoWeekdayToDayNameMap[valuesArr[1]];
    const patternKey = ordinal + weekdayName;
    const patternObj = recurrenceStrings.customTablesV1.dayOfMonth.pattern[patternKey];
    return [{
      label: patternObj.label,
      value: patternObj.ordinal.toLowerCase() + '-' + patternObj.day
    }];
  }

  // If we're here, something's wrong. Return empty array.
  return [];
};

/**
 * Map the provided option value to state.
 *
 * @param {string} optionValue The option value to map to state.
 * @return {object}
 */
const mapOptionValueToState = optionValue => {
  const valuesArr = optionValue.split('-');

  // If array length is 1, value is date.
  if (1 === valuesArr.length) {
    return {
      [external_tribe_events_pro_data_blocks_constants_["KEY_WEEK"]]: null,
      [external_tribe_events_pro_data_blocks_constants_["KEY_DAY"]]: Number(valuesArr[0])
    };
  }

  // If array length is 2, value is pattern.
  if (2 === valuesArr.length) {
    const ordinal = valuesArr[0];
    const weekday = Number(valuesArr[1]);
    return {
      [external_tribe_events_pro_data_blocks_constants_["KEY_WEEK"]]: ordinal,
      [external_tribe_events_pro_data_blocks_constants_["KEY_DAY"]]: weekday
    };
  }

  // If we're here, something's wrong. Return empty object.
  return {};
};

/**
 * Map the provided state to option value.
 *
 * @param {object} state The state to map to option value, with the shape { week: '', day: 1 }.
 * @return {string}
 */
const mapStateToOptionValue = state => {
  const {
    week,
    day
  } = state;

  // If week is falsy, value is date.
  if (!week) {
    return String(day);
  }

  // Otherwise, value is pattern.
  return `${week}-${day}`;
};

/**
 * Given a week and day, get the type of the option.
 *
 * @exports
 * @since 6.0.0
 * @param {string|null} week Either the ordinal of the week (e.g. `first`) or
 *     `null`.
 * @param {number|string} day The day of the month or the day of the week.
 * @returns {string|null} The type of the option or `null` if both args are
 *     missing.
 */
const getMonthlyOnOptionTypeFromWeekDay = (week, day) => {
  const dayInt = parseInt(day);
  if (!week) {
    if (!day) {
      return null;
    }
    return 'day-n';
  }
  if (dayInt === 8) {
    return 'last-day-in-month';
  }
  if (week === 'last') {
    return 'last-day-of-week-in-month';
  }
  return 'day-of-week-in-month';
};

/**
 * Parses an option value to determine its type.
 *
 * @exports
 * @since 6.0.0
 * @param {string} value The option value.
 * @returns {string|null} The type of the option or `null`.
 */
const getMonthlyOnOptionTypeFromValue = value => {
  if (!value) {
    return null;
  }
  if (value === 'last-8') {
    return 'last-day-in-month';
  }
  if (value.match(/(first|second|third|fourth|fifth)-\d/)) {
    return 'day-of-week-in-month';
  }
  if (value.match(/last-\d/)) {
    return 'last-day-of-week-in-month';
  }
  return 'day-n';
};
// CONCATENATED MODULE: ./src/modules/custom-tables-v1/data/shared/sagas.js
/**
 * External dependencies
 */


/**
 * Internal dependencies
 */


























const {
  SINGLE,
  DAILY,
  WEEKLY,
  MONTHLY,
  YEARLY,
  LAST
} = external_tribe_events_pro_data_blocks_recurring_constants_;

/**
 * Determine if the date dropdown matches the provided date.
 *
 * @exports
 * @yields
 * @since 6.0.0
 * @param {object} handlers   Object of actions and selectors.
 * @param handlers.selectors
 * @param {number} index      The index of the rule.
 * @param {moment} dateMoment The date moment to compare the date dropdown to.
 * @return {boolean}
 */
function* isRuleDayOfMonthMatchDate({
  selectors
}, index, dateMoment) {
  const week = yield Object(external_tribe_modules_reduxSaga_effects_["select"])(selectors.getWeek, {
    index
  });
  const day = yield Object(external_tribe_modules_reduxSaga_effects_["select"])(selectors.getDay, {
    index
  });

  // The dropdown is a date.
  if (!week && day) {
    const date = yield Object(external_tribe_modules_reduxSaga_effects_["call"])([dateMoment, 'date']);
    return day === date;
  }

  // The dropdown is a pattern (eg. first Thursday);
  if (week) {
    const weekday = yield Object(external_tribe_modules_reduxSaga_effects_["call"])([dateMoment, 'isoWeekday']);
    const ordinal = yield Object(external_tribe_modules_reduxSaga_effects_["call"])(getWeekdayOrdinalValue, dateMoment);
    const isLastWeekday = yield Object(external_tribe_modules_reduxSaga_effects_["call"])(isWeekdayLastOfMonth, dateMoment);
    const isLastDay = yield Object(external_tribe_modules_reduxSaga_effects_["call"])(isDateLastOfMonth, dateMoment);
    const ordinalMatches = week === ordinal || (isLastWeekday || isLastDay) && week === LAST;
    const weekdayMatches = day === weekday || 8 === day && isLastDay;
    return ordinalMatches && weekdayMatches;
  }

  // Something is weird if we are here, return false.
  return false;
}

/**
 * Compares the type of the previously selected option to the type of
 * the new option to find the new same-type option index that should
 * be selected.
 *
 * @exports
 * @yields
 * @since 6.0.0
 * @param selectors.selectors
 * @param {object} selectors The selectors object.
 * @param {number} index The index of the rule.
 * @param {Array} options The new options array.
 * @returns {number} The index of the option to select.
 */
function* getOptionIndex({
  selectors
}, index, options) {
  const prevWeek = yield Object(external_tribe_modules_reduxSaga_effects_["select"])(selectors.getWeek, {
    index: index
  });
  const prevDay = yield Object(external_tribe_modules_reduxSaga_effects_["select"])(selectors.getDay, {
    index: index
  });
  const prevOptionType = getMonthlyOnOptionTypeFromWeekDay(prevWeek, prevDay);
  const optionTypes = options.map(option => getMonthlyOnOptionTypeFromValue(option.value));
  const found = optionTypes.indexOf(prevOptionType);
  return found >= 0 ? found : 0;
}

/**
 * Sync day of month dropdown.
 *
 * @exports
 * @yields
 * @since 6.0.0
 * @param {object} handlers Object of actions and selectors.
 * @param {number} index    The index of the rule.
 * @param {object} meta     Meta data containing start and previous start
 *   moments.
 * @return {void}
 */
function* syncDayOfMonthDropdownOptions(handlers, index, meta) {
  const options = yield Object(external_tribe_modules_reduxSaga_effects_["call"])(utils_getDayOfMonthOptions, meta.startMoment);
  const optionIndex = yield Object(external_tribe_modules_reduxSaga_effects_["call"])(getOptionIndex, handlers, index, options);
  const ruleUpdates = yield Object(external_tribe_modules_reduxSaga_effects_["call"])(mapOptionValueToState, options[optionIndex].value);
  yield Object(external_tribe_modules_reduxSaga_effects_["put"])(handlers.actions.sync(index, ruleUpdates));
}

/**
 * Sync day of month dropdown.
 *
 * @exports
 * @yields
 * @since 6.0.0
 * @param {object} handlers Object of actions and selectors.
 * @param {number} index    The index of the rule.
 * @param {object} meta     Meta data containing start and previous start
 *   moments.
 * @return {void}
 */
function* syncDayOfMonthDropdown(handlers, index, meta) {
  // If rule is off-start, return early.
  if (tecEventDetails.isRdate) {
    return;
  }
  const {
    startMoment,
    prevStartMoment
  } = meta;
  const isSameDay = yield Object(external_tribe_modules_reduxSaga_effects_["call"])([startMoment, 'isSame'], prevStartMoment, 'day');
  const ruleDayOfMonthMatchesEventStart = yield Object(external_tribe_modules_reduxSaga_effects_["call"])(isRuleDayOfMonthMatchDate, handlers, index, startMoment);

  // If is not the same day or rule day of month does not match event start, sync dropdown options.
  if (!isSameDay || !ruleDayOfMonthMatchesEventStart) {
    // need to sync dropdown options.
    yield Object(external_tribe_modules_reduxSaga_effects_["call"])(syncDayOfMonthDropdownOptions, handlers, index, meta);
  }
}

/**
 * Updates the weekly rule locked option.
 *
 * @exports
 * @yields
 * @since 6.0.0
 * @param {object} handlers Object of actions and selectors.
 * @param handlers.selectors
 * @param meta.startMoment
 * @param meta.prevStartMoment
 * @param handlers.actions
 * @param {number} index    The index of the rule.
 * @param {object} meta     Meta data to be used in locking options.
 * @return {void}
 */
function* updateWeeklyRuleLockedOption({
  actions,
  selectors
}, index, {
  startMoment,
  prevStartMoment
}) {
  const lockedWeekday = yield Object(external_tribe_modules_reduxSaga_effects_["call"])([startMoment, 'isoWeekday']);
  const prevLockedWeekday = yield Object(external_tribe_modules_reduxSaga_effects_["call"])([prevStartMoment, 'isoWeekday']);
  const ruleDays = yield Object(external_tribe_modules_reduxSaga_effects_["select"])(selectors.getDays, {
    index
  });
  if (tecEventDetails.isRdate) {
    return;
  }
  if (lockedWeekday === prevLockedWeekday && ruleDays.includes(lockedWeekday)) {
    // Same weekday, and rule already contains locked weekday, return early.
    return;
  }
  const newRuleDays = ruleDays.filter(day => day !== prevLockedWeekday);
  if (!newRuleDays.includes(lockedWeekday)) {
    newRuleDays.push(lockedWeekday);
    newRuleDays.sort((a, b) => a - b);
  }
  yield Object(external_tribe_modules_reduxSaga_effects_["put"])(actions.sync(index, {
    [external_tribe_events_pro_data_blocks_constants_["KEY_DAYS"]]: newRuleDays
  }));
}

/**
 * Updates the yearly rule locked option.
 *
 * @exports
 * @yields
 * @since 6.0.0
 * @param {object} handlers Object of actions and selectors.
 * @param handlers.selectors
 * @param meta.startMoment
 * @param meta.prevStartMoment
 * @param handlers.actions
 * @param {number} index    The index of the rule.
 * @param {object} meta     Meta data to be used in locking options.
 * @return {void}
 */
function* updateYearlyRuleLockedOption({
  actions,
  selectors
}, index, {
  startMoment,
  prevStartMoment
}) {
  const zeroIndexedLockedMonth = yield Object(external_tribe_modules_reduxSaga_effects_["call"])([startMoment, 'month']);
  const zeroIndexedPrevLockedMonth = yield Object(external_tribe_modules_reduxSaga_effects_["call"])([prevStartMoment, 'month']);
  const lockedMonth = zeroIndexedLockedMonth + 1;
  const prevLockedMonth = zeroIndexedPrevLockedMonth + 1;
  const ruleMonths = yield Object(external_tribe_modules_reduxSaga_effects_["select"])(selectors.getMonth, {
    index
  });
  if (tecEventDetails.isRdate) {
    return;
  }
  if (lockedMonth === prevLockedMonth && ruleMonths.includes(lockedMonth)) {
    // Same month, and rule already contains locked month, return early.
    return;
  }
  const newRuleMonths = ruleMonths.filter(month => month !== prevLockedMonth);
  if (!newRuleMonths.includes(lockedMonth)) {
    newRuleMonths.push(lockedMonth);
    newRuleMonths.sort((a, b) => a - b);
  }
  yield Object(external_tribe_modules_reduxSaga_effects_["put"])(actions.sync(index, {
    [external_tribe_events_pro_data_blocks_constants_["KEY_MONTH"]]: newRuleMonths
  }));
}

/**
 * Updates the rule locked option.
 *
 * @exports
 * @yields
 * @since 6.0.0
 * @param {object} action The dispatched action.
 * @return {void}
 */
function* updateRuleLockedOption(action) {
  const selectors = recurring_selectors_namespaceObject;
  const proSelectors = external_tribe_events_pro_data_blocks_recurring_selectors_;
  const actions = {
    sync: external_tribe_events_pro_data_blocks_recurring_actions_["syncRule"]
  };
  const getCount = external_tribe_events_pro_data_blocks_recurring_selectors_["getRulesCount"];
  const startDateTime = yield Object(external_tribe_modules_reduxSaga_effects_["select"])(external_tribe_events_data_blocks_datetime_selectors_["getStart"]);
  const startMoment = yield Object(external_tribe_modules_reduxSaga_effects_["call"])(external_tribe_common_utils_moment_["toMoment"], startDateTime);
  const prevStartDateTime = yield Object(external_tribe_modules_reduxSaga_effects_["select"])(getPreviousStart);
  const prevStartMoment = yield Object(external_tribe_modules_reduxSaga_effects_["call"])(external_tribe_common_utils_moment_["toMoment"], prevStartDateTime);
  const rulesCount = yield Object(external_tribe_modules_reduxSaga_effects_["select"])(getCount);
  const meta = {
    startMoment,
    prevStartMoment
  };
  let index = 0;
  let ruleType, isCustom, isSingleOrDaily;

  // Update day of month options before looping through rules.
  const options = yield Object(external_tribe_modules_reduxSaga_effects_["call"])(utils_getDayOfMonthOptions, startMoment);
  yield Object(external_tribe_modules_reduxSaga_effects_["put"])(setDayOfMonthOptions({
    options
  }));
  while (index < rulesCount) {
    ruleType = yield Object(external_tribe_modules_reduxSaga_effects_["select"])(proSelectors.getType, {
      index
    });
    isCustom = yield Object(external_tribe_modules_reduxSaga_effects_["select"])(selectors.isRuleTypeCustom, {
      index
    });
    isSingleOrDaily = yield Object(external_tribe_modules_reduxSaga_effects_["call"])([[SINGLE, DAILY], 'includes'], ruleType);
    if (isSingleOrDaily || isCustom) {
      // Continue if single or daily rule type or rule type is custom.
      index++;
      continue;
    }
    switch (ruleType) {
      case WEEKLY:
        yield Object(external_tribe_modules_reduxSaga_effects_["call"])(updateWeeklyRuleLockedOption, {
          actions,
          selectors: proSelectors
        }, index, meta);
        break;
      case MONTHLY:
        yield Object(external_tribe_modules_reduxSaga_effects_["call"])(syncDayOfMonthDropdown, {
          actions,
          selectors: proSelectors
        }, index, meta);
        break;
      case YEARLY:
        yield Object(external_tribe_modules_reduxSaga_effects_["call"])(updateYearlyRuleLockedOption, {
          actions,
          selectors: proSelectors
        }, index, meta);
        yield Object(external_tribe_modules_reduxSaga_effects_["call"])(syncDayOfMonthDropdown, {
          actions,
          selectors: proSelectors
        }, index, meta);
        break;
      default:
        break;
    }
    index++;
  }
}
function* updateRecurrencePanelExpand(type) {
  const isRecurring = type === external_tribe_events_pro_data_blocks_constants_["RECURRING"];
  const selectors = isRecurring ? recurring_selectors_namespaceObject : exception_selectors_namespaceObject;
  const proSelectors = isRecurring ? external_tribe_events_pro_data_blocks_recurring_selectors_ : external_tribe_events_pro_data_blocks_exception_selectors_;
  const rulesCount = yield Object(external_tribe_modules_reduxSaga_effects_["select"])(isRecurring ? external_tribe_events_pro_data_blocks_recurring_selectors_["getRulesCount"] : external_tribe_events_pro_data_blocks_exception_selectors_["getExceptionsCount"]);
  let index = 0;
  let ruleType, isCustom, isWeeklyMonthlyOrYearly;
  let recurringPanelHeader, recurringPanelToggle;
  while (index < rulesCount) {
    ruleType = yield Object(external_tribe_modules_reduxSaga_effects_["select"])(proSelectors.getType, {
      index
    });
    isCustom = yield Object(external_tribe_modules_reduxSaga_effects_["select"])(selectors.isRuleTypeCustom, {
      index
    });
    isWeeklyMonthlyOrYearly = yield Object(external_tribe_modules_reduxSaga_effects_["call"])([[WEEKLY, MONTHLY, YEARLY], 'includes'], ruleType);
    if (!isWeeklyMonthlyOrYearly || isCustom) {
      index++;
      continue;
    }
    recurringPanelHeader = yield Object(external_tribe_modules_reduxSaga_effects_["call"])([document, 'querySelector'], `.tribe-editor__events-pro__panel-header--${type}`);
    if (recurringPanelHeader && !recurringPanelHeader.classList.contains('tribe-editor__events-pro__panel-header--expanded')) {
      recurringPanelToggle = yield Object(external_tribe_modules_reduxSaga_effects_["call"])([recurringPanelHeader, 'querySelector'], 'button');
      recurringPanelToggle.click();
    }
    break;
  }
}

/**
 * Updates recurring and exception rules on start time change.
 *
 * @exports
 * @yields
 * @since 6.0.0
 * @return {void}
 */
function* updateRulesOnStartTimeChange() {
  yield Object(external_tribe_modules_reduxSaga_effects_["call"])(updateRuleLockedOption, {
    type: external_tribe_events_pro_data_blocks_recurring_types_["EDIT_RULE"]
  });
  yield Object(external_tribe_modules_reduxSaga_effects_["call"])(updateRecurrencePanelExpand, external_tribe_events_pro_data_blocks_constants_["RECURRING"]);
  yield Object(external_tribe_modules_reduxSaga_effects_["call"])(updateRecurrencePanelExpand, external_tribe_events_pro_data_blocks_constants_["EXCEPTION"]);
  const startDateTime = yield Object(external_tribe_modules_reduxSaga_effects_["select"])(external_tribe_events_data_blocks_datetime_selectors_["getStart"]);
  yield Object(external_tribe_modules_reduxSaga_effects_["put"])(setPreviousStartDateTime(startDateTime));
}

/**
 * Updates the rules on edit action.
 *
 * @exports
 * @yields
 * @since 6.0.0
 * @param {object} action The dispatched action.
 * @return {void}
 */
function* updateRulesOnEdit(action) {
  if (action.sync) {
    // Syncing, return early.
    return;
  }
  yield Object(external_tribe_modules_reduxSaga_effects_["call"])(updateRuleLockedOption, action);
  const startDateTime = yield Object(external_tribe_modules_reduxSaga_effects_["select"])(external_tribe_events_data_blocks_datetime_selectors_["getStart"]);
  yield Object(external_tribe_modules_reduxSaga_effects_["put"])(setPreviousStartDateTime(startDateTime));
}

/**
 * Updates custom rules on edit action.
 *
 * @exports
 * @yields
 * @since 6.0.0
 * @param {object} action The dispatched action.
 * @return {void}
 */
function* updateCustomRule(action) {
  if (action.sync) {
    // Syncing, return early.
    return;
  }
  if (!action.payload.hasOwnProperty('typeId') || !action.payload.typeId.includes('custom')) {
    // Rule type id is not custom, return early.
    return;
  }
  const isRecurring = action.type === EDIT_RECURRENCE_RULE;
  const selectors = isRecurring ? recurring_selectors_namespaceObject : exception_selectors_namespaceObject;
  const offStartIndex = yield Object(external_tribe_modules_reduxSaga_effects_["select"])(selectors.getOffStartIndex, {
    index: action.index
  });
  if (-1 === offStartIndex) {
    // No off-start index, return early.
    return;
  }
  const offStartRule = isRecurring ? Object(external_tribe_common_utils_globals_["postObjects"])().tribe_events.meta._tribe_blocks_recurrence_rules[offStartIndex] : Object(external_tribe_common_utils_globals_["postObjects"])().tribe_events.meta._tribe_blocks_recurrence_exclusions[offStartIndex];
  const updatedOffStartRule = Object.keys(offStartRule).reduce((carry, key) => {
    if (KEY_IS_OFF_START === key) {
      // Don't include the off-start key.
      return carry;
    }
    carry[key] = offStartRule[key];
    return carry;
  }, {});
  const sync = isRecurring ? external_tribe_events_pro_data_blocks_recurring_actions_["syncRule"] : external_tribe_events_pro_data_blocks_exception_actions_["syncException"];
  yield Object(external_tribe_modules_reduxSaga_effects_["put"])(sync(action.index, updatedOffStartRule));
}

/**
 * Updates rule types if the rule type was custom.
 *
 * @exports
 * @since 6.0.0
 * @param {object} handlers Handlers containing actions, selectors, and options.
 * @return {Function}
 */
const updateRuleTypesIfCustom = handlers => function* (rule, index) {
  const isCustom = yield Object(external_tribe_modules_reduxSaga_effects_["select"])(handlers.selectors.isRuleTypeCustom, {
    index
  });

  // If rule is still custom, return early.
  if (isCustom) {
    return;
  }
  const ruleType = yield Object(external_tribe_modules_reduxSaga_effects_["select"])(handlers.proSelectors.getType, {
    index
  });
  const rules = yield Object(external_tribe_modules_reduxSaga_effects_["select"])(handlers.proSelectors.getRules);
  const nonSingleRules = rules.filter(rule => rule.type !== SINGLE);
  const payload = {
    isOffStart: false,
    offStartIndex: -1
  };

  // If a non-single rule doesn't exists or the rule type is not single, set the allowed rule type to all options.
  if (!nonSingleRules.length || ruleType !== SINGLE) {
    payload.ruleTypes = handlers.options.ruleTypeOptions;
  }
  yield Object(external_tribe_modules_reduxSaga_effects_["put"])(handlers.actions.edit(index, payload));
};

/**
 * Updates custom rule types on save.
 *
 * @exports
 * @yields
 * @since 6.0.0
 * @return {void}
 */
function* updateCustomRuleTypes() {
  const recurrenceRules = yield Object(external_tribe_modules_reduxSaga_effects_["select"])(getAllRecurrenceRules);
  const exceptionRules = yield Object(external_tribe_modules_reduxSaga_effects_["select"])(getAllExceptionRules);
  yield Object(external_tribe_modules_reduxSaga_effects_["all"])(recurrenceRules.map((rule, index) => Object(external_tribe_modules_reduxSaga_effects_["call"])(updateRuleTypesIfCustom({
    actions: {
      edit: editRecurrenceRule
    },
    selectors: recurring_selectors_namespaceObject,
    proSelectors: external_tribe_events_pro_data_blocks_recurring_selectors_,
    options: {
      ruleTypeOptions: RECURRENCE_RULE_TYPES_OPTIONS
    }
  }), rule, index)));
  yield Object(external_tribe_modules_reduxSaga_effects_["all"])(exceptionRules.map((rule, index) => Object(external_tribe_modules_reduxSaga_effects_["call"])(updateRuleTypesIfCustom({
    actions: {
      edit: editExceptionRule
    },
    selectors: exception_selectors_namespaceObject,
    proSelectors: external_tribe_events_pro_data_blocks_exception_selectors_,
    options: {
      ruleTypeOptions: EXCEPTION_RULE_TYPES_OPTIONS
    }
  }), rule, index)));
}

/**
 * Watches the dispatched actions.
 *
 * @exports
 * @yields
 * @since 6.0.0
 * @return {void}
 */
function* shared_sagas_watchers() {
  yield Object(external_tribe_modules_reduxSaga_effects_["takeEvery"])([external_tribe_events_data_blocks_datetime_types_["SET_START_DATE_TIME"]], updateRulesOnStartTimeChange);
  yield Object(external_tribe_modules_reduxSaga_effects_["takeEvery"])([external_tribe_events_pro_data_blocks_recurring_types_["EDIT_RULE"]], updateRulesOnEdit);
  yield Object(external_tribe_modules_reduxSaga_effects_["takeEvery"])([EDIT_RECURRENCE_RULE], updateCustomRule);
  yield Object(external_tribe_modules_reduxSaga_effects_["takeEvery"])([EDIT_EXCEPTION_RULE], updateCustomRule);
  const channel = yield Object(external_tribe_modules_reduxSaga_effects_["call"])(external_tribe_events_pro_data_status_sagas_["createWPEditorChannel"]);
  while (true) {
    yield Object(external_tribe_modules_reduxSaga_effects_["take"])(channel);
    yield Object(external_tribe_modules_reduxSaga_effects_["call"])(updateCustomRuleTypes);
  }
}
// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__("wy2R");

// CONCATENATED MODULE: ./src/modules/custom-tables-v1/data/shared/reducer.js

function reducer_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function reducer_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? reducer_ownKeys(Object(t), !0).forEach(function (r) { defineProperty_default()(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : reducer_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
/**
 * External dependencies
 */


/**
 * Internal dependencies
 */




const shared_reducer_DEFAULT_STATE = {
  dayOfMonthOptions: Object(external_moment_["isMoment"])(external_tribe_events_data_blocks_datetime_reducer_["defaultStartMoment"]) ? utils_getDayOfMonthOptions(external_tribe_events_data_blocks_datetime_reducer_["defaultStartMoment"]) : []
};
const shared_reducer_setInitialState = data => {
  shared_reducer_DEFAULT_STATE.dayOfMonthOptions = utils_getDayOfMonthOptions(Object(external_tribe_common_utils_moment_["toMoment"])(data.meta._EventStartDate));
};
/* harmony default export */ var shared_reducer = ((state = shared_reducer_DEFAULT_STATE, action) => {
  switch (action.type) {
    case SET_DAY_OF_MONTH_OPTIONS:
      return reducer_objectSpread(reducer_objectSpread({}, state), {}, {
        dayOfMonthOptions: action.payload.options
      });
    default:
      return state;
  }
});
// CONCATENATED MODULE: ./src/modules/custom-tables-v1/data/shared/index.js







// CONCATENATED MODULE: ./src/modules/custom-tables-v1/data/event-details/types.js
/**
 * Internal dependencies
 */

const UPDATE_EVENT_DETAILS = `${PREFIX_EVENTS_PRO_STORE}/UPDATE_EVENT_DETAILS`;
const UPDATE_EVENT_DETAILS_EVENT = `${PREFIX_EVENTS_PRO_STORE}/UPDATE_EVENT_DETAILS_EVENT`;
const UPDATE_EVENT_DETAILS_OCCURRENCE = `${PREFIX_EVENTS_PRO_STORE}/UPDATE_EVENT_DETAILS_OCCURRENCE`;
const UPDATE_EVENT_DETAILS_SERIES = `${PREFIX_EVENTS_PRO_STORE}/UPDATE_EVENT_DETAILS_SERIES`;
// CONCATENATED MODULE: ./src/modules/custom-tables-v1/data/event-details/reducer/event.js

function event_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function event_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? event_ownKeys(Object(t), !0).forEach(function (r) { defineProperty_default()(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : event_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
/**
 * Internal dependencies
 */

const event_DEFAULT_STATE = tecEventDetails && tecEventDetails.event ? tecEventDetails.event : {};
/* harmony default export */ var reducer_event = ((state = event_DEFAULT_STATE, action) => {
  switch (action.type) {
    case UPDATE_EVENT_DETAILS_EVENT:
      return event_objectSpread(event_objectSpread({}, state), action.payload);
    default:
      return state;
  }
});
// CONCATENATED MODULE: ./src/modules/custom-tables-v1/data/event-details/reducer/occurrence.js

function occurrence_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function occurrence_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? occurrence_ownKeys(Object(t), !0).forEach(function (r) { defineProperty_default()(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : occurrence_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
/**
 * Internal dependencies
 */

const occurrence_DEFAULT_STATE = tecEventDetails && tecEventDetails.occurrence ? tecEventDetails.occurrence : {};
/* harmony default export */ var occurrence = ((state = occurrence_DEFAULT_STATE, action) => {
  switch (action.type) {
    case UPDATE_EVENT_DETAILS_OCCURRENCE:
      return occurrence_objectSpread(occurrence_objectSpread({}, state), action.payload);
    default:
      return state;
  }
});
// CONCATENATED MODULE: ./src/modules/custom-tables-v1/data/event-details/reducer/series.js

function series_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function series_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? series_ownKeys(Object(t), !0).forEach(function (r) { defineProperty_default()(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : series_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
/**
 * Internal dependencies
 */

const series_DEFAULT_STATE = tecEventDetails && tecEventDetails.series ? tecEventDetails.series : {};
/* harmony default export */ var series = ((state = series_DEFAULT_STATE, action) => {
  switch (action.type) {
    case UPDATE_EVENT_DETAILS_SERIES:
      return series_objectSpread(series_objectSpread({}, state), action.payload);
    default:
      return state;
  }
});
// CONCATENATED MODULE: ./src/modules/custom-tables-v1/data/event-details/reducer/index.js



// CONCATENATED MODULE: ./src/modules/custom-tables-v1/data/event-details/reducer.js

function event_details_reducer_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function event_details_reducer_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? event_details_reducer_ownKeys(Object(t), !0).forEach(function (r) { defineProperty_default()(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : event_details_reducer_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
/**
 * Internal dependencies
 */


const event_details_reducer_DEFAULT_STATE = tecEventDetails ? tecEventDetails : {};
/* harmony default export */ var event_details_reducer = ((state = event_details_reducer_DEFAULT_STATE, action) => {
  switch (action.type) {
    case UPDATE_EVENT_DETAILS:
      return event_details_reducer_objectSpread(event_details_reducer_objectSpread({}, state), action.payload);
    case UPDATE_EVENT_DETAILS_EVENT:
      return event_details_reducer_objectSpread(event_details_reducer_objectSpread({}, state), {}, {
        event: reducer_event(state.event, action)
      });
    case UPDATE_EVENT_DETAILS_OCCURRENCE:
      return event_details_reducer_objectSpread(event_details_reducer_objectSpread({}, state), {}, {
        occurrence: occurrence(state.occurrence, action)
      });
    case UPDATE_EVENT_DETAILS_SERIES:
      return event_details_reducer_objectSpread(event_details_reducer_objectSpread({}, state), {}, {
        series: series(state.series, action)
      });
    default:
      return state;
  }
});
// CONCATENATED MODULE: ./src/modules/custom-tables-v1/data/event-details/actions.js
/**
 * Internal dependencies
 */

const updateEventDetails = payload => ({
  type: UPDATE_EVENT_DETAILS,
  payload
});
const updateEventDetailsEvent = payload => ({
  type: UPDATE_EVENT_DETAILS_EVENT,
  payload
});
const updateEventDetailsOccurrence = payload => ({
  type: UPDATE_EVENT_DETAILS_OCCURRENCE,
  payload
});
const updateEventDetailsSeries = payload => ({
  type: UPDATE_EVENT_DETAILS_SERIES,
  payload
});
// CONCATENATED MODULE: ./src/modules/custom-tables-v1/data/event-details/selectors.js
/**
 * External dependencies
 */


/**
 * Internal dependencies
 */

const getEventDetails = state => state[constants_namespaceObject.TEC_EVENTS_PRO_PLUGIN].eventDetails;
const getEventDetailsEvent = Object(external_tribe_modules_reselect_["createSelector"])([getEventDetails], eventDetails => eventDetails.event);
const getEventDetailsOccurrence = Object(external_tribe_modules_reselect_["createSelector"])([getEventDetails], eventDetails => eventDetails.occurrence);
const getEventDetailsSeries = Object(external_tribe_modules_reselect_["createSelector"])([getEventDetails], eventDetails => eventDetails.series);
// CONCATENATED MODULE: ./src/modules/custom-tables-v1/data/event-details/index.js
/**
 * Internal dependencies.
 */





/* harmony default export */ var event_details = (event_details_reducer);
// CONCATENATED MODULE: ./src/modules/custom-tables-v1/data/reducers.js
/**
 * External dependencies
 */


/**
 * Internal dependencies
 */



/* harmony default export */ var reducers = (Object(external_tribe_modules_redux_["combineReducers"])({
  blocks: blocks_reducer,
  shared: shared_reducer,
  eventDetails: event_details
}));
// CONCATENATED MODULE: ./src/modules/custom-tables-v1/data/sagas.js
/**
 * External dependencies
 */


/**
 * Internal dependencies
 */


/* harmony default export */ var data_sagas = (() => [exception_namespaceObject.sagas, recurring_namespaceObject.sagas, shared_sagas_watchers].forEach(sagas => external_tribe_common_store_["store"].run(sagas)));
// CONCATENATED MODULE: ./src/modules/custom-tables-v1/data/notices/subscribers.js
/**
 * Internal dependencies
 */


const {
  dispatch: subscribers_dispatch,
  select: subscribers_select,
  subscribe
} = wp.data;
/* harmony default export */ var subscribers = (() => {
  // Remove notice for editing series.
  const unsubscribe = subscribe(() => {
    const notices = subscribers_select('core/notices').getNotices();
    notices.forEach(notice => {
      if (external_tribe_events_pro_data_status_sagas_["NOTICE_EDITING_SERIES"] !== notice.id) {
        return;
      }
      subscribers_dispatch('core/notices').removeNotice(notice.id);
      unsubscribe();
    });
  });
  const closeListener = subscribe(() => {
    const isReady = subscribers_select('core/editor').__unstableIsEditorReady();
    if (!isReady) {
      return;
    }
    // Close the listener as soon as we know we are ready to avoid an infinite loop and before to dispatch a new notice.
    closeListener();
  });
});
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("yXPU");
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// CONCATENATED MODULE: ./src/modules/custom-tables-v1/data/notices/occurrences.js

/**
 * NOTE: If this is replaced with `@wordpress/api-fetch` make sure is no the
 * direct NPM module but instead the global reference from WP using Webpack to
 * reference the global (window) wp object instead, due the NPM package is not
 * configured out of the box to use the WP_REST as base of the requests and by
 * doing so would be using the base path of the site, additionally nonces are
 * not setup as expected for those type of requests.
 */
const {
  apiFetch
} = wp;
const {
  dispatch: occurrences_dispatch,
  select: occurrences_select,
  subscribe: occurrences_subscribe
} = wp.data;

/**
 * Object used to keep track of the state of the different listeners and
 * operations going on at all times in the editor.
 *
 * @since 6.0.0
 * @since 6.0.12.1 Adding isSavingMetaBoxes flag.
 * @typedef {object} state
 * @property {boolean} state.saving Variable used to keep track
 *     when the editor is doing a save operation (not an auto saving) publish
 *     or save.
 * @property {boolean} state.running If we are running a notice
 *     operation in order to avoid duplicate work.
 * @property {string} state.noticeId The ID of the notice used for
 *     the occurrences.
 * @property {Array<Function>} state.subscriptions Reference to the
 *     existing subscriptions in order to unsubscribe as soon as the listeners
 *     are replaced.
 */
const occurrences_state = {
  saving: false,
  running: false,
  noticeId: 'tec-events-pro-occurrences',
  subscriptions: [],
  isSavingMetaBoxes: false
};

/**
 * Function used to remove a notice from the transient table using the provided
 * API.
 *
 * @since 6.0.0
 * @param {number} id The ID of the post to be removed.
 * @returns {Promise} A promise with the result from the API call.
 */
function deleteNotice(id) {
  return /*#__PURE__*/asyncToGenerator_default()(function* () {
    return yield apiFetch({
      path: `/tec/v1/events/${id}/notices/occurrences/`,
      method: 'DELETE'
    });
  });
}

/**
 * Function used to get a notice using the post ID from a function.
 *
 * @since 6.0.0
 * @param {number} id The post ID.
 * @returns {Array} An array with all the notices from the API.
 */
function getOccurrenceNotice(_x) {
  return _getOccurrenceNotice.apply(this, arguments);
}

/**
 * Listen to the changes into the store until the notice is dismiss due the
 * `onDismiss` parameter does not work as expected on the notices API. Once the
 * callback is executed the unsubscribe function is executed.
 *
 * @since 6.0.0
 * @param {Function} onDismiss A function called once the notice has been
 *     removed out of the store.
 * @returns {Function} unSubscribe function from the store.
 */
function _getOccurrenceNotice() {
  _getOccurrenceNotice = asyncToGenerator_default()(function* (id) {
    const notices = yield apiFetch({
      path: `/tec/v1/events/${id}/notices/occurrences/`,
      method: 'GET'
    });
    if (!Array.isArray(notices) || !notices) {
      return [];
    }

    // Decode all the JSON notices.
    return notices.map(JSON.parse);
  });
  return _getOccurrenceNotice.apply(this, arguments);
}
function attachListener(onDismiss) {
  const unsubscribe = occurrences_subscribe(() => {
    // If the notice is no longer in the store it means it has been removed.
    const notices = occurrences_select('core/notices').getNotices().filter(notice => notice.id === occurrences_state.noticeId);
    if (notices.length <= 0) {
      unsubscribe();
      onDismiss();
    }
  });
  occurrences_state.subscriptions.push(unsubscribe);
  return unsubscribe;
}

/**
 * Function used to remove all the active subscriptions on the editor, once
 * all the unsubscribe callbacks are executed the subscriptions array is set
 * to an empty array.
 *
 * @since 6.0.0
 */
function clearSubscriptions() {
  Array.from(occurrences_state.subscriptions).map(unsubscribe => {
    unsubscribe();
  });
  occurrences_state.subscriptions = [];
}
function createNotice(id) {
  return getOccurrenceNotice(id).then(notices => {
    if (notices.length <= 0) {
      return;
    }
    occurrences_dispatch('core/notices').createSuccessNotice(notices.shift(), {
      id: occurrences_state.noticeId,
      isDismissible: true,
      // The createNotice function would escape the HTML, we need to tell it not to.
      __unstableHTML: true,
      explicitDismiss: false
    });
    attachListener(deleteNotice(id));
  });
}

/**
 * Function executed once the editor is ready in order to update the notice if
 * present for the current post this would apply only to existing events that
 * are recurring, when the user opens the event, new posts are not affected by
 * this subscriber and removed immediately.
 *
 * @since 6.0.0
 * @returns {Function} A function used to unsubscribe from listen into the
 *     Gutenberg store.
 */
function onLoad() {
  // Remove notice for editing series.
  const unsubscribeOnLoad = occurrences_subscribe(() => {
    const coreEditor = occurrences_select('core/editor');

    // Wait until the editor is ready.
    if (!coreEditor.__unstableIsEditorReady()) {
      return;
    }

    // If we reach this point the subscription is no longer required,
    // subsequent steps are executed normally only once.
    unsubscribeOnLoad();

    // This is a new post no need to make a fetch request.
    if (coreEditor.isCleanNewPost()) {
      return;
    }
    const id = coreEditor.getCurrentPostId();
    if (!id) {
      return;
    }
    clearSubscriptions();
    createNotice(id).then(onPublishOrUpdate);
  });
  occurrences_state.subscriptions.push(unsubscribeOnLoad);
  return unsubscribeOnLoad;
}

/**
 * Returns whether the Metaboxes save operations started and have completed.
 *
 * NOTE - this can only be used inside a is single function/context. The state only works for one watching
 * function, because it is stateful on each call.
 *
 * @since 6.0.0
 * @since 6.0.12.1
 * @returns {boolean} Whether the Metaboxes save operations have started and are
 *     completed.
 */
const isDoneSavingMetaboxes = () => {
  const ep = occurrences_select('core/edit-post');
  const isSavingMetaBoxes = ep.isSavingMetaBoxes();
  if (isSavingMetaBoxes) {
    // From any state to (1,1).
    occurrences_state.isSavingMetaBoxes = true;

    // If here, not done.
    return false;
  }
  if (occurrences_state.isSavingMetaBoxes) {
    // We saved, now transition to done.
    occurrences_state.isSavingMetaBoxes = false;

    // Notify the save event finished.
    return true;
  }
  return false;
};

/**
 * Function used as a callback to listen for the events inside of the Gutenberg
 * editor in order to detect as soon as we are saving a post in order for us to
 * trigger a fetch of the notice value and update the notice of creation or
 * update.
 *
 * @since 6.0.0
 * @returns {boolean} If we are saving or not.
 */
function editListener() {
  if (!isDoneSavingMetaboxes() || occurrences_state.running) {
    return false;
  }
  const coreEditor = occurrences_select('core/editor');
  const didPostSaveRequestSucceed = coreEditor.didPostSaveRequestSucceed();

  // Set a flag as running in order to prevent subsequent triggers or executions.
  occurrences_state.running = true;
  const id = coreEditor.getCurrentPostId();
  if (id && didPostSaveRequestSucceed) {
    clearSubscriptions();
    // Once the notice is created successfully attach the listener for subsequent updates.
    createNotice(id).then(onPublishOrUpdate);
  }
  return occurrences_state.running;
}

/**
 * Listen for events when the editor is creating (saving) a new event or
 * updating an existing event.
 *
 * @since 6.0.0
 * @returns {Function} A function used to unsubscribe the current subscription.
 */
function onPublishOrUpdate() {
  // Reset the flag running as once this event is executed this means we are no longer running.
  occurrences_state.running = false;
  const subscription = occurrences_subscribe(editListener);
  occurrences_state.subscriptions.push(subscription);
  return subscription;
}

/**
 * Default exported function starting all subscriptions to the Redux store from
 * Gutenberg to listen for events when the editor is ready and when a new event
 * is published or updated.
 *
 * @since 6.0.0
 */
function init() {
  onLoad();
  onPublishOrUpdate();
}
// CONCATENATED MODULE: ./src/modules/custom-tables-v1/data/notices/index.js
/**
 * Internal dependencies
 */



// CONCATENATED MODULE: ./src/modules/custom-tables-v1/data/subscribers.js
/**
 * Internal dependencies
 */

/* harmony default export */ var data_subscribers = (() => {
  subscribers();
  init();
});
// CONCATENATED MODULE: ./src/modules/custom-tables-v1/data/index.js
/**
 * Internal dependencies
 */









const data_setInitialState = data => {
  blocks_reducer_setInitialState(data);
  shared_reducer_setInitialState(data);
};
const initStore = () => {
  const data = external_tribe_common_utils_["globals"].postObjects().tribe_events;
  if (!data.is_new_post) {
    data_setInitialState(data);
  }
  const {
    dispatch,
    injectReducers
  } = external_tribe_common_store_["store"];
  data_sagas();
  data_subscribers();
  injectReducers({
    [constants_namespaceObject.TEC_EVENTS_PRO_PLUGIN]: reducers
  });
  dispatch(external_tribe_common_data_plugins_["actions"].addPlugin(constants_namespaceObject.TEC_EVENTS_PRO_PLUGIN));
};
const getStore = () => external_tribe_common_store_["store"];
// EXTERNAL MODULE: external "React"
var external_React_ = __webpack_require__("cDcd");

// CONCATENATED MODULE: ./src/modules/custom-tables-v1/blocks/recurrence/hooks.js
/**
 * External dependencies
 */


/**
 * Internal dependencies
 */


const {
  __: hooks_
} = wp.i18n;
const filterRenderRecurrence = content => {
  const state = external_tribe_common_store_["store"].getState();
  const disableRecurrence = recurrence_selectors_namespaceObject.isEventTicketsActive(state) && (recurrence_selectors_namespaceObject.hasRSVP(state) || recurrence_selectors_namespaceObject.hasTickets(state));
  if (!disableRecurrence) {
    return content;
  }
  return wp.element.createElement("div", {
    className: "tribe-editor__not-supported-message"
  }, wp.element.createElement("p", {
    className: "tribe-editor__not-supported-message-text"
  }, hooks_('Recurrence patterns are not yet supported for events with tickets or RSVPs.', 'tribe-events-calendar-pro'), wp.element.createElement("br", null), wp.element.createElement("a", {
    className: "tribe-editor__not-supported-message-link",
    href: "https://evnt.is/1b7a",
    target: "_blank",
    rel: "noopener noreferrer"
  }, hooks_('Read about our plans for future features.', 'tribe-events-calendar-pro'))));
};
const hook = () => {
  wp.hooks.addFilter('blocks.recurrence.renderRecurrenceHook', 'tec/filterRenderRecurrence', filterRenderRecurrence);
};
/* harmony default export */ var hooks = (hook);
// CONCATENATED MODULE: ./src/modules/custom-tables-v1/blocks/recurrence/index.js
/**
 * This is not a block, the recurring field options are hooked
 * into the recurring field element if tec-events-pro is activated.
 */

/* harmony default export */ var recurrence = (hooks);
// CONCATENATED MODULE: ./src/modules/custom-tables-v1/blocks/recurrence-description/hooks.js
const filterRecurrenceDescription = (content, props) => null;
const hooks_hook = () => {
  wp.hooks.addFilter('blocks.recurrenceDescription.contentHook', 'tec/filterRecurrenceDescription', filterRecurrenceDescription);
};
/* harmony default export */ var recurrence_description_hooks = (hooks_hook);
// CONCATENATED MODULE: ./src/modules/custom-tables-v1/blocks/recurrence-description/index.js
/**
 * This is not a block, the recurring field options are hooked
 * into the recurring field element if tec-events-pro is activated.
 */

/* harmony default export */ var recurrence_description = (recurrence_description_hooks);
// EXTERNAL MODULE: ./src/modules/custom-tables-v1/blocks/style.pcss
var style = __webpack_require__("O7uX");

// CONCATENATED MODULE: ./src/modules/custom-tables-v1/blocks/index.js
/**
 * Internal dependencies
 */





/**
 * Initialize blocks JS.
 *
 * @since 6.0.0
 */
const blocks_init = () => {
  initStore();
  recurrence();
  recurrence_description();
};
blocks_init();
// EXTERNAL MODULE: external "tribe.events.data.blocks.datetime"
var external_tribe_events_data_blocks_datetime_ = __webpack_require__("HJt2");

// CONCATENATED MODULE: ./src/modules/custom-tables-v1/dialog/constants.js
const RECURRENCE_RULES_META_KEY = '_tribe_blocks_recurrence_rules';
const EXCEPTION_RULES_META_KEY = '_tribe_blocks_recurrence_exclusions';
const UPDATE_TYPE_KEY = '_tec_update_type';
const INITIAL_META_KEY = '_tec_initial_meta';
const REQUIRES_FIRST_SAVE_KEY = '_tec_requires_first_save';
const TRASH_POST_NOTICE_ID = 'TRASH_POST_NOTICE_ID';
const ALL = 'all';
const constants_SINGLE = 'single';
const UPCOMING = 'upcoming';
// CONCATENATED MODULE: ./src/modules/custom-tables-v1/dialog/dialog.js




const {
  toMoment
} = external_tribe_common_utils_["moment"];

/**
 * Clears the HTML content within the dialog element.
 *
 * @since 6.0.0
 * @return {void}
 */
const clearDialogContent = () => {
  tec.editorDialog.el.$instance.empty();
};

/**
 * Get radio input HTML for the dialog element.
 *
 * @since 6.0.0
 * @param {PlainObject} settings The settings object for dialog text.
 *                               Possible parameters include:
 *                               {
 *                                 type: string, type of dialog content, should be "text",
 *                                 text: string, the text content,
 *                               }
 * @return {string} The HTML code of the text to append to the dialog content.
 */
const getDialogText = function (settings) {
  // @todo: move this to a template.
  return `<div class="tec-events-pro-dialog__text-row">
		<p class="tec-events-pro-dialog__text">
			${settings.text}
		</p>
	</div>`;
};

/**
 * Get radio input HTML for the dialog element.
 *
 * @since 6.0.0
 * @param {PlainObject} settings The settings object for dialog radio input.
 *                               Possible parameters include:
 *                               {
 *                                 type: string, type of radio input ('single', 'upcoming', 'all'),
 *                                 label: string, the label of the radio input,
 *                                 classes: array, classes to be added to the input row,
 *                                 inputClasses: array, classes to be added to the radio input,
 *                                 labelClasses: array, classes to be added to the label,
 *                                 checked: boolean, whether the radio input is checked or not,
 *                               }
 * @return {string} The HTML code of the radio input to append to the dialog content.
 */
const getDialogRadioInput = function (settings) {
  const checked = settings.checked ? 'checked' : '';
  const classes = ['tec-events-pro-dialog__input-row', `tec-events-pro-dialog__input-row--${settings.type}`].concat(settings.classes).join(' ');
  const inputClasses = ['tec-events-pro-dialog__radio-input'].concat(settings.inputClasses).join(' ');
  const labelClasses = ['tec-events-pro-dialog__radio-input-label'].concat(settings.labelClasses).join(' ');
  const id = `tec-events-pro-dialog__radio-input--${settings.type}`;
  let html = `<div class="${classes}">
		<input type="radio" name="${UPDATE_TYPE_KEY}" value="${settings.type}" class="${inputClasses}" id="${id}" ${checked} />
		<label class="${labelClasses}" for="${id}">
			${settings.label}`;
  if (settings.labelHelpText) {
    html += '<div><em style="font-style: italic; color: gray; font-size: 90%">' + settings.labelHelpText + '</em></div>';
  }
  html += '</label></div>';
  return html;
};

/**
 * Sets the HTML content within the dialog element.
 *
 * @since 6.0.0
 * @param {Array} contentSettings Array of content settings to include in the dialog content.
 * @return {void}
 */
const setDialogContent = contentSettings => {
  contentSettings.forEach(function (settings) {
    if ('text' === settings.type) {
      tec.editorDialog.el.$instance.append(getDialogText(settings));
    } else {
      tec.editorDialog.el.$instance.append(getDialogRadioInput(settings));
    }
  });
};

/**
 * Get the "This Event" label with the start datetime appended to the end.
 *
 * @since 6.0.0
 * @return {string}
 */
const getDialogThisEventLabel = () => {
  const labelPieces = [window.tecEventsSeriesBlockEditor.thisEvent];

  // Get start date and time moment.
  const state = getStore().getState();
  const start = external_tribe_events_data_blocks_datetime_["selectors"].getStart(state);
  const startMoment = toMoment(start);

  // If moment is not valid, return label without start date time.
  if (!startMoment.isValid()) {
    return labelPieces[0];
  }
  const isAllDay = external_tribe_events_data_blocks_datetime_["selectors"].getAllDay(state);
  const dateSeparator = external_tribe_events_data_blocks_datetime_["selectors"].getDateSeparator(state);

  // Get date string from start date time moment, build start date time string.
  let dateTimeString = startMoment.format('MMMM D, YYYY');
  dateTimeString += isAllDay ? ` ${window.tecEventsSeriesBlockEditor.allDay}` : ` ${dateSeparator} ${startMoment.format('H:mma')}`;
  dateTimeString = `(${dateTimeString})`;
  labelPieces.push(dateTimeString);
  return labelPieces.join(' ');
};

/**
 * Initialize the editor dialog.
 *
 * @since 6.0.0
 */
const dialog_init = () => {
  tec.editorDialog.setupDialog();
};
/* harmony default export */ var dialog = (dialog_init);
// CONCATENATED MODULE: ./src/modules/custom-tables-v1/dialog/state.js





const {
  select: state_select
} = wp.data;

/**
 * Flags to hold specific states.
 *
 * @since 6.0.0
 * @since 6.0.12.1 Removing the isSavingMetaboxes flag.
 * @type {PlainObject}
 */
const flags = {
  isSavingPost: false
};

/**
 * Selectors used for configuration and setup.
 *
 * @since 6.0.0
 * @type {PlainObject}
 */
const state_selectors = {
  saveButton: 'button.editor-post-publish-button',
  saveDraftButton: 'button.editor-post-save-draft',
  eventSeriesSelect: '#_tec_relationship_event_to_series',
  editLinkContainer: '.tec-events-pro-series__edit-link-container',
  editLink: '.tec-events-pro-series__edit-link'
};

/**
 * Compares the current start date with the saved start date and determines
 * whether the start date is dirty or not.
 *
 * @since 6.0.0
 * @return {boolean} Whether the start date is dirty or not.
 */
const isStartDateDirty = () => {
  const state = getStore().getState();
  const currentStart = Object(external_tribe_events_data_blocks_datetime_selectors_["getStart"])(state);
  const currentStartDate = currentStart.split(' ')[0];
  const startMetaKey = '_EventStartDate'; // @todo: make this dependent on datetime reducer defaultStateToMetaMap.
  const currentPost = state_select('core/editor').getCurrentPost();
  const {
    meta
  } = currentPost;
  const initialStartDate = meta[startMetaKey].split(' ')[0];
  return initialStartDate !== currentStartDate;
};

/**
 * Compares the current start time with the saved start time and determines
 * whether the start datetime is dirty or not.
 *
 * @since 6.0.0
 * @return {boolean} Whether the start time is dirty or not.
 */
const isStartTimeDirty = () => {
  const state = getStore().getState();
  const currentStart = Object(external_tribe_events_data_blocks_datetime_selectors_["getStart"])(state);
  const currentStartTime = currentStart.split(' ')[1];
  const startMetaKey = '_EventStartDate'; // @todo: make this dependent on datetime reducer defaultStateToMetaMap.
  const currentPost = state_select('core/editor').getCurrentPost();
  const {
    meta
  } = currentPost;
  const initialStartTime = meta[startMetaKey].split(' ')[1];
  return initialStartTime !== currentStartTime;
};

/**
 * Compares the current recurrence rules with the saved recurrence rules and
 * determines whether the recurrence rules is dirty or not. We are comparing
 * strings rather than doing a deep comparison because _.isEqual() in lodash v4
 * does not compare order. For example,
 * _.isEqual([1, 2], [2, 1]) will return true, which is not correct.
 *
 * @since 6.0.0
 * @return {boolean} Whether the recurrence rules is dirty or not.
 */
const isRecurrenceDirty = () => {
  const state = getStore().getState();
  const currentRecurrenceRules = Object(external_tribe_events_pro_data_blocks_recurring_selectors_["getRules"])(state);
  const currentPost = state_select('core/editor').getCurrentPost();
  const {
    meta
  } = currentPost;
  // Set initial recurrence rules to empty array if empty string. This can happen if no rules are set.
  const initialRecurrenceRules = '' === meta[RECURRENCE_RULES_META_KEY] ? '[]' : meta[RECURRENCE_RULES_META_KEY];
  return initialRecurrenceRules !== JSON.stringify(currentRecurrenceRules);
};

/**
 * Compares the current exception rules with the saved exception rules and
 * determines whether the exception rules is dirty or not. We are comparing
 * strings rather than doing a deep comparison because _.isEqual() in lodash v4
 * does not compare order. For example,
 * _.isEqual([1, 2], [2, 1]) will return true, which is not correct.
 *
 * @since 6.0.0
 * @return {boolean} Whether the exception rules is dirty or not.
 */
const isExceptionsDirty = () => {
  const state = getStore().getState();
  const currentExceptionRules = Object(external_tribe_events_pro_data_blocks_exception_selectors_["getExceptions"])(state);
  const currentPost = state_select('core/editor').getCurrentPost();
  const {
    meta
  } = currentPost;
  // Set initial exception rules to empty array if empty string. This can happen if no rules are set.
  const initialExceptionRules = '' === meta[EXCEPTION_RULES_META_KEY] ? '[]' : meta[EXCEPTION_RULES_META_KEY];
  return initialExceptionRules !== JSON.stringify(currentExceptionRules);
};

/**
 * Returns whether the post save operations started and have completed.
 *
 * @since 6.0.0
 * @returns {boolean} Whether the post save operations started and have
 *     completed.
 */
const isDoneSavingPost = () => {
  const coreEditor = state_select('core/editor');
  const isSavingPost = coreEditor.isSavingPost();

  // Flag is false and not yet saving, return early.
  if (!flags.isSavingPost && !isSavingPost) {
    return false;
  }

  // Flag is false and has now started saving, set flag and return early.
  if (!flags.isSavingPost && isSavingPost) {
    flags.isSavingPost = isSavingPost;
    return false;
  }

  // Flag is true and is still saving, return early.
  if (flags.isSavingPost && isSavingPost) {
    return false;
  }

  // Flag is true and is not saving anymore, set flag, unsubscribe, and
  // continue.
  flags.isSavingPost = isSavingPost;
  return true;
};
// CONCATENATED MODULE: ./src/modules/custom-tables-v1/dialog/update.js

function update_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function update_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? update_ownKeys(Object(t), !0).forEach(function (r) { defineProperty_default()(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : update_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }



const {
  dispatch: update_dispatch,
  select: update_select
} = wp.data;

/**
 * Update dialog state.
 *
 * @since 6.0.0
 * @type {object}
 */
const update_state = {
  isSavingPostCheck: false,
  unsubscribe: null
};

/**
 * Handles the click event on the update dialog. This will take the selected
 * option and the current post data (before changes were made) and save it to
 * the event. This information is handled in the BE on save.
 *
 * @since 6.0.0
 */
const handleUpdateDialogConfirmClick = () => {
  const {
    editPost,
    savePost
  } = update_dispatch('core/editor');
  const selectedOption = tec.editorDialog.el.$instance.find('input:checked').val();
  const initialMeta = update_select('core/editor').getCurrentPost();
  tec.editorDialog.closeDialog();
  editPost({
    [UPDATE_TYPE_KEY]: selectedOption,
    [INITIAL_META_KEY]: initialMeta
  });
  savePost();
};

/**
 * Gets the update dialog content settings based on state changes.
 *
 * @since 6.0.0
 * @return {Array} The dialog content settings.
 */
const getUpdateDialogContentSettings = () => {
  const settings = [];
  const startDateChanged = isStartDateDirty();
  const recurrenceRuleChanged = isRecurrenceDirty() || isExceptionsDirty();
  const l10n = window.tecEventsSeriesBlockEditor;

  // Initially allow all types of updates.
  const updateOptions = {
    single: true,
    upcoming: true,
    all: true
  };
  if (startDateChanged && (!tecEventDetails || !tecEventDetails.isRdate)) {
    updateOptions.all = false;
  }
  if (recurrenceRuleChanged) {
    updateOptions.single = false;
  }

  // If UPCOMING is the only one allowed, then use some different wording.
  if (!updateOptions.all && !updateOptions.single) {
    settings.push({
      type: 'text',
      text: l10n.effectThisAndFollowingEventsWarning
    });
    settings.push({
      type: UPCOMING,
      label: l10n.upcomingSetting,
      classes: ['hidden'],
      inputClasses: [],
      labelClasses: [],
      checked: true
    });
    return settings;
  }
  if (updateOptions.single) {
    settings.push({
      type: constants_SINGLE,
      label: getDialogThisEventLabel(),
      labelHelpText: l10n.thisEventHelpText,
      classes: [],
      inputClasses: [],
      labelClasses: [],
      checked: false
    });
  }

  // The UPCOMING update option will always be available.
  settings.push({
    type: UPCOMING,
    label: l10n.upcomingSetting,
    classes: [],
    inputClasses: [],
    labelClasses: [],
    checked: !updateOptions.all
  });
  if (updateOptions.all) {
    settings.push({
      type: ALL,
      label: l10n.allEvents,
      classes: [],
      inputClasses: [],
      labelClasses: [],
      checked: true
    });
  }
  return settings;
};

/**
 * Get the dialog settings for updating a recurring event.
 *
 * @since 6.0.0
 * @return {PlainObject} The dialog settings for updating a recurring event.
 */
const getUpdateDialogSettings = () => update_objectSpread(update_objectSpread({}, tec.editorDialog.defaultDialogSettings), {}, {
  buttons: [{
    class: 'button-primary',
    text: window.tecEventsSeriesBlockEditor.okButton,
    click: handleUpdateDialogConfirmClick
  }]
});

/**
 * Shows the update dialog to the user when trying to save.
 *
 * @since 6.0.0
 * @return {void}
 */
const showUpdatePrompt = () => {
  tec.editorDialog.el.$instance.attr('title', window.tecEventsSeriesBlockEditor.editModalTitle);
  clearDialogContent();
  setDialogContent(getUpdateDialogContentSettings());
  tec.editorDialog.setDialogSettings(getUpdateDialogSettings());
  tec.editorDialog.openDialog();
};

/**
 * Handles the click event on the save button and determins whether to show the
 * update prompt or not.
 *
 * @since 6.0.0
 */
const handleSaveButtonClick = () => {
  const currentPost = update_select('core/editor').getCurrentPost();
  const {
    meta
  } = currentPost;

  // Do not show the dialog if not represented in the custom tables yet.
  if (meta[REQUIRES_FIRST_SAVE_KEY]) {
    return;
  }
  const isRecurring = '' !== meta[RECURRENCE_RULES_META_KEY] && '[]' !== meta[RECURRENCE_RULES_META_KEY];

  // If current post is not recurring, return early.
  if (!isRecurring) {
    return;
  }
  showUpdatePrompt();
};
// CONCATENATED MODULE: ./src/modules/custom-tables-v1/dialog/post-save.js


const {
  dispatch: post_save_dispatch,
  select: post_save_select,
  subscribe: post_save_subscribe
} = wp.data;
const post_save_state = {
  unsubscribe: null
};

/**
 * Determine whether post is saving or not.
 *
 * @since 6.0.0
 * @return {boolean} Whether post is saving or not.
 */
const isSavingPost = () => {
  return post_save_select('core/editor').isSavingPost();
};

/**
 * Determine whether post saving should be locked or not.
 *
 * @since 6.0.0
 * @return {boolean} Whether post saving should be locked or not.
 */
const shouldLockPostSaving = () => {
  const {
    getCurrentPost,
    isEditedPostDirty,
    isEditedPostNew
  } = post_save_select('core/editor');
  const {
    meta
  } = getCurrentPost();

  // Do not lock post saving if event in not represented in the custom tables yet.
  if (meta && meta[REQUIRES_FIRST_SAVE_KEY]) {
    return false;
  }
  const isRecurring = '' !== meta[RECURRENCE_RULES_META_KEY] && '[]' !== meta[RECURRENCE_RULES_META_KEY];

  // If new post, do not lock post saving.
  if (isEditedPostNew()) {
    return false;
  }
  return isEditedPostDirty() && isRecurring;
};

/**
 * Set aria attribute and event listeners of the save button.
 *
 * @since 6.0.0
 */
const setSaveButton = () => {
  const saveButton = document.querySelector('button.editor-post-publish-button');
  if (!saveButton) {
    return;
  }
  saveButton.setAttribute('aria-disabled', 'false');
  saveButton.removeEventListener('click', handleSaveButtonClick);
  saveButton.addEventListener('click', handleSaveButtonClick);
};

/**
 * Unset event listeners of the save button.
 *
 * @since 6.0.0
 */
const unsetSaveButton = () => {
  const saveButton = document.querySelector('button.editor-post-publish-button');
  if (!saveButton) {
    return;
  }
  saveButton.removeEventListener('click', handleSaveButtonClick);
};

/**
 * Sets the state of post saving. If locked, users will not be able to save posts without
 * encountering the update dialog.
 *
 * @since 6.0.0
 */
const setPostSaving = () => {
  // If current post meta is not set yet, return early.
  const {
    meta
  } = post_save_select('core/editor').getCurrentPost();
  if (!meta) {
    return;
  }

  // If saving post, don't do anything, return early.
  if (isSavingPost()) {
    return;
  }

  // Unsubscribe to prevent recursive subscribe calls.
  post_save_state.unsubscribe && post_save_state.unsubscribe();
  const {
    lockPostSaving,
    lockPostAutosaving,
    unlockPostSaving,
    unlockPostAutosaving
  } = post_save_dispatch('core/editor');

  // If should lock post saving, lock, otherwise unlock.
  if (shouldLockPostSaving()) {
    lockPostAutosaving();
    lockPostSaving();
    setSaveButton();
  } else {
    unlockPostSaving();
    unlockPostAutosaving();
    unsetSaveButton();
  }

  // Resubscribe to set post saving.
  post_save_state.unsubscribe = post_save_subscribe(setPostSaving);
};

/**
 * Initialize the dialog for saving recurring events.
 *
 * @since 6.0.0
 */
const post_save_init = () => {
  post_save_state.unsubscribe = post_save_subscribe(setPostSaving);
};
/* harmony default export */ var post_save = (post_save_init);
// CONCATENATED MODULE: ./src/modules/custom-tables-v1/dialog/delete.js

function delete_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function delete_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? delete_ownKeys(Object(t), !0).forEach(function (r) { defineProperty_default()(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : delete_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
/* global tec */
/**
 * External dependencies
 */
const {
  dispatch: delete_dispatch,
  select: delete_select,
  subscribe: delete_subscribe
} = wp.data;

/**
 * Internal dependencies
 */



/**
 * Delete dialog state.
 *
 * @since 6.0.0
 * @type {{deleteButton: null}}
 */
const delete_state = {
  deleteButton: null
};

/**
 * Handles the click event on the delete dialog. This will take the selected option and the
 * current post data (before changes were made) and save it to the event. This information
 * is handled in the BE on save.
 *
 * @since 6.0.0
 */
const handleDeleteDialogConfirmClick = () => {
  const selectedOption = tec.editorDialog.el.$instance.find('input:checked').val();
  delete_dispatch('core/notices').removeNotice(TRASH_POST_NOTICE_ID);
  const postTypeSlug = delete_select('core/editor').getCurrentPostType();
  const postType = delete_select('core').getPostType(postTypeSlug);
  const currentPost = delete_select('core/editor').getCurrentPost();
  wp.apiFetch({
    path: `/wp/v2/${postType.rest_base}/${currentPost.id}?${UPDATE_TYPE_KEY}=${selectedOption}`,
    // eslint-disable-line
    method: 'DELETE'
  }).then(response => {
    window.location.replace(response._tec_redirect_url);
  }).catch(error => {
    console.error(error);
  });
};

/**
 * Gets the delete dialog content settings.
 *
 * @since 6.0.0
 * @return {Array} The dialog content settings.
 */
const getDeleteDialogContentSettings = () => {
  const settings = [];
  const l10n = window.tecEventsSeriesBlockEditor;
  settings.push({
    type: constants_SINGLE,
    label: getDialogThisEventLabel(),
    classes: [],
    inputClasses: [],
    labelClasses: [],
    checked: false
  });
  settings.push({
    type: UPCOMING,
    label: l10n.upcomingSetting,
    classes: [],
    inputClasses: [],
    labelClasses: [],
    checked: false
  });
  settings.push({
    type: ALL,
    label: l10n.allEvents,
    classes: [],
    inputClasses: [],
    labelClasses: [],
    checked: true
  });
  return settings;
};

/**
 * Get the dialog settings for deleting a recurring event.
 *
 * @since 6.0.0
 * @return {{}} The dialog settings for deleting a recurring event.
 */
const getDeleteDialogSettings = () => delete_objectSpread(delete_objectSpread({}, tec.editorDialog.defaultDialogSettings), {}, {
  buttons: [{
    class: 'button-primary',
    text: window.tecEventsSeriesBlockEditor.okButton,
    click: handleDeleteDialogConfirmClick
  }]
});

/**
 * Shows the user a prompt to choose how the delete/trash action should be applied.
 *
 * @since 6.0.0
 * @return {void}
 */
const showDeletePrompt = () => {
  const l10n = window.tecEventsSeriesBlockEditor;
  tec.editorDialog.el.$instance.attr('title', l10n.trashRecurringEvent);
  clearDialogContent();
  setDialogContent(getDeleteDialogContentSettings());
  tec.editorDialog.setDialogSettings(getDeleteDialogSettings());
  tec.editorDialog.openDialog();
};

/**
 * Handles the click event on the delete button and determines whether to show the delete prompt
 * or not.
 *
 * @param {Event} event Event object.
 */
const handleDeleteButtonClick = event => {
  const currentPost = delete_select('core/editor').getCurrentPost();
  const {
    meta
  } = currentPost;
  const isRecurring = '' !== meta[RECURRENCE_RULES_META_KEY] && '[]' !== meta[RECURRENCE_RULES_META_KEY];

  // If current post is not recurring, return early.
  if (!isRecurring) {
    return;
  }

  // Prevent delete button from trashing the event.
  event.preventDefault();
  event.stopPropagation();
  showDeletePrompt();
};

/**
 * Check if trash is available. Trash is available if the edited post is not new,
 * a post ID exists, and the user can delete the post.
 *
 * This is based off of the `PostTrashCheck` component.
 *
 * @see https://github.com/WordPress/gutenberg/blob/trunk/packages/editor/src/components/post-trash/check.js
 * @since 6.0.0
 * @return {boolean}
 */
const isTrashAvailable = () => {
  const {
    isEditedPostNew,
    getCurrentPostId,
    getCurrentPostType
  } = delete_select('core/editor');
  const {
    getPostType,
    canUser
  } = delete_select('core');
  const postId = getCurrentPostId();
  if (!postId) {
    return false;
  }
  const postType = getPostType(getCurrentPostType());
  const resource = postType && postType.rest_base || '';
  const canUserDelete = postId && resource ? canUser('delete', resource, postId) : false;
  return !isEditedPostNew() && postId && canUserDelete;
};

/**
 * Sets the state for the delete dialog.
 *
 * @since 6.0.0
 */
const setState = () => {
  const isSidebarOpen = delete_select('core/edit-post').isEditorSidebarOpened();
  if (isSidebarOpen && (!delete_state.deleteButton || !delete_state.deleteButton.isConnected)) {
    // If sidebar is open and delete button is not cached or is not connected.
    /**
     * Subscribe is not consistent enough to set the event listener reliably,
     * so we are setting an interval until we set the event listener.
     */
    const intervalId = setInterval(() => {
      const deleteButton = document.querySelector('button.editor-post-trash');
      if (!deleteButton) {
        return;
      }
      clearInterval(intervalId);
      delete_state.deleteButton = deleteButton;
      delete_state.deleteButton.addEventListener('click', handleDeleteButtonClick);
    }, 10);
  } else if (!isSidebarOpen && delete_state.deleteButton) {
    delete_state.deleteButton.removeEventListener('click', handleDeleteButtonClick);
    delete_state.deleteButton = null;
  }
};

/**
 * Initialize delete dialog functionality.
 *
 * @since 6.0.0
 */
const delete_init = () => {
  if (isTrashAvailable()) {
    setState();
  }
  delete_subscribe(() => {
    if (!isTrashAvailable()) {
      return;
    }
    setState();
  });
};
/* harmony default export */ var dialog_delete = (delete_init);
// CONCATENATED MODULE: ./src/modules/custom-tables-v1/dialog/index.js




/**
 * Initialize dialog JS.
 *
 * @since 6.0.0
 */
const custom_tables_v1_dialog_init = () => {
  dialog();
  post_save();
  dialog_delete();
};
custom_tables_v1_dialog_init();
// EXTERNAL MODULE: external "tribe.modules.classnames"
var external_tribe_modules_classnames_ = __webpack_require__("K2gz");
var external_tribe_modules_classnames_default = /*#__PURE__*/__webpack_require__.n(external_tribe_modules_classnames_);

// EXTERNAL MODULE: external "tribe.common.elements"
var external_tribe_common_elements_ = __webpack_require__("6Ugf");

// EXTERNAL MODULE: external "tribe[\"events-pro\"].data.blocks"
var external_tribe_events_pro_data_blocks_ = __webpack_require__("PSCs");

// CONCATENATED MODULE: ./src/modules/custom-tables-v1/elements/hooks/day-of-week/index.js
/**
 * External dependencies
 */


/**
 * Internal dependencies
 */









const {
  addFilter
} = wp.hooks;
const day_of_week_recurrenceStrings = Object(external_tribe_common_utils_globals_["get"])('tribe_events_pro_recurrence_strings');
const {
  lockIconTooltip
} = day_of_week_recurrenceStrings.customTablesV1.recurrence;
const filterDayOfWeekContent = (content, props) => {
  var _tecEventDetails;
  const {
    blockType,
    checked,
    className,
    disabled,
    id,
    index,
    labelComponent,
    onChange,
    value
  } = props;
  const state = external_tribe_common_store_["store"].getState();
  const isExceptionRule = blockType !== external_tribe_events_pro_data_blocks_["constants"].RECURRING;
  const selectors = !isExceptionRule ? recurring_selectors_namespaceObject : exception_selectors_namespaceObject;
  const isCustom = selectors.isRuleTypeCustom(state, {
    index
  });
  const startMoment = Object(external_tribe_common_utils_moment_["toMoment"])(Object(external_tribe_events_data_blocks_datetime_selectors_["getStart"])(state));
  const weekday = getWeekdayName(startMoment);
  const isRdate = typeof tecEventDetails !== 'undefined' && !((_tecEventDetails = tecEventDetails) !== null && _tecEventDetails !== void 0 && _tecEventDetails.isRdate);
  const showLockIcon = isRdate && !isExceptionRule && !isCustom && weekday.toLowerCase() === value;
  return wp.element.createElement("div", {
    className: external_tribe_modules_classnames_default()('tribe-editor__day-of-week', className)
  }, wp.element.createElement(external_tribe_common_elements_["Checkbox"], {
    checked: checked,
    disabled: disabled,
    id: id,
    label: labelComponent,
    onChange: onChange,
    value: value
  }), showLockIcon && wp.element.createElement("span", {
    className: "tribe-editor__day-of-week__lock dashicons dashicons-lock",
    title: lockIconTooltip
  }));
};
const day_of_week_hook = () => {
  addFilter('elements.dayOfWeek.dayOfWeekContentHook', 'tec/filterDayOfWeekContent', filterDayOfWeekContent);
};
/* harmony default export */ var day_of_week = (day_of_week_hook);
// CONCATENATED MODULE: ./src/modules/custom-tables-v1/elements/hooks/exception-field/singular.js
const {
  addFilter: singular_addFilter
} = wp.hooks;
const {
  __: singular_
} = wp.i18n;
const singular_hook = () => {
  singular_addFilter('elements.exceptionField.singularTypePickerRowLabelHook', 'tec/filterSingularTypePickerRowLabelHook', () => singular_('Not', 'tribe-events-calendar-pro'));
};
/* harmony default export */ var singular = (singular_hook);
// EXTERNAL MODULE: external "tribe[\"events-pro\"].elements"
var external_tribe_events_pro_elements_ = __webpack_require__("8N8N");

// EXTERNAL MODULE: external "tribe.modules.reactRedux"
var external_tribe_modules_reactRedux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: external "tribe.modules.propTypes"
var external_tribe_modules_propTypes_ = __webpack_require__("rf6O");
var external_tribe_modules_propTypes_default = /*#__PURE__*/__webpack_require__.n(external_tribe_modules_propTypes_);

// CONCATENATED MODULE: ./src/modules/custom-tables-v1/elements/every-frequency/template.js
/**
 * External dependencies
 */




/**
 * Internal dependencies
 */



const {
  __: template_
} = wp.i18n;
const EveryFrequency = ({
  afterLabel,
  blockType,
  className,
  disabled,
  index,
  selected
}) => {
  return wp.element.createElement(external_tribe_events_pro_elements_["LabeledRow"], {
    className: external_tribe_modules_classnames_default()('tribe-editor__every-frequency', className),
    label: template_('Every', 'tribe-events-calendar-pro')
  }, wp.element.createElement(external_tribe_events_pro_elements_["FrequencySelect"], {
    blockType: blockType,
    disabled: disabled,
    index: index,
    selected: selected
  }), wp.element.createElement("span", {
    className: "tribe-editor__after-every-frequency"
  }, afterLabel));
};
EveryFrequency.propTypes = {
  afterLabel: external_tribe_modules_propTypes_default.a.string.isRequired,
  blockType: external_tribe_modules_propTypes_default.a.oneOf(external_tribe_events_pro_data_blocks_constants_["BLOCK_TYPES"]),
  className: external_tribe_modules_propTypes_default.a.string,
  disabled: external_tribe_modules_propTypes_default.a.bool,
  index: external_tribe_modules_propTypes_default.a.number.isRequired,
  selected: external_tribe_common_data_plugins_["proptypes"].ReactSelectOption.isRequired
};
/* harmony default export */ var template = (EveryFrequency);
// EXTERNAL MODULE: external "tribe.common.hoc"
var external_tribe_common_hoc_ = __webpack_require__("Q9xL");

// CONCATENATED MODULE: ./src/modules/custom-tables-v1/elements/every-frequency/element.js
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */







const {
  RECURRING
} = external_tribe_events_pro_data_blocks_constants_;
const {
  DAILY: element_DAILY,
  WEEKLY: element_WEEKLY,
  MONTHLY: element_MONTHLY,
  YEARLY: element_YEARLY
} = external_tribe_events_pro_data_blocks_recurring_constants_;
const {
  DAY_LABEL: element_DAY_LABEL,
  WEEK_LABEL: element_WEEK_LABEL,
  MONTH_LABEL: element_MONTH_LABEL,
  YEAR_LABEL: element_YEAR_LABEL,
  DAY_LABEL_PLURAL: element_DAY_LABEL_PLURAL,
  WEEK_LABEL_PLURAL: element_WEEK_LABEL_PLURAL,
  MONTH_LABEL_PLURAL: element_MONTH_LABEL_PLURAL,
  YEAR_LABEL_PLURAL: element_YEAR_LABEL_PLURAL
} = shared_constants_namespaceObject;
const getSelected = (state, ownProps) => {
  const selectors = ownProps.blockType === RECURRING ? external_tribe_events_pro_data_blocks_recurring_selectors_ : external_tribe_events_pro_data_blocks_exception_selectors_;
  return selectors.getTypeOption(state, ownProps);
};
const getFrequency = (state, ownProps) => {
  const selectors = ownProps.blockType === RECURRING ? external_tribe_events_pro_data_blocks_recurring_selectors_ : external_tribe_events_pro_data_blocks_exception_selectors_;
  return selectors.getBetween(state, ownProps);
};
const getAfterLabel = (state, ownProps) => {
  const frequency = getFrequency(state, ownProps);
  const isPlural = frequency > 1;
  let label = '';
  switch (ownProps.selected.value) {
    case element_DAILY:
      label = isPlural ? element_DAY_LABEL_PLURAL : element_DAY_LABEL;
      break;
    case element_WEEKLY:
      label = isPlural ? element_WEEK_LABEL_PLURAL : element_WEEK_LABEL;
      break;
    case element_MONTHLY:
      label = isPlural ? element_MONTH_LABEL_PLURAL : element_MONTH_LABEL;
      break;
    case element_YEARLY:
      label = isPlural ? element_YEAR_LABEL_PLURAL : element_YEAR_LABEL;
      break;
    default:
      break;
  }
  return label;
};
const mapStateToProps = (state, ownProps) => {
  return {
    afterLabel: getAfterLabel(state, ownProps),
    selected: getSelected(state, ownProps)
  };
};
/* harmony default export */ var every_frequency_element = (Object(external_tribe_modules_redux_["compose"])(Object(external_tribe_common_hoc_["withStore"])(), Object(external_tribe_modules_reactRedux_["connect"])(mapStateToProps))(template));
// CONCATENATED MODULE: ./src/modules/custom-tables-v1/elements/every-frequency/index.js
/**
 * Internal dependencies
 */

/* harmony default export */ var every_frequency = (every_frequency_element);
// EXTERNAL MODULE: external "wp.i18n"
var external_wp_i18n_ = __webpack_require__("l3Sj");

// EXTERNAL MODULE: ./src/modules/custom-tables-v1/elements/day-of-month-picker/style.pcss
var day_of_month_picker_style = __webpack_require__("644Q");

// CONCATENATED MODULE: ./src/modules/custom-tables-v1/elements/day-of-month-picker/template.js
/**
 * External dependencies
 */




/**
 * Internal dependencies
 */



const DayOfMonthPicker = ({
  className,
  isCustom,
  onChange,
  options,
  value
}) => {
  return wp.element.createElement("div", {
    className: external_tribe_modules_classnames_default()('tribe-editor__day-of-month-picker', className)
  }, wp.element.createElement(external_tribe_common_elements_["Select"], {
    className: "tribe-editor__day-of-month-picker__day-of-month-select",
    backspaceRemovesValue: false,
    value: value,
    isDisabled: isCustom,
    isSearchable: false,
    options: options,
    onChange: onChange
  }));
};
DayOfMonthPicker.propTypes = {
  className: external_tribe_modules_propTypes_default.a.string,
  isCustom: external_tribe_modules_propTypes_default.a.bool,
  onChange: external_tribe_modules_propTypes_default.a.func,
  options: external_tribe_modules_propTypes_default.a.arrayOf(external_tribe_common_data_plugins_["proptypes"].ReactSelectOption).isRequired,
  value: external_tribe_common_data_plugins_["proptypes"].ReactSelectOptions.isRequired
};
/* harmony default export */ var day_of_month_picker_template = (DayOfMonthPicker);
// EXTERNAL MODULE: external "tribe[\"events-pro\"].data.blocks.recurring"
var external_tribe_events_pro_data_blocks_recurring_ = __webpack_require__("JXX8");

// EXTERNAL MODULE: external "tribe[\"events-pro\"].data.blocks.exception"
var external_tribe_events_pro_data_blocks_exception_ = __webpack_require__("Rkpb");

// CONCATENATED MODULE: ./src/modules/custom-tables-v1/elements/day-of-month-picker/element.js

/**
 * External dependencies
 */


/**
 * Internal dependencies
 */







const element_mapStateToProps = (state, ownProps) => {
  var _tecEventDetails;
  const proSelectors = ownProps.blockType === external_tribe_events_pro_data_blocks_["constants"].RECURRING ? external_tribe_events_pro_data_blocks_recurring_["selectors"] : external_tribe_events_pro_data_blocks_exception_["selectors"];
  const week = proSelectors.getWeek(state, ownProps);
  const day = proSelectors.getDay(state, ownProps);
  const optionValue = mapStateToOptionValue({
    week,
    day
  });
  const isRdate = typeof tecEventDetails !== 'undefined' && ((_tecEventDetails = tecEventDetails) === null || _tecEventDetails === void 0 ? void 0 : _tecEventDetails.isRdate);
  const options = ownProps.isCustom || isRdate ? getCustomDayOfMonthOptions(optionValue) : shared_selectors_namespaceObject.getDayOfMonthOptions(state, ownProps);
  let value = external_lodash_find_default()(options, option => optionValue === option.value);
  // No value found in the option set, then use the first option.
  value = !value && options.length > 0 ? options[0] : value;
  return {
    options,
    value
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onChange: selectedOption => {
      const edit = ownProps.blockType === external_tribe_events_pro_data_blocks_["constants"].RECURRING ? external_tribe_events_pro_data_blocks_recurring_["actions"].editRule : external_tribe_events_pro_data_blocks_exception_["actions"].editException;
      const ruleUpdates = mapOptionValueToState(selectedOption.value);
      dispatch(edit(ownProps.index, ruleUpdates));
    }
  };
};
/* harmony default export */ var day_of_month_picker_element = (Object(external_tribe_modules_redux_["compose"])(Object(external_tribe_common_hoc_["withStore"])(), Object(external_tribe_modules_reactRedux_["connect"])(element_mapStateToProps, mapDispatchToProps))(day_of_month_picker_template));
// CONCATENATED MODULE: ./src/modules/custom-tables-v1/elements/day-of-month-picker/index.js
/**
 * Internal dependencies
 */

/* harmony default export */ var day_of_month_picker = (day_of_month_picker_element);
// CONCATENATED MODULE: ./src/modules/custom-tables-v1/elements/on-day-of-month-picker/element.js
/**
 * External dependencies
 */





/**
 * Internal dependencies
 */



const OnDayOfMonthPicker = ({
  blockType,
  className,
  index,
  isCustom
}) => wp.element.createElement(external_tribe_events_pro_elements_["LabeledRow"], {
  className: external_tribe_modules_classnames_default()('tribe-editor__on-day-of-month-picker', className),
  label: Object(external_wp_i18n_["__"])('On the', 'tribe-events-calendar-pro')
}, wp.element.createElement(day_of_month_picker, {
  blockType: blockType,
  isCustom: isCustom,
  index: index
}));
OnDayOfMonthPicker.propTypes = {
  blockType: external_tribe_modules_propTypes_default.a.oneOf(external_tribe_events_pro_data_blocks_constants_["BLOCK_TYPES"]),
  className: external_tribe_modules_propTypes_default.a.string,
  index: external_tribe_modules_propTypes_default.a.number.isRequired,
  isCustom: external_tribe_modules_propTypes_default.a.bool
};
/* harmony default export */ var on_day_of_month_picker_element = (OnDayOfMonthPicker);
// CONCATENATED MODULE: ./src/modules/custom-tables-v1/elements/on-day-of-month-picker/index.js
/**
 * Internal dependencies
 */

/* harmony default export */ var on_day_of_month_picker = (on_day_of_month_picker_element);
// CONCATENATED MODULE: ./src/modules/custom-tables-v1/elements/hooks/rule-field-utils.js
/**
 * Internal depenencies
 */







const filterAfterTypePicker = (content, props) => {
  const {
    blockType,
    index
  } = props;
  const state = external_tribe_common_store_["store"].getState();
  const selectors = blockType === external_tribe_events_pro_data_blocks_constants_["RECURRING"] ? recurring_selectors_namespaceObject : exception_selectors_namespaceObject;
  const selected = selectors.getTypeOption(state, {
    index
  });
  const isCustom = selectors.isRuleTypeCustom(state, {
    index
  });
  return wp.element.createElement(every_frequency, {
    blockType: blockType,
    disabled: isCustom,
    index: index,
    selected: selected
  });
};
const filterOnDayOfWeek = (content, props) => {
  const {
    blockType,
    index
  } = props;
  const selectors = blockType === external_tribe_events_pro_data_blocks_constants_["RECURRING"] ? recurring_selectors_namespaceObject : exception_selectors_namespaceObject;
  const isCustom = selectors.isRuleTypeCustom(external_tribe_common_store_["store"].getState(), {
    index
  });
  return wp.element.createElement(external_tribe_events_pro_elements_["OnDayOfWeek"], {
    blockType: blockType,
    sundayDisabled: isCustom,
    mondayDisabled: isCustom,
    tuesdayDisabled: isCustom,
    wednesdayDisabled: isCustom,
    thursdayDisabled: isCustom,
    fridayDisabled: isCustom,
    saturdayDisabled: isCustom,
    index: index
  });
};
const filterOnDayOfMonthPicker = (content, props) => {
  const {
    blockType,
    index
  } = props;
  const selectors = blockType === external_tribe_events_pro_data_blocks_constants_["RECURRING"] ? recurring_selectors_namespaceObject : exception_selectors_namespaceObject;
  const isCustom = selectors.isRuleTypeCustom(external_tribe_common_store_["store"].getState(), {
    index
  });
  return wp.element.createElement(on_day_of_month_picker, {
    blockType: blockType,
    isCustom: isCustom,
    index: index
  });
};
const filterInMonth = (content, props) => {
  const {
    blockType,
    index
  } = props;
  const selectors = blockType === external_tribe_events_pro_data_blocks_constants_["RECURRING"] ? recurring_selectors_namespaceObject : exception_selectors_namespaceObject;
  const isCustom = selectors.isRuleTypeCustom(external_tribe_common_store_["store"].getState(), {
    index
  });
  return wp.element.createElement(external_tribe_events_pro_elements_["InMonth"], {
    blockType: blockType,
    disabled: isCustom,
    index: index
  });
};
const filterSeriesEnds = (content, props) => {
  const {
    blockType,
    index
  } = props;
  const selectors = blockType === external_tribe_events_pro_data_blocks_constants_["RECURRING"] ? recurring_selectors_namespaceObject : exception_selectors_namespaceObject;
  const isCustom = selectors.isRuleTypeCustom(external_tribe_common_store_["store"].getState(), {
    index
  });
  return wp.element.createElement(external_tribe_events_pro_elements_["SeriesEnds"], {
    blockType: blockType,
    dayPickerInputDisabled: isCustom,
    numberInputDisabled: isCustom,
    selectDisabled: isCustom,
    index: index
  });
};
// CONCATENATED MODULE: ./src/modules/custom-tables-v1/elements/hooks/exception-field/daily.js
/**
 * Internal depenencies
 */

const {
  addFilter: daily_addFilter
} = wp.hooks;
const {
  __: daily_
} = wp.i18n;
const daily_hook = () => {
  daily_addFilter('elements.exceptionField.dailyTypePickerRowLabelHook', 'tec/filterDailyTypePickerRowLabelHook', () => daily_('Not', 'tribe-events-calendar-pro'));
  daily_addFilter('elements.exceptionField.dailyAfterTypePickerHook', 'tec/filterDailyAfterTypePicker', filterAfterTypePicker);
  daily_addFilter('elements.exceptionField.dailySeriesEndsRowLabelHook', 'tec/filterDailySeriesEndsRowLabel', () => undefined // Use default label on Series Ends element.
  );
};
/* harmony default export */ var daily = (daily_hook);
// CONCATENATED MODULE: ./src/modules/custom-tables-v1/elements/hooks/exception-field/weekly.js
/**
 * External dependencies
 */

/**
 * Internal depenencies
 */

const {
  addFilter: weekly_addFilter
} = wp.hooks;
const {
  __: weekly_
} = wp.i18n;
const weekly_hook = () => {
  weekly_addFilter('elements.exceptionField.weeklyTypePickerRowLabelHook', 'tec/filterWeeklyTypePickerRowLabelHook', () => weekly_('Not', 'tribe-events-calendar-pro'));
  weekly_addFilter('elements.exceptionField.weeklyAfterTypePickerHook', 'tec/filterWeeklyAfterTypePicker', filterAfterTypePicker);
  weekly_addFilter('elements.exceptionField.weeklyOnDayOfWeekHook', 'tec/filterWeeklyOnDayOfWeek', filterOnDayOfWeek);
  weekly_addFilter('elements.exceptionField.weeklySeriesEndsHook', 'tec/filterWeeklySeriesEnds', filterSeriesEnds);
};
/* harmony default export */ var weekly = (weekly_hook);
// CONCATENATED MODULE: ./src/modules/custom-tables-v1/elements/hooks/exception-field/monthly.js
/**
 * Internal depenencies
 */

const {
  addFilter: monthly_addFilter
} = wp.hooks;
const {
  __: monthly_
} = wp.i18n;
const monthly_hook = () => {
  monthly_addFilter('elements.exceptionField.monthlyTypePickerRowLabelHook', 'tec/filterMonthlyTypePickerRowLabelHook', () => monthly_('Not', 'tribe-events-calendar-pro'));
  monthly_addFilter('elements.exceptionField.monthlyAfterTypePickerHook', 'tec/filterMonthlyAfterTypePicker', filterAfterTypePicker);
  monthly_addFilter('elements.exceptionField.monthlySeriesEndsHook', 'tec/filterMonthlySeriesEnds', filterSeriesEnds);
};
/* harmony default export */ var monthly = (monthly_hook);
// CONCATENATED MODULE: ./src/modules/custom-tables-v1/elements/hooks/exception-field/yearly.js
/**
 * Internal depenencies
 */

const {
  addFilter: yearly_addFilter
} = wp.hooks;
const {
  __: yearly_
} = wp.i18n;
const yearly_hook = () => {
  yearly_addFilter('elements.exceptionField.yearlyTypePickerRowLabelHook', 'tec/filterYearlyTypePickerRowLabelHook', () => yearly_('Not', 'tribe-events-calendar-pro'));
  yearly_addFilter('elements.exceptionField.yearlyAfterTypePickerHook', 'tec/filterYearlyAfterTypePicker', filterAfterTypePicker);
  yearly_addFilter('elements.exceptionField.yearlyInMonthHook', 'tec/filterYearlyInMonth', filterInMonth);
  yearly_addFilter('elements.exceptionField.yearlySeriesEndsHook', 'tec/filterYearlySeriesEnds', filterSeriesEnds);
};
/* harmony default export */ var yearly = (yearly_hook);
// CONCATENATED MODULE: ./src/modules/custom-tables-v1/elements/hooks/exception-field/index.js
/**
 * Internal dependencies.
 */





const exception_field_hook = () => {
  singular();
  daily();
  weekly();
  monthly();
  yearly();
};
/* harmony default export */ var exception_field = (exception_field_hook);
// CONCATENATED MODULE: ./src/modules/custom-tables-v1/elements/hooks/exception-form/index.js
/**
 * Internal dependencies
 */

const {
  addFilter: exception_form_addFilter
} = wp.hooks;
const filterExceptionFieldOptions = (options, state, index) => exception_selectors_namespaceObject.getExceptionRuleTypes(state, {
  index
});
const exception_form_hook = () => {
  exception_form_addFilter('elements.exceptionForm.exceptionFieldOptionsHook', 'tec/filterExceptionFieldOptions', filterExceptionFieldOptions);
};
/* harmony default export */ var exception_form = (exception_form_hook);
// EXTERNAL MODULE: external "tribe.common.icons"
var external_tribe_common_icons_ = __webpack_require__("GE2E");

// CONCATENATED MODULE: ./src/modules/custom-tables-v1/elements/hooks/month-tag/index.js
/**
 * External dependencies
 */




/**
 * Internal dependencies
 */









const {
  addFilter: month_tag_addFilter
} = wp.hooks;
const month_tag_recurrenceStrings = Object(external_tribe_common_utils_globals_["get"])('tribe_events_pro_recurrence_strings');
const {
  lockIconTooltip: month_tag_lockIconTooltip
} = month_tag_recurrenceStrings.customTablesV1.recurrence;
const filterMonthTagContent = (content, props) => {
  const {
    blockType,
    children,
    className,
    disabled,
    index,
    onClick,
    value
  } = props;
  const isRecurringRule = blockType === external_tribe_events_pro_data_blocks_["constants"].RECURRING;
  const state = external_tribe_common_store_["store"].getState();
  const selectors = isRecurringRule ? recurring_selectors_namespaceObject : exception_selectors_namespaceObject;
  const isCustom = selectors.isRuleTypeCustom(state, {
    index
  });
  const startMoment = Object(external_tribe_common_utils_moment_["toMoment"])(Object(external_tribe_events_data_blocks_datetime_selectors_["getStart"])(state));
  const month = startMoment.month() + 1;
  const iconNode = Object(external_React_["useMemo"])(() => {
    if (!isRecurringRule || isCustom || month !== external_tribe_events_pro_data_blocks_recurring_constants_["MONTHS_OF_THE_YEAR_MAPPING_TO_STATE"][value]) {
      return wp.element.createElement(external_React_["Fragment"], null, wp.element.createElement(external_tribe_common_icons_["Close"], null), wp.element.createElement("span", {
        className: "tribe-editor__month-tag__remove"
      }, Object(external_wp_i18n_["__"])('Remove', 'tribe-events-calendar-pro')));
    }
    return wp.element.createElement("span", {
      className: "tribe-editor__month-tag__lock dashicons dashicons-lock",
      title: month_tag_lockIconTooltip
    });
  }, [isRecurringRule, isCustom, month, value]);
  return wp.element.createElement("button", {
    className: external_tribe_modules_classnames_default()({
      'tribe-editor__month-tag': true,
      'tribe-editor__month-tag--disabled': disabled
    }, className),
    disabled: disabled,
    onClick: onClick
  }, iconNode, children);
};
const month_tag_hook = () => {
  month_tag_addFilter('elements.monthTag.monthTagContentHook', 'tec/filterMonthTagContent', filterMonthTagContent);
};
/* harmony default export */ var month_tag = (month_tag_hook);
// CONCATENATED MODULE: ./src/modules/custom-tables-v1/elements/hooks/recurring-field/singular.js
const {
  addFilter: recurring_field_singular_addFilter
} = wp.hooks;
const {
  __: recurring_field_singular_
} = wp.i18n;
const recurring_field_singular_hook = () => {
  recurring_field_singular_addFilter('elements.recurringField.singularTypePickerRowLabelHook', 'tec/filterSingularTypePickerRowLabelHook', () => recurring_field_singular_('Happens', 'tribe-events-calendar-pro'));
};
/* harmony default export */ var recurring_field_singular = (recurring_field_singular_hook);
// CONCATENATED MODULE: ./src/modules/custom-tables-v1/elements/hooks/recurring-field/daily.js
/**
 * Internal depenencies
 */

const {
  addFilter: recurring_field_daily_addFilter
} = wp.hooks;
const {
  __: recurring_field_daily_
} = wp.i18n;
const recurring_field_daily_hook = () => {
  recurring_field_daily_addFilter('elements.recurringField.dailyFromTimeRangePickerHook', 'tec/filterDailyFromTimeRangePicker', () => null // Do not show FromTimeRangePicker on daily recurrence type.
  );
  recurring_field_daily_addFilter('elements.recurringField.dailyRecurringToDateTimePickerHook', 'tec/filterDailyFromTimeRangePicker', () => null // Do not show RecurringToDateTimePicker on daily recurrence type.
  );
  recurring_field_daily_addFilter('elements.recurringField.dailyTypePickerRowLabelHook', 'tec/filterDailyTypePickerRowLabelHook', () => recurring_field_daily_('Happens', 'tribe-events-calendar-pro'));
  recurring_field_daily_addFilter('elements.recurringField.dailyAfterTypePickerHook', 'tec/filterDailyAfterTypePicker', filterAfterTypePicker);
};
/* harmony default export */ var recurring_field_daily = (recurring_field_daily_hook);
// CONCATENATED MODULE: ./src/modules/custom-tables-v1/elements/hooks/recurring-field/weekly.js
/**
 * Internal depenencies
 */

const {
  addFilter: recurring_field_weekly_addFilter
} = wp.hooks;
const {
  __: recurring_field_weekly_
} = wp.i18n;
const recurring_field_weekly_hook = () => {
  recurring_field_weekly_addFilter('elements.recurringField.weeklyFromTimeRangePickerHook', 'tec/filterWeeklyFromTimeRangePicker', () => null // Do not show FromTimeRangePicker on weekly recurrence type.
  );
  recurring_field_weekly_addFilter('elements.recurringField.weeklyRecurringToDateTimePickerHook', 'tec/filterWeeklyFromTimeRangePicker', () => null // Do not show RecurringToDateTimePicker on weekly recurrence type.
  );
  recurring_field_weekly_addFilter('elements.recurringField.weeklyTypePickerRowLabelHook', 'tec/filterWeeklyTypePickerRowLabelHook', () => recurring_field_weekly_('Happens', 'tribe-events-calendar-pro'));
  recurring_field_weekly_addFilter('elements.recurringField.weeklyAfterTypePickerHook', 'tec/filterWeeklyAfterTypePicker', filterAfterTypePicker);
  recurring_field_weekly_addFilter('elements.recurringField.weeklyOnDayOfWeekHook', 'tec/filterWeeklyOnDayOfWeek', filterOnDayOfWeek);
  recurring_field_weekly_addFilter('elements.recurringField.weeklySeriesEndsHook', 'tec/filterWeeklySeriesEnds', filterSeriesEnds);
};
/* harmony default export */ var recurring_field_weekly = (recurring_field_weekly_hook);
// CONCATENATED MODULE: ./src/modules/custom-tables-v1/elements/hooks/recurring-field/monthly.js
/**
 * Internal depenencies
 */

const {
  addFilter: recurring_field_monthly_addFilter
} = wp.hooks;
const {
  __: recurring_field_monthly_
} = wp.i18n;
const recurring_field_monthly_hook = () => {
  recurring_field_monthly_addFilter('elements.recurringField.monthlyFromTimeRangePickerHook', 'tec/filterMonthlyFromTimeRangePicker', () => null // Do not show FromTimeRangePicker on monthly recurrence type.
  );
  recurring_field_monthly_addFilter('elements.recurringField.monthlyRecurringToDateTimePickerHook', 'tec/filterMonthlyFromTimeRangePicker', () => null // Do not show RecurringToDateTimePicker on monthly recurrence type.
  );
  recurring_field_monthly_addFilter('elements.recurringField.monthlyTypePickerRowLabelHook', 'tec/filterMonthlyTypePickerRowLabelHook', () => recurring_field_monthly_('Happens', 'tribe-events-calendar-pro'));
  recurring_field_monthly_addFilter('elements.recurringField.monthlyAfterTypePickerHook', 'tec/filterMonthlyAfterTypePicker', filterAfterTypePicker);
  recurring_field_monthly_addFilter('elements.recurringField.monthlyOnDayOfMonthPickerHook', 'tec/filterMonthlyOnDayOfMonthPicker', filterOnDayOfMonthPicker);
  recurring_field_monthly_addFilter('elements.recurringField.monthlySeriesEndsHook', 'tec/filterMonthlySeriesEnds', filterSeriesEnds);
};
/* harmony default export */ var recurring_field_monthly = (recurring_field_monthly_hook);
// CONCATENATED MODULE: ./src/modules/custom-tables-v1/elements/hooks/recurring-field/yearly.js
/**
 * Internal depenencies
 */

const {
  addFilter: recurring_field_yearly_addFilter
} = wp.hooks;
const {
  __: recurring_field_yearly_
} = wp.i18n;
const recurring_field_yearly_hook = () => {
  recurring_field_yearly_addFilter('elements.recurringField.yearlyFromTimeRangePickerHook', 'tec/filterYearlyFromTimeRangePicker', () => null // Do not show FromTimeRangePicker on yearly recurrence type.
  );
  recurring_field_yearly_addFilter('elements.recurringField.yearlyRecurringToDateTimePickerHook', 'tec/filterYearlyFromTimeRangePicker', () => null // Do not show RecurringToDateTimePicker on yearly recurrence type.
  );
  recurring_field_yearly_addFilter('elements.recurringField.yearlyTypePickerRowLabelHook', 'tec/filterYearlyTypePickerRowLabelHook', () => recurring_field_yearly_('Happens', 'tribe-events-calendar-pro'));
  recurring_field_yearly_addFilter('elements.recurringField.yearlyAfterTypePickerHook', 'tec/filterYearlyAfterTypePicker', filterAfterTypePicker);
  recurring_field_yearly_addFilter('elements.recurringField.yearlyInMonthHook', 'tec/filterYearlyInMonth', filterInMonth);
  recurring_field_yearly_addFilter('elements.recurringField.yearlyOnDayOfMonthPickerHook', 'tec/filterYearlyOnDayOfMonthPicker', filterOnDayOfMonthPicker);
  recurring_field_yearly_addFilter('elements.recurringField.yearlySeriesEndsHook', 'tec/filterYearlySeriesEnds', filterSeriesEnds);
};
/* harmony default export */ var recurring_field_yearly = (recurring_field_yearly_hook);
// CONCATENATED MODULE: ./src/modules/custom-tables-v1/elements/hooks/recurring-field/index.js
/**
 * Internal dependencies.
 */





const recurring_field_hook = () => {
  recurring_field_singular();
  recurring_field_daily();
  recurring_field_weekly();
  recurring_field_monthly();
  recurring_field_yearly();
};
/* harmony default export */ var recurring_field = (recurring_field_hook);
// CONCATENATED MODULE: ./src/modules/custom-tables-v1/elements/hooks/recurring-form/index.js
/**
 * Internal dependencies
 */

const {
  __: recurring_form_,
  sprintf
} = wp.i18n;
const {
  addFilter: recurring_form_addFilter
} = wp.hooks;
const filterRecurringFieldOptions = (options, state, index) => recurring_selectors_namespaceObject.getRecurrenceRuleTypes(state, {
  index
});
const recurring_form_hook = () => {
  var _tecEventDetails;
  recurring_form_addFilter('elements.recurringForm.recurringFieldOptionsHook', 'tec/filterRecurringFieldOptions', filterRecurringFieldOptions);
  if (typeof tecEventDetails !== 'undefined' && (_tecEventDetails = tecEventDetails) !== null && _tecEventDetails !== void 0 && _tecEventDetails.isRdateNoticeParts) {
    recurring_form_addFilter('elements.recurringForm.outputBeforeRecurringForm', 'tec/filterRecurringForm', output => {
      const {
        name,
        url
      } = tecEventDetails.isRdateNoticeParts;
      const __html = sprintf(recurring_form_('This is a single occurrence. To change recurrence rules, go to %1$s.', 'tribe-events-calendar-pro'), `<a href=${url}>${name}</a>`);
      return wp.element.createElement("div", null, wp.element.createElement("p", {
        dangerouslySetInnerHTML: {
          __html
        }
      }));
    });
  }
};
/* harmony default export */ var recurring_form = (recurring_form_hook);
// CONCATENATED MODULE: ./src/modules/custom-tables-v1/elements/hooks/type-picker/index.js
/**
 * External dependencies.
 */


/**
 * Internal dependencies.
 */






const {
  Tooltip
} = wp.components;
const {
  addFilter: type_picker_addFilter
} = wp.hooks;
const {
  __: type_picker_
} = wp.i18n;
const filterTypePickerContent = (content, props) => {
  const {
    afterSelect,
    blockType,
    dispatch,
    index,
    options,
    selected
  } = props;
  const isRecurring = blockType === external_tribe_events_pro_data_blocks_["constants"].RECURRING;
  const proEdit = isRecurring ? external_tribe_events_pro_data_blocks_recurring_["actions"].editRule : external_tribe_events_pro_data_blocks_exception_["actions"].editException;
  const edit = isRecurring ? recurring_actions_namespaceObject.editRecurrenceRule : exception_actions_namespaceObject.editExceptionRule;
  const getOptionValue = option => option.id;
  const onChange = selectedOption => {
    dispatch(edit(index, {
      typeId: selectedOption.id
    }));
    dispatch(proEdit(index, {
      [external_tribe_events_pro_data_blocks_["constants"].KEY_TYPE]: selectedOption.value
    }));
  };
  return wp.element.createElement(external_React_["Fragment"], null, wp.element.createElement(external_tribe_common_elements_["Select"], {
    className: "tribe-editor__type-picker__type-select",
    backspaceRemovesValue: false,
    value: selected,
    isSearchable: false,
    options: options,
    onChange: onChange,
    getOptionValue: getOptionValue
  }), afterSelect);
};
const filterTypePickerSelectedOption = (selected, state, ownProps) => {
  const selectors = ownProps.blockType === external_tribe_events_pro_data_blocks_["constants"].RECURRING ? recurring_selectors_namespaceObject : exception_selectors_namespaceObject;
  return selectors.getTypeOption(state, ownProps);
};
const filterAfterTypePickerSelect = (content, state, ownProps) => {
  const {
    blockType,
    index
  } = ownProps;
  if (blockType === external_tribe_events_pro_data_blocks_["constants"].EXCEPTION) {
    return content;
  }
  const isCustom = recurring_selectors_namespaceObject.isRuleTypeCustom(state, {
    index
  });
  if (!isCustom) {
    return content;
  }
  const text = type_picker_('This custom recurrence rule was created in a different calendar system\n\r and cannot be edited. Select a different option to create a new rule.', 'tribe-events-calendar-pro');
  return wp.element.createElement(Tooltip, {
    text: text
  }, wp.element.createElement("span", {
    "aria-label": text,
    className: "tribe-editor__type-picker__type-select-after-tooltip dashicons dashicons-info",
    tabIndex: "0"
  }));
};
const type_picker_hook = () => {
  type_picker_addFilter('elements.typePicker.typePickerContentHook', 'tec/filterTypePickerContent', filterTypePickerContent);
  type_picker_addFilter('elements.typePicker.typePickerSelectedOptionHook', 'tec/filterTypePickerSelectedOption', filterTypePickerSelectedOption);
  type_picker_addFilter('elements.typePicker.afterTypePickerSelectHook', 'tec/filterAfterTypePickerSelect', filterAfterTypePickerSelect);
};
/* harmony default export */ var type_picker = (type_picker_hook);
// EXTERNAL MODULE: ./src/modules/custom-tables-v1/elements/hooks/style.pcss
var hooks_style = __webpack_require__("Ixdi");

// CONCATENATED MODULE: ./src/modules/custom-tables-v1/elements/hooks/index.js
/**
 * Internal dependencies
 */









/**
 * Hook element JS.
 *
 * @since 6.0.0
 */
const elements_hooks_hook = () => {
  day_of_week();
  exception_field();
  exception_form();
  month_tag();
  recurring_field();
  recurring_form();
  type_picker();
};
/* harmony default export */ var elements_hooks = (elements_hooks_hook);
// CONCATENATED MODULE: ./src/modules/custom-tables-v1/elements/index.js
/**
 * Internal dependencies
 */





/**
 * Initialize blocks JS.
 *
 * @since 6.0.0
 */
const elements_init = () => {
  elements_hooks();
};
elements_init();
// CONCATENATED MODULE: ./src/modules/custom-tables-v1/occurrence-redirect/occurrence-redirect.js

function occurrence_redirect_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function occurrence_redirect_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? occurrence_redirect_ownKeys(Object(t), !0).forEach(function (r) { defineProperty_default()(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : occurrence_redirect_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
/* global tec tecCustomTablesV1BlocksEditor */
/**
 * Handles the redirection of the user to the correct Occurrence should edit
 * screen if the udpates applied to a Recurring Event require it.
 *
 * @since 6.0.0
 */
/**
 * Internal dependencies
 */

const OCCURRENCE_REDIRECT_META_KEY = '_tec_occurrence_redirect';
const {
  subscribe: occurrence_redirect_subscribe,
  select: occurrence_redirect_select
} = wp.data;
const $ = window.jQuery;
const ajaxMaxRetries = 3;
/**
 * Flags to hold specific states.
 *
 * @since 6.0.12.1
 * @type {PlainObject}
 */
const occurrence_redirect_flags = {
  isSavingMetaBoxes: false
};
let ajaxTries = 0;
let redirectData = null;
let dialogCloseButtonStyle = null;

/**
 * Elements used in this module.
 *
 * @since 6.0.0
 * @type {{ saveButton: null }}
 */
const el = {
  saveButton: null
};

/**
 * Functions to unsubscribe from the block editor store.
 *
 * @since 6.0.0
 * @type {{ onMetaboxSave: null, listenForSaveClick: null }}
 */
const unsubscribers = {
  onMetaboxSave: null,
  listenForSaveClick: null
};

/**
 * Replaces, thus removing it from the browser history, the current
 * URL with the new one and redirects the browser to the new location.
 *
 * @since 6.0.0
 * @param {string} location The URL to redirect the user to.
 * @return {void} The function will have the side-effect of redirecting
 * 								the browser to the specified URL.
 */
const handleRedirectDialogConfirmClick = location => {
  tec.editorDialog.closeDialog();
  window.location.replace(location);
};

/**
 * Returns the set of settings for the dialog behaviour.
 *
 * @since 6.0.0
 * @param {string} title The dialog title.
 * @param {string} confirmButtonLabel The confirm button localized label.
 * @param {string} location The URL the user should be redirected to on close.
 * @returns {{}} A map of dialog settings.
 */
const getRedirectDialogSettings = (title, confirmButtonLabel, location) => occurrence_redirect_objectSpread(occurrence_redirect_objectSpread({}, tec.editorDialog.defaultDialogSettings), {}, {
  closeOnEscape: false,
  dialogClass: 'redirect-no-close',
  buttons: [{
    class: 'button-primary',
    text: confirmButtonLabel,
    click: () => handleRedirectDialogConfirmClick(location)
  }],
  title: title
});

/**
 * Returns the set of settings for the dialog content.
 *
 * @since 6.0.0
 * @param {string} message The dialog message.
 * @returns {Array} The dialog content settings.
 */
const getRedirectDialogContentSettings = message => {
  const settings = [];
  settings.push({
    type: 'text',
    text: message
  });
  return settings;
};

/**
 * Appends a style element to the page head that will hide the close (`X`)
 * button in the redirect dialog.
 *
 * @since 6.0.0
 *
 * return {void} The function will add a `style` element to the document head.
 */
const hideDialogCloseButton = () => {
  if (!dialogCloseButtonStyle) {
    dialogCloseButtonStyle = document.createElement('style');
    dialogCloseButtonStyle.type = 'text/css';
    dialogCloseButtonStyle.innerText = '.redirect-no-close .ui-dialog-titlebar-close {display: none;}';
  }
  if (!dialogCloseButtonStyle.isConnected) {
    document.head.appendChild(dialogCloseButtonStyle);
  }
};

/**
 * Redirects the browser to a new location, if required, letting the user
 * know what is going to happend by means of a notice.
 *
 * @param {{}} response The redirect response provided by the backend.
 * @return {void} The browser might be redirected to a new Occurrence.
 */
const redirectWithNotice = response => {
  if (!(response && response.data)) {
    return;
  }
  redirectData = response.data;
  const {
    location,
    title,
    message,
    confirmButtonLabel,
    forceRedirect
  } = redirectData;

  // Sometimes we want to force the redirect, skipping the confirmation.
  if (forceRedirect && location) {
    window.location.replace(location);
    return;
  }
  if (!(location && title && message && confirmButtonLabel)) {
    return;
  }
  unsubscribers.onMetaboxSave && unsubscribers.onMetaboxSave();
  unsubscribers.listenForSaveClick && unsubscribers.listenForSaveClick();
  clearDialogContent();
  setDialogContent(getRedirectDialogContentSettings(message));
  tec.editorDialog.setDialogSettings(getRedirectDialogSettings(title, confirmButtonLabel, location));
  tec.editorDialog.openDialog();
  // Hide the close (`X`) button.
  hideDialogCloseButton();
};

/**
 * Fetches the redirect data from the backend, by means of an AJAX request, to
 * know whether the Occurrence should be redirected or not.
 *
 * @since 6.0.0
 * @return {void} The method will trigger the redirection or a new fetch attempt.
 */
const fetchRedirectData = () => {
  if (!window.tecCustomTablesV1BlocksEditor) {
    return;
  }
  const coreEditor = occurrence_redirect_select('core/editor');
  const {
    ajaxurl,
    redirectAction,
    redirectNonceName,
    redirectNonce,
    eventPostId
  } = tecCustomTablesV1BlocksEditor;
  ajaxTries = 0;
  $.get(ajaxurl, {
    action: redirectAction,
    [redirectNonceName]: redirectNonce,
    event_id: coreEditor.getCurrentPostId(),
    event_post_id: eventPostId
  }).done(redirectWithNotice).fail(handleFetchRedirectDataFail); // eslint-disable-line
};

/**
 * Handle failure in fetching redirect data.
 * This could happen for a few different reasons, so retry until max retries is
 * hit.
 *
 * @param {jqXHR}  jqXHR       jQuery XHR object.
 * @param {string} textStatus  Text status of the response.
 * @param {string} errorThrown Error thrown from the request.
 * @return {void}
 */
const handleFetchRedirectDataFail = (jqXHR, textStatus, errorThrown) => {
  ajaxTries += 1;

  // Ajax tries less than max retries, try again.
  if (ajaxTries < ajaxMaxRetries) {
    console.error('tec_custom_tables_v1_redirect_data ajax request failed, retrying again.', errorThrown);
    fetchRedirectData();
    return;
  }
  console.error('tec_custom_tables_v1_redirect_data ajax request failed:', errorThrown);
};

/**
 * Returns whether the Metaboxes save operations started and have completed.
 *
 * NOTE - this can only be used inside a is single function/context. The state only works for one watching
 * function, because it is stateful on each call.
 *
 * @since 6.0.12.1
 * @returns {boolean} Whether the Metaboxes save operations have started and are
 *     completed.
 */
const occurrence_redirect_isDoneSavingMetaboxes = () => {
  const ep = occurrence_redirect_select('core/edit-post');
  const isSavingMetaBoxes = ep.isSavingMetaBoxes();
  if (isSavingMetaBoxes) {
    // From any state to (1,1).
    occurrence_redirect_flags.isSavingMetaBoxes = true;

    // If here, not done.
    return false;
  }
  if (occurrence_redirect_flags.isSavingMetaBoxes) {
    // We saved, now transition to done.
    occurrence_redirect_flags.isSavingMetaBoxes = false;

    // Notify the save event finished.
    return true;
  }
  return false;
};

/**
 * Handles events dispatched in the context of the Blocks Editor to redirect
 * the browser after the post and metabox save to a new Occurrence, if required.
 *
 * @since 6.0.0
 * @return {void} Either a no-op, or the browser will be redirected.
 */
const onMetaBoxSave = () => {
  if (!occurrence_redirect_isDoneSavingMetaboxes()) {
    return;
  }
  fetchRedirectData();
};

/**
 * Initializes the Occurrence redirection handler.
 *
 * @since 6.0.0
 * @return {void} Subscribes the event listener to the Blocks Editor events.
 */
const occurrence_redirect_init = () => {
  unsubscribers.onMetaboxSave = occurrence_redirect_subscribe(onMetaBoxSave);
};
/* harmony default export */ var occurrence_redirect = (occurrence_redirect_init);
// CONCATENATED MODULE: ./src/modules/custom-tables-v1/occurrence-redirect/index.js
/**
 * Internal dependencies
 */


/**
 * Initialize plugins JS.
 *
 * @since 6.0.0
 */
const custom_tables_v1_occurrence_redirect_init = () => {
  occurrence_redirect();
};
custom_tables_v1_occurrence_redirect_init();
// CONCATENATED MODULE: ./src/modules/custom-tables-v1/plugins/duplicate/template.js
/* global tec_events_pro_duplicate */
/**
 * Module code
 */

const {
  Button
} = wp.components;
const {
  PluginPostStatusInfo
} = wp.editor;
const {
  __: duplicate_template_
} = wp.i18n;
const Duplicate = ({
  status
}) => '' !== tec_events_pro_duplicate.duplicate_link && 'auto-draft' !== status && wp.element.createElement(PluginPostStatusInfo, null, wp.element.createElement(Button, {
  isTertiary: true,
  className: "tec-event-duplicate-action__duplicate-link",
  href: tec_events_pro_duplicate.duplicate_link,
  style: {
    marginLeft: '-6px',
    textDecoration: 'underline'
  },
  target: "_blank"
}, duplicate_template_('Duplicate', 'tribe-events-calendar-pro')));
/* harmony default export */ var duplicate_template = (Duplicate);
// CONCATENATED MODULE: ./src/modules/custom-tables-v1/plugins/duplicate/container.js
/**
 * External dependencies
 */


/**
 * Internal dependencies
 */


/**
 * Module Code
 */

const applyWithSelect = wp.data.withSelect(select => {
  return {
    select: select('core/editor').getEditedPostAttribute('status')
  };
});
/* harmony default export */ var container = (Object(external_tribe_modules_redux_["compose"])(applyWithSelect)(duplicate_template));
// CONCATENATED MODULE: ./src/modules/custom-tables-v1/plugins/duplicate/index.js
/**
 * Internal dependencies
 */

/* harmony default export */ var duplicate = (() => {
  wp.plugins.registerPlugin('tec-event-duplicate', {
    render: container
  });
});
// CONCATENATED MODULE: ./src/modules/custom-tables-v1/plugins/index.js
/**
 * Internal dependencies
 */


/**
 * Initialize plugins JS.
 *
 * @since 6.0.0
 */
const plugins_init = () => {
  duplicate();
};
plugins_init();
// CONCATENATED MODULE: ./src/modules/custom-tables-v1/series-metabox/series-metabox.js
/* global tecCustomTablesV1BlocksEditor */
/**
 * Handles the Series Metabox in the context of an Event edit screen to make
 * sure Recurring Events will have the auto-generated Series correctly
 * represented in the Blocks Editor.
 *
 * @since 6.0.0
 */

/**
 * Internal dependencies
 */

const {
  subscribe: series_metabox_subscribe,
  select: series_metabox_select
} = wp.data;
const series_metabox_$ = window.jQuery;
const series_metabox_ajaxMaxRetries = 3;
let series_metabox_ajaxTries = 0;

/**
 * Elements used in this module.
 *
 * @since 6.0.0
 * @type {{	saveButton: null, eventSeriesSelect: null }}
 */
const series_metabox_el = {
  saveButton: null,
  saveDraftButton: null,
  eventSeriesSelect: null
};

/**
 * Classes used for adding to or removing from elements.
 *
 * @since 6.0.0
 * @type {{ hidden: 'hidden' }}
 */
const series_metabox_classes = {
  hidden: 'hidden'
};

/**
 * Functions to unsubscribe from the block editor store.
 *
 * @since 6.0.0
 * @type {{ listenForEventSeriesSelect: null, getSeriesData: null }}
 */
const series_metabox_unsubscribers = {
  listenForEventSeriesSelect: null,
  getSeriesData: null
};

/**
 * Flags to hold specific states.
 *
 * @since 6.0.0
 * @since 6.0.12.1 Adding isSavingMetaBoxes flag, bringing that state here.
 * @type {{ isSavingPost: false }}
 */
const series_metabox_flags = {
  isSavingPost: false,
  isSavingMetaBoxes: false
};

/**
 * Takes various formats of series options, and normalizes to an object.
 *
 * @since 6.0.0
 * @param {string|object} item Option to normalize
 * @returns {{id: null, title: null}} Normalized object
 */
const composeSeriesValue = item => {
  const val = {
    title: null,
    id: null
  };
  if (typeof item === 'string') {
    val.title = item;
  }
  if (typeof item === 'object') {
    val.title = item.title;
    val.id = item.id;
  }
  return val;
};

/**
 * Serializes the series object.
 *
 * @since 6.0.0
 * @param {object} item Series option
 * @returns {string} JSON string
 */
const serializeMetaSeriesOption = item => {
  return JSON.stringify(item);
};

/**
 * Fetch series data associated with the current post.
 *
 * @since 6.0.0
 * @return {void}
 */
const fetchSeriesData = () => {
  if (!window.tecCustomTablesV1BlocksEditor) {
    return;
  }
  const coreEditor = series_metabox_select('core/editor');
  const {
    ajaxurl,
    seriesAction,
    seriesNonce,
    seriesNonceName
  } = tecCustomTablesV1BlocksEditor;
  series_metabox_$.get(ajaxurl, {
    action: seriesAction,
    [seriesNonceName]: seriesNonce,
    event_id: coreEditor.getCurrentPostId()
  }).done(data => {
    setSelectedSeriesOptionData(data); // eslint-disable-line no-use-before-define
    series_metabox_ajaxTries = 0;
  }).fail(handleFetchSeriesDataFail); // eslint-disable-line no-use-before-define
};

/**
 * Returns whether the Metaboxes save operations started and have completed.
 *
 * NOTE - this can only be used inside a is single function/context. The state only works for one watching
 * function, because it is stateful on each call.
 *
 * @since 6.0.12.1
 * @returns {boolean} Whether the Metaboxes save operations have started and are
 *     completed.
 */
const series_metabox_isDoneSavingMetaboxes = () => {
  const ep = series_metabox_select('core/edit-post');
  const isSavingMetaBoxes = ep.isSavingMetaBoxes();
  if (isSavingMetaBoxes) {
    // From any state to (1,1).
    series_metabox_flags.isSavingMetaBoxes = true;

    // If here, not done.
    return false;
  }
  if (series_metabox_flags.isSavingMetaBoxes) {
    // We saved, now transition to done.
    series_metabox_flags.isSavingMetaBoxes = false;

    // Notify the save event finished.
    return true;
  }
  return false;
};

/**
 * Event responder for Series Meta Box updates, after a save has finished.
 *
 * @since 6.0.0
 * @return {void}
 */
const series_metabox_onMetaBoxSave = () => {
  if (!series_metabox_isDoneSavingMetaboxes()) {
    return;
  }

  // Now fetch updated series data for our dropdown, in case we need to store a newly created ID.
  fetchSeriesData();
};

/**
 * Get the event series select element and save it to the `el` object.
 *
 * @since 6.0.0
 * @return {void}
 */
const getEventSeriesSelect = () => {
  if (series_metabox_el.eventSeriesSelect) {
    return;
  }
  series_metabox_el.eventSeriesSelect = document.querySelector(state_selectors.eventSeriesSelect);
};

/**
 * Handle change event from event series metabox.
 *
 * @since 6.0.0
 * @param {Event} event Event object from change event.
 * @return {void}
 */
const handleChange = event => {
  const $select = event.data.$target;
  const $selected = $select.find(':selected');

  // If for some reason there is no selected option, return early.
  if (!$selected.length) {
    return;
  }
  const $linkContainer = $select.parent().find(state_selectors.editLinkContainer);

  // If selected option is "Create or find a series", hide edit link.
  if ('-1' === $selected.val()) {
    $linkContainer.addClass(series_metabox_classes.hidden);
    return;
  }
  const editLink = $selected.data('editLink');

  // If edit link is empty, hide edit link.
  if (!editLink) {
    $linkContainer.addClass(series_metabox_classes.hidden);
    return;
  }
  $linkContainer.find(state_selectors.editLink).attr('href', editLink);
  $linkContainer.removeClass(series_metabox_classes.hidden);
};

/**
 * Returns whether the Event, in its current state, should be considered
 * recurring or not.
 *
 * An Event should be considered recurring if it has at least on Recurrence
 * Rule currently defined.
 *
 * @since 6.0.0
 * @return {boolean} Whether the Event should be currently considered Recurring
 *                   or not.
 */
const series_metabox_isRecurring = () => {
  const coreBlockEditor = series_metabox_select('core/block-editor');
  const eventDatetimeBlocks = coreBlockEditor.getBlocks().filter(block => block.name === 'tribe/event-datetime');
  if (!eventDatetimeBlocks.length) {
    return false;
  }
  return eventDatetimeBlocks[0].attributes.rules && '[]' !== eventDatetimeBlocks[0].attributes.rules;
};

/**
 * Returns the current Event post title reading it either from the most recent
 * edits made on the Event post, or from the original Event post (if the Event
 * is not new).
 *
 * @since 6.0.0
 * @return {string} The latest Event title.
 */
const getCurrentPostTitle = () => {
  const coreEditor = series_metabox_select('core/editor');
  const editsTitle = String(coreEditor.getPostEdits().title).trim();
  if ('undefined' !== editsTitle) {
    return String(editsTitle);
  }
  return String(coreEditor.getCurrentPost().title).trim();
};

/**
 * Checks if an Option with the same text label already exists in the select
 * element or not.
 *
 * @since 6.0.0
 * @param {string} value The value to check for in the select.
 * @return {Option|null} Either the matching Option, or `null`.
 */
const findMatchingTextOption = value => {
  const allOptions = series_metabox_el.eventSeriesSelect.querySelectorAll('option');
  const matchingOptions = Array.from(allOptions).filter(option => option.text === value);
  return matchingOptions[0] ? matchingOptions[0] : null;
};

/**
 * Adds an option into the Series Metabox select input to represent the
 * auto-generated Series the backend will create when the Event is recurring
 * and no Series has been explicitly picked for it from the user.
 *
 * @since 6.0.0
 * @return {void}
 */
const createNewSeriesOptionFromTitle = () => {
  getEventSeriesSelect();
  if (!series_metabox_el.eventSeriesSelect) {
    return;
  }
  if ('-1' !== String(series_metabox_el.eventSeriesSelect.value)) {
    // The user did pick a Series to create or relate the Event to.
    return;
  }
  const postTitle = getCurrentPostTitle();
  if (!postTitle.length) {
    return;
  }

  // Create a new Option and select it.
  const val = serializeMetaSeriesOption(composeSeriesValue(postTitle));
  const newOption = new Option(postTitle, val, true, true);
  series_metabox_$(series_metabox_el.eventSeriesSelect).append(newOption).trigger('change');
};

/**
 * Determine whether the selected series in the event series select is new or not.
 * A selected series is new if the series option does not have an edit link.
 * We do not check whether the option value is an integer or not, as there is the case where
 * a series title could be an integer. There is also the very slim chance the post ID could be
 * the same as the series title.
 *
 * @since 6.0.0
 * @return {boolean} Whether the selected series option is new or not.
 */
const isSelectedSeriesNew = () => {
  const $select = series_metabox_$(series_metabox_el.eventSeriesSelect);
  const $selected = $select.find(':selected');

  // If for some reason there is no selected option, return false.
  if (!$selected.length) {
    return false;
  }

  // If selected option is "Create or find a series", return false.
  if ('-1' === $selected.val()) {
    return false;
  }
  const editLink = $selected.data('editLink');

  // If selected option has an edit link, return false.
  if (editLink) {
    return false;
  }
  return true;
};

/**
 * Set selected series option data. New series option value will be the same as the option label,
 * which is the series title, and will not have an edit link. This function sets the option value
 * and the edit link on the selected series option.
 *
 * @since 6.0.0
 * @param {object} data The result from the ajax request.
 */
const setSelectedSeriesOptionData = data => {
  const $select = series_metabox_$(series_metabox_el.eventSeriesSelect);
  const $selected = $select.find(':selected');
  if (data.data.id === undefined || data.data.edit_link === undefined) {
    // The Event is not related to any Series, this is ok.
    return;
  }

  // All the checks were done in isSelectedSeriesNew(), continue on with $selected.
  if (data.data.id) {
    const val = serializeMetaSeriesOption(composeSeriesValue(data.data));
    $selected.attr('value', val);
  }
  if (data.data.edit_link) {
    $selected.attr('data-edit-link', data.data.edit_link);
  }
  $select.trigger('change');
};

/**
 * Handle failure in fetching series data.
 * This could happen for a few different reasons, so retry until max retries is hit.
 *
 * @param {jqXHR}  jqXHR       jQuery XHR object.
 * @param {string} textStatus  Text status of the response.
 * @param {string} errorThrown Error thrown from the request.
 * @return {void}
 */
const handleFetchSeriesDataFail = (jqXHR, textStatus, errorThrown) => {
  series_metabox_ajaxTries += 1;

  // Ajax tries less than max retries, try again.
  if (series_metabox_ajaxTries < series_metabox_ajaxMaxRetries) {
    console.error('tec_custom_tables_v1_series_data ajax request failed, retrying again.', errorThrown);
    fetchSeriesData();
    return;
  }
  console.error('tec_custom_tables_v1_series_data ajax request failed:', errorThrown);
};

/**
 * Gets the new series data after the event is finished saving.
 * Wait until the post starts saving, set the isSavingPost flag, and continue checking until
 * the post finishes saving.
 *
 * @since 6.0.0
 * @return {void}
 */
const getSeriesData = () => {
  if (!isDoneSavingPost()) {
    return;
  }
  series_metabox_unsubscribers.getSeriesData();
  series_metabox_unsubscribers.getSeriesData = null;
  fetchSeriesData();
};

/**
 * Handles the click event fired from either the Publish or Update button adding
 * a Series entry into the Series metabox, if required.
 *
 * @since 6.0.0
 * @return {void}
 */
const onSaveClick = () => {
  // If the event is not recurring, return early.
  if (!series_metabox_isRecurring()) {
    return;
  }
  createNewSeriesOptionFromTitle();

  // If the selected series is not new, no need to get series data, return early.
  if (!isSelectedSeriesNew()) {
    return;
  }
  series_metabox_unsubscribers.getSeriesData = series_metabox_subscribe(getSeriesData);
};

/**
 * Hooks a click event listener on the current instance of the Publish, or Update
 * button.
 *
 * @since 6.0.0
 * @return {void}
 */
const listenForSaveClick = () => {
  if (series_metabox_el.saveButton && series_metabox_el.saveButton.isConnected) {
    return;
  }
  series_metabox_el.saveButton = document.querySelector(state_selectors.saveButton);
  if (!series_metabox_el.saveButton) {
    return;
  }
  series_metabox_el.saveButton.addEventListener('click', onSaveClick, true);
};

/**
 * Hooks a click event listener on the current instance of the Save Draft button.
 *
 * @since 6.3.0
 *
 * @return {void}
 */
const listenForSaveDraftClick = () => {
  if (series_metabox_el.saveDraftButton && series_metabox_el.saveDraftButton.isConnected) {
    return;
  }
  series_metabox_el.saveDraftButton = document.querySelector(state_selectors.saveDraftButton);
  if (!series_metabox_el.saveDraftButton) {
    return;
  }
  series_metabox_el.saveDraftButton.addEventListener('click', onSaveClick, true);
};

/**
 * Adds a change listener to the event series select.
 *
 * @since 6.0.0
 * @return {void}
 */
const listenForEventSeriesSelect = () => {
  /**
   * We do not check if event series select exists or is connected, as once it exists in the DOM,
   * it is never disconnected. So once we attach an event listener, we unsubscribe this subscription.
   */
  getEventSeriesSelect();
  if (!series_metabox_el.eventSeriesSelect) {
    return;
  }
  series_metabox_unsubscribers.listenForEventSeriesSelect();
  series_metabox_unsubscribers.listenForEventSeriesSelect = null;
  const $select = series_metabox_$(series_metabox_el.eventSeriesSelect);
  $select.on('change', {
    $target: $select
  }, handleChange);
};

/**
 * Initializes the Series Metabox handler.
 *
 * @since 6.0.0
 * @return {void}
 */
const series_metabox_init = () => {
  series_metabox_subscribe(listenForSaveClick);
  series_metabox_subscribe(listenForSaveDraftClick);
  series_metabox_subscribe(series_metabox_onMetaBoxSave);
  series_metabox_unsubscribers.listenForEventSeriesSelect = series_metabox_subscribe(listenForEventSeriesSelect);
};
/* harmony default export */ var series_metabox = (series_metabox_init);
// CONCATENATED MODULE: ./src/modules/custom-tables-v1/series-metabox/index.js
/**
 * Internal dependencies
 */


/**
 * Initialize plugins JS.
 *
 * @since 6.0.0
 */
const custom_tables_v1_series_metabox_init = () => {
  series_metabox();
};
custom_tables_v1_series_metabox_init();
// CONCATENATED MODULE: ./src/modules/custom-tables-v1/index.js
/**
 * Internal dependencies
 */









/***/ }),

/***/ "O7uX":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "OluY":
/***/ (function(module, exports) {

module.exports = tribe["events-pro"].data.status.sagas;

/***/ }),

/***/ "OuoG":
/***/ (function(module, exports) {

module.exports = tribe["events-pro"].data.blocks.exception.types;

/***/ }),

/***/ "PSCs":
/***/ (function(module, exports) {

module.exports = tribe["events-pro"].data.blocks;

/***/ }),

/***/ "Q9xL":
/***/ (function(module, exports) {

module.exports = tribe.common.hoc;

/***/ }),

/***/ "Rkpb":
/***/ (function(module, exports) {

module.exports = tribe["events-pro"].data.blocks.exception;

/***/ }),

/***/ "RmXt":
/***/ (function(module, exports) {

module.exports = tribe.modules.reduxSaga.effects;

/***/ }),

/***/ "SOG1":
/***/ (function(module, exports) {

module.exports = tribe.events.data.blocks.datetime.selectors;

/***/ }),

/***/ "UnPw":
/***/ (function(module, exports) {

module.exports = tribe["events-pro"].data.blocks.exception.selectors;

/***/ }),

/***/ "Yht6":
/***/ (function(module, exports) {

module.exports = tribe.events.data.blocks.datetime.types;

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = React;

/***/ }),

/***/ "g8L8":
/***/ (function(module, exports) {

module.exports = tribe.common.store;

/***/ }),

/***/ "gGza":
/***/ (function(module, exports) {

module.exports = tribe["events-pro"].data.blocks.recurring.constants;

/***/ }),

/***/ "gSph":
/***/ (function(module, exports) {

module.exports = tribe["events-pro"].data.blocks.constants;

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = tribe.modules.reactRedux;

/***/ }),

/***/ "iy/v":
/***/ (function(module, exports) {

module.exports = tribe["events-pro"].data.blocks.recurring.selectors;

/***/ }),

/***/ "kczL":
/***/ (function(module, exports) {

module.exports = tribe.common.utils.globals;

/***/ }),

/***/ "l3Sj":
/***/ (function(module, exports) {

module.exports = wp.i18n;

/***/ }),

/***/ "pVH8":
/***/ (function(module, exports) {

module.exports = tribe["events-pro"].data.blocks.recurring.types;

/***/ }),

/***/ "rKB8":
/***/ (function(module, exports) {

module.exports = tribe.modules.redux;

/***/ }),

/***/ "rf6O":
/***/ (function(module, exports) {

module.exports = tribe.modules.propTypes;

/***/ }),

/***/ "tPgE":
/***/ (function(module, exports) {

module.exports = tribe["events-pro"].data.blocks.exception.actions;

/***/ }),

/***/ "tbMi":
/***/ (function(module, exports) {

module.exports = tribe.common.utils.date;

/***/ }),

/***/ "wy2R":
/***/ (function(module, exports) {

module.exports = moment;

/***/ }),

/***/ "zCYh":
/***/ (function(module, exports) {

module.exports = tribe.common.utils.moment;

/***/ })

/******/ });