import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Hello from '../src/components/Hello/Hello';
import { withNotes } from '@storybook/addon-notes';
import { text, withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

// using '/' you cen group elements
storiesOf('App/Hello', module)
  // knobs allow you to  edit values in storybook
  .addDecorator(withKnobs)
  .add('Billy', () => (
    <Hello msg={text('MSG', 'Billy')} />
  ))
  // INFO is much more practical then notes - displays props and stuff
  .add('None', withInfo('component using default values')(withNotes('this component uses default value')(() => (
    <Hello />
  ))));
//actions get registered with given anme and args
storiesOf('App/Buttons/plain', module)
  .add('click', withNotes('this is just a sample button')(() => (
    <button onClick={action('clicked!')}>click</button>
  )))