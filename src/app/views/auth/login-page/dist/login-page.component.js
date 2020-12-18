"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LoginPageComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var free_brands_svg_icons_1 = require("@fortawesome/free-brands-svg-icons");
var LoginPageComponent = /** @class */ (function () {
    /**
    * Constructor
    * @param private _formBuilder: FormBuilder,
    */
    function LoginPageComponent(_formBuilder) {
        this._formBuilder = _formBuilder;
        this.faMicrosoft = free_brands_svg_icons_1.faMicrosoft;
        this.faGithub = free_brands_svg_icons_1.faGithub;
        this.faGoogle = free_brands_svg_icons_1.faGoogle;
        this.faFacebook = free_brands_svg_icons_1.faFacebook;
        this.faVk = free_brands_svg_icons_1.faVk;
        this.loginForm = this._formBuilder.group({
            email: ['', [forms_1.Validators.required, forms_1.Validators.email]],
            password: ['', forms_1.Validators.required]
        });
        this.hide = true;
    }
    Object.defineProperty(LoginPageComponent.prototype, "email", {
        get: function () { return this.loginForm.get('email'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoginPageComponent.prototype, "password", {
        get: function () { return this.loginForm.get('password'); },
        enumerable: false,
        configurable: true
    });
    LoginPageComponent = __decorate([
        core_1.Component({
            selector: 'app-login-page',
            templateUrl: './login-page.component.html',
            styleUrls: ['./login-page.component.scss']
        })
    ], LoginPageComponent);
    return LoginPageComponent;
}());
exports.LoginPageComponent = LoginPageComponent;
