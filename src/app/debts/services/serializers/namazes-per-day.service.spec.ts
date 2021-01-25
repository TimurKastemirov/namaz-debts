import { TestBed } from '@angular/core/testing';

import { NamazesPerDaySerializerService } from 'src/app/debts/services/serializers/namazes-per-day.service';
import { mockNamazes, mockNamazesDTO } from 'src/app/debts/services/serializers/mock/namazes-per-day';

describe('NamazesPerDaySerializer', () => {
    let service: NamazesPerDaySerializerService;
    const models = mockNamazes;
    const dtos = mockNamazesDTO;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(NamazesPerDaySerializerService);
    });

    it('should serialize model to DTO', () => {
        models.forEach((model, index) => {
            expect(service.serialize(model)).toEqual(dtos[index]);
        });
    });

    it('should deserialize DTO to model', () => {
        dtos.forEach((dto, index) => {
            expect(service.deserialize(dto)).toEqual(models[index]);
        });
    });
});
