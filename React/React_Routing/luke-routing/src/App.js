// import Number from './components/routing_practice/Number';
// import Color from './components/routing_practice/Color';

// function App() {

//   return (
//     <div className="App">
//       <Routes>
//         <Route path="/home" element={<h1>Welcome</h1>} />
//         <Route path="/:word" element={<Number />} />
//         <Route path="/:word/:firstColor/:secondColor" element={<Color />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;


import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SearchStar from './components/star_wars/SearchStar';
import SpacePeople from './components/star_wars/SpacePeople';
import Planet from './components/star_wars/Planet';


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<SearchStar />} />
        <Route path='/people/:person' element={<SpacePeople />} />
        <Route path='/planets/:location' element={<Planet />} />
      </Routes>

    </div>
  );
}

export default App;


