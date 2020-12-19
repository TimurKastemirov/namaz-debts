import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Debt } from '../../models/debt';
import { EMPTY, Observable, of } from 'rxjs';
import { DebtService } from '../debt.service';
import { mergeMap, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DebtDetailResolverService implements Resolve<Debt> {

  constructor(
      private debtService: DebtService,
      private router: Router,
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Debt> | Promise<Debt> | Debt {
    const id = + route.paramMap.get('id');
    return this.debtService.getItem(id).pipe(
        take(1),
        mergeMap(crisis => {
          if (crisis) {
            return of(crisis);
          } else { // id not found
            this.router.navigate(['/my-debts']);
            return EMPTY;
          }
        })
    );
  }
}
