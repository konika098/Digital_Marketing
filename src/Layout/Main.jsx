import React from "react";
import { Outlet } from "react-router-dom";

import Footer from "../Components/SharedComponent/Footer/Footer";
import Menubar from "../Components/SharedComponent/Menubar/Menubar";

const Main = () => {
  return (
    <>
      <Menubar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Main;
