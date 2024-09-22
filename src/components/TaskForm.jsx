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

  const isButtonDisabled = !titleValue.trim() || !descriptionValue.trim();

  return (
    <section className="form" style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column'
    }}>
      <h1
        style={{
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
          width: '100%',
          maxWidth: "1024px"
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
          disabled={isButtonDisabled}
          style={{
            border: "2px solid #EF4444",
            borderRadius: "2px",
            width: "150px",
            height: "40px",
            background: isButtonDisabled ? "#f87171" : "#EF4444",
            cursor: isButtonDisabled ? "not-allowed" : "pointer",
            opacity: isButtonDisabled ? 0.6 : 1,
          }}
        >
          Save
        </button>
      </form>
    </section >
  );
}
