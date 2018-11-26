import React from 'react'
import Button, { TYPE_SECONDARY } from './'

// @class SecondaryButton
// @description Renders a button with secondary styling

const SecondaryButton = (props) => (<Button
  { ...props }
  type={ TYPE_SECONDARY } 
/>)

export default SecondaryButton