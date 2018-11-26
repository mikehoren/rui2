import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'

import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown'

import styles from './Select.css'

const cx = classNames.bind(styles)

export const EMPTY_MESSAGE = 'No Value Selected'

// @class Select
// @description Renders a select picker with associated options. Leverages native select for option selection.
//  - default empty input
//  - error state
//  - block rendering

class Select extends React.PureComponent {

  render() {
    const {
      options,
      className,
      error,
      block,
      disabled,
      ...restProps
    } = this.props
    return (
      <div className={ cx(styles.select, className, {
        error,
        block,
        disabled
      }) }>
        <span className={ cx(styles.text) }>{ this.getSelectedText() }</span>
        <KeyboardArrowDown 
          className={ cx(styles.icon) }
        />
        <select
          { ...restProps }
          className={ cx(styles.selectInput) }
          onChange={ this.onChange }
          disabled={ disabled }
        >
          { this.renderOptions() }
        </select>
      </div>
    )
  }

  getOptionByValue(value) {
    return this.props.options.filter( o => String(o.value) === String(value))[0]
  }

  getSelectedText() {
    const selected = this.getOptionByValue(this.props.value)
    return selected ? selected.name : EMPTY_MESSAGE
  }

  renderOptions() {
    if(this.props.options.length === 0){
      return null;
    }
    return this.props.options.map( (o, idx) => {
      return <option value={ o.value } key={ idx }>{ o.name }</option>
    });
  }

  onChange = (e) => {
    const option = this.getOptionByValue(e.target.value)
    this.props.onChange(e, option)
  }

}

Select.defaultProps = {
  value: '',
  options: [],
  onChange: () => null,
  className: '',
  error: false,
  block: false,
  disabled: false,
}

Select.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  options: PropTypes.array,
  onChange: PropTypes.func,
  className: PropTypes.string,
  error: PropTypes.bool,
  block: PropTypes.bool,
  disabled: PropTypes.bool,
}

export default Select