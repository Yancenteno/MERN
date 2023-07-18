import React from 'react'
import MovieCard from '../components/MovieCard'

const Dashboard = () => {
    const movie = {
        title: "Requiem for a Dream",
        year: 2000,
        genre: "Tragedy",
        description: "Requiem for a dream is a 2000 American psychological drama film",
        poster: "https://upload.wikimedia.org/wikipedia/en/9/92/Requiem_for_a_dream.jpg"
    }
    return (
        <div className='movieContainer'>
            <MovieCard mov={movie} />
            <MovieCard mov={movie} />
            <MovieCard mov={movie} />
            <MovieCard mov={movie} />
            <MovieCard mov={movie} />
            <MovieCard mov={movie} />
            <MovieCard mov={movie} />
            <MovieCard mov={movie} />
            <MovieCard mov={movie} />
            <MovieCard mov={movie} />
        </div>
    )
}

export default Dashboard