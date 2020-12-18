import React, {FunctionComponent} from 'react';

const EducationList:FunctionComponent<{list: object[]}> = ({ list }) => {
    return(
        <div>
            {list.map((item) => <li>item</li>)}
        </div>
    )
}
export default EducationList;