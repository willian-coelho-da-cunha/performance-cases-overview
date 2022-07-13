import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { ButtonModule } from '@will/ui-core/src/lib/button';
import { EmailFormFieldModule } from '@will/ui-core/src/lib/email-form-field';
import { PasswordFormFieldModule } from '@will/ui-core/src/lib/password-form-field';

import { AppComponent } from './app/app.component';
import { HomeComponent } from './home/home.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { FinancialStatusComponent } from './financial-status/financial-status.component';
import { LatestRecomendationsComponent } from './latest-recomendations/latest-recomendations.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AuthenticationComponent,
    FinancialStatusComponent,
    LatestRecomendationsComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ButtonModule,
    EmailFormFieldModule,
    PasswordFormFieldModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
