import logo from './logo.svg';
import './App.css';
import User from './User';
import { useState } from 'react';

function App() {

  const [data, setData] = useState("Rohit");

  function updateData(){
    setData("Bhardwaj");
  }


  return (
    //here we are expecting to change data value from Rohit to Bhardwaj on button click
    
    <div className="App">
      <h1>{data}</h1>
      <button onClick={updateData}>Click me!</button>
      <User/>
    </div>
  );
}

export default App;
