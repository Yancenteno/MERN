import React from 'react'
import { useParams } from 'react-router-dom'

const Number = () => {
    const { number } = useParams()
    return (
        <div>
            <h2>The number is: {number}</h2>
        </div>
    )
}

export default Number