System.register(['./entity.service', './exception.service', './spinner/spinner', './toast/toast'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function exportStar_1(m) {
        var exports = {};
        for(var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_1(exports);
    }
    return {
        setters:[
            function (entity_service_1_1) {
                exportStar_1(entity_service_1_1);
            },
            function (exception_service_1_1) {
                exportStar_1(exception_service_1_1);
            },
            function (spinner_1_1) {
                exportStar_1(spinner_1_1);
            },
            function (toast_1_1) {
                exportStar_1(toast_1_1);
            }],
        execute: function() {
        }
    }
});
//# sourceMappingURL=blocks.js.map