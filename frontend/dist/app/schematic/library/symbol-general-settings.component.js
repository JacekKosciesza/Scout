System.register(['angular2/core', './symbol-settings', '../../other/logger.ts'], function(exports_1, context_1) {
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
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1, symbol_settings_1, logger_ts_1;
    var SymbolGeneralSettings;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (symbol_settings_1_1) {
                symbol_settings_1 = symbol_settings_1_1;
            },
            function (logger_ts_1_1) {
                logger_ts_1 = logger_ts_1_1;
            }],
        execute: function() {
            SymbolGeneralSettings = (function () {
                function SymbolGeneralSettings(_logger) {
                    var _this = this;
                    this._logger = _logger;
                    this.active = true;
                    this.submitted = false;
                    this.model = new symbol_settings_1.SymbolSettings('STM32F020', 'U', 1, true, 40);
                    this.pinTextPositionOffsets = [10, 20, 30, 40];
                    // No logger? Make one!
                    if (!this._logger) {
                        this._logger = {
                            log: function (msg) { return _this._logger.logs.push(msg); },
                            logs: []
                        };
                    }
                }
                SymbolGeneralSettings.prototype.onSubmit = function () {
                    this.submitted = true;
                    this._logger.log('onSubmit');
                    console.log(this.model);
                };
                SymbolGeneralSettings.prototype.newSymbol = function () {
                    var _this = this;
                    this.model = new symbol_settings_1.SymbolSettings('', 'U', 1, true, 40);
                    // This is a temporary workaround while we await a proper form reset feature.
                    this.active = false;
                    setTimeout(function () { return _this.active = true; }, 0);
                };
                Object.defineProperty(SymbolGeneralSettings.prototype, "diagnostic", {
                    // TOD: remove this when we're done
                    get: function () { return JSON.stringify(this.model); },
                    enumerable: true,
                    configurable: true
                });
                SymbolGeneralSettings = __decorate([
                    core_1.Component({
                        selector: 'symbol-general-settings',
                        templateUrl: './app/schematic/library/symbol-general-settings.component.html',
                        styleUrls: ['./app/schematic/library/symbol-general-settings.component.css'],
                        encapsulation: core_1.ViewEncapsulation.None // {None, Emulated, Native}
                    }),
                    __param(0, core_1.Optional()), 
                    __metadata('design:paramtypes', [logger_ts_1.Logger])
                ], SymbolGeneralSettings);
                return SymbolGeneralSettings;
            }());
            exports_1("SymbolGeneralSettings", SymbolGeneralSettings);
        }
    }
});
//# sourceMappingURL=symbol-general-settings.component.js.map