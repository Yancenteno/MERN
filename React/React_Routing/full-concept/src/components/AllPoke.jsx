import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const AllPoke = () => {
    const [pokemon, setPokemon] = useState([])

    const getPokemon = () => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=1281")
            .then(res => setPokemon(res.data.results))
            .catch(err => console.log(err))
    }

    useEffect(getPokemon, [])

    return (
        <div>

            {pokemon.length < 1 ?
                <p>Loading...</p>
                :
                pokemon.map((poke, i) => {
                    return (
                        <>
                            <Link to={`/one/${poke.name}`}>{poke.name}</Link>
                            <hr />
                        </>
                    )
                })
            }

        </div>
    )
}

export default AllPoke