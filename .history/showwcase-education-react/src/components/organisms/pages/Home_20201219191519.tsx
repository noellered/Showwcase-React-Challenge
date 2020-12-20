import React, { useState, FunctionComponent } from 'react';
import { pageStyles } from './pageStyles';
import { Box, TextField, Button, Typography, Grid } from '@material-ui/core';
import SchoolRoundedIcon from '@material-ui/icons/SchoolRounded';


/* 
HOME PAGE
Input asks user for name
If name is entered, renders Main page using user's name
*/

const Home:FunctionComponent<{setName?: (name) => void }> = ({setName}) => {
    const classes = pageStyles();
    const [userInput, setUserInput] = useState('')

    const handleSubmit = (e: any) => {
        e.preventDefault();
        setName(userInput);
      };

    return(
        <Box mt={10}>
            <Grid container alignContent="center" alignItems="center" xs={12} spacing={2}>
                <Grid item xs={12}>
                    <Typography variant="h6" color="primary" gutterBottom>Hi there! Welcome to your education showcase.</Typography>
                    <Typography variant="body1" >Type your name and click "Enter" below to begin!</Typography>
                </Grid>
                <Grid item xs={12}>
                <SchoolRoundedIcon color="action" fontSize="large"/> 

                </Grid>
        
                <Grid item xs={12}>
                    <form onSubmit={handleSubmit}>
                        <TextField placeholder="Your name" variant="outlined" onChange={(e) => setUserInput(e.target.value)} required />
                        <Box mt={2}>
                            <Button className={classes.button} size="large" variant="contained" color="primary" type="submit">Enter</Button>
                        </Box>
                    </form>
                </Grid>
            
            </Grid>
        </Box>
    )

}

export default Home;