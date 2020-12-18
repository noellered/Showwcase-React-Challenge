import React, {useState} from 'react';
import Home from './components/Home';
import Main from './components/Main';
import { MuiThemeProvider } from '@material-ui/core/styles'
import './App.css';

function App() {

  const [name, setName] = useState('John Lastname')

  return (
    <div className="App">
      { name ? <Main name={name} /> : <Home setName={setName} /> }
    </div>
  );
}

export default App;
