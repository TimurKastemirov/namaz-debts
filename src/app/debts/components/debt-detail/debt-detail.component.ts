import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NamazDebt } from 'src/app/debts/models/namaz-debt';
import { NamazesPerDay } from 'src/app/debts/models/namazes-per-day';
import { DebtService } from 'src/app/debts/services/debt.service';

@Component({
    selector: 'app-debt-detail',
    templateUrl: './debt-detail.component.html',
    styleUrls: ['./debt-detail.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class DebtDetailComponent implements OnInit {
    private timeout: any;
    private TIME_IN_MS = 500;

    debt: NamazDebt;
    areAllNamazesPerDayDoneList: boolean[];

    private static setNamaz(namazesPerDay: NamazesPerDay, isDone: boolean): NamazesPerDay {
        for (const [key] of Object.entries(namazesPerDay)) {
            namazesPerDay[key] = isDone;
        }

        return namazesPerDay;
    }

    private static areAllNamazesPerDayDone(namazesPerDay: NamazesPerDay): boolean {
        return Object.values(namazesPerDay).every(x => x);
    }

    constructor(
        private route: ActivatedRoute,
        private debtService: DebtService
    ) {
    }

    ngOnInit(): void {
        this.route.data
            .subscribe((data: { debt: NamazDebt }) => {
                this.debt = data.debt;
                this.areAllNamazesPerDayDoneList = this.debt
                    .namazes
                    .map(namazesPerDay => DebtDetailComponent.areAllNamazesPerDayDone(namazesPerDay));
            });
    }

    toggleAllNamazes(index) {
        const namazesPerDay = this.debt.namazes[index];
        const areAllDone = DebtDetailComponent.areAllNamazesPerDayDone(namazesPerDay);
        this.debt.namazes[index] = DebtDetailComponent.setNamaz(namazesPerDay, !areAllDone);
        this.save();
    }

    toggleOneNamaz(index) {
        setTimeout(() => {
            const namazesPerDay = this.debt.namazes[index];
            this.areAllNamazesPerDayDoneList[index] = DebtDetailComponent.areAllNamazesPerDayDone(namazesPerDay);
            this.save();
        }, 0); // use setTimeout because ngModel updates after method call
    }

    save() {
        if (this.timeout) {
            clearTimeout(this.timeout);
        }

        this.timeout = setTimeout(() => {
            this.debtService.update(this.debt);
            this.timeout = null;
        }, this.TIME_IN_MS);
    }
}
