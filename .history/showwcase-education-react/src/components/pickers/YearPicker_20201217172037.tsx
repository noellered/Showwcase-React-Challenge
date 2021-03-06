import React, { FunctionComponent, useState } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

interface YearPickerProps {
    label?: string;
    id?: string;
    onChange?: any;
    className?: string;
}

const years:number[] = []

//Create year list
for(let y = (new Date().getFullYear() + 10); y >= 1950; y--){
    years.push(y)
}

const YearPicker:FunctionComponent<YearPickerProps> = React.memo(({ label, id, className }) => {
    const [year, setYear] = useState(new Date().getFullYear())

   const handleChange = (e: any) => {
        e.preventDefault();
        setYear(e.target.value);
   }

    return (
        <div>
            <FormControl>
                <InputLabel>{label}</InputLabel>
                <Select labelId={label} id={id} value={year} onChange={handleChange} className={className} frequired>
                { years.map((year) => <MenuItem value={year}>{year}</MenuItem>)}
                </Select>
            </FormControl>
        </div>
    )
})

export default YearPicker;