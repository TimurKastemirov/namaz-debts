import { Component, OnInit } from '@angular/core';
import { NamazDebt } from 'src/app/debts/models/namaz-debt';
import { DebtGeneratorService } from '../../services/debt-generator.service';
import { DebtService } from '../../services/debt.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { dateFromDateToValidator } from 'src/app/debts/services/validators/date-from-date-to.validator';
import { UnavailableDateRangeValidatorService } from 'src/app/debts/services/validators/unavailable-date-range.validator';
import { OpenDialogService } from 'src/app/dialogs/open-dialog.service';
import { forkJoin, Observable } from 'rxjs';

@Component({
    selector: 'app-debt-add',
    templateUrl: './debt-add.component.html',
    styleUrls: ['./debt-add.component.scss']
})
export class DebtAddComponent implements OnInit {
    unavailableDates: Array<{ from: Date, to: Date }>;
    debtForm = new FormGroup(
        {
            dateFrom: new FormControl(
                '',
                [
                    Validators.required,
                ]
            ),
            dateTo: new FormControl(
                '',
                [
                    Validators.required,
                ]
            ),
        }
    );

    constructor(
        private debtGenerator: DebtGeneratorService,
        private debtService: DebtService,
        private router: Router,
        private route: ActivatedRoute,
        private unavailableDateRangeValidatorService: UnavailableDateRangeValidatorService,
        private dialogService: OpenDialogService,
    ) {
    }

    ngOnInit(): void {
        this.route.data
            .subscribe((data: { debts: NamazDebt[] }) => {
                this.unavailableDates = data.debts.map(debt => debt.date);

                this.debtForm.setValidators([
                    dateFromDateToValidator(),
                    this.unavailableDateRangeValidatorService
                        .getValidator(this.unavailableDates),
                ]);

                this.debtForm.updateValueAndValidity();
            });
    }

    get firstFormError(): { message: string } | null {
        const errors = this.debtForm.errors;
        if (errors) {
            const errorKeys = Object.keys(errors);
            if (errorKeys.length > 0) {
                return errors[errorKeys[0]];
            }
        }

        return null;
    }

    get dateFrom() {
        return this.debtForm.get('dateFrom');
    }

    get dateTo() {
        return this.debtForm.get('dateTo');
    }

    save(): void {
        const { dateFrom, dateTo } = this.debtForm.value;
        if (this.debtGenerator.countDays({ from: dateFrom, to: dateTo }) > 45) {
            this.dialogService.openConfirm(
                'For optimization purposes',
                'To make app run faster, I recommend You to separate your debts with 1 month term long. Would You like Me to do it for You?'
            )
                .subscribe(isOk => {
                    if (isOk) {
                        const debts = this.debtGenerator.generateByMonths({ from: dateFrom, to: dateTo });
                        const subscriptions: Observable<number>[] = [];
                        debts.forEach(debtItem => {
                            subscriptions.push(this.debtService.create(debtItem));
                        });

                        forkJoin(subscriptions).subscribe((ids) => {
                            this.router.navigate(
                                ['../', ids[0]],
                                { relativeTo: this.route }
                            ).then();
                        });

                        return;
                    }

                    const namazDebt: NamazDebt = this.debtGenerator.generate({ from: dateFrom, to: dateTo });
                    console.log(namazDebt);
                    this.debtService.create(namazDebt)
                        .subscribe(id => {
                            this.router.navigate(
                                ['../', id],
                                { relativeTo: this.route }
                            ).then();
                        });
                });
            return;
        }

        const debt: NamazDebt = this.debtGenerator.generate({ from: dateFrom, to: dateTo });
        console.log(debt);
        this.debtService.create(debt)
            .subscribe(id => {
                this.router.navigate(
                    ['../', id],
                    { relativeTo: this.route }
                ).then();
            });
    }
}
