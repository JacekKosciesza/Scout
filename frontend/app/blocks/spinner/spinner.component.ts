import {Component, OnDestroy, OnInit} from 'angular2/core';
import { Subscription } from 'rxjs/Rx';

import { ISpinnerState, SpinnerService } from './spinner.service';

const ACTIVE_CLASS = 'is-active';

@Component({
  selector: 'loading-spinner',
  template: `<div class="spinner" [class.is-active]="visible">Loading...</div>`,  
  styleUrls: ['app/blocks/spinner/spinner.component.css']
})

export class SpinnerComponent implements OnDestroy, OnInit {
  visible = false;

  private _spinnerStateChanged: Subscription;

  constructor(private _spinnerService: SpinnerService) { }

  ngOnInit() {
    this._spinnerStateChanged = this._spinnerService.spinnerState
      .subscribe((state: ISpinnerState) => this.visible = state.show);
  }

  ngOnDestroy() {
    this._spinnerStateChanged.unsubscribe();
  }
}