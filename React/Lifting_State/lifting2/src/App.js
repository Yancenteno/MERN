

// import React from 'react';
// import TodoList from './TodoList';
// import TodoShow from './TodoShow';
// import { TodoProvider } from './TodoContext';

// const App = () => {
//   return (
//     <TodoProvider>
//       <div>
//         <h1>Todo List</h1>
//         <TodoList />
//         <TodoShow />
//       </div>
//     </TodoProvider>
//   );
// };

// export default App;

// import React, { useState } from 'react';
// import BoxForm from './components/BoxForm';
// import Box from './components/Box';

// import TabView from "./components/TabView"



// function App() {
//   const [box, setBox] = useState([]);

//   const addBox = boxColor => {
//     setBox(currentBox => ([...currentBox, boxColor]))
//   }

//   return (
//     <div>
//       <BoxForm addBox={addBox} />
//       {box.map((color, i) => (
//         <Box key={i} color={color} />
//       ))}
//     </div>
//   );
// }

// export default App;



import { useState } from "react"
import TodoList from "./components/TodoList"
import TodoShow from "./components/TodoShow"




function App() {
  const [currentTask, setCurrentTask] = useState([]);

  const addTask = (newTask) => {
    setCurrentTask(activeTask => ([...activeTask, newTask]))
  }

  const removeTask = id => {
    let left = currentTask.slice(0, id)
    let right = currentTask.slice(id + 1)

    setCurrentTask(left.concat(right))
  }
  return (
    <div>
      <TodoList addFunction={addTask} />
      {currentTask.map((tasking, i) => (
        <TodoShow
          key={i}
          id={i}
          removeFunction={removeTask}
          task={tasking.myTask} />
      ))}
    </div>
  )
}

export default App



