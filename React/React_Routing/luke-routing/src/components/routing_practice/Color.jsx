import React from 'react';
import { useParams } from 'react-router-dom';

const Color = () => {
    const { word, firstColor, secondColor } = useParams();

    return (
        <div>
            <h2 style={{ backgroundColor: firstColor, color: secondColor }}>The word is: {word}</h2>
        </div>
    );
};

export default Color;
