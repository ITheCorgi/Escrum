import { Component} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faMicrosoft, faGithub, faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  
  loginForm: FormGroup;
  faMicrosoft = faMicrosoft;
  faGithub = faGithub;
  faGoogle = faGoogle;
  faFacebook = faFacebook;
  hide = true;

/**
* Constructor
* @param private _formBuilder: FormBuilder,
*/
  constructor(private _formBuilder: FormBuilder) {
    this.loginForm = this._formBuilder.group({
      email   : [' ', [Validators.required, Validators.email]],
      password: [' ', Validators.required]
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