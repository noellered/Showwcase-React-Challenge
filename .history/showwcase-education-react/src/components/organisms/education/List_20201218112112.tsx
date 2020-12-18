import React, { FunctionComponent } from 'react';
import { Container, Typography, Button }from '@material-ui/core';
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
            <>
                <Typography variant="h6" color="textPrimary">
                    You haven't added any education yet.
                </Typography>
                <Button variant="outlined" color="primary" onClick={handleClick}>
                    Add New Education
                </Button>
            </> }
        </Container>
    )
}
export default EducationList;