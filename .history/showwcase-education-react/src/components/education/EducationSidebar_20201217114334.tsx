import React, {FunctionComponent, useState} from 'react';

const EducationSidebar:FunctionComponent<{list: object[]}> = ({ list }) => {
    const [education, setEducation] = useState(list)

    return(
        <div></div>
        <ul>
            {education.map((item) => <li>{item}</li>)}
        </ul>
    )
}
export default EducationSidebar;