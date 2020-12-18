import React, { FunctionComponent } from 'react';
import { Container }from '@material-ui/core';
import InfoCard from '../../molecules/education/InfoCard';

/* 
EDUCATION LIST
Renders a detailed list of all education experiences
*/

const EducationList:FunctionComponent<{list: object[]}> = ({ list }) => {
    return(
        <Container>
            { list.length > 0 ? list.map((item) => 
            <InfoCard item={item} />) : <div>No education to display</div> }
        </Container>
    )
}
export default EducationList;