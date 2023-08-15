//  Components
import { Sidebar, Footer } from "Layouts";

// Libraries
import { Outlet } from "react-router-dom";

// Styles
import Style from "./AuthLayout.module.css";

const AuthLayout: React.FC = () => {
  return (
    <div className={Style.auth}>
      <Sidebar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default AuthLayout;
