import { Component, OnInit } from 'angular2/core';

import { Symbol } from 'symbol';
import { SymbolService } from './symbol.service';

@Component({
    selector: 'symbol-library',
    templateUrl: 'app/schematic/symbol-library.component.html',
    providers: [SymbolService]
})
export class SymbolLibrary implements OnInit {
    public symbols: Array<Symbol> = [];
    public errorMessage: string;
    
    constructor(private _symbolService: SymbolService) {        
    }
    
    ngOnInit() { this.getSymbols(); }
    
    getSymbols() {
        this._symbolService.getSymbols().subscribe(
            symbols => this.symbols = symbols,
            error => this.errorMessage = <any>error
        )
    }
}