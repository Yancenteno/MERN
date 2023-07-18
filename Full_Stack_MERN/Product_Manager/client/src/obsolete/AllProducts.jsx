import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const AllProducts = () => {
    const [products, setProducts] = useState([])


    const fetchProducts = () => {
        axios.get("http://localhost:8000/products")
            .then(res => setProducts(res.data))
            .catch(err => console.log(err))
    }
    useEffect(fetchProducts, [])

    const handleDelete = (id) => {
        axios.delete(`http://localhost:8000/products/${id}`)
            .then(res => fetchProducts())
            .catch(err => console.log(err))
    }


    return (
        <div>
            <h2>All Products</h2>
            {
                products.length > 0 ?
                    products.map((product, key) => {
                        return <div key={key} >
                            <Link to={`/products/${product._id}`} ><h4> {product.title}</h4></Link>
                            <button onClick={() => handleDelete(product._id)} >Delete</button>
                        </div>
                    })
                    :
                    <p>Loading...</p>
            }
        </div>
    )
}

export default AllProducts