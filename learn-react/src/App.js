import logo from './logo.svg';
import './App.css';
import User from './User';
import { useState } from 'react';

function App() {

  // function Apple(){
  //   alert("Function Called");
  // }

  return (
 <div className="App">
      <h1>Hello world!</h1>
      {/* What if we pass alert in onclick event */}
      <button onClick={alert("Loaded")}>Click me!</button>
      {/* This will also alert automatically on page load, no required to onClick event */}
      <User/>
    </div>
  );
}

export default App;
