import React, { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";
export default function TaskForm() {
  const [titleValue, setTitleValue] = useState("");
  const [descriptionValue, setDescriptionValue] = useState("");

  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask(titleValue, descriptionValue);
    setTitleValue("");
    setDescriptionValue("");
  };
  return (
    <>
      <h1
        style={{
          margin: "0 0 0 43%",
          fontSize: "3rem",
          color: "#EF4444",
          fontWeight: "bold",
        }}
      >
        Task List
      </h1>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <input
          placeholder="Escribe tu tarea"
          onChange={(e) => setTitleValue(e.target.value)}
          value={titleValue}
          style={{
            border: "2px solid #EF4444",
            borderRadius: "2px",
            width: "250px",
            height: "40px",
          }}
        />
        <input
          placeholder="Escribe tu descripción"
          onChange={(e) => setDescriptionValue(e.target.value)}
          value={descriptionValue}
          style={{
            border: "2px solid #EF4444",
            borderRadius: "2px",
            width: "250px",
            height: "40px",
          }}
        />
        <button
          style={{
            border: "2px solid #EF4444",
            borderRadius: "2px",
            width: "150px",
            height: "40px",
            background: "#EF4444",
          }}
        >
          Save
        </button>
      </form>
    </>
  );
}
