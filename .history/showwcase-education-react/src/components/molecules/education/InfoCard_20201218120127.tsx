import React, { FunctionComponent } from 'react';
import {Divider, Typography, Grid, Container} from '@material-ui/core';
import {useStyles} from './styles'

/* 
INFO CARD
Creates a detailed information card for each education experience including:
Institution, Degree, Field of Study, Start and End Date, and a Description if any
*/


const months = [
    { id: 0, name: 'January' },
    { id: 1, name: 'February' },
    { id: 2, name: 'March' },
    { id: 3, name: 'April' },
    { id: 4, name: 'May' },
    { id: 5, name: 'June' },
    { id: 6, name: 'July' },
    { id: 7, name: 'August' },
    { id: 8, name: 'September' },
    { id: 9, name: 'October' },
    { id: 10, name: 'November' },
    { id: 11, name: 'December' },
];

const InfoCard:FunctionComponent<{item: object}> = ({ item }) => {
    const classes = useStyles();
    return(
        <Grid container className={classes.educationCard}>
            <Grid container sm={12}>
                <Grid container lg={12}>
                    <Grid item lg={9} md={10} sm={12} xs={12}>
                        <Typography align="justify" variant="h6" color="textPrimary">
                            {item['degree']} {item['fieldOfStudy']} @ {item['institution']}
                        </Typography>
                    </Grid>
                    <Grid item lg={3} md={2}>
                        <Typography variant="subtitle2" align="right">{item['gpa']} GPA</Typography>
                    </Grid>
                </Grid>
                <Grid item lg={12}>
                    <Typography variant="subtitle1" align="justify" color="textSecondary" gutterBottom>
                        {months[item['start']['month']].name} {item['start']['year']} - 
                        {item['current'] ? ' Present' : ` ${months[item['end']['month']].name} ${item['end']['year']}`}
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography variant="body1" align="justify">
                        {item['description']}
                    </Typography>
                </Grid>
            </Grid>
            <Divider/>
        </Grid>
    )
}

export default InfoCard