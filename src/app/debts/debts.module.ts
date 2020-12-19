import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DebtsRoutingModule } from 'src/app/debts/debts-routing.module';

import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { DebtListComponent } from 'src/app/debts/components/debt-list/debt-list.component';
import { DebtDetailComponent } from 'src/app/debts/components/debt-detail/debt-detail.component';
import { DebtItemComponent } from 'src/app/debts/components/debt-item/debt-item.component';
import { DebtAddComponent } from 'src/app/debts/components/debt-add/debt-add.component';

@NgModule({
    declarations: [DebtListComponent, DebtDetailComponent, DebtItemComponent, DebtAddComponent],
    imports: [
        CommonModule,
        FormsModule,
        MatButtonModule,
        MatIconModule,
        MatCardModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatInputModule,
        DebtsRoutingModule,
        MatProgressBarModule,
    ]
})
export class DebtsModule {
}
