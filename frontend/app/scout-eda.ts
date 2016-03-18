import {Component, provide} from 'angular2/core';
import {XHRBackend, HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router';

import {Logger} from './other/logger.ts'
import {Logger2} from './other/logger2.ts'
import {ScoutSchematic} from './schematic/scout-schematic';
import {ScoutPCB} from './pcb/scout-pcb';
import {CONFIG, MessageService} from './shared/shared';
import {EntityService, ExceptionService, SpinnerComponent, SpinnerService, ToastComponent, ToastService} from './blocks/blocks';

// in-memory web api imports
import {InMemoryBackendService, InMemoryBackendConfig, SEED_DATA} from 'a2-in-memory-web-api/core';
import {InMemorySymbolService} from '../api/in-memory-symbol.service.ts';


@Component({
  selector: 'scout-eda',
  templateUrl: 'app/scout-eda.html',
  styleUrls: ['app/scout-eda.css'],
  directives: [ROUTER_DIRECTIVES, SpinnerComponent, ToastComponent],  
  providers: [
      ROUTER_PROVIDERS,
      HTTP_PROVIDERS,
      provide(XHRBackend, { useClass: InMemoryBackendService }), // in-mem server
      provide(SEED_DATA,  { useClass: InMemorySymbolService }), // in-mem server data
      provide(InMemoryBackendConfig, { useValue: { delay: 600 } }),
      provide(Logger, {useClass: Logger2}),
      EntityService,
      ExceptionService,
      SpinnerService,
      ToastService
  ]
})
@RouteConfig([
    {path: '/schematic', name: 'Schematic', component: ScoutSchematic, useAsDefault: true},
    {path: '/pcb', name: 'PCB', component: ScoutPCB}
])
export class ScoutEDA {
}


