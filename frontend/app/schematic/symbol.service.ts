import {Injectable} from 'angular2/core';
import {Http, Response, Headers, RequestOptions} from 'angular2/http';
import {Observable} from 'rxjs/Rx';

import {Symbol} from './symbol';
import {CONFIG, MessageService} from '../shared/shared';
import { ExceptionService, SpinnerService } from '../blocks/blocks';

let symbolsUrl = CONFIG.baseUrls.symbols;

@Injectable()
export class SymbolService {
    constructor(
        private _http: Http,
        private _exceptionService: ExceptionService,
        //private _messageService: MessageService,
        private _spinnerService: SpinnerService
    ) {  }    
    
    // Create
    addSymbol(symbol: Symbol): Observable<Symbol> {
        let body = JSON.stringify(symbol); // TODO: we may be able to skip the stringify step in the near future
        let headers = new Headers({ 'Content-Type': 'application/json' }); // TODO: isn't it default?
        let options = new RequestOptions({ headers: headers });
        this._spinnerService.show();
        return this._http
            .post(`${symbolsUrl}`, body, options)
            .map(res => res.json().data)
            .catch(this._exceptionService.catchBadResponse)
            .finally(() => this._spinnerService.hide());
    }
    
    // Read
    getSymbols() {
        return this._http.get(symbolsUrl)
            .map((response: Response) => <Symbol[]>response.json().data)
            .do(data => console.log(data)) // TODO: comment it out before going to production!
            .catch(this.handleError);
    }
    
    // Read
    getSymbol(id: number) {
        this._spinnerService.show();
        return this._http.get(`${symbolsUrl}/${id}`)
            .map((response: Response) => response.json().data)
            .catch(this._exceptionService.catchBadResponse)
            .finally(() => this._spinnerService.hide());
    }
    
    search(term: string) {
        // TODO: implement
        return this.getSymbols();
    }
    
    // Update
    updateSymbol(symbol: Symbol) {
        let body = JSON.stringify(symbol);
        this._spinnerService.show();
        return this._http
            .put(`${symbolsUrl}/${symbol.id}`, body)
            .catch(this._exceptionService.catchBadResponse)
            .finally(() => this._spinnerService.hide());
    }
    
    // Delete
    deleteSymbol(symbol: Symbol) {
        this._spinnerService.show();
        return this._http
            .delete(`${symbolsUrl}/${symbol.id}`)
            .catch(this._exceptionService.catchBadResponse)
            .finally(() => this._spinnerService.hide());
  }
    
    handleError(error: Response) {
        // TODO: send the error to some remote logging infrastructure instead of just logging it to the console        
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}