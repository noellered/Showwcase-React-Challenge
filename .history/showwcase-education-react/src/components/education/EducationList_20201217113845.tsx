import React, {FunctionComponent} from 'react';

const EducationList:FunctionComponent<{list: object[]}> = ({ list }) => {
    return(
        <div>
            {list.map((ed))}
        </div>
    )
}
export default EducationList;