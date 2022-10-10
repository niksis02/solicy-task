import { makeStyles, createStyles } from '@mui/styles'

export const useHeaderStyles = makeStyles(() =>
  createStyles({
    root: {
      width: '100%',
      height: '70px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }
  })
)
