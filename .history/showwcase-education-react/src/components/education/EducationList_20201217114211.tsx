import React, { FunctionComponent, useState } from 'react';

const EducationList:FunctionComponent<{list: object[]}> = ({ list }) => {
    const [education, setEducation] = useState(list)
    return(
        <ul>
            {education.map((item) => <li>{item}</li>)}
        </ul>
    )
}
export default EducationList;