import React from 'react';

const Box = ({ color }) => {

    const colorStyle = {
        width: "50px",
        height: "50px",
        backgroundColor: color,
        margin: "10px",
        display: "inline-block"
    }

    return (
        <div style={colorStyle}></div>
    )
}

export default Box
