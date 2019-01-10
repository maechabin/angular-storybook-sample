import { storiesOf } from '@storybook/angular';
import { withNotes } from '@storybook/addon-notes';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { InputComponent } from './input/input.component';

storiesOf('AppComponent', module).add('to Storybook', () => ({
  component: AppComponent,
  props: {},
  moduleMetadata: {
    imports: [ReactiveFormsModule],
    declarations: [ChildComponent, InputComponent],
  },
}));

// storiesOf('Child', module).add('to Storybook', () => ({
//   component: ChildComponent,
//   props: {
//     name: 'Storybook',
//     sendValue: action('Clicked!'),
//   },
// }));