// Components
import { Navbar, Footer } from "./";

// Libraries
import { Outlet } from "react-router-dom";

// Styles
import Style from "./MainLayout.module.css";

const MainLayout = () => {
  return (
    <div className={Style.mainLayout}>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
