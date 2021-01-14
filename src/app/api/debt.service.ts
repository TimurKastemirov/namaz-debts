import { Injectable } from '@angular/core';
import { DebtApiStrategy } from './debt-strategy/strategy.interface';
import { LocalStorageStrategy } from './debt-strategy/local-storage';
import { NamazDebt } from 'src/app/debts/models/namaz-debt';

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

    create(item: NamazDebt) {
        return this.strategy.create(item);
    }

    update(item: NamazDebt) {
        return this.strategy.update(item);
    }

    delete(id: number) {
        return this.strategy.delete(id);
    }
}
