import React from 'react';
import Greeting from "./Greeting"
import './App.css';

function App() {
  return (
    <div className="App">
      <Greeting isLoggedIn = 'true'/>
    </div>
  );
}

export default App;
