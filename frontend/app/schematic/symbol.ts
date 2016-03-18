/// <reference path="../typings/pixi.js.d.ts"/>
// https://github.com/KiCad/kicad-library/blob/master/library/74xx.lib
// https://easyeda.com/component/74469-MR3Ddbxus
// http://www.compuphase.com/electronics/LibraryFileFormats.pdf
// https://github.com/KiCad/kicad-library-utils/blob/master/schlib/schlib.py

export class Symbol {    
    // private Name: string;
    // private Reference: string;
    // private Pins: Array<Pin>;
    public id: number;
    
    public Definition: Definition;
    public Fields: Array<Field> = [];
    public Draw: Draw =  new Draw();
    public Shapes: Array<Shape> = [];
}

export class Definition {
    private name: any;
    private reference: any;
    private unused: any;
    private text_offset: any;
    private draw_pinnumber: any;
    private draw_pinname: any;
    private unit_count: any;
    private units_locked: any;
    private option_flag: any;
    
    constructor(parameters: Array<string>) {
        [,this.name, this.reference, this.unused, this.text_offset, this.draw_pinnumber, this.draw_pinname, this.unit_count, this.units_locked, this.option_flag] = parameters;        
        // console.log(this);
    }
}

export class Field {
    protected posx: any;
    protected posy: any;
    protected text_size: any;
    protected text_orient: any;
    protected visibility: any;
    protected htext_justify: any;
    protected vtext_justify: any;
}

export class F0 extends Field {
    private reference: any;
    
    constructor(parameters: Array<string>) {
        super();
        [,this.reference, this.posx, this.posy, this.text_size, this.text_orient, this.visibility, this.htext_justify, this.vtext_justify] = parameters;        
        // console.log(this);
    }
}

export class FN extends Field {
    private name: any;
    private fieldname: any;
    
    constructor(parameters: Array<string>) {
        super();
        [,this.name, this.posx, this.posy, this.text_size, this.text_orient, this.visibility, this.htext_justify, this.vtext_justify, this.fieldname] = parameters;        
        // console.log(this);
    }
}

export class ShapeFactory {
    public Create(commend: string, parameters: Array<string>): Shape {
        switch(commend) {
            case 'A':
                return new Arc(parameters);
                break;
            case 'C':
                return new Circle(parameters);
                break;
            case 'P':
                return new Polyline(parameters);
                break;
            case 'S':
                return new Rectangle(parameters);
                break;
            case 'T':
                return new Text(parameters);
                break;
            case 'X':
                return new Pin(parameters);
                break;
        }
    }
}

export class Shape {
    public draw(graphics: PIXI.Graphics) {
        console.log(`Drawing ${typeof this}`);
    }
}

export class Draw {
    public Arcs: Array<Arc>;
    public Circles: Array<Circle>;
    public Polylines: Array<Polyline>;
    public Rectangles: Array<Rectangle>;
    public Texts: Array<Text>;
    public Pins: Array<Pin>;
}

// TODO: extend from some generic e.g. Shape

export class Arc extends Shape {
    private posx: any;
    private posy: any;
    private radius: any;
    private start_angle: any;
    private end_angle: any;
    private unit: any;
    private convert: any;
    private thickness: any;
    private fill: any;
    private startx: any;
    private starty: any;
    private endx: any;
    private endy: any;
    
    constructor(parameters: Array<string>) {
        super();
        [,this.posx, this.posy, this.radius, this.start_angle, this.end_angle, this.unit, this.convert, this.thickness, this.fill, this.startx, this.starty, this.endx, this.endy] = parameters;        
        // console.log(this);
    }
}

export class Circle extends Shape {
    private posx: any;
    private posy: any;
    private radius: any;
    private unit: any;
    private convert: any;
    private thickness: any;
    private fill: any;
    
    constructor(parameters: Array<string>) {
        super();
        [,this.posx, this.posy, this.radius, this.unit, this.convert, this.thickness, this.fill] = parameters;        
        // console.log(this);
    }
}

export class Polyline extends Shape {
    private point_count: any;
    private unit: any;
    private convert: any;
    private thickness: any;
    private points: any;
    private fill: any;
    
    constructor(parameters: Array<string>) {
        super();
        [,this.point_count, this.unit, this.convert, this.thickness, this.points, this.fill] = parameters;        
        // console.log(this);
    }
}

export class Rectangle extends Shape {
    private startx: any;
    private starty: any;
    private endx: any;
    private endy: any;
    private unit: any;
    private convert: any;
    private thickness: any;
    private fill: any;
    
    constructor(parameters: Array<string>) {
        super();
        [,this.startx, this.starty, this.endx, this.endy, this.unit, this.convert, this.thickness, this.fill] = parameters;        
        // console.log(this);
    }
    
    public draw(graphics: PIXI.Graphics) {
        console.log(`Drawing rectangle`);
        graphics.beginFill(0xFFFFFF);
        graphics.lineStyle(2, 0xFF0000);
        graphics.drawRect(this.startx, this.starty, this.endx, this.endy);
    }
}

export class Text extends Shape {
    private direction: any;
    private posx: any;
    private posy: any;
    private text_size: any;
    private text_type: any;
    private unit: any;
    private convert: any;
    private text: any;
    private italic: any;
    private bold: any;
    private hjustify: any;
    private vjustify: any;
    
    constructor(parameters: Array<string>) {
        super();
        [,this.direction, this.posx, this.posy, this.text_size, this.text_type, this.unit, this.convert, this.text, this.italic, this.bold, this.hjustify, this.vjustify] = parameters;        
        // console.log(this);
    }
}

export class Pin extends Shape {
    private name: any;
    private num: any;
    private posx: any;
    private posy: any;
    private length: any;
    private direction: any;
    private name_text_size: any;
    private num_text_size: any;
    private unit: any;
    private convert: any;
    private electrical_type: any;
    private pin_type: any;
    
    constructor(parameters: Array<string>) {
        super();
        [,this.name, this.num, this.posx, this.posy, this.length, this.direction, this.name_text_size, this.num_text_size, this.unit, this.convert, this.electrical_type, this.pin_type] = parameters;        
        // console.log(this);
    }
}