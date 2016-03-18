import { Component, Output, EventEmitter } from 'angular2/core';

@Component({
  selector: 'file-provider',
  templateUrl: 'app/other/file-provider.html',
  styleUrls: ['app/other/file-provider.css']
})
export class FileProvider {
    @Output() onFileContentReady = new EventEmitter<string>();
    public files:File[] = [];
    public content:string;
    
    public onFileSelect(event: any) {
        this.files = this._ExtractFileList(event.target.files);
    }
    
    private _ExtractFileList(fileList:FileList) {
        var files: File[] = [];
        for (var i = 0, f:File; f = fileList[i]; i++) {
            //if (!f.type.match('image.*')) {
                files.push(f);
            //}
        }
        return files;
    }
    
    public onDragOver(event: DragEvent) {
        event.stopPropagation();
        event.preventDefault();
        event.dataTransfer.dropEffect = 'copy';
    }
    
    public onDrop(event: DragEvent) {
        event.stopPropagation();
        event.preventDefault();
        this.files = this._ExtractFileList(event.dataTransfer.files);
    }
    
    public readFile(file: File) {
        let reader = new FileReader();
        reader.onload = (event: any ) => {
           this.content = event.target.result;
           this.onFileContentReady.emit(this.content);
        };
        reader.readAsText(file, "UTF-8");
    }
}