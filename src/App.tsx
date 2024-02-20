import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout.tsx/Layout";
import Faqs from "./pages/Faqs/Faqs";
import Home from "./pages/Home/Home";
import { Cars } from "./pages/Cars/Cars";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: < Layout />,
      children: [
        { index:true, element: <Home/> },
        { path: "/flota", element: <Cars /> },
        { path: "/faqs", element: <Faqs /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;

