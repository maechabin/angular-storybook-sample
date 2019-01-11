import { storiesOf } from '@storybook/angular';
import { withNotes } from '@storybook/addon-notes';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, boolean, text, number, color, object } from '@storybook/addon-knobs';

import { ButtonComponent } from './button.component';

storiesOf('AppComponent/ButtonComponent', module)
  .addDecorator(withKnobs)
  .add('コンポーネント全体像', () => {
    const hasError = boolean('hasErro', false);

    return {
      component: ButtonComponent,
      props: {
        hasError,
        sendClick: action('Clicked!'),
      }
    };
  })
  .add('hasErrorにfalseを渡した場合', () => {
    return {
      component: ButtonComponent,
      props: {
        hasError: false,
        sendClick: action('Clicked!'),
      },
    };
  })
  .add('hasErrorにtrueを渡した場合', () => {
    return {
      component: ButtonComponent,
      props: {
        hasError: true,
        sendClick: action('Clicked!'),
      },
    };
  });
