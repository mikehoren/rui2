import React from 'react'
import Button, { TYPE_DANGER } from './'

// @class DangerButton
// @description Renders a button with danger styling

const DangerButton = (props) => (<Button
  { ...props }
  type={ TYPE_DANGER }  
/>)

export default DangerButton