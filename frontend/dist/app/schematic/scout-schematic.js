System.register(['angular2/core', '../other/file-provider', './schematic-canvas', './parser', './symbol-library.component', '../pipes/slug.pipe', './library/symbol-general-settings.component'], function(exports_1, context_1) {
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
    var core_1, file_provider_1, schematic_canvas_1, parser_1, symbol_library_component_1, slug_pipe_1, symbol_general_settings_component_1;
    var ScoutSchematic;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (file_provider_1_1) {
                file_provider_1 = file_provider_1_1;
            },
            function (schematic_canvas_1_1) {
                schematic_canvas_1 = schematic_canvas_1_1;
            },
            function (parser_1_1) {
                parser_1 = parser_1_1;
            },
            function (symbol_library_component_1_1) {
                symbol_library_component_1 = symbol_library_component_1_1;
            },
            function (slug_pipe_1_1) {
                slug_pipe_1 = slug_pipe_1_1;
            },
            function (symbol_general_settings_component_1_1) {
                symbol_general_settings_component_1 = symbol_general_settings_component_1_1;
            }],
        execute: function() {
            ScoutSchematic = (function () {
                function ScoutSchematic(_parser) {
                    this._parser = _parser;
                    this.codename = 'Scout EDA';
                    this.symbols = [];
                }
                ScoutSchematic.prototype.onFileContentReady = function (fileContent) {
                    //console.log(fileContent);
                    //var parser = new Parser();
                    this.symbols = this._parser.GetSymbols(fileContent);
                };
                ScoutSchematic = __decorate([
                    core_1.Component({
                        selector: 'scout-schematic',
                        templateUrl: 'app/schematic/scout-schematic.html',
                        directives: [file_provider_1.FileProvider, schematic_canvas_1.SchematicCanvas, symbol_library_component_1.SymbolLibrary, symbol_general_settings_component_1.SymbolGeneralSettings],
                        providers: [parser_1.Parser],
                        pipes: [slug_pipe_1.SlugPipe]
                    }), 
                    __metadata('design:paramtypes', [parser_1.Parser])
                ], ScoutSchematic);
                return ScoutSchematic;
            }());
            exports_1("ScoutSchematic", ScoutSchematic);
        }
    }
});
//# sourceMappingURL=scout-schematic.js.map