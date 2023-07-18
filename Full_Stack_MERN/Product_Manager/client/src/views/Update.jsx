import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import ProductForm from '../components/ProductForm'

const Update = () => {
    const { id } = useParams();
    const [item, setItem] = useState();
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get(`http://localhost:8000/products/${id}`)
            .then(res => {
                setItem(res.data);
                setLoaded(true)
            })
            .catch(err => console.log(err))
    }, [id])

    const updatedProduct = update => {
        axios.put(`http://localhost:8000/products/${id}`, update)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    return (
        <div>
            {loaded && (
                <ProductForm
                    onSubmitProp={updatedProduct}
                    initialTitle={item.title}
                    initialPrice={item.price}
                    initialDescription={item.description}
                />
            )}
        </div>
    )
}

export default Update