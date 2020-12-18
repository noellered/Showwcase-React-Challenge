import React, {FunctionComponent, useState} from 'react';

const EducationSidebar:FunctionComponent<{list: object[]}> = ({ list }) => {
   
    return(
        <div>
            <ul>
                {education.map((item) => <li>{item}</li>)}
            </ul>
        </div>
    )
}
export default EducationSidebar;