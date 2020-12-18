import React, { FunctionComponent } from 'react';
import { Grid, Typography } from '@material-ui/core';
import MonthPicker from './../../atoms/pickers/MonthPicker';
import YearPicker from './../../atoms/pickers/YearPicker';


interface DatePickerGroupProps = {
    classes?:
}

const DatePickerGroup:FunctionComponent<DatePickerGroupProps> = ({ classes, }) => {

    return(
        <Grid item>
        <Typography variant="body1" className={classes.label}>Start</Typography>
        <div className={classes.inputGroup}>
            <MonthPicker className={`${classes.input} ${classes.mr}`} id="startMonth" onChange={(e)=> setStart({...start, month: e.target.value})}/>
            <YearPicker className={`${classes.input} ${classes.mr}`} id="startYear" onChange={(e)=> setStart({...start, year: e.target.value})}/>
        </div>
        </Grid>
    )
}
export default DatePickerGroup;