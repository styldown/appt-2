import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/login/user';

@Component({
  selector: 'app-identification',
  templateUrl: './identification.component.html',
  styleUrls: ['./identification.component.scss']
})
export class IdentificationComponent {
  message ="C'est un plaisir de vous revoir";
  user=new User();

  constructor(private router: Router){

  }

  onClick(loginInput:string, passwordInput:string): void{

    if(User.login==loginInput && User.password==passwordInput){

      this.router.navigate(['/app-octom']);
    }
    else{
      this.message="Login ou mot de passe incorrecte";
      alert("login= login\nMot de passe= password\n pour tester")
    }
  }
}
