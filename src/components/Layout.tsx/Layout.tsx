import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";


const Layout: React.FC = () => {
  const mainStyle: React.CSSProperties = {
    backgroundColor: "#DFE4EA"
  };
  
 
  return (
    <main style={mainStyle}>
      <Nav/>
      <Outlet />
      <Footer/>
    </main>
  );
};

export default Layout;