import React, { FunctionComponent } from 'react';

const EducationSidebar:FunctionComponent<{list: object[]}> = ({ list }) => {
   
    return(
        <div>
            { list.length > 0 ? list.map((item) => 
            <div>
                <h4>Institution: {item['institution']}</h4>
                <span>Degree: {item['degree']}</span>
            </div>) 
            : <div>Add New Ed</div> }
        </div>
    )
}
export default EducationSidebar;