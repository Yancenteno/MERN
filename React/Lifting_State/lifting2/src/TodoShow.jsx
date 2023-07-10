import React, { useContext, useState } from 'react';
import { TodoContext, REMOVE_TODO } from './TodoContext';

const TodoShow = (props) => {
    const { task, id } = props;
    const { dispatch } = useContext(TodoContext);
    const [line, setLine] = useState(false);

    const handleCheckBox = () => {
        setLine(!line);
    };

    const handleRemoveClick = () => {
        dispatch({ type: REMOVE_TODO, payload: id });
    };

    return (
        <div>
            <label style={{ textDecoration: line ? 'line-through' : 'none' }}>{task}</label>
            <input type="checkbox" checked={line} onChange={handleCheckBox} />
            <button onClick={handleRemoveClick}>Remove</button>
        </div>
    );
};

export default TodoShow;
