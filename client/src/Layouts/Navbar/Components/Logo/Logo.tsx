// Images
import { ReactComponent as Udemy } from "Assets/imgs/Udemy.svg";

// Styles
import Style from "./Logo.module.css";

const Logo = () => {
  return (
    <div className={Style.logo}>
      <Udemy />
    </div>
  );
};

export default Logo;
