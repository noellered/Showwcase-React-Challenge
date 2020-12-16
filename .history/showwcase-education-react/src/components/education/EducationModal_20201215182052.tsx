import React, { useEffect, useState } from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';

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
            renderInput={(params: string)=>(
                <TextField {...params} label="Institution" margin="normal" variant="outlined" />
            )}/>
        </div>
    )
}
export default EducationModal;