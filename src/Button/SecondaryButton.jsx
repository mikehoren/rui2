import React from 'react'
import Button, { TYPE_SECONDARY } from './'

// @class SecondaryButton
// @description Renders a button with secondary styling

const SecondaryButton = (props) => (<Button
    type={ TYPE_SECONDARY }
    { ...props }
  />)

export default SecondaryButton