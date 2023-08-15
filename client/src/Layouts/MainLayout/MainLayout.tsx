// Components
import { Navbar, Footer } from "../";

// Libraries
import { Outlet } from "react-router-dom";

// Styles
import Style from "./MainLayout.module.css";

const MainLayout: React.FC = (): React.ReactNode => {
  return (
    <div className={Style.mainLayout}>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
