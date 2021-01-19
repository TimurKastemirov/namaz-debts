import { Component } from '@angular/core';
import { NamazDebt } from 'src/app/debts/models/namaz-debt';
import { DebtApiService } from 'src/app/api/debt.service';

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
    ) {
    }

    exportDebts() {
        this.debtApiService.getList().subscribe(debts => {
            const str = JSON.stringify(debts);
            AppComponent.download('debts.json', str);
        });
    }
}
