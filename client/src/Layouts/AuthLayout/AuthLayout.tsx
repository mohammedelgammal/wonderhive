//  Components
import { Sidebar, Footer } from "Layouts";
import { Container } from "Common";

// Libraries
import { Outlet } from "react-router-dom";

// Styles
import Style from "./AuthLayout.module.css";

const AuthLayout: React.FC = (): React.ReactNode => {
  return (
    <Container baseClassName={Style.admin}>
      <Sidebar />
      <Outlet />
      <Footer />
    </Container>
  );
};

export default AuthLayout;
