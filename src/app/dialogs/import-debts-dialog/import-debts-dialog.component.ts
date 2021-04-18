import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { NamazDebt } from 'src/app/debts/models/namaz-debt';
import { NamazDebtSerializerService } from 'src/app/debts/services/serializers/namaz-debt.service';
import { NamazDebtDTO } from 'src/app/debts/dto/namaz-debt';

@Component({
    selector: 'app-import-debts-dialog',
    templateUrl: './import-debts-dialog.component.html',
    styleUrls: ['./import-debts-dialog.component.scss']
})
export class ImportDebtsDialogComponent {
    data!: NamazDebt[];

    constructor(
        private dialogRef: MatDialogRef<ImportDebtsDialogComponent>,
        private serializer: NamazDebtSerializerService,
    ) {
    }

    onNoClick() {
        this.dialogRef.close();
    }

    fileUpload($event: Event) {
        const file = ($event.target as HTMLInputElement).files[0];
        const reader = new FileReader();
        reader.addEventListener('loadend', () => {
            this.data = (JSON.parse(reader.result as string) as NamazDebtDTO[]).map(item => this.serializer.deserialize(item));
        });

        if (file) {
            reader.readAsText(file);
        }
    }
}
