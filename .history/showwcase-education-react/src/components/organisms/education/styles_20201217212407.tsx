import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    button: {
        backgroundImage: 'linear-gradient(90deg, rgba(114,86,231,1) 0%, rgba(123,139,245,1) 100%)',
        borderColor: '#0063cc',
        borderRadius: 3,
        color: 'white',
        height: 48,
        padding: '0 30px',
        alignSelf: 'flex-end',
        '&:hover': {
            backgroundImage: 'linear-gradient(90deg, rgba(81,53,196,1) 0%, rgba(91,110,238,1) 100%)',
            borderColor: '#0062cc',
          },
    },
    label: {
        display: 'inline-block'
    },
    educationCard: {
        padding: '2rem',
        margin: '.5rem'
    },
    modalContent: {
        display: 'flex',
        flexDirection: 'column',
        padding: '2rem',
    },
    input: {
        minWidth: '40%',
        marginBottom: '.5rem'
    },
    inputGroup: {
        display: 'flex',
        flexDirection: 'row'
    },
    mr: {
        marginRight: '.5rem'
    },
    modal: {
        maxWidth: '70%',
        margin: 'auto',
        marginTop: '2rem',
        minHeight: '70vh',
        "&:focus": {
            outline: "none"
        }
    },
})