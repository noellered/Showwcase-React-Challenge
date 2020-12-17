import React, { FunctionComponent, useMemo, useState, useEffect } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

interface MonthPickerProps {
    label?: string;
    error?: string;
    selected: Date | null;
    onChange?(date: Date): void;
    maxDate?: Date | null;
    minDate?: Date | null;
    disabled?: boolean;
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

const MonthPicker:FunctionComponent<MonthPickerProps> = ({ selected }) => {
    const [current, setCurrent] = useState({
        
    })

   

    return (
        <div>
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={month}
                onChange={handleChange}
                >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
        </div>
    )
}

export default MonthPicker;