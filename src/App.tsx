import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout.tsx/Layout";
import Faqs from "./pages/Faqs/Faqs";
import Home from "./pages/Home/Home";

import ErrorPage from "./pages/ErrorPage";
import '@fontsource/roboto/400.css';

// import  FlotaId  from "./pages/Flota/pages/FlotaId";
import SearchCar from "./pages/Flota/pages/SearchCar";
import LayoutFlota from "./pages/Flota/LayoutFlota";
import AddOptionsCar from "./pages/Flota/pages/AddOptionsCar";
import DataExtraUser from "./pages/Flota/pages/DataExtraUser";
function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: < Layout />,
      errorElement:<ErrorPage/>,
      children: [
        { index:true,
           element: <Home/> },
        { path: "/flota", 
        element: <LayoutFlota/>, 
        children:[
          { path: "/flota/ids", element: <SearchCar/> },
          { path: "/flota/ids/addoptions", element: <AddOptionsCar/> },
          { path: "/flota/ids/addoptions/datauser", element: <DataExtraUser/> },
        ]
      },
        
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

