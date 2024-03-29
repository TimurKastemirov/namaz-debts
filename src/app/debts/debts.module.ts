import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DebtsRoutingModule } from 'src/app/debts/debts-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import { DebtListComponent } from 'src/app/debts/components/debt-list/debt-list.component';
import { DebtDetailComponent } from 'src/app/debts/components/debt-detail/debt-detail.component';
import { DebtItemComponent } from 'src/app/debts/components/debt-item/debt-item.component';
import { DebtAddComponent } from 'src/app/debts/components/debt-add/debt-add.component';
import { NamazDebtTableComponent } from './components/namaz-debt-table/namaz-debt-table.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
    declarations: [
        DebtListComponent,
        DebtDetailComponent,
        DebtItemComponent,
        DebtAddComponent,
        NamazDebtTableComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TranslateModule,
        MatButtonModule,
        MatCardModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatNativeDateModule,
        MatProgressBarModule,
        MatTabsModule,
        DebtsRoutingModule,
    ],
    providers: [
        DatePipe
    ]
})
export class DebtsModule {
}
