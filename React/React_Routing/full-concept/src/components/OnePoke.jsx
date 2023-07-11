import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const OnePoke = () => {
    const { poke } = useParams()

    const [pic, setPic] = useState('')

    const getPokeData = () => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${poke}`)
            .then(res => setPic(res.data.sprites.front_default))
            .catch(err => console.log(err))
    }
    useEffect(getPokeData, [])

    return (
        <div>
            <h2>{poke}</h2>
            <img src={pic} alt={poke} width={500} />
        </div>
    )
}

export default OnePoke