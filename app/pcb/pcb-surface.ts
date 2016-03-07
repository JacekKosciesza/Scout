import { Component, AfterViewInit } from 'angular2/core';

@Component({
    selector: 'pcb-surface',
    template: `<svg id="svg"></svg>`,
    styles: ['#svg { width: 100%; height: 80vh; background-color:#eee;']
})
export class PCBSurface implements AfterViewInit {
     ngAfterViewInit() {
        var s = Snap("#svg");
        var bigCircle = s.circle(150, 150, 100);
        bigCircle.attr({
            fill: '#bada55',
            stroke: '#000',
            strokeWidth: 5
        })
        bigCircle.drag();
     }
}