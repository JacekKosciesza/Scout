import { Component } from 'angular2/core';
import { FileProvider } from './other/file-provider';

@Component({
  selector: 'scout-eda',
  templateUrl: 'app/scout-eda.html',
  directives: [FileProvider]
})
export class ScoutEDA {
  codename = "Scout";
}


