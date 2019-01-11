import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
    <button (click)="handleClick()" [disabled]="hasError">Click</button>
  `,
})
export class ButtonComponent {
  @Input() hasError: boolean;
  @Output() sendClick: EventEmitter<null> = new EventEmitter<null>();

  handleClick() {
    this.sendClick.emit();
  }
}
