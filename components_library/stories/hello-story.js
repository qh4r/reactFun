import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Hello from '../src/components/Hello/Hello';

// using '/' you cen group elements
storiesOf('App/Hello', module)
  .add('Billy', () => (
    <Hello msg="Billy" />
  ))
  .add('None', () => (
    <Hello />
  ));
//actions get registered with given anme and args
storiesOf('App/Buttons/plain', module)
  .add('click', () => (
    <button onClick={action('clicked!')}>click</button>
  ))