/// <reference path="../../typings/browser/ambient/pixi.js/index.d.ts" />
System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var SchematicCanvas;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            SchematicCanvas = (function () {
                function SchematicCanvas() {
                }
                SchematicCanvas.prototype.ngAfterViewInit = function () {
                    // You can use either `new PIXI.WebGLRenderer`, `new PIXI.CanvasRenderer`, or `PIXI.autoDetectRenderer`
                    // which will try to choose the best renderer for the environment you are in.
                    this.renderer = new PIXI.WebGLRenderer(800, 600);
                    // The renderer will create a canvas element for you that you can then insert into the DOM.
                    document.getElementById('canvas').appendChild(this.renderer.view);
                    // You need to create a root container that will hold the scene you want to draw.
                    this.stage = new PIXI.Container();
                    this.graphics = new PIXI.Graphics();
                    // add it the stage so we see it on our screens..
                    this.stage.addChild(this.graphics);
                    this.renderer.render(this.stage);
                };
                SchematicCanvas.prototype.ngOnChanges = function (changes) {
                    console.log(changes);
                    for (var propName in changes) {
                        if (propName === 'symbols') {
                            this.refresh();
                        }
                        else {
                            console.log(propName + " initialized");
                        }
                    }
                };
                SchematicCanvas.prototype.refresh = function () {
                    for (var _i = 0, _a = this.symbols; _i < _a.length; _i++) {
                        var symbol = _a[_i];
                        for (var _b = 0, _c = symbol.Shapes; _b < _c.length; _b++) {
                            var shape = _c[_b];
                            shape.draw(this.graphics);
                        }
                    }
                    if (this.renderer) {
                        this.renderer.render(this.stage);
                    }
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Array)
                ], SchematicCanvas.prototype, "symbols", void 0);
                SchematicCanvas = __decorate([
                    core_1.Component({
                        selector: 'schematic-canvas',
                        template: "\n        There are: {{symbols.length}} symbols\n        <main id=\"canvas\"></main>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], SchematicCanvas);
                return SchematicCanvas;
            }());
            exports_1("SchematicCanvas", SchematicCanvas);
        }
    }
});
//# sourceMappingURL=schematic-canvas.js.map