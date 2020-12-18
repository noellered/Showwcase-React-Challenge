import React, { FunctionComponent } from 'react';
import { Container, Typography, Button, Grid }from '@material-ui/core';
import InfoCard from '../../molecules/education/InfoCard';

/* 
EDUCATION LIST
Renders a detailed list of all education experiences

*/

const EducationList:FunctionComponent<{list: object[], button: any}> = ({ list, button }) => {

    const handleClick = () => {
        button()
    }

    return(
        <Container>
            { list.length > 0 ? list.map((item) => 
            <InfoCard item={item} />) : 
            <Grid className={classes.center} container>
                <Grid item lg={12}>
                    <Typography variant="h6" color="textPrimary">
                        You haven't added any education yet.
                    </Typography>
                </Grid>
                <Grid item lg={12}>
                    <Button variant="outlined" color="primary" onClick={handleClick}>
                        Add New Education
                    </Button>
                </Grid>
            </Grid> }
        </Container>
    )
}
export default EducationList;