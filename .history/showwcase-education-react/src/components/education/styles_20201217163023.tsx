import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    educationCard: {
        padding: '2rem',
        margin: '.5rem'
    },
    list: {
        padding: '1.5rem',
    },

    modalContent: {
        padding: '2rem',
    },
    listItem: {
        '&:active': {
            fontWeight: 600,
        }
    },
    input: {
        minWidth: '40%',
        marginBottom: '1rem'
    },
    inputGroup: {
        minWidth: '100%'
    },
    degree: {
        marginRight: '1.5rem'
    }
})