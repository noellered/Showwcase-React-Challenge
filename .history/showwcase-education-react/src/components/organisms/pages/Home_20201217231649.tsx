import React, { useState, FunctionComponent } from 'react';
import { pageStyles } from './pageStyles';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography';

/* 
HOME PAGE
Contains Sidebar panel of educational institutions
Contains main List area with detailed education information cards
Allows user to open modal to create new education
Holds list of all education experience and adds new education experience to beginning of list (reverse chronological order)
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