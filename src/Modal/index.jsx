import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'

import ClearIcon from '@material-ui/icons/Clear'

import styles from './Modal.css'

const cx = classNames.bind(styles)

class Modal extends React.PureComponent {

  render() {
    const {
      open,
      className,
      ...props
    } = this.props
    return (
      <div className={ cx(styles.container, { open }) }>
        <div className={ cx(styles.overlay, { open }) } onClick={ this.onClose }></div>
        <div className={ cx(styles.modal, className, { open })}>
          { this.renderHeader() }
          <div className={ cx(styles.content) }>
            { this.props.children }
          </div>
        </div>
      </div>
    )
  }

  renderHeader() {
    const {
      locked
    } = this.props
    return (
      <header className={ cx(styles.header, { titled: this.hasTitle() }) }>
        <span className={ cx(styles.closeIconContainer, { locked }) } onClick={ this.onClose }>
          <ClearIcon className={ cx(styles.closeIcon) } />
        </span>
        { this.hasTitle() && <p className={ cx(styles.title)}>{ this.props.title }</p> }
      </header>
    )
  }

  hasTitle() {
    return this.props.title.length > 0;
  }

  onClose = (e) => {
    if(this.props.locked) { 
      return;
    }
    this.props.onClose(e);
  }

}

Modal.defaultProps = {
  title: '',
  open: false,
  onClose: () => null,
  className: '',
}

Modal.propTypes = {
  title: PropTypes.string,
  open: PropTypes.bool,
  onClose: PropTypes.func,
  className: PropTypes.string,
}

export default Modal