import { Routes, Route } from 'react-router-dom'
import MainView from './views/MainView';
import AddView from './views/AddView';
import EditView from './views/EditView';
import './myStyle.css'
import RandomView from './views/RandomView';


function App() {
  return (
    <div >
      <Routes>
        <Route path='/' element={<MainView />} />
        <Route path='/notes/new' element={<AddView />} />
        <Route path='/notes/:id' element={<EditView />} />
        <Route path='/notes/rand' element={<RandomView />} />
      </Routes>
    </div>
  );
}

export default App;
