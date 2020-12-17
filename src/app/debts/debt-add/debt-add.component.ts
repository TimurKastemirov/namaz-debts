import { Component, OnInit } from '@angular/core';
import { Debt } from '../debt';
import { DebtGeneratorService } from '../debt-generator.service';
import { DebtService } from '../debt.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-debt-add',
    templateUrl: './debt-add.component.html',
    styleUrls: ['./debt-add.component.scss']
})
export class DebtAddComponent implements OnInit {
    public debt: Debt = {
        date: {
            from: null,
            to: null
        }
    } as Debt;

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
        const debt: Debt = this.debtGenerator.generate(date);
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
