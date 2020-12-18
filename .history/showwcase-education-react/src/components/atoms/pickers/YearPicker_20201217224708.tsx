import React, { FunctionComponent, useState } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';

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

const YearPicker:FunctionComponent<YearPickerProps> = React.memo(({ label, id, className, onChange }) => {
    const [year, setYear] = useState(new Date().getFullYear())

   const handleChange = (e: any) => {
        e.preventDefault();
        setYear(e.target.value);
        return onChange(e.target.value);
   }

    return (
        <div>
            <FormControl>
                <TextField select  helperText={label} id={id} value={year} onChange={handleChange} className={className} variant="outlined" required>
                { years.map((year) => <MenuItem value={year}>{year}</MenuItem>)}
                </TextField>
            </FormControl>
        </div>
    )
})

export default YearPicker;