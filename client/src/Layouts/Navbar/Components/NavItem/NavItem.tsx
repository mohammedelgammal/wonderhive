import { useState } from "react";

// Components
import { Navlink } from "Common";

// Types
import { LinkType } from "Types/Common";

// Styles
import Style from "./NavItem.module.css";

interface Props {
  link: LinkType;
  children: React.ReactNode;
}

const NavItem: React.FC<Props> = ({ link, children }): React.ReactNode => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const isHoveredContent: string = `${Style.hoverContent} ${Style.isHovered}`;

  return (
    <div
      className={Style.navItem}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Navlink link={link} />
      <div className={isHovered ? isHoveredContent : Style.hoverContent}>
        {children}
      </div>
    </div>
  );
};

export default NavItem;
