import React, { FunctionComponent, useState } from 'react';
import { Grid, Typography } from '@material-ui/core';
import MonthPicker from './../../atoms/pickers/MonthPicker';
import YearPicker from './../../atoms/pickers/YearPicker';


interface DatePickerGroupProps = {
}

const DatePickerGroup:FunctionComponent<DatePickerGroupProps> = ({ type, handleChange }) => {
    const [state, setState] = useState<object>({
        month: '',
        year: ''
    })

    return(
        <Grid item>
        <Typography variant="body1" className={classes.label}>Start</Typography>
        <div className={classes.inputGroup}>
            <MonthPicker className={`${classes.input} ${classes.mr}`} id={`${type}Month`} onChange={(e)=> setState({...state, month: e.target.value})}/>
            <YearPicker className={`${classes.input} ${classes.mr}`} id={`${type}Year`} onChange={(e)=> setState({...state, year: e.target.value})}/>
        </div>
        </Grid>
    )
}
export default DatePickerGroup;