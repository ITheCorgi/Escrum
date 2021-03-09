import { Component } from '@angular/core';
import { faBell } from '@fortawesome/free-regular-svg-icons/faBell';

@Component({
    selector: 'escrum-toolbar',    
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
    faBell = faBell;
    constructor() {}
}