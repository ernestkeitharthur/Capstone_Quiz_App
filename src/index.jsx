// The main entry point for the React app. It renders the App component into the root div
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/index.css"; // TailwindCSS stylesheet

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);