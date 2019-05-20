import React, {Component} from "react"; 
import "../css/Login.css"; 

class Login extends Component {
    constructor(props) {
        super(props); 
        this.props = props; 
        this.state = {
            email: "", 
            password: ""
        };
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault(); 
        
        localStorage.setItem("email", this.state.email); 
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
                    <button type="submit" className="btn btn-primary">Login</button>
                </form>
            </div>
        )
    }
}


export default Login; 