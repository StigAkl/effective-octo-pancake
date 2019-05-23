import React, { Component } from 'react';
import Login from "./Components/Login"; 
import { fetchPlayerInformation } from "./api/apiFetchers"; 
import { isAuthenticated, getId} from "./services/authService"; 
import Game from "./Components/Game/Game"; 

class App extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      player: {},
      isAuthenticated: false,
      loading: true,
      errorMessage: ""
    }
    this.loginHandler = this.loginHandler.bind(this); 
  }

  componentDidMount() {
    const authenticated = isAuthenticated(); 
    if(authenticated) {
      fetchPlayerInformation((success, result) => {
        if(success) {
          this.setState({
            isAuthenticated: success,
            player: result.data,
            loading: false,
            errorMessage: ""
          }); 
        } else {
          this.setState({
            isAuthenticated: false, 
            errorMessage: "Coult not fetch player data. Please try again later", 
            loading: false
          });
        }
      }); 
      } 
      
      //Not authenticated
      else {
        let errorMessage = getId() === undefined ? "" : "It looks like your session has expired! Please log in again"; 
        this.setState({
          loading: false,
          errorMessage
        });
      }
    }

  loginHandler = (data) => {
    this.setState({
      isAuthenticated: true,
      player: data 
    });
  }


  render() {
  return (
    <div className="App">
      {
      
        this.state.loading ?  <p>Loading..</p> :
        this.state.isAuthenticated ? <Game player={this.state.player}/> : 
        <Login error={this.state.errorMessage} loginHandler={this.loginHandler} /> 
      }
    </div>
  );

  }
}

export default App;