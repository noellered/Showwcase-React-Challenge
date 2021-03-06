import React, { useEffect, useState } from 'react';
import {Autocomplete, TextField }from '@material-ui/lab';

import axios from 'axios';

const EducationModal = () => {

    const [institutionList, setInstitutionList] = useState<string[]>([])

    const getInstitutions = () => {
        return fetch(`http://universities.hipolabs.com/search`)
        .then((res: any) => res.json()
        .then((JSON) => setInstitutionList(JSON)));
    }
    
    useEffect( () => {
        getInstitutions()
    }, []);



    return(
        <div>Modal
            <Autocomplete 
            id="institutions-list" 
            options={institutionList.map((option) => option)} 
            freeSolo 
            renderInput={(params)=>(
                <TextField {...params} label="freeSolo" margin="normal" variant="outlined" />
            )}/>
        </div>
    )
}
export default EducationModal;