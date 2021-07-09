import { Directive, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core'
import { Subject } from "rxjs"
import { MathJaxService } from "./mathjax.service"
import { take, takeUntil } from "rxjs/operators"

@Directive({
    selector: '[appMath]'
})
export class MathDirective implements OnInit, OnChanges, OnDestroy {

    @Input() appMath: string = ''
    private alive$ = new Subject<boolean>()
    private readonly el?: HTMLElement

    constructor(private mathJaxService: MathJaxService, private elementRef: ElementRef) {
        this.el = elementRef.nativeElement
    }

    ngOnInit() {
        this.render()
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes && changes['appMath'] && changes['appMath'].currentValue) {
            this.render()
        }
    }

    private render() {
        this.mathJaxService.ready().pipe(
            take(1),
            takeUntil(this.alive$)
        ).subscribe(() => this.mathJaxService.render(this.el!, this.appMath))
    }

    ngOnDestroy() {
        this.alive$.next(false)
    }

}
