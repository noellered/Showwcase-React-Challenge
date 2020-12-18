import React, { FunctionComponent } from 'react';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';

const EducationSidebar:FunctionComponent<{list: object[]}> = ({ list }) => {
   
    return(
        <div>
            { list.length > 0 ? list.map((item) => 
            <div>
                <h4>Institution: {item['institution']}</h4>
                <span>Degree: {item['degree']}</span>
            </div>) 
            : <div>No education to display</div> }
            <button>Add +</button>
        </div>
    )
}
export default EducationSidebar;