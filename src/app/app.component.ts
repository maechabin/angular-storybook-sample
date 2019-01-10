import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-storybook-sample';
  name = 'Angular';
  inputName = '';
  hasError = false;

  handleSendValue(event: { value: string; hasError: boolean }) {
    this.inputName = event.value;
    this.hasError = event.hasError;
  }
  }
}
