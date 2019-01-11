import { storiesOf } from '@storybook/angular';
import { withNotes } from '@storybook/addon-notes';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { ButtonComponent } from './button.component';

storiesOf('AppComponent/ButtonComponent', module)
  .add('@Output sendValue', () => ({
    component: ButtonComponent,
    props: {
      name: 'Storybook',
      sendClick: action('Clicked!'),
    },
  }));
