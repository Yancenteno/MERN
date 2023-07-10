import React, { useState } from 'react';
import "./Tab.css"

const TodoShow = (props) => {
    const { task, id, removeFunction } = props;
    const [line, setLine] = useState(false);
    const handleCheckBox = () => {
        setLine(!line)
    }

    return (
        <div>
            <label style={{ textDecoration: line ? "line-through" : "none" }}>{task}</label>
            <input type="checkbox" id='tasks' name='tasks' onChange={handleCheckBox} />
            <button className='remove' onClick={() => removeFunction(id)}>Remove</button>
        </div>
    );
};

export default TodoShow;
