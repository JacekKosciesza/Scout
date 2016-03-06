/// <reference path="../typings/pixi.js.d.ts"/>

import { Component, AfterViewInit } from 'angular2/core';

@Component({
    selector: 'schematic-canvas',
    template: `<main id="canvas"></main>`
})
export class SchematicCanvas implements AfterViewInit {
    ngAfterViewInit() {
        // You can use either `new PIXI.WebGLRenderer`, `new PIXI.CanvasRenderer`, or `PIXI.autoDetectRenderer`
        // which will try to choose the best renderer for the environment you are in.
        var renderer = new PIXI.WebGLRenderer(800, 600);

        // The renderer will create a canvas element for you that you can then insert into the DOM.
        document.getElementById('canvas').appendChild(renderer.view);

        // You need to create a root container that will hold the scene you want to draw.
        var stage = new PIXI.Container();
        
        var graphics = new PIXI.Graphics();
        
        // begin a green fill..
        graphics.beginFill(0xFFFFFF);
        
        // draw a triangle using lines
        graphics.moveTo(0,0);
        graphics.lineTo(-50, 100);
        graphics.lineTo(50, 100);
        
        // end the fill
        graphics.endFill();
        
        // add it the stage so we see it on our screens..
        stage.addChild(graphics);
        
        renderer.render(stage);
    }
}