import React from "react";
import TransactionRow from "./common/TransactionRow";

interface TransactionHistoryProps {}

const plaid = [
  {
    logo: "https://pbs.twimg.com/profile_images/1455173719027068929/I6ffWyrd_400x400.jpg",
    name: "Capital One",
    amount: 124.05,
    time: "22:10:23",
    date: "Saturday, 8 April 2023",
  },
  {
    logo: "https://pbs.twimg.com/profile_images/1455173719027068929/I6ffWyrd_400x400.jpg",
    name: "Capital One",
    amount: 124.05,
    time: "22:10:23",
    date: "Saturday, 8 April 2023",
  },
  {
    logo: "https://pbs.twimg.com/profile_images/1455173719027068929/I6ffWyrd_400x400.jpg",
    name: "Capital One",
    amount: 124.05,
    time: "22:10:23",
    date: "Saturday, 8 April 2023",
  },
  {
    logo: "https://pbs.twimg.com/profile_images/1455173719027068929/I6ffWyrd_400x400.jpg",
    name: "Capital One",
    amount: 124.05,
    time: "22:10:23",
    date: "Saturday, 8 April 2023",
  },
];

const TransactionHistory: React.FC<TransactionHistoryProps> = ({}) => {
  return (
    <div className="bg-white pt-8 pb-1 px-4 rounded-lg">
      <h3 className="font-bold text-lg mb-4">Transaction History</h3>
      <div className="max-h-[calc(100vh-470px)] overflow-auto">
        <table className="w-full mb-8 border-separate" style={{ borderSpacing: "0 1em" }}>
          <tbody>
            {plaid.map((transaction) => (
              <TransactionRow transaction={transaction} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionHistory;
