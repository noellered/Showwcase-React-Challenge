import { makeStyles } from '@material-ui/core/styles';

export const pageStyles = makeStyles({
    modal: {
        maxWidth: '70%',
        margin: 'auto',
        height: '70vh'
    },
    button: {
        backgroundImage: 'linear-gradient(90deg, rgba(81,53,196,1) 0%, rgba(91,110,238,1) 100%)',
        borderColor: '#0063cc',
        borderRadius: 3,
        color: 'white',
        height: 48,
        padding: '0 30px',
        '&:hover': {
            backgroundImage: 'linear-gradient(90deg, rgba(114,86,231,1) 0%, rgba(123,139,245,1) 100%)',
            borderColor: '#0062cc',
            boxShadow: 'none',
          },
    },
    container: {
        display: 'flex',
        flexDirection: 'row'
    },
    paper: {
        height: '75vh',
        overflow: 'auto'
    },
   
})


