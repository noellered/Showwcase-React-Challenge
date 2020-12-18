import React, { FunctionComponent } from 'react';
import Card from '@material-ui/core/Card';
import { useStyles } from './styles';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const EducationList:FunctionComponent<{list: object[]}> = ({ list }) => {
    const classes = useStyles();
    return(
        <div>
            { list.length > 0 ? list.map((item) => 
            <Card className={classes.educationCard} variant="outlined">
                <Typography align="justify" variant="h6">
                    {item['degree']} {item['fieldOfStudy']} - {item['institution']}
                </Typography>
                <Typography align="justify" color="textSecondary">
                        {item['start']['year']} - {item['end']['year']}
                </Typography>
                <CardContent>
                    <Typography>
                        {item['description']}
                    </Typography>
                </CardContent>
            </Card>) : <div>Nothing to display</div> }
        </div>
    )
}
export default EducationList;