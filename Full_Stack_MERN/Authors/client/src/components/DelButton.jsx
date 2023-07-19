import React from 'react'
import axios from 'axios';

const DelButton = props => {
    const { id, fetchAuthors } = props

    const onClickHandler = () => {
        axios.delete(`http://localhost:8000/authors/${id}`)
            .then(res => {
                console.log(res)
                fetchAuthors()
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <button onClick={onClickHandler} >Delete</button>
    )
}

export default DelButton