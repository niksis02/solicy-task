import React from 'react'
import { useContentStyles } from './content.styles'
import Grid from '@mui/material/Grid'
import { Box } from '@mui/material'
import { Card } from './common'
import { CardType } from '../../App'

interface ContentProps {
  Cards: CardType[]
  handleDelete: (deletedCardId: string) => void
}

export const Content: React.FC<ContentProps> = ({ Cards, handleDelete }) => {
  const classes = useContentStyles()
  return (
    <Box className={classes.root}>
      <Grid container style={{ width: '800px' }}>
        {Cards.map((card: CardType) => (
          <Grid
            container
            spacing={1}
            item
            lg={6}
            style={{ marginTop: '20px' }}
            key={card.id}
          >
            <Card
              {...card}
              handleDelete={() => {
                handleDelete(card.id)
              }}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
