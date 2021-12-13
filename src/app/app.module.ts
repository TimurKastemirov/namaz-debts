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
import { AlertDialogComponent } from './dialogs/alert-dialog/alert-dialog.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { language } from './helpers/language-definder';
// import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
// import { RouteReuseStrategy } from '@angular/router';

export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
    declarations: [
        AppComponent,
        ImportDebtsDialogComponent,
        ConfirmDialogComponent,
        AlertDialogComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        // IonicModule.forRoot(),
        HttpClientModule,
        TranslateModule.forRoot({
            defaultLanguage: language,
            loader: {
                provide: TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [HttpClient]
            }
        }),

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
    // providers: [
    //     { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
    // ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
