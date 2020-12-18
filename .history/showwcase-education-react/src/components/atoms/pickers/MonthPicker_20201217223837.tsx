import React, { FunctionComponent, useState } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';

interface MonthPickerProps {
    label?: string;
    id?: string;
    onChange?: any;
    className?: string;
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

const MonthPicker:FunctionComponent<MonthPickerProps> = ({ label, id, className, onChange }) => {
    const [month, setMonth] = useState(new Date().getMonth())

   const handleChange = (e: any) => {
        e.preventDefault();
        setMonth(e.target.value);
   }

   useEffect(())

    return (
        <div>
            <FormControl>
                <TextField select helperText={label} id={id} value={month} onChange={handleChange} className={className} variant="outlined" required>
                { months.map((month) => <MenuItem value={month.id}>{month.name}</MenuItem>)}
                </TextField>
            </FormControl>
        </div>
    )
}

export default MonthPicker;