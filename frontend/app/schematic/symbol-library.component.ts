import {Component, OnInit} from 'angular2/core';
import {Observable} from 'rxjs/Rx';
import {Subject} from 'rxjs/Subject';

import {Symbol} from './symbol';
import {SymbolService} from './symbol.service';
import {/*SpinnerService, */ToastService} from '../blocks/blocks';

@Component({
    selector: 'symbol-library',
    templateUrl: 'app/schematic/symbol-library.component.html',
    providers: [SymbolService]
})
export class SymbolLibrary implements OnInit {
    //symbols: Array<Symbol> = [];
    //symbols: Observable<Symbol[]>;
    errorMessage: string;
    
    constructor(private _symbolService: SymbolService, /*private _spinnerService: SpinnerService,*/ private _toastService: ToastService) {        
    }
    
    ngOnInit() { this.getSymbols(); }
    
    getSymbols() {         
        // this._symbolService.getSymbols().subscribe(
        //     symbols => this.symbols = symbols,
        //     error => this.errorMessage = <any>error
        // )
        
        // this._spinnerService.show();
        // this.symbols = this._symbolService.getSymbols()
        //     .catch(e => {
        //         this._toastService.activate(`${e}`);
        //         return Observable.of();
        //     })
        //     .finally(() => { this._spinnerService.hide(); });                
    }
    
     private _searchTermStream = new Subject<string>();
     
     search(term:string) { this._searchTermStream.next(term); }
     
     symbols:Observable<Symbol[]> = this._searchTermStream
        .debounceTime(300)
        .distinctUntilChanged()
        .switchMap((term:string) => this._symbolService.search(term));
}