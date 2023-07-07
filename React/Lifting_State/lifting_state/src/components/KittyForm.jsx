import React, { useState } from 'react'

const KittyForm = props => {
    const { addFunction } = props

    const [kittyData, setKittyData] = useState({
        kName: "",
        kDesc: "",
        kImg: ""
    })

    const formSubmit = (e) => {
        e.preventDefault()
        addFunction(kittyData)

        setKittyData({
            kName: "",
            kDesc: "",
            kImg: ""
        })
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setKittyData(currentData => ({ ...currentData, [name]: value }))
    }

    return (
        <form onSubmit={formSubmit}>
            <h3>Add a kitty!</h3>

            <label>Name:</label>
            <input type="text" name="kName" onChange={handleChange} value={kittyData.kName} />
            <br />
            <label>Description:</label>
            <input type="text" name="kDesc" onChange={handleChange} value={kittyData.kDesc} />
            <br />
            <label>Image Link:</label>
            <input type="text" name="kImg" onChange={handleChange} value={kittyData.kImg} />
            <br />
            <button>Add</button>
        </form>
    )
}

export default KittyForm