import { Injectable } from '@angular/core'
import { Observable, ReplaySubject, Subject } from "rxjs"

@Injectable({
    providedIn: 'root'
})
export class MathJaxService {

    private signal: Subject<boolean>
    private mathJax: MathJaxConfig = {
        source: "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js",
        id: 'MathJaxScript',
    }

    constructor() {
        this.signal = new ReplaySubject<boolean>()
        this.registerMathJaxAsync(this.mathJax)
            .then(() => this.signal.next())
            .catch(error => {
                console.log('Error in loading script from cdn.')
            })
    }

    private async registerMathJaxAsync(config: MathJaxConfig): Promise<any> {
        return new Promise((resolve, reject) => {
            const script: HTMLScriptElement = document.createElement('script')
            script.id = config.id
            script.type = 'text/javascript'
            script.src = config.source
            script.crossOrigin = 'anonymous'
            script.async = true
            script.onload = event => resolve(event)
            script.onerror = error => reject(error)
            document.head.appendChild(script)
        })
    }

    ready(): Observable<boolean> {
        return this.signal
    }

    render(element: HTMLElement, math: string) {
        window.MathJax.startup.promise.then(() => {
            element.innerHTML = math
            window.MathJax.typesetPromise()
        })
    }
}

declare global {
    interface Window {
        MathJax: {
            typesetPromise: () => void
            startup: {
                promise: Promise<any>
            }
        }
    }
}

interface MathJaxConfig {
    source: string
    integrity?: string
    id: string
}
