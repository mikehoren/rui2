import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'

import styles from './RadioGroup.css'

const cx = classNames.bind(styles)

// @class Input
// @description Renders a radio group 

class RadioGroup extends React.PureComponent {

  render() {
    return (
      <div>
        { this.genRadioGroup() }
      </div>
    )
  }

  genRadioGroup() {
    const {
      className,
    } = this.props
    return this.props.radios.map( (r, idx) => {
      return (
        <div key={ idx } 
          className={ cx(styles.container, className, {
            disabled: !!r.disabled,
          }) } 
          onClick={ (e) => this.onChange(e, r) } 
          tabIndex="0"
        >
          <div 
            className={ cx(styles.radio, {
              checked: !!r.checked,
            }) } >
          </div>
          { r.label && <span className={ cx(styles.label) }>{ r.label }</span> }
        </div>
      )
    })
  }

  onChange = (e, r) => {
    if(r.disabled) {
      return
    }
    this.props.onChange(e, r)
  }

}

RadioGroup.defaultProps = {
  radios: [],
  className: '',
  onChange: () => null,
}

RadioGroup.propTypes = {
  // an array of radio objects to render out into radio buttons. Properties:
  // - label [String] a label to render next to the radio button
  // - checked [Boolean] is the radio button checked
  // - disabled [Boolean] Should the radio button be disabled
  radios: PropTypes.array,
  // a className to apply to each radio button
  className: PropTypes.string,
  // an onChange callback to call when a radio button has been clicked
  onChange: PropTypes.func,
}

export default RadioGroup