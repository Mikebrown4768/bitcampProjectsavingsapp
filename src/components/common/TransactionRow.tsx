import React from "react";
import Avatar from "../Avatar";

export interface Transaction {
  name: string;
  amount: number;
  time: string;
  date: string;
}

interface TransactionRowProps {
  transaction: Transaction;
}

const TransactionRow: React.FC<TransactionRowProps> = (props) => {
  const { name, amount, time, date } = props.transaction;

  return (
    <tr className="">
      <td className="w-1/4">
        <div className="flex gap-4 items-center">
          <Avatar imageUrl="https://pbs.twimg.com/profile_images/1455173719027068929/I6ffWyrd_400x400.jpg" />
          <p className="font-bold">{name}</p>
        </div>
      </td>
      <td className="w-1/4 text-gray-700">${amount}</td>
      <td className="w-1/4 text-gray-700">{time}</td>
      <td className="w-1/4 text-gray-700">{date}</td>
    </tr>
  );
};

export default TransactionRow;
