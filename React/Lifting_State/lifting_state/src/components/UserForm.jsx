import React, { useState } from 'react';
import './myStyle.css'

const UserForm = (props) => {

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const [firstErr, setFirstErr] = useState("")
    const [lastErr, setLastErr] = useState("")
    const [mailErr, setMailErr] = useState("")
    const [passErr, setPassErr] = useState("")
    const [conPassErr, setConPassErr] = useState("")



    const createUser = (e) => {
        e.preventDefault();


        console.log(formData)

        setFormData({
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: ""
        })
    };

    const handleChange = e => {
        const { name, value } = e.target
        setFormData((currentData) => ({ ...currentData, [name]: value }))
        // setFormData({ ...formData, [name]: value })

        if (name === "firstName" && value.length < 2) {
            setFirstErr("First Name must be at least 2 characters!")
        } else {
            setFirstErr("")
        }

        if (name === "lastName" && value.length < 2) {
            setLastErr("Last Name must be at least 2 characters!")
        } else {
            setLastErr("")
        }

        if (name === "email" && value.length < 2) {
            setMailErr("Email must be at least 2 characters!")
        } else {
            setMailErr("")
        }

        if (name === "password" && value.length < 8) {
            setPassErr("Password must be at least 8 characters!")
        } else {
            setPassErr("")
        }

        if (name === "confirmPassword" && value !== formData.password) {
            setConPassErr("Passwords Must match!")
        } else {
            setConPassErr("")
        }

    }

    const errStyle = {
        margin: 0,
        padding: 0,
        color: "red",
        fontWeight: "bold",
        textAlign: "left"
    }


    return (
        <div className='main'>
            <form onSubmit={createUser}>
                <fieldset>
                    <legend>Register</legend>
                    <div className='box'>
                        <label>First Name:</label>
                        <input type="text" name='firstName' onChange={handleChange} value={formData.firstName} />
                    </div>

                    {formData.firstName && <p style={errStyle} >{firstErr}</p>}

                    <div className='box'>
                        <label>Last Name:</label>
                        <input type="text" name='lastName' onChange={handleChange} value={formData.lastName} />
                    </div>

                    {formData.lastName && <p style={errStyle} >{lastErr}</p>}

                    <div className='box'>
                        <label>Email:</label>
                        <input type="text" name='email' onChange={handleChange} value={formData.email} />
                    </div>

                    {formData.email && <p style={errStyle} >{mailErr}</p>}

                    <div className='box'>
                        <label>Password:</label>
                        <input type="password" name='password' onChange={handleChange} value={formData.password} />
                    </div>

                    {formData.password && <p style={errStyle} >{passErr}</p>}

                    <div className='box'>

                        <label>Confirm Password:</label>
                        <input type="password" name='confirmPassword' onChange={handleChange} value={formData.confirmPassword} />
                    </div>

                    {formData.confirmPassword && <p style={errStyle} >{conPassErr}</p>}

                    <input type="submit" value="Create User" />
                </fieldset>
            </form>
        </div>
    )
}

export default UserForm


