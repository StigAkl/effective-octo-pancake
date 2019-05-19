import React from 'react';

const Footer = (param) => {

    const footerStyle = {
        width: '100%',
        backgroundColor: 'darkgray',
        fontSize: '24pt',
        color: 'white',
        textAlign: 'center'

    };
    return (
        <div id="footer" style={footerStyle}>
            XP: {param.currentXp} / {param.needed}
        </div>
    );
}

export default Footer;