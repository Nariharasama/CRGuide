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
/******/ 	return __webpack_require__(__webpack_require__.s = "../../../../../../../../../../../HarmonyProject/CRGuide/entry/src/main/js/default/pages/setting/setting.hml?entry");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../../../../../../../../../HarmonyProject/CRGuide/entry/src/main/js/default/pages/setting/setting.hml?entry":
/*!*******************************************************************************************!*\
  !*** C:/HarmonyProject/CRGuide/entry/src/main/js/default/pages/setting/setting.hml?entry ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(/*! !../../../../../../../../../Users/Hu Shengyuan/AppData/Local/Huawei/Sdk/hmscore/2.2.0/js/build-tools/ace-loader/lib/json.js!../../../../../../../../../Users/Hu Shengyuan/AppData/Local/Huawei/Sdk/hmscore/2.2.0/js/build-tools/ace-loader/lib/template.js!./setting.hml */ "./lib/json.js!./lib/template.js!../../../../../../../../../../../HarmonyProject/CRGuide/entry/src/main/js/default/pages/setting/setting.hml")
var $app_style$ = __webpack_require__(/*! !../../../../../../../../../Users/Hu Shengyuan/AppData/Local/Huawei/Sdk/hmscore/2.2.0/js/build-tools/ace-loader/lib/json.js!../../../../../../../../../Users/Hu Shengyuan/AppData/Local/Huawei/Sdk/hmscore/2.2.0/js/build-tools/ace-loader/lib/style.js!./setting.css */ "./lib/json.js!./lib/style.js!../../../../../../../../../../../HarmonyProject/CRGuide/entry/src/main/js/default/pages/setting/setting.css")
var $app_script$ = __webpack_require__(/*! !../../../../../../../../../Users/Hu Shengyuan/AppData/Local/Huawei/Sdk/hmscore/2.2.0/js/build-tools/ace-loader/lib/script.js!../../../../../../../../../Users/Hu Shengyuan/AppData/Local/Huawei/Sdk/hmscore/2.2.0/js/build-tools/ace-loader/node_modules/babel-loader?presets[]=C:/Users/Hu Shengyuan/AppData/Local/Huawei/Sdk/hmscore/2.2.0/js/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=C:/Users/Hu Shengyuan/AppData/Local/Huawei/Sdk/hmscore/2.2.0/js/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!../../../../../../../../../Users/Hu Shengyuan/AppData/Local/Huawei/Sdk/hmscore/2.2.0/js/build-tools/ace-loader/lib/resource-reference-script.js!./setting.js */ "./lib/script.js!./node_modules/babel-loader/lib/index.js?presets[]=C:\\Users\\Hu Shengyuan\\AppData\\Local\\Huawei\\Sdk\\hmscore\\2.2.0\\js\\build-tools\\ace-loader\\node_modules\\@babel\\preset-env&plugins[]=C:\\Users\\Hu Shengyuan\\AppData\\Local\\Huawei\\Sdk\\hmscore\\2.2.0\\js\\build-tools\\ace-loader\\node_modules\\@babel\\plugin-transform-modules-commonjs&comments=false!./lib/resource-reference-script.js!../../../../../../../../../../../HarmonyProject/CRGuide/entry/src/main/js/default/pages/setting/setting.js")

$app_define$('@app-component/setting', [], function($app_require$, $app_exports$, $app_module$) {

$app_script$($app_module$, $app_exports$, $app_require$)
if ($app_exports$.__esModule && $app_exports$.default) {
$app_module$.exports = $app_exports$.default
}

$app_module$.exports.template = $app_template$

$app_module$.exports.style = $app_style$

})
$app_bootstrap$('@app-component/setting',undefined,undefined)

/***/ }),

/***/ "./lib/json.js!./lib/style.js!../../../../../../../../../../../HarmonyProject/CRGuide/entry/src/main/js/default/pages/setting/setting.css":
/*!******************************************************************************************************************!*\
  !*** ./lib/json.js!./lib/style.js!C:/HarmonyProject/CRGuide/entry/src/main/js/default/pages/setting/setting.css ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".index": {
    "height": "100%",
    "width": "100%",
    "display": "flex",
    "backgroundColor": "#4E5B92",
    "flexDirection": "column"
  },
  ".background-main": {
    "backgroundColor": "#4E5B92",
    "height": "80px",
    "width": "100%",
    "flexGrow": 0,
    "display": "flex"
  },
  ".main-container": {
    "backgroundColor": "#EFEDF4",
    "display": "flex",
    "flexGrow": 1,
    "borderBottomLeftRadius": "0px",
    "borderBottomRightRadius": "0px",
    "borderTopLeftRadius": "24px",
    "borderTopRightRadius": "24px",
    "alignItems": "flex-start",
    "flexDirection": "column"
  },
  ".app-title": {
    "color": "#ffffff",
    "textAlign": "left",
    "fontFamily": "sans-serif",
    "fontSize": "24px",
    "lineHeight": "32px",
    "fontWeight": "500",
    "display": "flex",
    "position": "absolute",
    "left": "16px",
    "top": "32px",
    "alignItems": "center",
    "justifyContent": "center"
  },
  ".page-title": {
    "color": "#000000",
    "textAlign": "left",
    "fontFamily": "sans-serif",
    "fontSize": "14px",
    "lineHeight": "20px",
    "fontWeight": "500",
    "width": "100%",
    "paddingLeft": "16px",
    "paddingTop": "20px",
    "display": "flex"
  },
  ".setting-area": {
    "flexGrow": 1,
    "display": "flex",
    "width": "100%",
    "paddingLeft": "16px"
  },
  ".choose": {
    "fontFamily": "sans-serif",
    "color": "#4E5B92",
    "marginTop": "16px"
  },
  ".NavBottons": {
    "height": "56px",
    "width": "100%",
    "flexGrow": 0,
    "alignItems": "center",
    "justifyContent": "space-around"
  },
  ".NavBotton": {
    "height": "100%",
    "width": "60px",
    "display": "flex",
    "alignItems": "center",
    "justifyContent": "center",
    "flexDirection": "column"
  },
  ".buttonimage": {
    "width": "24px",
    "height": "24px"
  },
  ".buttontext-on": {
    "color": "#535a92",
    "textAlign": "left",
    "fontFamily": "'Roboto-Medium', sans-serif",
    "fontSize": "14px",
    "lineHeight": "20px",
    "fontWeight": "500"
  },
  ".buttontext": {
    "color": "#5a5d72",
    "textAlign": "left",
    "fontFamily": "'Roboto-Medium', sans-serif",
    "fontSize": "14px",
    "lineHeight": "20px",
    "fontWeight": "500"
  }
}

/***/ }),

/***/ "./lib/json.js!./lib/template.js!../../../../../../../../../../../HarmonyProject/CRGuide/entry/src/main/js/default/pages/setting/setting.hml":
/*!*********************************************************************************************************************!*\
  !*** ./lib/json.js!./lib/template.js!C:/HarmonyProject/CRGuide/entry/src/main/js/default/pages/setting/setting.hml ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "attr": {
    "debugLine": "pages/setting/setting:1",
    "className": "index"
  },
  "type": "div",
  "classList": [
    "index"
  ],
  "children": [
    {
      "attr": {
        "debugLine": "pages/setting/setting:2",
        "className": "background-main"
      },
      "type": "div",
      "classList": [
        "background-main"
      ],
      "children": [
        {
          "attr": {
            "debugLine": "pages/setting/setting:3",
            "className": "app-title",
            "value": "CRGuide时刻表"
          },
          "type": "text",
          "classList": [
            "app-title"
          ]
        }
      ]
    },
    {
      "attr": {
        "debugLine": "pages/setting/setting:5",
        "className": "main-container"
      },
      "type": "div",
      "classList": [
        "main-container"
      ],
      "children": [
        {
          "attr": {
            "debugLine": "pages/setting/setting:6",
            "className": "page-title",
            "value": "软件设置"
          },
          "type": "text",
          "classList": [
            "page-title"
          ]
        },
        {
          "attr": {
            "debugLine": "pages/setting/setting:7",
            "className": "setting-area"
          },
          "type": "div",
          "classList": [
            "setting-area"
          ],
          "children": [
            {
              "attr": {
                "debugLine": "pages/setting/setting:8",
                "className": "choose",
                "id": function () {return this.$item.id},
                "checked": function () {return this.$item.checked},
                "value": function () {return this.$item.name}
              },
              "type": "toggle",
              "classList": [
                "choose"
              ],
              "repeat": function () {return this.toggle_list},
              "id": function () {return this.$item.id},
              "events": {
                "change": "allchange"
              },
              "onBubbleEvents": {
                "click": function (evt) {this.allclick(this.$item.id,evt)}
              }
            }
          ]
        },
        {
          "attr": {
            "debugLine": "pages/setting/setting:12",
            "className": "NavBottons"
          },
          "type": "div",
          "classList": [
            "NavBottons"
          ],
          "children": [
            {
              "attr": {
                "debugLine": "pages/setting/setting:13",
                "className": "NavBotton"
              },
              "type": "div",
              "classList": [
                "NavBotton"
              ],
              "children": [
                {
                  "attr": {
                    "debugLine": "pages/setting/setting:14",
                    "src": "/common/images/tram.svg",
                    "className": "buttonimage"
                  },
                  "type": "image",
                  "classList": [
                    "buttonimage"
                  ],
                  "onBubbleEvents": {
                    "click": "ToHome"
                  }
                },
                {
                  "attr": {
                    "debugLine": "pages/setting/setting:15",
                    "className": "buttontext",
                    "value": "列车情报"
                  },
                  "type": "text",
                  "classList": [
                    "buttontext"
                  ]
                }
              ]
            },
            {
              "attr": {
                "debugLine": "pages/setting/setting:17",
                "className": "NavBotton"
              },
              "type": "div",
              "classList": [
                "NavBotton"
              ],
              "children": [
                {
                  "attr": {
                    "debugLine": "pages/setting/setting:18",
                    "src": "/common/images/info.svg",
                    "className": "buttonimage"
                  },
                  "type": "image",
                  "classList": [
                    "buttonimage"
                  ],
                  "onBubbleEvents": {
                    "click": "ToInfo"
                  }
                },
                {
                  "attr": {
                    "debugLine": "pages/setting/setting:19",
                    "className": "buttontext",
                    "value": "相关信息"
                  },
                  "type": "text",
                  "classList": [
                    "buttontext"
                  ]
                }
              ]
            },
            {
              "attr": {
                "debugLine": "pages/setting/setting:21",
                "className": "NavBotton"
              },
              "type": "div",
              "classList": [
                "NavBotton"
              ],
              "children": [
                {
                  "attr": {
                    "debugLine": "pages/setting/setting:22",
                    "src": "/common/images/settings-on.svg",
                    "className": "buttonimage"
                  },
                  "type": "image",
                  "classList": [
                    "buttonimage"
                  ],
                  "onBubbleEvents": {
                    "click": "ToSetting"
                  }
                },
                {
                  "attr": {
                    "debugLine": "pages/setting/setting:23",
                    "className": "buttontext-on",
                    "value": "设置"
                  },
                  "type": "text",
                  "classList": [
                    "buttontext-on"
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}

/***/ }),

/***/ "./lib/script.js!./node_modules/babel-loader/lib/index.js?presets[]=C:\\Users\\Hu Shengyuan\\AppData\\Local\\Huawei\\Sdk\\hmscore\\2.2.0\\js\\build-tools\\ace-loader\\node_modules\\@babel\\preset-env&plugins[]=C:\\Users\\Hu Shengyuan\\AppData\\Local\\Huawei\\Sdk\\hmscore\\2.2.0\\js\\build-tools\\ace-loader\\node_modules\\@babel\\plugin-transform-modules-commonjs&comments=false!./lib/resource-reference-script.js!../../../../../../../../../../../HarmonyProject/CRGuide/entry/src/main/js/default/pages/setting/setting.js":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./lib/script.js!./node_modules/babel-loader/lib?presets[]=C:/Users/Hu Shengyuan/AppData/Local/Huawei/Sdk/hmscore/2.2.0/js/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=C:/Users/Hu Shengyuan/AppData/Local/Huawei/Sdk/hmscore/2.2.0/js/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!./lib/resource-reference-script.js!C:/HarmonyProject/CRGuide/entry/src/main/js/default/pages/setting/setting.js ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(module, exports, $app_require$){"use strict";

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _system = _interopRequireDefault(requireModule("@system.router"));
var _default = exports["default"] = {
  data: {
    toggle_list: [{
      "id": "1",
      "name": "一等座",
      "checked": true
    }, {
      "id": "2",
      "name": "二等座",
      "checked": false
    }],
    idx: ""
  },
  allclick: function allclick(arg) {
    this.idx = arg;
  },
  allchange: function allchange(e) {
    if (e.checked != true) {
      return;
    }
    for (var i = 0; i < this.toggle_list.length; i++) {
      if (this.toggle_list[i].id === this.idx) {
        this.toggle_list[i].checked = true;
      } else {
        this.toggle_list[i].checked = false;
      }
    }
  }
};

function requireModule(moduleName) {
  const systemList = ['system.router', 'system.app', 'system.prompt', 'system.configuration',
  'system.image', 'system.device', 'system.mediaquery', 'ohos.animator', 'system.grid', 'system.resource']
  var target = ''
  if (systemList.includes(moduleName.replace('@', ''))) {
    target = $app_require$('@app-module/' + moduleName.substring(1));
    return target;
  }
  var shortName = moduleName.replace(/@[^.]+.([^.]+)/, '$1');
  if (typeof ohosplugin !== 'undefined' && /@ohos/.test(moduleName)) {
    target = ohosplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  if (typeof systemplugin !== 'undefined') {
    target = systemplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  target = requireNapi(shortName);
  return target;
}

var moduleOwn = exports.default || module.exports;
var accessors = ['public', 'protected', 'private'];
if (moduleOwn.data && accessors.some(function (acc) {
    return moduleOwn[acc];
  })) {
  throw new Error('For VM objects, attribute data must not coexist with public, protected, or private. Please replace data with public.');
} else if (!moduleOwn.data) {
  moduleOwn.data = {};
  moduleOwn._descriptor = {};
  accessors.forEach(function(acc) {
    var accType = typeof moduleOwn[acc];
    if (accType === 'object') {
      moduleOwn.data = Object.assign(moduleOwn.data, moduleOwn[acc]);
      for (var name in moduleOwn[acc]) {
        moduleOwn._descriptor[name] = {access : acc};
      }
    } else if (accType === 'function') {
      console.warn('For VM objects, attribute ' + acc + ' value must not be a function. Change the value to an object.');
    }
  });
}}
/* generated by ace-loader */


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;

function requireModule(moduleName) {
  const systemList = ['system.router', 'system.app', 'system.prompt', 'system.configuration',
  'system.image', 'system.device', 'system.mediaquery', 'ohos.animator', 'system.grid', 'system.resource']
  var target = ''
  if (systemList.includes(moduleName.replace('@', ''))) {
    target = $app_require$('@app-module/' + moduleName.substring(1));
    return target;
  }
  var shortName = moduleName.replace(/@[^.]+.([^.]+)/, '$1');
  if (typeof ohosplugin !== 'undefined' && /@ohos/.test(moduleName)) {
    target = ohosplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  if (typeof systemplugin !== 'undefined') {
    target = systemplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  target = requireNapi(shortName);
  return target;
}


/***/ })

/******/ });
//# sourceMappingURL=setting.js.map