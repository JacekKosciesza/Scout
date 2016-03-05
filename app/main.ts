  import { bootstrap } from 'angular2/platform/browser';
  import { ScoutEDA } from './eda.component';

  bootstrap(ScoutEDA)
    .then(success => console.log(`Bootstrap success`))
    .catch(error => console.log(error));

