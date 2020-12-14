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


@NgModule({
  declarations: [DebtListComponent, DebtDetailComponent, DebtItemComponent, DebtEditComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    DebtsRoutingModule,
  ]
})
export class DebtsModule {
}
