import React, { FunctionComponent } from 'react';
import {List, ListItem, ListItemText, Grid, Typography, Button} from '@material-ui/core';
import { useStyles } from './styles';


/* 
EDUCATION SIDEBAR
Displays list of all education experiences in reverse order 
*/

interface SidebarProps {
    
}

const EducationSidebar:FunctionComponent<{list: object[], buttonHandler: any}> = ({ list, buttonHandler }) => {
    const classes = useStyles();

    const handleClick = () => {
        buttonHandler()
    }

    return(
        <Grid container>
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
                            Add education to see it here.
                        </Typography>
                    </Grid> }
                <Grid item className={classes.button} lg={12}>
                        <Button variant="text" color="primary" onClick={handleClick}>
                            + Add New Education
                        </Button>
                </Grid>
            </List>
        </Grid>
    )
}
export default EducationSidebar;