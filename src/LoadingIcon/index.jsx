import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'

import styles from './LoadingIcon.css'

const cx = classNames.bind(styles)

const LoadingIcon = props => <div className={ cx(styles.cssloadLoader, props.className) }></div>

LoadingIcon.defaultProps = {
  className: '',
}

LoadingIcon.propTypes = {
  className: PropTypes.string,
}

export default LoadingIcon