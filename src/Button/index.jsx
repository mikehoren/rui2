import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'

import styles from './Button.css'

const cx = classNames.bind(styles)

export const TYPE_NORMAL = 'normal'
export const TYPE_SECONDARY = 'secondary'
export const TYPE_DANGER = 'danger'

// @class Button
// @description Renders a button with styling. Available variants:
//  - default styling
//  - secondary styling
//  - danger styling

class Button extends React.PureComponent {

  render() {
    return (
      <button
        { ...this.props }
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
  // disable the button lightening the appearance and making it unclickable
  disabled: PropTypes.bool,
  // designs the type of button changing it's styling
  type: PropTypes.oneOf([TYPE_NORMAL, TYPE_SECONDARY, TYPE_DANGER]),
  // register a callback when the button is clicked
  onClick: PropTypes.func,
  // className to apply to the button
  className: PropTypes.string,
}

export default Button