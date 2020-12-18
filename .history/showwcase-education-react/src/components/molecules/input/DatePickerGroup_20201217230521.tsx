import React, { FunctionComponent, useEffect, useState } from 'react';
import { Grid, Typography } from '@material-ui/core';
import MonthPicker from './../../atoms/pickers/MonthPicker';
import YearPicker from './../../atoms/pickers/YearPicker';
import { useStyles } from './styles';


/* 
DATE PICKER GROUP
Fetches list of institutions
Renders large list in groups for better lookup and render performance
Sets institution name on selection
*/

interface DatePickerGroupProps {
    type: string,
    onChange: any
}

const DatePickerGroup:FunctionComponent<DatePickerGroupProps> = ({ type, onChange }) => {
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
            <Typography variant="body1" className={classes.label}>{type}</Typography>
            <div className={classes.inputGroup}>
                <MonthPicker className={`${classes.input} ${classes.mr}`} id={`${type}Month`} onChange={handleMonthChange}/>
                <YearPicker className={`${classes.input} ${classes.mr}`} id={`${type}Year`} onChange={handleYearChange}/>
            </div>
        </Grid>
    )
}
export default DatePickerGroup;