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
})