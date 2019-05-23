import axios from "axios"; 
import {URLS} from "../utils/urls"; 
import {getId, getToken, logOut} from "../services/authService"; 

export const fetchPlayerInformation = callback => {
    axios.get(URLS.baseURL.concat(URLS.playerInformation), {
        params: {
          id: getId()
        },
        headers: {
          Authorization: "Bearer ".concat(getToken())
        }
      }).then((result) => {
        
        callback(true, result); 
        // this.setState({
        //   isAuthenticated: true, 
        //   player: result.data,
        //   loading: false
        // })
      })
      .catch((error) => {


        callback(false, error); 
        // this.setState({
        //   isAuthenticated: false,
        //   errorMessage: "Could not fetch player data. Please try again later",
        //   loading: false
        // });
        logOut(); 
      });
}