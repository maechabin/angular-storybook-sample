import { storiesOf } from '@storybook/angular';
import { withNotes } from '@storybook/addon-notes';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, boolean, text, number, color, object } from '@storybook/addon-knobs';

import { ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from './input.component';
import * as md from 'marked';

storiesOf('AppComponent/InputComponentガイド', module)
  .addDecorator(withKnobs)
  .addDecorator(withNotes)
  .add('コンポーネント全体像',
    () => {
      const sendValue = action('input!');

      return {
        component: InputComponent,
        moduleMetadata: {
          imports: [ReactiveFormsModule],
        },
        props: {
          sendValue,
        }
      };
    },
    {
      notes: {
        markdown: `
          # 1111111
          aaaaaa
          ## 3333
        `,
      },
    }
  );
