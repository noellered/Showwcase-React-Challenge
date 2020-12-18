import { makeStyles } from '@material-ui/core/styles';

export const pageStyles = makeStyles({
    modal: {
        maxWidth: '70%',
        margin: 'auto',
        height: '70vh'
    },
    button: {
        backgroundGradient: '#0063cc',
        borderColor: '#0063cc',
        borderRadius: 3,
        color: 'white',
        height: 48,
        padding: '0 30px',
        '&:hover': {
            backgroundColor: '#0069d9',
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


