import React, {Component} from "react"; 
import "../css/Login.css"; 
import axios from "axios"; 
import { URLS } from "../utils/urls"; 
import { logIn } from "../services/authService"; 

class Login extends Component {
    constructor(props) {
        super(props); 
        this.props = props; 
        this.state = {
            email: "", 
            password: "",
            error: "",
            success: "",
            loading: false
        };
    }

    componentDidMount() {
        if(this.props.error) {
            this.setState({
                error: this.props.error
            });
        }
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault(); 
        
        if(this.state.error) this.setState({error: "", success: ""})
        
        this.setState({
            loading: true
        });

        axios.post(URLS.baseURL.concat(URLS.loginPlayer), {
           email: this.state.email,
           password: this.state.password
        }).then((result) => {

            const data = result.data; 
            const player = data.player; 
            const token = data.token;

            logIn(token); 

            this.props.loginHandler(player); 

        }).catch((error) => {
            this.setState({
                loading: false
            })
            let message = ""; 

            if(error.response) {
                message = error.response.data.error; 
            } else {
                message = "Failed to contact API services. Please try again later"
            }

            this.setState({
                error: message
            })
        }); 
    }

    render() {

        return (

            <div className="Login">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email" onChange={this.handleChange} className="form-control" id="email" placeholder="Enter email" />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" onChange={this.handleChange} className="form-control" id="password" placeholder="Password.." />
                    </div>
                    
                    {this.state.loading ? 
                        <button class="btn btn-primary" type="button" disabled>
                            <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                Logging in...
                        </button>
                    :
                    <button type="submit" className="btn btn-primary">Login</button>}

                <div className="info-box">
                    {this.state.error && 
                    <div className="alert alert-danger" role="alert">
                        {this.state.error}
                    </div>}

                    {this.state.success && 
                    <div className="alert alert-success" role="alert">
                        {this.state.success}
                    </div>
                    }
                </div>
                </form>
            </div>
        )
    }
}


export default Login; 