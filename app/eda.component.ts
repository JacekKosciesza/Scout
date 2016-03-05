import { Component } from 'angular2/core';

@Component({
  selector: 'scout-eda',
  template: `
    <h1>{{codename}}</h1>
    <small>Web EDA (Electronic Design Automation)</small>
  `
})
export class ScoutEDA {
  codename = "Scout";
}


