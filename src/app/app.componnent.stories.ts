import { storiesOf } from '@storybook/angular';
import { withNotes } from '@storybook/addon-notes';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';

storiesOf('AppComponent', module).add('to Storybook', () => ({
  component: AppComponent,
  props: {},
  moduleMetadata: {
    declarations: [ChildComponent],
  },
}));

// storiesOf('Child', module).add('to Storybook', () => ({
//   component: ChildComponent,
//   props: {
//     name: 'Storybook',
//     sendValue: action('Clicked!'),
//   },
// }));
