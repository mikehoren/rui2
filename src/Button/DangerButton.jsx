import React from 'react'
import Button, { TYPE_DANGER } from './'

// @class DangerButton
// @description Renders a button with danger styling

const DangerButton = (props) => (<Button
    type={ TYPE_DANGER }
    { ...props }
  />)

export default DangerButton