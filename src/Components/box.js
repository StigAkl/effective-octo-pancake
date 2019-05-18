import React from 'react';

const Box = (props) => {

    console.log(props)
    return (
        <div id="boks">
            <p>Dette er en boks: {props.experience} </p>
        </div>
    );
    
}

export default Box;