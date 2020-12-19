import { Observable } from 'rxjs';
import { Debt } from 'src/app/debts/models/debt';

export interface DebtApiStrategy {
  getItem(id: number): Observable<Debt>;
  getList(): Observable<Debt[]>;
  create(item: Debt): Observable<number>;
  update(item: Debt): Observable<null>;
  delete(id: number): Observable<null>;
}
