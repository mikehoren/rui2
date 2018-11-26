import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Select } from '../src';

class Container extends React.PureComponent {

  constructor(props) {
    super()
    this.state = {
      value: 1,
      options: props.options || [
        { name: 'Name1', value: 1, data: { v: '1' }},
        { name: 'Name2', value: 2, data: { v: 2 }},
        { name: 'Name3', value: 3, data: { v: '3' }}
      ],
    }
  }

  render() {
    return (
      <div>
        <Select
          value={ this.state.value }
          options={ this.state.options }
          { ...this.props }
          onChange={ this.onChange }
        />
      </div>
    )
  }

  onChange = (e, option) => {
    this.setState({
      value: option.value
    })
    this.props.onChange && this.props.onChange(e, option)
  }

}

storiesOf('Select', module)
  .add('default', () => <Container />)
  .add('renders empty', () => <Container options={[]} />)
  .add('renders disabled', () => <Container disabled />)
  .add('renders in error state', () => <Container error />)
  .add('Triggers onChange', () => <Container onChange={ action('changed') } />)
