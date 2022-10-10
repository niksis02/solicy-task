import React from 'react'
import { useFooterStyles } from './Footer.styles'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'

interface FooterProps {
  handleRemoveAll: () => void
}

export const Footer: React.FC<FooterProps> = ({ handleRemoveAll }) => {
  const classes = useFooterStyles()
  return (
    <Box className={classes.root}>
      <Button style={{ height: '80%' }} onClick={handleRemoveAll}>
        Remove Cards
      </Button>
    </Box>
  )
}
