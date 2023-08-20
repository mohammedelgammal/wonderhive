// Libraries
import { Link } from "react-router-dom";

// Types
import { LinkType } from "Types/Common";

// Styles
import Style from "./Navlink.module.css";

const Navlink: React.FC<{ link: LinkType }> = ({ link }): React.ReactNode => {
  return (
    <Link className={Style.link} to={link.to}>
      {link.content}
    </Link>
  );
};

export default Navlink;
