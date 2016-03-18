import { Observable } from 'rxjs/Rx';
import { ToastService } from './toast/toast.service';
export declare class ExceptionService {
    private _toastService;
    constructor(_toastService: ToastService);
    catchBadResponse: (errorResponse: any) => Observable<any>;
}
