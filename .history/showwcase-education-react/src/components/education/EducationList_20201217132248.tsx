import React, { FunctionComponent } from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';

const EducationList:FunctionComponent<{list: object[]}> = ({ list }) => {
    return(
        <div>
            { list.length > 0 ? list.map((item) => 
            <Card>
                <CardHeader>
                    <Typography></Typography></CardHeader>
                <CardContent>
                    {item['degree']}
                </CardContent>
            </Card>) : <div>Nothing to display</div> }
        </div>
    )
}
export default EducationList;