import { Observable } from 'rxjs';
import { Debt } from '../../debts/debt';

export interface DebtApiStrategy {
  getItem(id: number): Observable<Debt>;
  getList(): Observable<Debt[]>;
  create(item: Debt): Observable<null>;
  update(item: Debt): Observable<null>;
  delete(id: number): Observable<null>;
}
