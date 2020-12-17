import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DebtListComponent } from './debt-list/debt-list.component';
import { DebtDetailComponent } from './debt-detail/debt-detail.component';
import { DebtAddComponent } from './debt-add/debt-add.component';
import { DebtDetailResolverService } from './debt-detail-resolver.service';

const routes: Routes = [
    {
        path: 'my-debts',
        children: [
            {
                path: 'add',
                component: DebtAddComponent,
            },
            {
                path: ':id',
                component: DebtDetailComponent,
                resolve: {
                    debt: DebtDetailResolverService
                }
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
export class DebtsRoutingModule {
}
