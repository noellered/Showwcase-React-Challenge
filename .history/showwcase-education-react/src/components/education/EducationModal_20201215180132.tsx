import React, { useEffect, useState } from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import axios from 'axios';

const EducationModal = () => {

    const [institutionList, setInstitutionList] = useState([])
    useEffect( async() => {
        const result = await axios(`http://universities.hipolabs.com/`);
        console.log(result.data)
    }, []);

    return(
        <div>Modal
            <Autocomplete id="institutions-list" options={institutionList.map((option) => option.)} freeSolo />
        </div>
    )
}
export default EducationModal;