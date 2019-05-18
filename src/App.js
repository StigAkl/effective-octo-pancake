import React, { Component } from 'react';
import Box from './Components/box';

class App extends Component {

  state = {
    experience: 1000, 
   money: 4000,
   name: "Jens",
   age: 34
}

updateExperience = () => {
  const experience = this.state.experience; 

  this.setState({
    experience: experience + 1
  });
}

  render() {

    return (
      <div className="App">
        <p>Hei, dette er en test {this.state.experience}</p>
        <button onClick={this.updateExperience}>Gain experience</button>
        
        <Box experience={this.state.experience}/>
      </div>
    );
  }

  
}

export default App;
