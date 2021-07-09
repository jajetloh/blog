import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common';
import { MathDirective } from './math.directive'

/**
 * Implementation from:
 * https://medium.com/kongsberg-digital/how-to-render-mathml-in-browser-using-angular-and-mathjax-3-along-with-lazy-loading-83f791911cfd
 */

@NgModule({
    declarations: [
        MathDirective
    ],
    exports: [
        MathDirective
    ],
    imports: [
        CommonModule
    ]
})
export class MathJaxModule {
}
