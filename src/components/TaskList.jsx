import React from "react";

export default function TaskList({ tasks, removeText }) {
  return (
    <div style={{
      display:'flex',
      flexWrap:'wrap',
      justifyContent:'center'
    }}>
      {tasks.map(({ title, description }, i) => {
        return (
          <div
            id={i}
            key={i}
            className="border-red-500 border-8 rounded-10 text-red  p-10 m-10 w-5/12 flex flex-col justify-center items-center"
          >
            <h1>{title}</h1>
            <p style={{ fontSize: "2rem" }}>{description}</p>
            <button
              id={i}
              className="w-1/5 h-30 bg-red-500 rounded-md border-none my-10"
              onClick={(e) => {
                e.target.parentNode.style.display = "none";
                removeText();
              }}
            >
              Delete
            </button>
            <button
              className="w-1/5 h-30 bg-red-500 rounded-md border-none "
              onClick={(e) => {
                e.target.classList.toggle("check");
                e.target.classList.contains("check")
                  ? ((e.target.style.background = "green"),
                    (e.target.parentNode.style.border = "10px solid green"),
                    (e.target.previousSibling.style.background = "green"))
                  : ((e.target.style.background = "#EF4444"),
                    (e.target.parentNode.style.border = "10px solid #EF4444"),
                    (e.target.previousSibling.style.background = "#EF4444"));
              }}
            >
              Cheack
            </button>
          </div>
        );
      })}
    </div>
  );
}
