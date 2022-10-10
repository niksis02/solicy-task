import { makeStyles, createStyles } from '@mui/styles'

export const useCardStyles = makeStyles(() =>
  createStyles({
    root: {
      height: '300px',
      position: 'relative',
      width: '250px',
      border: '1px solid gray',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    closeIcon: {
      position: 'absolute',
      top: 15,
      right: 15,
      '&:hover': {
        cursor: 'pointer',
        backgroundColor: 'green',
        borderRadius: '50%'
      }
    }
  })
)
