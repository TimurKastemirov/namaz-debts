import { TestBed } from '@angular/core/testing';

import { DebtGeneratorService } from './debt-generator.service';
import { Debt } from './debt';

describe('DebtGeneratorService', () => {
    let sut: DebtGeneratorService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        sut = TestBed.inject(DebtGeneratorService);
    });

    it('should be created', () => {
        expect(sut).toBeTruthy();
    });

    it('should return expected value', () => {
        const expected: Debt = {
            date: {
                from: new Date('2020-12-11'),
                to: new Date('2020-12-15')
            },
            namazes: [
                {
                    sabah: false,
                    oyle: false,
                    ekindi: false,
                    akhsham: false,
                    yatsi: false,
                },
                {
                    sabah: false,
                    oyle: false,
                    ekindi: false,
                    akhsham: false,
                    yatsi: false,
                },
                {
                    sabah: false,
                    oyle: false,
                    ekindi: false,
                    akhsham: false,
                    yatsi: false,
                },
                {
                    sabah: false,
                    oyle: false,
                    ekindi: false,
                    akhsham: false,
                    yatsi: false,
                },
                {
                    sabah: false,
                    oyle: false,
                    ekindi: false,
                    akhsham: false,
                    yatsi: false,
                },
            ]
        };

        expect(sut.generate(expected.date)).toEqual(expected);
    });
});
