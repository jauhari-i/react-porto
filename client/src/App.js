import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {Link} from 'react-router-dom'
import Main from './Components/Main'
import Navbar from './Components/Navbar'

function App() {
  return (
    <div className="App">
          <Navbar />
          <Main />
    </div>
  );
}

export default App;
