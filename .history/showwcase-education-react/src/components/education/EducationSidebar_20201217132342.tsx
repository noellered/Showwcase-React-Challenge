import React, { FunctionComponent } from 'react';
import List from '@material-ui/core/List';
import ListItem, {ListItemProps} from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider'
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

const EducationSidebar:FunctionComponent<{list: object[]}> = ({ list }) => {
   
    return(
        <List>
            <Typography>Your Education</Typography>
            { list.length > 0 ? list.map((item) => 
            <div>
                <ListItem>
                    <Typography variant="h6">{item['institution']}</Typography>
                </ListItem>
                <ListItem>
                    <Typography>{item['degree']}</ListItemText>
                </ListItem>
                <Divider/>
            </div>
            ) 
            : <div>No education to display</div> }
            <button>Add +</button>
        </List>
    )
}
export default EducationSidebar;