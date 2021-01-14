import { TestBed } from '@angular/core/testing';

import { NamazDebtSerializerService } from './namaz-debt.service';
import { mockNamazDebt, mockNamazDebtDTO } from 'src/app/debts/services/serializers/mock/namaz-debt';
import cloneDeep from 'lodash/cloneDeep';

describe('NamazDebtSerializerService', () => {
    let service: NamazDebtSerializerService;
    const model = cloneDeep(mockNamazDebt);
    const dto = cloneDeep(mockNamazDebtDTO);

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(NamazDebtSerializerService);
    });

    it('should serialize model to dto', () => {
        expect(service.serialize(model)).toEqual(dto);
    });

    it('should deserialize dto to model', () => {
        expect(service.deserialize(dto)).toEqual(model);
    });
});
