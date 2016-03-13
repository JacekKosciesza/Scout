import { Injectable } from 'angular2/core';
import { Http, Response } from 'angular2/http';
import { Observable } from 'rxjs/Rx';

import { Symbol } from './symbol';

@Injectable()
export class SymbolService {
    constructor(private _http: Http) {
    }    
    
    getSymbols() {
        return this._http.get('app/api/symbols.json')
            .map((response: Response) => <Symbol[]>response.json().data)
            .do(data => console.log(data))
            .catch(this.handleError);
    }
    
    handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}