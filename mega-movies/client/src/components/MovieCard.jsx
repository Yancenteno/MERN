import React from 'react'
import { useNavigate } from 'react-router-dom'

const MovieCard = props => {
    const { mov } = props
    const navigate = useNavigate()

    return (
        <div className='movieCard'>
            <h3 className='movieTitle'> {mov.title} - ({mov.year}) </h3>
            <img src={mov.poster} alt="requiem" />
            <p className='movDesc' > {mov.description} </p>
            <p className='movDesc'> {mov.genre} </p>
            <button onClick={() => { navigate(`/update/${mov._id}`) }}  >Update</button>
            <button  >Delete</button>
        </div>
    )
}

export default MovieCard