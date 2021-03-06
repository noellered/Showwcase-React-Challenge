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
        <Grid container alignContent="center" alignItems="center" xs={12} spacing={2}>
            <Grid item xs={12}>
                <Typography variant="h6" color="primary" gutterBottom>Hi there! Welcome to your education showcase.</Typography>
                <Typography variant="body1" >Type your name and click "Enter" below to begin!</Typography>
            </Grid>
            <Grid container spacing={2} xs={12}>
                <form onSubmit={handleSubmit}>
                    <Grid item>
                        <TextField placeholder="Your name" variant="outlined" onChange={(e) => setUserInput(e.target.value)} required />
                    </Grid>
                    <Grid item>
                    <Button className={classes.button} size="large" variant="contained" color="primary" type="submit">Enter</Button>
                    </Grid>
                </form>
            </Grid>
           <Grid item xs={12}>
           </Grid>
        </Grid>
    )

}

export default Home;