import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import SearchStar from './SearchStar';

const SpacePeople = () => {
    const [people, setPeople] = useState(null);

    const { person } = useParams();

    const getPeopleData = () => {
        axios.get(`https://swapi.dev/api/people/${person}/`)
            .then(res => setPeople(res.data))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getPeopleData();
    }, [person])

    console.log('data', people)

    return (
        <div>
            <SearchStar />
            {people === null ? (
                <p>These aren't the droids you're looking for!</p>
            ) : (
                <>
                    <h2>{people.name}</h2>
                    <p>Height: {people.height} cm</p>
                    <p>Mass: {people.mass} kg</p>
                    <p>Hair Color: {people.hair_color} </p>
                    <p>Skin Color: {people.skin_color} </p>
                </>
            )}
        </div>
    )
}

export default SpacePeople;
