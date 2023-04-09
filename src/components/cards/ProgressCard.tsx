import React from "react";
import CircularProgressBar from "../common/CircularProgressBar";

interface ProgressCardProps {}

const ProgressCard: React.FC<ProgressCardProps> = ({}) => {
  return (
    <div className="flex items-center gap-6 p-4 rounded-lg bg-white">
      <div>
        <p>Progress</p>
        <CircularProgressBar value={40} />
      </div>
      <div>
        <div className="flex items-center gap-2">
          <p className="text-blue-500 text-lg font-bold">Goal:</p>
          <p>$100.00</p>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-blue-500 text-lg font-bold">Archieved:</p>
          <p>$40.00</p>
        </div>
      </div>
    </div>
  );
};

export default ProgressCard;
