import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BackgroudComponent } from './backgroud/backgroud.component';
import { LoginInputComponent } from './login/login-input/login-input.component';
import { LoginPasswordComponent } from './login/login-password/login-password.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BackgroudComponent,
    LoginInputComponent,
    LoginPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
