import React, { useState, useEffect } from 'react';
import PokiDex from './components/PokiDex';
import axios from 'axios'
import './App.css';

function App() {
  const [currentList, setCurrentList] = useState(10);
  //(currentList)sets the number of pokemon will show

  const [pokemonData, setPokemonData] = useState([]);
  //


  const pokiList = () => {
    setCurrentList(currentList + 797);
  }; //This connects to the button and when clicked the list limit increases by the number in this function

  const fetchPoki = () => {
    axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${currentList}`)
      .then(res => setPokemonData(res.data.results))
      .catch(err => console.log(err));
  };

  useEffect(() => {
    fetchPoki();
  }, [currentList]);

  return (
    <div className="App">
      <button onClick={pokiList}>Fetch Pokemon</button>
      <PokiDex poki={pokemonData} />
    </div>
  );
}

export default App;




