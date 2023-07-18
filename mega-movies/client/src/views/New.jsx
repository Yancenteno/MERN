import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const New = () => {
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
        e.preventDefault()

        axios.post("http://localhost:8000/api/movies", movieData)
            .then(res => navigator('/'))
            .catch(err => {
                const errs = err.response.data.errors

                if (errs.title) {
                    setTitleErr(errs.title.message)
                } else {
                    setTitleErr('')
                }
                if (errs.description) {
                    setDescErr(errs.description.message)
                } else {
                    setDescErr('')
                }
                if (errs.genre) {
                    setGenreErr(errs.genre.message)
                } else {
                    setGenreErr('')
                }
                if (errs.year) {
                    setYearErr(errs.year.message)
                } else {
                    setYearErr('')
                }
            })
    }

    const handleChange = (e) => {
        const { value, name } = e.target
        setMovieData(current => ({ ...current, [name]: value }))
    }



    return (
        <div className='movieContainer'>
            <div className='movieCard'>
                <h3>Add a Movie!</h3>
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

export default New