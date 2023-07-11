import "./lion.css"
import Post from './components/Post';
import axios from 'axios'
import { useEffect, useState } from "react";

function App() {

  const [quote, setQuote] = useState("")

  const [lionPic, setLionPic] = useState("")

  const getQuoteAxios = () => {
    axios.get("https://api.themotivate365.com/stoic-quote")
      .then(res => setQuote(res.data))
      .catch(err => console.log(err))

    axios.get("https://randombig.cat/roar.json")
      .then(res => setLionPic(res.data.url))
      .catch(err => console.log(err))
  }

  useEffect(getQuoteAxios, [])

  return (
    <div className="App">
      <h1>Lion Motivation</h1>
      <button className='bigButton' onClick={getQuoteAxios}>Next</button>

      <Post quote={quote} pic={lionPic} />
    </div>
  );
}

export default App;