import React from "react";
import Dashboard from "./Dashboard";
import LeftNav from "../components/cards/DashBoardConponents/LeftNav";

interface MainProps {}

const Main: React.FC<MainProps> = ({}) => {
  return (
    <div className="flex">
      <LeftNav />
      <Dashboard />
    </div>
  );
};

export default Main;
