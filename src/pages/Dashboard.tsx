import React from "react";

interface DashboardProps {}

const Dashboard: React.FC<DashboardProps> = ({}) => {
  return (
      <>
          <div>
              <h6>Dashboard</h6>
          </div>

          <ul>
              <li>Bank</li>
              <li>Investments</li>
              <li>Settings</li>
          </ul>

      </>

  );
};

export default Dashboard;
