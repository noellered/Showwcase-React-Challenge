import React, { useState, FunctionComponent } from 'react';
import { StyledButton } from './pageStyles';
import Container from '@material-ui/core/Container';

const Home:FunctionComponent<{setName?: any}> = ({setName}) => {

    const [userInput, setUserInput] = useState('')

    const handleSubmit = (e: any) => {
        e.preventDefault();
        setName(userInput);
      };

    return(
        <Container maxWidth="md">
            <h4>Hi there! Welcome to your education showcase.</h4>
            <p>Type your name and click "Enter" below to begin!</p>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Your name" onChange={(e) => setUserInput(e.target.value)} required />
                <StyledButton type="submit">Enter</StyledButton>
            </form>
        </Container>
    )

}

export default Home;