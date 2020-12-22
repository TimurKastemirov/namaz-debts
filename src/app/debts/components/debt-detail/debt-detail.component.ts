import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Debt } from 'src/app/debts/models/debt';
import { Namaz } from 'src/app/debts/models/namaz';

@Component({
    selector: 'app-debt-detail',
    templateUrl: './debt-detail.component.html',
    styleUrls: ['./debt-detail.component.scss']
})
export class DebtDetailComponent implements OnInit {
    debt: Debt;
    displayedColumns = ['all', 'sabah', 'oyle', 'ekindi', 'akhsham', 'yatsi'];
    areAllNamazesPerDayDoneList: boolean[];

    constructor(
        private route: ActivatedRoute
    ) {
    }

    ngOnInit(): void {
        this.route.data
            .subscribe((data: { debt: Debt }) => {
                this.debt = data.debt;
                this.areAllNamazesPerDayDoneList = this.debt
                    .namazes
                    .map(namazesPerDay => this.areAllNamazesPerDayDone(namazesPerDay));
            });
    }

    toggleAllDay(index) {
        const namazesPerDay = this.debt.namazes[index];
        const areAllDone = this.areAllNamazesPerDayDone(namazesPerDay);
        this.debt.namazes[index] = this.setNamaz(namazesPerDay, !areAllDone);
    }

    toggleOneNamaz(index) {
        setTimeout(() => {
            const namazesPerDay = this.debt.namazes[index];
            this.areAllNamazesPerDayDoneList[index] = this.areAllNamazesPerDayDone(namazesPerDay);
        }, 0); // use setTimeout because ngModel updates after method call
    }

    private setNamaz(namazesPerDay: Namaz, isDone: boolean): Namaz {
        for (const [key] of Object.entries(namazesPerDay)) {
            namazesPerDay[key] = isDone;
        }

        return namazesPerDay;
    }

    private areAllNamazesPerDayDone(namazesPerDay: Namaz): boolean {
        return Object.values(namazesPerDay).every(x => x);
    }
}
