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

  update(){
    // alert("Alert");
    this.setState({data: "Bhardwaj"});
  }


  render(){
    return(
      <div className="App">
        <h2>{this.state.data}</h2>
        <button onClick={()=>this.update()}>Click me</button>
      </div>
    );
  }

}
export default App;