import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Hello World !</h1>
      <User></User>
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
