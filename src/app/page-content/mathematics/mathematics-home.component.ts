import { Component, OnInit } from '@angular/core'

@Component({
    selector: 'app-mathematics-home',
    templateUrl: './mathematics-home.component.html',
    styleUrls: ['./mathematics-home.component.scss']
})
export class MathematicsHomeComponent implements OnInit {

    mathml = ''
    mathExpression1 = '$$\\begin{aligned}(x-1)(x-2)=0\\end{aligned}$$'

    constructor() {
    }

    ngOnInit(): void {
    }

}
