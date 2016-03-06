import { Component } from 'angular2/core';
import { Parser } from '../schematic/parser'; // TODO: move it from here

@Component({
  selector: 'file-provider',
  templateUrl: 'app/other/file-provider.html',
  styleUrls: ['app/other/file-provider.css']
})
export class FileProvider {
    public files:File[] = [];
    public content:string;
    
    public onFileSelect(event) {
        this.files = this._ExtractFileList(event.target.files);
    }
    
    private _ExtractFileList(fileList:FileList) {
        var files = [];
        for (var i = 0, f; f = fileList[i]; i++) {
            //if (!f.type.match('image.*')) {
                files.push(f);
            //}
        }
        return files;
    }
    
    public onDragOver(event) {
        event.stopPropagation();
        event.preventDefault();
        event.dataTransfer.dropEffect = 'copy';
    }
    
    public onDrop(event) {
        event.stopPropagation();
        event.preventDefault();
        this.files = this._ExtractFileList(event.dataTransfer.files);
    }
    
    public readFile(file) {
        let reader = new FileReader();
        reader.onload = (event) => {
           this.content = event.target.result;
           // TODO: move it from here 
           var parser = new Parser();
           var symbols = parser.GetSymbols(this.content);
        };
        reader.readAsText(file, "UTF-8");
    }
}