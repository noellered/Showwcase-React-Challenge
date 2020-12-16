import React, { useEffect, useState } from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';


const EducationModal = () => {

    const [institutionList, setInstitutionList] = useState<string[]>([])

    const getInstitutions = () => {
        fetch(`http://universities.hipolabs.com/search`)
        .then((res: any) => res.json()
        .then((JSON) => setInstitutionList(JSON)));
    }

    const OPTIONS = institutionList.map
    
    useEffect( () => {
        getInstitutions()
    }, []);


    console.log(institutionList)
    return(
        <div>Modal
            <Autocomplete 
            id="institutions-list" 
            options={institutionList.map((option) => option)} 
            freeSolo 
            renderInput={(params)=>(
                <TextField {...params} label="Institution" margin="normal" variant="outlined" />
            )}/>
        </div>
    )
}
export default EducationModal;