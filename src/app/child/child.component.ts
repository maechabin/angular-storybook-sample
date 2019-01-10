import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <div>
      <h2>Hello {{ name }}!</h2>
      <button (click)="handleClick()" [disabled]="hasError">Click</button>
    </div>
  `,
})
export class ChildComponent {
  @Input() name: string;
  @Input() hasError: boolean;
  @Output() sendClick: EventEmitter<null> = new EventEmitter<null>();

  handleClick() {
    this.sendClick.emit();
  }
}
