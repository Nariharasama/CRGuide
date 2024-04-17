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
/******/ 	return __webpack_require__(__webpack_require__.s = "../../../../../../../../../../../HarmonyProject/CRGuide/entry/src/main/js/default/pages/info/info.hml?entry");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../../../../../../../../../HarmonyProject/CRGuide/entry/src/main/js/default/pages/info/info.hml?entry":
/*!*************************************************************************************!*\
  !*** C:/HarmonyProject/CRGuide/entry/src/main/js/default/pages/info/info.hml?entry ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(/*! !../../../../../../../../../Users/Hu Shengyuan/AppData/Local/Huawei/Sdk/hmscore/2.2.0/js/build-tools/ace-loader/lib/json.js!../../../../../../../../../Users/Hu Shengyuan/AppData/Local/Huawei/Sdk/hmscore/2.2.0/js/build-tools/ace-loader/lib/template.js!./info.hml */ "./lib/json.js!./lib/template.js!../../../../../../../../../../../HarmonyProject/CRGuide/entry/src/main/js/default/pages/info/info.hml")
var $app_style$ = __webpack_require__(/*! !../../../../../../../../../Users/Hu Shengyuan/AppData/Local/Huawei/Sdk/hmscore/2.2.0/js/build-tools/ace-loader/lib/json.js!../../../../../../../../../Users/Hu Shengyuan/AppData/Local/Huawei/Sdk/hmscore/2.2.0/js/build-tools/ace-loader/lib/style.js!./info.css */ "./lib/json.js!./lib/style.js!../../../../../../../../../../../HarmonyProject/CRGuide/entry/src/main/js/default/pages/info/info.css")
var $app_script$ = __webpack_require__(/*! !../../../../../../../../../Users/Hu Shengyuan/AppData/Local/Huawei/Sdk/hmscore/2.2.0/js/build-tools/ace-loader/lib/script.js!../../../../../../../../../Users/Hu Shengyuan/AppData/Local/Huawei/Sdk/hmscore/2.2.0/js/build-tools/ace-loader/node_modules/babel-loader?presets[]=C:/Users/Hu Shengyuan/AppData/Local/Huawei/Sdk/hmscore/2.2.0/js/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=C:/Users/Hu Shengyuan/AppData/Local/Huawei/Sdk/hmscore/2.2.0/js/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!../../../../../../../../../Users/Hu Shengyuan/AppData/Local/Huawei/Sdk/hmscore/2.2.0/js/build-tools/ace-loader/lib/resource-reference-script.js!./info.js */ "./lib/script.js!./node_modules/babel-loader/lib/index.js?presets[]=C:\\Users\\Hu Shengyuan\\AppData\\Local\\Huawei\\Sdk\\hmscore\\2.2.0\\js\\build-tools\\ace-loader\\node_modules\\@babel\\preset-env&plugins[]=C:\\Users\\Hu Shengyuan\\AppData\\Local\\Huawei\\Sdk\\hmscore\\2.2.0\\js\\build-tools\\ace-loader\\node_modules\\@babel\\plugin-transform-modules-commonjs&comments=false!./lib/resource-reference-script.js!../../../../../../../../../../../HarmonyProject/CRGuide/entry/src/main/js/default/pages/info/info.js")

$app_define$('@app-component/info', [], function($app_require$, $app_exports$, $app_module$) {

$app_script$($app_module$, $app_exports$, $app_require$)
if ($app_exports$.__esModule && $app_exports$.default) {
$app_module$.exports = $app_exports$.default
}

$app_module$.exports.template = $app_template$

$app_module$.exports.style = $app_style$

})
$app_bootstrap$('@app-component/info',undefined,undefined)

/***/ }),

/***/ "./lib/json.js!./lib/style.js!../../../../../../../../../../../HarmonyProject/CRGuide/entry/src/main/js/default/pages/info/info.css":
/*!************************************************************************************************************!*\
  !*** ./lib/json.js!./lib/style.js!C:/HarmonyProject/CRGuide/entry/src/main/js/default/pages/info/info.css ***!
  \************************************************************************************************************/
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
  ".title-area": {
    "width": "100%",
    "height": "48px",
    "display": "flex",
    "flexGrow": 0
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
  ".info-area": {
    "flexGrow": 1,
    "width": "100%",
    "marginTop": "8px",
    "paddingLeft": "16px",
    "paddingRight": "16px",
    "flexDirection": "column",
    "display": "flex",
    "overflow": "scroll"
  },
  ".info-card": {
    "backgroundColor": "#fbf8ff",
    "borderBottomLeftRadius": "24px",
    "borderBottomRightRadius": "24px",
    "borderTopLeftRadius": "24px",
    "borderTopRightRadius": "24px",
    "minHeight": "160px",
    "width": "100%",
    "display": "flex",
    "marginTop": "16px",
    "paddingTop": "16px",
    "paddingRight": "16px",
    "paddingBottom": "16px",
    "paddingLeft": "16px",
    "flexDirection": "column"
  },
  ".card-title": {
    "color": "#000000",
    "textAlign": "left",
    "fontFamily": "'Roboto-Medium', sans-serif",
    "fontSize": "14px",
    "lineHeight": "20px",
    "fontWeight": "500",
    "display": "flex",
    "width": "100%"
  },
  ".card-content": {
    "color": "#000000",
    "textAlign": "left",
    "fontFamily": "'Roboto-Regular', sans-serif",
    "fontSize": "12px",
    "lineHeight": "16px",
    "fontWeight": "400",
    "position": "relative",
    "width": "100%",
    "display": "flex",
    "alignItems": "center",
    "justifyContent": "flex-start",
    "marginTop": "8px"
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

/***/ "./lib/json.js!./lib/template.js!../../../../../../../../../../../HarmonyProject/CRGuide/entry/src/main/js/default/pages/info/info.hml":
/*!***************************************************************************************************************!*\
  !*** ./lib/json.js!./lib/template.js!C:/HarmonyProject/CRGuide/entry/src/main/js/default/pages/info/info.hml ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "attr": {
    "debugLine": "pages/info/info:1",
    "className": "index"
  },
  "type": "div",
  "classList": [
    "index"
  ],
  "children": [
    {
      "attr": {
        "debugLine": "pages/info/info:2",
        "className": "background-main"
      },
      "type": "div",
      "classList": [
        "background-main"
      ],
      "children": [
        {
          "attr": {
            "debugLine": "pages/info/info:3",
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
        "debugLine": "pages/info/info:5",
        "className": "main-container"
      },
      "type": "div",
      "classList": [
        "main-container"
      ],
      "children": [
        {
          "attr": {
            "debugLine": "pages/info/info:6",
            "className": "title-area"
          },
          "type": "div",
          "classList": [
            "title-area"
          ],
          "children": [
            {
              "attr": {
                "debugLine": "pages/info/info:7",
                "className": "page-title",
                "value": "教程和提示"
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
            "debugLine": "pages/info/info:9",
            "className": "info-area"
          },
          "type": "div",
          "classList": [
            "info-area"
          ],
          "children": [
            {
              "attr": {
                "debugLine": "pages/info/info:10",
                "className": "info-card"
              },
              "type": "div",
              "classList": [
                "info-card"
              ],
              "children": [
                {
                  "attr": {
                    "debugLine": "pages/info/info:11",
                    "className": "card-title",
                    "value": "如何使用本软件（服务卡片）"
                  },
                  "type": "text",
                  "classList": [
                    "card-title"
                  ]
                },
                {
                  "attr": {
                    "debugLine": "pages/info/info:12",
                    "className": "card-content",
                    "value": "1.在列车情报页面输入出发车站和到达车站，点击添加服务卡片会添加一个当前车站设置的服务卡片。若是需要换乘，可以多次添加，将每一次行程单独添加为一个服务卡片。右侧转换按钮可以切换始发终到站。"
                  },
                  "type": "text",
                  "classList": [
                    "card-content"
                  ]
                },
                {
                  "attr": {
                    "debugLine": "pages/info/info:13",
                    "className": "card-content",
                    "value": "2.列查信息中左侧的图形表示列车剩余的座位数，绿色圆圈表示座位有大量空余，橙色三角表示座位紧张，红色叉表示暂无余座。该座位数只会统计设置中座席等级的座位数，例如在设置中设置为二等座，则只统计二等座的数量请根据您所购买的定期/定次票的种类在设置中进行设定。"
                  },
                  "type": "text",
                  "classList": [
                    "card-content"
                  ]
                },
                {
                  "attr": {
                    "debugLine": "pages/info/info:14",
                    "className": "card-content",
                    "value": "3.由于目前国铁定次/定期票仅支持高速铁路列车，故列车信息中仅显示列车种别为G/C，D和S的列车。 右边的倒计时显示的是目前距发车的剩余时间，请在合理估计进展检票时间后选择预乘坐的列车。"
                  },
                  "type": "text",
                  "classList": [
                    "card-content"
                  ]
                }
              ]
            },
            {
              "attr": {
                "debugLine": "pages/info/info:16",
                "className": "info-card"
              },
              "type": "div",
              "classList": [
                "info-card"
              ],
              "children": [
                {
                  "attr": {
                    "debugLine": "pages/info/info:17",
                    "className": "card-title",
                    "value": "关于国铁列车"
                  },
                  "type": "text",
                  "classList": [
                    "card-title"
                  ]
                },
                {
                  "attr": {
                    "debugLine": "pages/info/info:18",
                    "className": "card-content",
                    "value": "1.关于不同列车种别：G字头列车通常为长途快速列车运行速度在300km/h以上，由于国铁会优先售卖长途票，故该种别列车座席会较为紧张；C字头列车为短途城际列车，停站多，速度在200km/h左右，由于该种别列车车次多且仅服务小范围都市圈，故座席较为宽松；D字头列车为低速长途高速铁路，速度和停车站与C字头列车相似，但行程较长故也易于出现座席紧张的问题；S字头列车为国铁在部分城市圈设置的通勤专用列车，这些列车有固定的停车站和时间，不售卖普通车票也不在时刻表内显示。乘坐这些列车请至查询当地时间表。"
                  },
                  "type": "text",
                  "classList": [
                    "card-content"
                  ]
                },
                {
                  "attr": {
                    "debugLine": "pages/info/info:19",
                    "className": "card-content",
                    "value": "2.关于定期/定次票：12306提供定期/定次票的购买服务，购买后有效期内乘坐满足条件的列车无需购票，直接身份证或其他有效证件进检票口后系统会自动分配剩余的座位并将座位号发至提前登记的手机号。"
                  },
                  "type": "text",
                  "classList": [
                    "card-content"
                  ]
                }
              ]
            }
          ]
        },
        {
          "attr": {
            "debugLine": "pages/info/info:22",
            "className": "NavBottons"
          },
          "type": "div",
          "classList": [
            "NavBottons"
          ],
          "children": [
            {
              "attr": {
                "debugLine": "pages/info/info:23",
                "className": "NavBotton"
              },
              "type": "div",
              "classList": [
                "NavBotton"
              ],
              "children": [
                {
                  "attr": {
                    "debugLine": "pages/info/info:24",
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
                    "debugLine": "pages/info/info:25",
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
                "debugLine": "pages/info/info:27",
                "className": "NavBotton"
              },
              "type": "div",
              "classList": [
                "NavBotton"
              ],
              "children": [
                {
                  "attr": {
                    "debugLine": "pages/info/info:28",
                    "src": "/common/images/info-on.svg",
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
                    "debugLine": "pages/info/info:29",
                    "className": "buttontext-on",
                    "value": "相关信息"
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
                "debugLine": "pages/info/info:31",
                "className": "NavBotton"
              },
              "type": "div",
              "classList": [
                "NavBotton"
              ],
              "children": [
                {
                  "attr": {
                    "debugLine": "pages/info/info:32",
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
                    "debugLine": "pages/info/info:33",
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

/***/ "./lib/script.js!./node_modules/babel-loader/lib/index.js?presets[]=C:\\Users\\Hu Shengyuan\\AppData\\Local\\Huawei\\Sdk\\hmscore\\2.2.0\\js\\build-tools\\ace-loader\\node_modules\\@babel\\preset-env&plugins[]=C:\\Users\\Hu Shengyuan\\AppData\\Local\\Huawei\\Sdk\\hmscore\\2.2.0\\js\\build-tools\\ace-loader\\node_modules\\@babel\\plugin-transform-modules-commonjs&comments=false!./lib/resource-reference-script.js!../../../../../../../../../../../HarmonyProject/CRGuide/entry/src/main/js/default/pages/info/info.js":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./lib/script.js!./node_modules/babel-loader/lib?presets[]=C:/Users/Hu Shengyuan/AppData/Local/Huawei/Sdk/hmscore/2.2.0/js/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=C:/Users/Hu Shengyuan/AppData/Local/Huawei/Sdk/hmscore/2.2.0/js/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!./lib/resource-reference-script.js!C:/HarmonyProject/CRGuide/entry/src/main/js/default/pages/info/info.js ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
//# sourceMappingURL=info.js.map