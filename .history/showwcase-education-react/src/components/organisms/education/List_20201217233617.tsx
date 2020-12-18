import React, { FunctionComponent } from 'react';
import { Card, Typography, Container }from '@material-ui/core';
import InfoCard from '../../molecules/InfoCard';
import { useStyles } from './styles';





const EducationList:FunctionComponent<{list: object[]}> = ({ list }) => {
    const classes = useStyles();
    return(
        <Container>
            { list.length > 0 ? list.map((item) => 
            <InfoCard></InfoCard>) : <div>Nothing to display</div> }
        </Container>
    )
}
export default EducationList;