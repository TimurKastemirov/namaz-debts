import { TestBed } from '@angular/core/testing';

import { DebtGeneratorService } from './debt-generator.service';
import { NamazDebt } from 'src/app/debts/models/namaz-debt';
import { mockNamazDebt } from 'src/app/debts/services/serializers/mock/namaz-debt';

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
        const expected: NamazDebt = mockNamazDebt;
        expected.namazes = expected.namazes.map(namazesPerDay => {
            return {
                date: namazesPerDay.date,
                sabah: false,
                oyle: false,
                ekindi: false,
                akhsham: false,
                yatsi: false,
            };
        });

        expect(sut.generate(expected.date)).toEqual(expected);
    });
});
