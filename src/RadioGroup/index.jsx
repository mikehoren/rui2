import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'

import styles from './RadioGroup.css'

const cx = classNames.bind(styles)

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

  getValue() {
    return this.props.radios.filter( r => r.checked)[0] || ''
  }

}

RadioGroup.defaultProps = {
  radios: [],
  className: '',
  onChange: () => null,
}

RadioGroup.propTypes = {
  radios: PropTypes.array,
  className: PropTypes.string,
  onChange: PropTypes.func,
}

export default RadioGroup