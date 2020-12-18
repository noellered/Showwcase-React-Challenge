import React, { FunctionComponent } from 'react';
import Card from '@material-ui/core/Card';
import { useStyles } from './styles';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const EducationList:FunctionComponent<{list: object[]}> = ({ list }) => {
    const classes = useStyles();
    return(
        <Container>
            { list.length > 0 ? list.map((item) => 
            <Card className={classes.educationCard}>
                <Typography align="justify" variant="h6" color="primary">
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
        </Container>
    )
}
export default EducationList;