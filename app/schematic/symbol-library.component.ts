import { Component, OnInit } from 'angular2/core';
import { Observable } from 'rxjs/Rx';

import { Symbol } from './symbol';
import { SymbolService } from './symbol.service';

@Component({
    selector: 'symbol-library',
    templateUrl: 'app/schematic/symbol-library.component.html',
    providers: [SymbolService]
})
export class SymbolLibrary implements OnInit {
    //symbols: Array<Symbol> = [];
    symbols: Observable<Symbol> = [];
    errorMessage: string;
    
    constructor(private _symbolService: SymbolService) {        
    }
    
    ngOnInit() { this.getSymbols(); }
    
    getSymbols() {         
        // this._symbolService.getSymbols().subscribe(
        //     symbols => this.symbols = symbols,
        //     error => this.errorMessage = <any>error
        // )
        this.symbols = this._symbolService.getSymbols();
    }
}