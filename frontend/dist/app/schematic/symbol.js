/// <reference path="../../typings/browser/ambient/pixi.js/index.d.ts" />
// https://github.com/KiCad/kicad-library/blob/master/library/74xx.lib
// https://easyeda.com/component/74469-MR3Ddbxus
// http://www.compuphase.com/electronics/LibraryFileFormats.pdf
// https://github.com/KiCad/kicad-library-utils/blob/master/schlib/schlib.py
System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var Symbol, Definition, Field, F0, FN, ShapeFactory, Shape, Draw, Arc, Circle, Polyline, Rectangle, Text, Pin;
    return {
        setters:[],
        execute: function() {
            Symbol = (function () {
                function Symbol() {
                    this.Fields = [];
                    this.Draw = new Draw();
                    this.Shapes = [];
                }
                return Symbol;
            }());
            exports_1("Symbol", Symbol);
            Definition = (function () {
                function Definition(parameters) {
                    this.name = parameters[1], this.reference = parameters[2], this.unused = parameters[3], this.text_offset = parameters[4], this.draw_pinnumber = parameters[5], this.draw_pinname = parameters[6], this.unit_count = parameters[7], this.units_locked = parameters[8], this.option_flag = parameters[9];
                    // console.log(this);
                }
                return Definition;
            }());
            exports_1("Definition", Definition);
            Field = (function () {
                function Field() {
                }
                return Field;
            }());
            exports_1("Field", Field);
            F0 = (function (_super) {
                __extends(F0, _super);
                function F0(parameters) {
                    _super.call(this);
                    this.reference = parameters[1], this.posx = parameters[2], this.posy = parameters[3], this.text_size = parameters[4], this.text_orient = parameters[5], this.visibility = parameters[6], this.htext_justify = parameters[7], this.vtext_justify = parameters[8];
                    // console.log(this);
                }
                return F0;
            }(Field));
            exports_1("F0", F0);
            FN = (function (_super) {
                __extends(FN, _super);
                function FN(parameters) {
                    _super.call(this);
                    this.name = parameters[1], this.posx = parameters[2], this.posy = parameters[3], this.text_size = parameters[4], this.text_orient = parameters[5], this.visibility = parameters[6], this.htext_justify = parameters[7], this.vtext_justify = parameters[8], this.fieldname = parameters[9];
                    // console.log(this);
                }
                return FN;
            }(Field));
            exports_1("FN", FN);
            ShapeFactory = (function () {
                function ShapeFactory() {
                }
                ShapeFactory.prototype.Create = function (commend, parameters) {
                    switch (commend) {
                        case 'A':
                            return new Arc(parameters);
                        case 'C':
                            return new Circle(parameters);
                        case 'P':
                            return new Polyline(parameters);
                        case 'S':
                            return new Rectangle(parameters);
                        case 'T':
                            return new Text(parameters);
                        case 'X':
                            return new Pin(parameters);
                        default:
                            return new Shape();
                    }
                };
                return ShapeFactory;
            }());
            exports_1("ShapeFactory", ShapeFactory);
            Shape = (function () {
                function Shape() {
                }
                Shape.prototype.draw = function (graphics) {
                    console.log("Drawing " + typeof this);
                };
                return Shape;
            }());
            exports_1("Shape", Shape);
            Draw = (function () {
                function Draw() {
                }
                return Draw;
            }());
            exports_1("Draw", Draw);
            // TODO: extend from some generic e.g. Shape
            Arc = (function (_super) {
                __extends(Arc, _super);
                function Arc(parameters) {
                    _super.call(this);
                    this.posx = parameters[1], this.posy = parameters[2], this.radius = parameters[3], this.start_angle = parameters[4], this.end_angle = parameters[5], this.unit = parameters[6], this.convert = parameters[7], this.thickness = parameters[8], this.fill = parameters[9], this.startx = parameters[10], this.starty = parameters[11], this.endx = parameters[12], this.endy = parameters[13];
                    // console.log(this);
                }
                return Arc;
            }(Shape));
            exports_1("Arc", Arc);
            Circle = (function (_super) {
                __extends(Circle, _super);
                function Circle(parameters) {
                    _super.call(this);
                    this.posx = parameters[1], this.posy = parameters[2], this.radius = parameters[3], this.unit = parameters[4], this.convert = parameters[5], this.thickness = parameters[6], this.fill = parameters[7];
                    // console.log(this);
                }
                return Circle;
            }(Shape));
            exports_1("Circle", Circle);
            Polyline = (function (_super) {
                __extends(Polyline, _super);
                function Polyline(parameters) {
                    _super.call(this);
                    this.point_count = parameters[1], this.unit = parameters[2], this.convert = parameters[3], this.thickness = parameters[4], this.points = parameters[5], this.fill = parameters[6];
                    // console.log(this);
                }
                return Polyline;
            }(Shape));
            exports_1("Polyline", Polyline);
            Rectangle = (function (_super) {
                __extends(Rectangle, _super);
                function Rectangle(parameters) {
                    _super.call(this);
                    this.startx = parameters[1], this.starty = parameters[2], this.endx = parameters[3], this.endy = parameters[4], this.unit = parameters[5], this.convert = parameters[6], this.thickness = parameters[7], this.fill = parameters[8];
                    // console.log(this);
                }
                Rectangle.prototype.draw = function (graphics) {
                    console.log("Drawing rectangle");
                    graphics.beginFill(0xFFFFFF);
                    graphics.lineStyle(2, 0xFF0000);
                    graphics.drawRect(this.startx, this.starty, this.endx, this.endy);
                };
                return Rectangle;
            }(Shape));
            exports_1("Rectangle", Rectangle);
            Text = (function (_super) {
                __extends(Text, _super);
                function Text(parameters) {
                    _super.call(this);
                    this.direction = parameters[1], this.posx = parameters[2], this.posy = parameters[3], this.text_size = parameters[4], this.text_type = parameters[5], this.unit = parameters[6], this.convert = parameters[7], this.text = parameters[8], this.italic = parameters[9], this.bold = parameters[10], this.hjustify = parameters[11], this.vjustify = parameters[12];
                    // console.log(this);
                }
                return Text;
            }(Shape));
            exports_1("Text", Text);
            Pin = (function (_super) {
                __extends(Pin, _super);
                function Pin(parameters) {
                    _super.call(this);
                    this.name = parameters[1], this.num = parameters[2], this.posx = parameters[3], this.posy = parameters[4], this.length = parameters[5], this.direction = parameters[6], this.name_text_size = parameters[7], this.num_text_size = parameters[8], this.unit = parameters[9], this.convert = parameters[10], this.electrical_type = parameters[11], this.pin_type = parameters[12];
                    // console.log(this);
                }
                return Pin;
            }(Shape));
            exports_1("Pin", Pin);
        }
    }
});
//# sourceMappingURL=symbol.js.map