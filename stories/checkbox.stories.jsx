import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Checkbox } from '../src';

class Container extends React.PureComponent {

  constructor(props) {
    super()
    this.state = {
      checked: props.checked || false,
    }
  }

  render() {
    return <Checkbox 
      { ...this.props}
      checked={ this.state.checked }
      onChange={ this.onChange }
    />
  }

  onChange = (e, checked) => {
    this.setState({
      checked
    })
    this.props.onChange && this.props.onChange(e, checked)
  }

}

storiesOf('Checkbox', module)
  .add('default', () => <Container />)
  .add('renders checked', () => <Container checked />)
  .add('calls onChange when clicked', () => <Container onChange={ action('changed')} />)

