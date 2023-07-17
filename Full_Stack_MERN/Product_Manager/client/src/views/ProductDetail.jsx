import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'

const ProductDetail = () => {
    const { id } = useParams()

    const [product, setProduct] = useState([])


    useEffect(() => {
        axios.get(`http://localhost:8000/products/${id}`)
            .then(res => {
                setProduct(res.data)
            })
            .catch(err => console.log(err))
    }, [])




    return (
        <div>
            <h3> {product.title} </h3>
            <p>Price: ${product.price} </p>
            <p>Description: {product.description} </p>
            <Link to={`/products/${product._id}/edit`} >Edit</Link>
        </div>
    )
}

export default ProductDetail