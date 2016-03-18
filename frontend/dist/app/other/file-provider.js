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
    var FileProvider;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            FileProvider = (function () {
                function FileProvider() {
                    this.onFileContentReady = new core_1.EventEmitter();
                    this.files = [];
                }
                FileProvider.prototype.onFileSelect = function (event) {
                    this.files = this._ExtractFileList(event.target.files);
                };
                FileProvider.prototype._ExtractFileList = function (fileList) {
                    var files = [];
                    for (var i = 0, f; f = fileList[i]; i++) {
                        //if (!f.type.match('image.*')) {
                        files.push(f);
                    }
                    return files;
                };
                FileProvider.prototype.onDragOver = function (event) {
                    event.stopPropagation();
                    event.preventDefault();
                    event.dataTransfer.dropEffect = 'copy';
                };
                FileProvider.prototype.onDrop = function (event) {
                    event.stopPropagation();
                    event.preventDefault();
                    this.files = this._ExtractFileList(event.dataTransfer.files);
                };
                FileProvider.prototype.readFile = function (file) {
                    var _this = this;
                    var reader = new FileReader();
                    reader.onload = function (event) {
                        _this.content = event.target.result;
                        _this.onFileContentReady.emit(_this.content);
                    };
                    reader.readAsText(file, "UTF-8");
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], FileProvider.prototype, "onFileContentReady", void 0);
                FileProvider = __decorate([
                    core_1.Component({
                        selector: 'file-provider',
                        templateUrl: 'app/other/file-provider.html',
                        styleUrls: ['app/other/file-provider.css']
                    }), 
                    __metadata('design:paramtypes', [])
                ], FileProvider);
                return FileProvider;
            }());
            exports_1("FileProvider", FileProvider);
        }
    }
});
//# sourceMappingURL=file-provider.js.map