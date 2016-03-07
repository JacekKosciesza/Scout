import { Component } from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http';

import { FileProvider } from '../other/file-provider';
import { SchematicCanvas } from './schematic-canvas';
import { Parser } from './parser';
import { Symbol } from './symbol';
import { SymbolLibrary } from './symbol-library.component';
import { Slug } from '../pipes/slug';

@Component({
    selector: 'scout-schematic',
    templateUrl: 'app/schematic/scout-schematic.html',
    directives: [FileProvider, SchematicCanvas, SymbolLibrary],
    providers: [HTTP_PROVIDERS, Parser],
    pipes: [Slug]
})
export class ScoutSchematic {
    codename: string = 'Scout EDA';
    symbols: Array<Symbol> = [];
  
  constructor(private _parser: Parser) {
  }
  
  onFileContentReady(fileContent: string) {
    //console.log(fileContent);
    //var parser = new Parser();
    this.symbols = this._parser.GetSymbols(fileContent);
  }
}