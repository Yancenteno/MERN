import React from 'react';

const PokiDex = (props) => {
    const { poki } = props;
    return (
        <div>
            {poki.map((pokemon) => (
                <div key={pokemon.name}>{pokemon.name}</div>
            ))}
        </div>
    );
};

export default PokiDex;


