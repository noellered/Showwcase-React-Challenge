import React, { FunctionComponent } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './styles'

const EducationSidebar:FunctionComponent<{list: object[]}> = ({ list }) => {
    const classes = useStyles();
    return(
        <List className={classes.list}>
            <Typography variant="h6" color="primary" gutterBottom>Your Education</Typography>
            { list.length > 0 ? list.map((item) => 
            <div>
                <ListItem className={classes.listItem} button>
                    <ListItemText >{item['institution']}</ListItemText>
                </ListItem>
            </div>
            ) 
            : <div>No education to display</div> }
        </List>
    )
}
export default EducationSidebar;