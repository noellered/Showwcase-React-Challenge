import React, { useEffect, useState } from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import axios from 'axios';

const EducationModal = () => {

    const [institutionList, setInstitutionList] = useState([])

    useEffect( () => {
        const getInstitutions = async () => { await axios(`http://universities.hipolabs.com/search`); }
        const result = getInstitutions().then((res) => res.json);
        console.log(result)
    }, []);



    return(
        <div>Modal
            {/* <Autocomplete id="institutions-list" options={institutionList.map((option) => option)} /> */}
        </div>
    )
}
export default EducationModal;