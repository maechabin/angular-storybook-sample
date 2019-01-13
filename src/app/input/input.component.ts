import { Component, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

interface FormValue {
  value: string;
  hasError: boolean;
}

@Component({
  selector: 'app-input',
  template: `
    <div>
      <input type="text" [formControl]="name" (input)="handleInput()" /><br />
      <span style="color: red;">{{ message }}</span>
    </div>
  `,
})
export class InputComponent {
  @Output() sendValue: EventEmitter<FormValue> = new EventEmitter<FormValue>();

  message = '';
  name: FormControl = new FormControl('', [
    Validators.required,
    Validators.maxLength(9),
  ]);

  handleInput() {
    console.log(this.message);
    if (this.name.invalid) {
      this.message = 'Vlidation Error';
    } else {
      this.message = '';
    }
    this.sendValue.emit({
      value: this.name.value,
      hasError: this.message === '' ? false : true,
    });
  }
}
