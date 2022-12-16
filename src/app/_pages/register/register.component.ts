import { VariableBinding } from '@angular/compiler';
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
        Validators.minLength(8),
        Validators.maxLength(10)
      ]], // Valeur par défaut
      email: ['',
        [
          Validators.required,
          Validators.email,
        ]],
      password: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(10),
      ]],
      phone: ['', [
        Validators.required,
        Validators.minLength(9),
        Validators.maxLength(10),
        Validators.pattern('^[0-9]*$')
      ]],
      terms: ['', [
        Validators.requiredTrue
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

  get terms() {
    return this.registerForm.get('terms');
  }
  submit() {
    if (!this.registerForm.valid) {
      alert('Form is invalid')
      return;
    }

    alert('Success');
  }
}
