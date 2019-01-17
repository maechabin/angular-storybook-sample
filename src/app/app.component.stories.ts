import { storiesOf } from '@storybook/angular';
import { withNotes } from '@storybook/addon-notes';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { InputComponent } from './input/input.component';
import { ButtonComponent } from './button/button.component';

storiesOf('AppComponent', module).add('コンポーネン全体像', () => ({
  component: AppComponent,
  moduleMetadata: {
    imports: [ReactiveFormsModule],
    declarations: [
      AppComponent,
      HelloComponent,
      InputComponent,
      ButtonComponent,
    ],
    template: '<app-root></app-root>',
  },
}));
