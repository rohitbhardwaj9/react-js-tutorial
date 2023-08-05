import React, {Component} from "react";
import logo from "./logo.svg"
import "./App.css"

class App extends Component{

  constructor(){
    super();
    this.state = {
      data : "Rohit"
    }
  }

  render(){
    return(
      <div className="App">
        <h2>{this.state.data}</h2>
      </div>
    );
  }

}
export default App;