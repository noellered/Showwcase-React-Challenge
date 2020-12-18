import React, { FunctionComponent } from 'react';
import List from '@material-ui/core/List';
import ListItem, {ListItemProps} from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider'
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

const EducationSidebar:FunctionComponent<{list: object[]}> = ({ list }) => {
    const classes = useStyles()
    return(
        <List component="nav" className={classes.root}>
            <Typography variant="h6" gutterBottom>Your Education</Typography>
            { list.length > 0 ? list.map((item) => 
            <div>
                <ListItem button>
                    <ListItemText>{item['institution']}</ListItemText>
                </ListItem>
            </div>
            ) 
            : <div>No education to display</div> }
        </List>
    )
}
export default EducationSidebar;