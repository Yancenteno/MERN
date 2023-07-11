// import "./lion.css"
// import Post from './components/Post';
// import axios from 'axios'
// import { useEffect, useState } from "react";

// function App() {

//   const [quote, setQuote] = useState("")

//   const [lionPic, setLionPic] = useState("")

//   const getQuoteAxios = () => {
//     axios.get("https://api.themotivate365.com/stoic-quote")
//       .then(res => setQuote(res.data))
//       .catch(err => console.log(err))

//     axios.get("https://randombig.cat/roar.json")
//       .then(res => setLionPic(res.data.url))
//       .catch(err => console.log(err))
//   }

//   useEffect(getQuoteAxios, [])

//   return (
//     <div className="App">
//       <h1>Lion Motivation</h1>
//       <button className='bigButton' onClick={getQuoteAxios}>Next</button>

//       <Post quote={quote} pic={lionPic} />
//     </div>
//   );
// }

// export default App;
import { useState } from 'react'
import About from './components/About'
import SayWord from './components/SayWord'
import React from 'react'
import { Routes, Route, Link, useNavigate, useSearchParams } from 'react-router-dom'


function App() {
  const [word, setWord] = useState("")

  const navigator = useNavigate()
  const buttonClick = () => {
    navigator('/say/' + word)
  }

  return (
    <div className="App">
      <h1>Hello!</h1>

      <Link to={"/"}>Home</Link>
      <Link to={"/hello"}>Hello</Link>
      <Link to={"/About"}>About</Link>
      <hr />

      <input type='text' onChange={e => (setWord(e.target.value))} value={word} ></input>

      <button onClick={buttonClick} >Take me somewhere</button>

      <Routes>
        <Route path='/hello' element={<h1>HELLO!</h1>}></Route>

        <Route path='/about' element={<About />} ></Route>

        <Route path='/' element={<p>Home</p>} ></Route>

        <Route path='/say/:word' element={<SayWord />} ></Route>
      </Routes>
    </div>
  )
}

export default App