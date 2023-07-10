

import React from 'react';
import TodoList from './TodoList';
import TodoShow from './TodoShow';
import { TodoProvider } from './TodoContext';

const App = () => {
  return (
    <TodoProvider>
      <div>
        <h1>Todo List</h1>
        <TodoList />
        <TodoShow />
      </div>
    </TodoProvider>
  );
};

export default App;



