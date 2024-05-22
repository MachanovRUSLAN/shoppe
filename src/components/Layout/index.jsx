import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import { Outlet } from "react-router";

function Layout() {
  return (
    <div className="w-[95%] m-auto">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
