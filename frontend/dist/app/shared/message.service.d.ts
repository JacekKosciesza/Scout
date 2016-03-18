import { Http } from 'angular2/http';
import { Observable } from 'rxjs/Rx';
import { ToastService } from '../blocks/toast/toast.service';
export interface IResetMessage {
    message: string;
}
export declare class MessageService {
    private _http;
    private _toastService;
    private _subject;
    state: Observable<IResetMessage>;
    constructor(_http: Http, _toastService: ToastService);
}
