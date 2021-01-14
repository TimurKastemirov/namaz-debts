import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { NamazDebt } from 'src/app/debts/models/namaz-debt';
import { Observable } from 'rxjs';
import { DebtService } from '../debt.service';

@Injectable({
  providedIn: 'root'
})
export class DebtListResolverService implements Resolve<NamazDebt[]> {

  constructor(
      private debtService: DebtService
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<NamazDebt[]> | Promise<NamazDebt[]> | NamazDebt[] {
    return this.debtService.getList();
  }
}
