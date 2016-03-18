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
    var SlugPipe;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            /*
             * Generates slug from the value
              * Usage:
             *   value | slug
             * Example:
             *   {{ "This is sparta" |  slug }}
             *   formats to: "this-is-sparta"
             * Links
             *   http://stackoverflow.com/questions/1053902/how-to-convert-a-title-to-a-url-slug-in-jquery
            */
            SlugPipe = (function () {
                function SlugPipe() {
                }
                SlugPipe.prototype.transform = function (value, args) {
                    var transformed = value.toLowerCase().replace(/[^\w ]+/g, '').replace(/ +/g, '-');
                    return transformed;
                };
                SlugPipe = __decorate([
                    core_1.Pipe({ name: 'slug' }), 
                    __metadata('design:paramtypes', [])
                ], SlugPipe);
                return SlugPipe;
            }());
            exports_1("SlugPipe", SlugPipe);
        }
    }
});
//# sourceMappingURL=slug.pipe.js.map