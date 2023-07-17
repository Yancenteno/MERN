import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const New = () => {

    const navigator = useNavigate()

    const [formData, setFormData] = useState({
        first: "",
        last: ""
    })

    const [firstErr, setFirstErr] = useState("")
    const [lastErr, setLastErr] = useState("")

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(currentData => ({ ...currentData, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        axios.post("http://localhost:8000/api/users", formData)
            .then(res => {
                setFormData({
                    first: "",
                    last: ""
                })
                navigator('/')
            })
            .catch(err => {
                const errs = err.response.data.errors

                if (errs.first) {
                    setFirstErr(errs.first.message);
                } else {
                    setFirstErr('');
                }

                if (errs.last) {
                    setLastErr(errs.last.message);
                } else {
                    setLastErr('');
                }
            })
    }

    const ErrStyle = {
        margin: 0,
        padding: 0,
        color: "red",
        fontWeight: "bold"
    }

    return (
        <div>
            <h2>Add a new user:</h2>
            <fieldset>
                <legend>New User</legend>
                <form onSubmit={handleSubmit} >
                    <p style={ErrStyle} >{firstErr}</p>
                    <label>First Name:</label>
                    <input type="text" name='first' onChange={handleChange} value={formData.first} />
                    <br />
                    <p style={ErrStyle} >{lastErr}</p>
                    <label>Last Name:</label>
                    <input type="text" name='last' onChange={handleChange} value={formData.last} />
                    <br />
                    <button>Add</button>
                </form>
            </fieldset>
        </div>
    )
}

export default New