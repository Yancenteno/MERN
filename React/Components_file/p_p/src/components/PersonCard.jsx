import React from 'react'
import '../newStyle.css'

const PersonCard = (props) => {
    const { firstName, lastName, age, hairColor } = props
    return (
        <div className='card'>
            <h1>{lastName}, {firstName}</h1>
            <h2>Age: {age}</h2>
            <h3>Hair Color: {hairColor}</h3>
        </div>
    );
}

export default PersonCard