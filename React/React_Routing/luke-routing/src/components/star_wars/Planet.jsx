import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import SearchStar from './SearchStar';

const Planet = () => {
    const [planets, setPlanets] = useState(null);

    const { location } = useParams();

    const getPlanetData = () => {
        axios.get(`https://swapi.dev/api/planets/${location}/`)
            .then(res => setPlanets(res.data))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getPlanetData();
    }, [planets])

    console.log('planet-data', planets)

    return (
        <div>
            <SearchStar />
            {planets === null ? (
                <p>These aren't the droids you're looking for!</p>
            ) : (
                <>
                    <h2> {planets.name} </h2>
                    <p>Climate: {planets.climate} </p>
                    <p>Terrain: {planets.terrain} </p>
                    <p>Surface Water: {planets.surface_water} </p>
                    <p>Population: {planets.population} </p>
                </>
            )}
        </div>
    )
}

export default Planet