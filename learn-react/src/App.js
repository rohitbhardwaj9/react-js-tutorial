import logo from './logo.svg';
import './App.css';
import User from './User';
import { useState } from 'react';

function App() {

  function Apple(){
    alert("Function Called");
  }

  return (
 <div className="App">
      <h1>Hello world!</h1>
      {/* we can pass a function to event like this too */}
      <button onClick={()=> Apple() }>Click me!</button>
      {/* Now, this will exact react what we want */}
      <User/>
    </div>
  );
}

export default App;
