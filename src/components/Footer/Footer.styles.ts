import { makeStyles, createStyles } from '@mui/styles'

export const useFooterStyles = makeStyles((theme) =>
  createStyles({
    root: {
      width: '100%',
      height: '65px',
      boxShadow:
        '0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }
  })
)
