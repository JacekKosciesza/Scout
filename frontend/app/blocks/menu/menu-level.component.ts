import {Component, Input} from 'angular2/core';

import {MenuItem} from './menu-item'

@Component({
    selector: 'menu-level',
    templateUrl: './app/blocks/menu/menu-level.component.html',
    directives: [MenuLevelComponent]
})
export class MenuLevelComponent {
    @Input() menuItems: Array<MenuItem>;
    @Input() active: boolean;
    @Input() level: number = 1;
    
    get display(): string {
        return this.active ? 'block' : 'none';
    }
}