import { makeStyles, createStyles } from '@mui/styles'

export const useInstructionsStyles = makeStyles(() =>
  createStyles({
    root: {
      width: '350px',
      display: 'flex',
      flexDirection: 'column',
      fontSize: 20,
      gap: 20,
      color: 'green'
    }
  })
)
