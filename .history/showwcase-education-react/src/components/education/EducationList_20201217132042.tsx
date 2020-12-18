import React, { FunctionComponent } from 'react';
import Card from '@material-ui/core/Card';

const EducationList:FunctionComponent<{list: object[]}> = ({ list }) => {
    return(
        <div>
            { list.length > 0 ? list.map((item) => <Card>
                {item['institution']}</Card>) : <div>Nothing to display</div> }
        </div>
    )
}
export default EducationList;