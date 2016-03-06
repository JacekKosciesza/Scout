import { Component } from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http';

import { FileProvider } from './other/file-provider';
import { SchematicCanvas } from './schematic/schematic-canvas';
import { Parser } from './schematic/parser';
import { Symbol } from './schematic/symbol';
import { SymbolLibrary } from './schematic/symbol-library.component';
import { Slug } from './pipes/slug';


@Component({
  selector: 'scout-eda',
  templateUrl: 'app/scout-eda.html',
  styleUrls: ['app/scout-eda.css'],
  directives: [FileProvider, SchematicCanvas, SymbolLibrary],  
  providers: [HTTP_PROVIDERS, Parser],
  pipes: [Slug]
})
export class ScoutEDA {
  codename = "Scout EDA";
  symbols: Array<Symbol> = [];
  
  constructor(private _parser: Parser) {
  }
  
  onFileContentReady(fileContent: string) {
    //console.log(fileContent);
    //var parser = new Parser();
    this.symbols = this._parser.GetSymbols(fileContent);
  }
}


