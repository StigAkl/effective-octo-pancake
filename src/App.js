import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from './Components/landingpage';
import AppLayout from './Components/applayout';
// import ProgressBar from 'react-bootstrap/ProgressBar';

class App extends Component {
  state = {
    experience: 850,
    money: 4000,
    username: "JensMachine1337",
    currentLevel: 1
  }

  updateLevel = () => {
    const currentLevel = this.state.currentLevel;
    const experience = this.state.experience;
    let overflow = experience - (currentLevel * 1000 * 1.05);

    if (experience >= (currentLevel * 1000 * 1.05)) {
      this.setState({
        currentLevel: currentLevel + 1,
        experience: overflow
      });
    }
  }

  updateExperience = () => {
    const experience = this.state.experience;

    this.setState({
      experience: experience + 50
    });

    this.updateLevel();
  }

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
