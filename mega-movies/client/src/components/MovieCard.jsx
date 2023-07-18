import React from 'react'

const MovieCard = props => {
    const { mov } = props

    return (
        <div className='movieCard'>
            <h3 className='movieTitle'> {mov.title} - ({mov.year}) </h3>
            <img src={mov.poster} alt="requiem" />
            <p className='movDesc' > {mov.description} </p>
            <p className='movDesc'> {mov.genre} </p>
            <button>Update</button>
            <button>Delete</button>
        </div>
    )
}

export default MovieCard