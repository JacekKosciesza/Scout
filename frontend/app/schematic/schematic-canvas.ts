/// <reference path="../typings/pixi.js.d.ts"/>

import { Component, Input, AfterViewInit, SimpleChange } from 'angular2/core';
import { Symbol } from './schematic/symbol';

@Component({
    selector: 'schematic-canvas',
    template: `
        There are: {{symbols.length}} symbols
        <main id="canvas"></main>
    `
})
export class SchematicCanvas implements AfterViewInit {
    @Input() symbols: Array<Symbol>;
    renderer: PIXI.WebGLRenderer;
    stage: PIXI.Container;
    graphics: PIXI.Graphics;
    
    ngAfterViewInit() {
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
    }
    
    ngOnChanges(changes: {[key: string]: SimpleChange}) {
        console.log(changes);
        for (let propName in changes) {
            if (propName === 'symbols') {
                this.refresh();
            } else {
                console.log(`${propName} initialized`)
            }
        }        
    }
    
    refresh() {
        for (let symbol of this.symbols) {
            for (let shape of symbol.Shapes) {
                shape.draw(this.graphics);
            }
        }
        
        if (this.renderer) {
            this.renderer.render(this.stage);
        }
    }
}