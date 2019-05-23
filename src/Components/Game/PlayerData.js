import React from 'react';

const PlayerData = (props) => {
    
    const player = props.player; 

    return (
        <React.Fragment>
            <p>Stats</p>
            <ul className="p-data">
                <li>Username: {player.username}</li>
                <li>Level: {player.level}</li>
                <li>Money: {player.money}</li>
            </ul>
        </React.Fragment>
    );
};

export default PlayerData;