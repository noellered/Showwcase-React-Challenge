import React, { useEffect, useState } from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';

const EducationModal = () => {

    const [institutionList, setInstitutionList] = useState([])
    useEffect( async () => {
        
    },);

    return(
        <div>Modal
            <Autocomplete id="institutions-list" options={institutionList.map((option) => option.name)} freeSolo />
        </div>
    )
}
export default EducationModal;