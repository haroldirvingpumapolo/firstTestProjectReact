import { createContext, useEffect, useState } from "react";
import { tasks as data } from "../tasks";

export const TaskContext = createContext();

export const TaskContextProvider = ({ children }) => {
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
        working: false,
      },
    ]);
  }
  function deleteTask(taskId) {
    setTasks([...tasks].filter((deletorTask) => deletorTask.id !== taskId));
  }
  function checkTask(taskId, check) {
    !check
      ? setTasks(
          [...tasks].map((checktorTask) =>
            checktorTask.id === taskId
              ? { ...checktorTask, check: true }
              : checktorTask
          )
        )
      : setTasks(
          [...tasks].map((checktorTask) =>
            checktorTask.id === taskId
              ? { ...checktorTask, check: false }
              : checktorTask
          )
        );
  }

  function workingTask(taskId, working) {
    !working
      ? setTasks(
          [...tasks].map((worktorTask) =>
            worktorTask.id === taskId
              ? { ...worktorTask, working: true }
              : { ...worktorTask, working: false }
          )
        )
      : setTasks(
          [...tasks].map((worktorTask) => ({ ...worktorTask, working: false }))
        );
  }

  return (
    <TaskContext.Provider
      value={{ tasks, createTask, deleteTask, checkTask, workingTask }}
    >
      {children}
    </TaskContext.Provider>
  );
};
