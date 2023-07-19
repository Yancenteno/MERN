import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios';

const AddView = () => {
    const navigate = useNavigate()

    const [noteData, setNoteData] = useState({
        title: "",
        body: ""
    })

    const [titleErr, setTitleErr] = useState('')
    const [bodyErr, setBodyErr] = useState('')

    const onSubmitHandler = (e) => {
        e.preventDefault();

        axios.post('http://localhost:8000/notes', noteData)
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

    const handleChange = (e) => {
        const { value, name } = e.target
        setNoteData(current => ({ ...current, [name]: value }))
    }


    return (
        <div className='body'>
            <div className='title' >
                <h1>Write Notes</h1>
                <Link to='/' >go back home</Link>
            </div>
            <p>Write a new note!</p>
            <form onSubmit={onSubmitHandler} >
                <label>Note Title</label>
                <br />
                <p  className='err'> {titleErr} </p>
                <input type="text" name='title' onChange={handleChange} value={noteData.title} />
                <br />
                <label>Note Body</label>
                <br />
                <p className='err' > {bodyErr} </p>
                <textarea type="text" name='body' onChange={handleChange} value={noteData.body} />
                <br />
                <button>Write this note!</button>
            </form>
        </div>
    )
}

export default AddView