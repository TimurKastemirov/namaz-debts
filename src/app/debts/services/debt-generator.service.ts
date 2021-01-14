import { Injectable } from '@angular/core';
import { NamazDebt } from 'src/app/debts/models/namaz-debt';
import { NamazesPerDay } from 'src/app/debts/models/namazes-per-day';

@Injectable({
    providedIn: 'root'
})
export class DebtGeneratorService {
    private mscInDay = 86400000;

    private static createNamazesPerDayObj(date: Date): NamazesPerDay {
        return {
            date: new Date(date),
            sabah: false,
            oyle: false,
            ekindi: false,
            akhsham: false,
            yatsi: false,
        };
    }

    public generate(date: { from: Date, to: Date }): NamazDebt {
        const to = date.to.getTime();
        const from = date.from.getTime();
        const dateFromCopy = new Date(date.from);
        const daysCount = ((to - from) / this.mscInDay) + 1;
        const namazes = [];
        let namazesPerDay: NamazesPerDay;

        // move it out to service worker
        for (let i = 0; i < daysCount; i++) {
            namazesPerDay = DebtGeneratorService.createNamazesPerDayObj(dateFromCopy);
            namazes.push(namazesPerDay);
            dateFromCopy.setDate(dateFromCopy.getDate() + 1);
        }

        return {
            date,
            namazes
        };
    }
}
