import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import ProductForm from './ProductForm'

const EditProducts = () => {
    const { id } = useParams()
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        title: "",
        price: "",
        description: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(currentData => ({ ...currentData, [name]: value }))
    }

    useEffect(() => {
        axios.get(`http://localhost:8000/products/${id}`)
            .then(res => {
                setFormData(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()

        axios.put(`http://localhost:8000/products/${id}`, formData)
            .then(res => {
                setFormData({
                    title: "",
                    price: "",
                    description: ""
                })
                navigate('/products')
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <ProductForm />
        </div>
    )
}

export default EditProducts