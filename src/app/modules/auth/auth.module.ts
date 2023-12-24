import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './../auth/pages/login/login.component';
import { RegisterComponent } from './../auth/pages/register/register.component';
import { RecoveryComponent } from './../auth/pages/recovery/recovery.component';
import { ForgotPasswordComponent } from './../auth/pages/forgot-password/forgot-password.component';
import { ForgotPasswordFormComponent } from './components/forgot-password-form/forgot-password-form.component';
import { RecoveryFormComponent } from './components/recovery-form/recovery-form.component';
import { RegisterFormComponent } from './../auth/components/register-form/register-form.component';
import { LoginFormComponent } from './../auth/components/login-form/login-form.component';

@NgModule({
  declarations: [
    LoginComponent,
    LoginFormComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    RegisterFormComponent,
    ForgotPasswordFormComponent,
    RecoveryComponent,
    RecoveryFormComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ]
})
export class AuthModule { }
