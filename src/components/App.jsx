import React, { useEffect, useState } from "react";
import { tasks as data } from "../tasks";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";

function App() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    setTasks(data);
  }, []);
  function createTask(title,description) {
    setTasks([...tasks,{
      id:tasks.length,
      title:title,
      description:description
    }])
  }
  function removeText(){
    setTasks([...tasks])
  }

  return (
    <div >
      <TaskForm createTask={createTask}/>
      <TaskList tasks={tasks} removeText={removeText}/>
    </div>
  )
}

export default App
