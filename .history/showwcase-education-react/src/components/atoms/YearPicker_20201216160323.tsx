import React, { FunctionComponent, useMemo, useState, useEffect } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

interface YearPickerProps {
    label?: string;
    id?: string;
}


const years:number[] = []
//create year list
for(let y = (new Date().getFullYear() + 25); y >= 1950; y--){
    years.push(y)
}

const YearPicker:FunctionComponent<YearPickerProps> = ({ label, id }) => {
    const [year, setYear] = useState('')

   const handleChange = (e: any) => {
        e.preventDefault();
        setYear(e.target.value);
   }

    return (
        <div>
            <FormControl>
                <InputLabel id="year-picker">{label}</InputLabel>
                <Select labelId={label} id={id} value={year} onChange={handleChange}>
                { years.map((year) => <MenuItem value={year}>{year}</MenuItem>)}
                </Select>
            </FormControl>
        </div>
    )
}

export default YearPicker;