import { configure } from '@storybook/angular';
import { withNotes } from '@storybook/addon-notes';
import './style.css';

// automatically import all files ending in *.stories.ts
const req = require.context('../../src/app', true, /.stories.ts$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
  // setTimeout(() => {
  //   document
  //     .getElementsByTagName('storybook-dynamic-app-root')[0]
  //     .classList.add('markdown-body');
  // }, 1000);
}

configure(loadStories, module);
