import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/my-debts'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes,
        {
            // onSameUrlNavigation: 'reload',
            // enableTracing: true,
        })],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
