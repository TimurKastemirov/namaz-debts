import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NamazDebt } from 'src/app/debts/models/namaz-debt';
import { DebtService } from 'src/app/debts/services/debt.service';
import { NamazesPerDay } from 'src/app/debts/models/namazes-per-day';
import { interval } from 'rxjs';
import { mergeMap, take } from 'rxjs/operators';

@Component({
    selector: 'app-debt-detail',
    templateUrl: './debt-detail.component.html',
    styleUrls: ['./debt-detail.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class DebtDetailComponent implements OnInit {
    private timeout: any;
    private TIME_DELAY_TO_SAVE = 500;

    debt: NamazDebt;
    debtDays: NamazesPerDay[];
    doneDays: NamazesPerDay[];

    constructor(
        private route: ActivatedRoute,
        private debtService: DebtService
    ) {
    }

    ngOnInit(): void {
        this.route.data
            .subscribe((data: { debt: NamazDebt }) => {
                this.debt = data.debt;
                this.calculateDoneAndDebtDays();
            });
    }

    onToggle(namazesPerDay: NamazesPerDay) {
        const namazes = this.debt.namazes;
        const foundIndex = namazes.findIndex(dailyNamazes =>
            (dailyNamazes.date.getTime() - namazesPerDay.date.getTime() === 0));
        this.debt.namazes[foundIndex] = namazesPerDay;
        this.save();
    }

    save() {
        if (this.timeout) {
            clearTimeout(this.timeout);
        }

        this.timeout = setTimeout(() => {
            const observable = this.debtService.update(this.debt);
            observable
                .pipe(
                    take(1),
                    mergeMap(() => interval(1000).pipe(take(1))),
                )
                .subscribe(() => this.calculateDoneAndDebtDays());

            observable
                .pipe(
                    take(1),
                    mergeMap(() => this.debtService.getItem(this.route.snapshot.params.id))
                )
                .subscribe((debt) => this.debt = debt); // for onChanges fire in table component
            this.timeout = null;
        }, this.TIME_DELAY_TO_SAVE);
    }

    calculateDoneAndDebtDays() {
        const namazes = this.debt.namazes;
        this.debtDays = namazes.filter(namazesPerDay =>
            !Object.values(namazesPerDay).every(x => x));
        this.doneDays = namazes.filter(namazesPerDay =>
            Object.values(namazesPerDay).every(x => x));
    }
}
