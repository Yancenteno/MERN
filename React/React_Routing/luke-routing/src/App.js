import './App.css';
import Number from './components/Number';
import React from 'react'
import { useState } from 'react'
import { Routes, Route, Link, useNavigate, useSearchParams } from 'react-router-dom'

function App() {
  const [number, setNumber] = useState("")

  return (
    <div className="App">
      <Routes>
        <Route path='/home' element={<h1>Welcome</h1>}></Route>
        <Route path='/:number' element={<Number />}></Route>
        <Route path='/home' element={<h1>The word is: </h1>}></Route>
        <Route path='/home' element={<h1>Welcome</h1>}></Route>
      </Routes>
    </div>
  );
}

export default App;
