import React, {useState} from 'react';
import Home from './components/Home';
import Main from './components/Main';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import './App.css';

function App() {
  const theme = createMuiTheme({
    typography: {
        fontFamily: [
            'Nunito Sans',
            'sans-serif'
        ].join(','),
        h6: {
          fontWeight: 600
        },
        body1: {
          fontWeight: 400
        },
        subtitle1: {
          fontStyle: 'italic'
        }
    },
    palette: {
      secondary: {
        main: 
      }
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
