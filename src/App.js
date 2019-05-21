import React, { Component } from 'react';
import Login from "./Components/Login"; 
import axios from "axios"; 
import { isAuthenticated, getToken, getId, logOut } from "./services/authService"; 
import { URLS } from "./utils/urls"; 

class App extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      player: {},
      isAuthenticated: false,
      loading: true
    }

    this.loginHandler = this.loginHandler.bind(this); 
  }

  componentDidMount() {
    console.log(URLS); 

    const authenticated = isAuthenticated(); 

    if(authenticated) {
      axios.get(URLS.baseURL.concat(URLS.playerInformation), {
        params: {
          id: getId()
        },
        headers: {
          Authorization: "Bearer ".concat(getToken())
        }
      }).then((result) => {
        
        this.setState({
          player: result.data,
          isAuthenticated: true,
        });
      })
      
      .catch((error) => {
        this.setState({
          isAuthenticated: false,
          errorMessage: "You got logged out..",
        });

        logOut(); 
      });
    }

    this.setState({
      loading: false
    })
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
      <Login loginHandler={this.loginHandler}/>
    </div>
  );

  }
}

export default App;
