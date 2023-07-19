import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


const MainView = () => {
    const [notes, setNotes] = useState([])


    const fetchAllNotes = () => {
        axios.get('http://localhost:8000/notes')
            .then((res) => {
                setNotes(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }
    useEffect(fetchAllNotes, [])


    return (
        <div className='body'>
            <div className='title'>
                <h1>Note Wall</h1>
                <button><Link to='/notes/new' >Write note</Link></button>
            </div>
            <div>
                <h4 className='leave'>Leave a note</h4>
                <h3 className='line'>_________________________________________________________________</h3>
            </div>
            <div>
                {notes.map((note, index) => {
                    return (
                        <div key={index} className='currentNotes' >
                            <div>
                                <h2> {note.title} </h2>
                                <p> {note.body} </p>
                            </div>

                            <div>
                                <Link to={`/notes/${note._id}`} >edit</Link>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div>
                <button  ><Link to='/notes/rand'>Random Note</Link></button>
            </div>

        </div>
    )
}

export default MainView