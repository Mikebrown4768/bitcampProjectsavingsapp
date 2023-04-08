import React from "react";
import BankCard from "../components/cards/DashBoardConponents/BankCard";
    import IncomeCard from "../components/cards/DashBoardConponents/IncomeCard";

interface DashboardProps {}

const Dashboard: React.FC<DashboardProps> = ({}) => {
  return (
    <div className="p-6 flex-[0.8] bg-[#f3f3f3]">
      <div className="flex items-stretch gap-4">
        <BankCard />
        <IncomeCard title="Income" price={62245.89} percentage={+12.23} />
        <IncomeCard title="Expense" price={70268.67} percentage={-15.73} />
      </div>
    </div>
  );
};

export default Dashboard;
