import { Component } from 'angular2/core';
import { FileProvider } from './other/file-provider';
import { SchematicCanvas } from './schematic/schematic-canvas';

@Component({
  selector: 'scout-eda',
  templateUrl: 'app/scout-eda.html',
  directives: [FileProvider, SchematicCanvas]
})
export class ScoutEDA {
  codename = "Scout";
}


