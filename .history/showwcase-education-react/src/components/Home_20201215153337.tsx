import React, { useState, FunctionComponent } from 'react';

const Home:FunctionComponent<{setName?: any}> = ({setName}) => {

    const [userInput, setUserInput] = useState('')

    const handleSubmit = (e: any) => {
        e.preventDefault();
        setName(userInput);
      };

    return(
        <div>
            <h1>Hi there! Welcome to your education showcase.</h1>
            <form onSubmit={handleSubmit}>
                <label>Type your name and click "Enter" below to begin!</label>
                <input type="text" placeholder="Your name" required onChange={(e) => setUserInput(e.target.value)} />
                <button type="submit">Enter</button>
            </form>
        </div>
    )

}

export default Home;