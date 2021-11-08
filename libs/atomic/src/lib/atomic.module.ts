import { NgModule } from '@angular/core';

import { LoginComponent } from './template/form/login-form/login.component';
import { RegisterComponent } from './template/form/register-form/register.component';
import { ConfirmButtonComponent } from './atom/confirm-button/confirm-button.component';
import { UserInputComponent } from './atom/user-input/user-input.component';

@NgModule({
  imports: [],
  declarations: [
    ConfirmButtonComponent,
    LoginComponent,
    RegisterComponent,
    UserInputComponent
  ],
  exports: [
    ConfirmButtonComponent,
    LoginComponent,
    RegisterComponent
  ]
})
export class AtomicModule {
}
