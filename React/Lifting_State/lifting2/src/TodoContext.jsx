import React, { createContext, useReducer } from 'react';
import { todoReducer } from './TodoReducer';

export const TodoContext = createContext();

const initialState = [];

export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';

export const TodoProvider = ({ children }) => {
    const [currentTask, dispatch] = useReducer(todoReducer, initialState);

    const addTodo = (newTodo) => {
        dispatch({ type: ADD_TODO, payload: newTodo });
    };

    const removeTodo = (id) => {
        dispatch({ type: REMOVE_TODO, payload: id });
    };

    return (
        <TodoContext.Provider value={{ currentTask, addTodo, removeTodo }}>
            {children}
        </TodoContext.Provider>
    );
};
