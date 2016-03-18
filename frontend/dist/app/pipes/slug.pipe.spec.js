/// <reference path="../../typings/browser/ambient/jasmine/index.d.ts" />
System.register(['angular2/testing', "./slug.pipe"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var testing_1, slug_pipe_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (slug_pipe_1_1) {
                slug_pipe_1 = slug_pipe_1_1;
            }],
        execute: function() {
            testing_1.describe('Slug pipe tests', function () {
                var pipe;
                testing_1.beforeEach(function () {
                    pipe = new slug_pipe_1.SlugPipe();
                });
                testing_1.it('Should generate slug from value', function () {
                    var result = pipe.transform('This is sparta', null);
                    testing_1.expect(result).toEqual('this-is-sparta');
                });
            });
        }
    }
});
//# sourceMappingURL=slug.pipe.spec.js.map