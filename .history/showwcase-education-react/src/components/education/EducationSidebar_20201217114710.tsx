import React, {FunctionComponent, useState} from 'react';

const EducationSidebar:FunctionComponent<{list: object[]}> = ({ list }) => {
   
    return(
        <div>
            { list.length > 0 ? {list.map((item) => <li>{item}</li>)} : }
            <ul>
                {list.map((item) => <li>{item}</li>)}
            </ul>
        </div>
    )
}
export default EducationSidebar;