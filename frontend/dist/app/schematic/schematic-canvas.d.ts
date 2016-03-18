/// <reference path="../../../typings/browser/ambient/pixi.js/index.d.ts" />
import { AfterViewInit, SimpleChange } from 'angular2/core';
import { Symbol } from './symbol';
export declare class SchematicCanvas implements AfterViewInit {
    symbols: Array<Symbol>;
    renderer: PIXI.WebGLRenderer;
    stage: PIXI.Container;
    graphics: PIXI.Graphics;
    ngAfterViewInit(): void;
    ngOnChanges(changes: {
        [key: string]: SimpleChange;
    }): void;
    refresh(): void;
}
