import React, { useState } from 'react'

const TodoList = (props) => {
    const { addFunction } = props;

    const [todoData, setTodoData] = useState({ myTask: "" });

    const formSubmit = (e) => {
        e.preventDefault();
        addFunction(todoData);
        setTodoData({ myTask: "" });
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setTodoData(currentData => ({ ...currentData, [name]: value }))
    }


    return (
        <form onSubmit={formSubmit} >
            <input type="text" name='myTask' onChange={handleChange} value={todoData.myTask} />
            <button>Add</button>
        </form>
    )
}

export default TodoList