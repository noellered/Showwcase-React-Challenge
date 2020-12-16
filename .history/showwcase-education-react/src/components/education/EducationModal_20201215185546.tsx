import React, { useEffect, useState } from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import { VariableSizeList } from 'react-window';


//Virtualize Institutions List

const LISTBOX_PADDING = 8; // px

function renderRow(props) {
  const { data, index, style } = props;
  return React.cloneElement(data[index], {
    style: {
      ...style,
      top: style.top + LISTBOX_PADDING,
    },
  });
}


const EducationModal = () => {

    const [institutionList, setInstitutionList] = useState<string[]>([])

    const getInstitutions = () => {
        fetch(`http://universities.hipolabs.com/search`)
        .then((res: any) => res.json()
        .then((JSON) => setInstitutionList(JSON.map((item)=>item['name']))));
    }

    useEffect( () => {
        getInstitutions()
    }, []);

    const OPTIONS = institutionList


    console.log(institutionList)
    return(
        <div>Modal
            <Autocomplete 
            id="institutions-list" 
            options={OPTIONS} 
            freeSolo 
            renderInput={(params)=>(
                <TextField {...params} label="Institution" margin="normal" variant="outlined" />
            )}/>
        </div>
    )
}
export default EducationModal;