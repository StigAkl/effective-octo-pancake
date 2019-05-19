import React from 'react';

const Box = (props) => {

    const boxStyle = {
        border: '1px solid black',
        backgroundColor: 'rgba(33,33,33,0.2)',
        textAlign: 'center',
        width: '50%',
        marginLeft: '50%',
        transform: 'translateX(-50%)'
    };

    return (
        <div id="boks" style={boxStyle}>
            <p>Dette er en boks: {props.experience} </p>
        </div>
    );
    
}

export default Box;