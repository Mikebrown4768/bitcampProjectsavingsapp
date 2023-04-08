import React from "react";
import { AiOutlineBank } from "react-icons/ai";
import { GiProgression } from "react-icons/gi";
import { GoSettings } from "react-icons/go";
import NavItem from "./NavItem";
import Avatar from "../../Avatar";

interface LeftNavProps {}

const navItems = [
  { title: "Banking", Icon: AiOutlineBank },
  { title: "Investment", Icon: GiProgression },
  { title: "Settings", Icon: GoSettings },
];

const LeftNav: React.FC<LeftNavProps> = ({}) => {
  return (
    <div className="flex flex-col justify-between h-screen flex-[0.2] bg-black text-white">
      <div className="p-4">
        <p className="text-lg font-bold mb-4">BitCamp Saving</p>

        {navItems.map((item) => (
          <NavItem Icon={item.Icon} title={item.title} />
        ))}
      </div>

      <div className="flex items-center gap-4 border-t-[1px] border-t-gray-800 p-4">
        <Avatar
          imageUrl={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7J9KMrDp7vkU9Zl5h4J9VyIvxVh-DsaQc-x-Bj5SST2yMaFeW2B7ided9BG5uX_FVTMg&usqp=CAU"
          }
        />

        <div>
          <p className="text-lg text-gray-300 font-extrabold">Mike Jack</p>
          <button className="text-sm text-yellow-400">Sign Out</button>
        </div>
      </div>
    </div>
  );
};

export default LeftNav;
