import { Observable } from 'rxjs';
import { NamazDebt } from 'src/app/debts/models/namaz-debt';

export interface DebtApiStrategy {
  getItem(id: number): Observable<NamazDebt>;
  getList(): Observable<NamazDebt[]>;
  create(item: NamazDebt): Observable<number>;
  update(item: NamazDebt): Observable<null>;
  delete(id: number): Observable<null>;
}
