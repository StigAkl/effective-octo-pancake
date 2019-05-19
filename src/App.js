import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import LandingPage from './Components/landingpage'; 

class App extends Component {

  render() {
  return (
    <div className="App">
      <h1>Protected React Router</h1>
      <Route component={LandingPage} />
    </div>
  );
  }
}

export default App;
