import React, {FunctionComponent, useState} from 'react';

const EducationSidebar:FunctionComponent<{list: object[]}> = ({ list }) => {
   
    return(
        <div>
            { list.length > 0 ? {list.map((item) => <spanp>{item}</p>)} : <div>Nothing to display</div>}
        </div>
    )
}
export default EducationSidebar;