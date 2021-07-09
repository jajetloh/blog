import { TestBed } from '@angular/core/testing'

import { MathJaxService } from './mathjax.service'

describe('MathJaxService', () => {
    let service: MathJaxService

    beforeEach(() => {
        TestBed.configureTestingModule({})
        service = TestBed.inject(MathJaxService)
    })

    it('should be created', () => {
        expect(service).toBeTruthy()
    })
})
