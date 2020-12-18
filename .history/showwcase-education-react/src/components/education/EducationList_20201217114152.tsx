import React, { FunctionComponent, useState } from 'react';

const EducationList:FunctionComponent<{list: object[]}> = ({ list }) => {
    const [education]
    return(
        <ul>
            {list.map((item) => <li>{item}</li>)}
        </ul>
    )
}
export default EducationList;