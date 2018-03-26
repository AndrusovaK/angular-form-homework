import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

  public signUpForm: FormGroup;
  public formHasErrors = false;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.signUpForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.signUpForm.invalid) {
      this.formHasErrors = true;
      return;
    }

    this.signUpForm.reset();
    this.formHasErrors = false;
    console.log('sign up!');
  }
}
