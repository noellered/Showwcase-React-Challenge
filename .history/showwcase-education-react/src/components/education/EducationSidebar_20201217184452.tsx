import React, { FunctionComponent, useState } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './styles';
import { Modal, Paper, Fade, Button, Backdrop } from '@material-ui/core';
import EducationModalContent from './Ed'


const EducationSidebar:FunctionComponent<{list: object[]}> = ({ list }) => {
    const classes = useStyles();
    return(
        <div>
        <List className={classes.list}>
            <Typography variant="h6" color="primary" align="justify" gutterBottom>Your Education</Typography>
            { list.length > 0 ? list.map((item) => 
            <div>
                <ListItem className={classes.listItem} button>
                    <ListItemText >{item['institution']}</ListItemText>
                </ListItem>
            </div>
            ) 
            : <div>No education to display</div> }
             <Button 
                className={classes.button} 
                variant="contained" 
                color="primary" 
                type="button" 
                onClick={handleOpen}
                >
                Add New Education
            </Button>     
        </List>
        <Modal 
        className={classes.modal} 
        aria-labelledby="add-education"
        aria-describedby="add-education-modal"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
        timeout: 300,
        }}>
        <Fade in={open}>
            <Paper className={`${classes.modal}`}>
                <EducationModalContent handleUpdate={handleEducationUpdate}/>    
            </Paper>
        </Fade>
    </Modal>
    </div>
    )
}
export default EducationSidebar;