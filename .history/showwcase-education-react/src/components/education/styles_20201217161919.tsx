import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    educationCard: {
        padding: '2rem',
        margin: '.5rem'
    },
    list: {
        padding: '1rem',
    },

    modalContent: {
        padding: '2rem',
    },
    listItem: {
        '&:active': {
            fontWeight: 600,
        }
    }
})