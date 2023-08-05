import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  function Apple(){
    return(
      <div>
        <h3>Component within component</h3>
      </div>
    );
  }
  return (
    <div className="App">
      <h1>Hello World !</h1>
      <User></User>
      <Apple />
      {Apple ()}
    </div>
  );
}

class User extends Component {
    render(){
        return(
            <div>
                <h1>Hello User from class component!</h1>
            </div>
        );
    }
}
export default App;
