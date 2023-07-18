import { Routes, Route, Link } from 'react-router-dom'
import './Movies.css'
import Dashboard from "./views/Dashboard";
import New from "./views/New";
import Update from "./views/Update";



function App() {
  return (
    <div className="App">

      <div className='navBar'>
        <h1 className='pageTitle'>Cube Smasher Video</h1>
        <Link className='navLink' to='/' >Dashboard</Link>
        <Link className='navLink' to='/new' >Add a Movie</Link>
      </div>

      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/new' element={<New />} />
        <Route path='/update/:id' element={<Update />} />
      </Routes>
    </div>
  );
}

export default App;
