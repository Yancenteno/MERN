import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import DelButton from '../components/DelButton'



const MainView = () => {
    const [authors, setAuthors] = useState([])

    const fetchAuthors = () => {
        axios.get('http://localhost:8000/authors')
            .then((res) => {
                setAuthors(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }
    useEffect(fetchAuthors, [])

    return (
        <div>
            <h1>Favorite authors</h1>
            <Link to='/authors/new' >Add an author</Link>
            <h4>We have quotes by:</h4>
            <table>
                <tr>
                    <th>Author</th>
                    <th>Actions available</th>
                </tr>
                {authors.map((author, index) => {
                    return (
                        <tr key={index} >
                            <td> {author.fullName} </td>
                            <button><Link to={`/authors/${author._id}`}>Edit</Link></button>
                            <DelButton fetchAuthors={fetchAuthors} id={author._id} />
                        </tr>
                    )
                })}
            </table>
        </div>
    )
}

export default MainView