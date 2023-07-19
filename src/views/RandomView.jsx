import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

const RandomView = () => {
    const [notes, setNotes] = useState({});

    useEffect(() => {
        axios.get('http://localhost:8000/notes')
            .then(res => {
                const oneRandom = Math.floor(Math.random() * res.data.length);
                setNotes(res.data[oneRandom]);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    return (
        <div className='body'>
            <div className='title'>
                <h1>Write Notes</h1>
                <Link to='/'>go back home</Link>
            </div>
            <div>
                <h4 className='leave'>Random note</h4>
                <h3 className='line'>_________________________________________________________________</h3>
            </div>
            <h3>{notes.title}</h3>
            <p>{notes.body}</p>
        </div>
    );
}

export default RandomView