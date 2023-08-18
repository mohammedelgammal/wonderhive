// Paths
import paths from "Data/Constants/Routes/paths";

// Libraries
import { Link } from "react-router-dom";

// Images
import { ReactComponent as UdemyLogo } from "Assets/imgs/Udemy.svg";

// Styles
import Style from "./Logo.module.css";

const Logo: React.FC<{}> = (): React.ReactNode => {
  return (
    <Link className={Style.logo} to={paths.MAIN.homepage}>
      <UdemyLogo />
    </Link>
  );
};

export default Logo;
