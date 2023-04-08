import React from "react";
import { AiFillRightCircle } from "react-icons/ai";

interface NavItemProps {
  title: string;
  Icon: any;
}

const NavItem: React.FC<NavItemProps> = ({ Icon, title }) => {
  return (
    <div className="flex cursor-pointer items-center justify-between px-2 py-4 mb-2 bg-[#181818] rounded-md">
      <div className="flex items-center gap-2">
        <Icon />
        <p>{title}</p>
      </div>
      <AiFillRightCircle />
    </div>
  );
};

export default NavItem;
