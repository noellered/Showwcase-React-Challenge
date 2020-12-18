import { makeStyles } from '@material-ui/core/styles';

export const pageStyles = makeStyles({
    modal: {
        maxWidth: '70%',
        margin: 'auto',
        height: '70vh'
    },
    button: {
        backgroundColor: '#0063cc',
        borderColor: '#0063cc',
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


