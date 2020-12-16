import React, { useState, FunctionComponent } from 'react';

const Home:FunctionComponent<{setName?: any}> = ({setName}) => {

    const [userInput, setUserInput] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        setName(userInput);
      };

    return(
        <div>
            <h1>Homepage</h1>
            <form onSubmit={handleSubmit}>
            <label>Type your name and click "Enter" below to begin!</label>
            <input type="text" name="name" required onChange={(event) => setUserInput(event.target.value)} />
            <input type="submit" value="Enter" />
            </form>
        </div>
    )

}

export default Home;