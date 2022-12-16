import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BackgroudComponent } from './backgroud/backgroud.component';
import { InputComponent } from './_component/input/input.component';
import { SuccesLoginComponent } from './_pages/succes-login/succes-login.component';
import { ForgotPasswordComponent } from './login/forgot-password/forgot-password.component';
import { CredentielComponent } from './login/forgot-password/credentiel/credentiel.component';
import { RegisterComponent } from './_pages/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { IdentificationComponent } from './_pages/identification/identification.component';
import { OctomComponent } from './octom/octom.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BackgroudComponent,
    InputComponent,
    SuccesLoginComponent,
    ForgotPasswordComponent,
    CredentielComponent,
    RegisterComponent,
    IdentificationComponent,
    OctomComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent,OctomComponent]
})
export class AppModule { }
