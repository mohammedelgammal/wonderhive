// Components
import Logo from "./Components/Logo/Logo";

// Styles
import Style from "./Navbar.module.css";

const Navbar: React.FC = (): React.ReactNode => {
  return (
    <div className={Style.navbar}>
      <Logo />
    </div>
  );
};

export default Navbar;
