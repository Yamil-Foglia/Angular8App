function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- for PC -->\r\n<div class=\"d-none d-sm-block\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row last-row\">\r\n            <div class=\"col-3\">\r\n                <h1 class=\"text-center text-color display-4\">\r\n                    new technology \r\n                </h1>\r\n            </div>\r\n            <div class=\"col-3\">\r\n                <button class=\"btn btn-outline-info full-width m-top-max\" routerLink=\"/add\">Agregar Producto</button>\r\n            </div>\r\n            <div class=\"col-3\">\r\n                <button class=\"btn btn-outline-info full-width m-top-max\" routerLink=\"/list\">Lista de Productos</button>\r\n            </div>\r\n            <div class=\"col-3\">\r\n                <button class=\"btn btn-outline-info full-width m-top-max\" routerLink=\"/search\">Buscar Productos</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n<!-- for SM -->\r\n<div class=\"d-block d-sm-none\">\r\n    <div class=\"container\">\r\n\r\n    </div>\r\n</div>\r\n\r\n<router-outlet></router-outlet>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/views/add/add.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/views/add/add.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsViewsAddAddComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- for PC -->\n<div class=\"d-none d-sm-block\">\n    <div class=\"container\">\n        <div class=\"row m-top-max\">\n            <div class=\"col-2\"></div>\n            <div class=\"col-8\">\n                <h1 class=\"text-center text-color display-4\">\n                    Agregar Producto\n                </h1>\n            </div>\n            <div class=\"col-2\"></div>\n        </div>\n        <div class=\"row m-top-max\">\n            <div class=\"col-4\"></div>\n            <div class=\"col-4\"> \n                <input class=\"text-center full-width m-top form-control\" type=\"text\" placeholder=\"Codigo\" [(ngModel)]=\"codigo\">\n            </div>\n            <div class=\"col-4\">\n                <button class=\"btn btn-danger full-width m-top\" *ngIf=\"warning\" >El codigo ingresado ya se encuentra en uso</button>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-4\"></div>\n            <div class=\"col-4\">\n                <input class=\"text-center full-width m-top form-control\" type=\"text\" placeholder=\"Nombre\" [(ngModel)]=\"nombre\">\n            </div>\n            <div class=\"col-4\"></div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-4\"></div>\n            <div class=\"col-4\">\n                <input class=\"text-center full-width m-top form-control\" type=\"text\" placeholder=\"Marca\" [(ngModel)]=\"marca\">\n            </div>\n            <div class=\"col-4\"></div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-4\"></div>\n            <div class=\"col-4\">\n                <input class=\"text-center full-width m-top form-control\" type=\"text\" placeholder=\"Stock\" [(ngModel)]=\"stock\">\n            </div>\n            <div class=\"col-4\"></div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-4\"></div>\n            <div class=\"col-4\">\n                <input class=\"text-center full-width m-top form-control\" type=\"text\" placeholder=\"Precio\" [(ngModel)]=\"precio\">\n            </div>\n            <div class=\"col-4\"></div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-4\"></div>\n            <div class=\"col-4\">\n                <button class=\"btn btn-outline-info full-width m-top\" (click)=\"add()\">Agregar</button>\n            </div>\n            <div class=\"col-4\"></div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-4\"></div>\n            <div class=\"col-4\">\n                <button class=\"btn btn-outline-info full-width m-top\" routerLink=\"/\">Volver</button>\n            </div>\n            <div class=\"col-4\"></div>\n        </div>\n    </div>\n</div>\n\n\n<!-- for SM -->\n<div class=\"d-block d-sm-none\">\n    <div class=\"container\">\n        <div class=\"row m-top-max\">\n            <div class=\"col-12\">\n                <h1 class=\"text-center text-color display-4\">\n                    Agregar Producto\n                </h1>\n            </div>\n        </div>\n\n        <div class=\"row m-top-max\">\n            <div class=\"col-12\">\n                <input class=\"text-center full-width m-top form-control\" type=\"text\" placeholder=\"Codigo\" [(ngModel)]=\"codigo\">\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-12\">\n                <input class=\"text-center full-width m-top form-control\" type=\"text\" placeholder=\"Nombre\" [(ngModel)]=\"nombre\">\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-12\">\n                <input class=\"text-center full-width m-top form-control\" type=\"text\" placeholder=\"Marca\" [(ngModel)]=\"marca\">\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-12\">\n                <input class=\"text-center full-width m-top form-control\" type=\"text\" placeholder=\"Stock\" [(ngModel)]=\"stock\">\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-12\">\n                <input class=\"text-center full-width m-top form-control\" type=\"text\" placeholder=\"Precio\" [(ngModel)]=\"precio\">\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-12\">\n                <button class=\"btn btn-outline-info full-width m-top\" (click)=\"add()\">Agregar</button>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-12\">\n                <button class=\"btn btn-outline-info full-width m-top\" routerLink=\"/\">Volver</button>\n            </div>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/views/app-loading/app-loading.component.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/views/app-loading/app-loading.component.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsViewsAppLoadingAppLoadingComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"spinner-border text-info\" role=\"status\"></div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/views/home/home.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/views/home/home.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsViewsHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- for PC -->\r\n<div class=\"d-none d-sm-block\">\r\n    <div class=\"container\"></div>\r\n</div>\r\n\r\n\r\n<!-- for SM -->\r\n<div class=\"d-block d-sm-none\">\r\n    <div class=\"container\">\r\n        <div class=\"row last-row\">\r\n            <div class=\"col-12\">\r\n                <h1 class=\"text-center text-color display-4\">\r\n                    new technology \r\n                </h1>\r\n            </div>\r\n        </div>\r\n        <div class=\"row last-row\">\r\n            <div class=\"col-12\">\r\n                <h1 class=\"text-center text-color display-4\">\r\n                    <button class=\"btn btn-outline-info full-width m-top-max\" routerLink=\"/add\">Agregar Producto</button>\r\n                </h1>\r\n            </div>\r\n        </div>\r\n        \r\n        <div class=\"row last-row\">\r\n            <div class=\"col-12\">\r\n                <h1 class=\"text-center text-color display-4\">\r\n                    <button class=\"btn btn-outline-info full-width m-top-max\" routerLink=\"/list\">Lista de Productos</button>\r\n                </h1>\r\n            </div>\r\n        </div>\r\n        <div class=\"row last-row\">\r\n            <div class=\"col-12\">\r\n                <h1 class=\"text-center text-color display-4\">\r\n                    <button class=\"btn btn-outline-info full-width m-top-max\" routerLink=\"/search\">Buscar Productos</button>\r\n                </h1>\r\n            </div>\r\n        </div>\r\n        <div class=\"row last-row text-center\">\r\n            <div class=\"col-12 m-top-max-max\">\r\n                <div class=\"card-header text-info\">Contacto</div>\r\n                <div class=\"card-body text-info\">\r\n                    <p class=\"card-text\">newtechnology@gmail.com</p>\r\n                    <p class=\"card-text\">15-5689-3212</p>\r\n                    <p class=\"card-text\">Mexico 2653</p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/views/list/list.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/views/list/list.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsViewsListListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- for PC -->\n<div class=\"d-none d-sm-block\">\n    <div class=\"conteiner\">\n        <div class=\"row m-top-max\">\n            <div class=\"col-2\"></div>\n            <div class=\"col-8\">\n                <h1 class=\"text-center text-color display-4\">\n                    Listado de Productos\n                </h1>\n            </div>\n            <div class=\"col-2\"></div>\n        </div>\n        <div class=\"row m-top-max\">\n            <div class=\"col-5\"></div>\n            <div class=\"col-2 text-center\">\n                <app-app-loading *ngIf=\"isLoading\"></app-app-loading>\n            </div>\n            <div class=\"col-5\"></div>\n        </div>  \n        <div class=\"row m-top-max\" *ngIf=\"!isLoading\">\n            <div class=\"col-4\"></div>\n            <div class=\"col-4\">\n                <ul class=\"full-width\" style=\"padding-left: 0\"><!--Lista-->\n                    <li class=\"list-group-item full-width text-center\" *ngFor=\"let p of productList | async\"><!--Se repite por cada iten que encuentre-->\n                        <div>Codigo:   {{p.codigo}}</div> \n                        <div>Producto: {{p.nombre}}</div> \n                        <div>Marca: {{p.marca}}</div> \n                        <div>Stock:    {{p.stock}}</div>\n                        <div>Precio:   {{p.precio}}</div>\n                        <button class=\"btn btn-outline-info full-width m-top\" (click)=\"delete(p.idFirebase)\"> Eliminar </button>\n                        <button class=\"btn btn-outline-info full-width m-top\" routerLink=\"/modify/{{p.idFirebase}}\"> Modificar </button>\n                    </li> <!--Cada item de la lista-->\n                </ul>\n            </div>\n            <div class=\"col-4\"></div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-2\"></div>\n            <div class=\"col-8\">\n                <button class=\"btn btn-dark full-width m-top\" routerLink=\"/\">Volver</button>\n            </div>\n            <div class=\"col-2\"></div>\n        </div>\n    </div>\n</div>\n\n\n<!-- for SM -->\n<div class=\"d-block d-sm-none\">\n    <div class=\"conteiner\">\n        <div class=\"row m-top-max\">\n            <div class=\"col-12\">\n                <h1 class=\"text-center text-color display-4\">\n                    Listado de Productos\n                </h1>\n            </div>\n        </div>\n        <div class=\"row m-top-max\">\n            <div class=\"col-12 text-center\">\n                <app-app-loading *ngIf=\"isLoading\"></app-app-loading>\n            </div>\n        </div>  \n        <div class=\"row m-top-max\" *ngIf=\"!isLoading\">\n            <div class=\"col-1\"></div>\n            <div class=\"col-10\">\n                <ul class=\"full-width\" style=\"padding-left: 0\"><!--Lista-->\n                    <li class=\"list-group-item full-width text-center\" *ngFor=\"let p of productList | async\"><!--Se repite por cada iten que encuentre-->\n                        <div>Codigo:   {{p.codigo}}</div> \n                        <div>Producto: {{p.nombre}}</div> \n                        <div>Marca: {{p.marca}}</div> \n                        <div>Stock:    {{p.stock}}</div>\n                        <div>Precio:   {{p.precio}}</div>\n                        <button class=\"btn btn-outline-info full-width m-top\" (click)=\"delete(p.idFirebase)\"> Eliminar </button>\n                        <button class=\"btn btn-outline-info full-width m-top\" routerLink=\"/modify/{{p.idFirebase}}\"> Modificar </button>\n                    </li> <!--Cada item de la lista-->\n                </ul>\n            </div>\n            <div class=\"col-1\"></div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-2\"></div>\n            <div class=\"col-8\">\n                <button class=\"btn btn-dark full-width m-top\" routerLink=\"/\">Volver</button>\n            </div>\n            <div class=\"col-2\"></div>\n        </div>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/views/modify/modify.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/views/modify/modify.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsViewsModifyModifyComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- for PC -->\n<div class=\"d-none d-sm-block\">\n    <div class=\"container\">\n        <div class=\"row m-top-max\">\n            <div class=\"col-2\"></div>\n            <div class=\"col-8\">\n                <h1 class=\"text-center text-color display-4\">\n                    Modificacion de Producto\n                </h1>\n            </div>\n            <div class=\"col-2\"></div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-4\"></div>\n            <div class=\"col-4\">\n                <input class=\"full-width text-center m-top form-control\" type=\"text\" placeholder=\"Codigo\" [(ngModel)]=\"codigo\">\n            </div>\n            <div class=\"col-4\"></div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-4\"></div>\n            <div class=\"col-4\">\n                <input class=\"full-width text-center m-top form-control\" type=\"text\" placeholder=\"Nombre\" [(ngModel)]=\"nombre\">\n            </div>\n            <div class=\"col-4\"></div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-4\"></div>\n            <div class=\"col-4\">\n                <input class=\"full-width text-center m-top form-control\" type=\"text\" placeholder=\"Marca\" [(ngModel)]=\"marca\">\n            </div>\n            <div class=\"col-4\"></div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-4\"></div>\n            <div class=\"col-4\">\n                <input class=\"full-width text-center m-top form-control\" type=\"text\" placeholder=\"Stock\" [(ngModel)]=\"stock\">\n            </div>\n            <div class=\"col-4\"></div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-4\"></div>\n            <div class=\"col-4\">\n                <input class=\"full-width text-center m-top form-control\" type=\"text\" placeholder=\"Precio\" [(ngModel)]=\"precio\">\n            </div>\n            <div class=\"col-4\"></div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-4\"></div>\n            <div class=\"col-4\">\n                <button class=\"btn btn-outline-info full-width m-top\" (click)=\"modify()\" routerLink=\"/list\">Confirmar Modificacion</button>\n            </div>\n            <div class=\"col-4\"></div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-4\"></div>\n            <div class=\"col-4\">\n                <button class=\"btn btn-outline-info full-width m-top\" routerLink=\"/list\">Volver</button>\n            </div>\n            <div class=\"col-4\"></div>\n        </div>\n    </div>\n</div>\n\n\n<!-- for SM -->\n<div class=\"d-block d-sm-none\">\n    <div class=\"container\">\n        <div class=\"row m-top-max\">\n            <div class=\"col-12\">\n                <h1 class=\"text-center text-color display-4\">\n                    Modificacion de Producto\n                </h1>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-12\">\n                <input class=\"full-width text-center m-top form-control\" type=\"text\" placeholder=\"Codigo\" [(ngModel)]=\"codigo\">\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-12\">\n                <input class=\"full-width text-center m-top form-control\" type=\"text\" placeholder=\"Nombre\" [(ngModel)]=\"nombre\">\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-12\">\n                <input class=\"full-width text-center m-top form-control\" type=\"text\" placeholder=\"Marca\" [(ngModel)]=\"marca\">\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-12\">\n                <input class=\"full-width text-center m-top form-control\" type=\"text\" placeholder=\"Stock\" [(ngModel)]=\"stock\">\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-12\">\n                <input class=\"full-width text-center m-top form-control\" type=\"text\" placeholder=\"Precio\" [(ngModel)]=\"precio\">\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-12\">\n                <button class=\"btn btn-outline-info full-width m-top\" (click)=\"modify()\" routerLink=\"/list\">Confirmar Modificacion</button>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-12\">\n                <button class=\"btn btn-outline-info full-width m-top\" routerLink=\"/list\">Volver</button>\n            </div>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/views/search/search.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/views/search/search.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsViewsSearchSearchComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n\n\n<!-- for PC -->\n<div class=\"d-none d-sm-block\">\n    <div class=\"container\">\n        <div class=\"row m-top-max\">\n            <div class=\"col-2\"></div>\n            <div class=\"col-8\">\n                <h1 class=\"text-center text-color display-4\">\n                    Buscar Producto\n                </h1>\n            </div>\n            <div class=\"col-2\"></div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-3\"></div>\n            <div class=\"col-6\">\n                <div class=\"input-group mb-3 m-top-max\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Codigo del Producto\" [(ngModel)]=\"codigo\">\n                    <div class=\"input-group-append\">\n                     <button class=\"btn btn-outline-info\" id=\"button-addon2\" (click)= \"getProduct(1)\">Buscar por Codigo</button>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-3\"></div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-3\"></div>\n            <div class=\"col-6\">\n                <div class=\"input-group mb-3 m-top\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Nombre del Producto\" [(ngModel)]=\"nombre\">\n                    <div class=\"input-group-append\">\n                        <button class=\"btn btn-outline-info\" id=\"button-addon2\" (click)= \"getProduct(2)\">Buscar por Nombre</button>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-3\"></div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-3\"></div>\n            <div class=\"col-6\">\n                <div class=\"input-group mb-3 m-top\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Marca del Producto\" [(ngModel)]=\"marca\">\n                    <div class=\"input-group-append\">\n                        <button class=\"btn btn-outline-info\" id=\"button-addon2\" (click)= \"getProduct(3)\">Buscar por Marca</button>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-3\"></div>\n        </div>\n        <div class=\"row m-top\">\n            <div class=\"col-3\"></div>\n            <div class=\"col-6\">\n                <button class=\"btn btn-outline-info full-width m-top\" routerLink=\"/\">Volver</button>\n            </div>\n            <div class=\"col-3\"></div>\n        </div>\n        <div class=\"row m-top-max\">\n            <div class=\"col-5\"></div>\n            <div class=\"col-2 text-center\">\n                <app-app-loading *ngIf=\"isLoading\"></app-app-loading>\n            </div>\n            <div class=\"col-5\"></div>\n        </div>  \n        <div class=\"row m-top-max\" *ngIf=\"!isLoading\">\n            <div class=\"col-4\"></div>\n            <div class=\"col-4\">\n                <ul class=\"full-width\" style=\"padding-left: 0\"><!--Lista-->\n                    <li class=\"list-group-item full-width text-center\" *ngFor=\"let p of productList \"><!--Se repite por cada iten que encuentre-->\n                        <div>Codigo:   {{p.codigo}}</div> \n                        <div>Producto: {{p.nombre}}</div> \n                        <div>Marca: {{p.marca}}</div> \n                        <div>Stock:    {{p.stock}}</div>\n                        <div>Precio:   {{p.precio}}</div>\n                        <button class=\"btn btn-outline-info full-width m-top\" (click)=\"delete(p.idFirebase)\"> Eliminar </button>\n                        <button class=\"btn btn-outline-info full-width m-top\" routerLink=\"/modify/{{p.idFirebase}}\"> Modificar </button>\n                    </li> <!--Cada item de la lista-->\n                </ul>\n            </div>\n            <div class=\"col-4\"></div>\n        </div>\n    </div>\n</div>\n\n\n<!-- for SM -->\n<div class=\"d-block d-sm-none\">\n    <div class=\"container\">\n        <div class=\"row m-top-max\">\n            <div class=\"col-12\">\n                <h1 class=\"text-center text-color display-4\">\n                    Buscar Producto\n                </h1>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-12\">\n                <div class=\"input-group mb-3 m-top-max\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Codigo del Producto\" [(ngModel)]=\"codigo\">\n                    <div class=\"input-group-append\">\n                     <button class=\"btn btn-outline-info\" id=\"button-addon2\" (click)= \"getProduct(1)\">Buscar por Codigo</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-12\">\n                <div class=\"input-group mb-3 m-top\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Nombre del Producto\" [(ngModel)]=\"nombre\">\n                    <div class=\"input-group-append\">\n                        <button class=\"btn btn-outline-info\" id=\"button-addon2\" (click)= \"getProduct(2)\">Buscar por Nombre</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-12\">\n                <div class=\"input-group mb-3 m-top\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Marca del Producto\" [(ngModel)]=\"marca\">\n                    <div class=\"input-group-append\">\n                        <button class=\"btn btn-outline-info\" id=\"button-addon2\" (click)= \"getProduct(3)\">Buscar por Marca</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"row m-top\">\n            <div class=\"col-12\">\n                <button class=\"btn btn-outline-info full-width m-top\" routerLink=\"/\">Volver</button>\n            </div>\n        </div>\n        <div class=\"row m-top-max\">\n            <div class=\"col-12 text-center\">\n                <app-app-loading *ngIf=\"isLoading\"></app-app-loading>\n            </div>\n        </div>  \n        <div class=\"row m-top-max\" *ngIf=\"!isLoading\">\n            <div class=\"col-12\">\n                <ul class=\"full-width\" style=\"padding-left: 0\"><!--Lista-->\n                    <li class=\"list-group-item full-width text-center\" *ngFor=\"let p of productList \"><!--Se repite por cada iten que encuentre-->\n                        <div>Codigo:   {{p.codigo}}</div> \n                        <div>Producto: {{p.nombre}}</div> \n                        <div>Marca: {{p.marca}}</div> \n                        <div>Stock:    {{p.stock}}</div>\n                        <div>Precio:   {{p.precio}}</div>\n                        <button class=\"btn btn-outline-info full-width m-top\" (click)=\"delete(p.idFirebase)\"> Eliminar </button>\n                        <button class=\"btn btn-outline-info full-width m-top\" routerLink=\"/modify/{{p.idFirebase}}\"> Modificar </button>\n                    </li> <!--Cada item de la lista-->\n                </ul>\n            </div>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _components_views_add_add_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/views/add/add.component */
    "./src/app/components/views/add/add.component.ts");
    /* harmony import */


    var _components_views_modify_modify_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/views/modify/modify.component */
    "./src/app/components/views/modify/modify.component.ts");
    /* harmony import */


    var _components_views_list_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/views/list/list.component */
    "./src/app/components/views/list/list.component.ts");
    /* harmony import */


    var _components_views_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/views/home/home.component */
    "./src/app/components/views/home/home.component.ts");
    /* harmony import */


    var _components_views_search_search_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/views/search/search.component */
    "./src/app/components/views/search/search.component.ts");
    /* harmony import */


    var _components_views_app_loading_app_loading_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/views/app-loading/app-loading.component */
    "./src/app/components/views/app-loading/app-loading.component.ts");

    var routes = [{
      path: 'add',
      component: _components_views_add_add_component__WEBPACK_IMPORTED_MODULE_3__["AddComponent"]
    }, {
      path: 'modify/:id',
      component: _components_views_modify_modify_component__WEBPACK_IMPORTED_MODULE_4__["ModifyComponent"]
    }, {
      path: 'list',
      component: _components_views_list_list_component__WEBPACK_IMPORTED_MODULE_5__["ListComponent"]
    }, {
      path: 'search',
      component: _components_views_search_search_component__WEBPACK_IMPORTED_MODULE_7__["SearchComponent"]
    }, {
      path: 'loading',
      component: _components_views_app_loading_app_loading_component__WEBPACK_IMPORTED_MODULE_8__["AppLoadingComponent"]
    }, {
      path: '',
      component: _components_views_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".m-top-max {\n  margin-top: 1.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxZYW1hXFxEZXNrdG9wXFxQaWVEZUFuZ3VsYXJcXFBpZURlQW5ndWxhci9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxrQkFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5tLXRvcC1tYXgge1xyXG4gICAgbWFyZ2luLXRvcDogMS41cmVtO1xyXG59XHJcbiIsIi5tLXRvcC1tYXgge1xuICBtYXJnaW4tdG9wOiAxLjVyZW07XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'PieDeAngular';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_views_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/views/home/home.component */
    "./src/app/components/views/home/home.component.ts");
    /* harmony import */


    var _components_views_add_add_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/views/add/add.component */
    "./src/app/components/views/add/add.component.ts");
    /* harmony import */


    var _components_views_modify_modify_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/views/modify/modify.component */
    "./src/app/components/views/modify/modify.component.ts");
    /* harmony import */


    var _components_views_list_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/views/list/list.component */
    "./src/app/components/views/list/list.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var angularfire2__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! angularfire2 */
    "./node_modules/angularfire2/index.js");
    /* harmony import */


    var angularfire2__WEBPACK_IMPORTED_MODULE_10___default =
    /*#__PURE__*/
    __webpack_require__.n(angularfire2__WEBPACK_IMPORTED_MODULE_10__);
    /* harmony import */


    var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! angularfire2/firestore */
    "./node_modules/angularfire2/firestore/index.js");
    /* harmony import */


    var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_11___default =
    /*#__PURE__*/
    __webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_11__);
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _components_views_search_search_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/views/search/search.component */
    "./src/app/components/views/search/search.component.ts");
    /* harmony import */


    var _components_views_app_loading_app_loading_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/views/app-loading/app-loading.component */
    "./src/app/components/views/app-loading/app-loading.component.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _components_views_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], _components_views_add_add_component__WEBPACK_IMPORTED_MODULE_6__["AddComponent"], _components_views_modify_modify_component__WEBPACK_IMPORTED_MODULE_7__["ModifyComponent"], _components_views_list_list_component__WEBPACK_IMPORTED_MODULE_8__["ListComponent"], _components_views_search_search_component__WEBPACK_IMPORTED_MODULE_13__["SearchComponent"], _components_views_app_loading_app_loading_component__WEBPACK_IMPORTED_MODULE_14__["AppLoadingComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], angularfire2__WEBPACK_IMPORTED_MODULE_10__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_12__["firebaseConfig"]), _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["BrowserAnimationsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_15__["ToastrModule"].forRoot({
        timeOut: 2300,
        positionClass: 'toast-bottom-center',
        preventDuplicates: true
      })],
      providers: [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_11__["AngularFirestore"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/classes/helpers/core-helper.ts":
  /*!************************************************!*\
    !*** ./src/app/classes/helpers/core-helper.ts ***!
    \************************************************/

  /*! exports provided: CoreHelper */

  /***/
  function srcAppClassesHelpersCoreHelperTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CoreHelper", function () {
      return CoreHelper;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var CoreHelper =
    /*#__PURE__*/
    function () {
      function CoreHelper() {
        _classCallCheck(this, CoreHelper);
      }

      _createClass(CoreHelper, null, [{
        key: "convertToObject",
        value: function convertToObject(obj) {
          return JSON.parse(JSON.stringify(obj));
        }
      }]);

      return CoreHelper;
    }();
    /***/

  },

  /***/
  "./src/app/components/views/add/add.component.scss":
  /*!*********************************************************!*\
    !*** ./src/app/components/views/add/add.component.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsViewsAddAddComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdmlld3MvYWRkL2FkZC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/views/add/add.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/views/add/add.component.ts ***!
    \*******************************************************/

  /*! exports provided: AddComponent */

  /***/
  function srcAppComponentsViewsAddAddComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddComponent", function () {
      return AddComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_models_product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/models/product */
    "./src/app/models/product.ts");
    /* harmony import */


    var src_app_services_firebase_local_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/firebase/local-product.service */
    "./src/app/services/firebase/local-product.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");

    var AddComponent =
    /*#__PURE__*/
    function () {
      //private service: ProductService
      function AddComponent(service, toast) {
        _classCallCheck(this, AddComponent);

        this.service = service;
        this.toast = toast;
      }

      _createClass(AddComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "add",
        value: function add() {
          var _this = this;

          var product = src_app_models_product__WEBPACK_IMPORTED_MODULE_2__["Product"].Create(this.codigo, this.nombre, this.marca, this.stock, this.precio);
          this.service.add(product).then(function (wng) {
            if (wng) _this.toast.error('Error en el codigo', 'Error');else _this.toast.info('Creado con exito');
          });
        }
      }]);

      return AddComponent;
    }();

    AddComponent.ctorParameters = function () {
      return [{
        type: src_app_services_firebase_local_product_service__WEBPACK_IMPORTED_MODULE_3__["LocalProductService"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
      }];
    };

    AddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/views/add/add.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add.component.scss */
      "./src/app/components/views/add/add.component.scss")).default]
    })], AddComponent);
    /***/
  },

  /***/
  "./src/app/components/views/app-loading/app-loading.component.scss":
  /*!*************************************************************************!*\
    !*** ./src/app/components/views/app-loading/app-loading.component.scss ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsViewsAppLoadingAppLoadingComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdmlld3MvYXBwLWxvYWRpbmcvYXBwLWxvYWRpbmcuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/components/views/app-loading/app-loading.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/components/views/app-loading/app-loading.component.ts ***!
    \***********************************************************************/

  /*! exports provided: AppLoadingComponent */

  /***/
  function srcAppComponentsViewsAppLoadingAppLoadingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppLoadingComponent", function () {
      return AppLoadingComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppLoadingComponent =
    /*#__PURE__*/
    function () {
      function AppLoadingComponent() {
        _classCallCheck(this, AppLoadingComponent);
      }

      _createClass(AppLoadingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AppLoadingComponent;
    }();

    AppLoadingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-app-loading',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app-loading.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/views/app-loading/app-loading.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app-loading.component.scss */
      "./src/app/components/views/app-loading/app-loading.component.scss")).default]
    })], AppLoadingComponent);
    /***/
  },

  /***/
  "./src/app/components/views/home/home.component.scss":
  /*!***********************************************************!*\
    !*** ./src/app/components/views/home/home.component.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsViewsHomeHomeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".m-top-max {\n  margin-top: 1.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy92aWV3cy9ob21lL0M6XFxVc2Vyc1xcWWFtYVxcRGVza3RvcFxcUGllRGVBbmd1bGFyXFxQaWVEZUFuZ3VsYXIvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHZpZXdzXFxob21lXFxob21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3ZpZXdzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGtCQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3ZpZXdzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuLm0tdG9wLW1heCB7XHJcbiAgICBtYXJnaW4tdG9wOiAxLjVyZW07XHJcbn0iLCIubS10b3AtbWF4IHtcbiAgbWFyZ2luLXRvcDogMS41cmVtO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/views/home/home.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/views/home/home.component.ts ***!
    \*********************************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppComponentsViewsHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/views/home/home.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.component.scss */
      "./src/app/components/views/home/home.component.scss")).default]
    })], HomeComponent);
    /***/
  },

  /***/
  "./src/app/components/views/list/list.component.scss":
  /*!***********************************************************!*\
    !*** ./src/app/components/views/list/list.component.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsViewsListListComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdmlld3MvbGlzdC9saXN0LmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/views/list/list.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/views/list/list.component.ts ***!
    \*********************************************************/

  /*! exports provided: ListComponent */

  /***/
  function srcAppComponentsViewsListListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListComponent", function () {
      return ListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_firebase_local_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/firebase/local-product.service */
    "./src/app/services/firebase/local-product.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var ListComponent =
    /*#__PURE__*/
    function () {
      function ListComponent(service) {
        _classCallCheck(this, ListComponent);

        this.service = service;
      }

      _createClass(ListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.initializeList();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.productSubscription.unsubscribe();
        }
      }, {
        key: "initializeList",
        value: function initializeList() {
          var _this2 = this;

          this.isLoading = true;
          this.productList = this.service.getAll().snapshotChanges();
          this.productSubscription = this.productList.subscribe(function () {
            _this2.isLoading = false;
            _this2.productList = _this2.service.getAll().snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (x) {
              return x.map(function (z) {
                var prd = z.payload.doc.data();
                prd.idFirebase = z.payload.doc.id;
                return prd;
              });
            }));
          });
        }
      }, {
        key: "delete",
        value: function _delete(id) {
          this.service.delete(id);
        }
      }]);

      return ListComponent;
    }();

    ListComponent.ctorParameters = function () {
      return [{
        type: src_app_services_firebase_local_product_service__WEBPACK_IMPORTED_MODULE_2__["LocalProductService"]
      }];
    };

    ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/views/list/list.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./list.component.scss */
      "./src/app/components/views/list/list.component.scss")).default]
    })], ListComponent);
    /***/
  },

  /***/
  "./src/app/components/views/modify/modify.component.scss":
  /*!***************************************************************!*\
    !*** ./src/app/components/views/modify/modify.component.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsViewsModifyModifyComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdmlld3MvbW9kaWZ5L21vZGlmeS5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/views/modify/modify.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/views/modify/modify.component.ts ***!
    \*************************************************************/

  /*! exports provided: ModifyComponent */

  /***/
  function srcAppComponentsViewsModifyModifyComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModifyComponent", function () {
      return ModifyComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_services_firebase_local_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/firebase/local-product.service */
    "./src/app/services/firebase/local-product.service.ts");
    /* harmony import */


    var src_app_models_product__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/models/product */
    "./src/app/models/product.ts");

    var ModifyComponent =
    /*#__PURE__*/
    function () {
      function ModifyComponent(service, route) {
        _classCallCheck(this, ModifyComponent);

        this.service = service;
        this.route = route;
      }

      _createClass(ModifyComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getId();
          this.productComplete();
        }
      }, {
        key: "getId",
        value: function getId() {
          this.idFirebase = String(this.route.snapshot.paramMap.get('id'));
        }
      }, {
        key: "productComplete",
        value: function productComplete() {
          var _this3 = this;

          var product = this.service.getProductByFireBase(this.idFirebase).then(function (product) {
            _this3.codigo = product.codigo;
            _this3.nombre = product.nombre;
            _this3.marca = product.marca;
            _this3.precio = product.precio;
            _this3.stock = product.stock;
            _this3.idFirebase = product.idFirebase;
          });
        }
      }, {
        key: "modify",
        value: function modify() {
          var product = src_app_models_product__WEBPACK_IMPORTED_MODULE_4__["Product"].Create(this.codigo, this.nombre, this.marca, this.stock, this.precio);
          this.service.modify(this.codigo, product);
        }
      }]);

      return ModifyComponent;
    }();

    ModifyComponent.ctorParameters = function () {
      return [{
        type: src_app_services_firebase_local_product_service__WEBPACK_IMPORTED_MODULE_3__["LocalProductService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }];
    };

    ModifyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-modify',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./modify.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/views/modify/modify.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./modify.component.scss */
      "./src/app/components/views/modify/modify.component.scss")).default]
    })], ModifyComponent);
    /***/
  },

  /***/
  "./src/app/components/views/search/search.component.scss":
  /*!***************************************************************!*\
    !*** ./src/app/components/views/search/search.component.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsViewsSearchSearchComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdmlld3Mvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/views/search/search.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/views/search/search.component.ts ***!
    \*************************************************************/

  /*! exports provided: SearchComponent */

  /***/
  function srcAppComponentsViewsSearchSearchComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchComponent", function () {
      return SearchComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_firebase_local_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/firebase/local-product.service */
    "./src/app/services/firebase/local-product.service.ts");

    var SearchComponent =
    /*#__PURE__*/
    function () {
      function SearchComponent(service) {
        _classCallCheck(this, SearchComponent);

        this.service = service;
      }

      _createClass(SearchComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getProduct",
        value: function getProduct(option) {
          var _this4 = this;

          this.isLoading = true;
          this.productList = [];
          if (option == 1) this.service.searchProduct(this.codigo, option).then(function (product) {
            _this4.productList.push(product);

            _this4.isLoading = false;
          });else if (option == 2) this.service.searchProduct(this.nombre, option).then(function (product) {
            _this4.productList.push(product);

            _this4.isLoading = false;
          });else if (option == 3) this.service.searchProduct(this.marca, option).then(function (product) {
            _this4.productList.push(product);

            _this4.isLoading = false;
          });
        }
      }]);

      return SearchComponent;
    }();

    SearchComponent.ctorParameters = function () {
      return [{
        type: src_app_services_firebase_local_product_service__WEBPACK_IMPORTED_MODULE_2__["LocalProductService"]
      }];
    };

    SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-search',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./search.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/views/search/search.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./search.component.scss */
      "./src/app/components/views/search/search.component.scss")).default]
    })], SearchComponent);
    /***/
  },

  /***/
  "./src/app/models/product.ts":
  /*!***********************************!*\
    !*** ./src/app/models/product.ts ***!
    \***********************************/

  /*! exports provided: Product */

  /***/
  function srcAppModelsProductTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Product", function () {
      return Product;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Product =
    /*#__PURE__*/
    function () {
      function Product() {
        _classCallCheck(this, Product);
      }

      _createClass(Product, null, [{
        key: "Create",
        value: function Create(codigo, nombre, marca, stock, precio) {
          var newProduct = new Product();
          newProduct.codigo = codigo;
          newProduct.nombre = nombre;
          newProduct.marca = marca;
          newProduct.stock = stock;
          newProduct.precio = precio;
          return newProduct;
        }
      }]);

      return Product;
    }();
    /***/

  },

  /***/
  "./src/app/services/firebase/local-product.service.ts":
  /*!************************************************************!*\
    !*** ./src/app/services/firebase/local-product.service.ts ***!
    \************************************************************/

  /*! exports provided: LocalProductService */

  /***/
  function srcAppServicesFirebaseLocalProductServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LocalProductService", function () {
      return LocalProductService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! angularfire2/firestore */
    "./node_modules/angularfire2/firestore/index.js");
    /* harmony import */


    var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var src_app_models_product__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/models/product */
    "./src/app/models/product.ts");
    /* harmony import */


    var src_app_classes_helpers_core_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/classes/helpers/core-helper */
    "./src/app/classes/helpers/core-helper.ts");

    var LocalProductService =
    /*#__PURE__*/
    function () {
      function LocalProductService(db) {
        _classCallCheck(this, LocalProductService);

        this.db = db;
      }

      _createClass(LocalProductService, [{
        key: "add",
        value: function add(product) {
          var _this5 = this;

          var obj = src_app_classes_helpers_core_helper__WEBPACK_IMPORTED_MODULE_4__["CoreHelper"].convertToObject(product);
          return this.getIdByFireBase(product.codigo, 1).then(function (prd) {
            if (!prd) {
              _this5.db.collection('products').add(obj);

              return false;
            } else return true;
          });
        }
      }, {
        key: "getAll",
        value: function getAll() {
          return this.db.collection('products');
        }
      }, {
        key: "getAll_sync",
        value: function getAll_sync() {
          return this.db.collection('products').get().toPromise().then(function (query) {
            var prods = [];
            query.docs.forEach(function (doc) {
              var pr = new src_app_models_product__WEBPACK_IMPORTED_MODULE_3__["Product"]();
              pr = doc.data();
              pr.idFirebase = doc.id;
              prods.push(pr);
            });
            return prods;
          });
        }
      }, {
        key: "delete",
        value: function _delete(id) {
          this.db.collection('products').doc(id).delete();
        }
      }, {
        key: "modify",
        value: function modify(codigo, obj) {
          var _this6 = this;

          obj = src_app_classes_helpers_core_helper__WEBPACK_IMPORTED_MODULE_4__["CoreHelper"].convertToObject(obj);
          this.getIdByFireBase(codigo, 1).then(function (firebaseId) {
            _this6.db.collection('products').doc(firebaseId).update(obj);
          });
        }
      }, {
        key: "getIdByFireBase",
        value: function getIdByFireBase(date, option) {
          switch (option) {
            case 1:
              return this.db.collection('products', function (ref) {
                return ref.where('codigo', '==', date);
              }).get().toPromise().then(function (query) {
                return query.docs[0].id;
              }).catch(function () {
                return null;
              });

            case 2:
              return this.db.collection('products', function (ref) {
                return ref.where('nombre', '==', date);
              }).get().toPromise().then(function (query) {
                return query.docs[0].id;
              }).catch(function () {
                return null;
              });

            case 3:
              return this.db.collection('products', function (ref) {
                return ref.where('marca', '==', date);
              }).get().toPromise().then(function (query) {
                return query.docs[0].id;
              }).catch(function () {
                return null;
              });
          }
        }
      }, {
        key: "getProductByFireBase",
        value: function getProductByFireBase(idFirebase) {
          return this.db.collection('products').doc(idFirebase).get().toPromise().then(function (query) {
            return query.data();
          });
        }
      }, {
        key: "searchProduct",
        value: function searchProduct(data, option) {
          var _this7 = this;

          return this.getIdByFireBase(data, option).then(function (id) {
            return _this7.getProductByFireBase(id).then(function (prd) {
              prd.idFirebase = id;
              return prd;
            });
          });
        }
      }]);

      return LocalProductService;
    }();

    LocalProductService.ctorParameters = function () {
      return [{
        type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
      }];
    };

    LocalProductService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], LocalProductService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment, firebaseConfig */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "firebaseConfig", function () {
      return firebaseConfig;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    var firebaseConfig = {
      apiKey: "AIzaSyA0WNIH3AoUVsIlqyiOm-y66Vh24sI5gkk",
      authDomain: "plantilla-de-angular.firebaseapp.com",
      databaseURL: "https://plantilla-de-angular.firebaseio.com",
      projectId: "plantilla-de-angular",
      storageBucket: "plantilla-de-angular.appspot.com",
      messagingSenderId: "963789376753",
      appId: "1:963789376753:web:7718f76652d5f8c5ac2d50",
      measurementId: "G-YE8Q2G119X"
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\Yama\Desktop\PieDeAngular\PieDeAngular\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map