import { faCaretDown, faCaretUp, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import { Injectable } from "@angular/core"

export const FaInjectionToken = 'fa-injection-token'

@Injectable()
export class FaIcons {
    faCaretDown = faCaretDown
    faCaretUp = faCaretUp
    faPlus = faPlus
    faMinus = faMinus
}
