import React from "react";
import LoginCard from "../components/cards/LoginPage/LoginCard";

interface DashboardProps {}

const Dashboard: React.FC<DashboardProps> = ({}) => {
    return (
        <div className="p-6 flex-[0.8] bg-[#f3f3f3]">
            <div className="flex items-stretch gap-4">
                <LoginCard Login_Email="Example@email.com" Login_Password="******"/>
            </div>
        </div>
    );
};

