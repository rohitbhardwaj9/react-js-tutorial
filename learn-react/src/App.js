import logo from './logo.svg';
import './App.css';
import User from './User';
import { useState } from 'react';

function App() {

  const [data, setData] = useState(0);

  function updateData(){
    setData(data+1);
  }

  return (
 <div className="App">
      <h1>{data}</h1>
      <button onClick={()=> updateData() }>Click me!</button>
      <User/>
    </div>
  );
}

export default App;
