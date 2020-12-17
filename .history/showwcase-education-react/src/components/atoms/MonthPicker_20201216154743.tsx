import React, { FunctionComponent, useMemo, useState, useEffect } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

interface MonthPickerProps {
    label?: string;
}

const months = [
    { id: 0, name: 'January' },
    { id: 1, name: 'February' },
    { id: 2, name: 'March' },
    { id: 3, name: 'April' },
    { id: 4, name: 'May' },
    { id: 5, name: 'June' },
    { id: 6, name: 'July' },
    { id: 7, name: 'August' },
    { id: 8, name: 'September' },
    { id: 9, name: 'October' },
    { id: 10, name: 'November' },
    { id: 11, name: 'December' },
];

const years:number[] = []
//create year list
for(let y = 1950; y <= (new Date().getFullYear() + 25); y++){
    years.push(y)
}
console.log(years)

const MonthPicker:FunctionComponent<MonthPickerProps> = ({ label }) => {
    const [month, setMonth] = useState('')

   const handleChange = (e: any) => {
        e.preventDefault();
        setMonth(e.target.value);
   }

    return (
        <div>
            <FormControl>
                <InputLabel id="demo-simple-select-label">{label}</InputLabel>
                <Select labelId={label} id={label} value={month} onChange={handleChange}>
                { months.map((month) => <MenuItem value={month.id}>{month.name}</MenuItem>)}
                </Select>
            </FormControl>
        </div>
    )
}

export default MonthPicker;