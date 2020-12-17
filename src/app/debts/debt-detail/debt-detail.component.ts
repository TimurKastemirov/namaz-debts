import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Debt } from '../debt';

@Component({
    selector: 'app-debt-detail',
    templateUrl: './debt-detail.component.html',
    styleUrls: ['./debt-detail.component.scss']
})
export class DebtDetailComponent implements OnInit {
    debt: Debt;

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

}
