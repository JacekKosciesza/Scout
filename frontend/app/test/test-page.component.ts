import {Component} from 'angular2/core';

import {TopMenuComponent} from '../blocks/menu/top-menu.component'
import {MdButton} from '@angular2-material/button';
import {MdCheckbox} from '@angular2-material/checkbox';
import {MdCard} from '@angular2-material/card';
import {MdProgressCircle, MdSpinner} from '@angular2-material/progress-circle';
import {MdRadioGroup, MdRadioButton} from '@angular2-material/radio';
import {MdRadioDispatcher} from '@angular2-material/radio/radio_dispatcher';
import {MdSidenavLayout, MdSidenav} from '@angular2-material/sidenav';

@Component({
    selector: 'test-page',
    templateUrl: '/app/test/test-page.component.html',
    providers: [MdRadioDispatcher],
    directives: [TopMenuComponent, MdButton, MdCheckbox, MdCard, MdProgressCircle, MdSpinner, MdRadioGroup, MdRadioButton, MdSidenavLayout, MdSidenav]
})
export class TestPageComponent {
    
}