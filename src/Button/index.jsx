import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'

import styles from './Button.css'

const cx = classNames.bind(styles)

export const TYPE_NORMAL = 'normal'
export const TYPE_SECONDARY = 'secondary'
export const TYPE_DANGER = 'danger'

// @class Button
// @description Renders a button with styling

class Button extends React.PureComponent {

  render() {
    return (
      <button 
        className={ cx(styles.button, this.props.type, this.props.className) } 
        disabled={ this.props.disabled }
        onClick={ this.props.onClick }
      >
        { this.props.children }
      </button>
    )
  }

}

Button.defaultProps = {
  disabled: false,
  type: TYPE_NORMAL,
  onClick: () => null,
  className: '',
}

Button.propTypes = {
  disabled: PropTypes.bool,
  type: PropTypes.oneOf([TYPE_NORMAL, TYPE_SECONDARY, TYPE_DANGER]),
  onClick: PropTypes.func,
  className: PropTypes.string,
}

export default Button