import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ImportDebtsDialogComponent } from 'src/app/dialogs/import-debts-dialog/import-debts-dialog.component';
import { Observable } from 'rxjs';
import { ConfirmDialogComponent } from 'src/app/dialogs/confirm-dialog/confirm-dialog.component';
import { NamazDebt } from 'src/app/debts/models/namaz-debt';

@Injectable({ providedIn: 'root' })
export class OpenDialogService {
    constructor(
        private dialog: MatDialog,
    ) {
    }

    openAlert(title: string, description: string): Observable<any> {
        return this.dialog.open(ConfirmDialogComponent, {
            width: '300px',
            data: {
                title,
                description,
            }
        })
            .afterClosed();
    }

    openConfirm(title: string, description: string): Observable<boolean | undefined> {
        return this.dialog.open(ConfirmDialogComponent, {
            width: '300px',
            data: {
                title,
                description,
            }
        })
            .afterClosed();
    }

    openImportDialog(): Observable<NamazDebt[]> {
        return this.dialog.open(ImportDebtsDialogComponent, {
            width: '200px',
            data: {}
        }).afterClosed();
    }
}
