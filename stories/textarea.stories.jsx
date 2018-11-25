import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Textarea } from '../src';

storiesOf('Textarea', module)
  .add('default', () => <Textarea />)
  .add('renders error', () => <Textarea error />)
  .add('renders as block', () => <Textarea block />)
