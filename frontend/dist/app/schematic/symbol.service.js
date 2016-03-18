/// <reference path="../../node_modules/rxjs/Observable.d.ts" />
System.register(['angular2/core', 'angular2/http', 'rxjs/Rx', '../shared/shared', '../blocks/blocks'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, Rx_1, shared_1, blocks_1;
    var symbolsUrl, SymbolService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            },
            function (shared_1_1) {
                shared_1 = shared_1_1;
            },
            function (blocks_1_1) {
                blocks_1 = blocks_1_1;
            }],
        execute: function() {
            symbolsUrl = shared_1.CONFIG.baseUrls.symbols;
            SymbolService = (function () {
                function SymbolService(_http, _exceptionService, 
                    //private _messageService: MessageService,
                    _spinnerService) {
                    this._http = _http;
                    this._exceptionService = _exceptionService;
                    this._spinnerService = _spinnerService;
                }
                // Create
                SymbolService.prototype.addSymbol = function (symbol) {
                    var _this = this;
                    var body = JSON.stringify(symbol); // TODO: we may be able to skip the stringify step in the near future
                    var headers = new http_1.Headers({ 'Content-Type': 'application/json' }); // TODO: isn't it default?
                    var options = new http_1.RequestOptions({ headers: headers });
                    this._spinnerService.show();
                    return this._http
                        .post("" + symbolsUrl, body, options)
                        .map(function (res) { return res.json().data; })
                        .catch(this._exceptionService.catchBadResponse)
                        .finally(function () { return _this._spinnerService.hide(); });
                };
                // Read
                SymbolService.prototype.getSymbols = function () {
                    var _this = this;
                    this._spinnerService.show();
                    return this._http.get(symbolsUrl)
                        .map(function (response) { return response.json().data; })
                        .do(function (data) { return console.log(data); }) // TODO: comment it out before going to production!
                        .catch(this.handleError)
                        .finally(function () { return _this._spinnerService.hide(); });
                };
                // Read
                SymbolService.prototype.getSymbol = function (id) {
                    var _this = this;
                    this._spinnerService.show();
                    return this._http.get(symbolsUrl + "/" + id)
                        .map(function (response) { return response.json().data; })
                        .catch(this._exceptionService.catchBadResponse)
                        .finally(function () { return _this._spinnerService.hide(); });
                };
                SymbolService.prototype.search = function (term) {
                    // TODO: implement
                    return this.getSymbols();
                };
                // Update
                SymbolService.prototype.updateSymbol = function (symbol) {
                    var _this = this;
                    var body = JSON.stringify(symbol);
                    this._spinnerService.show();
                    return this._http
                        .put(symbolsUrl + "/" + symbol.id, body)
                        .catch(this._exceptionService.catchBadResponse)
                        .finally(function () { return _this._spinnerService.hide(); });
                };
                // Delete
                SymbolService.prototype.deleteSymbol = function (symbol) {
                    var _this = this;
                    this._spinnerService.show();
                    return this._http
                        .delete(symbolsUrl + "/" + symbol.id)
                        .catch(this._exceptionService.catchBadResponse)
                        .finally(function () { return _this._spinnerService.hide(); });
                };
                SymbolService.prototype.handleError = function (error) {
                    // TODO: send the error to some remote logging infrastructure instead of just logging it to the console        
                    console.error(error);
                    return Rx_1.Observable.throw(error.json().error || 'Server error');
                };
                SymbolService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http, blocks_1.ExceptionService, blocks_1.SpinnerService])
                ], SymbolService);
                return SymbolService;
            }());
            exports_1("SymbolService", SymbolService);
        }
    }
});
//# sourceMappingURL=symbol.service.js.map