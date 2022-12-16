import { Component } from '@angular/core';
import { Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-input',
  templateUrl: './login-input.component.html',
  styleUrls: ['./login-input.component.scss']
})
export class LoginInputComponent {
  @Input()
    param!: string;

}
