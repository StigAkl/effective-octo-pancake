import React, { Component } from 'react';
import Box from './Components/box';
import Header from './Components/header';
import Footer from './Components/footer';

class App extends Component {

  state = {
    experience: 1000, 
   money: 4000,
   username: "JensMachine1337",
   currentLevel: 1
}

updateExperience = () => {
  const experience = this.state.experience; 

  this.setState({
    experience: experience + 10
  });
}

updateLevel = () => {
  const currentLevel = this.state.currentLevel;
  const experience = this.state.experience;

  if(experience >= (currentLevel * 1000 * 1.05)) {
    this.setState({
      currentLevel: currentLevel + 1
    });
  }
}


  render() {

    return (
      <div className="App">
        <Header username={this.state.username}></Header>
        <button id="experienceButton" onClick={this.updateExperience}>Gain experience</button>
        
        <Box experience={this.state.experience}/>

        <Footer currentXp={this.state.experience} needed={this.state.currentLevel * 1000 * 1.05}></Footer>
      </div>
      
    );
    
  }

  
}

export default App;
