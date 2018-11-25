import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Modal, Button } from '../src';

class Container extends React.PureComponent {

  state = {
    open: false
  }

  render() {
    return (
      <div>
        <Button onClick={ this.open }>Open Modal</Button>
        <Modal
          {...this.props}
          open={ this.state.open }
          onClose={ this.onClose }
        >
          { this.props.children }
        </Modal>
      </div>
    )
  }

  open = () => {
    this.setState({
      open: true,
    })
  }

  onClose = (e) => {
    this.setState({
      open: false,
    })
    this.props.onClose && this.props.onClose(e)
  }

}

storiesOf('Modal', module)
  .add('Shows content', () => <Container>Modal Content</Container>)
  .add('Shows content with title', () => <Container title="Test Title">Modal Content</Container>)
  .add('calls onClose when the modal is closed', () => <Container onClose={ action('closed') }>Modal Content</Container>)