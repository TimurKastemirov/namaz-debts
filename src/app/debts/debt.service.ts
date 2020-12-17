import { Injectable } from '@angular/core';
import { DebtApiService } from '../api/debt.service';
import { Debt } from './debt';

@Injectable({
    providedIn: 'root'
})
export class DebtService {

    constructor(
        private debtApiService: DebtApiService,
    ) {
    }

    getItem(id: number) {
        return this.debtApiService.getItem(id);
    }

    getList() {
        return this.debtApiService.getList();
    }

    create(item: Debt) {
        return this.debtApiService.create(item);
    }

    update(item: Debt) {
        return this.debtApiService.update(item);
    }

    delete(id: number) {
        return this.debtApiService.delete(id);
    }
}
