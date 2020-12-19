import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Debt } from '../../models/debt';
import { Observable } from 'rxjs';
import { DebtService } from '../debt.service';

@Injectable({
  providedIn: 'root'
})
export class DebtListResolverService implements Resolve<Debt[]> {

  constructor(
      private debtService: DebtService
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Debt[]> | Promise<Debt[]> | Debt[] {
    return this.debtService.getList();
  }
}
