import { Component } from 'angular2/core';

import { PCBSurface } from './pcb-surface';

@Component({
    selector: 'scout-pcb',
    template: `
        <h1>PCB</h1>
        <pcb-surface></pcb-surface>`,
    directives: [PCBSurface]
})
export class ScoutPCB {
    
}