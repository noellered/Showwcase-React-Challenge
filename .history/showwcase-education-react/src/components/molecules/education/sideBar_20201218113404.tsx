import React, { FunctionComponent, useState } from 'react';
import {List, ListItem, ListItemText, Grid, Typography, Button} from '@material-ui/core';
import { useStyles } from './styles';


/* 
EDUCATION SIDEBAR
Displays list of all education experiences in reverse order 
*/

const EducationSidebar:FunctionComponent<{list: object[]}> = ({ list }) => {
    const classes = useStyles();
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
            : <Grid  container>
                    <Grid className={classes.header} item lg={12}>
                        <Typography variant="h6" color="textPrimary">
                            You haven't added any education yet.
                        </Typography>
                        <Typography variant="body1">
                            Once you add an education experience, it will show up here.
                        </Typography>
                    </Grid>
                    <Grid item lg={12}>
                        <Button variant="outlined" color="primary" onClick={handleClick}>
                            Add New Education
                        </Button>
                    </Grid>
                </Grid> }
        </List>
    )
}
export default EducationSidebar;