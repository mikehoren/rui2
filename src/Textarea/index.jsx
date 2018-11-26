import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'

import styles from './Textarea.css'

export const PADDING = 10
export const MIN_HEIGHT = 100

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
    // fixes text-alignment jump once height reaches min height
    textarea.style.height = `${height >= MIN_HEIGHT ? height + PADDING : height}px`
    this.props.onChange(e, e.target.value)
  }

}

Textarea.defaultProps = {
  onChange: () => null,
  error: false,
  block: false,
}

Textarea.propTypes = {
  // an onChange callback to be called when the textarea value changes
  onChange: PropTypes.func,
  // should the textarea render in an error state
  error: PropTypes.bool,
  // should the textarea render as a block element
  block: PropTypes.bool,
}

export default Textarea