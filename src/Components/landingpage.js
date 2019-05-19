import React from 'react'; 
import Auth from './auth'; 

const LandingPage = (props) => {

    console.log(props); 
    return (
        <div>
            <h1>This is the landing page</h1>
            <button onClick={
                () => {
                   Auth.login(() => {
                       props.history.push("/app"); 
                   });  
                }
            }>Login</button>
        </div>
        );
};

export default LandingPage