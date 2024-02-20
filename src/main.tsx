import * as React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";

const rootElement = document.getElementById("root");

if (rootElement) {
  createRoot(rootElement).render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );
} else {
  console.error("No se encontró el elemento con el ID 'root'");
}
