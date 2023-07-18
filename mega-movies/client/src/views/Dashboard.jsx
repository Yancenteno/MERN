import React, { useState, useEffect } from 'react'
import axios from 'axios'
import MovieCard from '../components/MovieCard'

const Dashboard = () => {

    const [movies, setMovies] = useState([])



    const fetchMovies = () => {
        axios.get("http://localhost:8000/api/movies")
            .then(res => setMovies(res.data))
            .catch(err => console.log(err))
    }

    useEffect(fetchMovies, [])

    return (
        <div className='movieContainer'>
            {movies.map((movie, key) => {
                return <MovieCard mov={movie} />
            })}
        </div>
    )
}

export default Dashboard