import React, {useState} from 'react';
import Home from './components/Home';
import Main from './components/Main';
import { useTheme } from './theme';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import './App.css';

function App() {
  const useTheme = createMuiTheme({
    typography: {
        fontFamily: [
            'Poppins',
            'sans-serif'
        ].join(',')
    }
  }) 
  const [name, setName] = useState('John Lastname')

  return (
    <MuiThemeProvider theme={colortheme}>
      <div className="App">
        { name ? <Main name={name} /> : <Home setName={setName} /> }
      </div>
    </MuiThemeProvider>

  );
}

export default App;
