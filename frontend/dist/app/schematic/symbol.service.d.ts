/// <reference path="../../../node_modules/rxjs/Observable.d.ts" />
import { Http, Response } from 'angular2/http';
import { Observable } from 'rxjs/Rx';
import { Symbol } from './symbol';
import { ExceptionService, SpinnerService } from '../blocks/blocks';
export declare class SymbolService {
    private _http;
    private _exceptionService;
    private _spinnerService;
    constructor(_http: Http, _exceptionService: ExceptionService, _spinnerService: SpinnerService);
    addSymbol(symbol: Symbol): Observable<Symbol>;
    getSymbols(): Observable<Symbol[]>;
    getSymbol(id: number): Observable<any>;
    search(term: string): Observable<Symbol[]>;
    updateSymbol(symbol: Symbol): Observable<Response>;
    deleteSymbol(symbol: Symbol): Observable<Response>;
    handleError(error: Response): any;
}
