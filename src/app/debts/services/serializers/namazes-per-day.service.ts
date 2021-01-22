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
        const namazNames = ['sabah', 'oyle', 'ekindi', 'akhsham', 'yatsi'];
        const namazes = dto.namazes.toString(2)
            .split('')
            .map(namazBinary => Boolean(Number(namazBinary)));

        namazNames.forEach((name, index) => {
            model[name] = namazes[index];
        });

        model.date = DateUtils.strToDate(dto.date);
        return model;
    }

    serialize(model: NamazesPerDay): NamazesPerDayDTO {
        const dto = {} as NamazesPerDayDTO;
        const { date, sabah, oyle, ekindi, akhsham, yatsi } = model;
        const namazesBinary = [sabah, oyle, ekindi, akhsham, yatsi]
            .map(item => Number(item))
            .join('');

        dto.date = DateUtils.dateToStr(date);
        dto.namazes = parseInt(namazesBinary, 2);
        return dto;
    }
}
