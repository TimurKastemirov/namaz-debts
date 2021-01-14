import { Injectable } from '@angular/core';
import { NamazesPerDaySerializerService } from 'src/app/debts/services/serializers/namazes-per-day.service';
import { Serializer } from 'src/app/serializer';
import { NamazDebt } from 'src/app/debts/models/namaz-debt';
import { NamazDebtDTO } from 'src/app/debts/dto/namaz-debt';
import { DateUtils } from 'src/app/date.utils';

@Injectable({
    providedIn: 'root'
})
export class NamazDebtSerializerService implements Serializer<NamazDebt, NamazDebtDTO> {

    constructor(
        private namazesPerDaySerializer: NamazesPerDaySerializerService,
    ) {
    }

    deserialize(dto: NamazDebtDTO): NamazDebt {
        const {
            id, date: dateDTO, namazes: namazesDTO
        } = dto;

        const date = {
            from: DateUtils.strToDate(dateDTO.from),
            to: DateUtils.strToDate(dateDTO.to),
        };
        const model = {
            date,
            namazes: namazesDTO.map(namazPerDayDTO =>
                this.namazesPerDaySerializer.deserialize(namazPerDayDTO)),
        } as NamazDebt;

        if (id) {
            model.id = id;
        }

        return model;
    }

    serialize(model: NamazDebt): NamazDebtDTO {
        const { id, date, namazes } = model;
        const dto = {
            date: {
                from: DateUtils.dateToStr(date.from),
                to: DateUtils.dateToStr(date.to),
            },
            namazes: namazes.map(namazesPerDay =>
                this.namazesPerDaySerializer.serialize(namazesPerDay))
        } as NamazDebtDTO;

        if (id) {
            dto.id = id;
        }

        return dto;
    }
}
