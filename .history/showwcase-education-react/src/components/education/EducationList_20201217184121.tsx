import React, { FunctionComponent, useState } from 'react';
import Card from '@material-ui/core/Card';
import { useStyles } from './styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Modal, Paper, Fade } from '@material-ui/core';
import EducationModalContent from './EducationModalContent';

const EducationList:FunctionComponent<{list: object[]}> = ({ list }) => {
    const [open, setOpen] = useState<boolean>(false)
    const classes = useStyles();

    const handleOpen = () => {
        setOpen(true);
    }
    
    const handleClose = () => {
        setOpen(false);
    }

    return(
        <Container>
            { list.length > 0 ? list.map((item) => 
            <Card className={classes.educationCard}>
                <Typography align="justify" variant="h6" color="textPrimary">
                    {item['degree']} {item['fieldOfStudy']} @ {item['institution']}
                </Typography>
                <Typography variant="subtitle1" align="justify" color="textSecondary" gutterBottom>
                
                Month {item['start']['year']} - {item['current'] ? 'Present' : item['end']['year']}
                </Typography>
                <Typography variant="body1" align="justify">
                    {item['description']}
                </Typography>
            </Card>) : <div>Nothing to display</div> }
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
export default EducationList;