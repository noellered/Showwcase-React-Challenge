import React, { useEffect, useState } from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';

const EducationModal = () => {

    const [institutionList, setInstitutionList] = useState([])
    // useEffect( async () => {
        
    // });

    return(
        <div>Modal
            <Autocomplete id="institutions-list" freeSolo options={institutionList.map((option) => option.)}/>
        </div>
    )
}
export default EducationModal;