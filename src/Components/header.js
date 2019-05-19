import React from 'react';

const Header = (param) => {

    const headerStyle = {
        width: '100%',
        backgroundColor: 'darkgray',
        fontSize: '36pt',
        color: 'white',
        textAlign: 'center'

    };
    return (
        <div id="header" style={headerStyle}>
            {param.username} - {param.money + ' kr'} - Lvl: {param.level}
        </div>
    );
}

export default Header;