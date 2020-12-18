import React, {FunctionComponent} from 'react';

onst EducationSidebar:FunctionComponent<{list: object[]}> = ({ list }) => {
    return(
        <ul>
            {list.map((item) => <li>{item}</li>)}
        </ul>
    )
}
export default EducationSidebar;