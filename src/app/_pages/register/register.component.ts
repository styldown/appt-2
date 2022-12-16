import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{
  registerForm!: FormGroup;
  isAvailable:boolean=true;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      username: ["", [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(10)
      ]], 
      email: ['',
        [
          Validators.required,
          Validators.email,
        ]],
      password: ['', [
        Validators.required,
        Validators.minLength(8),
      ]],
      phone: ['', [
        Validators.required,
        Validators.minLength(9),
        Validators.maxLength(10),
        Validators.pattern('^[0-9]*$')
      ]]
    })
  }

  get username() {
    return this.registerForm.get('username');
  }

  get email() {
    return this.registerForm.get('email');
  }

  get password() {
    return this.registerForm.get('password');
  }

  get phone() {
    return this.registerForm.get('phone');
  }


  submit() {
    if (!this.registerForm.valid) {
      alert('Form is invalid')
      return;
    }

    alert('Success');
  }
}
