import React from "react";

export default function TaskList({ tasks, deleteTask, checkTask }) {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {tasks.map(({ title, description, id, check }) => {
        return (
          <div
            id={id}
            className={
              !check
                ? "capitalize border-red-500 border-8 rounded-10 p-5 m-5 w-96 h-72 flex flex-col items-center justify-between"
                : "capitalize border-green-500 border-8 rounded-10 p-5 m-5 w-96 h-72 flex flex-col items-center justify-between"
            }
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
                onClick={() => deleteTask(id)}
              >
                Delete
              </button>
              <button
                className={
                  !check
                    ? "w-1/5 h-30 bg-red-500 rounded-md border-none "
                    : "w-1/5 h-30 bg-green-500 rounded-md border-none "
                }
                onClick={() => checkTask(id, check)}
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
