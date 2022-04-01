import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  loginForm: FormGroup;
  isSubmitted = false;

  constructor(
    public formBuilder: FormBuilder
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  doLogin() {
    this.isSubmitted = true;
    if (this.loginForm.valid) {
      console.log('OK');
    } else {
      console.log('Por favor rellena los campos correctamente');
    }
  }

  get errorControl() {
    return this.loginForm.controls;
  }
}
