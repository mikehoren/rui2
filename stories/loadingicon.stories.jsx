import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { LoadingIcon } from '../src';

storiesOf('LoadingIcon', module)
  .add('default', () => <LoadingIcon />)
