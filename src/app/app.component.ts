import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-storybook-sample';
  name = 'Angular';

  handleSendValue(event: { value: string }) {
    this.name = event.value;
  }
}
