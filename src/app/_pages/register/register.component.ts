import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

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
      phones: this.formBuilder.array([]),
    });
    this.addPhone();
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

  get phones() {
    return this.registerForm.get('phones') as FormArray;
  }


  submit() {
    if (!this.registerForm.valid) {
      alert('fomrulaire invalid')
      return;
    }

    alert('Success');
  }
  addPhone(){
    let phone = this.formBuilder.group({
      phoneNumber: ['', [
        Validators.required,
        Validators.pattern('^[0-9]*$'),
        Validators.minLength(8),
        Validators.maxLength(10)
      ]]
    }
    )

     if(this.phones.length < 3)
      this.phones.push(phone); // 0 => phone // 1 => ph

    console.log(this.phones);
  }
  getPhoneNumber(index: number) {
    return this.phones.controls[index].get('phoneNumber');
  }

  getPhonePrefix(index: number) {
    return this.phones.controls[index].get('phonePrefix');
  }

  deletePhone(index: number) {
    this.phones.removeAt(index); // Supprime là (index) 0...n
  }
}
