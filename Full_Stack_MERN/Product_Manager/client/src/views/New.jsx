import React, { useState } from 'react'
import AllProducts from './AllProducts'
import axios from 'axios'

const New = () => {

    const [formData, setFormData] = useState({
        title: "",
        price: "",
        description: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(currentData => ({ ...currentData, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        axios.post("http://localhost:8000/products", formData)
            .then(res => {
                setFormData({
                    title: "",
                    price: "",
                    description: ""
                })
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <h2>Product Manager</h2>
            <fieldset>
                <form onSubmit={handleSubmit} >
                    <label>Title:</label>
                    <input type="text" name='title' onChange={handleChange} value={formData.title} />
                    <br />
                    <label>Price: $</label>
                    <input type="number" name='price' onChange={handleChange} value={formData.price} />
                    <br />
                    <label>Description:</label>
                    <input type="text" name='description' onChange={handleChange} value={formData.description} />
                    <br />
                    <button>Create</button>
                </form>
            </fieldset>
            <AllProducts />
        </div>
    )
}

export default New
































