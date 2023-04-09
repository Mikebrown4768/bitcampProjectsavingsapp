import React from "react";

interface CircularProgressBarProps {
  value: number;
}

const CircularProgressBar: React.FC<CircularProgressBarProps> = ({ value }) => {
  const radius = 30;
  const circumference = 2 * Math.PI * radius;

  return (
    <div className="relative">
      <svg className="w-20 h-20 transform -rotate-90">
        <circle
          className="text-gray-300"
          stroke-width="5"
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx="40"
          cy="40"
        />
        <circle
          className="text-blue-600"
          strokeWidth="5"
          strokeDasharray={circumference}
          strokeDashoffset={circumference - (value / 100) * circumference}
          stroke-linecap="round"
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx="40"
          cy="40"
        />
      </svg>
      <span className="text-blue-700 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        {value}%
      </span>
    </div>
  );
};

export default CircularProgressBar;
