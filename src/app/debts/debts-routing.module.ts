import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DebtListComponent } from './components/debt-list/debt-list.component';
import { DebtDetailComponent } from './components/debt-detail/debt-detail.component';
import { DebtAddComponent } from './components/debt-add/debt-add.component';
import { DebtDetailResolverService } from './services/resolvers/debt-detail-resolver.service';
import { DebtListResolverService } from './services/resolvers/debt-list-resolver.service';

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
                // runGuardsAndResolvers: 'always',
                resolve: {
                    debts: DebtListResolverService,
                }
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
