import React from "react";
import { MdEmail } from "react-icons/md";
import { auth } from "../firebase";

interface ProfileProps {}

const Profile: React.FC<ProfileProps> = ({}) => {
  const user = auth.currentUser;

  return (
    <div className="flex-[0.8] p-8">
      <div className="bg-gradient-to-r from-[#F8E1AB] to-[#F6D1C9] w-full h-64 rounded-md relative mb-20">
        <img
          src={user?.photoURL || ""}
          alt="profile"
          className="absolute -bottom-16 left-6 rounded-full h-36 w-36 object-cover border-8 border-white"
        />
      </div>

      <div className="p-10">
        <p className="text-3xl font-bold mb-4">{user?.displayName}</p>
        <div className="flex gap-3 items-center">
          <MdEmail size={28} />
          <p className="text-grey-700">{user?.email}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
