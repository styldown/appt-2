import { Component, Input } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {
  test=false;
  message="";
  router: any;
  user=User;
  display="credentiel";
  @Input()

  onClick(emailInput:string): void{

    if(this.user.email==emailInput){
      this.test=true;
    }
    else{
      this.message="Email introuvable, modifiez le ou inscrivez vous";
      this.test=false;
    }
  }

}
