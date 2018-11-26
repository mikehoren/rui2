import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { RadioGroup } from '../src';

class Container extends React.PureComponent {

  constructor(props) {
    super()
    this.state = {
      radios: props.radios || [
        { id: 1, label: 'Radio1' },
        { id: 2, label: 'Radio2' },
        { id: 3, label: 'Radio3' }
      ]
    }
  }

  render() {
    return (
      <RadioGroup 
        radios={ this.state.radios }
        onChange={ this.onChange }
      />
    )
  }

  onChange = (e, radio) => {
    this.setState({
      radios: this.state.radios.map( r => {
        r.checked = r.id === radio.id
        return r
      })
    })
    this.props.onChange && this.props.onChange(e, radio)
  }

}

storiesOf('RadioGroup', module)
  .add('default', () => <Container />)
  .add('Renders with 1 option checked', () => <Container 
    radios={[
      { id: 1, label: 'Radio1' },
      { id: 2, label: 'Radio2', checked: true },
      { id: 3, label: 'Radio3' }
    ]}
  />)
  .add('Renders with 1 option disabled', () => <Container 
    radios={[
      { id: 1, label: 'Radio1' },
      { id: 2, label: 'Radio2', disabled: true },
      { id: 3, label: 'Radio3' }
    ]}
  />)
