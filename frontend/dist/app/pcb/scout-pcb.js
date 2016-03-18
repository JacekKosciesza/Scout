System.register(['angular2/core', './pcb-surface'], function(exports_1, context_1) {
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
    var core_1, pcb_surface_1;
    var ScoutPCB;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (pcb_surface_1_1) {
                pcb_surface_1 = pcb_surface_1_1;
            }],
        execute: function() {
            ScoutPCB = (function () {
                function ScoutPCB() {
                }
                ScoutPCB = __decorate([
                    core_1.Component({
                        selector: 'scout-pcb',
                        template: "\n        <h1>PCB</h1>\n        <pcb-surface></pcb-surface>",
                        directives: [pcb_surface_1.PCBSurface]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ScoutPCB);
                return ScoutPCB;
            }());
            exports_1("ScoutPCB", ScoutPCB);
        }
    }
});
//# sourceMappingURL=scout-pcb.js.map