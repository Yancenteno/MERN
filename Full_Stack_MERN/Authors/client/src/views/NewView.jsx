import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios';
import React, { useState } from 'react'
import FormComponent from '../components/FormComponent';

const NewView = () => {
  const [errors, setErrors] = useState([])
  const navigate = useNavigate()

  const onSubmitHandler = (e, data) => {
    e.preventDefault();

    axios.post('http://localhost:8000/authors', data)
      .then(res => {
        navigate('/authors')
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
      <h1>Favorite authors</h1>
      <Link to='/authors' >Home</Link>
      <h4>Add a new author</h4>
      {errors.map((error, index) => {
        return (
          <p key={index} > {error} </p>
        )
      })}
      <FormComponent
        onSubmitHandler={onSubmitHandler}
        initialFullName=''
      />
    </div>
  )
}

export default NewView