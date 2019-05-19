import React, { Component } from 'react';
import Box from './Components/box';
import Header from './Components/header';
import Footer from './Components/footer';
import ProgressBar from 'react-bootstrap/ProgressBar';

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

  if(experience >= (currentLevel * 1000 * 1.05)) {
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
        <Header username={this.state.username} money={this.state.money} level={this.state.currentLevel}></Header>
        <button id="experienceButton" onClick={this.updateExperience}>Gain experience</button>

        <ProgressBar striped
        now={((this.state.experience/(this.state.currentLevel*1000*1.05))) * 100} label={Math.round(((this.state.experience/(this.state.currentLevel*1000*1.05))) * 100) + '%'} >
        </ProgressBar>      
        <Footer currentXp={this.state.experience} needed={this.state.currentLevel * 1000 * 1.05}></Footer>
      </div>
      
    );
    
  }
}

export default App;
