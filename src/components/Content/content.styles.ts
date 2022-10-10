import { makeStyles, createStyles } from '@mui/styles'

export const useContentStyles = makeStyles((theme) =>
  createStyles({
    root: {
      height: 'calc(100vh - 175px)',
      display: 'flex',
      justifyContent: 'center',
      padding: '20px 0px',
      overflowX: 'hidden',
      width: '100%',

      '&::-webkit-scrollbar': {
        width: '1em'
      },

      '&::-webkit-scrollbar-track': {
        boxShadow: 'inset 0 0 6px rgba(0, 0, 0, 0.3)'
      },

      '&::-webkit-scrollbar-thumb': {
        backgroundColor: 'darkgrey',
        outline: '1px solid slategrey'
      }
    }
  })
)
