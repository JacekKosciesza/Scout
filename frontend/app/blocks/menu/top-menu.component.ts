import {Component, ViewEncapsulation, OnInit} from 'angular2/core';

import {MenuItem} from './menu-item'
import {MenuLevelComponent} from './menu-level.component'

@Component({
    selector: 'top-menu',
    templateUrl: './app/blocks/menu/top-menu.component.html',
    styleUrls: ['./app/blocks/menu/top-menu.component.css'],
    directives: [MenuLevelComponent],
    encapsulation: ViewEncapsulation.None // {None, Emulated, Native}
})
export class TopMenuComponent implements  OnInit {
    public menuItems: MenuItem[];
    
    ngOnInit() {
        this.menuItems = [{label: 'File', active: true, submenuItems: [{label: 'New', active: true, submenuItems: [{label: 'Product'}]}]}];
    }
}