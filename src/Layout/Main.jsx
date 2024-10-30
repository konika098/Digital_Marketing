import { Outlet } from "react-router-dom";

import Footer from "../Components/SharedComponent/Footer";
import Menubar from "../Components/SharedComponent/Menubar";
import ScrollToTop from "../Components/ScrollToTop";

const Main = () => {
  return (
    <>
      <ScrollToTop />
      <Menubar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Main;
