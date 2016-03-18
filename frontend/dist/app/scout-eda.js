System.register(['angular2/core', 'angular2/http', 'angular2/router', './other/logger.ts', './other/logger2.ts', './schematic/scout-schematic', './pcb/scout-pcb', './blocks/blocks', 'a2-in-memory-web-api/core', '../api/in-memory-symbol.service.ts'], function(exports_1, context_1) {
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
    var core_1, http_1, router_1, logger_ts_1, logger2_ts_1, scout_schematic_1, scout_pcb_1, blocks_1, core_2, in_memory_symbol_service_ts_1;
    var ScoutEDA;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (logger_ts_1_1) {
                logger_ts_1 = logger_ts_1_1;
            },
            function (logger2_ts_1_1) {
                logger2_ts_1 = logger2_ts_1_1;
            },
            function (scout_schematic_1_1) {
                scout_schematic_1 = scout_schematic_1_1;
            },
            function (scout_pcb_1_1) {
                scout_pcb_1 = scout_pcb_1_1;
            },
            function (blocks_1_1) {
                blocks_1 = blocks_1_1;
            },
            function (core_2_1) {
                core_2 = core_2_1;
            },
            function (in_memory_symbol_service_ts_1_1) {
                in_memory_symbol_service_ts_1 = in_memory_symbol_service_ts_1_1;
            }],
        execute: function() {
            ScoutEDA = (function () {
                function ScoutEDA() {
                }
                ScoutEDA = __decorate([
                    core_1.Component({
                        selector: 'scout-eda',
                        templateUrl: 'app/scout-eda.html',
                        styleUrls: ['app/scout-eda.css'],
                        directives: [router_1.ROUTER_DIRECTIVES, blocks_1.SpinnerComponent, blocks_1.ToastComponent],
                        providers: [
                            router_1.ROUTER_PROVIDERS,
                            http_1.HTTP_PROVIDERS,
                            core_1.provide(http_1.XHRBackend, { useClass: core_2.InMemoryBackendService }),
                            core_1.provide(core_2.SEED_DATA, { useClass: in_memory_symbol_service_ts_1.InMemorySymbolService }),
                            core_1.provide(core_2.InMemoryBackendConfig, { useValue: { delay: 600 } }),
                            core_1.provide(logger_ts_1.Logger, { useClass: logger2_ts_1.Logger2 }),
                            blocks_1.EntityService,
                            blocks_1.ExceptionService,
                            blocks_1.SpinnerService,
                            blocks_1.ToastService
                        ]
                    }),
                    router_1.RouteConfig([
                        { path: '/schematic', name: 'Schematic', component: scout_schematic_1.ScoutSchematic, useAsDefault: true },
                        { path: '/pcb', name: 'PCB', component: scout_pcb_1.ScoutPCB }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], ScoutEDA);
                return ScoutEDA;
            }());
            exports_1("ScoutEDA", ScoutEDA);
        }
    }
});
//# sourceMappingURL=scout-eda.js.map