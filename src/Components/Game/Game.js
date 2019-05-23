import React, { Component } from 'react';
import "../../css/Game.css"; 
import Footer from "./Footer"; 
import PlayerData from "./PlayerData"; 

class Game extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            player: this.props.player
        }
    }


    componentDidMount() {
        console.log("Game componefsdafnd mounted"); 
    }

    render() {
        return (
        
            <div className="container fill border">

                <div className="row fill">

                    <div className="col-md-2">
                        <PlayerData player={this.state.player} />
                    </div>

                    <div className="col-md-8"></div>
                    <div className="col-md-2"></div>

                 </div>
                <Footer />
            </div>
        );
    }
}

export default Game;