import React, { FunctionComponent, useEffect, useState } from 'react';
import Autocomplete, { AutocompleteRenderGroupParams } from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ListSubheader from '@material-ui/core/ListSubheader';
import Typography from '@material-ui/core/Typography';
import MonthPicker from '../../atoms/pickers/MonthPicker';
import YearPicker from '../../atoms/pickers/YearPicker';
import { useStyles } from '../education/styles';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import VirtualizedList from '../../molecules/input/VirtualizedList';
import DatePickerGroup from '../../molecules/input/DatePickerGroup';

//Add Education Modal Content
const EducationModalContent:FunctionComponent<{handleUpdate: any }>= ({ handleUpdate }) => {
    const classes = useStyles();
    const [institution, setInstitution] = useState<string>('');
    const [degree, setDegree] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [fieldOfStudy, setFieldOfStudy] = useState<string>('');
    const [current, setCurrent] = useState<boolean>(false);
    const [start, setStart] = useState<{month: number, year: number}>({
        month: new Date().getMonth(),
        year: new Date().getFullYear()
    });
    const [end, setEnd] = useState({
        month: new Date().getMonth(),
        year: new Date().getFullYear()
    });

  
    //Handle form submit
    const handleSubmit = (e: any) => {
        e.preventDefault();
        const newEducation = { institution, fieldOfStudy, degree, start, end, description, current }
        return handleUpdate(newEducation);
    }

    //Handle institution change for autocomplete component
    const handleInputChange = (val: string) => {
        setInstitution(val)
    }

    //Handle current education switch
    const handleSwitch = (e: React.ChangeEvent<HTMLInputElement>) => {
      setCurrent(e.target.checked);
    }

    //Handle start 
    const handleStartChange = (val) => {
        setStart(val)
    }

    const handleEndChange = (val) => {
        setEnd(val)
    }

    return(
        <div className={classes.modalContent}>
            <Typography variant="h6" color="primary">Add New Education</Typography>
            <form onSubmit={handleSubmit}>
                <VirtualizedList handleSelect={handleInputChange}/>
                <div className={classes.inputGroup}>
                  <TextField className={`${classes.input} ${classes.mr}`} label="Degree Level"  helperText="ex) Bachelor's, Master's, etc." variant="outlined" onChange={(e)=> setDegree(e.target.value)} required/>
                  <TextField className={classes.input} label="Field of Study" variant="outlined"  onChange={(e)=> setFieldOfStudy(e.target.value)} required/>
                </div>


                <Grid container lg={12}>
                  <DatePickerGroup type="Start" onChange={handleStartChange}/>
                  <DatePickerGroup type="End" onChange={handleEndChange}/>
                </Grid>

                <TextField className={classes.input} multiline fullWidth rows={3}  variant="outlined" label="Description" onChange={(e)=> setDescription(e.target.value)}/>

                <div className={classes.inputGroup}>
                <FormControlLabel
                      control={<Switch checked={current} onChange={handleSwitch} name="current" color="secondary"/>}
                      label="Current"
                />
                </div>
              
                <Button variant="contained" className={classes.button} color="primary" type="submit" >Save</Button>
            </form>
        </div>
    )
}
export default EducationModalContent;