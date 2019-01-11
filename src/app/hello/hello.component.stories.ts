import { storiesOf } from '@storybook/angular';
import { withNotes } from '@storybook/addon-notes';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, text, number, color, object } from '@storybook/addon-knobs';

import { HelloComponent } from './hello.component';
import * as md from 'marked';

storiesOf('AppComponent/HelloComponentガイド', module)
　.addDecorator(withKnobs)
  .add('コンポーネント全体像', () => {
    const name = text('name', 'angular');

    return {
      component: HelloComponent,
      props: {
        name,
      },
    };
  }, {
    notes: {
      markdownn: `
        # aaaaa
      `,
    }
  })
  .add(
    '@Input name',
    withNotes(`
      <div>aaa</div>
    `)(() => {
      return {
        component: HelloComponent,
        moduleMetadata: {
          declarations: [HelloComponent],
        },
        template: `
          ${md(`
# HelloComponent

\`\`\`js
<app-hello name="aaa"></app-hello>
\`\`\`
<app-hello name="aaa"></app-hello>

\`\`\`<app-hello name="bbb"></app-hello>\`\`\`
<app-hello name="bbb"></app-hello>

\`\`\`<app-hello name="ccc"></app-hello>\`\`\`
<app-hello name="ccc"></app-hello>
`, {
  headerPrefix: 'aaaa'
})}
        `,
      };
    })
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
