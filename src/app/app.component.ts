import { Component } from '@angular/core';
import { NamazDebt } from 'src/app/debts/models/namaz-debt';
import { DebtApiService } from 'src/app/api/debt.service';
import { NavigationEnd, Router } from '@angular/router';
import { DebtService } from 'src/app/debts/services/debt.service';
import { OpenDialogService } from 'src/app/dialogs/open-dialog.service';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title$: Observable<string> = this.translateService.get('HEADER.TITLE.NAMAZ_DEBTS');
    debts: NamazDebt[];

    private static download(filename, text) {
        const element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
        element.setAttribute('download', filename);
        element.style.display = 'none';

        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    }

    constructor(
        private debtApiService: DebtApiService,
        private debtService: DebtService,
        private openDialogService: OpenDialogService,
        private router: Router,
        private translateService: TranslateService,
    ) {

        this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                setTimeout(() => {
                    window.scrollTo(0, 0);
                }, 100);
            }
        });
    }

    exportDebts() {
        this.debtApiService.getList().subscribe(debts => {
            const str = JSON.stringify(debts);
            AppComponent.download('debts.json', str);
        });
    }

    importDebts() {
        this.openImportDialog();
    }

    private openImportDialog(): void {
        this.openDialogService.openImportDialog()
            .subscribe((result: NamazDebt[]) => {
                if (result) {
                    this.openDialogService.openConfirm(
                        'Are You Sure?',
                        'You want to override all your debts?',
                    )
                        .subscribe((isOk) => {
                            if (isOk) {
                                this.debtService.clearDebts();
                                result.forEach(item => {
                                    this.debtService.create(item).subscribe();
                                });
                                this.router.navigate(['/my-debts']).then();
                            }
                        });
                    return;
                }
                console.log('The dialog was closed');
            });
    }
}
