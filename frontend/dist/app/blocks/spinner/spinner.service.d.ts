import { Observable } from 'rxjs/Rx';
export interface ISpinnerState {
    show: boolean;
}
export declare class SpinnerService {
    private _spinnerSubject;
    spinnerState: Observable<ISpinnerState>;
    show(): void;
    hide(): void;
}
