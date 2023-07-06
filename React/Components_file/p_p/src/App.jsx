import './App.css';
import PersonCard from './components/PersonCard';
import React from 'react'
import './newStyle.css'

function App() {
  return (
    <div className="App">
      {/* <PersonCard firstName={"Jane"} lastName={"Doe"} age={45} hairColor={"Black"} />
      <PersonCard firstName={"John"} lastName={"Smith"} age={88} hairColor={"Brown"} /> */}
      <PersonCard header={"Header Prop"}>
        <h1>These are children</h1>
        <p>This is a child</p>
        <p>This is another child</p>
        <p>This is even another child</p>
      </PersonCard>
    </div>
  );
}

export default App;
