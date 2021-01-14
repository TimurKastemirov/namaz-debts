import { Serializer } from 'src/app/serializer';
import { NamazesPerDay } from 'src/app/debts/models/namazes-per-day';
import { NamazesPerDayDTO } from 'src/app/debts/dto/namazes-per-day';
import { Injectable } from '@angular/core';
import { DateUtils } from 'src/app/date.utils';

@Injectable({
    providedIn: 'root'
})
export class NamazesPerDaySerializerService implements Serializer<NamazesPerDay, NamazesPerDayDTO> {
    deserialize(dto: NamazesPerDayDTO): NamazesPerDay {
        const model = {} as NamazesPerDay;
        for (const [key, val] of Object.entries(dto)) {
            model[key] = val;
        }

        model.date = DateUtils.strToDate(dto.date);
        return model;
    }

    serialize(model: NamazesPerDay): NamazesPerDayDTO {
        const dto = {} as NamazesPerDayDTO;
        for (const [key, val] of Object.entries(model)) {
            dto[key] = val;
        }

        dto.date = DateUtils.dateToStr(model.date);
        return dto;
    }
}
