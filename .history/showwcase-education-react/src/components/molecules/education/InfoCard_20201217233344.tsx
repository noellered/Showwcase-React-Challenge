import React, { FunctionComponent } from 'react';

const InfoCard:FunctionComponent<{item: object}> = ({ item }) => {
    return(
        <Card className={classes.educationCard}>
                <Typography align="justify" variant="h6" color="textPrimary">
                    {item['degree']} {item['fieldOfStudy']} @ {item['institution']}
                </Typography>
                <Typography variant="subtitle1" align="justify" color="textSecondary" gutterBottom>
                    {months[item['start']['month']].name} {item['start']['year']} - 
                    {item['current'] ? ' Present' : ` ${months[item['end']['month']].name} ${item['end']['year']}`}
                </Typography>
                <Typography variant="body1" align="justify">
                    {item['description']}
                </Typography>
        </Card>
    )
}

export default InfoCard