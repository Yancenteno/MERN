import React, { useState } from 'react'


const BoxForm = ({ addBox }) => {
    const [color, setColor] = useState("")

    const handleChange = (e) => {
        e.preventDefault();
        addBox(color);
        setColor("")
    }

    return (
        <div>
            <form onSubmit={handleChange}>
                <label>Color</label>
                <input type="text" onChange={(e) => setColor(e.target.value)} value={color} />
                <button type='submit'>Add</button>
            </form>

        </div>
    )
}


export default BoxForm
