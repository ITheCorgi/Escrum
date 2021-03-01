import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';

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
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService
  ) { 
    //this._submitted = false;
  }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  onSubmit() {
    this.submitted = true;

    if(this.signupForm.invalid) { return; }
    this.authService.signup(this.signupForm.value)
      .pipe(first())
      .subscribe({
        next: () => {
          this.router.navigate(['']);
        }
      });
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
