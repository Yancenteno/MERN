import './App.css';
import ProductDetail from './views/ProductDetail';
import Update from './views/Update';
import Main from './views/Main';
import React from 'react';
import { Routes, Route } from 'react-router-dom';



function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/products/' element={<Main />} />
        <Route path='/products/:id' element={<ProductDetail />} />
        <Route path='/products/:id/edit' element={<Update />} />
      </Routes>
    </div>
  );
}

export default App;
