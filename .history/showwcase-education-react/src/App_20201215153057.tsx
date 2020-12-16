import React from 'react';
import logo from './logo.svg';
import Home from './components/Home';
import Main from './components/Main'
import './App.css';

function App() {
  const [name, setName] = useState('')
  return (
    <div className="App">
      {name ? (<Main name={name} /> ) : ( <Home setName={setName} /> )}
    </div>
  );
}

export default App;
