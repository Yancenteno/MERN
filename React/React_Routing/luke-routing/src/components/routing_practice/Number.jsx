import React from 'react'
import { useParams } from 'react-router-dom'

const Number = () => {
    const { word } = useParams()

    const wordCheck = !isNaN(word)

    return (
        <div>
            {wordCheck ? <h2>The number is: {word} </h2> : <h2>The word is : {word}</h2>}
        </div>
    )
}

export default Number