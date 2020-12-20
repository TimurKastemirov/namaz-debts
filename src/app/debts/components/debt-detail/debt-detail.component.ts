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

    constructor(
        private route: ActivatedRoute
    ) {
    }

    ngOnInit(): void {
        this.route.data
            .subscribe((data: { debt: Debt }) => {
                this.debt = data.debt;
            });
    }

    toggleAllDay(index) {
        const namaz = this.debt.namazes[index];
        const isAllSet = Object.values(namaz).every(x => x);
        this.debt.namazes[index] = this.setNamaz(namaz, !isAllSet);
    }

    private setNamaz(namazesPerDay: Namaz, isDone: boolean): Namaz {
        for (const [key] of Object.entries(namazesPerDay)) {
            namazesPerDay[key] = isDone;
        }

        return namazesPerDay;
    }

}
