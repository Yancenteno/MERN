import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Update = () => {
    const { id } = useParams()


    const navigator = useNavigate()

    const [movieData, setMovieData] = useState({
        title: "",
        description: "",
        genre: "",
        year: "",
        poster: ""
    })

    const [titleErr, setTitleErr] = useState('')
    const [descErr, setDescErr] = useState('')
    const [genreErr, setGenreErr] = useState('')
    const [yearErr, setYearErr] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.put(`http://localhost:8000/api/movies/${id}`, movieData)
            .then(() => navigator('/'))
            .catch(err => {
                const errs = err.response.data.errors || {};

                setTitleErr(errs.title ? errs.title.message : '');
                setDescErr(errs.description ? errs.description.message : '');
                setGenreErr(errs.genre ? errs.genre.message : '');
                setYearErr(errs.year ? errs.year.message : '');
            });
    }

    const handleChange = (e) => {
        const { value, name } = e.target
        setMovieData(current => ({ ...current, [name]: value }))
    }


    const fetchMovie = () => {
        axios.get(`http://localhost:8000/api/movies/${id}`)
            .then(res => setMovieData(res.data))
            .catch(err => console.log(err))
    }

    useEffect(fetchMovie, [])



    return (
        <div className='movieContainer'>
            <div className='movieCard'>
                <h3>Edit a Movie!</h3>
                <form onSubmit={handleSubmit} >
                    <label>Title</label>
                    <br />
                    <p className='err'>{titleErr}</p>
                    <input type="text" name='title' onChange={handleChange} value={movieData.title} />
                    <br />
                    <label>Description</label>
                    <br />
                    <p className='err'>{descErr}</p>
                    <input type="text" name='description' onChange={handleChange} value={movieData.description} />
                    <br />
                    <label>Genre</label>
                    <br />
                    <p className='err'>{genreErr}</p>
                    <input type="text" name='genre' onChange={handleChange} value={movieData.genre} />
                    <br />
                    <label>Year</label>
                    <br />
                    <p className='err'>{yearErr}</p>
                    <input type="text" name='year' onChange={handleChange} value={movieData.year} />
                    <br />
                    <label>Poster Link</label>
                    <br />
                    <input type="text" name='poster' onChange={handleChange} value={movieData.poster} />
                    <br />
                    <button>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Update