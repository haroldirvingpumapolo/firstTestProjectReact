import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import "./index.css";
import { TaskContextProvider } from "./context/TaskContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <TaskContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </TaskContextProvider>
);
