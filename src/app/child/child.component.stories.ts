import { storiesOf } from '@storybook/angular';
import { withNotes } from '@storybook/addon-notes';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { ChildComponent } from './child.component';

storiesOf('ChildComponentガイド', module)
  .add('@Input name', withNotes(`
  <div>aaa</div>
  `)(() => ({
    component: ChildComponent,
    moduleMetadata: {
      declarations: [ChildComponent],
    },
    template: `
      <p>&lt;app-child name="aaa"&gt;&lt;/app-child&gt;</p>
      <app-child name="aaa" (sendValue)="handleSendValue($event)"></app-child>
      <p>&lt;app-child name="bbb"&gt;&lt;/app-child&gt;</p>
      <app-child name="bbb"></app-child>
      <p>&lt;app-child name="ccc"&gt;&lt;/app-child&gt;</p>
      <app-child name="ccc"></app-child>
    `
  })))
  .add('@Input nameに"aaa"を渡した場合', () => ({
    component: ChildComponent,
    props: {
      name: 'aaa',
      sendValue: action('Clicked!'),
    }
  }))
  .add('@Input nameに"bbb"を渡した場合', () => ({
    component: ChildComponent,
    props: {
      name: 'bbb',
      sendValue: action('Clicked!'),
    },
  }))
  .add('@Output sendValue', () => ({
    component: ChildComponent,
    props: {
      name: 'Storybook',
      sendValue: action('Clicked!'),
    },
  }));
