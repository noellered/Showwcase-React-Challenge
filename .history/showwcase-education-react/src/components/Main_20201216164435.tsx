import React, {FunctionComponent, useState} from 'react';
import EducationSidebar from './education/EducationSidebar';
import EducationList from './education/EducationList';
import EducationModalContent from './education/EducationModalContent';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const Main:FunctionComponent<{name: string}> = ({name}) => {
    const [open, setOpen] = useState(false)
    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    return(
        <div>
            <h4>Welcome to {name}'s education page.</h4>
            <button type="button" onClick={handleOpen}>Add New Education</button>
            <Modal aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                timeout: 500,
                }}>
                <Fade in={open}>
                    <div>

                    </div>
                    
                </Fade>
            </Modal>
            <EducationSidebar/> 
            <EducationList/>
           
        </div>
    )
}

export default Main;