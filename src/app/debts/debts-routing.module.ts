import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DebtListComponent } from './debt-list/debt-list.component';
import { DebtDetailComponent } from './debt-detail/debt-detail.component';
import { DebtEditComponent } from './debt-edit/debt-edit.component';

const routes: Routes = [
  {
    path: 'my-debts',
    children: [
      {
        path: 'add',
        component: DebtEditComponent,
        resolve: {} // TODO make resolver
      },
      {
        path: ':id',
        component: DebtDetailComponent,
      },
      {
        path: 'edit/:id',
        component: DebtEditComponent,
        resolve: {} // TODO use resolver from "add"
      },
      {
        path: '',
        component: DebtListComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DebtsRoutingModule { }
