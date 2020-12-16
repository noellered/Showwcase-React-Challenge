import React, { useEffect, useState } from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import axios from 'axios';

const EducationModal = () => {

    const [institutionList, setInstitutionList] = useState([]])

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
            <Autocomplete id="institutions-list" options={institutionList.map((option) => option.name)} renderInput={}/>
        </div>
    )
}
export default EducationModal;