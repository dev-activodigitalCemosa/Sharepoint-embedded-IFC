define("12c88709-d760-46bb-be2e-7644d660adcb_0.0.1", ["@microsoft/sp-webpart-base","@microsoft/sp-http"], function(__WEBPACK_EXTERNAL_MODULE_br4S__, __WEBPACK_EXTERNAL_MODULE_vlQI__) { return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "Jtat");
/******/ })
/************************************************************************/
/******/ ({

/***/ "E0Vl":
/*!****************************************************************!*\
  !*** ./lib/webparts/ifcSimple/IfcSimpleWebPart.module.scss.js ***!
  \****************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* tslint:disable */
__webpack_require__(/*! ./IfcSimpleWebPart.module.css */ "uaKg");
var styles = {
    sharepointViewer: 'sharepointViewer_5cae7d59',
    customButton: 'customButton_5cae7d59',
    buttonHover: 'buttonHover_5cae7d59'
};
/* harmony default export */ __webpack_exports__["e"] = (styles);
/* tslint:enable */ 


/***/ }),

/***/ "JPst":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "Jtat":
/*!****************************************************!*\
  !*** ./lib/webparts/ifcSimple/IfcSimpleWebPart.js ***!
  \****************************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-webpart-base */ "br4S");
/* harmony import */ var _microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _IfcSimpleWebPart_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IfcSimpleWebPart.module.scss */ "E0Vl");
/* harmony import */ var _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/sp-http */ "vlQI");
/* harmony import */ var _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_http__WEBPACK_IMPORTED_MODULE_2__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var IfcSimpleWebPart = /** @class */ (function (_super) {
    __extends(IfcSimpleWebPart, _super);
    function IfcSimpleWebPart() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.listaObjetos = [];
        _this.listaUrl = [];
        _this.listaNombres = [];
        _this.listaTypes = [];
        _this.listaObjetosPrevia = [];
        _this.listaNombresPrevia = [];
        _this.listaTypesPrevia = [];
        return _this;
    }
    IfcSimpleWebPart.prototype.render = function () {
        this.domElement.innerHTML = "\n    <div class=\"".concat(_IfcSimpleWebPart_module_scss__WEBPACK_IMPORTED_MODULE_1__[/* default */ "e"].sharepointViewer, "\" id=\"sharepoint-viewer\"></div>\n    ");
    };
    IfcSimpleWebPart.prototype.onInit = function () {
        var _this = this;
        setTimeout(function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, import(
                        // @ts-ignore
                        /*webpackIgnore: true*/ "https://dev-activodigitalcemosa.github.io/IFCLoader/dist/assets/index-16be9576.js")];
                    case 1:
                        _a.sent();
                        window.dispatchEvent(new Event("resize"));
                        return [2 /*return*/];
                }
            });
        }); }, 1000);
        // Escuchar el evento personalizado del visor
        window.addEventListener("loadModalClick", function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.LoadIfcFiles();
                return [2 /*return*/];
            });
        }); });
        return new Promise(function (resolve) {
            console.log(_IfcSimpleWebPart_module_scss__WEBPACK_IMPORTED_MODULE_1__[/* default */ "e"]);
            console.log("Hello world");
            resolve();
        });
    };
    IfcSimpleWebPart.prototype.ListarCarpetas = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            var docsUrl2, baseUrl2, url2, http2, config2, response2, documents2;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        docsUrl2 = url;
                        baseUrl2 = this.context.pageContext.web.absoluteUrl;
                        url2 = "".concat(baseUrl2, "/").concat(docsUrl2);
                        http2 = this.context.spHttpClient;
                        config2 = _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_2__["SPHttpClient"].configurations.v1;
                        return [4 /*yield*/, http2.get(url2, config2)];
                    case 1:
                        response2 = _a.sent();
                        return [4 /*yield*/, response2.json()];
                    case 2:
                        documents2 = _a.sent();
                        console.log(documents2);
                        if (documents2.value.length > 0) {
                            Object.keys(documents2.value).forEach(function (clave) {
                                _this.listaObjetos.push(documents2.value[clave]["@odata.editLink"]);
                                _this.listaNombres.push("    " + documents2.value[clave].Name);
                                _this.listaTypes.push(documents2.value[clave]["@odata.type"]);
                                _this.listaUrl.push(documents2.value[clave].ServerRelativeUrl);
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    IfcSimpleWebPart.prototype.ListarArchivos = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            var docsUrl2, baseUrl2, url2, http2, config2, response2, documents2;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        docsUrl2 = url;
                        baseUrl2 = this.context.pageContext.web.absoluteUrl;
                        url2 = "".concat(baseUrl2, "/").concat(docsUrl2);
                        http2 = this.context.spHttpClient;
                        config2 = _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_2__["SPHttpClient"].configurations.v1;
                        return [4 /*yield*/, http2.get(url2, config2)];
                    case 1:
                        response2 = _a.sent();
                        return [4 /*yield*/, response2.json()];
                    case 2:
                        documents2 = _a.sent();
                        console.log(documents2);
                        if (documents2.value.length > 0) {
                            Object.keys(documents2.value).forEach(function (clave) {
                                if (documents2.value[clave].Name.indexOf(".ifc") !== -1) {
                                    _this.listaObjetos.push(documents2.value[clave]["@odata.editLink"]);
                                    _this.listaNombres.push("    " + documents2.value[clave].Name);
                                    _this.listaTypes.push(documents2.value[clave]["@odata.type"]);
                                    _this.listaUrl.push(documents2.value[clave].ServerRelativeUrl);
                                }
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    IfcSimpleWebPart.prototype.CarpetaPadre = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            var docsUrl2, baseUrl2, url2, http2, config2, response2, documents2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        docsUrl2 = url;
                        baseUrl2 = this.context.pageContext.web.absoluteUrl;
                        url2 = "".concat(baseUrl2, "/").concat(docsUrl2);
                        http2 = this.context.spHttpClient;
                        config2 = _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_2__["SPHttpClient"].configurations.v1;
                        return [4 /*yield*/, http2.get(url2, config2)];
                    case 1:
                        response2 = _a.sent();
                        return [4 /*yield*/, response2.json()];
                    case 2:
                        documents2 = _a.sent();
                        console.log(documents2);
                        this.listaObjetos.push(documents2["@odata.editLink"]);
                        this.listaNombres.push("    ..." + documents2.Name);
                        this.listaTypes.push(documents2["@odata.type"]);
                        this.listaUrl.push(documents2.ServerRelativeUrl);
                        return [2 /*return*/];
                }
            });
        });
    };
    //funcion para cargar modelo    
    IfcSimpleWebPart.prototype.CargarModelo = function (url, nombre) {
        return __awaiter(this, void 0, void 0, function () {
            var modelo, fetched, buffer, data, PasarIFC;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        modelo = "https://cemosamalaga.sharepoint.com" + url;
                        console.log(modelo);
                        return [4 /*yield*/, fetch(modelo)];
                    case 1:
                        fetched = _a.sent();
                        console.log("fetch terminado");
                        return [4 /*yield*/, fetched.arrayBuffer()];
                    case 2:
                        buffer = _a.sent();
                        console.log("buffer terminado");
                        data = new Uint8Array(buffer);
                        console.log("data terminado");
                        PasarIFC = new CustomEvent("getIFC", {
                            detail: {
                                name: "IFCModel",
                                payload: {
                                    name: "example",
                                    buffer: data,
                                },
                            },
                        });
                        window.dispatchEvent(PasarIFC);
                        return [2 /*return*/];
                }
            });
        });
    };
    IfcSimpleWebPart.prototype.LoadIfcFiles = function () {
        return __awaiter(this, void 0, void 0, function () {
            var modalDiv, modalContent, versionText, modalHeader, titulo, botonHover, botonNormal, crearBotones, showModal;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // #region MODAL
                        this.listaObjetos = [];
                        this.listaNombres = [];
                        this.listaTypes = [];
                        this.listaUrl = [];
                        return [4 /*yield*/, this.ListarCarpetas("_api/Web/GetFolderByServerRelativePath(decodedurl='" + this.context.pageContext.site.serverRelativeUrl + "/Documentos%20compartidos')/Folders")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.ListarArchivos("_api/Web/GetFolderByServerRelativePath(decodedurl='" + this.context.pageContext.site.serverRelativeUrl + "/Documentos%20compartidos')/Files")];
                    case 2:
                        _a.sent();
                        console.log(this.listaNombres);
                        modalDiv = document.createElement('div');
                        modalDiv.id = 'myModal';
                        modalDiv.style.display = 'none';
                        modalDiv.style.position = 'fixed';
                        modalDiv.style.zIndex = '100';
                        modalDiv.style.left = '0';
                        modalDiv.style.top = '0';
                        modalDiv.style.width = '100%';
                        modalDiv.style.height = '100%';
                        modalDiv.style.overflow = 'auto';
                        modalDiv.style.backgroundColor = 'rgba(0,0,0,0.7)';
                        modalContent = document.createElement('div');
                        modalContent.style.backgroundColor = '#000000';
                        modalContent.style.margin = '15% auto';
                        modalContent.style.padding = '20px';
                        modalContent.style.border = '1px solid #888';
                        modalContent.style.width = '55%';
                        modalContent.style.position = 'relative';
                        versionText = document.createElement('div');
                        versionText.style.position = 'absolute';
                        versionText.style.bottom = '10px';
                        versionText.style.right = '10px';
                        versionText.style.color = '#666';
                        versionText.textContent = 'V0.11';
                        modalHeader = document.createElement('div');
                        modalHeader.style.borderBottom = '1px solid #949494'; // Línea blanca
                        modalHeader.style.paddingBottom = '15px'; // Espaciado entre la línea y el título
                        titulo = document.createElement('h2');
                        titulo.textContent = 'IFC Loader';
                        titulo.style.color = '#7CFC00'; // Color del texto del título
                        titulo.style.fontSize = '1.5em';
                        botonHover = function (boton) {
                            boton.style.backgroundColor = '#4CAF50'; // Cambia el color al pasar el cursor
                            boton.style.boxShadow = '0 0 10px rgba(0,0,0,0.3)';
                        };
                        botonNormal = function (boton) {
                            boton.style.backgroundColor = 'transparent'; // Restaura el color original
                            boton.style.boxShadow = 'none';
                        };
                        crearBotones = function () { return __awaiter(_this, void 0, void 0, function () {
                            var _loop_1, this_1, i, closeButton;
                            var _this = this;
                            return __generator(this, function (_a) {
                                modalHeader.appendChild(titulo);
                                modalContent.appendChild(modalHeader);
                                modalContent.appendChild(versionText);
                                _loop_1 = function (i) {
                                    var objetoButton = document.createElement('button');
                                    objetoButton.textContent = this_1.listaNombres[i].toString();
                                    //objetoButton.style.display = 'block';
                                    objetoButton.style.display = 'flex';
                                    objetoButton.style.alignItems = 'flex-start';
                                    objetoButton.style.textAlign = 'left';
                                    objetoButton.style.width = '100%';
                                    objetoButton.style.marginBottom = '8px';
                                    objetoButton.style.margin = '12px 0';
                                    objetoButton.style.padding = '12px'; // Ajusta el padding
                                    objetoButton.style.border = 'none'; // Elimina el borde
                                    objetoButton.style.backgroundColor = 'transparent';
                                    objetoButton.style.color = '#fff'; // Color de texto
                                    objetoButton.style.cursor = 'pointer';
                                    objetoButton.style.borderRadius = '8px';
                                    objetoButton.style.transition = 'background-color 0.3s ease, box-shadow 0.3s ease';
                                    //imagen
                                    if (this_1.listaTypes[i] == "#SP.Folder") {
                                        objetoButton.style.backgroundImage = "url('data:image/png;base64,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')";
                                    }
                                    else {
                                        objetoButton.style.backgroundImage = "url('data:image/png;base64,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')";
                                    }
                                    objetoButton.style.backgroundSize = 'contain';
                                    objetoButton.style.backgroundRepeat = 'no-repeat';
                                    objetoButton.style.backgroundPosition = 'left center';
                                    objetoButton.style.paddingLeft = '80px';
                                    objetoButton.addEventListener('mouseover', function () {
                                        botonHover(objetoButton);
                                    });
                                    objetoButton.addEventListener('mouseout', function () {
                                        botonNormal(objetoButton);
                                    });
                                    // Agregar un evento de clic para cada botón
                                    objetoButton.addEventListener('click', function () { return __awaiter(_this, void 0, void 0, function () {
                                        return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    if (!(this.listaTypes[i] == "#SP.Folder")) return [3 /*break*/, 4];
                                                    while (modalContent.firstChild) {
                                                        modalContent.removeChild(modalContent.firstChild);
                                                    }
                                                    this.listaObjetosPrevia = this.listaObjetos;
                                                    this.listaNombresPrevia = this.listaNombres;
                                                    this.listaTypesPrevia = this.listaTypes;
                                                    this.listaObjetos = [];
                                                    this.listaNombres = [];
                                                    this.listaTypes = [];
                                                    this.listaUrl = [];
                                                    return [4 /*yield*/, this.CarpetaPadre("_api/" + this.listaObjetosPrevia[i] + "/ParentFolder")];
                                                case 1:
                                                    _a.sent();
                                                    return [4 /*yield*/, this.ListarCarpetas("_api/" + this.listaObjetosPrevia[i] + "/Folders")];
                                                case 2:
                                                    _a.sent();
                                                    return [4 /*yield*/, this.ListarArchivos("_api/" + this.listaObjetosPrevia[i] + "/Files")];
                                                case 3:
                                                    _a.sent();
                                                    crearBotones();
                                                    return [3 /*break*/, 6];
                                                case 4:
                                                    if (!(this.listaTypes[i] == "#SP.File")) return [3 /*break*/, 6];
                                                    console.log(this.listaUrl);
                                                    return [4 /*yield*/, this.CargarModelo(this.listaUrl[i], this.listaNombres[i])];
                                                case 5:
                                                    _a.sent();
                                                    alert('Cargaste el modelo: ' + this.listaNombres[i]);
                                                    _a.label = 6;
                                                case 6: return [2 /*return*/];
                                            }
                                        });
                                    }); });
                                    // Agregar botón al contenido modal
                                    modalContent.appendChild(objetoButton);
                                };
                                this_1 = this;
                                for (i = 0; i < this.listaObjetos.length; i++) {
                                    _loop_1(i);
                                }
                                closeButton = document.createElement('span');
                                closeButton.innerHTML = '&times;';
                                closeButton.style.position = 'absolute';
                                closeButton.style.top = '4px';
                                closeButton.style.right = '4px';
                                closeButton.style.fontSize = '30px';
                                closeButton.style.fontWeight = 'bold';
                                closeButton.style.cursor = 'pointer';
                                closeButton.style.color = 'white';
                                closeButton.style.backgroundColor = 'transparent';
                                closeButton.style.transition = 'color 0.3s ease';
                                closeButton.style.padding = '8px 11px';
                                closeButton.style.lineHeight = '0.75';
                                closeButton.style.verticalAlign = 'center';
                                closeButton.style.borderRadius = '40%';
                                closeButton.addEventListener('mouseover', function () {
                                    closeButton.style.color = 'red'; // Cambiar a rojo al pasar el ratón
                                });
                                // Restaurar el color original al salir del botón
                                closeButton.addEventListener('mouseout', function () {
                                    closeButton.style.color = 'white'; // Restaurar el color transparente al salir del botón
                                });
                                // Agregar el evento de clic para cerrar la ventana modal
                                closeButton.onclick = function () {
                                    modalDiv.style.display = 'none';
                                };
                                // Agregar elementos al DOM
                                modalContent.appendChild(closeButton);
                                modalDiv.appendChild(modalContent);
                                document.body.appendChild(modalDiv);
                                return [2 /*return*/];
                            });
                        }); };
                        showModal = function () {
                            crearBotones();
                            modalDiv.style.display = 'block';
                        };
                        // #endregion
                        showModal();
                        return [2 /*return*/];
                }
            });
        });
    }; //fin 
    return IfcSimpleWebPart;
}(_microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_0__["BaseClientSideWebPart"]));
/* harmony default export */ __webpack_exports__["default"] = (IfcSimpleWebPart);


/***/ }),

/***/ "br4S":
/*!*********************************************!*\
  !*** external "@microsoft/sp-webpart-base" ***!
  \*********************************************/
/*! no static exports found */
/*! exports used: BaseClientSideWebPart */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_br4S__;

/***/ }),

/***/ "uaKg":
/*!************************************************************!*\
  !*** ./lib/webparts/ifcSimple/IfcSimpleWebPart.module.css ***!
  \************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js??ref--6-2!./IfcSimpleWebPart.module.css */ "uzCv");
var loader = __webpack_require__(/*! ./node_modules/@microsoft/load-themed-styles/lib/index.js */ "xMn6");

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], true);

if(content.locals) module.exports = content.locals;

/***/ }),

/***/ "uzCv":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ref--6-2!./lib/webparts/ifcSimple/IfcSimpleWebPart.module.css ***!
  \******************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "JPst");
exports = ___CSS_LOADER_API_IMPORT___(false);
exports.push([module.i, "@import url(https://fonts.googleapis.com/icon?family=Material+Icons);"]);
exports.push([module.i, "@import url(https://dev-activodigitalcemosa.github.io/IFCLoader/dist/assets/index-65c80c14.css);"]);
// Module
exports.push([module.i, ".sharepointViewer_5cae7d59{height:30rem}.customButton_5cae7d59{background-color:#4caf50;border:none;border-radius:5px;color:#fff;cursor:pointer;display:inline-block;font-size:16px;margin:4px 2px;padding:10px 20px;text-align:center;text-decoration:none}.customButton_5cae7d59:hover{background-color:#45a049}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "vlQI":
/*!*************************************!*\
  !*** external "@microsoft/sp-http" ***!
  \*************************************/
/*! no static exports found */
/*! exports used: SPHttpClient */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_vlQI__;

/***/ }),

/***/ "xMn6":
/*!*****************************************************************!*\
  !*** ./node_modules/@microsoft/load-themed-styles/lib/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
// Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
// See LICENSE in the project root for license information.
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.splitStyles = exports.detokenize = exports.clearStyles = exports.loadTheme = exports.flush = exports.configureRunMode = exports.configureLoadStyles = exports.loadStyles = void 0;
// Store the theming state in __themeState__ global scope for reuse in the case of duplicate
// load-themed-styles hosted on the page.
var _root = typeof window === 'undefined' ? global : window; // eslint-disable-line @typescript-eslint/no-explicit-any
// Nonce string to inject into script tag if one provided. This is used in CSP (Content Security Policy).
var _styleNonce = _root && _root.CSPSettings && _root.CSPSettings.nonce;
var _themeState = initializeThemeState();
/**
 * Matches theming tokens. For example, "[theme: themeSlotName, default: #FFF]" (including the quotes).
 */
var _themeTokenRegex = /[\'\"]\[theme:\s*(\w+)\s*(?:\,\s*default:\s*([\\"\']?[\.\,\(\)\#\-\s\w]*[\.\,\(\)\#\-\w][\"\']?))?\s*\][\'\"]/g;
var now = function () {
    return typeof performance !== 'undefined' && !!performance.now ? performance.now() : Date.now();
};
function measure(func) {
    var start = now();
    func();
    var end = now();
    _themeState.perf.duration += end - start;
}
/**
 * initialize global state object
 */
function initializeThemeState() {
    var state = _root.__themeState__ || {
        theme: undefined,
        lastStyleElement: undefined,
        registeredStyles: []
    };
    if (!state.runState) {
        state = __assign(__assign({}, state), { perf: {
                count: 0,
                duration: 0
            }, runState: {
                flushTimer: 0,
                mode: 0 /* Mode.sync */,
                buffer: []
            } });
    }
    if (!state.registeredThemableStyles) {
        state = __assign(__assign({}, state), { registeredThemableStyles: [] });
    }
    _root.__themeState__ = state;
    return state;
}
/**
 * Loads a set of style text. If it is registered too early, we will register it when the window.load
 * event is fired.
 * @param {string | ThemableArray} styles Themable style text to register.
 * @param {boolean} loadAsync When true, always load styles in async mode, irrespective of current sync mode.
 */
function loadStyles(styles, loadAsync) {
    if (loadAsync === void 0) { loadAsync = false; }
    measure(function () {
        var styleParts = Array.isArray(styles) ? styles : splitStyles(styles);
        var _a = _themeState.runState, mode = _a.mode, buffer = _a.buffer, flushTimer = _a.flushTimer;
        if (loadAsync || mode === 1 /* Mode.async */) {
            buffer.push(styleParts);
            if (!flushTimer) {
                _themeState.runState.flushTimer = asyncLoadStyles();
            }
        }
        else {
            applyThemableStyles(styleParts);
        }
    });
}
exports.loadStyles = loadStyles;
/**
 * Allows for customizable loadStyles logic. e.g. for server side rendering application
 * @param {(processedStyles: string, rawStyles?: string | ThemableArray) => void}
 * a loadStyles callback that gets called when styles are loaded or reloaded
 */
function configureLoadStyles(loadStylesFn) {
    _themeState.loadStyles = loadStylesFn;
}
exports.configureLoadStyles = configureLoadStyles;
/**
 * Configure run mode of load-themable-styles
 * @param mode load-themable-styles run mode, async or sync
 */
function configureRunMode(mode) {
    _themeState.runState.mode = mode;
}
exports.configureRunMode = configureRunMode;
/**
 * external code can call flush to synchronously force processing of currently buffered styles
 */
function flush() {
    measure(function () {
        var styleArrays = _themeState.runState.buffer.slice();
        _themeState.runState.buffer = [];
        var mergedStyleArray = [].concat.apply([], styleArrays);
        if (mergedStyleArray.length > 0) {
            applyThemableStyles(mergedStyleArray);
        }
    });
}
exports.flush = flush;
/**
 * register async loadStyles
 */
function asyncLoadStyles() {
    // Use "self" to distinguish conflicting global typings for setTimeout() from lib.dom.d.ts vs Jest's @types/node
    // https://github.com/jestjs/jest/issues/14418
    return self.setTimeout(function () {
        _themeState.runState.flushTimer = 0;
        flush();
    }, 0);
}
/**
 * Loads a set of style text. If it is registered too early, we will register it when the window.load event
 * is fired.
 * @param {string} styleText Style to register.
 * @param {IStyleRecord} styleRecord Existing style record to re-apply.
 */
function applyThemableStyles(stylesArray, styleRecord) {
    if (_themeState.loadStyles) {
        _themeState.loadStyles(resolveThemableArray(stylesArray).styleString, stylesArray);
    }
    else {
        registerStyles(stylesArray);
    }
}
/**
 * Registers a set theme tokens to find and replace. If styles were already registered, they will be
 * replaced.
 * @param {theme} theme JSON object of theme tokens to values.
 */
function loadTheme(theme) {
    _themeState.theme = theme;
    // reload styles.
    reloadStyles();
}
exports.loadTheme = loadTheme;
/**
 * Clear already registered style elements and style records in theme_State object
 * @param option - specify which group of registered styles should be cleared.
 * Default to be both themable and non-themable styles will be cleared
 */
function clearStyles(option) {
    if (option === void 0) { option = 3 /* ClearStyleOptions.all */; }
    if (option === 3 /* ClearStyleOptions.all */ || option === 2 /* ClearStyleOptions.onlyNonThemable */) {
        clearStylesInternal(_themeState.registeredStyles);
        _themeState.registeredStyles = [];
    }
    if (option === 3 /* ClearStyleOptions.all */ || option === 1 /* ClearStyleOptions.onlyThemable */) {
        clearStylesInternal(_themeState.registeredThemableStyles);
        _themeState.registeredThemableStyles = [];
    }
}
exports.clearStyles = clearStyles;
function clearStylesInternal(records) {
    records.forEach(function (styleRecord) {
        var styleElement = styleRecord && styleRecord.styleElement;
        if (styleElement && styleElement.parentElement) {
            styleElement.parentElement.removeChild(styleElement);
        }
    });
}
/**
 * Reloads styles.
 */
function reloadStyles() {
    if (_themeState.theme) {
        var themableStyles = [];
        for (var _i = 0, _a = _themeState.registeredThemableStyles; _i < _a.length; _i++) {
            var styleRecord = _a[_i];
            themableStyles.push(styleRecord.themableStyle);
        }
        if (themableStyles.length > 0) {
            clearStyles(1 /* ClearStyleOptions.onlyThemable */);
            applyThemableStyles([].concat.apply([], themableStyles));
        }
    }
}
/**
 * Find theme tokens and replaces them with provided theme values.
 * @param {string} styles Tokenized styles to fix.
 */
function detokenize(styles) {
    if (styles) {
        styles = resolveThemableArray(splitStyles(styles)).styleString;
    }
    return styles;
}
exports.detokenize = detokenize;
/**
 * Resolves ThemingInstruction objects in an array and joins the result into a string.
 * @param {ThemableArray} splitStyleArray ThemableArray to resolve and join.
 */
function resolveThemableArray(splitStyleArray) {
    var theme = _themeState.theme;
    var themable = false;
    // Resolve the array of theming instructions to an array of strings.
    // Then join the array to produce the final CSS string.
    var resolvedArray = (splitStyleArray || []).map(function (currentValue) {
        var themeSlot = currentValue.theme;
        if (themeSlot) {
            themable = true;
            // A theming annotation. Resolve it.
            var themedValue = theme ? theme[themeSlot] : undefined;
            var defaultValue = currentValue.defaultValue || 'inherit';
            // Warn to console if we hit an unthemed value even when themes are provided, but only if "DEBUG" is true.
            // Allow the themedValue to be undefined to explicitly request the default value.
            if (theme &&
                !themedValue &&
                console &&
                !(themeSlot in theme) &&
                "boolean" !== 'undefined' &&
                true) {
                // eslint-disable-next-line no-console
                console.warn("Theming value not provided for \"".concat(themeSlot, "\". Falling back to \"").concat(defaultValue, "\"."));
            }
            return themedValue || defaultValue;
        }
        else {
            // A non-themable string. Preserve it.
            return currentValue.rawString;
        }
    });
    return {
        styleString: resolvedArray.join(''),
        themable: themable
    };
}
/**
 * Split tokenized CSS into an array of strings and theme specification objects
 * @param {string} styles Tokenized styles to split.
 */
function splitStyles(styles) {
    var result = [];
    if (styles) {
        var pos = 0; // Current position in styles.
        var tokenMatch = void 0;
        while ((tokenMatch = _themeTokenRegex.exec(styles))) {
            var matchIndex = tokenMatch.index;
            if (matchIndex > pos) {
                result.push({
                    rawString: styles.substring(pos, matchIndex)
                });
            }
            result.push({
                theme: tokenMatch[1],
                defaultValue: tokenMatch[2] // May be undefined
            });
            // index of the first character after the current match
            pos = _themeTokenRegex.lastIndex;
        }
        // Push the rest of the string after the last match.
        result.push({
            rawString: styles.substring(pos)
        });
    }
    return result;
}
exports.splitStyles = splitStyles;
/**
 * Registers a set of style text. If it is registered too early, we will register it when the
 * window.load event is fired.
 * @param {ThemableArray} styleArray Array of IThemingInstruction objects to register.
 * @param {IStyleRecord} styleRecord May specify a style Element to update.
 */
function registerStyles(styleArray) {
    if (typeof document === 'undefined') {
        return;
    }
    var head = document.getElementsByTagName('head')[0];
    var styleElement = document.createElement('style');
    var _a = resolveThemableArray(styleArray), styleString = _a.styleString, themable = _a.themable;
    styleElement.setAttribute('data-load-themed-styles', 'true');
    if (_styleNonce) {
        styleElement.setAttribute('nonce', _styleNonce);
    }
    styleElement.appendChild(document.createTextNode(styleString));
    _themeState.perf.count++;
    head.appendChild(styleElement);
    var ev = document.createEvent('HTMLEvents');
    ev.initEvent('styleinsert', true /* bubbleEvent */, false /* cancelable */);
    ev.args = {
        newStyle: styleElement
    };
    document.dispatchEvent(ev);
    var record = {
        styleElement: styleElement,
        themableStyle: styleArray
    };
    if (themable) {
        _themeState.registeredThemableStyles.push(record);
    }
    else {
        _themeState.registeredStyles.push(record);
    }
}
//# sourceMappingURL=index.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "yLpj")))

/***/ }),

/***/ "yLpj":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ })

/******/ })});;
//# sourceMappingURL=ifc-simple-web-part.js.map