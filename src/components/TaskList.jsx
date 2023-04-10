import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import classNames from "classnames";
export default function TaskList() {
  const { tasks, deleteTask, checkTask, workingTask } = useContext(TaskContext);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        userSelect: "none",
      }}
    >
      {tasks.map(({ title, description, id, check, working }) => {
        return (
          <div
            id={id}
            key={id}
            className={classNames(
              "capitalize",
              "border-8",
              "rounded-10",
              "p-5",
              "m-5",
              "w-96",
              "h-72",
              "flex",
              "flex-col",
              "items-center",
              "justify-between",
              `border-${check ? "green" : "red"}-500`,
              `text-${working ? "red" : undefined}-500`
            )}
            onClick={() => workingTask(id, working)}
          >
            <h1 className="text-3xl">{title}</h1>
            <p className="text-lg">{description}</p>
            <div className="flex w-full justify-between">
              <button
                className={classNames(
                  "h-30",
                  "rounded-md",
                  "border-none",
                  "w-20",
                  `text-${working ? "white" : undefined}`,
                  `bg-${check ? "green" : "red"}-500`
                )}
                onClick={(event) => {
                  event.stopPropagation();
                  deleteTask(id);
                }}
              >
                Delete
              </button>
              <h2 className="text-lg">
                {working ? "Working on this" : undefined}
              </h2>
              <button
                className={classNames(
                  "h-30",
                  "rounded-md",
                  "border-none",
                  "w-20",
                  `text-${working ? "white" : undefined}`,
                  `bg-${check ? "green" : "red"}-500`
                )}
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
