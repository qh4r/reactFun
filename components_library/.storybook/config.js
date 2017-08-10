import { configure } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';

function loadStories() {
  require('../stories/index.js');
}

setOptions({
  name: 'My book',
  downPanelInRight: true,
  sidebarAnimations: true,
});

configure(loadStories, module);