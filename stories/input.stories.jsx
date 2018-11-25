import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Input } from '../src';

storiesOf('Input', module)
  .add('default', () => <Input />)
  .add('success status', () => <Input success />)
  .add('error status', () => <Input error />)
  .add('loading status', () => <Input loading />)
  .add('displays as block', () => <Input block />)
  .add('displays success as block', () => <Input block success />)
  .add('displays error as block', () => <Input block error />)
  .add('displays loading as block', () => <Input block loading />)
