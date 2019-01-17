import { storiesOf } from '@storybook/angular';
import { withNotes } from '@storybook/addon-notes';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import {
  withKnobs,
  boolean,
  text,
  number,
  color,
  object,
} from '@storybook/addon-knobs';

import { ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from './input.component';
// import * as md from 'marked';

const note = `
  ## Input Element
  #### Properties
  Name | Type | Description
  --- | --- | ---
  type | InputType | type of input field
  value | string/number/float | type of input field
  placeholder | string | placeholder text
  disabled | boolean | is field disabled
  required | boolean | is field required
  hintMessage | text | hint text
  errorMessage | text | error text
  inputEvents | InputEvents | input events emitter

  ~~~
`;

storiesOf('AppComponent/InputComponentガイド', module)
  .addDecorator(withKnobs)
  .addDecorator(withNotes)
  .add('コンポーネント全体像', () => {
    const sendValue = action('input!');

    return {
      component: InputComponent,
      moduleMetadata: {
        imports: [ReactiveFormsModule],
      },
      props: {
        sendValue,
      },
    };
  })
  .add('コンポーネントガイド', () => {
    const sendValue = action('input!');
    setTimeout(() => {
      document
        .querySelector('app-input input')
        .setAttribute('value', '11111111111');
    }, 1000);

    return {
      component: InputComponent,
      moduleMetadata: {
        declarations: [InputComponent],
        imports: [ReactiveFormsModule],
      },
      props: {
        sendValue,
        message: 'aaa',
      },
//       template: `
//         ${md(`
// <app-input></app-input>
//         `)}
//       `,
    };
  });
