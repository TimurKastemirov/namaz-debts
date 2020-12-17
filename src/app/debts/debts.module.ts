import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DebtsRoutingModule } from './debts-routing.module';
import { DebtListComponent } from './debt-list/debt-list.component';
import { DebtDetailComponent } from './debt-detail/debt-detail.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { DebtItemComponent } from './debt-item/debt-item.component';
import { MatCardModule } from '@angular/material/card';
import { DebtEditComponent } from './debt-edit/debt-edit.component';
import { DebtAddComponent } from './debt-add/debt-add.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';


@NgModule({
    declarations: [DebtListComponent, DebtDetailComponent, DebtItemComponent, DebtEditComponent, DebtAddComponent],
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
    ]
})
export class DebtsModule {
}
