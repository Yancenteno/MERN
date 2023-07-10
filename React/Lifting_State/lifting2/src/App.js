// import React, { useState } from 'react';
// import BoxForm from './components/BoxForm';
// import Box from './components/Box';

// import TabView from "./components/TabView"

import { useState } from "react"
import TodoList from "./components/TodoList"
import TodoShow from "./components/TodoShow"


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





// function App() {

//   return (
//     <div >
//       <TabView />
//     </div>
//   )
// }

// export default App

// function App() {
//   const [currentTask, setCurrentTask] = useState([]);

//   const addTask = (newTask) => {
//     setCurrentTask(activeTask => ([...activeTask, newTask]))
//   }

//   const removeTask = id => {
//     let left = currentTask.slice(0, id)
//     let right = currentTask.slice(id + 1)

//     setCurrentTask(left.concat(right))
//   }
//   return (
//     <div>
//       <TodoList addFunction={addTask} />
//       {currentTask.map((tasking, i) => (
//         <TodoShow
//           key={i}
//           id={i}
//           removeFunction={removeTask}
//           task={tasking.myTask} />
//       ))}
//     </div>
//   )
// }

// export default App


import React from 'react'
import ShowList from "./components/ShowList"

function App() {
  return (
    <div>
      <ShowList />
    </div>
  )
}

export default App