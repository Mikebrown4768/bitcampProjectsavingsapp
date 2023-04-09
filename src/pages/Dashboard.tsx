import { FC } from "react";
import BankCard from "../components/cards/BankCard";
import IncomeCard from "../components/cards/IncomeCard";
import useDashboard from "../hooks/useDashboard";
import ProgressCard from "../components/cards/ProgressCard";
import TransactionHistory from "../components/TransactionHistory";

interface DashboardProps {}

const Dashboard: FC<DashboardProps> = ({}) => {
  useDashboard();

  return (
    <div className="p-6 flex-[0.8] bg-[#f3f3f3]">
      <div className="flex items-stretch gap-4">
        <BankCard />
        <IncomeCard title="Income" price={62245.89} percentage={+12.23} />
        <IncomeCard title="Expense" price={70268.67} percentage={-15.73} />
      </div>

      <div className="flex items-stretch gap-4 my-8">
        <ProgressCard />
      </div>

      <TransactionHistory />
    </div>
  );
};

export default Dashboard;
