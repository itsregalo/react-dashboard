import React from "react";
import DashboardStatsGrid from "./DashboardStatsGrid";
import TransactionChart from "./TransactionChart";

export default function Dashboard() {
    return (
        <div className="flex flex-col gap-4 w-full">
            <DashboardStatsGrid />
            <TransactionChart />
        </div>
    );
}