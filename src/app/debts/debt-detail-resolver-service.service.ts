import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Debt } from './debt';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DebtDetailResolverServiceService implements Resolve<Debt> {

  constructor(
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Debt> | Promise<Debt> | Debt {
    const id = route.paramMap.get('id');
    return undefined;
  }
}
