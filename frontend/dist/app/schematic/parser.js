System.register(['angular2/core', './symbol'], function(exports_1, context_1) {
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
    var core_1, symbol_1;
    var Parser;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (symbol_1_1) {
                symbol_1 = symbol_1_1;
            }],
        execute: function() {
            Parser = (function () {
                function Parser() {
                    this.symbols = [];
                }
                Parser.prototype.GetSymbols = function (content) {
                    var symbol;
                    var isDraw = false;
                    var lines = this.GetLines(content);
                    for (var _i = 0, lines_1 = lines; _i < lines_1.length; _i++) {
                        var line = lines_1[_i];
                        line = line.replace('\n', '');
                        line = line.replace(/\s+/g, ' ');
                        //console.log(line);
                        var parameters = line.split(' ');
                        var commend = parameters[0];
                        // TODO: use factory pattern
                        // TODO: finish parser
                        switch (commend) {
                            case 'DEF':
                                symbol = new symbol_1.Symbol();
                                symbol.Definition = new symbol_1.Definition(parameters);
                                break;
                            case 'F0':
                                symbol.Fields.push(new symbol_1.F0(parameters));
                                break;
                            case 'F':
                                symbol.Fields.push(new symbol_1.FN(parameters));
                                break;
                            case 'ALIAS':
                                break;
                            case '$FPLIST':
                                break;
                            case '$ENDFPLIST':
                                break;
                            case 'DRAW':
                                isDraw = true;
                                break;
                            case 'ENDDRAW':
                                isDraw = false;
                                break;
                            case 'ENDDEF':
                                this.symbols.push(symbol);
                                break;
                            default:
                                if (isDraw) {
                                    var shape = new symbol_1.ShapeFactory().Create(commend, parameters);
                                    symbol.Shapes.push(shape);
                                }
                                break;
                        }
                    }
                    console.log(this.symbols);
                    return this.symbols;
                };
                Parser.prototype.GetLines = function (content) {
                    return content.split('\n');
                };
                Parser = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], Parser);
                return Parser;
            }());
            exports_1("Parser", Parser);
        }
    }
});
//# sourceMappingURL=parser.js.map