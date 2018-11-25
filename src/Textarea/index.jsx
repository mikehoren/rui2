import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'

import styles from './Textarea.css'

export const PADDING = 10

const cx = classNames.bind(styles)

// @class Textarea
// @description Renders a Textarea with styling. The textarea automatically adjusts size as it's value changes. 
//  Available statuses:
//  - default empty textarea
//  - error state
//  - block rendering

class Textarea extends React.PureComponent {

  render() {
    const {
      className,
      error,
      block,
      ...restProps
    } = this.props
    return (
      <textarea
        ref="textarea"
        { ...restProps }
        onChange={ this.onChange }
        className={ cx(styles.textarea, className, { error, block })}
      />
    )
  }

  onChange = e => {
    const textarea = this.refs.textarea
    // by setting height to 0 scrollHeight is equal to the content height of the textarea
    textarea.style.height = '0px'
    const height = textarea.scrollHeight
    textarea.style.height = `${height + PADDING}px`
    this.props.onChange(e)
  }

}

Textarea.defaultProps = {
  onChange: () => null,
  error: false,
  block: false,
}

Textarea.propTypes = {
  onChange: PropTypes.func,
  error: PropTypes.bool,
  block: PropTypes.bool,
}

export default Textarea