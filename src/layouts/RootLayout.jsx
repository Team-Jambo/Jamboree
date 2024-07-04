import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <div className="my-[0.5px]">
        <Outlet />
      </div>

      <Footer />
    </>
  );
};

export default RootLayout;
