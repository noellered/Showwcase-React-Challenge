import React, { FunctionComponent } from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const EducationList:FunctionComponent<{list: object[]}> = ({ list }) => {
    return(
        <div>
            { list.length > 0 ? list.map((item) => 
            <Card variant="outlined">
                <CardHeader>
                    <Typography variant="h6 gutterBottom>{item['institution']}</Typography>
                </CardHeader>
                <CardContent>
                    {item['degree']}
                </CardContent>
            </Card>) : <div>Nothing to display</div> }
        </div>
    )
}
export default EducationList;