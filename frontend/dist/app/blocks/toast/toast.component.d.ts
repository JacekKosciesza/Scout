import { OnInit } from 'angular2/core';
import { ToastService } from './toast.service';
export declare class ToastComponent implements OnInit {
    private _defaults;
    title: string;
    message: string;
    private _toastElement;
    constructor(toastService: ToastService);
    activate(message?: string, title?: string): void;
    ngOnInit(): void;
    private _show();
    private _hide();
}
