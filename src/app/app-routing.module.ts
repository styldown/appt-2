import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './login/forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { OctomComponent } from './octom/octom.component';
import { IdentificationComponent } from './_pages/identification/identification.component';
import { RegisterComponent } from './_pages/register/register.component';
import { SuccesLoginComponent } from './_pages/succes-login/succes-login.component';

const routes: Routes = [
  {
    path : "",
    component : LoginComponent,


    children:[
      {
        path : "succes-login",
        component: SuccesLoginComponent
      },
      {
        path : "forgot-password",
        component : ForgotPasswordComponent
        },
        {
          path : "app-register",
          component: RegisterComponent
        },
        {
          path : "",
          component: IdentificationComponent
        }
    ]
  },
  {
    path :"app-octom",
    component : OctomComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
