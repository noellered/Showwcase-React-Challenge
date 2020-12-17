import React, { FunctionComponent, useState } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

interface MonthPickerProps {
    label?: string;
    id?: string;
    onChange?: 
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

const MonthPicker:FunctionComponent<MonthPickerProps> = ({ label, id }) => {
    const [month, setMonth] = useState(new Date().getMonth())

   const handleChange = (e: any) => {
        e.preventDefault();
        setMonth(e.target.value);
   }

    return (
        <div>
            <FormControl>
                <InputLabel>{label}</InputLabel>
                <Select labelId={label} id={id} value={month} onChange={handleChange} variant="outlined">
                { months.map((month) => <MenuItem value={month.id}>{month.name}</MenuItem>)}
                </Select>
            </FormControl>
        </div>
    )
}

export default MonthPicker;