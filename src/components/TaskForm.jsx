import React, { useState } from "react";
export default function TaskForm({ createTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    createTask(title, description);
    setTitle("")
    setDescription("")
  };
  return (
    <>
    <h1 style={{
      margin:"0 0 0 43%",
      fontSize:'3rem',
      color:'#EF4444',
      fontWeight:'bold'
    }}>Task List</h1>
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems:'center',
        
      }}
    >
      <input
        placeholder="Escribe tu tarea"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        style={{
          border: "2px solid #EF4444",
          borderRadius: "2px",
          width: "250px",
          height: "40px",
        }}
      />
      <input
        placeholder="Escribe tu descripción"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
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
