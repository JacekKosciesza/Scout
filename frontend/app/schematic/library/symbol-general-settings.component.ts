import {Component, Optional, ViewEncapsulation} from 'angular2/core';
import {NgForm} from 'angular2/common';
import {SymbolSettings} from './symbol-settings';
import {Logger} from '../../other/logger.ts'

@Component({
  selector: 'symbol-general-settings',
  templateUrl: './app/schematic/library/symbol-general-settings.component.html',
  styleUrls: ['./app/schematic/library/symbol-general-settings.component.css'],
  encapsulation: ViewEncapsulation.None // {None, Emulated, Native}
})
export class SymbolGeneralSettings {       
    active = true;
    submitted: boolean = false;
    model = new SymbolSettings('STM32F020', 'U', 1, true, 40);
    pinTextPositionOffsets = [10, 20, 30, 40];
    
    constructor(@Optional() private _logger: Logger) {      
        // No logger? Make one!
        if (!this._logger) {
            this._logger = {
                log: (msg:string)=> this._logger.logs.push(msg),
                logs: []
            }
        }  
    }
    
    onSubmit() {
        this.submitted = true;
        this._logger.log('onSubmit');
        console.log(this.model);
    }
    
    newSymbol() {
        this.model = new SymbolSettings('', 'U', 1, true, 40);
        
        // This is a temporary workaround while we await a proper form reset feature.
        this.active = false;
        setTimeout(()=> this.active=true, 0);
    }
    
    // TOD: remove this when we're done
    get diagnostic() { return JSON.stringify(this.model); }
}