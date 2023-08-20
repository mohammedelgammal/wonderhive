// Libraries
import { Link } from "react-router-dom";

// Styles
import Style from "./NavItem.module.css";

interface Link {
  content: string | React.ReactNode;
  to: string;
}

interface Props {
  link: Link;
  children: React.ReactNode;
}

const NavItem: React.FC<Props> = ({ link, children }): React.ReactNode => {
  return (
    <div className={Style.navItem}>
      <Link className={Style.link} to={link.to}>
        {link.content}
      </Link>
    </div>
  );
};

export default NavItem;
