import React, { useState, FunctionComponent } from 'react';
import { pageStyles } from './pageStyles';
import { Container, TextField, Button, Typography, Grid } from '@material-ui/core';
/* 
HOME PAGE
Input asks user for name
If name is entered, renders Main page using user's name
*/

const Home:FunctionComponent<{setName?: any}> = ({setName}) => {
    const classes = pageStyles();
    const [userInput, setUserInput] = useState('')

    const handleSubmit = (e: any) => {
        e.preventDefault();
        setName(userInput);
      };

    return(
        <Grid container alignContent="center" xs={12} spacing={2}>
            <Grid item xs={12}>
                <Typography variant="h6" color="primary" gutterBottom>Hi there! Welcome to your education showcase.</Typography>
            </Grid>
            <Grid item xs={12}>
            </Grid>
            <Grid item xs={12}>
                <form onSubmit={handleSubmit}>
                    <TextField placeholder="Your name" onChange={(e) => setUserInput(e.target.value)} required />
                </form>
            </Grid>
           <Grid item xs={12}>
               <Button className={classes.button} variant="contained" color="primary" type="submit">Enter</Button>
           </Grid>
        </Grid>
    )

}

export default Home;