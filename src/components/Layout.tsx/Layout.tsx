import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../Nav/Nav";


const Layout: React.FC = () => {
  return (
    <main>
      <Nav/>
      <Outlet />
    </main>
  );
};

export default Layout;