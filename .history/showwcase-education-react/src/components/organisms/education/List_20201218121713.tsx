import React, { FunctionComponent } from 'react';
import { Container, Typography, Button, Grid }from '@material-ui/core';
import InfoCard from '../../molecules/education/InfoCard';
import { useStyles } from './styles';

/* 
EDUCATION LIST
Renders a detailed list of all education experiences

*/

const EducationList:FunctionComponent<{list: object[], buttonHandler: any}> = ({ list, buttonHandler }) => {
    const classes = useStyles()

    const handleClick = () => {
        buttonHandler()
    }

    return(
        <Container>
            { list.length > 0 ? list.map((item) => 
            <InfoCard item={item} />) : 
            <Container className={classes.container}>
                <Grid container>
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
                </Grid>
            </Container> }
        </Container>
    )
}
export default EducationList;