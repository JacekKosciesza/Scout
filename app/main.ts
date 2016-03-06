  import { bootstrap } from 'angular2/platform/browser';
  import { ScoutEDA } from './scout-eda';

  bootstrap(ScoutEDA)
    .then(success => console.log(`Scout EDA`))
    .catch(error => console.log(error));

