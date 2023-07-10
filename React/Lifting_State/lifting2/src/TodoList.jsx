import React, { useContext, useState } from 'react';
import { TodoContext, ADD_TODO } from './TodoContext';

const TodoList = () => {
    const { dispatch } = useContext(TodoContext);
    const [todoData, setTodoData] = useState('');

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (todoData.trim() !== '') {
            const newTodo = {
                id: Date.now(),
                task: todoData,
            };
            dispatch({ type: ADD_TODO, payload: newTodo });
            setTodoData('');
        }
    };

    const handleInputChange = (e) => {
        setTodoData(e.target.value);
    };

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <input
                    type="text"
                    value={todoData}
                    onChange={handleInputChange}
                    placeholder="Enter a new task"
                />
                <button type="submit">Add</button>
            </form>
        </div>
    );
};

export default TodoList;
