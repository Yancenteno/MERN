import React, { useState } from 'react'
import Form from '../components/Form'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';


const CreateView = () => {
    const [errors, setErrors] = useState([])
    const navigate = useNavigate()

    const onSubmitHandler = (e, data) => {
        e.preventDefault();

        axios.post('http://localhost:8000/api/athletes/', data)
            .then(res => {
                navigate('/')
            })
            .catch(err => {
                console.log(err)
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr)
            })
    }
    return (
        <div>
            <h1>Create a new athlete</h1>
            {errors.map((error, index) => {
                return (
                    <p key={index} >{error}</p>
                )
            })}
            <Form
                onSubmitHandler={onSubmitHandler}
                initialFirstName=''
                initialLastName=''
                initialSport=''
                initialTeam=''
            />
        </div>

    )
}

export default CreateView