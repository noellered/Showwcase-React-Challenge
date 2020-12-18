import { makeStyles } from '@material-ui/core/styles';

export const pageStyles = makeStyles({
    modal: {
        maxWidth: '70%',
        margin: 'auto',
        padding: 'rem'
    },
    button: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
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


