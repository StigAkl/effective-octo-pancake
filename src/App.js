import React, { Component } from 'reeact';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import LandingPage from './Components/landingpage';
import AppLayout from './Components/applayout';  

class App extends Component {

  render() {
  return (
    <div className="App">

      <BrowserRouter>

       <Route path="/" exact={true} component={LandingPage} />
       <Route path="/app" component={AppLayout} />

      </BrowserRouter>
    </div>
  );
  }
}

export default App;
