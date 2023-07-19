import React from 'react'
import axios from 'axios';

const DeleteButton = props => {
    const { id, fetchNotes } = props

    const onClickHandler = () => {
        axios.delete(`http://localhost:8000/notes/${id}`)
            .then(res => {
                console.log(res)
                fetchNotes()
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