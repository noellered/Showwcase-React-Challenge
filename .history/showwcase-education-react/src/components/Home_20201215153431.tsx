import React, { useState, FunctionComponent } from 'react';

const Home:FunctionComponent<{setName?: any}> = ({setName}) => {

    const [userInput, setUserInput] = useState('')

    const handleSubmit = (e: any) => {
        e.preventDefault();
        setName(userInput);
      };

    return(
        <div>
            <p>Hi there! Welcome to your education showcase.</h1>
            <p>Type your name and click "Enter" below to begin!</p>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Your name" onChange={(e) => setUserInput(e.target.value)} required />
                <button type="submit">Enter</button>
            </form>
        </div>
    )

}

export default Home;