import React from 'react'
import { useHeaderStyles } from './header.styles'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import { CardType } from '../../App'
import { createCard } from '../../utils/card-actions'

interface HeaderProps {
  addCardsInfo: (card: CardType) => void
  handleSort: () => void
  cardsInfo: CardType[]
}

export const Header: React.FC<HeaderProps> = ({
  addCardsInfo,
  handleSort,
  cardsInfo
}) => {
  const classes = useHeaderStyles()

  return (
    <AppBar className={classes.root} position="static" color="default">
      <Toolbar style={{ gap: 20 }}>
        <Button
          style={{ height: '80%' }}
          onClick={() => addCardsInfo(createCard(cardsInfo))}
        >
          Add Card
        </Button>
        <Button style={{ height: '80%' }} onClick={handleSort}>
          Sort Cards
        </Button>
      </Toolbar>
    </AppBar>
  )
}
