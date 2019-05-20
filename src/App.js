import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Login from "./Components/Login"; 
import axios from "axios"; 

class App extends Component {

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
