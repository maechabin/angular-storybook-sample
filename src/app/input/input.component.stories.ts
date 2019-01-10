import { storiesOf } from '@storybook/angular';
import { withNotes } from '@storybook/addon-notes';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from './input.component';

storiesOf('AppComponent/InputComponentガイド', module).add(
  'to Storybook',
  () => ({
    component: InputComponent,
    moduleMetadata: {
      imports: [ReactiveFormsModule],
    },
  }),
);
