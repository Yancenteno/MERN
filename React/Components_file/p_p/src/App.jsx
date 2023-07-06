import './App.css';
import PersonCard from './components/PersonCard';
import React from 'react'
import './newStyle.css'

function App() {
  return (
    <div >
      <PersonCard firstName={"Jane"} lastName={"Doe"} age={45} hairColor={"Black"} />
      <PersonCard firstName={"John"} lastName={"Smith"} age={88} hairColor={"Brown"} />
    </div>
  );
}

export default App;
