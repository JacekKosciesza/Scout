/// <reference path="../node_modules/typescript/lib/lib.es6.d.ts" />

import {bootstrap} from 'angular2/platform/browser';
import {ROUTER_PROVIDERS} from 'angular2/router';

import {ScoutEDA} from './scout-eda';

bootstrap(ScoutEDA, [ROUTER_PROVIDERS]) // providing the router providers at the root makes the Component Router available everywhere in our application.
    .then(success => console.log(`Scout EDA`))
    .catch(error => console.log(error));
