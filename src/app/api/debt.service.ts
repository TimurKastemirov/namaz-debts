import { Injectable } from '@angular/core';
import { DebtApiStrategy } from './debt-strategy/strategy.interface';
import { LocalStorageStrategy } from './debt-strategy/local-storage';
import { Debt } from '../debts/models/debt';

@Injectable({
    providedIn: 'root'
})
export class DebtApiService {
    private strategy: DebtApiStrategy;

    constructor() {
        this.strategy = new LocalStorageStrategy();
    }

    getItem(id: number) {
        return this.strategy.getItem(id);
    }

    getList() {
        return this.strategy.getList();
    }

    create(item: Debt) {
        return this.strategy.create(item);
    }

    update(item: Debt) {
        return this.strategy.update(item);
    }

    delete(id: number) {
        return this.strategy.delete(id);
    }
}
