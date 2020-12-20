"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AuthModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var http_1 = require("@angular/common/http");
var router_1 = require("@angular/router");
var flex_layout_1 = require("@angular/flex-layout");
var input_1 = require("@angular/material/input");
var form_field_1 = require("@angular/material/form-field");
var icon_1 = require("@angular/material/icon");
var button_1 = require("@angular/material/button");
var forms_1 = require("@angular/forms");
var angular_fontawesome_1 = require("@fortawesome/angular-fontawesome");
var auth_component_1 = require("./auth.component");
var login_page_component_1 = require("./login-page/login-page.component");
var forgot_password_component_1 = require("./forgot-password/forgot-password.component");
var register_component_1 = require("./register/register.component");
var routes = [
    { path: '',
        component: auth_component_1.AuthComponent,
        children: [
            { path: '', redirectTo: 'login-page', pathMatch: 'full' },
            { path: 'login-page', component: login_page_component_1.LoginPageComponent },
            { path: 'forgot-password', component: forgot_password_component_1.ForgotPasswordComponent },
            { path: 'register', component: register_component_1.RegisterComponent }
        ]
    }
];
var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        core_1.NgModule({
            declarations: [auth_component_1.AuthComponent, login_page_component_1.LoginPageComponent, forgot_password_component_1.ForgotPasswordComponent, register_component_1.RegisterComponent],
            imports: [
                common_1.CommonModule,
                flex_layout_1.FlexLayoutModule,
                input_1.MatInputModule,
                form_field_1.MatFormFieldModule,
                icon_1.MatIconModule,
                button_1.MatButtonModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                http_1.HttpClientModule,
                angular_fontawesome_1.FontAwesomeModule,
                router_1.RouterModule.forChild(routes)
            ],
            exports: [
                router_1.RouterModule,
                auth_component_1.AuthComponent
            ]
        })
    ], AuthModule);
    return AuthModule;
}());
exports.AuthModule = AuthModule;
