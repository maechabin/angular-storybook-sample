import { storiesOf } from '@storybook/angular';
import { withNotes } from '@storybook/addon-notes';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { HelloComponent } from './hello.component';

storiesOf('AppComponent/HelloComponentガイド', module)
  .add(
    '@Input name',
    withNotes(`
      <div>aaa</div>
    `)(() => ({
      component: HelloComponent,
      moduleMetadata: {
        declarations: [HelloComponent],
      },
      template: `
        <p>&lt;app-hello name="aaa"&gt;&lt;/app-hello&gt;</p>
        <app-hello name="aaa" (sendValue)="handleSendValue($event)"></app-hello>
        <p>&lt;app-hello name="bbb"&gt;&lt;/app-hello&gt;</p>
        <app-hello name="bbb"></app-hello>
        <p>&lt;app-hello name="ccc"&gt;&lt;/app-hello&gt;</p>
        <app-hello name="ccc"></app-hello>
      `,
    })),
  )
  .add('@Input nameに"aaa"を渡した場合', () => ({
    component: HelloComponent,
    props: {
      name: 'aaa',
      sendClick: action('Clicked!'),
    },
  }))
  .add('@Input nameに"bbb"を渡した場合', () => ({
    component: HelloComponent,
    props: {
      name: 'bbb',
      sendClick: action('Clicked!'),
    },
  }));
