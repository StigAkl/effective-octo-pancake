import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Login from "./Components/Login"; 
import axios from "axios"; 

class App extends Component {
 
  componentDidMount() {
    axios.post("http://localhost:3001/api/redirect", {
      username: "Kake", 
      password: "kake2"
    }).then((result) => {
      console.log(result); 
    })
  }
  render() {
  return (
    <div className="App">

      <BrowserRouter>

       <Route path="/" exact={true} component={Login} />

      </BrowserRouter>
    </div>
  );
  }
}

export default App;
