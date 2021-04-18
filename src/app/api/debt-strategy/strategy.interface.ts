import { Observable } from 'rxjs';
import { NamazDebtDTO } from 'src/app/debts/dto/namaz-debt';

export interface DebtApiStrategy {
  getItem(id: number): Observable<NamazDebtDTO>;
  getList(): Observable<NamazDebtDTO[]>;
  create(item: NamazDebtDTO): Observable<number>;
  update(item: NamazDebtDTO): Observable<null>;
  delete(id: number): Observable<null>;
  removeAllDebts(): Observable<null>;
}
