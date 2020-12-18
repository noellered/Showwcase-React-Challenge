import { makeStyles } from '@material-ui/core/styles';

export const pageStyles = makeStyles({
    modal: {
        minWidth: '70%',
        margin: 'auto',
        position: 'absolute',
        left: '5rem',
        minHeight: '70vh',
        "&:focus": {
            outline: "none"
        }
    },
    header: {
        marginTop: '2rem',
        marginBottom: '1rem'
    },
    button: {
        backgroundImage: 'linear-gradient(90deg, rgba(114,86,231,1) 0%, rgba(123,139,245,1) 100%)',
        borderColor: '#0063cc',
        borderRadius: 3,
        color: 'white',
        height: 48,
        padding: '0 30px',
        marginBottom: '2rem',
        '&:hover': {
            backgroundImage: 'linear-gradient(90deg, rgba(81,53,196,1) 0%, rgba(91,110,238,1) 100%)',
            borderColor: '#0062cc',
          },
    },
    container: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    paper: {
        height: '75vh',
        minWidth: '100%',
        overflow: 'auto',
        "&:focus": {
            outline: "none"
          }
    },
    sideBar: {
        marginRight: '2rem',
    }
})


