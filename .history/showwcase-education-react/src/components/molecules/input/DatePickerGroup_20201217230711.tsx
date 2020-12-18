import React, { FunctionComponent, useEffect, useState } from 'react';
import { Grid, Typography } from '@material-ui/core';
import MonthPicker from './../../atoms/pickers/MonthPicker';
import YearPicker from './../../atoms/pickers/YearPicker';
import { useStyles } from './styles';


/* 
DATE PICKER GROUP
Contains Month and Year Picker as a group
Accepts label (start/end date)

*/

interface DatePickerGroupProps {
    label: string,
    onChange: any
}

const DatePickerGroup:FunctionComponent<DatePickerGroupProps> = ({ label, onChange }) => {
    const classes = useStyles();
    const [state, setState] = useState<object>({
        month: new Date().getMonth(),
        year: new Date().getFullYear()
    })

    const handleMonthChange = (month) => {
        setState({...state, month})
    }

    const handleYearChange = (year) => {
        setState({...state, year})
    }

    useEffect(() => {
        return onChange(state)
    })

    return(
        <Grid item>
            <Typography variant="body1" className={classes.label}>{label}</Typography>
            <div className={classes.inputGroup}>
                <MonthPicker className={`${classes.input} ${classes.mr}`} id={`${label}Month`} onChange={handleMonthChange}/>
                <YearPicker className={`${classes.input} ${classes.mr}`} id={`${label}Year`} onChange={handleYearChange}/>
            </div>
        </Grid>
    )
}
export default DatePickerGroup;