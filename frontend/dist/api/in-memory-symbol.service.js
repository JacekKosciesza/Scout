System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var InMemorySymbolService;
    return {
        setters:[],
        execute: function() {
            InMemorySymbolService = (function () {
                function InMemorySymbolService() {
                }
                /**
                * Creates fresh copy of data each time.
                * Safe for consuming service to morph arrays and objects.
                */
                InMemorySymbolService.prototype.createDb = function () {
                    var symbols = [
                        {
                            "id": 1,
                            "name": "74469"
                        },
                        {
                            "id": 2,
                            "name": "74471"
                        },
                    ];
                    return { symbols: symbols };
                };
                return InMemorySymbolService;
            }());
            exports_1("InMemorySymbolService", InMemorySymbolService);
        }
    }
});
//# sourceMappingURL=in-memory-symbol.service.js.map