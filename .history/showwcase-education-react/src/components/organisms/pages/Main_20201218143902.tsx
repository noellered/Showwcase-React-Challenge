import React, {FunctionComponent, useState} from 'react';
import EducationSidebar from '../../molecules/education/SideBar';
import EducationList from '../education/List';
import EducationModalContent from '../education/ModalContent';
import { Modal, Backdrop, Fade, Paper, Grid, Container, Button, Typography } from '@material-ui/core';
import { pageStyles } from './pageStyles';

/* 
MAIN EDUCATION PAGE
Contains Sidebar panel of educational institutions
Contains main List area with detailed education information cards
Allows user to open modal to create new education
Holds list of all education experience and adds new education experience to beginning of list (reverse chronological order)
*/

const Main:FunctionComponent<{name: string}> = ({name}) => {
    const classes = pageStyles();
    const [open, setOpen] = useState<boolean>(false);
    const [education, setEducation] = useState<object[]>([]);
    

    //Modal handlers
    const handleOpen = () => {
        setOpen(true);
    }
    
    const handleClose = () => {
        setOpen(false);
    }

    //Handle when new education created
    const handleEducationUpdate = (newEducation) => {
        setEducation(education => [newEducation, ...education]) //prepend new education item to education list
        handleClose();
    }


    return(
        <Container>
            <Grid container alignContent="center" className={classes.header} spacing={1}>
                <Grid item xs={12}>
                    <Typography variant="h6" color="textPrimary">Welcome to {name}'s education page.</Typography>
                </Grid>
                {education !== '[]' ? 
                 <Grid item xs={12}>
                 <Button 
                     className={classes.button} 
                     variant="contained" 
                     color="primary" 
                     type="button" 
                     size="small"
                     onClick={handleOpen}
                     >
                     Add New Education
                 </Button> 
             </Grid>  :
             }
               
            </Grid>         
            <Grid container className={classes.container} spacing={2}>
                <Grid item xs={12} lg={3}>
                    <Paper className={`${classes.paper} ${classes.sideBar}`} variant="outlined">
                        <EducationSidebar list={education} buttonHandler={handleOpen}/> 
                    </Paper>
                </Grid>
                <Grid item xs={12} lg={9}>
                    <Paper className={classes.paper} variant="outlined">
                        <EducationList list={education} buttonHandler={handleOpen}/>
                    </Paper>
                </Grid>
            </Grid>
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
                    <Paper className={classes.modalPaper} variant="outlined">
                        <EducationModalContent handleUpdate={handleEducationUpdate}/>    
                    </Paper>
                </Fade>
            </Modal>
        </Container>
    )
}

export default Main;