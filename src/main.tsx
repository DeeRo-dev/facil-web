import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
// import Root from "./routes/root";
import ErrorPage from "./pages/ErrorPage";
import App from "./App";

const rootElement = document.getElementById("root");

if (rootElement) {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      errorElement: <ErrorPage />,
    },
  ]);

  createRoot(rootElement).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
} else {
  console.error("No se encontró el elemento con el ID 'root'");
}
