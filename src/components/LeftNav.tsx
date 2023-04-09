import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineBank } from "react-icons/ai";
import { GiProgression } from "react-icons/gi";
import { GoSettings } from "react-icons/go";
import NavItem from "./NavItem";
import Avatar from "./Avatar";
import { logout } from "../utilities/firebaseAuth";
import useUser from "../hooks/useUser";

interface LeftNavProps {}

const navItems = [
  { title: "Banking", Icon: AiOutlineBank },
  { title: "Investment", Icon: GiProgression },
  { title: "Settings", Icon: GoSettings },
];

const LeftNav: React.FC<LeftNavProps> = ({}) => {
  const { user } = useUser();

  return (
    <div className="flex flex-col justify-between h-screen flex-[0.2] bg-black text-white">
      <div className="p-4">
        <Link to="/">
          <p className="text-lg font-bold mb-4">BitCamp Saving</p>
        </Link>

        {navItems.map((item) => (
          <NavItem Icon={item.Icon} title={item.title} />
        ))}
      </div>

      <div className="flex items-center gap-4 border-t-[1px] border-t-gray-800 p-4">
        <Link to="/profile">
          <Avatar imageUrl={user?.photoURL || ""} />
        </Link>

        <div>
          <p className="text-lg text-gray-300 font-extrabold">{user?.displayName}</p>

          <button onClick={logout} className="text-sm text-yellow-400">
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default LeftNav;
