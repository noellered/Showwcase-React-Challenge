import React, { FunctionComponent } from 'react';
import List from '@material-ui/core/List';
import ListItem, {ListItemProps} from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider'
import ListItemText from '@material-ui/core/ListItemText';

const EducationSidebar:FunctionComponent<{list: object[]}> = ({ list }) => {
   
    return(
        <List>
            { list.length > 0 ? list.map((item) => 
            <ListItem>
                <h4>Institution: {item['institution']}</h4>
                <span>Degree: {item['degree']}</span>
            </div>) 
            : <div>No education to display</div> }
            <button>Add +</button>
        </List>
    )
}
export default EducationSidebar;