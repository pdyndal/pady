import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ui-login-form',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {
  @Input() loginText: string;
  @Output() confirmLogin: EventEmitter<null>;

  constructor() {
    this.loginText = '';
    this.confirmLogin = new EventEmitter<null>();
  }
}
