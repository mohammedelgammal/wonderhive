// Components
import { Link } from "react-router-dom";

// Styles
import Style from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={Style.navbar}>
      <h3>Recipe Application</h3>
      <div className={Style.links}></div>
    </div>
  );
};

export default Navbar;
