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
        minWidth: '3rem',
        marginBottom: '.5rem'
    },
    inputGroup: {
        display: 'flex',
        flexDirection: 'row',
        minWidth: '100%'
    },
    mr: {
        marginRight: '.5rem'
    }
})