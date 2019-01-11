import { storiesOf } from '@storybook/angular';
import { withNotes } from '@storybook/addon-notes';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, boolean, text, number, color, object } from '@storybook/addon-knobs';

import { ButtonComponent } from './button.component';

storiesOf('AppComponent/ButtonComponent', module)
  .add('@Output sendValue', () => ({
    component: ButtonComponent,
    props: {
      name: 'Storybook',
      sendClick: action('Clicked!'),
    },
  }));
