import { Component, Inject, Input, OnInit } from '@angular/core'
import { FaIcons, FaInjectionToken } from "../fa-icons"

@Component({
    selector: 'app-collapsable',
    templateUrl: './collapsable.component.html',
    styleUrls: ['./collapsable.component.scss']
})
export class CollapsableComponent implements OnInit {

    @Input()
    isOpen: boolean = false

    constructor(@Inject(FaInjectionToken) public fa: FaIcons) {
    }

    ngOnInit(): void {
    }

}
