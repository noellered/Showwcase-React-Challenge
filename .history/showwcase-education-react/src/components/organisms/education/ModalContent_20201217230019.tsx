import React, { FunctionComponent, useState } from 'react';
import { TextField, Button, Typography, Switch, FormControlLabel, Grid } from '@material-ui/core';
import { useStyles } from '../education/styles';
import VirtualizedList from '../../molecules/input/VirtualizedList';
import DatePickerGroup from '../../molecules/input/DatePickerGroup';

/* 
  Education Modal
  --------
  Contains form for creating new education experience
*/

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

    //Handle start month and year change
    const handleStartChange = (val) => {
        setStart(val)
    }

    //Handle end month and year change
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