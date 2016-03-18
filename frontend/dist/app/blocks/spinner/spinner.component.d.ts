import { OnDestroy, OnInit } from 'angular2/core';
import { SpinnerService } from './spinner.service';
export declare class SpinnerComponent implements OnDestroy, OnInit {
    private _spinnerService;
    visible: boolean;
    private _spinnerStateChanged;
    constructor(_spinnerService: SpinnerService);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
