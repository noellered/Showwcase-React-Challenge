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
                <Typography align="justify" variant="h6" gutterBottom>
                    {item['institution']}
                </Typography>
                <CardContent>
                    <Typography variant="caption"></Typography>
                    
                </CardContent>
            </Card>) : <div>Nothing to display</div> }
        </div>
    )
}
export default EducationList;