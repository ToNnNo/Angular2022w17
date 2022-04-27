import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { signupConstraint } from "../../constraints/signup.constraint";
import {CustomValidators} from "../../validators/custom-validators";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  // FormControl( value, [validators], [validatorAsync] )
  // FormGroup( controls, [validators], [validatorAsync] )
  form = new FormGroup({
    email: new FormControl(null, [
      Validators.required,
      CustomValidators.email()
    ]),
    password: new FormControl(null, [
      Validators.required,
      Validators.minLength(8)
    ]),
    confirm: new FormControl(null, [
      Validators.required
    ]),
    terms: new FormControl(false, [
      Validators.requiredTrue
    ])
  }, [
    CustomValidators.matchPassword()
  ]);

  constructor() { }

  ngOnInit(): void {
  }

  public inscription(): void {

    this.form.markAllAsTouched();

    if( this.form.valid ) {
      console.log(this.form.getRawValue());
      // console.log(this.form.value);
    }
  }

  public validate(name: string): string|null {
    const field = this.form.get(name);

    // @ts-ignore
    const validators = signupConstraint[name];
    if(field?.touched) { // ? safe operator
      for(let validator in validators) {
        if(field?.hasError(validator)) {
          return validators[validator];
        }
      }
    }

    return null;
  }

}























