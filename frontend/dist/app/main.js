/// <reference path="../node_modules/typescript/lib/lib.es6.d.ts" />
System.register(['angular2/platform/browser', './scout-eda'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, scout_eda_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (scout_eda_1_1) {
                scout_eda_1 = scout_eda_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(scout_eda_1.ScoutEDA)
                .then(function (success) { return console.log("Scout EDA"); })
                .catch(function (error) { return console.log(error); });
        }
    }
});
//# sourceMappingURL=main.js.map