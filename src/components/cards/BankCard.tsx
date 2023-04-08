import React from "react";
import { AiFillDollarCircle } from "react-icons/ai";

interface BankCardProps {}

const BankCard: React.FC<BankCardProps> = ({}) => {
  return (
    <div className="flex items-center justify-between flex-[0.4] text-white p-4 rounded-lg bg-gradient-to-r from-blue-800 to-blue-500">
      <div>
        <div className="mb-8">
          <p className="text-sm text-gray-300 mb-1">Balance</p>
          <p className="font-extrabold text-xl">$ 1,000,245.89</p>
        </div>

        <div className="flex items-center gap-2">
          <p className="font-bold">This month:</p>
          <p>$ 2,394.89</p>
        </div>
      </div>

      <AiFillDollarCircle size={64} />
    </div>
  );
};

export default BankCard;
