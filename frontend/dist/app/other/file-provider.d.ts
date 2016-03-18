import { EventEmitter } from 'angular2/core';
export declare class FileProvider {
    onFileContentReady: EventEmitter<string>;
    files: File[];
    content: string;
    onFileSelect(event: any): void;
    private _ExtractFileList(fileList);
    onDragOver(event: DragEvent): void;
    onDrop(event: DragEvent): void;
    readFile(file: File): void;
}
