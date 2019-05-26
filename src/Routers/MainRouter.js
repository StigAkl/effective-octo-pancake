import React from 'react'; 
import Home from '../Components/Home'; 
import {Route, Switch} from 'react-router-dom'; 

const MainRouter = () => {

    return (
    <div>
        <Switch>
            <Route path="/" component={Home}></Route>
        </Switch>
    </div>
    );
}

export default MainRouter; 