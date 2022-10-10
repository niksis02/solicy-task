import React from 'react'
import { useCardStyles } from './number-card.styles'
import Typography from '@mui/material/Typography'
import CloseIcon from '@mui/icons-material/Close'
import Box from '@mui/material/Box'

interface CardProps {
  cardNumber: number
  handleDelete: () => void
}

export const Card: React.FC<CardProps> = ({ cardNumber, handleDelete }) => {
  const classes = useCardStyles()
  return (
    <Box className={classes.root}>
      <Typography
        style={{
          fontSize: 50,
          fontWeight: 600,
          color: 'green'
        }}
      >
        {cardNumber}
      </Typography>
      <CloseIcon className={classes.closeIcon} onClick={handleDelete} />
    </Box>
  )
}
