import React, { FunctionComponent } from 'react';

const EducationList:FunctionComponent<{list: object[]}> = ({ list }) => {
    return(
        <ul>
            {list.map((item) => <li>{item}</li>)}
        </ul>
    )
}
export default EducationList;