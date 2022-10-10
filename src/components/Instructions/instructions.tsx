import React from 'react'
import { useInstructionsStyles } from './instructions.styles'

export const Instructions: React.FC = () => {
  const classes = useInstructionsStyles()
  return (
    <ul className={classes.root}>
      <li>In order to create card press `Add Card` button</li>
      <li>In order to remove card press X button</li>
      <li>In order to remove all the cards press `Remove all` button</li>
      <li>In order to sort cards press `Sort cards` button</li>
    </ul>
  )
}
