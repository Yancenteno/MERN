import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import DeleteButton from '../components/DeleteButton'

const ProductDetail = (props) => {
    const [product, setProduct] = useState([])
    const { id } = useParams()



    useEffect(() => {
        axios.get(`http://localhost:8000/products/${id}`)
            .then(res => setProduct(res.data))
            .catch(err => console.error(err))
    }, [id])


    const removeFromDom = () => {
        axios.delete(`http://localhost:8000/products/${id}`)
            .then((res) => console.log(res.data))
            .catch((err) => console.log(err))
    }




    return (
        <div>
            <h3> {product.title} </h3>
            <p>Price: ${product.price} </p>
            <p>Description: {product.description} </p>
            <DeleteButton successCallback={removeFromDom} />
        </div>
    )
}

export default ProductDetail