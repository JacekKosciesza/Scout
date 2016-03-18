/// <reference path="../../typings/browser/ambient/snapsvg/index.d.ts" />
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
    var PCBSurface;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            PCBSurface = (function () {
                function PCBSurface() {
                }
                PCBSurface.prototype.ngAfterViewInit = function () {
                    var s = Snap("#svg");
                    var t = s.text(150, 150, ["S", "cout"]);
                    t.attr({ fill: "#A01C34", "font-size": "60px", "font-family": "Helvetica" });
                    t.selectAll("tspan:nth-child(2)").attr({
                        fill: "#434343",
                    });
                    var c1 = s.circle(184, 114, 5);
                    var c2 = s.circle(157, 142, 5);
                    var circleAttr = { fill: "#FFFFFF", stroke: "#A01C34", strokeWidth: 4 };
                    c1.attr(circleAttr);
                    c2.attr(circleAttr);
                    var logo = s.group(t, c1, c2);
                    logo.drag();
                    //bigCircle.drag();
                };
                PCBSurface = __decorate([
                    core_1.Component({
                        selector: 'pcb-surface',
                        template: "<svg id=\"svg\"></svg>",
                        styles: ['#svg { width: 100%; height: 80vh; background-color:#eee;']
                    }), 
                    __metadata('design:paramtypes', [])
                ], PCBSurface);
                return PCBSurface;
            }());
            exports_1("PCBSurface", PCBSurface);
        }
    }
});
//# sourceMappingURL=pcb-surface.js.map