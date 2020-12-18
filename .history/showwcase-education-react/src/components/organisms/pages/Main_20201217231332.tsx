import React, {FunctionComponent, useState} from 'react';
import EducationSidebar from '../../molecules/education/SideBar';
import EducationList from '../education/List';
import EducationModalContent from '../education/ModalContent';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { pageStyles } from './pageStyles';
import Typography from '@material-ui/core/Typography';

/* 
MAIN EDUCATION PAGE
Contains Sidebar panel of educational institutions
Contains main List area with detailed education information cards

*/

const Main:FunctionComponent<{name: string}> = ({name}) => {
    const classes = pageStyles();
    const [open, setOpen] = useState<boolean>(false);
    const [education, setEducation] = useState<object[]>([
        {
            id: 0,
            degree: "MFA.",
            description: "",
            end: {month: 11, year: 2020},
            fieldOfStudy: "Being Cool",
            institution: "Triton University",
            start: {month: 11, year: 2020},
            current: true
        },
        {
            id: 1,
            degree: "M.Sc.",
            description: "",
            end: {month: 11, year: 2020},
            fieldOfStudy: "Biology of Aliens",
            institution: "Roswell University",
            start: {month: 11, year: 2020},
            current: false
        },
        {   
            id: 2,
            degree: "B.S.",
            description: "I learned things, and stuff. Then I learned how to be a pirate. Arrrr, matey.",
            end: {month: 11, year: 2020},
            fieldOfStudy: "Pirate Studies",
            institution: "Somalia University",
            start: {month: 11, year: 2020},
            current: false
        },
        {
            id: 3,
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

    const handleEducationUpdate = (newEducation) => {
        setEducation(education => [newEducation, ...education]) //prepend new education item to education list
        handleClose();
    }

    return(
        <Container>
            <Typography className={classes.header} variant="h6" color="textPrimary">Welcome to {name}'s education page.</Typography>
            <Button 
                className={classes.button} 
                variant="contained" 
                color="primary" 
                type="button" 
                onClick={handleOpen}
                >
                Add New Education
            </Button>            
            <Grid container className={classes.container}>
                <Grid item xs={12} lg={3}>
                    <Paper className={classes.paper}>
                        <EducationSidebar list={education}/> 
                    </Paper>
                </Grid>
                <Grid item xs={12} lg={9}>
                    <Paper className={classes.paper}>
                        <EducationList list={education}/>
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
                    <Paper className={`${classes.modal}`}>
                        <EducationModalContent handleUpdate={handleEducationUpdate}/>    
                    </Paper>
                </Fade>
            </Modal>
        </Container>
    )
}

export default Main;