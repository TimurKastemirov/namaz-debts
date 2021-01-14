import { TestBed } from '@angular/core/testing';

import { NamazesPerDaySerializerService } from 'src/app/debts/services/serializers/namazes-per-day.service';
import { mockNamazes, mockNamazesDTO } from 'src/app/debts/services/serializers/mock/namazes-per-day';

describe('NamazesPerDaySerializer', () => {
    let service: NamazesPerDaySerializerService;
    const model = mockNamazes[0];
    const dto = mockNamazesDTO[0];

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(NamazesPerDaySerializerService);
    });

    it('should serialize model to DTO', () => {
        expect(service.serialize(model)).toEqual(dto);
    });

    it('should deserialize DTO to model', () => {
        expect(service.deserialize(dto)).toEqual(model);
    });
});
