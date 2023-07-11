import logo from './logo.svg';
import './App.css';
import { Route, Routes, Link } from 'react-router-dom'
import SearchPoki from './components/SearchPoki';
import OnePoke from './components/OnePoke';
import AllPoke from './components/AllPoke';

function App() {
  return (
    <div className="App">
      <h1>Welcome to Pokedex</h1>
      <Link to='/' className='navLink'>Home</Link>
      |
      <Link to='/search' className='navLink'>Search</Link>
      |
      <Link to='/all' className='navLink'>All Pokemon</Link>


      <Routes>
        <Route path='/search' element={<SearchPoki />}></Route>
        <Route path='/one/:poke' element={<OnePoke />}></Route>
        <Route path='/all' element={<AllPoke />}></Route>
      </Routes>
    </div>
  );
}

export default App;
