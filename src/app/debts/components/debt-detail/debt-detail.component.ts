import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Debt } from 'src/app/debts/models/debt';
import { Namaz } from 'src/app/debts/models/namaz';
import { DebtService } from 'src/app/debts/services/debt.service';

@Component({
    selector: 'app-debt-detail',
    templateUrl: './debt-detail.component.html',
    styleUrls: ['./debt-detail.component.scss']
})
export class DebtDetailComponent implements OnInit {
    private timeout: any;
    private TIME_IN_MS = 500;

    debt: Debt;
    areAllNamazesPerDayDoneList: boolean[];

    constructor(
        private route: ActivatedRoute,
        private debtService: DebtService
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

    toggleAllNamazes(index) {
        const namazesPerDay = this.debt.namazes[index];
        const areAllDone = this.areAllNamazesPerDayDone(namazesPerDay);
        this.debt.namazes[index] = this.setNamaz(namazesPerDay, !areAllDone);
        this.save();
    }

    toggleOneNamaz(index) {
        setTimeout(() => {
            const namazesPerDay = this.debt.namazes[index];
            this.areAllNamazesPerDayDoneList[index] = this.areAllNamazesPerDayDone(namazesPerDay);
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
