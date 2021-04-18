import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { DebtsModule } from './debts/debts.module';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { ImportDebtsDialogComponent } from 'src/app/dialogs/import-debts-dialog/import-debts-dialog.component';
import { ConfirmDialogComponent } from 'src/app/dialogs/confirm-dialog/confirm-dialog.component';

@NgModule({
    declarations: [
        AppComponent,
        ImportDebtsDialogComponent,
        ConfirmDialogComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,

        MatButtonModule,
        MatDialogModule,
        MatIconModule,
        MatMenuModule,
        MatSliderModule,
        MatSidenavModule,
        MatToolbarModule,

        DebtsModule,
        AppRoutingModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
