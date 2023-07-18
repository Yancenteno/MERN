import React from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

const DeleteButton = props => {
    const { id, fetchAthletes } = props
    const navigate = useNavigate()

    const onClickHandler = () => {
        axios.delete(`http://localhost:8000/api/athletes/${id}`)
            .then(res => {
                console.log(res)
                fetchAthletes()
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <button onClick={onClickHandler} >Delete</button>
    )
}

export default DeleteButton