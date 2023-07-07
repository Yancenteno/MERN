// import UserForm from './components/UserForm';
import { useState } from 'react';
import './components/Cat.css'
import Kitty from './components/Kitty';
import KittyForm from './components/KittyForm';



function App() {

  const [kitties, setKitties] = useState([])


  const addKitty = newKitty => {
    setKitties(currentKitties => ([...currentKitties, newKitty]))
  }

  const removeKitty = id => {
    let left = kitties.slice(0, id)
    let right = kitties.slice(id + 1)

    setKitties(left.concat(right))
  }

  return (
    <div>
      {/* <UserForm /> */}
      {/* <BoxGenerator /> */}
      <h1 className='title'>Purrfect Match!</h1>
      <hr />
      <KittyForm addFunction={addKitty} />
      {/* <Kitty name="Olli" img="https://uploads.dailydot.com/2018/10/olli-the-polite-cat.jpg" desc="Is very polite" /> */}
      {
        kitties.map((cat, i) => {
          return (
            <Kitty key={i} id={i} removeFunction={removeKitty} name={cat.kName} img={cat.kImg} desc={cat.kDesc} />
          )
        })
      }
    </div>
  );
}


export default App;
