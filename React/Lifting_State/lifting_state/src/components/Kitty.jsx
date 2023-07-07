
import React, { useState } from 'react'

const Kitty = props => {
  const { name, img, desc, id, removeFunction } = props

  const [adopted, setAdopted] = useState(false)

  return (
    <div className={adopted ? "KittyBoxAdopted" : "KittyBox"}>
      <h2>{name} {adopted ? "(Adopted)" : ""} </h2>
      <hr />
      <img src={img} alt={name} />
      <hr />
      <p>{desc}</p>
      <button onClick={() => setAdopted(!adopted)} >{adopted ? "Cancel" : "Adopt"}</button>
      <button onClick={() => removeFunction(id)} >Remove</button>
    </div>
  )
}

export default Kitty