import React, {FunctionComponent} from 'react';

const EducationList:FunctionComponent<{list: object[]}> = ({ list }) => {
    return(
        <div>
            {list.map((item) => <li>item</p>)}
        </div>
    )
}
export default EducationList;