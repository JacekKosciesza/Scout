import { Component } from 'angular2/core';
import { ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouteConfig } from 'angular2/router';

import { ScoutSchematic } from './schematic/scout-schematic';
import { ScoutPCB } from './pcb/scout-pcb';

@Component({
  selector: 'scout-eda',
  templateUrl: 'app/scout-eda.html',
  styleUrls: ['app/scout-eda.css'],
  directives: [ROUTER_DIRECTIVES],  
  providers: [ROUTER_PROVIDERS],
})
@RouteConfig([
    {path: '/schematic', name: 'Schematic', component: ScoutSchematic, useAsDefault: true},
    {path: '/pcb', name: 'PCB', component: ScoutPCB}
])
export class ScoutEDA {
}


