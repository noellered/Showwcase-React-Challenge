import React, {FunctionComponent, useState} from 'react';
import EducationSidebar from './education/EducationSidebar';
import EducationList from './education/EducationList';
import EducationModalContent from './education/EducationModalContent';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import { pageStyles } from './pageStyles';



const Main:FunctionComponent<{name: string}> = ({name}) => {
    const [open, setOpen] = useState<boolean>(false)
    const [education, setEducation] = useState<object[]>([])

    const handleOpen = () => {
        setOpen(true);
    }
    
    const handleClose = () => {
        setOpen(false);
    }

    const handleEducationUpdate = (newEducation) => {
        setEducation(education.concat(newEducation))
        handleClose();
    }

    return(
        <Container>
            <h4>Welcome to {name}'s education page.</h4>
            <button type="button" onClick={handleOpen}>Add New Education</button>            
            <EducationSidebar list={education}/> 
            <EducationList list={education}/>
            <Modal aria-labelledby="add-education"
                aria-describedby="add-education-modal"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                timeout: 300,
                }}>
                <Fade in={open}>
                    <Paper>
                        <EducationModalContent handleUpdate={handleEducationUpdate}/>    
                    </Paper>
                </Fade>
            </Modal>
        </Container>
    )
}

export default Main;