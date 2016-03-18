/// <reference path="../../../typings/browser/ambient/pixi.js/index.d.ts" />
export declare class Symbol {
    id: number;
    Definition: Definition;
    Fields: Array<Field>;
    Draw: Draw;
    Shapes: Array<Shape>;
}
export declare class Definition {
    private name;
    private reference;
    private unused;
    private text_offset;
    private draw_pinnumber;
    private draw_pinname;
    private unit_count;
    private units_locked;
    private option_flag;
    constructor(parameters: Array<string>);
}
export declare class Field {
    protected posx: any;
    protected posy: any;
    protected text_size: any;
    protected text_orient: any;
    protected visibility: any;
    protected htext_justify: any;
    protected vtext_justify: any;
}
export declare class F0 extends Field {
    private reference;
    constructor(parameters: Array<string>);
}
export declare class FN extends Field {
    private name;
    private fieldname;
    constructor(parameters: Array<string>);
}
export declare class ShapeFactory {
    Create(commend: string, parameters: Array<string>): Shape;
}
export declare class Shape {
    draw(graphics: PIXI.Graphics): void;
}
export declare class Draw {
    Arcs: Array<Arc>;
    Circles: Array<Circle>;
    Polylines: Array<Polyline>;
    Rectangles: Array<Rectangle>;
    Texts: Array<Text>;
    Pins: Array<Pin>;
}
export declare class Arc extends Shape {
    private posx;
    private posy;
    private radius;
    private start_angle;
    private end_angle;
    private unit;
    private convert;
    private thickness;
    private fill;
    private startx;
    private starty;
    private endx;
    private endy;
    constructor(parameters: Array<string>);
}
export declare class Circle extends Shape {
    private posx;
    private posy;
    private radius;
    private unit;
    private convert;
    private thickness;
    private fill;
    constructor(parameters: Array<string>);
}
export declare class Polyline extends Shape {
    private point_count;
    private unit;
    private convert;
    private thickness;
    private points;
    private fill;
    constructor(parameters: Array<string>);
}
export declare class Rectangle extends Shape {
    private startx;
    private starty;
    private endx;
    private endy;
    private unit;
    private convert;
    private thickness;
    private fill;
    constructor(parameters: Array<string>);
    draw(graphics: PIXI.Graphics): void;
}
export declare class Text extends Shape {
    private direction;
    private posx;
    private posy;
    private text_size;
    private text_type;
    private unit;
    private convert;
    private text;
    private italic;
    private bold;
    private hjustify;
    private vjustify;
    constructor(parameters: Array<string>);
}
export declare class Pin extends Shape {
    private name;
    private num;
    private posx;
    private posy;
    private length;
    private direction;
    private name_text_size;
    private num_text_size;
    private unit;
    private convert;
    private electrical_type;
    private pin_type;
    constructor(parameters: Array<string>);
}
