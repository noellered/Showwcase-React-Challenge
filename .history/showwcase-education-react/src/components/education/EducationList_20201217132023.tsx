import React, { FunctionComponent } from 'react';
import Card from '@material-ui/core/Card';

const EducationList:FunctionComponent<{list: object[]}> = ({ list }) => {
    return(
        <div>
            { list.length > 0 ? list.map((item) => <span>{item['institution']}</span>) : <div>Nothing to display</div> }
        </div>
    )
}
export default EducationList;