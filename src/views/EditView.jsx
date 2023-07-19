import React, { useState, useEffect } from 'react'
import { useNavigate, Link, useParams } from 'react-router-dom'
import axios from 'axios';

const EditView = props => {
    const { fetchAllNotes } = props
    const { id } = useParams()
    const navigate = useNavigate()

    const [noteData, setNoteData] = useState({
        title: "",
        body: ""
    })

    const [titleErr, setTitleErr] = useState('')
    const [bodyErr, setBodyErr] = useState('')

    const onSubmitHandler = (e) => {
        e.preventDefault();

        axios.put(`http://localhost:8000/notes/${id}`, noteData)
            .then(res => {
                navigate('/')
            })
            .catch(err => {
                const errs = err.response.data.errors

                if (errs.title) {
                    setTitleErr(errs.title.message)
                } else {
                    setTitleErr('')
                }
                if (errs.body) {
                    setBodyErr(errs.body.message)
                } else {
                    setBodyErr('')
                }
            })
    }

    const fetchNotes = () => {
        axios.get(`http://localhost:8000/notes/${id}`)
            .then(res => setNoteData(res.data))
            .catch(err => console.log(err))
    }
    useEffect(fetchNotes, [])

    const handleChange = (e) => {
        const { value, name } = e.target
        setNoteData(current => ({ ...current, [name]: value }))
    }


    const handleDeleteButton = () => {
        axios.delete(`http://localhost:8000/notes/${id}`)
            .then(res => {
                console.log(res)
                fetchAllNotes()
            })
            .catch(err => {
                console.log(err)
            })
    }


    return (
        <div className='body'>
            <div className='title'>
                <h1>Write Notes</h1>
                <Link to='/' >go back home</Link>
            </div>
            <p>Write a new note!</p>
            <form onSubmit={onSubmitHandler} >
                <label>Note Title</label>
                <br />
                <p className='err'> {titleErr} </p>
                <input type="text" name='title' onChange={handleChange} value={noteData.title} />
                <br />
                <label>Note Body</label>
                <br />
                <p className='err'> {bodyErr} </p>
                <textarea type="text" name='body' onChange={handleChange} value={noteData.body} />
                <br />
                <button>Write this note!</button>
                <button onClick={handleDeleteButton} >Delete</button>

            </form>
        </div>
    )
}

export default EditView