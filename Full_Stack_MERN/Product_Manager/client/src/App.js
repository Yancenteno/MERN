import './App.css';
import New from './views/New';
import ProductDetail from './views/ProductDetail';
import EditProducts from './views/EditProducts';
import React from 'react';
import { Routes, Route } from 'react-router-dom';



function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/products/' element={<New />} />
        <Route path='/products/:id' element={<ProductDetail />} />
        <Route path='/products/:id/edit' element={<EditProducts />} />
      </Routes>
    </div>
  );
}

export default App;
