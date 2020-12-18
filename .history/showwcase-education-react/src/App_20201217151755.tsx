import React, {useState} from 'react';
import Home from './components/Home';
import Main from './components/Main';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import './App.css';

function App() {
  const theme = createMuiTheme({
    typography: {
        fontFamily: [
            'Poppins',
            'sans-serif'
        ].join(',')
    }
  }) 
  const [name, setName] = useState('John Lastname')

  return (
    <MuiThemeProvider theme={theme}>
      <div className="App">
        { name ? <Main name={name} /> : <Home setName={setName} /> }
      </div>
    </MuiThemeProvider>

  );
}

export default App;
