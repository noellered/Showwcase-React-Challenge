import React, {FunctionComponent} from 'react';

const EducationSidebar:FunctionComponent<{list: object[]}> = ({ list }) => {
    const [education, setEducation] = useState(list)

    return(
        <ul>
            {list.map((item) => <li>{item}</li>)}
        </ul>
    )
}
export default EducationSidebar;