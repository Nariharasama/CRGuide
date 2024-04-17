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
/******/ 	return __webpack_require__(__webpack_require__.s = "../../../../../../../../../../../HarmonyProject/CRGuide/entry/src/main/js/default/pages/index/index.hml?entry");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../../../../../../../../../HarmonyProject/CRGuide/entry/src/main/js/default/pages/index/index.hml?entry":
/*!***************************************************************************************!*\
  !*** C:/HarmonyProject/CRGuide/entry/src/main/js/default/pages/index/index.hml?entry ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(/*! !../../../../../../../../../Users/Hu Shengyuan/AppData/Local/Huawei/Sdk/hmscore/2.2.0/js/build-tools/ace-loader/lib/json.js!../../../../../../../../../Users/Hu Shengyuan/AppData/Local/Huawei/Sdk/hmscore/2.2.0/js/build-tools/ace-loader/lib/template.js!./index.hml */ "./lib/json.js!./lib/template.js!../../../../../../../../../../../HarmonyProject/CRGuide/entry/src/main/js/default/pages/index/index.hml")
var $app_style$ = __webpack_require__(/*! !../../../../../../../../../Users/Hu Shengyuan/AppData/Local/Huawei/Sdk/hmscore/2.2.0/js/build-tools/ace-loader/lib/json.js!../../../../../../../../../Users/Hu Shengyuan/AppData/Local/Huawei/Sdk/hmscore/2.2.0/js/build-tools/ace-loader/lib/style.js!./index.css */ "./lib/json.js!./lib/style.js!../../../../../../../../../../../HarmonyProject/CRGuide/entry/src/main/js/default/pages/index/index.css")
var $app_script$ = __webpack_require__(/*! !../../../../../../../../../Users/Hu Shengyuan/AppData/Local/Huawei/Sdk/hmscore/2.2.0/js/build-tools/ace-loader/lib/script.js!../../../../../../../../../Users/Hu Shengyuan/AppData/Local/Huawei/Sdk/hmscore/2.2.0/js/build-tools/ace-loader/node_modules/babel-loader?presets[]=C:/Users/Hu Shengyuan/AppData/Local/Huawei/Sdk/hmscore/2.2.0/js/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=C:/Users/Hu Shengyuan/AppData/Local/Huawei/Sdk/hmscore/2.2.0/js/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!../../../../../../../../../Users/Hu Shengyuan/AppData/Local/Huawei/Sdk/hmscore/2.2.0/js/build-tools/ace-loader/lib/resource-reference-script.js!./index.js */ "./lib/script.js!./node_modules/babel-loader/lib/index.js?presets[]=C:\\Users\\Hu Shengyuan\\AppData\\Local\\Huawei\\Sdk\\hmscore\\2.2.0\\js\\build-tools\\ace-loader\\node_modules\\@babel\\preset-env&plugins[]=C:\\Users\\Hu Shengyuan\\AppData\\Local\\Huawei\\Sdk\\hmscore\\2.2.0\\js\\build-tools\\ace-loader\\node_modules\\@babel\\plugin-transform-modules-commonjs&comments=false!./lib/resource-reference-script.js!../../../../../../../../../../../HarmonyProject/CRGuide/entry/src/main/js/default/pages/index/index.js")

$app_define$('@app-component/index', [], function($app_require$, $app_exports$, $app_module$) {

$app_script$($app_module$, $app_exports$, $app_require$)
if ($app_exports$.__esModule && $app_exports$.default) {
$app_module$.exports = $app_exports$.default
}

$app_module$.exports.template = $app_template$

$app_module$.exports.style = $app_style$

})
$app_bootstrap$('@app-component/index',undefined,undefined)

/***/ }),

/***/ "./lib/json.js!./lib/style.js!../../../../../../../../../../../HarmonyProject/CRGuide/entry/src/main/js/default/pages/index/index.css":
/*!**************************************************************************************************************!*\
  !*** ./lib/json.js!./lib/style.js!C:/HarmonyProject/CRGuide/entry/src/main/js/default/pages/index/index.css ***!
  \**************************************************************************************************************/
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
  ".search-area": {
    "backgroundColor": "#fbf8ff",
    "borderBottomLeftRadius": "24px",
    "borderBottomRightRadius": "24px",
    "borderTopLeftRadius": "24px",
    "borderTopRightRadius": "24px",
    "height": "160px",
    "width": "100%",
    "display": "flex",
    "marginTop": "16px",
    "marginLeft": "16px",
    "marginRight": "16px",
    "paddingTop": "16px",
    "paddingRight": "16px",
    "paddingBottom": "16px",
    "paddingLeft": "16px",
    "flexDirection": "row"
  },
  ".station-area": {
    "height": "100%",
    "display": "flex",
    "flexGrow": 1,
    "flexDirection": "column"
  },
  ".start-align": {
    "width": "100%",
    "display": "flex",
    "height": "32px",
    "alignItems": "center"
  },
  ".start-icon": {
    "width": "24px",
    "height": "24px"
  },
  ".start-title": {
    "color": "#000000",
    "textAlign": "left",
    "fontFamily": "'Roboto-Medium', sans-serif",
    "fontSize": "11px",
    "lineHeight": "16px",
    "fontWeight": "500",
    "width": "42px",
    "marginLeft": "4px"
  },
  ".start-setting": {
    "color": "#5a5d72",
    "backgroundColor": "#fbf8ff",
    "textAlign": "left",
    "fontFamily": "sans-serif",
    "fontSize": "12px",
    "fontWeight": "400",
    "width": "100%",
    "display": "flex",
    "paddingLeft": "4px",
    "borderBottomLeftRadius": "10px",
    "borderBottomRightRadius": "10px",
    "borderTopLeftRadius": "10px",
    "borderTopRightRadius": "10px"
  },
  ".station-divider": {
    "borderTopStyle": "solid",
    "borderRightStyle": "solid",
    "borderBottomStyle": "solid",
    "borderLeftStyle": "solid",
    "borderTopColor": "#767680",
    "borderRightColor": "#767680",
    "borderBottomColor": "#767680",
    "borderLeftColor": "#767680",
    "borderTopWidth": "1px",
    "borderRightWidth": "0px",
    "borderBottomWidth": "0px",
    "borderLeftWidth": "0px",
    "marginLeft": "12px",
    "width": "100%",
    "height": "2px"
  },
  ".icon-area": {
    "width": "32px",
    "flexGrow": 0,
    "height": "100%",
    "justifyContent": "center",
    "alignItems": "center"
  },
  ".swapicon": {
    "width": "24px",
    "height": "24px"
  },
  ".cardbutton": {
    "backgroundColor": "#535a92",
    "color": "#ffffff",
    "width": "100%",
    "height": "40px",
    "marginLeft": "16px",
    "marginRight": "16px",
    "marginTop": "16px"
  },
  ".train-infos": {
    "flexGrow": 1,
    "display": "flex",
    "width": "100%"
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

/***/ "./lib/json.js!./lib/template.js!../../../../../../../../../../../HarmonyProject/CRGuide/entry/src/main/js/default/pages/index/index.hml":
/*!*****************************************************************************************************************!*\
  !*** ./lib/json.js!./lib/template.js!C:/HarmonyProject/CRGuide/entry/src/main/js/default/pages/index/index.hml ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "attr": {
    "debugLine": "pages/index/index:1",
    "className": "index"
  },
  "type": "div",
  "classList": [
    "index"
  ],
  "children": [
    {
      "attr": {
        "debugLine": "pages/index/index:2",
        "className": "background-main"
      },
      "type": "div",
      "classList": [
        "background-main"
      ],
      "children": [
        {
          "attr": {
            "debugLine": "pages/index/index:3",
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
        "debugLine": "pages/index/index:5",
        "className": "main-container"
      },
      "type": "div",
      "classList": [
        "main-container"
      ],
      "children": [
        {
          "attr": {
            "debugLine": "pages/index/index:6",
            "className": "page-title",
            "value": "车站设置"
          },
          "type": "text",
          "classList": [
            "page-title"
          ]
        },
        {
          "attr": {
            "debugLine": "pages/index/index:7",
            "className": "search-area"
          },
          "type": "div",
          "classList": [
            "search-area"
          ],
          "children": [
            {
              "attr": {
                "debugLine": "pages/index/index:8",
                "className": "station-area"
              },
              "type": "div",
              "classList": [
                "station-area"
              ],
              "children": [
                {
                  "attr": {
                    "debugLine": "pages/index/index:9",
                    "className": "start-align"
                  },
                  "type": "div",
                  "classList": [
                    "start-align"
                  ],
                  "children": [
                    {
                      "attr": {
                        "debugLine": "pages/index/index:10",
                        "className": "start-title",
                        "value": "始发站"
                      },
                      "type": "text",
                      "classList": [
                        "start-title"
                      ]
                    }
                  ]
                },
                {
                  "attr": {
                    "debugLine": "pages/index/index:12",
                    "type": "text",
                    "id": "start",
                    "placeholder": "设置车站",
                    "className": "start-setting"
                  },
                  "type": "input",
                  "id": "start",
                  "classList": [
                    "start-setting"
                  ]
                },
                {
                  "attr": {
                    "debugLine": "pages/index/index:13",
                    "className": "station-divider"
                  },
                  "type": "div",
                  "classList": [
                    "station-divider"
                  ]
                },
                {
                  "attr": {
                    "debugLine": "pages/index/index:14",
                    "className": "start-align"
                  },
                  "type": "div",
                  "classList": [
                    "start-align"
                  ],
                  "children": [
                    {
                      "attr": {
                        "debugLine": "pages/index/index:15",
                        "className": "start-title",
                        "value": "终到站"
                      },
                      "type": "text",
                      "classList": [
                        "start-title"
                      ]
                    }
                  ]
                },
                {
                  "attr": {
                    "debugLine": "pages/index/index:17",
                    "type": "text",
                    "id": "end",
                    "placeholder": "设置车站",
                    "className": "start-setting"
                  },
                  "type": "input",
                  "id": "end",
                  "classList": [
                    "start-setting"
                  ]
                }
              ]
            },
            {
              "attr": {
                "debugLine": "pages/index/index:19",
                "className": "icon-area"
              },
              "type": "div",
              "classList": [
                "icon-area"
              ],
              "children": [
                {
                  "attr": {
                    "debugLine": "pages/index/index:20",
                    "src": "/common/images/swap_vert.svg",
                    "className": "swapicon"
                  },
                  "type": "image",
                  "classList": [
                    "swapicon"
                  ]
                }
              ]
            }
          ]
        },
        {
          "attr": {
            "debugLine": "pages/index/index:23",
            "className": "cardbutton",
            "value": "添加服务卡片"
          },
          "type": "button",
          "classList": [
            "cardbutton"
          ]
        },
        {
          "attr": {
            "debugLine": "pages/index/index:24",
            "className": "divide-line"
          },
          "type": "div",
          "classList": [
            "divide-line"
          ]
        },
        {
          "attr": {
            "debugLine": "pages/index/index:25",
            "className": "page-title2",
            "value": "发车信息"
          },
          "type": "div",
          "classList": [
            "page-title2"
          ]
        },
        {
          "attr": {
            "debugLine": "pages/index/index:26",
            "className": "train-infos"
          },
          "type": "div",
          "classList": [
            "train-infos"
          ],
          "children": [
            {
              "attr": {
                "debugLine": "pages/index/index:27",
                "className": "page-title",
                "value": "已有服务卡片"
              },
              "type": "text",
              "classList": [
                "page-title"
              ]
            }
          ]
        },
        {
          "attr": {
            "debugLine": "pages/index/index:29",
            "className": "NavBottons"
          },
          "type": "div",
          "classList": [
            "NavBottons"
          ],
          "children": [
            {
              "attr": {
                "debugLine": "pages/index/index:30",
                "className": "NavBotton"
              },
              "type": "div",
              "classList": [
                "NavBotton"
              ],
              "children": [
                {
                  "attr": {
                    "debugLine": "pages/index/index:31",
                    "src": "/common/images/tram-on.svg",
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
                    "debugLine": "pages/index/index:32",
                    "className": "buttontext-on",
                    "value": "列车情报"
                  },
                  "type": "text",
                  "classList": [
                    "buttontext-on"
                  ]
                }
              ]
            },
            {
              "attr": {
                "debugLine": "pages/index/index:34",
                "className": "NavBotton"
              },
              "type": "div",
              "classList": [
                "NavBotton"
              ],
              "children": [
                {
                  "attr": {
                    "debugLine": "pages/index/index:35",
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
                    "debugLine": "pages/index/index:36",
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
                "debugLine": "pages/index/index:38",
                "className": "NavBotton"
              },
              "type": "div",
              "classList": [
                "NavBotton"
              ],
              "children": [
                {
                  "attr": {
                    "debugLine": "pages/index/index:39",
                    "src": "/common/images/settings.svg",
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
                    "debugLine": "pages/index/index:40",
                    "className": "buttontext",
                    "value": "设置"
                  },
                  "type": "text",
                  "classList": [
                    "buttontext"
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

/***/ "./lib/script.js!./node_modules/babel-loader/lib/index.js?presets[]=C:\\Users\\Hu Shengyuan\\AppData\\Local\\Huawei\\Sdk\\hmscore\\2.2.0\\js\\build-tools\\ace-loader\\node_modules\\@babel\\preset-env&plugins[]=C:\\Users\\Hu Shengyuan\\AppData\\Local\\Huawei\\Sdk\\hmscore\\2.2.0\\js\\build-tools\\ace-loader\\node_modules\\@babel\\plugin-transform-modules-commonjs&comments=false!./lib/resource-reference-script.js!../../../../../../../../../../../HarmonyProject/CRGuide/entry/src/main/js/default/pages/index/index.js":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./lib/script.js!./node_modules/babel-loader/lib?presets[]=C:/Users/Hu Shengyuan/AppData/Local/Huawei/Sdk/hmscore/2.2.0/js/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=C:/Users/Hu Shengyuan/AppData/Local/Huawei/Sdk/hmscore/2.2.0/js/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!./lib/resource-reference-script.js!C:/HarmonyProject/CRGuide/entry/src/main/js/default/pages/index/index.js ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    startStation: "Not_Set",
    endStation: "Not_Set"
  },
  onInit: function onInit() {},
  ToHome: function ToHome() {
    _system["default"].push({
      uri: "pages/index/index"
    });
  },
  ToInfo: function ToInfo() {
    _system["default"].push({
      uri: "pages/info/info"
    });
  },
  ToSetting: function ToSetting() {
    _system["default"].push({
      uri: "pages/setting/setting"
    });
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
//# sourceMappingURL=index.js.map