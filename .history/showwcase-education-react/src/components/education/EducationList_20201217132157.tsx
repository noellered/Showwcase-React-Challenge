import React, { FunctionComponent } from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';

const EducationList:FunctionComponent<{list: object[]}> = ({ list }) => {
    return(
        <div>
            { list.length > 0 ? list.map((item) => 
            <Card>
                <CardHeader>{item['institution']}</CardHeader>
                <CardContent>{item['']}</CardContent>
            </Card>) : <div>Nothing to display</div> }
        </div>
    )
}
export default EducationList;