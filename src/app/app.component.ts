import { Component } from '@angular/core';
import { DebtService } from 'src/app/debts/services/debt.service';
import { Debt } from 'src/app/debts/models/debt';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'Namaz debts';
    debts: Debt[];

    constructor(
        private debtService: DebtService,
    ) {
    }

    exportDebts() {
        this.debtService.getList().subscribe(debts => {
            const str = JSON.stringify(debts);
            this.download('debts.json', str);
        });
    }

    private download(filename, text) {
        const element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
        element.setAttribute('download', filename);

        element.style.display = 'none';
        document.body.appendChild(element);

        element.click();

        document.body.removeChild(element);
    }
}
