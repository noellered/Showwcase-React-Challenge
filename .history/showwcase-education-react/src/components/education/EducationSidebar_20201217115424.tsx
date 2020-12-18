import React, { FunctionComponent } from 'react';

const EducationSidebar:FunctionComponent<{list: object[]}> = ({ list }) => {
   
    return(
        <div>
            { list.length > 0 ? list.map((item) => 
            <div>
                <span>{item['institution']}</span>
                <span>{item['degree']}</span>
            </div>) 
            : <div>Nothing to display</div> }
        </div>
    )
}
export default EducationSidebar;