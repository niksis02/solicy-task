import { nanoid } from 'nanoid'
import { CardType } from '../App'

export const createUniqueTitle = (cardsInfo: CardType[]) => {
  let cardNumber: number = Math.floor(Math.random() * 1000)

  while (cardsInfo.some((el) => el.cardNumber === cardNumber)) {
    cardNumber = Math.floor(Math.random() * 1000)
  }

  return cardNumber
}

export const createCard = (cardsInfo: CardType[]) => {
  return {
    cardNumber: createUniqueTitle(cardsInfo),
    id: nanoid()
  }
}

export const addCardsInLocalStrg = (cards: CardType[]) => {
  const cardsJSON = JSON.stringify(cards)
  localStorage.setItem('cards', cardsJSON)
}

export const getCardsFromLocalStrg = () => {
  const cards = localStorage.getItem('cards') || '[]'
  return JSON.parse(cards)
}
