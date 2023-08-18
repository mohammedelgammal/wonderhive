// Components
import { Container } from "Common";
import Logo from "./Components/Logo/Logo";

// Styles
import Style from "./Navbar.module.css";

const Navbar: React.FC = (): React.ReactNode => {
  return (
    <Container baseClassName={Style.navbar}>
      <Logo />
    </Container>
  );
};

export default Navbar;
