/**
 * Central module that handles imports, declarations,
 * providers, and bootstrapping of the application.
 *
 * @module AppModule
 * @preferred
 */ /** */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpModule } from '@angular/http';
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { routing } from './routes';
import { RootComponent } from './root.component';
import { WelcomeComponent } from './pages/pages.barrel';

@NgModule({
    imports: [
        NgbModule.forRoot(),
        BrowserModule,
        FormsModule,
        HttpModule,
        ToastModule,
        routing
    ],
    declarations: [
        RootComponent,
        WelcomeComponent
    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy }
    ],
    bootstrap: [RootComponent]
})
export class AppModule { }
