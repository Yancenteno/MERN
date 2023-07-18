import React, { useState, useEffect } from 'react'
import DeleteButton from '../components/DeleteButton'
import { Link } from 'react-router-dom'
import axios from 'axios'


const IndexView = props => {
    const [athletes, setAthletes] = useState([]);

    const fetchAthletes = () => {
        axios.get('http://localhost:8000/api/athletes')
            .then((res) => {
                setAthletes(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }
    useEffect(fetchAthletes, [])

    return (
        <div>
            <h1>Athletes</h1>
            <Link to='/create' >Add Athlete</Link>
            <ul>
                {athletes.map((athlete, index) => {
                    return (
                        <li key={index} >
                            <Link to={`/${athlete._id}`} > {athlete.firstName} {athlete.lastName} </Link> |
                            <Link to={`/${athlete._id}/edit`} >Edit</Link> |
                            <DeleteButton fetchAthletes={fetchAthletes} id={athlete._id} />
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default IndexView