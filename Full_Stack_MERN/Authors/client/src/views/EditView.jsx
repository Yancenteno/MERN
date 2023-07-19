import React, { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import axios from 'axios';
import FormComponent from '../components/FormComponent';

const EditView = props => {
  const navigate = useNavigate()
  const { id } = useParams()
  const [author, setAuthor] = useState({})
  const [loaded, setLoaded] = useState(false)
  const [errors, setErrors] = useState([])

  useEffect(() => {
    axios.get(`http://localhost:8000/authors/${id}`)
      .then(res => {
        setAuthor(res.data)
        setLoaded(true);
      })
      .catch(err => console.log(err))
  }, [id])

  const onSubmitHandler = (e, data) => {
    e.preventDefault();
    axios.put(`http://localhost:8000/authors/${id}`, data)
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
      <h4>Edit this author</h4>
      <h2>{author.full}</h2>

      {errors.map((error, index) => {
        return (
          <p key={index} > {error} </p>
        )
      })}
      {loaded &&
        <FormComponent
          onSubmitHandler={onSubmitHandler}
          initialFullName={author.fullName}
        />
      }


    </div>
  )
}

export default EditView