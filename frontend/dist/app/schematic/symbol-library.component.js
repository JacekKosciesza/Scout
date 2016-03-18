System.register(['angular2/core', 'rxjs/Subject', './symbol.service', '../blocks/blocks'], function(exports_1, context_1) {
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
    var core_1, Subject_1, symbol_service_1, blocks_1;
    var SymbolLibrary;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Subject_1_1) {
                Subject_1 = Subject_1_1;
            },
            function (symbol_service_1_1) {
                symbol_service_1 = symbol_service_1_1;
            },
            function (blocks_1_1) {
                blocks_1 = blocks_1_1;
            }],
        execute: function() {
            SymbolLibrary = (function () {
                function SymbolLibrary(_symbolService, /*private _spinnerService: SpinnerService,*/ _toastService) {
                    var _this = this;
                    this._symbolService = _symbolService;
                    this._toastService = _toastService;
                    this._searchTermStream = new Subject_1.Subject();
                    this.symbols = this._searchTermStream
                        .debounceTime(300)
                        .distinctUntilChanged()
                        .switchMap(function (term) { return _this._symbolService.search(term); });
                }
                SymbolLibrary.prototype.ngOnInit = function () { this.getSymbols(); };
                SymbolLibrary.prototype.getSymbols = function () {
                    // this._symbolService.getSymbols().subscribe(
                    //     symbols => this.symbols = symbols,
                    //     error => this.errorMessage = <any>error
                    // )
                    // this._spinnerService.show();
                    // this.symbols = this._symbolService.getSymbols()
                    //     .catch(e => {
                    //         this._toastService.activate(`${e}`);
                    //         return Observable.of();
                    //     })
                    //     .finally(() => { this._spinnerService.hide(); });                
                };
                SymbolLibrary.prototype.search = function (term) { this._searchTermStream.next(term); };
                SymbolLibrary = __decorate([
                    core_1.Component({
                        selector: 'symbol-library',
                        templateUrl: 'app/schematic/symbol-library.component.html',
                        providers: [symbol_service_1.SymbolService]
                    }), 
                    __metadata('design:paramtypes', [symbol_service_1.SymbolService, blocks_1.ToastService])
                ], SymbolLibrary);
                return SymbolLibrary;
            }());
            exports_1("SymbolLibrary", SymbolLibrary);
        }
    }
});
//# sourceMappingURL=symbol-library.component.js.map