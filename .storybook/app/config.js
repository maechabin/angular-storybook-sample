import { configure, addDecorator } from "@storybook/angular";
// import requireContext from 'require-context.macro';
import { withNotes } from "@storybook/addon-notes";

// automatically import all files ending in *.stories.ts
const req = require.context("../../src/app", true, /.stories.ts$/);
//const req = requireContext('../../src/app', true, /.stories.ts$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
  // setTimeout(() => {
  //   document
  //     .getElementsByTagName('storybook-dynamic-app-root')[0]
  //     .classList.add('markdown-body');
  // }, 1000);
}

addDecorator(withNotes);
configure(loadStories, module);
