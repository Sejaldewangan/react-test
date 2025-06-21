import React from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav className="p-4 bg-gray-800 flex gap-4 h-20 items-center justify-center text-white">
        <Link to="/" className="mr-4">
          Toggle
        </Link>
        <Link to="/Friut" className="mr-4">
          Friut
        </Link>
        <Link to="/Clock">Clock</Link>
        <Link to="/Input">Input</Link>
      </nav>
      <div className="w-full ">
        <div className="fixed z-10 h-screen w-[20%] bg-slate-500  text-4xl text-white  ">
          i am sidebar
        </div>
        <main className=" w-[80%] ml-[20%]">
          <Outlet />
        </main>
        
      </div>
    </>
  );
};

export default Layout;
