import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faMicrosoft, faGithub, faGoogle, faFacebook, faVk } from '@fortawesome/free-brands-svg-icons';
import { Router, ActivatedRoute } from '@angular/router'
import { first } from 'rxjs/operators';

import { AuthService } from '../../../@core/services/auth.service'

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  
  loginForm!: FormGroup;
  hide: boolean;
  loading: boolean;
  submitted: boolean;
  
  faMicrosoft = faMicrosoft;
  faGithub = faGithub;
  faGoogle = faGoogle;
  faFacebook = faFacebook;
  faVk = faVk;

/**
* Constructor
* @param private _formBuilder: FormBuilder,
*/
  constructor(
    private _formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
    ) {
        if(this.authService.userValue) {
        this.router.navigate(['/']);
      }
      
      this.hide = true;
      this.loading = false;
      this.submitted = false;
  }

  ngOnInit() {
    this.loginForm = this._formBuilder.group({
      email   : ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
        return;
    }

    this.loading = true;
    this.authService.login(this.loginForm.value)
        .pipe(first())
        .subscribe({
            next: () => {
              // get return url from query parameters or default to home page
              const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
              this.router.navigateByUrl(returnUrl);
            },
            error: () => {
                this.loading = false;
            }
        });
  }

  get email() { return this.loginForm.get('email'); }

  get password() { return this.loginForm.get('password'); }

/**
 * Checking control validation
 * @param controlName: string => equals to formControlName
 * @param validatorsName: string => equals to Validators
 */
  /*isHasError({ controlName, validatorsName }: { controlName: string; validatorsName: string; }): boolean {
    return this.loginForm.get(controlName).hasError(validatorsName) && 
          (this.loginForm.get(controlName).dirty || this.loginForm.get(controlName).touched);
  }  */
}