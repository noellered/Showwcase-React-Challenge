import React, { FunctionComponent, useEffect, useState } from 'react';
import { Grid, Typography } from '@material-ui/core';
import MonthPicker from './../../atoms/pickers/MonthPicker';
import YearPicker from './../../atoms/pickers/YearPicker';


interface DatePickerGroupProps {
    type: string,
    onChange: any
}

const DatePickerGroup:FunctionComponent<DatePickerGroupProps> = ({ type, onChange }) => {
    const [state, setState] = useState<object>({
        month: new Date().getMonth(),
        year: new Date().getFullYear()
    })

    const handleMonthChange = (e) => {
        setState({...state, month: e.target.value})
    }

    const handleYearChange = (e) => {
        setState({...state, year: e.target.value})
    }

    useEffect(() => {

    }, [state])

    return(
        <Grid item>
            <Typography variant="body1" className={classes.label}>{type}</Typography>
            <div className={classes.inputGroup}>
                <MonthPicker className={`${classes.input} ${classes.mr}`} id={`${type}Month`} onChange={handleMonthChange}/>
                <YearPicker className={`${classes.input} ${classes.mr}`} id={`${type}Year`} onChange={handleYearChange}/>
            </div>
        </Grid>
    )
}
export default DatePickerGroup;