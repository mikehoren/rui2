import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'

import DoneIcon from '@material-ui/icons/Done'
import ErrorIcon from '@material-ui/icons/Error'
import LoadingIcon from '../LoadingIcon'

import styles from './Input.css'

const cx = classNames.bind(styles)

// @class Input
// @description Renders an Input with styling. Available statuses:
//  - default empty input
//  - error state
//  - success state
//  - loading state
//  - block rendering

class Input extends React.PureComponent {

  render() {
    const {
      error,
      loading,
      success,
      block,
      className,
      inputClassName,
      ...restProps
    } = this.props
    return (
      <div 
        className={ cx(styles.container, className, {
          block,
        }) }
      >
        <input
          { ...restProps }
          className={ cx(styles.input, inputClassName, {
            hasIcon: success || error || loading,
            errorInput: error,
            block,
          }) }
        />
        <div className={ cx(styles.iconContainer) }>
          { success && <DoneIcon className={ cx(styles.icon, styles.success) } /> }
          { error && <ErrorIcon className={ cx(styles.icon, styles.error) } /> }
          { loading && <LoadingIcon className={ cx(styles.icon) } /> }
        </div>
      </div>
    )
  }

}

Input.defaultProps = {
  error: false,
  loading: false,
  success: false,
  block: false,
  className: '',
  inputClassName: '',
}

Input.propTypes = {
  // is the input in an error state
  error: PropTypes.bool,
  // is the input in a loading state
  loading: PropTypes.bool,
  // is the input in a success state
  success: PropTypes.bool,
  // should the input be rendered as a block element
  block: PropTypes.bool,
  // className to apply to the input container
  className: PropTypes.string,
  // className to apply to the input
  inputClassName: PropTypes.string,
}

export default Input