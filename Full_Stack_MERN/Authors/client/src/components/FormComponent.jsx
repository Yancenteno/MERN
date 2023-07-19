import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const FormComponent = props => {
    const { onSubmitHandler, initialFullName } = props
    const [fullName, setFullName] = useState(initialFullName)

    return (
        <form onSubmit={e => { onSubmitHandler(e, { fullName }) }}>
            <label>Name:</label>
            <br />
            <input type="text" name='fullName' onChange={(e) => { setFullName(e.target.value) }} value={fullName} />
            <br />
            <button><Link to='/authors' >Cancel</Link></button>
            <button>Submit</button>
        </form>
    )
}

export default FormComponent