// Components
import { Container } from "Common";
import { Logo, NavItem } from "./Components";

// Styles
import Style from "./Navbar.module.css";

const Navbar: React.FC = (): React.ReactNode => {
  return (
    <Container baseClassName={Style.navbar}>
      <Logo />
      <NavItem link={{ to: "", content: "Categories" }}>
        <ul></ul>
      </NavItem>
    </Container>
  );
};

export default Navbar;
