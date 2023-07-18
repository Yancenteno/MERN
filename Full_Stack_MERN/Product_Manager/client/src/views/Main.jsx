import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductForm from './ProductForm'
import AllProducts from './AllProducts'

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
      <ProductForm onSubmitProp={createProduct} initialTitle="" initialPrice="" initialDescription="" />
      <hr />
      <AllProducts products={item} removeFromDom={removeFromDom} />
    </div>
  )
}

export default Main