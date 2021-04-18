import { Component } from '@angular/core';
import { NamazDebt } from 'src/app/debts/models/namaz-debt';
import { DebtApiService } from 'src/app/api/debt.service';
import { NavigationEnd, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ImportDebtsDialogComponent } from 'src/app/dialogs/import-debts-dialog/import-debts-dialog.component';
import { ConfirmDialogComponent } from 'src/app/dialogs/confirm-dialog/confirm-dialog.component';
import { DebtService } from 'src/app/debts/services/debt.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'Namaz debts';
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
        private dialog: MatDialog,
        private router: Router,
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
        const dialogRef = this.dialog.open(ImportDebtsDialogComponent, {
            width: '200px',
            data: {}
        });

        dialogRef.afterClosed().subscribe((result: NamazDebt[]) => {
            if (result) {
                this.dialog.open(ConfirmDialogComponent, {
                    width: '300px',
                    data: {
                        title: 'Are You Sure?',
                        description: 'You want to override all your debts?',
                    }
                })
                    .afterClosed()
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
