import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'

import DoneIcon from '@material-ui/icons/Done'

import styles from './Checkbox.css'

const cx = classNames.bind(styles)

// @class Checkbox
// @description Renders a checkbox with styling.

class Checkbox extends React.PureComponent {

  render() {
    const {
      className,
      checked,
      disabled,
      ...restProps
    } = this.props
    return (
      <div 
        { ...restProps }
        tabIndex="0" 
        onClick={ this.onChange } 
        className={ cx(styles.container, className, {
          checked
        }) }
      >
        { checked && <DoneIcon className={ cx(styles.check) } /> }
      </div>
    )
  }

  onChange = (e) => {
    if(this.props.disabled) {
      return;
    }
    this.props.onChange(e, !this.props.checked)
  }

}

Checkbox.defaultProps = {
  checked: false,
  disabled: false,
  className: '',
  onChange: () => null,
}

Checkbox.propTypes = {
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  onChange: PropTypes.func,
}

export default Checkbox