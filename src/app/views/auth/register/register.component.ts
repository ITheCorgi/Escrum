import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthService } from '../../../@core/services/auth.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  signupForm!: FormGroup;
  hide!: boolean;
  private _submitted!: boolean;

  constructor(
    private _formBuilder: FormBuilder,
    private _router: Router,
    private _route: ActivatedRoute,
    private _authService: AuthService
  ) { 
    //this._submitted = false;
  }

  ngOnInit(): void {
    this.signupForm = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  public get submitted() {
    return this._submitted;
  }

  public set submitted(value: boolean) {
    this._submitted = value;
  }

  public get email() {
    return this.signupForm.controls.email;
  }

  public get name() {
    return this.signupForm.controls.name;
  }

  public get password() {
    return this.signupForm.controls.password;
  }
}
