import React from "react";
import { BsThreeDots } from "react-icons/bs";

interface LoginCardProps {
    Login_Email: string;
    Login_Password: string;
}

const LoginCard: React.FC<LoginCardProps> = (props) => {
  const { Login_Email, Login_Password} = props;

  return (
      <div className="bg-white rounded-lg flex-[0.3] p-4">
        <div className="flex justify-between">
          <p className="text-sm text-gray-700 mb-1">{Login_Email}</p>
          <BsThreeDots />
        </div>

        <div className="flex justify-between items-end">

            <p className="text-sm text-gray-500">********{Login_Password}</p>
          </div>

      </div>
  );
};

export default LoginCard;
