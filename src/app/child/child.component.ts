import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <div>
      <h2>Hello {{ name }}!</h2>
      <button (click)="handleClick()">Click</button>
    </div>
  `,
})
export class ChildComponent {
  @Input() name: string;
  @Output() sendValue: EventEmitter<{ value: string }> = new EventEmitter<{
    value: string;
  }>();

  handleClick() {
    this.sendValue.emit({
      value: this.name === 'Storybook' ? 'Angular' : 'Storybook',
    });
  }
}
