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
    const [education, setEducation] = useState<object[]>([
        {
            gpa: 3.8,
            degree: "MFA.",
            description: "",
            end: {month: 11, year: 2020},
            fieldOfStudy: "Being Cool",
            institution: "Triton University",
            start: {month: 11, year: 2020},
            current: true
        },
        {
            gpa: 4.0,
            degree: "M.Sc.",
            description: "",
            end: {month: 11, year: 2020},
            fieldOfStudy: "Biology of Aliens",
            institution: "Roswell University",
            start: {month: 11, year: 2020},
            current: false
        },
        {   
            gpa: 3.75,
            degree: "B.S.",
            description: "I learned things, and stuff. Then I learned how to be a pirate. Arrrr, matey.",
            end: {month: 11, year: 2020},
            fieldOfStudy: "Pirate Studies",
            institution: "Somalia University",
            start: {month: 11, year: 2020},
            current: false
        },
        {
            gpa: 3.5,
            degree: "B.A.",
            description: "",
            end: {month: 11, year: 2020},
            fieldOfStudy: "Home Economics",
            institution: "University of Bakersfield",
            start: {month: 11, year: 2020},
            current: false
        },
    ]);
    

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
            <Grid container alignI>
                <Grid item xs={12}>
                    <Typography className={classes.header} variant="h6" color="textPrimary">Welcome to {name}'s education page.</Typography>
                </Grid>
                <Grid item>
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
                </Grid>  
            </Grid>         
            <Grid container className={classes.container}>
                <Grid item xs={12} lg={3}>
                    <Paper className={classes.paper}>
                        <EducationSidebar list={education} buttonHandler={handleOpen}/> 
                    </Paper>
                </Grid>
                <Grid item xs={12} lg={9}>
                    <Paper className={classes.paper}>
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
                    <Paper className={`${classes.modalPaper}`}>
                        <EducationModalContent handleUpdate={handleEducationUpdate}/>    
                    </Paper>
                </Fade>
            </Modal>
        </Container>
    )
}

export default Main;