import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Button, SecondaryButton, DangerButton } from '../src';

storiesOf('Button', module)
  .add('primary', () => <Button>Test</Button>)
  .add('primary disabled', () => <Button disabled >Test</Button>)
  .add('secondary', () => <Button type="secondary">Test</Button>)
  .add('secondary disabled', () => <Button type="secondary" disabled >Test</Button>)
  .add('danger', () => <Button type="danger">Test</Button>)
  .add('danger disabled', () => <Button type="danger" disabled >Test</Button>)
  .add('onClick()', () => <Button onClick={ action('clicked') }>Test</Button>)
  .add('SecondaryButton', () => <SecondaryButton>Secondary</SecondaryButton>)
  .add('DangerButton', () => <DangerButton>Danger</DangerButton>)

