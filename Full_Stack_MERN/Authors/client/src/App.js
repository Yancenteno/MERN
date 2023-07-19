import { Routes, Route } from 'react-router-dom'
import EditView from './views/EditView';
import NewView from './views/NewView';
import MainView from './views/MainView';


function App() {
  return (
    <div>
      <Routes>
        <Route path='/authors' element={<MainView />} />
        <Route path='/authors/new' element={<NewView />} />
        <Route path='/authors/:id' element={<EditView />} />
      </Routes>
    </div>
  );
}

export default App;
