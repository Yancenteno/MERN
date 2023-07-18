import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const Edit = () => {
    const { id } = useParams()

    const navigator = useNavigate()

    const [formData, setFormData] = useState({
        first: "",
        last: ""
    })

    const [firstErr, setFirstErr] = useState("Test")
    const [lastErr, setLastErr] = useState("Test 2")



    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(currentData => ({ ...currentData, [name]: value }))
    }



    useEffect(() => {
        axios.get(`http://localhost:8000/api/users/${id}`)
            .then(res => {
                setFormData(res.data)
            })
            .catch(err => console.log(err))
    }, [])



    const handleSubmit = (e) => {
        e.preventDefault()

        axios.put(`http://localhost:8000/api/users/${id}`, formData)
            .then(res => {
                setFormData({ first: "", last: "" })
                navigator('/')
            })
            .catch(err => console.log(err))


    }

    const ErrStyle = {
        margin: 0,
        padding: 0,
        color: "red",
        fontWeight: "bold"
    }

    return (
        <div>
            <h2>Update:</h2>
            <fieldset>
                <legend>Update User</legend>
                <form onSubmit={handleSubmit} >
                    <p style={ErrStyle} >{firstErr}</p>
                    <label>First Name:</label>
                    <input type="text" name='first' onChange={handleChange} value={formData.first} />
                    <br />
                    <p style={ErrStyle} >{lastErr}</p>
                    <label>Last Name:</label>
                    <input type="text" name='last' onChange={handleChange} value={formData.last} />
                    <br />
                    <button>Save</button>
                </form>
            </fieldset>
        </div>
    )
}

export default Edit