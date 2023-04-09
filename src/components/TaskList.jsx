import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
export default function TaskList() {
  const { tasks, deleteTask, checkTask, workingTask } = useContext(TaskContext);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {tasks.map(({ title, description, id, check, working }) => {
        return (
          <div
            id={id}
            key={id}
            className={
              !check
                ? "capitalize border-red-500 border-8 rounded-10 p-5 m-5 w-96 h-72 flex flex-col items-center justify-between"
                : "capitalize border-green-500 border-8 rounded-10 p-5 m-5 w-96 h-72 flex flex-col items-center justify-between"
            }
            style={!working ? { color: "" } : { color: "red" }}
            onClick={() => workingTask(id, working)}
          >
            <h1 className="text-3xl">{title}</h1>
            <p className="text-lg">{description}</p>
            <div className="flex w-full justify-between">
              <button
                className={
                  !check
                    ? "w-1/5 h-30 bg-red-500 rounded-md border-none"
                    : "w-1/5 h-30 bg-green-500 rounded-md border-none"
                }
                onClick={(event) => {
                  event.stopPropagation();
                  deleteTask(id);
                }}
              >
                Delete
              </button>
              <h2 className="text-lg">{!working ? null : "Working on this"}</h2>
              <button
                className={
                  !check
                    ? "w-1/5 h-30 bg-red-500 rounded-md border-none "
                    : "w-1/5 h-30 bg-green-500 rounded-md border-none "
                }
                onClick={(event) => {
                  event.stopPropagation();
                  checkTask(id, check);
                }}
              >
                Check
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
