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

    public generate(dates: { from: Date, to: Date }): NamazDebt {
        const daysCount = this.countDays(dates);
        const dateFromCopy = new Date(dates.from);
        const namazes = [];
        let namazesPerDay: NamazesPerDay;

        // move it out to service worker
        for (let i = 0; i < daysCount; i++) {
            namazesPerDay = DebtGeneratorService.createNamazesPerDayObj(dateFromCopy);
            namazes.push(namazesPerDay);
            dateFromCopy.setDate(dateFromCopy.getDate() + 1);
        }

        return {
            date: dates,
            namazes
        };
    }

    public generateByMonths(dates: { from: Date, to: Date }): NamazDebt[] {
        const daysCount = this.countDays(dates);

        const debts: NamazDebt[] = [];
        let namazes: NamazesPerDay[] = [];
        let namazesPerDay: NamazesPerDay;

        let currentDate = new Date(dates.from);
        let nextDate: Date;
        let startDateForDebts: Date = new Date(dates.from);

        for (let i = 0; i < daysCount; i++) {
            nextDate = new Date(currentDate);
            nextDate.setDate(currentDate.getDate() + 1);

            namazesPerDay = DebtGeneratorService.createNamazesPerDayObj(currentDate);
            namazes.push(namazesPerDay);

            if (nextDate.getMonth() !== currentDate.getMonth()) {
                debts.push({
                    date: {
                        from: startDateForDebts,
                        to: currentDate,
                    },
                    namazes,
                });

                namazes = [];
                startDateForDebts = new Date(nextDate);
            }

            currentDate = new Date(nextDate);
        }

        return debts;
    }

    public countDays(dates: { from: Date, to: Date }): number {
        const to = dates.to.getTime();
        const from = dates.from.getTime();
        return ((to - from) / this.mscInDay) + 1;
    }
}
