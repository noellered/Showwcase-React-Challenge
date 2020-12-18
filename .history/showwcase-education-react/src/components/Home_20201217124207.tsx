import React, { useState, FunctionComponent } from 'react';
import { StyledButton } from './pageStyles';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

const Home:FunctionComponent<{setName?: any}> = ({setName}) => {

    const [userInput, setUserInput] = useState('')

    const handleSubmit = (e: any) => {
        e.preventDefault();
        setName(userInput);
      };

    return(
        <Container maxWidth="md">
            <Typography variant="h4" gutterBottom>Hi there! Welcome to your education showcase.</Typography>
            <p>Type your name and click "Enter" below to begin!</p>
            <form onSubmit={handleSubmit}>
                <TextField placeholder="Your name" onChange={(e) => setUserInput(e.target.value)} required />
                <StyledButton type="submit">Enter</StyledButton>
            </form>
        </Container>
    )

}

export default Home;