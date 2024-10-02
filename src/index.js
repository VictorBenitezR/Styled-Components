import React from "react";
import ReactDOM from "react-dom/client"; // Cambiado a react-dom/client
import App from "./App";

// Crear el root con createRoot()
const root = ReactDOM.createRoot(document.getElementById("root"));

// Usar root.render en lugar de ReactDOM.render
root.render(
    <App />
);
