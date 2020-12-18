import React, { FunctionComponent, useState } from 'react';
import {List, ListItem, ListItemText, Grid, Typography, Button} from '@material-ui/core';
import { useStyles } from './styles';


/* 
EDUCATION SIDEBAR
Displays list of all education experiences in reverse order 
*/

const EducationSidebar:FunctionComponent<{list: object[], buttonHandler: any}> = ({ list, buttonHandler }) => {
    const classes = useStyles();

    const handleClick = () => {
        buttonHandler()
    }

    return(
        <List className={classes.list}>
            <Typography variant="h6" color="primary" align="justify" gutterBottom>Education Overview</Typography>
            { list.length > 0 ? list.map((item) => 
            <div>
                <ListItem className={classes.listItem} >
                    <ListItemText>{item['institution']}</ListItemText>
                </ListItem>
            </div>
            ) 
            : <Grid container>
                    <Typography align="justify" variant="body1" color="textPrimary">
                        No education to display yet
                    </Typography>
                    <Grid className={classes.button} item lg={12}>
                        <Button variant="outlined" color="primary" onClick={handleClick}>
                            + New Education
                        </Button>
                    </Grid>
                </Grid> }
        </List>
    )
}
export default EducationSidebar;