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
      selectClassName,
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
          className={ cx(styles.selectInput, selectClassName) }
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
  selectClassName: '',
  error: false,
  block: false,
  disabled: false,
}

Select.propTypes = {
  // the current value of the select input, should match a value within the array of options.
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  // An array of options to display for the select input. Properties:
  // - name [String] the display name of the option
  // - value [String|Number] a value for the option
  options: PropTypes.array,
  // an onChange callback to call when an option is selected
  onChange: PropTypes.func,
  // a className to apply to the select input container
  className: PropTypes.string,
  // a className to apply to the select input
  selectClassName: PropTypes.string,
  // should the select input render in an error state
  error: PropTypes.bool,
  // should the select input render as a block element
  block: PropTypes.bool,
  // disables the select input making it uninteractable and lightening it's appearance
  disabled: PropTypes.bool,
}

export default Select