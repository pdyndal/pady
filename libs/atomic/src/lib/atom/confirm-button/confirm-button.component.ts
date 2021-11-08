import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'ui-confirm-button',
  templateUrl: './confirm-button.component.html',
  styleUrls: ['./confirm-button.component.sass'],
})
export class ConfirmButtonComponent {
  @Input() confirmText: string;
  @Output() confirmEvent: EventEmitter<null>;

  constructor() {
    this.confirmText = '';
    this.confirmEvent = new EventEmitter<null>();
  }
}
