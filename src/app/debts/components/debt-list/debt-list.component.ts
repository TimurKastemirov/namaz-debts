import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { concatMap, take } from 'rxjs/operators';
import { NamazDebt } from 'src/app/debts/models/namaz-debt';
import { DebtService } from 'src/app/debts/services/debt.service';

@Component({
    selector: 'app-debt-list',
    templateUrl: './debt-list.component.html',
    styleUrls: ['./debt-list.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class DebtListComponent implements OnInit {
    debts: NamazDebt[];

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private debtService: DebtService,
    ) {
    }

    ngOnInit(): void {
        this.route.data
            .subscribe((data: { debts: NamazDebt[] }) => {
                this.debts = data.debts;
            });
    }

    goToDetail(id): void {
        this.router.navigate(['./', id], { relativeTo: this.route });
    }

    onDelete(id): void {
        const areYouSure = confirm('Are you sure, you want to delete?');
        if (areYouSure) {
            this.debtService.delete(id)
                .pipe(
                    take(1),
                    concatMap(() => this.debtService.getList()),
                )
                .subscribe(debts => this.debts = debts);
        }
    }

    addNewDebt(): void {
        this.router.navigate(['./add'], { relativeTo: this.route });
    }
}
