System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var SymbolSettings;
    return {
        setters:[],
        execute: function() {
            SymbolSettings = (function () {
                function SymbolSettings(name, designator, unitsPerPackage, showPinNumberTest, pinTextPositionOffset) {
                    this.name = name;
                    this.designator = designator;
                    this.unitsPerPackage = unitsPerPackage;
                    this.showPinNumberTest = showPinNumberTest;
                    this.pinTextPositionOffset = pinTextPositionOffset;
                }
                return SymbolSettings;
            }());
            exports_1("SymbolSettings", SymbolSettings);
        }
    }
});
//# sourceMappingURL=symbol-settings.js.map