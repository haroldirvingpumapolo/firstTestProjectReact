import React, { useEffect, useState } from "react";
import { tasks as data } from "../tasks";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";

function App() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    setTasks(data);
  }, []);
  function createTask(title, description) {
    setTasks([
      ...tasks,
      {
        id: Date.now(),
        title: title,
        description: description,
        check: false,
      },
    ]);
  }
  function deleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }
  function checkTask(taskId, check) {
    !check
      ? setTasks(
          tasks.map((task) =>
            task.id === taskId ? { ...task, check: true } : task
          )
        )
      : setTasks(
          tasks.map((task) =>
            task.id === taskId ? { ...task, check: false } : task
          )
        );
  }

  return (
    <div>
      <TaskForm createTask={createTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} checkTask={checkTask} />
    </div>
  );
}

export default App;
