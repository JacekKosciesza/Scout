import { OnInit } from 'angular2/core';
import { Observable } from 'rxjs/Rx';
import { Symbol } from './symbol';
import { SymbolService } from './symbol.service';
import { ToastService } from '../blocks/blocks';
export declare class SymbolLibrary implements OnInit {
    private _symbolService;
    private _toastService;
    errorMessage: string;
    constructor(_symbolService: SymbolService, _toastService: ToastService);
    ngOnInit(): void;
    getSymbols(): void;
    private _searchTermStream;
    search(term: string): void;
    symbols: Observable<Symbol[]>;
}
