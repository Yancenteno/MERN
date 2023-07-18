import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductForm from '../components/ProductForm'
import ProductList from './ProductList'

const Main = () => {
  const [item, setItem] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/products')
      .then(res => {
        setItem(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);


  const removeFromDom = itemId => {
    setItem(item.filter(product => product._id !== itemId));
  };


  const createProduct = newItem => {
    axios.post('http://localhost:8000/products', newItem)
      .then(res => {
        setItem([...item, res.data]);
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <div>
      <h1>Add Your Product</h1>
      <ProductForm onSubmitProp={createProduct} initialTitle="" initialPrice="" initialDescription="" />
      <hr />
      <ProductList products={item} removeFromDom={removeFromDom} />
    </div>
  )
}

export default Main