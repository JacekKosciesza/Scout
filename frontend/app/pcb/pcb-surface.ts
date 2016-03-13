import { Component, AfterViewInit } from 'angular2/core';

@Component({
    selector: 'pcb-surface',
    template: `<svg id="svg"></svg>`,
    styles: ['#svg { width: 100%; height: 80vh; background-color:#eee;']
})
export class PCBSurface implements AfterViewInit {
     ngAfterViewInit() {
        var s = Snap("#svg");
        var t = s.text(150, 150, ["S", "cout"]);
        t.attr({fill: "#A01C34", "font-size": "60px", "font-family": "Helvetica"});
        t.selectAll("tspan:nth-child(2)").attr({
            fill: "#434343",
        });        
        var c1 = s.circle(184, 114, 5);
        var c2 = s.circle(157, 142, 5);
        var circleAttr = {fill: "#FFFFFF", stroke: "#A01C34", strokeWidth: 4}; 
        c1.attr(circleAttr);
        c2.attr(circleAttr);
        var logo = s.group(t, c1, c2);
        logo.drag();
        
        
        //bigCircle.drag();
     }
}