import React, { FunctionComponent } from 'react';
import { Container }from '@material-ui/core';
import InfoCard from '../../molecules/education/InfoCard';

/* 
INFO CARD
Creates a detailed information card for each education experience including:
Institution, Degree, Field of Study, Start and End Date, and a Description if any
*/

const EducationList:FunctionComponent<{list: object[]}> = ({ list }) => {
    return(
        <Container>
            { list.length > 0 ? list.map((item) => 
            <InfoCard item={item} />) : <div>Nothing to display</div> }
        </Container>
    )
}
export default EducationList;