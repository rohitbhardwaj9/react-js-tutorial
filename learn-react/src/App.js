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
      <button onClick={Apple()}>Click me!</button>
      {/* //This way usually we call a function */}
      {/* This will result an automatic pop alert on page load */}
      <User/>
    </div>
  );
}

export default App;
