import { Component, OnInit } from '@angular/core';
import { NamazDebt } from 'src/app/debts/models/namaz-debt';
import { DebtGeneratorService } from '../../services/debt-generator.service';
import { DebtService } from '../../services/debt.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-debt-add',
    templateUrl: './debt-add.component.html',
    styleUrls: ['./debt-add.component.scss']
})
export class DebtAddComponent implements OnInit {
    public debt: NamazDebt = {
        date: {
            from: null,
            to: null
        }
    } as NamazDebt;

    constructor(
        private debtGenerator: DebtGeneratorService,
        private debtService: DebtService,
        private router: Router,
        private route: ActivatedRoute,
    ) {
    }

    ngOnInit(): void {
    }

    save(): void {
        console.log(this.debt);
        const date = this.debt.date;
        const debt: NamazDebt = this.debtGenerator.generate(date);
        console.log(debt);
        this.debtService.create(debt)
            .subscribe(id => {
                this.router.navigate(
                    ['../', id],
                    { relativeTo: this.route }
                );
            });
    }

}
