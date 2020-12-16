import { Injectable } from '@angular/core';
import { Debt } from './debt';
import { Namaz } from './namaz';

@Injectable({
    providedIn: 'root'
})
export class DebtGeneratorService {
    private mscInDay = 86400000;

    public generate(dates: { from: Date, to: Date }): Debt {
        const to = dates.to.getTime();
        const from = dates.from.getTime();
        const daysCount = (to - from) / this.mscInDay;
        const namazes = [];
        const namaz: Namaz = {
            sabah: false,
            oyle: false,
            ekindi: false,
            akhsham: false,
            yatsi: false,
        };
        for (let i = 0; i < daysCount; i++) {
            namazes.push(namaz);
        }

        return {
            date: dates,
            namazes
        };
    }
}
