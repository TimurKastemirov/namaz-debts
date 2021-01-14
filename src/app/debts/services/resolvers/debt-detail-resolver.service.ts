import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { NamazDebt } from 'src/app/debts/models/namaz-debt';
import { DebtService } from 'src/app/debts/services/debt.service';
import { EMPTY, Observable, of } from 'rxjs';
import { mergeMap, take } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class DebtDetailResolverService implements Resolve<NamazDebt> {

    constructor(
        private debtService: DebtService,
        private router: Router,
    ) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<NamazDebt> | Promise<NamazDebt> | NamazDebt {
        const id = +route.paramMap.get('id');
        return this.debtService.getItem(id).pipe(
            take(1),
            mergeMap(namazDebt => {
                if (namazDebt) {
                    return of(namazDebt);
                } else { // id not found
                    this.router.navigate(['/my-debts']);
                    return EMPTY;
                }
            })
        );
    }
}
