import { Component } from '@angular/core';

interface Event { value: string; hasError: boolean; }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-storybook-sample';
  name = 'Angular';
  inputName = '';
  hasError = true;

  handleSendValue(event: Event) {
    this.inputName = event.value;
    this.hasError = event.hasError;
  }

  handleSendClick() {
    if (this.hasError === false) {
      this.name = this.inputName;
    }
  }
}
