(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<mat-drawer-container>\n  <mat-drawer #drawer [mode]=\"isShowHideFlag\" class=\"col-md-3 col-sm-12\">\n    <mat-icon aria-hidden=\"false\" class=\"close\" (click)=\"drawer.toggle()\">close</mat-icon>\n    <br>\n    <h1>Menù</h1>\n    <mat-list role=\"list\">\n      <mat-list-item role=\"listitem\"><a [routerLink]=\"['/home']\"  routerLinkActive=\"active-link\" mat-button (click)=\"drawer.toggle()\">Home</a></mat-list-item>\n      <mat-list-item role=\"listitem\"><a [routerLink]=\"['/chisiamo']\" routerLinkActive=\"active-link\" mat-button (click)=\"drawer.toggle()\">Chi Siamo</a></mat-list-item>\n      <mat-list-item role=\"listitem\"><a [routerLink]=\"['/comunicati']\" routerLinkActive=\"active-link\" mat-button (click)=\"drawer.toggle()\">Comunicati</a></mat-list-item>\n      <mat-list-item role=\"listitem\"><a [routerLink]=\"['/iniziative']\" routerLinkActive=\"active-link\" mat-button (click)=\"drawer.toggle()\">Iniziative </a></mat-list-item>\n      <mat-list-item role=\"listitem\"><a [routerLink]=\"['/calendario-partite']\" routerLinkActive=\"active-link\" mat-button (click)=\"drawer.toggle()\">Calendario partite</a></mat-list-item>\n      <mat-list-item role=\"listitem\"><a [routerLink]=\"['/podcast']\" routerLinkActive=\"active-link\" mat-button (click)=\"drawer.toggle()\">Podcast</a></mat-list-item>\n    </mat-list>\n  </mat-drawer>\n  <mat-drawer-content>\n    <!-- <mat-toolbar class=\"nav\">\n      <mat-list role=\"list\">\n        <mat-list-item role=\"listitem\"><a [routerLink]=\"['/home']\" routerLinkActive=\"active-link\" mat-button>Home</a></mat-list-item>\n        <mat-list-item role=\"listitem\"><a [routerLink]=\"['/chisiamo']\" routerLinkActive=\"active-link\" mat-button>Chi Siamo</a></mat-list-item>\n        <mat-list-item role=\"listitem\"><a [routerLink]=\"['/comunicati']\" routerLinkActive=\"active-link\" mat-button>Comunicati</a></mat-list-item>\n        <mat-list-item role=\"listitem\"><a [routerLink]=\"['/iniziative']\" routerLinkActive=\"active-link\" mat-button>Iniziative </a></mat-list-item>\n        <mat-list-item role=\"listitem\"><a [routerLink]=\"['/calendario-partite']\" routerLinkActive=\"active-link\" mat-button>Calendario partite</a></mat-list-item>\n        <mat-list-item role=\"listitem\"><a [routerLink]=\"['/podcast']\" routerLinkActive=\"active-link\" mat-button>Podcast</a></mat-list-item>\n      </mat-list>\n    </mat-toolbar> -->\n    <div class=\"silder\" [ngStyle]=\"{'background-image': 'url(' + cover + ')'}\">\n      <mat-icon aria-hidden=\"false\"  (click)=\"drawer.toggle()\">\n        reorder\n      </mat-icon>\n      <div class=\"silder-content\">\n        <h1 style=\"margin-top: 16%;\">{{title}}</h1>\n      </div>\n    </div>\n    <router-outlet (activate)=\"onActivate($event)\"></router-outlet>\n    <div class=\"footer\" color=\"primary\">\n      <mat-toolbar color=\"primary\">\n        <span>Asd Aurora Vanchiglia</span>\n      </mat-toolbar>\n    </div>\n  </mat-drawer-content>\n</mat-drawer-container>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/article-preview/article-preview.component.html": 
        /*!******************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/article-preview/article-preview.component.html ***!
          \******************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div  class=\"row\" *ngIf=\"coverOnLeft\">\n    <div class=\"column center-content\">\n        <h3>{{article.title}}</h3>\n        <p>{{article_body_preview()}}  <a *ngIf=\"isEllipsed()\" [routerLink]=\"['/comunicati/'+article.id]\">Continua a leggere</a></p>\n    </div>\n    <div class=\"column\">\n        <img src=\"{{article.coverImage}}\">\n    </div>\n</div>\n\n<div  class=\"row\" *ngIf=\"!coverOnLeft\">\n    <div class=\"column\">\n        <img src=\"{{article.coverImage}}\">\n    </div>\n    <div class=\"column center-content\">\n        <h3>{{article.title}}</h3>\n        <p>{{article_body_preview()}} <a *ngIf=\"isEllipsed()\" [routerLink]=\"['/comunicati/'+article.id]\">Continua a leggere</a></p>\n    </div>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/article/article.component.html": 
        /*!**************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/article/article.component.html ***!
          \**************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"contents\">\n    <h2>{{article.title}}</h2>\n    <div class=\"row align-items-center always-display\">\n        <div class=\"col-md-6 offset-md-3 col-sm-12 center-content\">\n            <p>{{article.body}}</p>\n        </div>\n    </div>\n</div>\n\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/articles/articles.component.html": 
        /*!****************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/articles/articles.component.html ***!
          \****************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"contents\">\n    <div class=\"row\">\n        <div class=\"column center-content\">\n            <h3>IL CALCIO È UNO SPORT PER RAGAZZE!</h3>\n            <p>Un altro anno di #SportPopolare si appresta a iniziare e noi con grinta e determinazione siamo pronte a\n                ricominciare ad allenarci!\n                Nonostante la situazione pandemica incomba, la squadra cresce in qualità e in quantità a pieno ritmo,\n                rendendo la nostra avventura sempre più stimolante.\n                La nostra è un'esperienza fatta di impegno e passione, di crescita individuale e collettiva. Ognuna di\n                noi porta dentro questo meraviglioso contenitore un pezzo di se': la sua forza, le sue rivendicazioni,\n                le sue paure, la sua lotta. Continueremo anche quest'anno a farci sentire, a occupare con fierezza gli\n                spazi che attraversiamo, a ripetere che il calcio è uno sport per ragazze, ad allenare il nostro corpo e\n                la nostra mente. Solidali, ribelli, libere (… e pure belle, diciamocelo! 🤩 )\n                Non vediamo l'ora di rivederci e poter finalmente giocare, di correre, di sudare, di ridere, di\n                incazzarci, ma anche riabbracciarci e urlare insieme.\n\n                Buon 2021 a tutte noi, e a tutt* coloro che ci sostengono. Che la nostra avventura continui con il vento\n                sempre in poppa!\n\n                Asd Aurora-Vanchiglia GIRLZ</p>\n        </div>\n        <div class=\"column\">\n            <img src=\"assets/girlz.jpg\">\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"column\">\n            <img src=\"assets/tifo.jpg\">\n        </div>\n        <div class=\"column center-content\">\n            <h3> Tempo di bilanci e prospettive anche in casa AuroraVanchiglia per questo fine 2020.\n            </h3>\n            <p> Per una realtà popolare come la nostra, con poco più di un anno di attività sulle spalle sicuramente il\n                Covid ha \"bloccato\" un po' di progetti, forse anche sul più bello quando vedevamo avverarsi sia sul\n                piano sportivo che aggregativo i nostri primi traguardi.\n                La trasferta di San Damiano d' Asti con un pulman da 70 persone pieno di supporters, l'esordio delle\n                Girlz (vedi foto sotto), l'album dei nostri campioni, il ritrovo a Pescia per l'assemblea nazionale del\n                calcio popolare e per ultimo il torneo in Valsusa. Ci saremo sicuramente dimenticati altri momenti top\n                di questo 2020 perché ogni secondo, ogni minuto, ogni ora passati insieme sono stati vissuti con grande\n                passione e permetteteci il termine, PRESABBENE, sempre oltre il 90esimo.\n                Non possiamo far altro allora che augurare ai/alle nostr* tesserat*, ai/alle nostr* soci/e ed ai/alle\n                supporters un 2021 sicuramente migliore sul piano sanitario, ben consapevoli di quanto lo sport sia\n                fondamentale per la salute di tutti e tutte, ma soprattutto abbiamo più chiare le nostre rivendicazioni\n                come quello di renderlo accessibile a tutt*.\n                Torneremo tutt* insieme sugli spalti, il sabato pomeriggio al Campo Bosso a tifare l' Aurora o al\n                PalaCus a sostenere le Girlz, a lottare su ogni pallone e a farci il fiato agli allenamenti.\n                Sempre con il nostro odio al calcio moderno, con i nostri valori solidali e con il solito sogno di\n                essere una spina nel fianco un giorno nel calcio che conta. (seeeee sognate, sognate...) Avanti tutta\n                Aurora Vanchiglia!\n                BUON 2021! ALLA CARICA!\n            </p>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"column center-content\">\n            <h3>SE TOCCANO UNA, TOCCANO TUTTE!</h3>\n            <p>\n                La notizia della conferma della sorveglianza speciale alla nostra compagna e sorella Eddi ci lascia\n                allibite e anche molto in allerta.\n                A Torino, nella nostra cittá, la Procura ha appena creato l'ennesimo grosso precedente per cui chi\n                sceglie di fare della lotta parte integrante della propria vita, chi sceglie di combattere ogni giorno\n                contro fascismi, sessismo e sfruttamento lavorativo e territoriale è in pericolo: chi pensa e agisce le\n                sue parole è in pericolo, e allora in pericolo lo siamo tutte. Tutte noi che viviamo la realtá che\n                abitiamo senza subirla passivamente.\n                \"Arrendersi non è un opzione\" e noi staremo al tuo fianco.\n                <br>\n                Asd Aurora Vanchiglia Girlz\n            </p>\n        </div>\n        <div class=\"column\">\n            <img src=\"assets/eddi.jpg\">\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"column\">\n            <img src=\"assets/match.png\">\n        </div>\n        <div class=\"column center-content\">\n            <h3>Un anno fa\n            </h3>\n            <p>esordivamo ufficialmente in campionato e andò cosi, testuali parole:\n\n                \"Che cuore quest' Aurora Vanchiglia!\n                Primo punto messo in cascina contro l' A.S.D Falcherese grazie al goal in rimonta del nostro perno\n                difensivo Piero Maiorano!\".\n            </p>\n        </div>\n    </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/item-not-implemented/item-not-implemented.component.html": 
        /*!****************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/item-not-implemented/item-not-implemented.component.html ***!
          \****************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"contents\">\n    <h2>Questa pagina è in costruzione</h2>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/landing/landing.component.html": 
        /*!**************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/landing/landing.component.html ***!
          \**************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"features\">\n    <div class=\"row\">\n        <div class=\"column col-md-3\" [routerLink]=\"['/11-boyz']\">\n            <mat-icon aria-hidden=\"false\" aria-label=\"La squadra di calcio maschile\">sports_soccer</mat-icon>\n            <h3>Calcio a 11 Maschile</h3>\n        </div>\n        <div class=\"column col-md-3\" [routerLink]=\"['/5-girlz']\">\n            <mat-icon aria-hidden=\"false\" aria-label=\"La squadra di calcio femminile\">sports_soccer</mat-icon>\n            <h3>Calcio a 5 Femminile</h3>\n        </div>\n        <div class=\"column col-md-3\" [routerLink]=\"['/altri']\">\n            <mat-icon aria-hidden=\"false\" aria-label=\"La squadra di calcio femminile\">sports_volleyball</mat-icon>\n            <h3>Altre squadre</h3>\n        </div>\n        <div class=\"column col-md-3\" [routerLink]=\"['/supporters']\">\n            <mat-icon aria-hidden=\"false\" aria-label=\"Support your local footbal team\">groups</mat-icon>\n            <h3>Supporters</h3>\n        </div>\n    </div>\n</div>\n<div class=\"contents\">\n    <h2>In Evidenza</h2>\n    <span *ngFor=\"let article of articles; index as i\">\n        <app-article-preview [article]=\"article\" [coverOnLeft]=\"i % 2 != 0\" ></app-article-preview>\n    </span>\n    <!-- <div class=\"row\">\n        <div class=\"column center-content\">\n            <h3>IL CALCIO È UNO SPORT PER RAGAZZE!</h3>\n            <p></p>\n        </div>\n        <div class=\"column\">\n            <img src=\"assets/girlz.jpg\">\n        </div>\n    </div> -->\n    <!-- <div class=\"row\">\n        <div class=\"column col\">\n            <img src=\"assets/tifo.jpg\">\n        </div>\n        <div class=\"column col center-content\">\n            <h3> Tempo di bilanci e prospettive anche in casa AuroraVanchiglia per questo fine 2020.\n            </h3>\n            <p > Per una realtà popolare come la nostra, con poco più di un anno di attività sulle spalle sicuramente il\n                Covid ha \"bloccato\" un po' di progetti, forse anche sul più bello quando vedevamo avverarsi sia sul\n                piano sportivo che aggregativo i nostri primi traguardi.\n                La trasferta di San Damiano d' Asti con un pulman da 70 persone pieno di supporters, l'esordio delle\n                Girlz (vedi foto sotto), l'album dei nostri campioni, il ritrovo a Pescia per l'assemblea nazionale del\n                calcio popolare e per ultimo il torneo in Valsusa. Ci saremo sicuramente dimenticati altri momenti top\n                di questo 2020 perché ogni secondo, ogni minuto, ogni ora passati insieme sono stati vissuti con grande\n                passione e permetteteci il termine, PRESABBENE, sempre oltre il 90esimo.\n                Non possiamo far altro allora che augurare ai/alle nostr* tesserat*, ai/alle nostr* soci/e ed ai/alle\n                supporters un 2021 sicuramente migliore sul piano sanitario, ben consapevoli di quanto lo sport sia\n                fondamentale per la salute di tutti e tutte, ma soprattutto abbiamo più chiare le nostre rivendicazioni\n                come quello di renderlo accessibile a tutt*.\n                Torneremo tutt* insieme sugli spalti, il sabato pomeriggio al Campo Bosso a tifare l' Aurora o al\n                PalaCus a sostenere le Girlz, a lottare su ogni pallone e a farci il fiato agli allenamenti.\n                Sempre con il nostro odio al calcio moderno, con i nostri valori solidali e con il solito sogno di\n                essere una spina nel fianco un giorno nel calcio che conta. (seeeee sognate, sognate...) Avanti tutta\n                Aurora Vanchiglia!\n                BUON 2021! ALLA CARICA!\n            </p>\n        </div>\n    </div> -->\n    <!-- <div class=\"row\">\n        <div class=\"column center-content\">\n            <h3>SE TOCCANO UNA, TOCCANO TUTTE!</h3>\n            <p>\n                La notizia della conferma della sorveglianza speciale alla nostra compagna e sorella Eddi ci lascia\n                allibite e anche molto in allerta.\n                A Torino, nella nostra cittá, la Procura ha appena creato l'ennesimo grosso precedente per cui chi\n                sceglie di fare della lotta parte integrante della propria vita, chi sceglie di combattere ogni giorno\n                contro fascismi, sessismo e sfruttamento lavorativo e territoriale è in pericolo: chi pensa e agisce le\n                sue parole è in pericolo, e allora in pericolo lo siamo tutte. Tutte noi che viviamo la realtá che\n                abitiamo senza subirla passivamente.\n                \"Arrendersi non è un opzione\" e noi staremo al tuo fianco.\n                <br>\n                Asd Aurora Vanchiglia Girlz\n            </p>\n        </div>\n        <div class=\"column\">\n            <img src=\"assets/eddi.jpg\">\n        </div>\n    </div> -->\n    <!-- <div class=\"row\">\n        <div class=\"column\">\n            <img src=\"assets/match.png\">\n        </div>\n        <div class=\"column center-content\">\n            <h3>Un anno fa\n            </h3>\n            <p>esordivamo ufficialmente in campionato e andò cosi, testuali parole:\n\n                \"Che cuore quest' Aurora Vanchiglia!\n                Primo punto messo in cascina contro l' A.S.D Falcherese grazie al goal in rimonta del nostro perno\n                difensivo Piero Maiorano!\".\n            </p>\n        </div>\n    </div> -->\n</div>\n<!-- <div class=\"contactus\">\n    <h2>Subscribe now To get Updates</h2>\n    <form>\n      <mat-form-field appearance=\"fill\">\n        <mat-label>Subscribe</mat-label>\n        <input matInput>\n      </mat-form-field>\n      <button mat-flat-button>Subscribe Now</button>\n    </form>\n  </div> -->");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
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
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
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
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
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
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _article_article_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./article/article.component */ "./src/app/article/article.component.ts");
            /* harmony import */ var _articles_articles_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./articles/articles.component */ "./src/app/articles/articles.component.ts");
            /* harmony import */ var _item_not_implemented_item_not_implemented_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./item-not-implemented/item-not-implemented.component */ "./src/app/item-not-implemented/item-not-implemented.component.ts");
            /* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./landing/landing.component */ "./src/app/landing/landing.component.ts");
            var routes = [
                // tslint:disable-next-line:max-line-length
                { path: 'supporters', component: _item_not_implemented_item_not_implemented_component__WEBPACK_IMPORTED_MODULE_5__["ItemNotImplementedComponent"], data: { cover: 'assets/manutenzione.jpg', title: 'Supporters' } },
                // tslint:disable-next-line:max-line-length
                { path: 'altri', component: _item_not_implemented_item_not_implemented_component__WEBPACK_IMPORTED_MODULE_5__["ItemNotImplementedComponent"], data: { cover: 'assets/manutenzione.jpg', title: 'Altre Squadre' } },
                // tslint:disable-next-line:max-line-length
                { path: '11-boyz', component: _item_not_implemented_item_not_implemented_component__WEBPACK_IMPORTED_MODULE_5__["ItemNotImplementedComponent"], data: { cover: 'assets/manutenzione.jpg', title: 'Calcio a 11 Maschile' } },
                // tslint:disable-next-line:max-line-length
                { path: '5-girlz', component: _item_not_implemented_item_not_implemented_component__WEBPACK_IMPORTED_MODULE_5__["ItemNotImplementedComponent"], data: { cover: 'assets/manutenzione.jpg', title: 'Calcio a 5 Femminile' } },
                // tslint:disable-next-line:max-line-length
                { path: 'calendario-partite', component: _item_not_implemented_item_not_implemented_component__WEBPACK_IMPORTED_MODULE_5__["ItemNotImplementedComponent"], data: { cover: 'assets/manutenzione.jpg', title: 'Calendario Partite' } },
                { path: 'podcast', component: _item_not_implemented_item_not_implemented_component__WEBPACK_IMPORTED_MODULE_5__["ItemNotImplementedComponent"], data: { cover: 'assets/manutenzione.jpg', title: 'Podcast' } },
                { path: 'iniziative', component: _item_not_implemented_item_not_implemented_component__WEBPACK_IMPORTED_MODULE_5__["ItemNotImplementedComponent"], data: { cover: 'assets/manutenzione.jpg', title: 'Iniziative' } },
                { path: 'chisiamo', component: _item_not_implemented_item_not_implemented_component__WEBPACK_IMPORTED_MODULE_5__["ItemNotImplementedComponent"], data: { cover: 'assets/manutenzione.jpg', title: 'Chi siamo' } },
                { path: 'comunicati', component: _articles_articles_component__WEBPACK_IMPORTED_MODULE_4__["ArticlesComponent"], data: { cover: 'assets/comunicati-2.jpg', title: 'Comunicati' } },
                { path: 'comunicati/:id', component: _article_article_component__WEBPACK_IMPORTED_MODULE_3__["ArticleComponent"], data: { cover: '', title: '' } },
                { path: 'home', component: _landing_landing_component__WEBPACK_IMPORTED_MODULE_6__["LandingComponent"], data: { cover: 'assets/curva2.jpg', title: 'Asd Aurora Vanchiglia' } },
                { path: '**', redirectTo: 'home' }
            ];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app.component.scss": 
        /*!************************************!*\
          !*** ./src/app/app.component.scss ***!
          \************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _cover_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cover.service */ "./src/app/cover.service.ts");
            var AppComponent = /** @class */ (function () {
                function AppComponent(router, coverService, cdr) {
                    this.router = router;
                    this.coverService = coverService;
                    this.cdr = cdr;
                    this.cover = 'assets/logo.png';
                    this.title = 'title';
                    this.isShowHideFlag = 'over';
                }
                AppComponent.prototype.showHide = function () {
                };
                AppComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.router.events.subscribe(function (routeReconized) {
                        if (routeReconized instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["RoutesRecognized"]) {
                            console.log('Route', routeReconized);
                            _this.cover = routeReconized.state.root.firstChild.data.cover;
                            _this.title = routeReconized.state.root.firstChild.data.title;
                        }
                    });
                };
                AppComponent.prototype.ngAfterViewInit = function () {
                    var _this = this;
                    this.coverService.cover.subscribe(function (sendedCover) {
                        console.log('Sended cover: ', sendedCover);
                        _this.cover = sendedCover.cover;
                        _this.title = sendedCover.title;
                        _this.cdr.detectChanges();
                    });
                };
                AppComponent.prototype.onActivate = function (event) {
                    window.scroll(0, 0);
                };
                return AppComponent;
            }());
            AppComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _cover_service__WEBPACK_IMPORTED_MODULE_3__["CoverService"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
            ]; };
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
            /* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
            /* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
            /* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm2015/list.js");
            /* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm2015/sidenav.js");
            /* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./landing/landing.component */ "./src/app/landing/landing.component.ts");
            /* harmony import */ var _articles_articles_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./articles/articles.component */ "./src/app/articles/articles.component.ts");
            /* harmony import */ var _article_article_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./article/article.component */ "./src/app/article/article.component.ts");
            /* harmony import */ var _item_not_implemented_item_not_implemented_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./item-not-implemented/item-not-implemented.component */ "./src/app/item-not-implemented/item-not-implemented.component.ts");
            /* harmony import */ var _article_preview_article_preview_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./article-preview/article-preview.component */ "./src/app/article-preview/article-preview.component.ts");
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                        _landing_landing_component__WEBPACK_IMPORTED_MODULE_12__["LandingComponent"],
                        _articles_articles_component__WEBPACK_IMPORTED_MODULE_13__["ArticlesComponent"],
                        _article_article_component__WEBPACK_IMPORTED_MODULE_14__["ArticleComponent"],
                        _item_not_implemented_item_not_implemented_component__WEBPACK_IMPORTED_MODULE_15__["ItemNotImplementedComponent"],
                        _article_preview_article_preview_component__WEBPACK_IMPORTED_MODULE_16__["ArticlePreviewComponent"],
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
                        _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                        _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatListModule"],
                        _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
                        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__["MatSidenavModule"]
                    ],
                    providers: [],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/article-preview/article-preview.component.scss": 
        /*!****************************************************************!*\
          !*** ./src/app/article-preview/article-preview.component.scss ***!
          \****************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".ellipsed {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL0FzZC1BdXJvcmEtVmFuY2hpZ2xpYS5naXRodWIuaW8vQXNkLUF1cm9yYS1WYW5jaGlnbGlhLmdpdGh1Yi5pby9zcmMvYXBwL2FydGljbGUtcHJldmlldy9hcnRpY2xlLXByZXZpZXcuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FydGljbGUtcHJldmlldy9hcnRpY2xlLXByZXZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2FydGljbGUtcHJldmlldy9hcnRpY2xlLXByZXZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZWxsaXBzZWQge1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn0iLCIuZWxsaXBzZWQge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/article-preview/article-preview.component.ts": 
        /*!**************************************************************!*\
          !*** ./src/app/article-preview/article-preview.component.ts ***!
          \**************************************************************/
        /*! exports provided: ArticlePreviewComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticlePreviewComponent", function () { return ArticlePreviewComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var ArticlePreviewComponent = /** @class */ (function () {
                function ArticlePreviewComponent() {
                    this.maxLength = 240;
                    this.previewEnd = '...';
                    this.coverOnLeft = true;
                }
                ArticlePreviewComponent.prototype.ngOnInit = function () {
                };
                ArticlePreviewComponent.prototype.article_body_preview = function () {
                    if (this.article.body.length > this.maxLength) {
                        var bodyPreview = this.article.body.substring(0, this.maxLength - this.previewEnd.length);
                        bodyPreview = bodyPreview.substring(0, bodyPreview.lastIndexOf(' ')).concat(this.previewEnd);
                        return bodyPreview;
                    }
                    else {
                        return this.article.body;
                    }
                };
                ArticlePreviewComponent.prototype.isEllipsed = function () {
                    return this.article.body.length > this.maxLength;
                };
                return ArticlePreviewComponent;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], ArticlePreviewComponent.prototype, "maxLength", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], ArticlePreviewComponent.prototype, "article", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], ArticlePreviewComponent.prototype, "previewEnd", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], ArticlePreviewComponent.prototype, "coverOnLeft", void 0);
            ArticlePreviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-article-preview',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./article-preview.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/article-preview/article-preview.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./article-preview.component.scss */ "./src/app/article-preview/article-preview.component.scss")).default]
                })
            ], ArticlePreviewComponent);
            /***/ 
        }),
        /***/ "./src/app/article.service.ts": 
        /*!************************************!*\
          !*** ./src/app/article.service.ts ***!
          \************************************/
        /*! exports provided: ArticleService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleService", function () { return ArticleService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _mock_articles_mock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mock/articles.mock */ "./src/app/mock/articles.mock.ts");
            var ArticleService = /** @class */ (function () {
                function ArticleService() {
                }
                ArticleService.prototype.get_evidencied = function () {
                    return _mock_articles_mock__WEBPACK_IMPORTED_MODULE_2__["ARTICLES"];
                };
                ArticleService.prototype.get_by_id = function (id) {
                    return _mock_articles_mock__WEBPACK_IMPORTED_MODULE_2__["ARTICLES"].filter(function (article) { return article.id === id; })[0];
                };
                return ArticleService;
            }());
            ArticleService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], ArticleService);
            /***/ 
        }),
        /***/ "./src/app/article/article.component.scss": 
        /*!************************************************!*\
          !*** ./src/app/article/article.component.scss ***!
          \************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".always-display {\n  display: block !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL0FzZC1BdXJvcmEtVmFuY2hpZ2xpYS5naXRodWIuaW8vQXNkLUF1cm9yYS1WYW5jaGlnbGlhLmdpdGh1Yi5pby9zcmMvYXBwL2FydGljbGUvYXJ0aWNsZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXJ0aWNsZS9hcnRpY2xlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2FydGljbGUvYXJ0aWNsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hbHdheXMtZGlzcGxheXtcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xufSIsIi5hbHdheXMtZGlzcGxheSB7XG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/article/article.component.ts": 
        /*!**********************************************!*\
          !*** ./src/app/article/article.component.ts ***!
          \**********************************************/
        /*! exports provided: ArticleComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleComponent", function () { return ArticleComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _article_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../article.service */ "./src/app/article.service.ts");
            /* harmony import */ var _cover_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cover.service */ "./src/app/cover.service.ts");
            var ArticleComponent = /** @class */ (function () {
                function ArticleComponent(articlesService, coverService, route) {
                    this.articlesService = articlesService;
                    this.coverService = coverService;
                    this.route = route;
                }
                ArticleComponent.prototype.ngOnInit = function () {
                    var articleId = this.route.snapshot.paramMap.get('id');
                    this.article = this.articlesService.get_by_id(articleId);
                    this.coverService.cover.next({ title: '', cover: this.article.coverImage });
                };
                ArticleComponent.prototype.ngAfterViewInit = function () {
                    this.coverService.cover.next({ title: '', cover: this.article.coverImage });
                };
                return ArticleComponent;
            }());
            ArticleComponent.ctorParameters = function () { return [
                { type: _article_service__WEBPACK_IMPORTED_MODULE_3__["ArticleService"] },
                { type: _cover_service__WEBPACK_IMPORTED_MODULE_4__["CoverService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
            ]; };
            ArticleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-article',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./article.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/article/article.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./article.component.scss */ "./src/app/article/article.component.scss")).default]
                })
            ], ArticleComponent);
            /***/ 
        }),
        /***/ "./src/app/articles/articles.component.scss": 
        /*!**************************************************!*\
          !*** ./src/app/articles/articles.component.scss ***!
          \**************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FydGljbGVzL2FydGljbGVzLmNvbXBvbmVudC5zY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/articles/articles.component.ts": 
        /*!************************************************!*\
          !*** ./src/app/articles/articles.component.ts ***!
          \************************************************/
        /*! exports provided: ArticlesComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticlesComponent", function () { return ArticlesComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var ArticlesComponent = /** @class */ (function () {
                function ArticlesComponent() {
                }
                ArticlesComponent.prototype.ngOnInit = function () {
                };
                return ArticlesComponent;
            }());
            ArticlesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-articles',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./articles.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/articles/articles.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./articles.component.scss */ "./src/app/articles/articles.component.scss")).default]
                })
            ], ArticlesComponent);
            /***/ 
        }),
        /***/ "./src/app/cover.service.ts": 
        /*!**********************************!*\
          !*** ./src/app/cover.service.ts ***!
          \**********************************/
        /*! exports provided: CoverService, CoverObject */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoverService", function () { return CoverService; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoverObject", function () { return CoverObject; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            var CoverService = /** @class */ (function () {
                function CoverService() {
                    this.cover = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
                }
                return CoverService;
            }());
            CoverService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], CoverService);
            var CoverObject = /** @class */ (function () {
                function CoverObject() {
                }
                return CoverObject;
            }());
            /***/ 
        }),
        /***/ "./src/app/item-not-implemented/item-not-implemented.component.scss": 
        /*!**************************************************************************!*\
          !*** ./src/app/item-not-implemented/item-not-implemented.component.scss ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2l0ZW0tbm90LWltcGxlbWVudGVkL2l0ZW0tbm90LWltcGxlbWVudGVkLmNvbXBvbmVudC5zY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/item-not-implemented/item-not-implemented.component.ts": 
        /*!************************************************************************!*\
          !*** ./src/app/item-not-implemented/item-not-implemented.component.ts ***!
          \************************************************************************/
        /*! exports provided: ItemNotImplementedComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemNotImplementedComponent", function () { return ItemNotImplementedComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var ItemNotImplementedComponent = /** @class */ (function () {
                function ItemNotImplementedComponent() {
                }
                ItemNotImplementedComponent.prototype.ngOnInit = function () {
                };
                return ItemNotImplementedComponent;
            }());
            ItemNotImplementedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-item-not-implemented',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./item-not-implemented.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/item-not-implemented/item-not-implemented.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./item-not-implemented.component.scss */ "./src/app/item-not-implemented/item-not-implemented.component.scss")).default]
                })
            ], ItemNotImplementedComponent);
            /***/ 
        }),
        /***/ "./src/app/landing/landing.component.scss": 
        /*!************************************************!*\
          !*** ./src/app/landing/landing.component.scss ***!
          \************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".ellipsed {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL0FzZC1BdXJvcmEtVmFuY2hpZ2xpYS5naXRodWIuaW8vQXNkLUF1cm9yYS1WYW5jaGlnbGlhLmdpdGh1Yi5pby9zcmMvYXBwL2xhbmRpbmcvbGFuZGluZy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbGFuZGluZy9sYW5kaW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9sYW5kaW5nL2xhbmRpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZWxsaXBzZWQge1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn0iLCIuZWxsaXBzZWQge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/landing/landing.component.ts": 
        /*!**********************************************!*\
          !*** ./src/app/landing/landing.component.ts ***!
          \**********************************************/
        /*! exports provided: LandingComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function () { return LandingComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _article_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../article.service */ "./src/app/article.service.ts");
            var LandingComponent = /** @class */ (function () {
                function LandingComponent(articlesService) {
                    this.articlesService = articlesService;
                    this.articles = [];
                }
                LandingComponent.prototype.ngOnInit = function () {
                    this.articles = this.articlesService.get_evidencied();
                };
                return LandingComponent;
            }());
            LandingComponent.ctorParameters = function () { return [
                { type: _article_service__WEBPACK_IMPORTED_MODULE_2__["ArticleService"] }
            ]; };
            LandingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-landing',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./landing.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/landing/landing.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./landing.component.scss */ "./src/app/landing/landing.component.scss")).default]
                })
            ], LandingComponent);
            /***/ 
        }),
        /***/ "./src/app/mock/articles.mock.ts": 
        /*!***************************************!*\
          !*** ./src/app/mock/articles.mock.ts ***!
          \***************************************/
        /*! exports provided: ARTICLES */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ARTICLES", function () { return ARTICLES; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var ARTICLES = [
                {
                    id: '1',
                    title: 'IL CALCIO È UNO SPORT PER RAGAZZE!',
                    coverImage: 'assets/girlz.jpg',
                    body: "Un altro anno di #SportPopolare si appresta a iniziare e noi con grinta e determinazione siamo pronte a\n        ricominciare ad allenarci!\n        Nonostante la situazione pandemica incomba, la squadra cresce in qualit\u00E0 e in quantit\u00E0 a pieno ritmo,\n        rendendo la nostra avventura sempre pi\u00F9 stimolante.\n        La nostra \u00E8 un'esperienza fatta di impegno e passione, di crescita individuale e collettiva. Ognuna di\n        noi porta dentro questo meraviglioso contenitore un pezzo di se': la sua forza, le sue rivendicazioni,\n        le sue paure, la sua lotta. Continueremo anche quest'anno a farci sentire, a occupare con fierezza gli\n        spazi che attraversiamo, a ripetere che il calcio \u00E8 uno sport per ragazze, ad allenare il nostro corpo e\n        la nostra mente. Solidali, ribelli, libere (\u2026 e pure belle, diciamocelo! \uD83E\uDD29 )\n        Non vediamo l'ora di rivederci e poter finalmente giocare, di correre, di sudare, di ridere, di\n        incazzarci, ma anche riabbracciarci e urlare insieme.\n\n        Buon 2021 a tutte noi, e a tutt* coloro che ci sostengono. Che la nostra avventura continui con il vento\n        sempre in poppa!\n\n        Asd Aurora-Vanchiglia GIRLZ"
                },
                {
                    id: '2',
                    title: 'Tempo di bilanci e prospettive anche in casa AuroraVanchiglia per questo fine 2020.',
                    coverImage: 'assets/tifo.jpg',
                    body: "Per una realt\u00E0 popolare come la nostra, con poco pi\u00F9 di un anno di attivit\u00E0 sulle spalle sicuramente il\n        Covid ha \"bloccato\" un po' di progetti, forse anche sul pi\u00F9 bello quando vedevamo avverarsi sia sul\n        piano sportivo che aggregativo i nostri primi traguardi.\n        La trasferta di San Damiano d' Asti con un pulman da 70 persone pieno di supporters, l'esordio delle\n        Girlz (vedi foto sotto), l'album dei nostri campioni, il ritrovo a Pescia per l'assemblea nazionale del\n        calcio popolare e per ultimo il torneo in Valsusa. Ci saremo sicuramente dimenticati altri momenti top\n        di questo 2020 perch\u00E9 ogni secondo, ogni minuto, ogni ora passati insieme sono stati vissuti con grande\n        passione e permetteteci il termine, PRESABBENE, sempre oltre il 90esimo.\n        Non possiamo far altro allora che augurare ai/alle nostr* tesserat*, ai/alle nostr* soci/e ed ai/alle\n        supporters un 2021 sicuramente migliore sul piano sanitario, ben consapevoli di quanto lo sport sia\n        fondamentale per la salute di tutti e tutte, ma soprattutto abbiamo pi\u00F9 chiare le nostre rivendicazioni\n        come quello di renderlo accessibile a tutt*.\n        Torneremo tutt* insieme sugli spalti, il sabato pomeriggio al Campo Bosso a tifare l' Aurora o al\n        PalaCus a sostenere le Girlz, a lottare su ogni pallone e a farci il fiato agli allenamenti.\n        Sempre con il nostro odio al calcio moderno, con i nostri valori solidali e con il solito sogno di\n        essere una spina nel fianco un giorno nel calcio che conta. (seeeee sognate, sognate...) Avanti tutta\n        Aurora Vanchiglia!\n        BUON 2021! ALLA CARICA!"
                },
                {
                    id: '3',
                    title: 'SE TOCCANO UNA, TOCCANO TUTTE!',
                    coverImage: 'assets/eddi.jpg',
                    body: "La notizia della conferma della sorveglianza speciale alla nostra compagna e sorella Eddi ci lascia\n        allibite e anche molto in allerta.\n        A Torino, nella nostra citt\u00E1, la Procura ha appena creato l'ennesimo grosso precedente per cui chi\n        sceglie di fare della lotta parte integrante della propria vita, chi sceglie di combattere ogni giorno\n        contro fascismi, sessismo e sfruttamento lavorativo e territoriale \u00E8 in pericolo: chi pensa e agisce le\n        sue parole \u00E8 in pericolo, e allora in pericolo lo siamo tutte. Tutte noi che viviamo la realt\u00E1 che\n        abitiamo senza subirla passivamente.\n        \"Arrendersi non \u00E8 un opzione\" e noi staremo al tuo fianco.\n        <br>\n        Asd Aurora Vanchiglia Girlz"
                },
                {
                    id: '4',
                    title: 'Un anno fa',
                    coverImage: 'assets/match.png',
                    body: "esordivamo ufficialmente in campionato e and\u00F2 cosi, testuali parole:\n\n        \"Che cuore quest' Aurora Vanchiglia!\n        Primo punto messo in cascina contro l' A.S.D Falcherese grazie al goal in rimonta del nostro perno\n        difensivo Piero Maiorano!\""
                }
            ];
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
                production: false
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
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! /home/runner/work/Asd-Aurora-Vanchiglia.github.io/Asd-Aurora-Vanchiglia.github.io/src/main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map