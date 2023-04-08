import React from "react";
import { BsThreeDots } from "react-icons/bs";

interface IncomeCardProps {
  title: string;
  price: number;
  percentage: number;
}

const IncomeCard: React.FC<IncomeCardProps> = (props) => {
  const { title, price, percentage } = props;

  return (
    <div className="bg-white rounded-lg flex-[0.3] p-4">
      <div className="flex justify-between">
        <p className="text-sm text-gray-700 mb-1">{title}</p>
        <BsThreeDots />
      </div>

      <div className="flex justify-between items-end">
        <div className="flex flex-col gap-2">
          <p className="text-2xl font-bold">${price}</p>
          <p className="text-sm text-gray-500">This week's {title.toLowerCase()}</p>
        </div>
        <div className="rounded-xl bg-green-300 p-1">
          {percentage > 0 ? "+" : ""}
          {percentage}%
        </div>
      </div>
    </div>
  );
};

export default IncomeCard;
