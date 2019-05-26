import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom'; 
import MainRouter from "./Routers/MainRouter"; 
class App extends Component {
  
  render() {
  return (

    <div className="container">
      <BrowserRouter>
        <MainRouter />
      </BrowserRouter>
    </div>

  );
  }
}

export default App;