import React, { useState, FunctionComponent } from 'react';
import { pageStyles } from './pageStyles';
import { Container, TextField, Button, Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography';

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
        <Container maxWidth="md">
            <Typography variant="h5" gutterBottom>Hi there! Welcome to your education showcase.</Typography>
            <Typography variant="body1" gutterBottom>Type your name and click "Enter" below to begin!</Typography>
            <form onSubmit={handleSubmit}>
                <TextField placeholder="Your name" onChange={(e) => setUserInput(e.target.value)} required />
                <Button className={classes.button} type="submit">Enter</Button>
            </form>
        </Container>
    )

}

export default Home;