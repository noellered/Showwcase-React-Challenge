import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    list: {
        padding: '1.5rem',
    },
    listItem: {
        '&:active': {
            fontWeight: 600,
        }
    },
    educationCard: {
        backgroundColor: '#fafafa',
        padding: '1.5rem 2rem 2rem 2rem',
        minHeight: ''
        margin: '1.5rem 0rem',
    },
})