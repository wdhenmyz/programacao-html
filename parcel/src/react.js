import React from "react";
import { createRoot } from "react-dom/client";
import App from "./react.jsx";

// Seleciona a div onde o React será renderizado
const rootElement = document.getElementById("app");
const root = createRoot(rootElement);

// Renderiza o componente App
root.render(<App />);


