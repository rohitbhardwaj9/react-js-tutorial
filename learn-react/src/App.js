import logo from './logo.svg';
import './App.css';
import User from './User';

function App() {

  let data = "Rohit";
  function updateData(){
    data = "Bhardwaj";
    alert(data);
  }

  return (
    //here we are expecting to change data value from Rohit to Bhardwaj on button click
    //but this will not happen
    //just because of, we are using data variable
    //And React does not provide this feature to us, to achieve the epected output we have to use STATE 
    <div className="App">
      <h1>{data}</h1>
      <button onClick={updateData}>Click me!</button>
      <User/>
    </div>
  );
}

export default App;
