import React, { useEffect, useState } from 'react'
import { Content } from './components/Content'
import Box from '@mui/material/Box'
import { Header } from './components/Header'
import { Instructions } from './components/Instructions'
import { Footer } from './components/Footer'
import {
  addCardsInLocalStrg,
  getCardsFromLocalStrg
} from './utils/card-actions'

export interface CardType {
  cardNumber: number
  id: string
}

export const App: React.FC = () => {
  const [cardsInfo, setCardsInfo] = useState<CardType[]>(
    getCardsFromLocalStrg()
  )

  useEffect(() => {
    addCardsInLocalStrg(cardsInfo)
  }, [cardsInfo])

  const handleAdd = (card: CardType) => setCardsInfo([...cardsInfo, card])

  const handleDelete = (deletedCardId: string) =>
    setCardsInfo(cardsInfo.filter((card) => deletedCardId !== card.id))

  const handleSort = () => {
    setCardsInfo([...cardsInfo.sort((a, b) => +a.cardNumber - +b.cardNumber)])
  }

  return (
    <Box style={{ display: 'flex', height: '100%', width: '100%' }}>
      <Box style={{ width: '100%' }}>
        <Header
          addCardsInfo={handleAdd}
          handleSort={handleSort}
          cardsInfo={cardsInfo}
        />
        <Content Cards={cardsInfo} handleDelete={handleDelete} />
        <Footer handleRemoveAll={() => setCardsInfo([])} />
      </Box>
      <Instructions />
    </Box>
  )
}
