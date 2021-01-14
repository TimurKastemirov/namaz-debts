import { DebtApiStrategy } from './strategy.interface';
import { Observable, of } from 'rxjs';
import { NamazDebt } from 'src/app/debts/models/namaz-debt';

export class LocalStorageStrategy implements DebtApiStrategy {
    storage: any;

    constructor() {
        this.storage = window.localStorage;
        if (!this.storage.getItem('debts')) {
            this.storage.setItem('debts', JSON.stringify([]));
        }
    }

    get debts(): NamazDebt[] {
        return JSON.parse(this.storage.getItem('debts'));
    }

    set debts(debts) {
        this.storage.setItem('debts', JSON.stringify(debts));
    }

    create(item: NamazDebt): Observable<number> {
        const debts = this.debts;
        item.id = this.generateId();
        debts.push(item);
        this.debts = debts;
        return of(item.id);
    }

    delete(id: number): Observable<null> {
        const debts = this.debts;
        this.debts = debts.filter(el => el.id !== id);
        return of(null);
    }

    getItem(id: number): Observable<NamazDebt> {
        const debt = this.debts.find(el => el.id === id);
        return of(debt);
    }

    getList(): Observable<NamazDebt[]> {
        return of(this.debts);
    }

    update(item: NamazDebt): Observable<null> {
        const debts = this.debts;
        const index = debts.findIndex(el => el.id === item.id);
        debts.splice(index, 1, item);
        this.debts = debts;
        return of(null);
    }

    private generateId(): number {
        const debts = this.debts;
        return debts.length === 0
            ? 1
            : debts[debts.length - 1].id + 1;
    }
}
