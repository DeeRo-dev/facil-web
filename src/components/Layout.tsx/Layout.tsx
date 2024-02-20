import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";


const Layout: React.FC = () => {
  return (
    <main>
      <Nav/>
      <Outlet />
      <Footer/>
    </main>
  );
};

export default Layout;