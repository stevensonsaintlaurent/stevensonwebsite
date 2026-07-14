import React from "react";
import Landing from "./Landing";
import Navbar from "./../componets/Navbar";
import { Outlet } from "react-router-dom";
import Header from "../componets/Header";

const HomeLayout = () => {
  return (
    <>
      <Header />
      <Navbar />
      <section>
        <Outlet />
      </section>
    </>
  );
};

export default HomeLayout;
