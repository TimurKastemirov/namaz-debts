import { DebtApiStrategy } from './strategy.interface';
import { Observable, of } from 'rxjs';
import { Debt } from '../../debts/debt';

export class LocalStorageStrategy implements DebtApiStrategy {
  storage: any;

  constructor() {
    this.storage = window.localStorage;
    if (!this.storage.getItem('debts')) {
      this.storage.setItem('debts', JSON.stringify([]));
    }
  }

  get debts(): Debt[] {
    return JSON.parse(this.storage.getItem('debts'));
  }

  set debts(debts) {
    this.storage.setItem('debts', JSON.stringify(debts));
  }

  create(item: Debt): Observable<null> {
    const debts = this.debts;
    debts.push(item);
    this.debts = debts;
    return of(null);
  }

  delete(id: number): Observable<null> {
    const debts = this.debts;
    this.debts = debts.filter(el => el.id !== id);
    return of(null);
  }

  getItem(id: number): Observable<Debt> {
    const debt = this.debts.find(el => el.id === id);
    return of(debt);
  }

  getList(): Observable<Debt[]> {
    return of(this.debts);
  }

  update(item: Debt): Observable<null> {
    const debts = this.debts;
    const index = debts.findIndex(el => el.id === item.id);
    debts.splice(index, 1, item);
    this.debts = debts;
    return of(null);
  }
}
