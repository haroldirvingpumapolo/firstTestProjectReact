import { createContext, useEffect, useState } from "react";
import { tasks as data } from "../tasks";

export const TaskContext = createContext();

export const TaskContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    setTasks(data);
  }, []);

  function createTask(titleValue, descriptionValue) {
    setTasks([
      ...tasks,
      {
        id: Date.now(),
        title: titleValue,
        description: descriptionValue,
        check: false,
        working: false,
      },
    ]);
  }

  function deleteTask(idValue) {
    setTasks(tasks.filter((deletorTask) => deletorTask.id !== idValue));
  }

  function checkTask(idValue, CheckValue) {
    setTasks(
      tasks.map((checktorTask) => {
        return checktorTask.id === idValue
          ? { ...checktorTask, check: CheckValue ? false : true }
          : checktorTask;
      })
    );
  }

  function workingTask(idValue, workingValue) {
    setTasks(
      tasks.map((worktorTask) =>
        worktorTask.id === idValue
          ? { ...worktorTask, working: workingValue ? false : true }
          : { ...worktorTask, working: false }
      )
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
