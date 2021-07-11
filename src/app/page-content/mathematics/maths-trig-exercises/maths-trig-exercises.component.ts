import { Component, Inject, OnInit, QueryList, ViewChildren } from '@angular/core'
import { FaIcons, FaInjectionToken } from "../../../utilities/fa-icons"
import { CollapsableComponent } from "../../../utilities/collapsable/collapsable.component"

@Component({
    selector: 'app-maths-trig-exercises',
    templateUrl: './maths-trig-exercises.component.html',
    styleUrls: ['./maths-trig-exercises.component.scss']
})
export class MathsTrigExercisesComponent implements OnInit {

    latexDoubleAngles1 = '\\begin{align*} \\sin\\left(\\theta\\pm\\phi\\right) &= \\sin\\theta\\cos\\phi\\pm\\cos\\theta\\sin\\phi \\\\ \\cos\\left(\\theta\\pm\\phi\\right) &= \\cos\\theta\\cos\\phi\\mp\\sin\\theta\\sin\\phi \\\\ \\tan\\left(\\theta\\pm\\phi\\right) &= \\frac{\\tan\\theta\\pm\\tan\\phi}{1\\mp\\tan\\theta\\tan\\phi} \\end{align*}'
    latexDoubleAngles2 = '\\begin{align*} \\sin2\\theta &= \\sin\\theta\\cos\\theta+\\cos\\theta\\sin\\theta \\\\ &= 2\\sin\\theta\\cos\\theta \\\\ \\cos2\\theta &= \\cos\\theta\\cos\\theta - \\sin\\theta\\sin\\theta \\\\ &= \\cos^2 \\theta - \\sin^2 \\theta \\\\ \\tan2\\theta &= \\frac{\\tan\\theta+\\tan\\theta}{1-\\tan\\theta\\tan\\theta} \\\\ &= \\frac{2\\tan\\theta}{1-\\tan^2\\theta} \\end{align*}'

    @ViewChildren(CollapsableComponent) sections!: QueryList<CollapsableComponent>

    constructor(@Inject(FaInjectionToken) public fa: FaIcons) {
    }

    ngOnInit() {
    }

    openAll() {
        this.sections.forEach(component => component.isOpen = true)
    }

    closeAll() {
        this.sections.forEach(component => component.isOpen = false)
    }

}
